'use client';

import { useEffect } from 'react';
import { MEALGENIE_APP_INNER_HTML } from '@/lib/mealgenie-markup';
import { bindMealGenieGlobals, initMealGenieApp } from '@/lib/mealgenie-app';

export default function MealGenieApp() {
  useEffect(() => {
    bindMealGenieGlobals();
    initMealGenieApp();
  }, []);

  return (
    <div
      className="app"
      dangerouslySetInnerHTML={{ __html: MEALGENIE_APP_INNER_HTML }}
    />
  );
}
