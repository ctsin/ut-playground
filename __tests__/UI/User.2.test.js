import { mocked } from "jest-mock";
import { User } from "../../src/UI/User";
import { getGreeting } from "../../src/utils/getGreeting";
import { getAddress } from "../../src/utils";

// import { getGreeting } from "../../src/utils/getGreeting";
// import { getAddress } from "../../src/utils";
// Error 🚨 mocked(getGreeting).mockReturnValue("Hej, Tsing!");

// import { getGreeting } from "../../src/utils";
// import { getAddress } from "../../src/utils/getAddress";
// Error 🚨 mocked(getAddress).mockReturnValue("Foo Street");

// Fail
jest.mock("../../src/utils");

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
