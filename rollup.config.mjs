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
          "declarationDir": "./types",    // all .d.ts files go here
        }
      }),
      babel({babelHelpers: 'bundled', extensions: ['.ts']}),
      copy({
        targets: [
          { src: 'src/dzs-chip-selector/style/skins', dest: 'dist/style' },
          { src: 'src/dzs-chip-selector/style/skins', dest: 'dist/dzs-chip-selector/style' },
          { src: ['src/dzs-chip-selector/dzs-chip-selector.css', 'src/style/table-for-jsDoc.css', 'src/style/bootstrap.min.css'], dest: 'dist/style' },
        ]}),
      terser(),
    ],
  },
  // ES Modules
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector.ts',
    output: {
      // dir: 'dist/dev',
      file: 'dist/index-dev.js',
      format: 'es',
      sourcemap: true,
      // preserveModules: true,
      // preserveModulesRoot: 'src',
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