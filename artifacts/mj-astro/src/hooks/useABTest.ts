import { useState, useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export type ABVariant = "A" | "B";

interface ABTestConfig {
  testName: string;
  variants: { A: string; B: string };
}

function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }
}

function assignVariant(testName: string): ABVariant {
  if (typeof window === "undefined") {
    return "A";
  }
  const key = `ab_${testName}`;
  const stored = localStorage.getItem(key);
  if (stored === "A" || stored === "B") return stored;
  const variant: ABVariant = Math.random() < 0.5 ? "A" : "B";
  localStorage.setItem(key, variant);
  pushDataLayer({
    event: "ab_test_assigned",
    ab_test_name: testName,
    ab_test_variant: variant,
  });
  return variant;
}

export function useABTest(config: ABTestConfig): {
  variant: ABVariant;
  value: string;
  trackConversion: (label?: string) => void;
} {
  const [variant, setVariant] = useState<ABVariant>("A");

  useEffect(() => {
    setVariant(assignVariant(config.testName));
  }, [config.testName]);

  const value = config.variants[variant];

  function trackConversion(label = "click") {
    pushDataLayer({
      event: "ab_test_conversion",
      ab_test_name: config.testName,
      ab_test_variant: variant,
      ab_test_label: label,
    });
  }

  return { variant, value, trackConversion };
}
