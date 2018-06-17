const test = require('zora');
const transform = require('./transform.js');

test('capitalized component', t => {
  const input = `<Foo />`;
  const expected = '`${Foo({}, ``)}`;';

  t.equal(transform(input), expected);
});

test('object property component', t => {
  const input = `<foo.bar />`;
  const expected = '`${foo.bar({}, ``)}`;';

  t.equal(transform(input), expected);
});

test('component with children', t => {
  const input = `<Foo>
    foo
    <span></span>
  </Foo>`;
  const expected = '`${Foo({}, `foo<span></span>`)}`;';

  t.equal(transform(input), expected);
});

test('component attributes spread', t => {
  const input = `<Foo {...obj} />`;
  const expected = '`${Foo({ ...obj\n}, ``)}`;';

  t.equal(transform(input), expected);
});

test('component attributes static', t => {
  const input = `<Foo bar="baz" />`;
  const expected = '`${Foo({\n  "bar": "baz"\n}, ``)}`;';

  t.equal(transform(input), expected);
});

test('component attributes dynamic', t => {
  const input = `<Foo bar={1} />`;
  const expected = '`${Foo({\n  "bar": 1\n}, ``)}`;';

  t.equal(transform(input), expected);
});

test('component attributes mixed', t => {
  const input = `<Foo bar={1} baz="foo" {...obj} />`;
  const expected = `\`$\{Foo({
  "bar": 1,
  "baz": "foo",
  ...obj
}, \`\`)}\`;`;

  t.equal(transform(input), expected);
});
