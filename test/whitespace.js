const test = require('zora');
const transform = require('./transform.js');

test('start spaces', t => {
  const input = `<>    foo</>`;
  const expected = '`    foo`;';

  t.equal(transform(input), expected);
});

test('start newline', t => {
  const input = `<>\n    foo</>`;
  const expected = '`foo`;';

  t.equal(transform(input), expected);
});

test('end spaces', t => {
  const input = `<>foo    </>`;
  const expected = '`foo    `;';

  t.equal(transform(input), expected);
});

test('end newline', t => {
  const input = `<>foo\n    </>`;
  const expected = '`foo`;';

  t.equal(transform(input), expected);
});

test('middle whitespace', t => {
  const input = `<>foo\n   \nbar</>`;
  const expected = '`foo bar`;';

  t.equal(transform(input), expected);
});
