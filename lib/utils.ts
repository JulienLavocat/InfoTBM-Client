/**
 * Check if all properties of b are included in a, and their value is the same
 * @param a Object a
 * @param b	Object b
 */
export function compareProperties(a: any, b: any) {
	const keys = Object.keys(b);
	for (let k of keys) if (a[k] !== b[k]) return false;
	return true;
}
