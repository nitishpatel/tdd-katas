const romanmap: Record<number, string> = {
  1000: "M",
  900:"CM",
  500: "D",
  400:"CD",
  100: "C",
  90:"XC",
  50: "L",
  40:"XL",
  10: "X",
  9:"IX",
  5: "V",
  4:"IV",
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

export const toNumber = (input:string):string =>{
  return "1";
}
