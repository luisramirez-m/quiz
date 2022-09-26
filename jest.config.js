module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "^@core(.*)$": "<rootDir>/src/app/core$1",
    "^@modules(.*)$": "<rootDir>/src/app/modules$1",
    "^@components(.*)$": "<rootDir>/src/app/components$1",
  },
};
