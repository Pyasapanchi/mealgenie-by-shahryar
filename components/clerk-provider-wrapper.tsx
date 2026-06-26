'use client';

import { ClerkProvider } from '@clerk/nextjs';
import type { ReactNode } from 'react';
import { isClerkConfigured } from '@/lib/clerk-enabled';

type ClerkProviderWrapperProps = {
  children: ReactNode;
};

export function ClerkProviderWrapper({ children }: ClerkProviderWrapperProps) {
  if (!isClerkConfigured()) {
    return children;
  }

  return <ClerkProvider>{children}</ClerkProvider>;
}
