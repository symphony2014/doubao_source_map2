// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getMaxBy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 477121
         */
module.exports = function (module, exports, require) {
  var arrayMaxByUtil = require("array-max-by-util") /*id: 997256*/;
  var greaterThanUtil = require("greater-than-util") /*id: 166954*/;
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  exports.getMaxBy = function (e) {
    if (e && e.length) {
      return arrayMaxByUtil.maxBy(e, identityFunctionUtil_1.identity, greaterThanUtil.isGreaterThan);
    } else {
      return undefined;
    }
  };
}