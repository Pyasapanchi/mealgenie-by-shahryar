/** Publishable key is available on client and server. */
export function isClerkConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
}

/** Clerk UI components require provider context, so hide them when auth is disabled. */
export function canRenderClerkComponents(): boolean {
  return isClerkConfigured();
}

/** Both keys required for middleware and server auth routes. */
export function isClerkFullyConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY,
  );
}

/** Server-side Clerk middleware must stay disabled until both auth keys are available. */
export function canUseClerkMiddleware(): boolean {
  return isClerkFullyConfigured();
}
