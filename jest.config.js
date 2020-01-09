'use strict'

const baseConfig = require('./config/jest.base')
const config = {
  // Run tests from one or more projects
  // projects: ["<rootDir>/packages/*", "<rootDir>/web/*"],
  projects: ["<rootDir>/packages/bar-pkg"],
}

module.exports = {
  ...baseConfig, 
  ...config
};
