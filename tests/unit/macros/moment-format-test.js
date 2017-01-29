import momentFormat from 'ember-meetup-demo/macros/moment-format';
import compute from 'ember-macro-test-helpers/compute';
import { module, test } from 'qunit';

module('Unit | Macro | moment format');

test('it works', function(assert) {
  compute({
    assert,
    computed: momentFormat('date', 'MMMM Do YYYY, h:mm:ss a'),
    properties: {
      date: new Date(1485719331753)
    },
    strictEqual: 'January 29th 2017, 11:48:51 am'
  });
});

test('it works', function(assert) {
  compute({
    assert,
    computed: momentFormat(
      new Date(1485719331753),
      'MMMM Do YYYY, h:mm:ss a'
    ),
    strictEqual: 'January 29th 2017, 11:48:51 am'
  });
});
