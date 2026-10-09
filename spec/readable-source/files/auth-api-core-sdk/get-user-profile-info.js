// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'webUtilsEnvDomain'
// - Resolved require(343258) to 'web-utils-env-domain'
// - Renamed variable 'i' to 'globalConfigHttpClient'
// - Resolved require(677269) to 'global-config-http-client'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 229279
         */
module.exports = function (module, exports, require) {
  var webUtilsEnvDomain = require("web-utils-env-domain") /*id: 343258*/;
  var globalConfigHttpClient = require("global-config-http-client") /*id: 677269*/;
  exports.default = function () {
    return globalConfigHttpClient.getRequest().get(webUtilsEnvDomain.getAccountUrl("/web/user"), {
      params: {
        app_id: globalConfigHttpClient.globalData.appId
      }
    });
  };
}