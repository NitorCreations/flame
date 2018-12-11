const autoprefixer = require('autoprefixer');
const postCssImport = require('postcss-import');

module.exports = {
  plugins: [
    postCssImport({path: __dirname + "/src"}),
    autoprefixer,
  ]
};
