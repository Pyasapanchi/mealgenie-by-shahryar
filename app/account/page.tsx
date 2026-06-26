import dynamic from 'next/dynamic';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { isClerkFullyConfigured } from '@/lib/clerk-enabled';

const AccountPanel = dynamic(
  () => import('@/components/auth/account-panel').then((mod) => mod.AccountPanel),
  { loading: () => null },
);

export default async function AccountPage() {
  if (!isClerkFullyConfigured()) {
    redirect('/');
  }

  const { userId } = await auth();
  if (!userId) {
    redirect('/sign-in');
  }

  return <AccountPanel />;
}
