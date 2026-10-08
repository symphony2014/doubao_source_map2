// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'NeotixChannel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-canvas-openurl-url-parse-plugin.3e6c43f8.js
         * chunkId: 17547
         * moduleId: 872542
         */
module.exports = function (module, exports, require) {
  var a;
  var i;
  var o;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  class l {
    static async on(e, t) {
      if (this._neotixChannel) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "shell_api_neotix_channel_on_log",
          meta: {
            name: e,
            from: typeof window != "undefined" ? window.location.origin : ""
          }
        });
        return await this._neotixChannel.on(e, t);
      }
    }
    static async off(e, t) {
      if (this._neotixChannel) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "shell_api_neotix_channel_off_log",
          meta: {
            name: e,
            from: typeof window != "undefined" ? window.location.origin : ""
          }
        });
        return await this._neotixChannel.off(e, t);
      }
    }
    static async broadcast(e, t, n) {
      if (this._neotixChannel) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "shell_api_neotix_channel_broadcast_log",
          meta: {
            name: e,
            from: typeof window != "undefined" ? window.location.origin : ""
          }
        });
        return await this._neotixChannel.broadcast(e, t, n);
      }
    }
    static async sendToTargets(e, t, n, a) {
      if (this._neotixChannel) {
        return await this._neotixChannel.sendToTargets(e, t, n, a);
      }
    }
  }
  i = "_neotixChannel";
  o = typeof window != "undefined" ? window?.neotixChannel : undefined;
  if ((i = typeof (a = function (e, t) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var n = e[Symbol.toPrimitive];
    if (n !== undefined) {
      var a = n.call(e, t || "default");
      if (typeof a != "object") {
        return a;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }(i, "string")) == "symbol" ? a : a + "") in l) {
    Object.defineProperty(l, i, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    l[i] = o;
  }
  require.d(exports, {
    NeotixChannel: function () {
      return l;
    }
  });
}