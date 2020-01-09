const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(process.cwd(), 'src/index.ts'),
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: "upward",
          }
        }
      }
    ],
  },
  watch: true
};