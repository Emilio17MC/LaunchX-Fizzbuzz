const FizzbuzzService = require("../../lib/services/FizzBuzzService");

describe("Tests para FizzbuzzService", () => {
  test("1. trick será el mismo valor del score", () => {
    const explorer1 = { name: "Explorer1", score: 1 };

    expect(FizzbuzzService.applyValidationInExplorer(explorer1)).toMatchObject({
      name: "Explorer1",
      score: 1,
      trick: 1,
    });
  });

  test("2. trick será igual a FIZZ", () => {
    const explorer3 = { name: "Explorer3", score: 3 };

    expect(FizzbuzzService.applyValidationInExplorer(explorer3)).toMatchObject({
      name: "Explorer3",
      score: 3,
      trick: "FIZZ",
    });
  });

  test("3. trick será igual a BUZZ", () => {
    const explorer5 = { name: "Explorer5", score: 5 };

    expect(FizzbuzzService.applyValidationInExplorer(explorer5)).toMatchObject({
      name: "Explorer5",
      score: 5,
      trick: "BUZZ",
    });
  });

  test("4. trick será igual a FIZZBUZZ", () => {
    const explorer15 = { name: "Explorer15", score: 15 };

    expect(FizzbuzzService.applyValidationInExplorer(explorer15)).toMatchObject(
      { name: "Explorer15", score: 15, trick: "FIZZBUZZ" }
    );
  });
});
