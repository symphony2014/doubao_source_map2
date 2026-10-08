// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'validatePathArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 679313
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    return e != null && t in Object(e);
  }
  var pathArrayValidationUtil = require("path-array-validation-util") /*id: 641640*/;
  function o(e, t) {
    return e != null && pathArrayValidationUtil.validatePathArray(e, t, r);
  }
  require.d(exports, {
    validatePathArray: function () {
      return o;
    }
  });
}