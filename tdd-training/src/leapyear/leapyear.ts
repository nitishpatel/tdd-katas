export const isLeapYear = (year: number): boolean => {
  if (!Number.isInteger(year) || year < 0) {
    throw new Error('Year must be a positive integer');
  }

  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}
