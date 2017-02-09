import Ember from 'ember';
import layout from '../templates/components/clappr-player';
import Clappr from 'clappr';

export default Ember.Component.extend({
  layout,
  classNames: ['player'],
  source: '',
  didInsertElement() {
    new Clappr.Player({source: "", parentId: ".player"});
  }
});
