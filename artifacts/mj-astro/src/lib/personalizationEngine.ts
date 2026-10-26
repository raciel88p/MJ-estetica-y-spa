export type AgeBracket = 'young' | 'mature' | 'advanced';
export type CategoryInterest = 'faciales' | 'reductivos' | 'medicina-estetica' | 'corporales' | 'spa';

export interface AnalyticsEvent {
  eventType: 'impression' | 'click' | 'email_captured' | 'age_selected' | 'page_view';
  target: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

export interface UserPersonalizationProfile {
  categoryScores: Record<CategoryInterest, number>;
  inferredAgeBracket: AgeBracket;
  explicitAgeBracket?: AgeBracket;
  email?: string;
  totalPageViews: number;
  eventsHistory: AnalyticsEvent[];
  lastUpdated: number;
}

const STORAGE_KEY = 'marysart_personalization_profile_v1';

const DEFAULT_SCORES: Record<CategoryInterest, number> = {
  faciales: 1,
  reductivos: 0,
  'medicina-estetica': 0,
  corporales: 0,
  spa: 0,
};

const DEFAULT_PROFILE: UserPersonalizationProfile = {
  categoryScores: { ...DEFAULT_SCORES },
  inferredAgeBracket: 'mature',
  totalPageViews: 0,
  eventsHistory: [],
  lastUpdated: Date.now(),
};

export function getStoredProfile(): UserPersonalizationProfile {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROFILE,
      ...parsed,
      categoryScores: {
        ...DEFAULT_SCORES,
        ...(parsed.categoryScores || {}),
      },
      eventsHistory: Array.isArray(parsed.eventsHistory) ? parsed.eventsHistory : [],
    };
  } catch (e) {
    return DEFAULT_PROFILE;
  }
}

export function syncThirdPartyAnalytics(profile: UserPersonalizationProfile): void {
  if (typeof window === 'undefined') return;

  const topCategory = getDominantCategory(profile.categoryScores);
  const activeAge = profile.explicitAgeBracket || profile.inferredAgeBracket || 'mature';

  // 1. Google Tag Manager / GA4 dataLayer event & user properties
  if (Array.isArray((window as any).dataLayer)) {
    (window as any).dataLayer.push({
      event: 'user_profile_updated',
      user_properties: {
        top_category: topCategory,
        age_bracket: activeAge,
        age_is_explicit: Boolean(profile.explicitAgeBracket),
        has_email: Boolean(profile.email),
        total_page_views: profile.totalPageViews,
      },
    });
  }

  // 2. Microsoft Clarity Custom Tags and Session Identification
  if (typeof (window as any).clarity === 'function') {
    try {
      (window as any).clarity('set', 'topCategory', topCategory);
      (window as any).clarity('set', 'ageBracket', activeAge);
      (window as any).clarity('set', 'ageIsExplicit', String(Boolean(profile.explicitAgeBracket)));
      if (profile.email) {
        (window as any).clarity('identify', profile.email);
      }
    } catch (e) {
      // Clarity safe fallback
    }
  }
}

export function saveProfile(profile: UserPersonalizationProfile): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    syncThirdPartyAnalytics(profile);
  } catch (e) {
    // Ignore storage quota errors
  }
}

export function getDominantCategory(scores: Record<CategoryInterest, number>): CategoryInterest {
  let highestCategory: CategoryInterest = 'faciales';
  let maxScore = -1;
  const categories: CategoryInterest[] = ['faciales', 'reductivos', 'medicina-estetica', 'corporales', 'spa'];

  for (const cat of categories) {
    const score = scores[cat] || 0;
    if (score > maxScore) {
      maxScore = score;
      highestCategory = cat;
    }
  }

  return highestCategory;
}

export function inferCategoryFromPath(path: string): CategoryInterest | null {
  const normalized = path.toLowerCase();

  if (normalized.includes('medicina-estetica') || normalized.includes('botox') || normalized.includes('hilos') || normalized.includes('adn-salmon') || normalized.includes('harmonization') || normalized.includes('medical')) {
    return 'medicina-estetica';
  }
  if (normalized.includes('reductiv') || normalized.includes('anticelulitis') || normalized.includes('carboxiterapia') || normalized.includes('weight-loss')) {
    return 'reductivos';
  }
  if (normalized.includes('spa') || normalized.includes('masaje') || normalized.includes('parejas') || normalized.includes('embarazadas') || normalized.includes('boda') || normalized.includes('aromaterapia')) {
    return 'spa';
  }
  if (normalized.includes('corporal') || normalized.includes('vendas-frias') || normalized.includes('post-operatorio') || normalized.includes('body')) {
    return 'corporales';
  }
  if (normalized.includes('facial') || normalized.includes('microagujas') || normalized.includes('microdermoabrasion') || normalized.includes('peeling') || normalized.includes('limpieza') || normalized.includes('hollywood')) {
    return 'faciales';
  }

  return null;
}

export function trackPageView(path: string): UserPersonalizationProfile {
  const profile = getStoredProfile();
  profile.totalPageViews += 1;
  profile.lastUpdated = Date.now();

  const detectedCategory = inferCategoryFromPath(path);
  if (detectedCategory) {
    profile.categoryScores[detectedCategory] = (profile.categoryScores[detectedCategory] || 0) + 2;

    if (!profile.explicitAgeBracket) {
      if (detectedCategory === 'medicina-estetica') {
        profile.inferredAgeBracket = 'advanced';
      } else if (detectedCategory === 'reductivos' || detectedCategory === 'faciales') {
        profile.inferredAgeBracket = 'young';
      } else {
        profile.inferredAgeBracket = 'mature';
      }
    }
  }

  const pageViewEvent: AnalyticsEvent = {
    eventType: 'page_view',
    target: path,
    timestamp: Date.now(),
  };

  profile.eventsHistory = [pageViewEvent, ...profile.eventsHistory].slice(0, 50);

  saveProfile(profile);
  return profile;
}

export function setExplicitAgeBracket(age: AgeBracket, email?: string): UserPersonalizationProfile {
  const profile = getStoredProfile();
  profile.explicitAgeBracket = age;
  if (email) {
    profile.email = email;
  }
  profile.lastUpdated = Date.now();

  const ageEvent: AnalyticsEvent = {
    eventType: 'age_selected',
    target: age,
    timestamp: Date.now(),
    metadata: { email },
  };

  profile.eventsHistory = [ageEvent, ...profile.eventsHistory].slice(0, 50);

  saveProfile(profile);
  return profile;
}

export function logAnalyticsEvent(
  eventType: AnalyticsEvent['eventType'],
  target: string,
  metadata?: Record<string, any>
): UserPersonalizationProfile {
  const profile = getStoredProfile();
  profile.lastUpdated = Date.now();

  const event: AnalyticsEvent = {
    eventType,
    target,
    timestamp: Date.now(),
    metadata,
  };

  profile.eventsHistory = [event, ...profile.eventsHistory].slice(0, 50);

  saveProfile(profile);
  return profile;
}
