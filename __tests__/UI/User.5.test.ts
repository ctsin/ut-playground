import { mocked } from "jest-mock";
import { User } from "../../src/UI/User";
import { getGreeting, getAddress } from "../../src/utils";

jest.mock("../../src/utils");

describe("User", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should return user info", () => {
    const mockGetGreeting = jest.mocked(getGreeting);
    mockGetGreeting.mockReturnValue("Hej, Tsing!");
    mocked(getAddress).mockReturnValue("Foo Street");

    expect(User()).toBe("Hej, Tsing! Address: Foo Street");
  });
});
