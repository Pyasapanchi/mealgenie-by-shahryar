import assert from 'node:assert/strict';
import test from 'node:test';
import * as clerkEnabled from '../lib/clerk-enabled.ts';

function withEnvVar(
  name: 'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY' | 'CLERK_SECRET_KEY',
  value: string | undefined,
  run: () => void,
) {
  const previous = process.env[name];

  if (value === undefined) {
    delete process.env[name];
  } else {
    process.env[name] = value;
  }

  try {
    run();
  } finally {
    if (previous === undefined) {
      delete process.env[name];
    } else {
      process.env[name] = previous;
    }
  }
}

test('disables Clerk UI components when no publishable key is configured', () => {
  assert.equal(typeof clerkEnabled.canRenderClerkComponents, 'function');

  withEnvVar('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY', undefined, () => {
    assert.equal(clerkEnabled.canRenderClerkComponents(), false);
  });
});

test('enables Clerk UI components when a publishable key is configured', () => {
  assert.equal(typeof clerkEnabled.canRenderClerkComponents, 'function');

  withEnvVar('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY', 'pk_test_example', () => {
    assert.equal(clerkEnabled.canRenderClerkComponents(), true);
  });
});

test('disables Clerk middleware when server auth keys are incomplete', () => {
  assert.equal(typeof clerkEnabled.canUseClerkMiddleware, 'function');

  withEnvVar('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY', undefined, () => {
    withEnvVar('CLERK_SECRET_KEY', 'sk_test_example', () => {
      assert.equal(clerkEnabled.canUseClerkMiddleware(), false);
    });
  });
});

test('enables Clerk middleware only when both auth keys are configured', () => {
  assert.equal(typeof clerkEnabled.canUseClerkMiddleware, 'function');

  withEnvVar('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY', 'pk_test_example', () => {
    withEnvVar('CLERK_SECRET_KEY', 'sk_test_example', () => {
      assert.equal(clerkEnabled.canUseClerkMiddleware(), true);
    });
  });
});
