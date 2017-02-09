(function() {

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('clappr', { 'default': Clappr });
})();
