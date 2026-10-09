// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'DeprecatedCustomEdenxRuntime'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 981877
         */
module.exports = function (module, exports, require) {
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function o(e, t, n) {
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
  class a {
    static getInstance() {
      if (!a._instance) {
        throw Error("DeprecatedCustomEdenxRuntime not initialized");
      }
      return a._instance;
    }
    static init(e) {
      a._instance ||= new a(e);
      if (typeof window != "undefined") {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "DeprecatedCustomEdenxRuntime.init",
          meta: {
            type: e.type,
            custom: safeObjectPropertyMap.safeObjectMap(e.custom, Boolean)
          }
        });
      }
    }
    constructor({
      type: e,
      custom: t
    }) {
      o(this, "type", undefined);
      o(this, "custom", undefined);
      this.type = e;
      this.custom = t;
    }
  }
  o(a, "_instance", undefined);
  require.d(exports, {
    DeprecatedCustomEdenxRuntime: function () {
      return a;
    }
  });
}