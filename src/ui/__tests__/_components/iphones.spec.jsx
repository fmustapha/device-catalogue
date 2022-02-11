import React from "react";
import { shallow, mount } from "enzyme";
import expect from "expect";
import IPhones from "../../components/IPhones/index";

describe("IPhones Component", () => {
  it("renders correctly", () => {
    shallow(<IPhones />);
  });

  it("includes a Heading", () => {
    const wrapper = shallow(<IPhones />);
    expect(wrapper.find(<Heading></Heading>).length).toEqual(1);
  });

  it("includes a Text if no iphones were found", () => {
    const iphones = [];

    const wrapper = mount(<IPhones />);
    wrapper.setState({ iphones });
    expect(wrapper.find(<Text></Text>).length).toEqual(1);
  });
});
