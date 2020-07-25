module.exports = {
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.ts',
    '!./src/main/**',
  ],
  coveragePathIgnorePatterns: ['-protocols.ts', 'index.ts'],
  coverageReporters: ['text', 'html'],
  coverageDirectory: './coverage',
  preset: '@shelf/jest-mongodb'
};
