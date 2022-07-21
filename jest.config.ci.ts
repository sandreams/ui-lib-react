import base from './jest.config';
export default {
  ...base,
  reporters: ['default', ['jest-junit', { outputDirectory: './test-results/jest', outputName: 'results.xml' }]],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};
