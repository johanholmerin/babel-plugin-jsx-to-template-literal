const test = require('zora');
const transform = require('./transform.js');

test('event handler', t => {
  const input = `<input onChange={console.log} />`;
  const expected = '`<input onChange="${console.log}" />`;';

  t.equal(transform(input), expected);
});

test('event handler lowercaseEventName', t => {
  const input = `<input onChange={console.log} />`;
  const expected = '`<input onchange="${console.log}" />`;';

  t.equal(transform(input, {
    lowercaseEventNames: true
  }), expected);
});

test('event handler eventNamesPrefix', t => {
  const input = `<input onChange={console.log} />`;
  const expected = '`<input on-Change="${console.log}" />`;';

  t.equal(transform(input, {
    eventNamesPrefix: 'on-'
  }), expected);
});

test('event handler eventNamesPrefix and lowercaseEventNames', t => {
  const input = `<input onChange={console.log} />`;
  const expected = '`<input on-change="${console.log}" />`;';

  t.equal(transform(input, {
    lowercaseEventNames: true,
    eventNamesPrefix: 'on-'
  }), expected);
});

test('attribute eventNamesPrefix and lowercaseEventNames', t => {
  const input = `<input onfooBar={console.log} />`;
  const expected = '`<input onfooBar="${console.log}" />`;';

  t.equal(transform(input, {
    lowercaseEventNames: true,
    eventNamesPrefix: 'on-'
  }), expected);
});

test('component event handler', t => {
  const input = `<Foo onChange={console.log} />`;
  const expected = '`${Foo({\n  "onChange": console.log\n}, ``)}`;';

  t.equal(transform(input, {
    lowercaseEventNames: true,
    eventNamesPrefix: 'on-'
  }), expected);
});
