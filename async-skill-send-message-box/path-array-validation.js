// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'validatePathArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 75446
         */
module.exports = function (module, exports, require) {
  var i = Object.prototype.hasOwnProperty;
  function r(e, t) {
    return e != null && i.call(e, t);
  }
  var pathArrayValidationUtil = require("path-array-validation-util") /*id: 641640*/;
  function a(e, t) {
    return e != null && pathArrayValidationUtil.validatePathArray(e, t, r);
  }
  require.d(exports, {
    validatePathArray: function () {
      return a;
    }
  });
}