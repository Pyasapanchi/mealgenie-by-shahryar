import Link from 'next/link';
import { AuthUserButton } from '@/components/auth/user-button';
import { SessionInfo } from '@/components/auth/session-info';
import styles from './account-panel.module.css';

export function AccountPanel() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <Link className={styles.brand} href="/">
          <span aria-hidden>🍳</span>
          <span>Meal Genie</span>
        </Link>
        <AuthUserButton />
      </div>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Your session</h2>
        <SessionInfo />
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Account management</h2>
        <p className={styles.hint}>
          Password reset, email verification, and Google sign-in are handled by
          Clerk. Use the account menu above to manage your profile and security
          settings.
        </p>
      </section>
    </div>
  );
}
