module.exports = {
  collectCoverageFrom: ["<rootDir>/src"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  rootDir: "src",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest"
  }
};
