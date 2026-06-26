'use client';

import { SignIn } from '@clerk/nextjs';
import { authPageAppearance } from '@/lib/clerk-appearance';

export function SignInForm() {
  return (
    <SignIn
      appearance={authPageAppearance}
      routing="path"
      path="/sign-in"
      signUpUrl="/sign-up"
      fallbackRedirectUrl="/account"
    />
  );
}
