// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'throwInitError'
// - Renamed export 'S' to 'logFlowApiError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 462100
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let r = function (e, {
    count: t
  } = {}) {
    try {
      if (!e || !t) {
        return e;
      }
      let n = e.split("\n");
      n.splice(1, t);
      return n.join("\n");
    } catch {
      return e;
    }
  };
  let o = e => {
    let {
      stage: t,
      message: n,
      removeStackCount: o = 1,
      throwError: a
    } = e;
    let l = Error(`[FlowApi] ${n}`);
    l.stack = r(l.stack || "", {
      count: o + 1
    });
    loggerServiceCore.defaultLogger.persist.error({
      eventName: "lib_flow_api_error",
      error: l,
      meta: {
        stage: t
      }
    });
    if (a) {
      throw l;
    }
    return l;
  };
  let a = e => {
    let {
      methodName: t,
      removeStackCount: n = 1
    } = e;
    return o({
      stage: "read_method",
      message: `Before calling the ${t} method, please call initFlowApiOptions first`,
      removeStackCount: n + 1,
      throwError: true
    });
  };
  require.d(exports, {
    throwInitError: function () {
      return a;
    },
    logFlowApiError: function () {
      return o;
    }
  });
}