import { foo } from "../../src/utils/forMockPartial";
import { User } from "../../src/UI/User";

jest.mock("../../src/utils/forMockPartial", () => {
  const actual = jest.requireActual("../../src/utils/forMockPartial");

  return {
    ...actual,
    foo: jest.fn(),
  };
});

describe("Utils", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should be invoked correctly", () => {
    User();

    expect(foo).toHaveBeenCalledTimes(1);
  });
});
