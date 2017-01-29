import Ember from 'ember';
import momentFormat from '../macros/moment-format';

export default Ember.Component.extend({
  test1: momentFormat('date1', 'dddd'),
  test2: momentFormat('date1', 'MMMM'),
  test3: momentFormat('date2', 'Y'),
  test4: momentFormat('date2', 'D')
});
