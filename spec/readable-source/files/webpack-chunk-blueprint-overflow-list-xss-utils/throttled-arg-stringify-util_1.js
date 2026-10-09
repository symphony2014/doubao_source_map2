// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledStringify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 931463
         */
module.exports = function (module, exports, require) {
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var functionArgTransformUtil = require("function-arg-transform-util") /*id: 943340*/;
  var throttledTostringUtil = require("throttled-tostring-util") /*id: 827495*/;
  exports.throttledStringify = function (e) {
    return throttledTostringUtil.throttledToString(functionArgTransformUtil.createArgTransformer(e, undefined, safeArrayFlattenUtil.safeFlattenArray), e + "");
  };
}