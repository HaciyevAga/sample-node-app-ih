module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.js',
    '!node_modules/**',
    '!coverage/**',
    '!jest.config.js'
  ],
  coverageReporters: ['lcov', 'text', 'clover'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'coverage', outputName: 'junit.xml' }]
  ],
  testMatch: [
    '**/tests/**/*.test.js',
    '**/tests/**/*.spec.js'
  ],
  verbose: true
}
