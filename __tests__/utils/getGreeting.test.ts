import { getGreeting } from "../../src/utils";

describe("getGreeting", () => {
  it("should return greeting message", () => {
    expect(getGreeting("Tsing")).toBe("Hello, Tsing!");
  });
});
