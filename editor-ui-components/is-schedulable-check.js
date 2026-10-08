// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'isSchedulable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 569816
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  function i(e) {
    return e && isFunctionUtil.isFunction(e.schedule);
  }
  require.d(exports, {
    isSchedulable: function () {
      return i;
    }
  });
}