const babel = require('@babel/core');

module.exports = function (input, tag) {
  const options = {
    babelrc: false,
    sourceMaps: true,
    plugins: [
      ['./index.js', { tag }]
    ]
  };

  return babel.transform(input, options).code;
};
