import Ember from 'ember';
import { eq } from 'ember-awesome-macros';
import { toUpper } from 'ember-awesome-macros/string';

export default Ember.Component.extend({
  test1: eq(toUpper('string1'), toUpper('string2')),
  test2: eq(toUpper('string1'), toUpper('string3'))
});
