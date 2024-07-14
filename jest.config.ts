import type {JestConfigWithTsJest} from 'ts-jest'
import {defaults as tsjPreset} from 'ts-jest/presets'

console.log('does it work');
// import { compilerOptions } from './'

console.log('tsjPreset - ', tsjPreset);

const jestConfig: JestConfigWithTsJest = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      isolatedModules: true,
    },
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  "transform": {
    "^.+\\.(ts|tsx)$": [
      'ts-jest',
      // required due to custom location of tsconfig.json configuration file
      // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
      {
        tsconfig: 'tsconfig.spec.json',
        isolatedModules: true,
      },
    ],
  },
}
export default jestConfig;