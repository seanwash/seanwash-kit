/**
 * Formats a timestamp into a localized date string.
 *
 * @param timestamp - The timestamp to format, can be a number or a string that Date can parse.
 * @param locale - Optional. The locale string. Defaults to the user's current locale.
 * @param options - Optional. An object with options that provide additional formatting control.
 * @returns The formatted date string.
 */
export function formatLocaleDate(
	timestamp: number | string,
	locale: string = 'default',
	options?: Intl.DateTimeFormatOptions
): string {
	const date = new Date(timestamp);
	return new Intl.DateTimeFormat(locale, {
		...options,
		// Default options, which can be overridden by the user's options
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		...options
	}).format(date);
}
