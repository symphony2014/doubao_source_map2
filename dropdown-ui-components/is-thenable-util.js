// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'isThenable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 438406
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  function i(e) {
    return isFunctionUtil.isFunction(e == null ? undefined : e.then);
  }
  require.d(exports, {
    isThenable: function () {
      return i;
    }
  });
}