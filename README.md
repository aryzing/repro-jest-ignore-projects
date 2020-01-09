# Repro jest ignore projects

You can run 

```bash
yarn run jest --debug --silent
```

and notice how all test files are run. Only the tests from [bar-pkg](./packages/bar-pkg) should be run, as per the configuration in [`jest.config.js`](./jest.config.js).