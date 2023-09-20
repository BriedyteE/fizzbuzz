import { strict as assert } from "assert";
import { getFizzBuzzValue, solveFizzBuzz } from "./main.js";

describe("GetFizzBuzzValue", () => {
  const fizzBuzzCases = {
    testCases: [15, 30, 45],
    expected: "FizzBuzz",
  };

  const fizzCases = {
    testCases: [3, 6, 9],
    expected: "Fizz",
  };

  const buzzCases = {
    testCases: [5, 10, 20],
    expected: "Buzz",
  };

  const numberCases = [0, 1, 2];

  fizzBuzzCases.testCases.forEach((number) => {
    it(`should return ${fizzBuzzCases.expected} for ${number} since it's multiple of 3 and 5`, () => {
      const result = getFizzBuzzValue(number);
      assert.equal(result, fizzBuzzCases.expected);
    });
  });

  fizzCases.testCases.forEach((number) => {
    it(`should return ${fizzCases.expected} for ${number} since it's multiple of 3, but not 5`, () => {
      const result = getFizzBuzzValue(number);
      assert.equal(result, fizzCases.expected);
    });
  });

  buzzCases.testCases.forEach((number) => {
    it(`should return ${buzzCases.expected} for ${number} since it's multiple of 5, but not 3`, () => {
      const result = getFizzBuzzValue(number);
      assert.equal(result, buzzCases.expected);
    });
  });
  numberCases.forEach((number) => {
    it(`should return ${number}  for ${number} since it is not multiple of 3 and/or 5`, () => {
      const result = getFizzBuzzValue(number);
      assert.equal(result, number);
    });
  });
});

describe("solveFizzBuzz", () => {
  it("should concatenate FizzBuzz values correctly", () => {
    const expected = "012Fizz4BuzzFizz78FizzBuzz";
    const result = solveFizzBuzz(10);
    assert.equal(result, expected);
  });

  it("should handle countOfValues equal to 0", () => {
    const expected = "";
    const result = solveFizzBuzz(0);
    assert.equal(result, expected);
  });
});
