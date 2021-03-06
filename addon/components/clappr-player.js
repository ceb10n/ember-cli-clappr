import Ember from 'ember';
import layout from '../templates/components/clappr-player';
import Clappr from 'clappr';

export default Ember.Component.extend({
  layout,
  classNames: ['player'],

  player: null,

  source: '',
  poster: '',
  width: 640,
  height: 360,
  mute: false,
  autoPlay: false,
  loop: false,
  chromeless: false,
  allowUserInteraction: false,
  disableKeyboardShortcuts: false,
  watermark: '',
  audioOnly: false,

  didInsertElement() {
    const options = {
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
      parentId: ".player",
      events: {}
    };

    options.events.onReady = this.get('onReady');
    options.events.onResize = this.get('onResize');
    options.events.onPlay = this.get('onPlay');
    options.events.onPause = this.get('onPause');
    options.events.onStop = this.get('onStop');
    options.events.onEnded = this.get('onEnded');
    options.events.onSeek = this.get('onSeek');
    options.events.onReady = this.get('onReady');
    options.events.onError = this.get('onError');
    options.events.onVolumeUpdate = this.get('onVolumeUpdate');

    this.set('player', new Clappr.Player(options));
  },

  onReady: function() {},
  onResize: function() {},
  onPlay: function() {},
  onPause: function() {},
  onStop: function() {},
  onEnded: function() {},
  onSeek: function() {},
  onError: function() {},
  onTimeUpdate: function() {},
  onVolumeUpdate:function() {},
});
