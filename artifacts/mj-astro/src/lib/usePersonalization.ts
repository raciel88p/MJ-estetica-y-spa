import { useState, useEffect, useCallback } from 'react';
import {
  getStoredProfile,
  trackPageView,
  setExplicitAgeBracket,
  logAnalyticsEvent,
  getDominantCategory,
  type UserPersonalizationProfile,
  type AgeBracket,
  type CategoryInterest,
  type AnalyticsEvent,
} from './personalizationEngine';

export function usePersonalization() {
  const [profile, setProfile] = useState<UserPersonalizationProfile>(() => getStoredProfile());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updated = trackPageView(window.location.pathname);
      setProfile(updated);
    }
  }, []);

  const updateAge = useCallback((age: AgeBracket, email?: string) => {
    const updated = setExplicitAgeBracket(age, email);
    setProfile(updated);
  }, []);

  const trackClick = useCallback((target: string, metadata?: Record<string, any>) => {
    const updated = logAnalyticsEvent('click', target, metadata);
    setProfile(updated);
  }, []);

  const trackImpression = useCallback((target: string, metadata?: Record<string, any>) => {
    const updated = logAnalyticsEvent('impression', target, metadata);
    setProfile(updated);
  }, []);

  const activeAgeBracket: AgeBracket = profile.explicitAgeBracket || profile.inferredAgeBracket || 'mature';
  const topCategory: CategoryInterest = getDominantCategory(profile.categoryScores);

  return {
    profile,
    activeAgeBracket,
    topCategory,
    updateAge,
    trackClick,
    trackImpression,
  };
}
