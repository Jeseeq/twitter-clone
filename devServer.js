const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.dev');

const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(webpackConfig);

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;


if (isDeveloping) {
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use('/static', express.static(path.join(__dirname, 'dist' )));

}

// app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
