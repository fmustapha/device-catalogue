import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount, configure } from "enzyme";
import App from "../components/App";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import IPhones from "../components/IPhones";
import Watches from "../components/Watches";

describe("Application routes", () => {
  it("should render a Home component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it("should render a Watches component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/watches"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Watches)).toHaveLength(1);
  });

  it("should render an IPhones component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/iphones"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(IPhones)).toHaveLength(1);
  });

  it("should render a Not Found component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/notFound"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
