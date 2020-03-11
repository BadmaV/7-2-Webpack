module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundl.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin ({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin ({
      filename: '[name].css'
    }),
  ],
};
