// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledStringify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 293873
         */
module.exports = function (module, exports, require) {
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  var functionArgTransformUtil = require("function-arg-transform-util") /*id: 943340*/;
  var throttledTostringUtil = require("throttled-tostring-util") /*id: 827495*/;
  exports.throttledStringify = function (e, t) {
    return throttledTostringUtil.throttledToString(functionArgTransformUtil.createArgTransformer(e, t, identityFunctionUtil_1.identity), e + "");
  };
}