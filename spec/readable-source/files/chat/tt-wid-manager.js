// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'ttWidManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 155324
         */
module.exports = function (module, exports, require) {
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function a(e, t, n) {
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
  let l = new class {
    setTtwidConfig(e) {
      this._ttWidConfig = e;
      storageWrapperWithFallback.LocalStorageWrapper.setItem("samantha_web_web_id", JSON.stringify(e));
      if (e.web_id && e.web_id !== "0") {
        var t;
        if ((t = this._resolveTTWidConfigReady) !== null && t !== undefined) {
          t.call(this, true);
        }
        return;
      }
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "TTWidManager_ttWidConfig_format_invalid",
        meta: {
          ...e
        }
      });
    }
    get ttWidConfig() {
      return this._ttWidConfig;
    }
    waitUtilTTWidConfigReady() {
      return this._waitingTTWidConfigReady;
    }
    constructor() {
      a(this, "_waitingTTWidConfigReady", undefined);
      a(this, "_resolveTTWidConfigReady", undefined);
      a(this, "_ttWidConfig", {});
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "TTWidManager_initialized"
      });
      let e = storageWrapperWithFallback.LocalStorageWrapper.getItem("samantha_web_web_id");
      if (e) {
        this._ttWidConfig = safeJsonUtils.safeParse(e, {});
        this._waitingTTWidConfigReady = Promise.resolve(true);
      } else {
        this._waitingTTWidConfigReady = new Promise(e => {
          this._resolveTTWidConfigReady = e;
        }).then(e => {
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "TTWidManager_ttWidConfig_resolved"
          });
          return e;
        });
      }
    }
  }();
  require.d(exports, {
    ttWidManager: function () {
      return l;
    }
  });
}