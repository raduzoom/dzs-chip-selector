
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser';

export default [
  // ES Modules
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector.ts',
    output: {
      file: 'dist/index.es.js', format: 'es',
    },
    plugins: [
      typescript(),
      babel({ babelHelpers: 'bundled', extensions: ['.ts'] }),
      terser(),
    ],
  },

  // UMD
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector.ts',
    output: {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: 'dzsChipSelector',
      indent: false,
    },
    plugins: [
      typescript(),
      babel({ babelHelpers: 'bundled', extensions: ['.ts'], exclude: 'node_modules/**' }),
      terser(),
    ],
  },
]