import { describe, it, expect } from "vitest";
import { isPalindrome } from "./palindrome";

describe("isPalindrome", () => {
  // Zero
  it("treats an empty string as a palindrome", () => {
    expect(isPalindrome("")).toBe(true);
  });

  // One
  it("treats a single-character string as a palindrome", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  // Many
  it("returns true for 'aa'", () => {
    expect(isPalindrome("aa")).toBe(true);
  });

  it("returns false for 'ab'", () => {
    expect(isPalindrome("ab")).toBe(false);
  });

  // Boundaries
  it("returns true for mixed-case palindrome 'Aba'", () => {
    expect(isPalindrome("Aba")).toBe(true);
  });

  it("returns true for palindrome with punctuation 'Aba!'", () => {
    expect(isPalindrome("Aba!")).toBe(true);
  });

  it("returns true for palindrome with spaces 'Race Car'", () => {
    expect(isPalindrome("Race Car")).toBe(true);
  });

  it("returns true for palindrome phrase with spaces and punctuation", () => {
    expect(isPalindrome("A Santa lived as a devil at NASA.")).toBe(true);
  });

  // Multilingual Support
  describe("Multilingual Support", () => {
    describe("Hindi (Devanagari script)", () => {
      it("returns true for 'कड़क'", () => {
        expect(isPalindrome("कड़क")).toBe(true);
      });

      it("returns true for 'नयन'", () => {
        expect(isPalindrome("नयन")).toBe(true);
      });

      it("returns false for non-palindrome 'भारत'", () => {
        expect(isPalindrome("भारत")).toBe(false);
      });
    });

    describe("Telugu script", () => {
      it("returns true for 'ముత్యము'", () => {
        expect(isPalindrome("ముత్యము")).toBe(true);
      });

      it("returns true for 'నల్లన'", () => {
        expect(isPalindrome("నల్లన")).toBe(true);
      });

      it("returns false for non-palindrome 'తెలుగు'", () => {
        expect(isPalindrome("తెలుగు")).toBe(false);
      });
    });

    describe("Arabic script", () => {
      it("returns true for 'رادار' (radar)", () => {
        expect(isPalindrome("رادار")).toBe(true);
      });

      it("returns true for 'سس'", () => {
        expect(isPalindrome("سس")).toBe(true);
      });

      it("returns false for non-palindrome 'سلام'", () => {
        expect(isPalindrome("سلام")).toBe(false);
      });
    });

    describe("Japanese script", () => {
      it("returns true for 'あいいあ'", () => {
        expect(isPalindrome("あいいあ")).toBe(true);
      });

      it("returns true for 'たけやぶやけた' (famous Japanese palindrome)", () => {
        expect(isPalindrome("たけやぶやけた")).toBe(true);
      });

      it("returns false for non-palindrome 'こんにちは'", () => {
        expect(isPalindrome("こんにちは")).toBe(false);
      });
    });
  });

  // Symbols and Emojis
  describe("Symbols and Emojis", () => {
    it("returns true for emoji palindrome '✌️a✌️'", () => {
      expect(isPalindrome("✌️a✌️")).toBe(true);
    });

    it("returns true for palindrome with math symbols '+a+'", () => {
      expect(isPalindrome("+a+")).toBe(true);
    });

    it("returns true for palindrome with currency symbols '₹a₹'", () => {
      expect(isPalindrome("₹a₹")).toBe(true);
    });

    it("returns true for mixed emoji and symbol palindrome '🔥+🔥'", () => {
      expect(isPalindrome("🔥+🔥")).toBe(true);
    });

    it("returns true for complex emoji palindrome '👩‍❤️‍💋‍👩a👩‍❤️‍💋‍👩'", () => {
      expect(isPalindrome("👩‍❤️‍💋‍👩a👩‍❤️‍💋‍👩")).toBe(true);
    });

    it("returns false for non-palindrome with symbols '🔥a+'", () => {
      expect(isPalindrome("🔥a+")).toBe(false);
    });

    it("returns true for Hindi + symbol palindrome 'क+क'", () => {
      expect(isPalindrome("क+क")).toBe(true);
    });

    it("returns true for Hindi + English + emoji palindrome 'कaक' and 'क🔥क'", () => {
      expect(isPalindrome("कaक")).toBe(true);
      expect(isPalindrome("क🔥क")).toBe(true);
    });

    it("ignores punctuation and spaces but not symbols", () => {
      expect(isPalindrome("a + a")).toBe(true);
      expect(isPalindrome("a, + ,a")).toBe(true);
    });
  });
});
