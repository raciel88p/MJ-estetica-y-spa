import { useState, useEffect, useCallback } from 'react';
import {
  UserPersonalizationProfile,
  getInitialProfile,
  trackPageView,
  setExplicitAgeBracket,
  logAnalyticsEvent,
  AgeBracket,
} from './personalizationEngine';

export function usePersonalization(currentPath?: string) {
  const [profile, setProfile] = useState<UserPersonalizationProfile>(() => getInitialProfile());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = currentPath || window.location.pathname;
      const updated = trackPageView(path);
      setProfile(updated);
    }
  }, [currentPath]);

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

  const activeAgeBracket = profile.explicitAgeBracket || profile.inferredAgeBracket;

  return {
    profile,
    activeAgeBracket,
    topCategory: profile.topCategory,
    updateAge,
    trackClick,
    trackImpression,
  };
}
