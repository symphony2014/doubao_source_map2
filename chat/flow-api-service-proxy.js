// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'createServiceProxy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 538321
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var flowApiConfigManager = require("flow-api-config-manager") /*id: 691950*/;
  var flowApiErrorHandler = require("flow-api-error-handler") /*id: 462100*/;
  let a = (e, t) => {
    let n = null;
    return new Proxy({}, {
      get: (a, l) => {
        if (l === "$$typeof") {
          return;
        }
        if (!n) {
          if (!flowApiConfigManager.FlowApiOptions.isInitialized || !flowApiConfigManager.FlowApiOptions.flowApiOptions || !flowApiConfigManager.FlowApiOptions.serviceConstructorOptions) {
            throw flowApiErrorHandler.throwInitError({
              methodName: `${e}ApiService.${String(l)}`
            });
          }
          let {
            classMap: i = {},
            classConstructorOptionsMap: a = {}
          } = flowApiConfigManager.FlowApiOptions.flowApiOptions;
          let s = a[e] || flowApiConfigManager.FlowApiOptions.serviceConstructorOptions.defaultServiceConstructorOption;
          n = new (i[e] || t)(s);
        }
        let s = n[l];
        if (isFunctionUtil_1.isFunction(s)) {
          return s.bind(n);
        } else {
          return s;
        }
      }
    });
  };
  require.d(exports, {
    createServiceProxy: function () {
      return a;
    }
  });
}