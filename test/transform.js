const babel = require('@babel/core');

module.exports = function (input, obj = {}) {
  const options = {
    babelrc: false,
    sourceMaps: true,
    plugins: [
      ['./index.js', obj]
    ]
  };

  return babel.transform(input, options).code;
};
