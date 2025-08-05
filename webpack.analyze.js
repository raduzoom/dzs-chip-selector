const path = require('path');
const {resolve} = require('path')

module.exports = {
  entry: {
    dzsChipSelector: './src/dzs-chip-selector/dzs-chip-selector.ts',
    dzsChipSelectorWebComponents: './src/dzs-chip-selector/dzs-chip-selector--web-components.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist-webpack'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {}
            }
          }
        ]
      },
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
            plugins: ["@babel/plugin-syntax-dynamic-import"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
      }
    }
  },
  stats: {
    colors: false,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
}; 