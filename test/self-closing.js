const test = require('zora');
const transform = require('./transform.js');

test('self closing', t => {
  const input = `<input />`;
  const expected = '`<input />`;';

  t.equal(transform(input), expected);
});
