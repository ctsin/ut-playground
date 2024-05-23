import { getGreeting, getAddress } from "../utils";
import { foo } from "../utils/forMockPartial";

// works for both 1 and 2
// jest.mock("../../src/utils/getGreeting");
// jest.mock("../../src/utils/getAddress");

// 1
// import { getGreeting, getGreeting } from "../utils";

// 2
// import { getGreeting } from "../utils/getGreeting";
// import { getAddress } from "../utils/getAddress";

export const User = () => {
  foo();
  return `${getGreeting("Tsing")} Address: ${getAddress()}`;
};
