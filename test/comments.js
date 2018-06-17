const test = require('zora');
const transform = require('./transform.js');

test('single comment', t => {
  const input = `<div>{/* Comment */}</div>`;
  const expected = '`<div></div>`;';

  t.equal(transform(input), expected);
});

test('multiple comment', t => {
  const input = `<div>{/* Comment */ /* Comment2 */}</div>`;
  const expected = '`<div></div>`;';

  t.equal(transform(input), expected);
});
