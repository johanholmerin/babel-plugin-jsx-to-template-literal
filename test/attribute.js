const test = require('zora');
const transform = require('./transform.js');

test('static attribute', t => {
  const input = `<div foo="bar"></div>;`;
  const expected = '`<div foo="bar"></div>`;';

  t.equal(transform(input), expected);
});

test('dynamic attribute', t => {
  const input = `<div foo={'bar'}></div>;`;
  const expected = '`<div foo="${\'bar\'}"></div>`;';

  t.equal(transform(input), expected);
});
