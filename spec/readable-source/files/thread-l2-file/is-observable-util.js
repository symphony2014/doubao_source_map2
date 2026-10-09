// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'isObservable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 786231
         */
module.exports = function (module, exports, require) {
  var symbolObservable = require("symbol-observable") /*id: 468947*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  function o(e) {
    return isFunctionUtil.isFunction(e[symbolObservable.symbolObservable]);
  }
  require.d(exports, {
    isObservable: function () {
      return o;
    }
  });
}