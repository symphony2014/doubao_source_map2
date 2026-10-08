// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isArrayLikeObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 443422
         */
module.exports = function (module, exports, require) {
  var isArrayLikeUtil = require("is-array-like-util") /*id: 391276*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  exports.isArrayLikeObject = function (e) {
    return objectTypeCheck.isNonNullObject(e) && isArrayLikeUtil.isArrayLike(e);
  };
}