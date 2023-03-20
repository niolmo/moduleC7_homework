import { number } from "./unit";

const a = 7;
const b = 3;

describe("Равно ли 10-ти?", () => {
  it("Проверяем!", () => {
    const num = number(a, b);
    expect(num).toBe("Ok!");
  });
});
