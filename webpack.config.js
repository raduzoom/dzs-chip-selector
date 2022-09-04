const path = require('path');
const {resolve} = require('path')

module.exports = (env,mod) => {

  console.log(env, mod);


  let webpackConfig = {
    entry: {
      dzsChipSelector: './src/dzs-chip-selector/dzs-chip-selector.ts',
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(ts|js)?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
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
      extensions: ['.tsx', '.ts', '.js'],
    },
  };

  if(mod.mode=='production'){
    webpackConfig.devtool = 'source-map';
  }

  return webpackConfig;
};