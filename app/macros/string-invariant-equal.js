import { eq } from 'ember-awesome-macros';
import { toUpper } from 'ember-awesome-macros/string';

export default function(string1, string2) {
  return eq(toUpper(string1), toUpper(string2));
}
