import { describe,it,expect } from "vitest";
import { romannumeral } from "./roman-numerals";

describe("Roman-Numerals",()=>{
  // zero
  it("returns I for '1'",()=>{
    expect(romannumeral("1")).toBe("I");
  })
  it("returns II for '2'",()=>{
    expect(romannumeral("2")).toBe("II");
  })
  it("returns III for '3'",()=>{
    expect(romannumeral("3")).toBe("III");
  })
  // it("returns IV for '4'",()=>{
  //   expect(romannumeral("4")).toBe("IV");
  // })
  it("returns V for '5'",()=>{
    expect(romannumeral("5")).toBe("V");
  })
  it("returns VI for '6'",()=>{
    expect(romannumeral("6")).toBe("VI");
  })
  it("returns VII for '7'",()=>{
    expect(romannumeral("7")).toBe("VII");
  })
  it("returns VIII for '8'",()=>{
    expect(romannumeral("8")).toBe("VIII");
  })
  // it("returns IX for '9'",()=>{
  //   expect(romannumeral("9")).toBe("IX");
  // })
  it("returns X for '10'",()=>{
    expect(romannumeral("10")).toBe("X");
  })
  it("returns XL for '40'",()=>{
    expect(romannumeral("40")).toBe("XL");
  })
  it("returns XC for '90'",()=>{
    expect(romannumeral("90")).toBe("XC");
  })
  it("returns CD for '400'",()=>{
    expect(romannumeral("400")).toBe("CD");
  })
  it("returns CM for '900'",()=>{
    expect(romannumeral("900")).toBe("CM");
  })

});