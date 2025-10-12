const ROMAN: Array<[string, number]> = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const ROMAN_TO_VALUE = new Map(ROMAN);

export function toRoman(input: string | number): string {
  const n = typeof input === "number" ? input : parseInt(input, 10);

  let remaining = n;
  let result = "";

  for (const [sym, val] of ROMAN) {
    while (remaining >= val) {
      result += sym;
      remaining -= val;
    }
  }

  return result;
}

export function fromRoman(roman: string): number {
  const s = roman.toUpperCase();
  if (/[^IVXLCDM]/.test(s)) {
    throw new Error("Invalid Roman numeral: contains illegal characters");
  }

  let i = 0;
  let total = 0;

  while (i < s.length) {
    const two = s.substring(i, i + 2);
    if (two.length === 2 && ROMAN_TO_VALUE.has(two)) {
      total += ROMAN_TO_VALUE.get(two)!;
      i += 2;
      continue;
    }

    const one = s[i];
    if (!ROMAN_TO_VALUE.has(one)) {
      throw new Error(`Invalid Roman numeral at position ${i}: ${one}`);
    }
    total += ROMAN_TO_VALUE.get(one)!;
    i += 1;
  }

  return total;
}
