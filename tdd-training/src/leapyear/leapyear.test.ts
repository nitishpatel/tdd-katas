import { describe, it, expect } from 'vitest';
import { isLeapYear } from './leapyear';

describe('Leap Year Kata', () => {
  it('returns true for 4 (divisible by 4)', () => {
    expect(isLeapYear(4)).toBe(true);
  });

  it('returns false for 100 (divisible by 100 but not 400)', () => {
    expect(isLeapYear(100)).toBe(false);
  });

  it('returns true for 400 (divisible by 400)', () => {
    expect(isLeapYear(400)).toBe(true);
  });

  it('returns correct result for years around leap boundary (1999–2001)', () => {
    expect(isLeapYear(1999)).toBe(false);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2001)).toBe(false);
  });

  it('throws error if input is not a positive integer', () => {
    // @ts-expect-error - invalid input
    expect(() => isLeapYear('2020')).toThrowError();
    expect(() => isLeapYear(-400)).toThrowError();
  });

  it('returns true for a typical leap year', () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(1600)).toBe(true);
    expect(isLeapYear(1996)).toBe(true);
  });
});
