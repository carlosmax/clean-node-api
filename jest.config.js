module.exports = {
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],
  coveragePathIgnorePatterns: ['-protocols.ts', 'index.ts'],
  coverageReporters: ['text', 'html'],
  coverageDirectory: './coverage'
};
