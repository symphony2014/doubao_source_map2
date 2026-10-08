// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'YL' to 'rawRequest'
// - Renamed export 'Yr' to 'normalRequest'
// - Renamed export 'g9' to 'requestWithPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 410370
         */
module.exports = function (module, exports, require) {
  var flowApiConfigManager = require("flow-api-config-manager") /*id: 691950*/;
  var flowApiErrorHandler = require("flow-api-error-handler") /*id: 462100*/;
  let o = function () {
    var t;
    var n = arguments.length;
    var o = Array(n);
    var a = 0;
    for (; a < n; a++) {
      o[a] = arguments[a];
    }
    let s = (t = flowApiConfigManager.FlowApiOptions.serviceConstructorOptions) === null || t === undefined ? undefined : t.extendedMethods?.rawRequest;
    if (!s) {
      throw flowApiErrorHandler.throwInitError({
        methodName: "rawRequest"
      });
    }
    return s(...o);
  };
  let a = function () {
    var t;
    var n = arguments.length;
    var o = Array(n);
    var a = 0;
    for (; a < n; a++) {
      o[a] = arguments[a];
    }
    let s = (t = flowApiConfigManager.FlowApiOptions.serviceConstructorOptions) === null || t === undefined ? undefined : t.extendedMethods?.normalRequest;
    if (!s) {
      throw flowApiErrorHandler.throwInitError({
        methodName: "normalRequest"
      });
    }
    return s(...o);
  };
  let s = function () {
    var t;
    var n = arguments.length;
    var o = Array(n);
    var a = 0;
    for (; a < n; a++) {
      o[a] = arguments[a];
    }
    let s = (t = flowApiConfigManager.FlowApiOptions.serviceConstructorOptions) === null || t === undefined ? undefined : t.extendedMethods?.requestWithPath;
    if (!s) {
      throw flowApiErrorHandler.throwInitError({
        methodName: "requestWithPath"
      });
    }
    return s(...o);
  };
  require.d(exports, {
    rawRequest: function () {
      return o;
    },
    normalRequest: function () {
      return a;
    },
    requestWithPath: function () {
      return s;
    }
  });
}