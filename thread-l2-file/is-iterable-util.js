// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'isIterable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 500422
         */
module.exports = function (module, exports, require) {
  var symbolIteratorConstant = require("symbol-iterator-constant") /*id: 939076*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  function o(e) {
    return isFunctionUtil.isFunction(e == null ? undefined : e[symbolIteratorConstant.symbolIterator]);
  }
  require.d(exports, {
    isIterable: function () {
      return o;
    }
  });
}