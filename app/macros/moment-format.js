import computed from 'ember-macro-helpers/computed';
import raw from 'ember-macro-helpers/raw';
import moment from 'moment';

export default function(date, format) {
  return computed(date, raw(format), (date, format) => {
    return moment(date).format(format);
  }).readOnly();
}
