// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'nonNegativeTruncUtil'
// - Resolved require(870777) to 'non-negative-trunc-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 681514
         */
module.exports = function (module, exports, require) {
  var nonNegativeTruncUtil = require("non-negative-trunc-util") /*id: 870777*/;
  var o = RangeError;
  module.exports = function (t, r) {
    var e = nonNegativeTruncUtil(t);
    if (e % r) {
      throw new o("Wrong offset");
    }
    return e;
  };
}