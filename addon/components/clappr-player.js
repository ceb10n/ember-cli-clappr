import Ember from 'ember';
import layout from '../templates/components/clappr-player';
import Clappr from 'clappr';

export default Ember.Component.extend({
  layout,
  classNames: ['player'],

  player: null,

  source: '',
  poster: null,
  width: 640,
  height: 360,
  mute: false,
  autoPlay: false,
  loop: false,
  chromeless: false,
  allowUserInteraction: true,
  disableKeyboardShortcuts: false,
  watermark: null,
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

    options.events.onReady = this.get('onClapprReady');
    options.events.onResize = this.get('onClapprResize');
    options.events.onPlay = this.get('onClapprPlay');
    options.events.onPause = this.get('onClapprPause');
    options.events.onStop = this.get('onClapprStop');
    options.events.onEnded = this.get('onClapprEnded');
    options.events.onSeek = this.get('onClapprSeek');
    options.events.onReady = this.get('onClapprReady');
    options.events.onError = this.get('onClapprError');
    options.events.onVolumeUpdate = this.get('onClapprVolumeUpdate');

    this.set('player', new Clappr.Player(options));
  },

  onClapprReady: function() {
    this.send('onReady');
  },
  onClapprResize: function() {
    this.send('onResize');
  },
  onClapprPlay: function() {
    this.send('onPlay');
  },
  onClapprPause: function() {
    this.send('onPause');
  },
  onClapprStop: function() {
    this.send('onStop');
  },
  onClapprEnded: function() {
    this.send('onEnded');
  },
  onClapprSeek: function() {
    this.send('onSeek');
  },
  onClapprError: function() {
    this.send('onError');
  },
  onClapprTimeUpdate: function() {
    this.send('onTimeUpdate');
  },
  onClapprVolumeUpdate:function() {
    this.send('onVolumeUpdate');
  },

  actions: {
    onReady: function() {
      this.sendAction();
    },
    onResize: function() {
      this.sendAction();
    },
    onPlay: function() {
      this.sendAction();
    },
    onPause: function() {
      this.send();
    },
    onStop: function() {
      this.sendAction();
    },
    onEnded: function() {
      this.sendAction();
    },
    onSeek: function() {
      this.sendAction();
    },
    onError: function() {
      this.sendAction();
    },
    onTimeUpdate: function() {
      this.sendAction();
    },
    onVolumeUpdate:function() {
      this.sendAction();
    },
  }
});
