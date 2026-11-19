import { test as base, expect } from '@playwright/test';
import { Pages } from '../pages/pages';

type Fixtures = {
  pages: ReturnType<typeof Pages>;
};

export const test = base.extend<Fixtures>({
  pages: async ({ page }, use) => {
    await use(Pages(page));
  },
});

export { expect };
