'use client';

import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { clerkAppearance } from '@/lib/clerk-appearance';

export function HeaderAuthControls() {
  return (
    <>
      <Show when="signed-out">
        <SignInButton mode="redirect" forceRedirectUrl="/">
          <button type="button" className="header-btn auth-btn" aria-label="Sign in">
            👤
          </button>
        </SignInButton>
        <SignUpButton mode="redirect" forceRedirectUrl="/">
          <button type="button" className="header-btn auth-btn" aria-label="Sign up">
            ✨
          </button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton appearance={clerkAppearance} />
      </Show>
    </>
  );
}
