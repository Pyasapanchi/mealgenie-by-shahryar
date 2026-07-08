import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { PUBLIC_ROUTES } from '@/lib/auth/routes';
import { canUseClerkMiddleware } from '@/lib/clerk-enabled';

const isPublicRoute = createRouteMatcher([...PUBLIC_ROUTES]);

const authMiddleware = clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

function middlewareBypass() {
  return NextResponse.next();
}

export default canUseClerkMiddleware() ? authMiddleware : middlewareBypass;

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
