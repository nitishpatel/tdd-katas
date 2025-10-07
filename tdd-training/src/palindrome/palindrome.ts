const reverse = (input: string): string =>
  [...input.normalize('NFC')].reverse().join('');

const cleanup = (input: string): string =>
  input
    .normalize('NFC')           // use NFC consistently
    .toLowerCase()              // ok for most cases; use toLocaleLowerCase(locale) if needed
    .replace(/[\p{P}\p{S}\s]/gu, '');

export const isPalindrome = (input: string): boolean => {
  const cleanedInput = cleanup(input);
  const reversedInput = reverse(cleanedInput);
  console.log(`comparing ${cleanedInput} and ${reversedInput}`);
  return cleanedInput === reversedInput;
};
