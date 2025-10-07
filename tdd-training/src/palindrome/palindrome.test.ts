import { describe, it, expect } from 'vitest';
import { isPalindrome } from './palindrome';

describe("isPalindrome", () => {
  // zero
  it("empty string is an palindrome", () => {
    expect(isPalindrome("")).toBe(true);
  });

  // one
  it("string of length 1 is an palindrome", () => {
    expect(isPalindrome("a")).toBe(true);

  });

  // many
  it("returns true for 'aa'", () => {
    expect(isPalindrome("aa")).toBe(true);
  });

  it("returns false for 'ab'", () => {
    expect(isPalindrome("ab")).toBe(false);
  });

  // boundaries
  it("returns true for mixed-case valid palindrome 'Aba'", () => {
    expect(isPalindrome("Aba")).toBe(true);
  });
  it("returns true for valid palindrome with punctuations 'Aba!", () => {
    expect(isPalindrome("Aba!")).toBe(true);
  });
  it("returns true for valid palindrome with spaces 'Race Car", () => {
    expect(isPalindrome("Race Car")).toBe(true);
  });
  it("returns true for a valid palindrome phrase", () => {
    expect(isPalindrome("A Santa lived as a      devil at NASA.")).toBe(true);
  });
  it("returns true for a valid palindrome with unicodes", () => {
    expect(isPalindrome("✌️a✌️")).toBe(true);
  });

  // in different languages
  it("returns true for a valid palindrome in hindi", () => {
    expect(isPalindrome("कड़क")).toBe(true);
  });

})