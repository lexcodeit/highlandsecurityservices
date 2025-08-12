export function generateNumericCode(length: number) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array); // Web Crypto API
    return Array.from(array, num => (num % 10).toString()).join("");
}
