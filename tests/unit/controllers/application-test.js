import { module, test } from 'qunit';
import { setupTest } from 'ember-url-hash-polyfill-sandbox/tests/helpers';

module('Unit | Controller | application', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });
});
