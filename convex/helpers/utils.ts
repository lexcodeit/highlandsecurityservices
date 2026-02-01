export function generateNumericCode(length: number) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array); // Web Crypto API
    return Array.from(array, num => (num % 10).toString()).join("");
}

// A quick utility for that unique HSSL ID
export const generateBookingCode = () => {
    const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
    const year = new Date().getFullYear();
    return `HSSL-${randomStr}-${year}`;
};
