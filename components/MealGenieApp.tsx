'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { MEALGENIE_APP_INNER_HTML } from '@/lib/mealgenie-markup';
import { bindMealGenieGlobals, initMealGenieApp } from '@/lib/mealgenie-app';
import { HeaderAuthControls } from '@/components/auth/header-auth-controls';

export default function MealGenieApp() {
  const [authSlot, setAuthSlot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    bindMealGenieGlobals();
    initMealGenieApp();
    setAuthSlot(document.getElementById('headerAuthSlot'));
  }, []);

  return (
    <>
      <div
        className="app"
        dangerouslySetInnerHTML={{ __html: MEALGENIE_APP_INNER_HTML }}
      />
      {authSlot ? createPortal(<HeaderAuthControls />, authSlot) : null}
    </>
  );
}
