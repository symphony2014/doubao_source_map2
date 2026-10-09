// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionTypeGuardAssertion'
// - Resolved require(750329) to 'function-type-guard-assertion'
// - Renamed variable 'o' to 'isNullOrUndefined'
// - Resolved require(934687) to 'is-null-or-undefined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 155472
         */
module.exports = function (module, exports, require) {
  var functionTypeGuardAssertion = require("function-type-guard-assertion") /*id: 750329*/;
  var isNullOrUndefined = require("is-null-or-undefined") /*id: 934687*/;
  module.exports = function (t, r) {
    var n = t[r];
    if (isNullOrUndefined(n)) {
      return undefined;
    } else {
      return functionTypeGuardAssertion(n);
    }
  };
}