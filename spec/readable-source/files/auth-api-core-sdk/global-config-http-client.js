// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'miniFetchHttpClientFactory'
// - Resolved require(435764) to 'mini-fetch-http-client-factory'
// - Renamed variable 'i' to 'globalConfigCookieKeys'
// - Resolved require(882833) to 'global-config-cookie-keys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 677269
         */
module.exports = function (module, exports, require) {
  exports.getRequest = exports.configGlobalData = exports.init = exports.globalData = undefined;
  var miniFetchHttpClientFactory = require("mini-fetch-http-client-factory") /*id: 435764*/;
  var globalConfigCookieKeys = require("global-config-cookie-keys") /*id: 882833*/;
  var o = null;
  exports.globalData = new globalConfigCookieKeys.GlobalConfig({});
  exports.init = function (e, r) {
    exports.globalData.config(e);
    o = miniFetchHttpClientFactory.createRequest(exports.globalData, r);
    return {
      globalData: exports.globalData,
      request: o
    };
  };
  exports.configGlobalData = function (e) {
    exports.globalData.config(e);
  };
  exports.getRequest = function () {
    return o || null;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}