import Ember from 'ember';
import stringInvariantEqual from '../macros/string-invariant-equal';

export default Ember.Component.extend({
  test1: stringInvariantEqual('string1', 'string2'),
  test2: stringInvariantEqual('string1', 'string3')
});
