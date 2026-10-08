// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'checkSandboxFileUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28526.86ccdfd3.js
         * chunkId: 28526
         * moduleId: 675258
         */
module.exports = function (module, exports, require) {
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let a = e => {
    let {
      src: t,
      url: n,
      uriToUrlStr: a
    } = e;
    if (urlParamUtils.parseUrlSafe(n)) {
      if (t.startsWith("sandbox://")) {
        let e = t.match(/sandbox:\/\/(.*)/)?.[1];
        if ((safeJsonUtils.safeParse(a, {}) ?? {})[e || ""]) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "ci-get-sandbox-file-url-failed",
            meta: {
              url: n,
              src: t,
              uriToUrlStr: a
            },
            error: Error("realFileURL invalid")
          });
        }
      } else {
        loggerServiceCore.defaultLogger.persist.success({
          eventName: "ci-get-sandbox-file-url-success",
          meta: {
            srcProtocol: t.toLowerCase().startsWith("sandbox://") ? "sandbox" : t.toLowerCase().startsWith("coco://") ? "coco" : "https"
          }
        });
      }
    } else {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "ci-get-sandbox-file-url-failed",
        meta: {
          url: n,
          src: t,
          uriToUrlStr: a
        },
        error: Error("realFileURL invalid")
      });
    }
  };
  require.d(exports, {
    checkSandboxFileUrl: function () {
      return a;
    }
  });
}