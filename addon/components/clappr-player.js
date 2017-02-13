import Ember from 'ember';
import layout from '../templates/components/clappr-player';
import Clappr from 'clappr';

export default Ember.Component.extend({
  layout,
  classNames: ['player'],
  source: '',
  poster: '',
  width: 640,
  height: 360,
  mute: false,
  autoPlay: false,
  loop: false,
  chromeless: false,
  allowUserInteraction: false,
  disableKeyboardShortcuts: true,
  watermark: '',
  audioOnly: false,

  didInsertElement() {
    new Clappr.Player({
      source: this.get('source'),
      poster: this.get('poster'),
      width: this.get('width'),
      height: this.get('height'),
      autoPlay: this.get('autoPlay'),
      loop: this.get('loop'),
      mute: this.get('mute'),
      watermark: this.get('watermark'),
      chromeless: this.get('chromeless'),
      allowUserInteraction: this.get('allowUserInteraction'),
      disableKeyboardShortcuts: this.get('disableKeyboardShortcuts'),
      audioOnly: this.get('audioOnly'),
      parentId: ".player"
    });
  }
});
