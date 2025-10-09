const romanmap: Record<number, string> = {
  1000: "M",
  500: "D",
  100: "C",
  50: "L",
  10: "X",
  5: "V",
  1: "I",
};

export const romannumeral = (input: string): string => {
  const number = parseInt(input);
  if (isNaN(number) || number <= 0) {
    throw new Error("Invalid input");
  }

  let result = "";
  let remaining = number;

  for (const value of Object.keys(romanmap).map(Number).sort((a, b) => b - a)) {
    while (remaining >= value) {
      result += romanmap[value];
      remaining -= value;
    }
  }

  return result;
};
