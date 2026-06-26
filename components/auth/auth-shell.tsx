import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './auth-shell.module.css';

type AuthShellProps = {
  children: ReactNode;
  title: string;
  subtitle?: string;
  footerHref?: string;
  footerLabel?: string;
};

export function AuthShell({
  children,
  title,
  subtitle,
  footerHref,
  footerLabel,
}: AuthShellProps) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <span className={styles.logo} aria-hidden>
          🍳
        </span>
        <h1 className={styles.title}>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </header>
      <div className={styles.content}>{children}</div>
      {footerHref && footerLabel ? (
        <footer className={styles.footer}>
          <Link className={styles.footerLink} href={footerHref}>
            {footerLabel}
          </Link>
        </footer>
      ) : null}
    </div>
  );
}
