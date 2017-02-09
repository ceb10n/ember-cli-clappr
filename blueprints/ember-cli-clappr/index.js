/*jshint node:true*/
module.exports = {
  description: 'Install clappr from bower',

    normalizeEntityName: function() {
    },

    afterInstall: function() {
      return this.addBowerPackageToProject('clappr');
    }
};
