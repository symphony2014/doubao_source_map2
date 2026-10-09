// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ensureArrayLike'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 723289
         */
module.exports = function (module, exports, require) {
  var arrayLikeObjectCheck = require("array-like-object-check") /*id: 443422*/;
  exports.ensureArrayLike = function (e) {
    if (arrayLikeObjectCheck.isArrayLikeObject(e)) {
      return e;
    } else {
      return [];
    }
  };
}