/** Routes accessible without signing in. The main app stays public for pixel-perfect parity. */
export const PUBLIC_ROUTES = [
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
] as const;

export type PublicRoutePattern = (typeof PUBLIC_ROUTES)[number];
