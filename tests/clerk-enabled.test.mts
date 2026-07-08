import assert from 'node:assert/strict';
import test from 'node:test';
import * as clerkEnabled from '../lib/clerk-enabled.ts';

function withPublishableKey(
  value: string | undefined,
  run: () => void,
) {
  const previous = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (value === undefined) {
    delete process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  } else {
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = value;
  }

  try {
    run();
  } finally {
    if (previous === undefined) {
      delete process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    } else {
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = previous;
    }
  }
}

test('disables Clerk UI components when no publishable key is configured', () => {
  assert.equal(typeof clerkEnabled.canRenderClerkComponents, 'function');

  withPublishableKey(undefined, () => {
    assert.equal(clerkEnabled.canRenderClerkComponents(), false);
  });
});

test('enables Clerk UI components when a publishable key is configured', () => {
  assert.equal(typeof clerkEnabled.canRenderClerkComponents, 'function');

  withPublishableKey('pk_test_example', () => {
    assert.equal(clerkEnabled.canRenderClerkComponents(), true);
  });
});
