import { newSpecPage } from '@stencil/core/testing';
import { KdsPrice } from '../kds-price';

describe('kds-price', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KdsPrice],
      html: `<kds-price></kds-price>`,
    });
    expect(page.root).toEqualHtml(`
      <kds-price>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kds-price>
    `);
  });
});
