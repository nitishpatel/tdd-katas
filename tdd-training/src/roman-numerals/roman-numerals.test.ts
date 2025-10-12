import { describe,it,expect } from "vitest";
import { fromRoman, toRoman } from "./roman-numerals";

describe("Roman-Numerals",()=>{
  // zero
  it("returns I for '1'",()=>{
    expect(toRoman("1")).toBe("I");
  })
  it("returns II for '2'",()=>{
    expect(toRoman("2")).toBe("II");
  })
  it("returns III for '3'",()=>{
    expect(toRoman("3")).toBe("III");
  })
  // it("returns IV for '4'",()=>{
  //   expect(toRoman("4")).toBe("IV");
  // })
  it("returns V for '5'",()=>{
    expect(toRoman("5")).toBe("V");
  })
  it("returns VI for '6'",()=>{
    expect(toRoman("6")).toBe("VI");
  })
  it("returns VII for '7'",()=>{
    expect(toRoman("7")).toBe("VII");
  })
  it("returns VIII for '8'",()=>{
    expect(toRoman("8")).toBe("VIII");
  })
  // it("returns IX for '9'",()=>{
  //   expect(toRoman("9")).toBe("IX");
  // })
  it("returns X for '10'",()=>{
    expect(toRoman("10")).toBe("X");
  })
  it("returns XL for '40'",()=>{
    expect(toRoman("40")).toBe("XL");
  })
  it("returns XC for '90'",()=>{
    expect(toRoman("90")).toBe("XC");
  })
  it("returns CD for '400'",()=>{
    expect(toRoman("400")).toBe("CD");
  })
  it("returns CM for '900'",()=>{
    expect(toRoman("900")).toBe("CM");
  })

});
describe('toNumber', () => {
  it("return 1 for 'I'",()=>{
    expect(fromRoman("I")).toBe(1);
  })
  it("return 2 for 'II'",()=>{
    expect(fromRoman("II")).toBe(2);
  })
  it("return 3 for 'III'",()=>{
    expect(fromRoman("III")).toBe(3);
  })
  it("return 5 for 'V'",()=>{
    expect(fromRoman("V")).toBe(5);
  })
  it("return 10 for 'X'",()=>{
    expect(fromRoman("X")).toBe(10);
  })
});