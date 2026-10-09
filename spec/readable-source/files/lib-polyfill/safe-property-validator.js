// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'o' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 983175
         */
module.exports = function (module, exports, require) {
  var functionValidator = require("function-validator") /*id: 599706*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  module.exports = function (t, r) {
    var e = t[r];
    if (isNullishCheck_1(e)) {
      return undefined;
    } else {
      return functionValidator(e);
    }
  };
}