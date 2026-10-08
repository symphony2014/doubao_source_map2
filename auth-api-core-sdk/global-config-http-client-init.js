// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalConfigHttpClient'
// - Resolved require(677269) to 'global-config-http-client'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 36595
         */
module.exports = function (module, exports, require) {
  var globalConfigHttpClient = require("global-config-http-client") /*id: 677269*/;
  exports.default = function (e, t) {
    return globalConfigHttpClient.init(e, t);
  };
}