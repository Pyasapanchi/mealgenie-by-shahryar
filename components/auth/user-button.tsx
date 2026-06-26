'use client';

import { UserButton } from '@clerk/nextjs';
import { clerkAppearance } from '@/lib/clerk-appearance';

export function AuthUserButton() {
  return <UserButton appearance={clerkAppearance} />;
}
