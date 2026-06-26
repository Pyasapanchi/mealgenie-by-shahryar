import type { ClerkAppearanceTheme } from '@clerk/shared/types';

const GREEN = '#22C55E';
const GREEN_DARK = '#16A34A';
const BORDER = '#E5E7EB';

/** Shared Clerk theme aligned with MealGenie colors — used only on auth/account routes. */
export const clerkAppearance: ClerkAppearanceTheme = {
  variables: {
    colorPrimary: GREEN,
    borderRadius: '12px',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  elements: {
    card: {
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      border: `1px solid ${BORDER}`,
    },
    formButtonPrimary: {
      backgroundColor: GREEN,
      '&:hover': {
        backgroundColor: GREEN_DARK,
      },
    },
    footerActionLink: {
      color: GREEN_DARK,
    },
    identityPreviewEditButton: {
      color: GREEN_DARK,
    },
    avatarBox: {
      width: '36px',
      height: '36px',
    },
  },
};

export const authPageAppearance: ClerkAppearanceTheme = {
  ...clerkAppearance,
  elements: {
    ...clerkAppearance.elements,
    rootBox: {
      width: '100%',
      maxWidth: '420px',
    },
  },
};

export const AUTH_PAGE_BG = '#FEF9F3';
