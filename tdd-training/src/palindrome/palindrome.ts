const reverse = (input: string): string => {
  return input.split('').reverse().join('');
};

const cleanup = (input:string): string => {
  return input.toLowerCase().replace(/[^a-z0-9]/g, '');
}
export const isPalindrome = (input:string) => {
  const cleanedInput = cleanup(input);
  const reversedInput = reverse(cleanedInput);
  return cleanedInput === reversedInput;
};