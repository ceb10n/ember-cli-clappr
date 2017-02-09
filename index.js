/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-clappr',

  included: function(app, parentAddon) {
    this._super.included(app);

    var target = (parentAddon || app);

    if (target.app) {
      target = target.app;
    }

    var bowerDir = target.bowerDirectory;
    target.import(bowerDir + '/clappr/dist/clappr.js');

    app.import('vendor/clappr.js', {
      exports: {
        Clappr: ['default']
      }
    });
  }
};
