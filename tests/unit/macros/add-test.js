import add from 'ember-meetup-demo/macros/add';
import compute from 'ember-macro-test-helpers/compute';
import { module, test } from 'qunit';

module('Unit | Macro | add');

// Replace this with your real tests.
test('it works', function(assert) {
  compute({
    assert,
    computed: add('key1', 'key2'),
    properties: {
      key1: 1,
      key2: 2
    },
    strictEqual: 3
  });
});
