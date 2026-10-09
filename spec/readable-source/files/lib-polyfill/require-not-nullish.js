// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 330600
         */
module.exports = function (module, exports, require) {
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var o = TypeError;
  module.exports = function (t) {
    if (isNullishCheck_1(t)) {
      throw new o("Can't call method on " + t);
    }
    return t;
  };
}