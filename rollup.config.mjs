
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss'

export default [
  // ES Modules
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector.ts',
    output: {
      file: 'dist/index.js', format: 'es',
    },
    plugins: [
      typescript({
        tsconfig: 'tsconfig.base.json',
        compilerOptions: {
          declaration: true,
          declarationDir: '.'
        }
      }),
      babel({ babelHelpers: 'bundled', extensions: ['.ts'] }),
      terser(),
    ],
  },
  // ES Modules
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector--web-components.ts',
    output: {
      file: 'dist/dzsChipSelectorWebComponents.js', format: 'es',
    },
    plugins: [
      typescript(),
      babel({ babelHelpers: 'bundled', extensions: ['.ts'] }),
      terser(),
      postcss({
        plugins: []
      })
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