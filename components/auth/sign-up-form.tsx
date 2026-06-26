'use client';

import { SignUp } from '@clerk/nextjs';
import { authPageAppearance } from '@/lib/clerk-appearance';

export function SignUpForm() {
  return (
    <SignUp
      appearance={authPageAppearance}
      routing="path"
      path="/sign-up"
      signInUrl="/sign-in"
      fallbackRedirectUrl="/account"
    />
  );
}
