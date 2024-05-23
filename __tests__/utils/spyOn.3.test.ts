import * as utils from "../../src/utils";

// TypeError: Cannot redefine property: foo
describe("Utils", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should return user info", () => {
    const spy = jest.spyOn(utils, "foo");

    utils.foo();

    expect(spy).toHaveBeenCalled();
  });
});
