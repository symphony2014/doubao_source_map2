// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 581987
         */
module.exports = function (module, exports, require) {
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  module.exports = function (t, r, e) {
    for (var o in r) {
      definePropertyHelper_1_1(t, o, r[o], e);
    }
    return t;
  };
}