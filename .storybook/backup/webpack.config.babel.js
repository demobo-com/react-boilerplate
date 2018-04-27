import webpack from 'webpack';
import path from 'path';

module.exports = (storybookBaseConfig, configType) => {

  storybookBaseConfig.plugins.push (
    new webpack.DefinePlugin ({
      'process.env.client_id': JSON.stringify (process.env.client_id),
    })
  );

  storybookBaseConfig.module = {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: `babel-loader`,
        exclude: /(node_modules)/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          babelrc: false
        }
      },
      {
        loader: 'url-loader?limit=10000',
        test: /\.(gif|jpg|png|svg)$/,
        include: path.resolve (__dirname, '../')
      }, {
        loader: 'url-loader?limit=1',
        test: /favicon\.ico$/,
        include: path.resolve (__dirname, '../')
      }, {
        loader: 'url-loader?limit=100000',
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        include: path.resolve (__dirname, '../')
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/,
        include: path.resolve (__dirname, '../'),
        exclude: path.resolve (__dirname, '../node_modules')
      },
      {
        loader: 'style-loader!css-loader!sass-loader',
        test: /\.scss$/,
        include: path.resolve (__dirname, '../'),
        exclude: path.resolve (__dirname, '../node_modules')
      },
    ],
    // sassLoader: {
    //   includePaths: path.resolve (__dirname, '../src/browser')
    // },
  };

  return storybookBaseConfig;
};
