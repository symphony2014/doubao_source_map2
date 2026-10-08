// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'checkUriFlag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-business.49e30a64.js
         * chunkId: 63216
         * moduleId: 755365
         */
module.exports = function (module, exports, require) {
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let o = typeof window == "undefined" ? {
    search: "",
    pathname: ""
  } : window.location;
  let s = function (e = o) {
    try {
      return urlParamUtils.parseQueryString(e.search || "")?.ghh === "1";
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "uri_error",
        message: `URI Error: ${e.search}`,
        meta: {
          search: e.search
        },
        error: t
      });
      return false;
    }
  };
  require.d(exports, {
    checkUriFlag: function () {
      return s;
    }
  });
}