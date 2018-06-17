const test = require('zora');
const transform = require('./transform.js');

test('spread attributes', t => {
  const input = `<div {...obj}></div>`;

  t.throws(() => transform(input));
});

test('spread children', t => {
  const input = `<div>{...children}</div>`;

  t.throws(() => transform(input));
});
