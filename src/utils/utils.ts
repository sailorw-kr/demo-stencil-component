export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const optionalPropArg = 
(
  prop: string,
  args: { [key: string]: string}
): string => args[prop] && `${prop}="${args[prop]}"`