/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-clappr',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    if (target.app) {
      target = target.app;
    }

    var bowerDir = target.bowerDirectory;
    target.import(bowerDir + '/clappr/dist/clappr.js');
  }
};
