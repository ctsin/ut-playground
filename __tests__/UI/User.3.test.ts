import { mocked } from "jest-mock";
import { User } from "../../src/UI/User";
import { getGreeting, getAddress } from "../../src/utils";

jest.mock("../../src/utils/getGreeting");
jest.mock("../../src/utils/getAddress");

describe("User", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should return user info", () => {
    mocked(getGreeting).mockReturnValue("Hej, Tsing!");
    mocked(getAddress).mockReturnValue("Foo Street");

    expect(User()).toBe("Hej, Tsing! Address: Foo Street");
  });
});
