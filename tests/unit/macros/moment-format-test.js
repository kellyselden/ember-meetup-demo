import momentFormat from 'ember-meetup-demo/macros/moment-format';
import compute from 'ember-macro-test-helpers/compute';
import { module, test } from 'qunit';
import raw from 'ember-macro-helpers/raw';

module('Unit | Macro | moment format');

test('it works', function(assert) {
  compute({
    assert,
    computed: momentFormat('date', 'format'),
    properties: {
      date: new Date(1485719331753),
      format: 'MMMM Do YYYY, h:mm:ss a'
    },
    strictEqual: 'January 29th 2017, 11:48:51 am'
  });
});

test('it works', function(assert) {
  compute({
    assert,
    computed: momentFormat(
      new Date(1485719331753),
      raw('MMMM Do YYYY, h:mm:ss a')
    ),
    strictEqual: 'January 29th 2017, 11:48:51 am'
  });
});
