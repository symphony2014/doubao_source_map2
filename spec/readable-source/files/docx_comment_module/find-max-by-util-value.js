// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'findMaxByUtilValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 804972
         */
module.exports = function (module, exports, require) {
  var arrayMaxByUtil = require("array-max-by-util") /*id: 997256*/;
  var isLessThanUtil = require("is-less-than-util") /*id: 866322*/;
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  exports.findMaxByUtilValue = function (t) {
    if (t && t.length) {
      return arrayMaxByUtil.maxBy(t, identityFunctionUtil_1.identity, isLessThanUtil.isLessThan);
    } else {
      return undefined;
    }
  };
}