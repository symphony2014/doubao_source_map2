// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'resolveRuntimeValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 403878
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var deprecatedCustomEdenxRuntime = require("deprecated-custom-edenx-runtime") /*id: 981877*/;
  let o = (e, t) => {
    try {
      let i = deprecatedCustomEdenxRuntime.DeprecatedCustomEdenxRuntime.getInstance();
      if (i.custom?.[e]) {
        return i.custom[e];
      }
      if (i.type === "edenx") {
        return t;
      }
      throw Error(`${e} not found`);
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: `base_runtime_${e}_error`,
        error: t
      });
      throw t;
    }
  };
  require.d(exports, {
    resolveRuntimeValue: function () {
      return o;
    }
  });
}