const path = require("path");

module.exports = {
  rootDir: "./src",
  setupFiles: [path.resolve("jest/setupEnzyme.js")],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  moduleDirectories: ["node_modules", "src"],
};
