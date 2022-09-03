import type { Config } from 'jest'
import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest'
import { defaults } from 'ts-jest/presets'

const config: Config = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: compilerOptions.baseUrl,
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.ts$',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  transform: { ...defaults.transform }
}

export default config
