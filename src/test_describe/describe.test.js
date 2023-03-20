import { multy } from "./describe";

xdescribe("test mylty", () => {
  it("multy 5* 2", () => {
    const result = multy(5, 2);
    expect(result).toBe(10);
  });

  //С ошибкой сделано намеренно!!!
  it("multy 5* 2", () => {
    const result = multy(5, 2);
    expect(result).toBe(2);
  });
});
