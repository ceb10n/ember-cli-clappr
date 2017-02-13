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
  disableKeyboardShortcuts: true,
  watermark: '',
  audioOnly: false,

  onReady: null,
  onResize: null,
  onPlay: null,
  onPause: null,
  onStop: null,
  onEnded: null,
  onSeek: null,
  onError: null,
  onTimeUpdate: null,
  onVolumeUpdate:null,

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

    if (this.get('onReady') !== null) {
      options.events.onReady = this.get('onReady');
    }

    if (this.get('onResize') !== null) {
      options.events.onResize = this.get('onResize');
    }

    if (this.get('onPlay') !== null) {
      options.events.onPlay = this.get('onPlay');
    }

    if (this.get('onPause') !== null) {
      options.events.onPause = this.get('onPause');
    }

    if (this.get('onStop') !== null) {
      options.events.onStop = this.get('onStop');
    }

    if (this.get('onEnded') !== null) {
      options.events.onEnded = this.get('onEnded');
    }

    if (this.get('onSeek') !== null) {
      options.events.onSeek = this.get('onSeek');
    }

    if (this.get('onReady') !== null) {
      options.events.onReady = this.get('onReady');
    }

    if (this.get('onError') !== null) {
      options.events.onError = this.get('onError');
    }

    if (this.get('onVolumeUpdate') !== null) {
      options.events.onVolumeUpdate = this.get('onVolumeUpdate');
    }
    
    this.set('player', new Clappr.Player(options));
  }
});
