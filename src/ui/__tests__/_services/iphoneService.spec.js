import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import iphones from "../_mock/iphones";

describe("iPhone Service", () => {
  const mock = new MockAdapter(axios);

  it("should successfully load a list of iphones from the api", () => {
    mock.onGet("/iphones").reply(200, {
      iphones,
    });
  });
});
