const test = require('zora');
const transform = require('./transform.js');

test('complete', t => {
  const input = `<div attr={'asd'} lorem="asd">
      text

      ads        asd
      <span>   text   {'asd'} foo</span>
      {/* Comment */ /*Comment2*/}
      {[1,2].map(n => <div>{n}</div>)}
      <h1>{'Foo'}{'Bar'}</h1>
      <input />     <input/>
    </div>
  `;
  const expected = 'lit`<div attr="${\'asd\'}" lorem="asd">text ads        asd<span>   text   ${\'asd\'} foo</span>${[1, 2].map(n => lit`<div>${n}</div>`)}<h1>${\'Foo\'}${\'Bar\'}</h1><input />     <input /></div>`;';

  t.equal(transform(input, 'lit'), expected);
});
