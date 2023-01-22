const path = require('path');
const {resolve} = require('path')

module.exports = (env, mod) => {


  let webpackConfig = {
    entry: {
      dzsChipSelector: './src/dzs-chip-selector/dzs-chip-selector.ts',
      dzsChipSelectorWebComponents: './src/dzs-chip-selector/dzs-chip-selector--web-components.ts',
    },
    output: {
      path: path.resolve(__dirname, 'dist-webpack'),
      filename: '[name].js'
    },
    devtool: 'eval-source-map',
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
    devServer: {
      client: {
        logging: 'info',
        overlay: true,
        progress: true,
      },
      hot: false,
      allowedHosts: ['devsite'],
      devMiddleware: {
        writeToDisk: true
      },
      static: {
        directory: path.join(__dirname, 'src'),
        watch: false,
      },
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss'],
    },
  };

  if (mod.mode == 'production') {
    webpackConfig.devtool = 'source-map';
    webpackConfig.devServer = undefined;
    webpackConfig.optimization = {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
        }
      }
    }
  }
  console.log('env - ', env, 'mod - ', mod);
  console.log('webpackConfig - ', webpackConfig);

  return webpackConfig;
};