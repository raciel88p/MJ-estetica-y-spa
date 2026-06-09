import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, gcTime: 1000 * 60 * 30 },
  },
});

export function withAppProviders<T extends object>(Component: React.ComponentType<T>) {
  return function WrappedComponent(props: T) {
    return (
      <QueryClientProvider client={queryClient}>
        <Component {...props} />
        <Toaster />
      </QueryClientProvider>
    );
  };
}
