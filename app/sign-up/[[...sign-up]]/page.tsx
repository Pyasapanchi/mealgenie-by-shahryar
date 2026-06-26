import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { AuthShell } from '@/components/auth/auth-shell';
import { isClerkFullyConfigured } from '@/lib/clerk-enabled';

const SignUpForm = dynamic(
  () => import('@/components/auth/sign-up-form').then((mod) => mod.SignUpForm),
  { loading: () => null },
);

export default function SignUpPage() {
  if (!isClerkFullyConfigured()) {
    redirect('/');
  }

  return (
    <AuthShell
      title="Create account"
      subtitle="Join Meal Genie — save favorites and sync across devices"
      footerHref="/sign-in"
      footerLabel="Already have an account? Sign in"
    >
      <SignUpForm />
    </AuthShell>
  );
}
