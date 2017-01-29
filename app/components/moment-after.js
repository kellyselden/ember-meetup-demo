import Ember from 'ember';
import raw from 'ember-macro-helpers/raw';
import momentFormat from '../macros/moment-format';

export default Ember.Component.extend({
  test1: momentFormat('date1', raw('dddd')),
  test2: momentFormat('date1', raw('MMMM')),
  test3: momentFormat('date2', raw('Y')),
  test4: momentFormat('date2', raw('D'))
});
