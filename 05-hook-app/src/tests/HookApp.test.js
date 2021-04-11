import React from "react";
import { shallow } from "enzyme";
import HookApp from "../HookApp";

describe("Test Component HookApp", () => {
  test("Test making correct print component <HookApp/>", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
