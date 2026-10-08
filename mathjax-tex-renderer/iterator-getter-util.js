// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'getObjectType'
// - Resolved require(786910) to 'get-object-type'
// - Renamed variable 'T' to 'safeTypeGuardPropertyAccessor'
// - Resolved require(155472) to 'safe-type-guard-property-accessor'
// - Renamed variable 'n' to 'isNullOrUndefined'
// - Resolved require(934687) to 'is-null-or-undefined'
// - Renamed variable 'o' to 'emptyModuleExport'
// - Resolved require(159645) to 'empty-module-export'
// - Resolved require(21227) to 'symbol-well-known-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 593407
         */
module.exports = function (module, exports, require) {
  var getObjectType = require("get-object-type") /*id: 786910*/;
  var safeTypeGuardPropertyAccessor = require("safe-type-guard-property-accessor") /*id: 155472*/;
  var isNullOrUndefined = require("is-null-or-undefined") /*id: 934687*/;
  var emptyModuleExport = require("empty-module-export") /*id: 159645*/;
  var i = require("symbol-well-known-registry") /*id: 21227*/("iterator");
  module.exports = function (t) {
    if (!isNullOrUndefined(t)) {
      return safeTypeGuardPropertyAccessor(t, i) || safeTypeGuardPropertyAccessor(t, "@@iterator") || emptyModuleExport[getObjectType(t)];
    }
  };
}