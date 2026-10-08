// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'sendApiCommand'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 828944
         */
module.exports = function (module, exports, require) {
  var r;
  var n;
  var larkFrontierCoreClient = require("lark-frontier-core-client") /*id: 97734*/;
  var larkLoggerTracingUtils = require("lark-logger-tracing-utils") /*id: 944519*/;
  var appConfigExtendedInitializer = require("app-config-extended-initializer") /*id: 806887*/;
  let l = () => appConfigExtendedInitializer.extendedAppConfig.getByKey("locale").replace(/-/g, "_");
  (r = n ||= {}).START = "start";
  r.END = "end";
  let u = appConfigExtendedInitializer.extendedAppConfig.get();
  let d = (e, t) => {
    u.debug;
  };
  async function c(e, t) {
    let i = Object.assign(Object.assign({
      locale: l()
    }, e.headers), {
      "x-command-version": appConfigExtendedInitializer.extendedAppConfig.getLarkVersion()
    });
    let r = appConfigExtendedInitializer.extendedAppConfig.getByKey("commonRequestHeaders");
    if (r !== undefined) {
      Object.assign(i, r);
    }
    d(n.START, e);
    let u = await larkFrontierCoreClient.sendLarkApiCommand(Object.assign(Object.assign({
      url: `${appConfigExtendedInitializer.extendedAppConfig.getByKey("urls").larkAPI}/im/gateway/`,
      logger: larkLoggerTracingUtils.defaultLogger
    }, e), {
      headers: i
    }));
    let {
      isError: c,
      error: p
    } = u;
    if (c && t) {
      throw p;
    }
    d(n.END, Object.assign(Object.assign({}, u), {
      request: e
    }));
    return u;
  }
  require.d(exports, {
    sendApiCommand: function () {
      return c;
    }
  });
}