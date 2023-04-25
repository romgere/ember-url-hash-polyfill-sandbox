import { module, test } from 'qunit';
import { setupTest } from 'ember-url-hash-polyfill-sandbox/tests/helpers';

module('Unit | Route | sub-route', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:sub-route');
    assert.ok(route);
  });
});
