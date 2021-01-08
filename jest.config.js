const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest/utils");

module.exports = {
  clearMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths, {
      prefix: "<rootDir>",
    }
  ),
  testMatch: [
    "**/__tests__/controllers/*.spec.[jt]s"
  ],
  preset: "ts-jest",
  testEnvironment: "node",
};