// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'clearOAuth2State'
// - Renamed export 'O' to 'getOAuth2State'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-docx-guidance.7d88153e.js
         * chunkId: 48718
         * moduleId: 331697
         */
module.exports = function (module, exports, require) {
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let o = e => {
    if (e.state?.oauth2) {
      return e.state?.oauth2;
    }
    let r = new URLSearchParams(e.search).get("oauth2State");
    if (r) {
      try {
        return JSON.parse(r);
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "parse_oauth2_state_from_search_error",
          error: e instanceof Error ? e : Error(String(e))
        });
      }
    }
  };
  let l = e => {
    if (e.state?.oauth2) {
      window.history.replaceState(throttledOmitPathStringify.omitPathStringify(e.state, "oauth2"), "");
      return;
    }
    urlParamUtils.removeUrlParam("oauth2State");
  };
  require.d(exports, {
    clearOAuth2State: function () {
      return l;
    },
    getOAuth2State: function () {
      return o;
    }
  });
}