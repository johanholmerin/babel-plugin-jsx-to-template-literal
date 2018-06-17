const test = require('zora');
const transform = require('./transform.js');

test('untagged', t => {
  const input = `<div></div>`;
  const expected = '`<div></div>`;';

  t.equal(transform(input), expected);
});

test('tagged', t => {
  const input = `<div></div>`;
  const expected = 'foo`<div></div>`;';

  t.equal(transform(input, 'foo'), expected);
});
