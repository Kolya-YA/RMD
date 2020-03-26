const path = require('path');
const theme = 'themes/rmd-theme';

module.exports = {
  entry: [path.resolve(theme, 'src', 'js', 'start.js')],
  output: {
    path: path.resolve(theme, 'assets', 'js'),
    filename: 'main.js',
  },
};