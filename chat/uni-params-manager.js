// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'uniParamsManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 375503
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function r(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let o = new class {
    setParams(e) {
      Object.assign(this._uniParams, e);
    }
    setParam(e, t) {
      this._uniParams[e] = t;
    }
    getParam(e) {
      let t = this._uniParams[e];
      let n = typeof t == "function" ? t() : t;
      if (n == null) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "l1_uni_params_get_error",
          error: Error(`uniParamsManager getParam ${String(e)}: value is undefined or null`),
          meta: {
            err_param: String(e)
          }
        });
        return this._defaultValueMap[e];
      } else {
        return n;
      }
    }
    constructor() {
      r(this, "_uniParams", {});
      r(this, "_defaultValueMap", {
        aid: -1,
        device_id: "",
        pc_version: "",
        pkg_type: "",
        device_platform: "",
        version_code: -1,
        language: "",
        region: "",
        runtime: "",
        runtime_version: "",
        chromium_version: ""
      });
      loggerServiceCore.defaultLogger.console.info("uniParamsManager_initialized");
    }
  }();
  require.d(exports, {
    uniParamsManager: function () {
      return o;
    }
  });
}