// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'wrapWithLogging'
// - Renamed export 'v' to 'wrapApiHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-canvas-openurl-url-parse-plugin.3e6c43f8.js
         * chunkId: 17547
         * moduleId: 191846
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let i = (e, t) => async function () {
    var n = arguments.length;
    var i = Array(n);
    var o = 0;
    for (; o < n; o++) {
      i[o] = arguments[o];
    }
    let r = Date.now();
    let s = await e(...i);
    let l = Date.now() - r;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "shell_api_neotix_log",
      meta: {
        name: t,
        duration: l
      }
    });
    return s;
  };
  let o = (e, t) => async function () {
    var n = arguments.length;
    var i = Array(n);
    var o = 0;
    for (; o < n; o++) {
      i[o] = arguments[o];
    }
    let r = Date.now();
    try {
      let n = await e(...i);
      let o = Date.now() - r;
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "shell_api_neotix_log",
        meta: {
          name: t,
          duration: o
        }
      });
      return {
        isOK: true,
        isExisted: true,
        data: n,
        code: 0,
        message: "Success"
      };
    } catch (n) {
      let e = n instanceof Error ? n.message : "Unknown error";
      if (e === "No such method!") {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "shell_api_not_exist",
          meta: {
            name: t
          }
        });
        return {
          isOK: false,
          isExisted: false,
          data: undefined,
          code: 404,
          message: "No such method!"
        };
      }
      return {
        isOK: false,
        isExisted: true,
        data: undefined,
        code: 500,
        message: e
      };
    }
  };
  function r(e, t, n) {}
  require.d(exports, {
    wrapWithLogging: function () {
      return i;
    },
    wrapApiHandler: function () {
      return o;
    }
  });
}