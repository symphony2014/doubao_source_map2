// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'isNullOrUndefined'
// - Resolved require(934687) to 'is-null-or-undefined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 770186
         */
module.exports = function (module, exports, require) {
  var isNullOrUndefined = require("is-null-or-undefined") /*id: 934687*/;
  var o = TypeError;
  module.exports = function (t) {
    if (isNullOrUndefined(t)) {
      throw new o("Can't call method on " + t);
    }
    return t;
  };
}