import { forSpyOn } from "../../src/utils";

describe("User", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should return user info", () => {
    const spy = jest
      .spyOn(forSpyOn, "foo")
      .mockImplementation(() => "Hej, Foo");

    forSpyOn.foo();

    expect(spy).toHaveReturnedWith("Hej, Foo");
  });
});
