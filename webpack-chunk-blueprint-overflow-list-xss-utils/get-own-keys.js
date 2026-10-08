// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getOwnKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 362947
         */
module.exports = function (module, exports, require) {
  var getOwnEnumerableKeys = require("get-own-enumerable-keys") /*id: 373475*/;
  var getOwnKeysUtil = require("get-own-keys-util") /*id: 365656*/;
  var isArrayLikeUtil = require("is-array-like-util") /*id: 391276*/;
  exports.getOwnKeys = function (e) {
    if (isArrayLikeUtil.isArrayLike(e)) {
      return getOwnEnumerableKeys.getOwnKeys(e);
    } else {
      return getOwnKeysUtil.getOwnKeys(e);
    }
  };
}