import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import watches from "../_mock/watches";

describe("Watch Service", () => {
  const mock = new MockAdapter(axios);

  it("should successfully load a list of watches from the api", () => {
    mock.onGet("/watches").reply(200, {
      watches,
    });
  });
});
