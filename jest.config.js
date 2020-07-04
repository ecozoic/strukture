function getThreshold(amount) {
  return {
    global: {
      branches: amount,
      functions: amount,
      lines: amount,
      statements: amount,
    },
  };
}

const coverageThresholds = {
  none: undefined,
  loose: getThreshold(20),
  moderate: getThreshold(50),
  strict: getThreshold(80),
};

module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: coverageThresholds.none,
  testEnvironment: 'node',
};
