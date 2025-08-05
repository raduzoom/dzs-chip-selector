import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

export default [
  // ES Modules - Main
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector.ts',
    output: {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
      exports: 'named'
    },
    external: [], // No external dependencies for this package
    plugins: [
      typescript({
        tsconfig: 'tsconfig.prod.json',
        sourceMap: false,
        compilerOptions: {
          declaration: true,
          "declarationDir": "./types",
        }
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts'],
        exclude: 'node_modules/**'
      }),
      copy({
        targets: [
          { src: 'src/dzs-chip-selector/style/skins', dest: 'dist/style' },
          { src: 'src/dzs-chip-selector/style/skins', dest: 'dist/dzs-chip-selector/style' },
          { src: ['src/dzs-chip-selector/dzs-chip-selector.css', 'src/style/table-for-jsDoc.css', 'src/style/bootstrap.min.css'], dest: 'dist/style' },
        ]
      }),
    ],
  },
  // ES Modules - Development
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector.ts',
    output: {
      file: 'dist/index-dev.js',
      format: 'es',
      sourcemap: true,
      exports: 'named'
    },
    external: [],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.dev.json',
        sourceMap: true,
        compilerOptions: {
          declaration: true,
          declarationDir: '.'
        }
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts'],
        exclude: 'node_modules/**'
      }),
    ],
  },
  // UMD - Minified
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector.ts',
    output: {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: 'dzsChipSelector',
      sourcemap: true,
      exports: 'named'
    },
    external: [],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.prod.json',
        sourceMap: true,
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts'],
        exclude: 'node_modules/**'
      }),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }),
    ],
  },
  // Web Components - ES Modules
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector--web-components.ts',
    output: {
      file: 'dist/dzsChipSelectorWebComponents.js',
      format: 'es',
      sourcemap: true,
      exports: 'named'
    },
    external: [],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.prod.json',
        sourceMap: true,
        compilerOptions: {
          declaration: true,
          "declarationDir": "./types",
        }
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts'],
        exclude: 'node_modules/**'
      }),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }),
      postcss({
        plugins: [],
        extract: false,
        inject: false
      })
    ],
  },
  // Web Components - Development
  {
    input: 'src/dzs-chip-selector/dzs-chip-selector--web-components.ts',
    output: {
      file: 'dist/dzsChipSelectorWebComponents-dev.js',
      format: 'es',
      sourcemap: true,
      exports: 'named'
    },
    external: [],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.prod.json',
        sourceMap: true,
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts'],
        exclude: 'node_modules/**'
      }),
      postcss({
        plugins: [],
        extract: false,
        inject: false
      })
    ],
  },
]