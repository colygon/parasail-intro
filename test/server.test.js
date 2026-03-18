const test = require('node:test');
const assert = require('node:assert');
const server = require('../server');

test('serves distribution memo page', async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}`);
  const text = await res.text();
  assert.strictEqual(res.status, 200);
  assert.ok(text.includes('Distribution OS memo'));
  assert.ok(text.includes('The wedge is beverage.'));
  server.close();
});
