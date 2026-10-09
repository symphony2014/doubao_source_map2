// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ensureFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 131864
         */
module.exports = function (module, exports, require) {
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  exports.ensureFunction = function (e) {
    if (typeof e == "function") {
      return e;
    } else {
      return identityFunctionUtil_1.identity;
    }
  };
}