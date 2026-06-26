import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { isClerkFullyConfigured } from '@/lib/clerk-enabled';

const AccountPanel = dynamic(
  () => import('@/components/auth/account-panel').then((mod) => mod.AccountPanel),
  { loading: () => null },
);

export default function AccountPage() {
  if (!isClerkFullyConfigured()) {
    redirect('/');
  }

  return <AccountPanel />;
}
