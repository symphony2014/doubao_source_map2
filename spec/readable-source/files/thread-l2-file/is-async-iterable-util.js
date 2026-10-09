// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'isAsyncIterable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 706510
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  function i(e) {
    return Symbol.asyncIterator && isFunctionUtil.isFunction(e == null ? undefined : e[Symbol.asyncIterator]);
  }
  require.d(exports, {
    isAsyncIterable: function () {
      return i;
    }
  });
}