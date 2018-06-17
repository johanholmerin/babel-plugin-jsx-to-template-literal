const test = require('zora');
const transform = require('./transform.js');

test('top level fragment', t => {
  const input = `<>
    <div></div>
    <div></div>
  </>;`;
  const expected = '`<div></div><div></div>`;';

  t.equal(transform(input), expected);
});

test('nested fragment', t => {
  const input = `<div>
    <>
      <div></div>
      <div></div>
    </>
  </div>;`;
  const expected = '`<div><div></div><div></div></div>`;';

  t.equal(transform(input), expected);
});
