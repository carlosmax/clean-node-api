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
  coverageReporters: ['lcov'],
  coverageDirectory: './coverage',
  preset: '@shelf/jest-mongodb',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
};
