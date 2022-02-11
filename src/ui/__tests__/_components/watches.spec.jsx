import React from "react";
import { shallow, mount } from "enzyme";
import expect from "expect";
import Watches from "../../components/Watches/index";

describe("Watches Component", () => {
  it("renders correctly", () => {
    shallow(<Watches />);
  });

  it("includes a Heading", () => {
    const wrapper = shallow(<Watches />);
    expect(wrapper.find(<Heading></Heading>).length).toEqual(1);
  });

  it("includes a Text if no watches were found", () => {
    const watches = [];

    const wrapper = mount(<Watches />);
    wrapper.setState({ watches });
    expect(wrapper.find(<Text></Text>).length).toEqual(1);
  });
});
