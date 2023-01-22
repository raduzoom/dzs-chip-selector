import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

export default [
  // ES Modules
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector.ts',
    output: {
      file: 'dist/index.js', format: 'es',
    },
    plugins: [
      typescript({
        tsconfig: 'tsconfig.prod.json',
        sourceMap: false,
        compilerOptions: {
          declaration: true,
          declarationDir: '.'
        }
      }),
      babel({babelHelpers: 'bundled', extensions: ['.ts']}),
      copy({
          targets: [
            { src: 'src/dzs-chip-selector/style/skins', dest: 'dist/style' },
            { src: ['src/dzs-chip-selector/dzs-chip-selector.css', 'style/table-for-jsDoc.css'], dest: 'dist' },
      ]}),
      terser(),
    ],
  },
  // ES Modules
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector.ts',
    output: {
      file: 'dist/index-dev.js', format: 'es',
    },
    plugins: [
      typescript({
        tsconfig: 'tsconfig.dev.json',
        sourceMap: false,
        compilerOptions: {
          declaration: true,
          declarationDir: '.'
        }
      }),
      // -- sourcemaps
      babel({babelHelpers: 'bundled', extensions: ['.ts']}),
    ],
  },
  // ES Modules
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector--web-components.ts',
    output: {
      file: 'dist/dzsChipSelectorWebComponents.js', format: 'es',
    },
    plugins: [
      typescript({
        tsconfig: 'tsconfig.prod.json',
        sourceMap: false,
      }),
      babel({babelHelpers: 'bundled', extensions: ['.ts']}),
      terser(),
      postcss({
        plugins: []
      })
    ],
  },
  // ES Modules
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector--web-components.ts',
    output: {
      file: 'dist/dzsChipSelectorWebComponents-dev.js', format: 'es',
    },
    plugins: [
      typescript({
        tsconfig: 'tsconfig.prod.json',
        sourceMap: false,
      }),
      babel({babelHelpers: 'bundled', extensions: ['.ts']}),
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
      typescript({
        tsconfig: 'tsconfig.prod.json',
        sourceMap: false,
      }),
      babel({babelHelpers: 'bundled', extensions: ['.ts'], exclude: 'node_modules/**'}),
      terser(),
    ],
  },
]