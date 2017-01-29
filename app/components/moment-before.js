import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  test1: Ember.computed('date1', function() {
    return moment(this.get('date1')).format('dddd');
  }),
  test2: Ember.computed('date1', function() {
    return moment(this.get('date1')).format('MMMM');
  }),
  test3: Ember.computed('date2', function() {
    return moment(this.get('date2')).format('Y');
  }),
  test4: Ember.computed('date2', function() {
    return moment(this.get('date2')).format('D');
  })
});
