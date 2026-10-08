// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'updateAuthInfo'
// - Renamed export 'T' to 'sendExtensionMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 875713
         */
module.exports = function (module, exports, require) {
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function o(e) {
    let {
      extId: t
    } = urlParamUtils.parseQueryString(location.search);
    let n = {
      ...e,
      body: {
        ...(e == null ? undefined : e.body),
        originContext: "web"
      }
    };
    if (t) {
      try {
        var o;
        var s;
        if ((s = chrome) === null || s === undefined) {
          return undefined;
        } else if ((o = s.runtime) === null || o === undefined) {
          return undefined;
        } else {
          return o.sendMessage(t, e);
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "[ext-helper] sendMessage via chrome.runtime.sendMessage error",
          error: e
        });
      }
    }
    try {
      window.postMessage(n, location.origin);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[ext-helper] sendMessage error, retry via window.postMessage",
        error: e
      });
    }
  }
  function s(e = false) {
    return o({
      name: "update-auth-info",
      body: {
        isLogin: e
      }
    });
  }
  require.d(exports, {
    updateAuthInfo: function () {
      return s;
    },
    sendExtensionMessage: function () {
      return o;
    }
  });
}