import curriedComputed from 'ember-macro-helpers/curried-computed';
import moment from 'moment';

export default curriedComputed((date, format) => {
  return moment(date).format(format);
});
