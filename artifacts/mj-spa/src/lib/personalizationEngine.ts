export type AgeBracket = 'young' | 'mature' | 'advanced'; // young: 18-29, mature: 30-45, advanced: 46+
export type CategoryInterest = 'medicina-estetica' | 'faciales' | 'reductivos' | 'corporales' | 'spa';

export interface AnalyticsEvent {
  eventType: 'impression' | 'click' | 'email_captured' | 'age_selected' | 'page_view';
  target: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

export interface UserPersonalizationProfile {
  categoryScores: Record<CategoryInterest, number>;
  topCategory: CategoryInterest;
  inferredAgeBracket: AgeBracket;
  explicitAgeBracket?: AgeBracket;
  userEmail?: string;
  totalPageViews: number;
  lastVisitedPath: string;
  lastVisitedAt: number;
  analyticsEvents: AnalyticsEvent[];
}

const STORAGE_KEY = 'marysart_personalization_profile_v1';

const DEFAULT_SCORES: Record<CategoryInterest, number> = {
  'medicina-estetica': 0,
  'faciales': 0,
  'reductivos': 0,
  'corporales': 0,
  'spa': 0,
};

export function getInitialProfile(): UserPersonalizationProfile {
  if (typeof window === 'undefined') {
    return {
      categoryScores: { ...DEFAULT_SCORES },
      topCategory: 'faciales',
      inferredAgeBracket: 'young',
      totalPageViews: 0,
      lastVisitedPath: '/',
      lastVisitedAt: Date.now(),
      analyticsEvents: [],
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...parsed,
        categoryScores: { ...DEFAULT_SCORES, ...(parsed.categoryScores || {}) },
        analyticsEvents: parsed.analyticsEvents || [],
      };
    }
  } catch (e) {
    console.warn('Error reading personalization profile from localStorage', e);
  }

  return {
    categoryScores: { ...DEFAULT_SCORES },
    topCategory: 'faciales',
    inferredAgeBracket: 'young',
    totalPageViews: 0,
    lastVisitedPath: typeof window !== 'undefined' ? window.location.pathname : '/',
    lastVisitedAt: Date.now(),
    analyticsEvents: [],
  };
}

export function saveProfile(profile: UserPersonalizationProfile): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.warn('Error saving personalization profile to localStorage', e);
  }
}

export function inferCategoryAndAgeFromPath(path: string): { category?: CategoryInterest; ageWeight?: AgeBracket } {
  const cleanPath = path.toLowerCase();

  if (cleanPath.includes('medicina-estetica') || cleanPath.includes('botox') || cleanPath.includes('hilos') || cleanPath.includes('armonizacion') || cleanPath.includes('trasplante-capilar') || cleanPath.includes('medical-aesthetic')) {
    return { category: 'medicina-estetica', ageWeight: 'mature' };
  }
  if (cleanPath.includes('reductivos') || cleanPath.includes('hidrolipoclasia') || cleanPath.includes('anticelulitis') || cleanPath.includes('carboxiterapia') || cleanPath.includes('iron-beauty')) {
    return { category: 'reductivos', ageWeight: 'mature' };
  }
  if (cleanPath.includes('corporal') || cleanPath.includes('masajes-corporales') || cleanPath.includes('levantamiento') || cleanPath.includes('tensado-corporal')) {
    return { category: 'corporales', ageWeight: 'mature' };
  }
  if (cleanPath.includes('spa') || cleanPath.includes('boda') || cleanPath.includes('parejas') || cleanPath.includes('embarazadas') || cleanPath.includes('relajante')) {
    return { category: 'spa', ageWeight: 'young' };
  }
  if (cleanPath.includes('facial') || cleanPath.includes('limpieza') || cleanPath.includes('acne') || cleanPath.includes('hydrafacial') || cleanPath.includes('ojeras')) {
    return { category: 'faciales', ageWeight: 'young' };
  }
  if (cleanPath.includes('tensado') || cleanPath.includes('antiage') || cleanPath.includes('rejuvenecimiento')) {
    return { category: 'medicina-estetica', ageWeight: 'advanced' };
  }

  return {};
}

export function trackPageView(path: string): UserPersonalizationProfile {
  const profile = getInitialProfile();
  const { category, ageWeight } = inferCategoryAndAgeFromPath(path);

  profile.totalPageViews += 1;
  profile.lastVisitedPath = path;
  profile.lastVisitedAt = Date.now();

  if (category) {
    profile.categoryScores[category] = (profile.categoryScores[category] || 0) + 1;
  }

  // Calculate top category
  let maxScore = -1;
  let topCat: CategoryInterest = profile.topCategory || 'faciales';
  for (const cat in profile.categoryScores) {
    const key = cat as CategoryInterest;
    if (profile.categoryScores[key] > maxScore) {
      maxScore = profile.categoryScores[key];
      topCat = key;
    }
  }
  profile.topCategory = topCat;

  // Infer age bracket based on visited pages and top category if explicit age not set
  if (!profile.explicitAgeBracket) {
    if (ageWeight) {
      if (ageWeight === 'advanced' || profile.categoryScores['medicina-estetica'] > 3) {
        profile.inferredAgeBracket = 'advanced';
      } else if (ageWeight === 'mature' || profile.categoryScores['reductivos'] + profile.categoryScores['corporales'] > 2) {
        profile.inferredAgeBracket = 'mature';
      } else {
        profile.inferredAgeBracket = 'young';
      }
    }
  }

  // Log page view event
  profile.analyticsEvents.push({
    eventType: 'page_view',
    target: path,
    timestamp: Date.now(),
    metadata: { topCategory: profile.topCategory, inferredAge: profile.inferredAgeBracket },
  });

  // Limit analytics history to last 50 events
  if (profile.analyticsEvents.length > 50) {
    profile.analyticsEvents = profile.analyticsEvents.slice(-50);
  }

  saveProfile(profile);
  return profile;
}

export function setExplicitAgeBracket(age: AgeBracket, email?: string): UserPersonalizationProfile {
  const profile = getInitialProfile();
  profile.explicitAgeBracket = age;
  if (email) {
    profile.userEmail = email;
    profile.analyticsEvents.push({
      eventType: 'email_captured',
      target: 'personalization_widget',
      timestamp: Date.now(),
      metadata: { email, ageBracket: age },
    });
  } else {
    profile.analyticsEvents.push({
      eventType: 'age_selected',
      target: 'personalization_widget',
      timestamp: Date.now(),
      metadata: { ageBracket: age },
    });
  }

  saveProfile(profile);
  return profile;
}

export function logAnalyticsEvent(eventType: AnalyticsEvent['eventType'], target: string, metadata?: Record<string, any>): UserPersonalizationProfile {
  const profile = getInitialProfile();
  profile.analyticsEvents.push({
    eventType,
    target,
    timestamp: Date.now(),
    metadata,
  });

  if (profile.analyticsEvents.length > 50) {
    profile.analyticsEvents = profile.analyticsEvents.slice(-50);
  }

  saveProfile(profile);
  return profile;
}
