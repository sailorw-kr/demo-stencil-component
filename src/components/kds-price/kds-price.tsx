import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'kds-price',
  styleUrl: 'kds-price.css',
})
 export class KdsPrice {
  @Prop() value: any = '';
  @Prop() quantity: string = '';
  @Prop() original: number;
  @Prop() compact?: boolean;
  // @Prop() className?: string;
  @Prop() relative?: boolean = false;
  @Prop() relativePrefix?: string = 'about';
  @Prop() relativePostfix?: string = 'each';

  render() {
    const { quantity, relative, value, original, relativePostfix } = this;
    const hasRelativeCopy = relative || quantity;
    const minus = '−'; // Use actual unicode minus so screen reader users hear proper word
    /** Determines if the price is negative when passed an object
     * @param {{
     *   dollars: number,
     *   cents: number,
     *   showMinus: boolean=,
     *   showOnlyCents: boolean=,
     * }} v - value prop object
     * @returns {boolean} True if price is negative, false otherwise
     */
    const hasNegativePrice = v => Number(v.dollars) < 0 || Number(v.cents) < 0 || v.showMinus;
    const formatPrice = v =>
      `${v < 0 ? minus : ''}${Math.abs(Number(v)).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}`;
    const absoluteNum = v => Math.abs(Number(v));
    const combinePrice = v => {
      const dollars = truncateDollars(absoluteNum(v.dollars));
      const cents = truncateCents(absoluteNum(v.cents));

      return `${hasNegativePrice(v) ? minus : ''}${dollars}.${cents < 10 ? '0' : ''}${cents}`;
    };

    const formatCentsOnly = v => `${hasNegativePrice(v) ? minus : ''}${truncateCents(absoluteNum(v.cents))}`;
    const formatWithCommas = n => n.toLocaleString('en-US');

    // We ONLY want to enable the new Price styling when passed an object
    const useAlternateStyle = value && typeof value === 'object' && Object.keys(value).length;

    // ONLY enable the new cents styling when asked
    const showOnlyCents = useAlternateStyle && value && value.dollars === 0 && value.showOnlyCents;

    const curPrice = useAlternateStyle ? (showOnlyCents ? formatCentsOnly(value) + '¢' : formatPrice(combinePrice(value))) : formatPrice(truncateFullPrice(value));
    console.log('curPrice', curPrice)
    // We ONLY want to enable the new Price styling when passed an object
    return (
      <data
        //@ts-ignore
        value={useAlternateStyle ? combinePrice(value) : truncateFullPrice(value)}
        typeof="Price"
      >
        <meta name="priceCurrency" content="USD" />
        {original || useAlternateStyle ? (
          <div>
            {useAlternateStyle ? (
              <mark class="kds-Price-promotional--decorated">
                <sup class="kds-Price-superscript">{showOnlyCents ? (hasNegativePrice(value) ? `${minus}` : '') : hasNegativePrice(value) ? `${minus}$` : '$'}</sup>
                <span class="kds-Price-promotional-dropCaps">
                  {showOnlyCents ? truncateCents(absoluteNum(value.cents)) : formatWithCommas(truncateDollars(absoluteNum(value.dollars)))}
                </span>
                <sup class="kds-Price-superscript">
                  {showOnlyCents ? (
                    '¢'
                  ) : (
                    <div>
                      <span class="screen-reader">.</span>
                      {/* !! Period added for benefit of screen reader users. Price read incorrectly by Voiceover otherwise */}
                      {`${absoluteNum(value.cents) < 10 ? '0' : ''}${truncateCents(absoluteNum(value.cents))}`}
                    </div>
                  )}
                </sup>
              </mark>
            ) : (
              <mark>
                {curPrice}
              </mark>
            )}
            
          </div>
        ) : (
          <span>
            {curPrice}
          </span>
        )}
        {hasRelativeCopy && (
          <span>
            &#x200b;{relativePostfix}&#x200b;
          </span>
        )}
        {quantity && (
          <small>
            {quantity}
          </small>
        )}
      </data>
    );
  }
}


//utils~~~~~~~~~~~~~

/** Truncates number to match first capturing group
 * @param {number | string} v - number, or string representation of an number
 * @param {number} pattern - regular expression
 * @returns {number | string} Number with desired pattern, type will match the type of the original value provided for v
 */
const truncate = (v: number | string, pattern: RegExp) : string | number => {
  const isNumber = typeof v === 'number'
  const numberAsString = isNumber ? v.toString() : v
  const patternMatches = numberAsString.match(pattern)

  let truncated = numberAsString

  if (patternMatches[2]) {
    truncated = patternMatches[1]
  }

  return isNumber ? Number(truncated) : truncated
}

/** Truncates number to up to 2 decimal places
 * @param {string} v - string representation of an number
 * @returns {string} Truncated string
 */
const truncateFullPrice = (v: number): string | number => truncate(v, /(^-?\d+(?:\.\d{0,2})?)(.*)/)


/** Truncates number to 0 decimal places
 * @param {string} v - string representation of an number
 * @returns {string} Truncated string
 */
const truncateDollars = (v) =>  truncate(v, /(^-?\d+)(.*)/)


/** Truncates number to upto 2 digits and 0 decimal places
 * @param {string} v - string representation of an number
 * @returns {string} Truncated string
 */
const truncateCents = (v)=> truncate(v, /(^-?\d{0,2})(.*)/)