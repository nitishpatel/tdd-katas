const graphemesOf = (text: string): string[] => {
  const segmenter = new (Intl as any).Segmenter("en", { granularity: "grapheme" });
  return Array.from(segmenter.segment(text.normalize("NFC")), (s: any) => s.segment);
};

const reverseGraphemes = (text: string): string =>
  graphemesOf(text).reverse().join("");

const cleanup = (text: string): string =>
  text
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\p{P}\s]/gu, "");

export const isPalindrome = (input: string): boolean => {
  const normalized = cleanup(input);
  const reversed = reverseGraphemes(normalized);
  return normalized === reversed;
};
