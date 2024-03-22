const allowedNumbers = ['013', '015', '016', '017', '018', '019'];

export function isValidNumber(number: string) {
  if (number.length !== 11) return false;
  if (!allowedNumbers.includes(number.slice(0, 3))) return false;

  return true;
}
