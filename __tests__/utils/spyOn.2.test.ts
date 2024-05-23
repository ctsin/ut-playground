import * as forMockPartial from "../../src/utils/forMockPartial";

describe("Utils", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should return user info", () => {
    const spy = jest.spyOn(forMockPartial, "foo");

    forMockPartial.foo();

    expect(spy).toHaveBeenCalled();
  });
});
