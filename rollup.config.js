import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
const pkg = require('./package.json')
const { camelCase } = require('lodash')

const libraryName = 'rolley-data'

export default {
  entry: `compiled/${libraryName}.js`,
  targets: [
    { dest: pkg.main, moduleName: camelCase(libraryName), format: 'umd' },
    { dest: pkg.module, format: 'es' },
  ],
  sourceMap: true,
  external: [],
  plugins: [commonjs(), resolve()],
}
