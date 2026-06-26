'use client';

import { useUser } from '@clerk/nextjs';

export function SessionInfo() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <p>Loading session…</p>;
  }

  if (!isSignedIn || !user) {
    return <p>No active session.</p>;
  }

  const email = user.primaryEmailAddress?.emailAddress ?? '—';
  const verified = user.primaryEmailAddress?.verification?.status === 'verified';

  return (
    <dl>
      <dt>Name</dt>
      <dd>{user.fullName ?? '—'}</dd>
      <dt>Email</dt>
      <dd>{email}</dd>
      <dt>Email verified</dt>
      <dd>{verified ? 'Yes' : 'Pending'}</dd>
      <dt>Session</dt>
      <dd>Active (managed by Clerk)</dd>
    </dl>
  );
}
