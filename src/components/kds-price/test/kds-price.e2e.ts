import { newE2EPage } from '@stencil/core/testing';

describe('kds-price', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kds-price></kds-price>');

    const element = await page.find('kds-price');
    expect(element).toHaveClass('hydrated');
  });
});
