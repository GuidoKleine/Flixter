module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/plugins/',
  ],
  coverageReporters: ['html'],
  coverageDirectory: './tests/unit/reports/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/**/*spec.*',
  ],
};
