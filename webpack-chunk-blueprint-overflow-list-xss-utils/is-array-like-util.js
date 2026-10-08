// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isArrayLike'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 391276
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isValidIndexUtil = require("is-valid-index-util") /*id: 965085*/;
  exports.isArrayLike = function (e) {
    return e != null && isValidIndexUtil.isValidIndex(e.length) && !isFunctionUtil_1.isFunction(e);
  };
}