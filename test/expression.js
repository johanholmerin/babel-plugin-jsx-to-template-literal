const test = require('zora');
const transform = require('./transform.js');

test('text expression', t => {
  const input = `<div>{'lorem'}</div>`;
  const expected = '`<div>${\'lorem\'}</div>`;';

  t.equal(transform(input), expected);
});

test('element expression', t => {
  const input = `<div>{<input />}</div>`;
  const expected = '`<div>${`<input />`}</div>`;';

  t.equal(transform(input), expected);
});
