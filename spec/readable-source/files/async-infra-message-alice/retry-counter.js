// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'RetryCounter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 774711
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
  class a {
    add() {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "retry_counter_add",
        meta: {
          attempts: this._attempts
        }
      });
      this._attempts++;
    }
    reset() {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "retry_counter_reset",
        meta: {
          attempts: this._attempts
        }
      });
      this._attempts = 0;
    }
    updateConnectingTimeoutTimer(e) {
      if (this._connectionHeartbeatTimeoutTimer) {
        clearTimeout(this._connectionHeartbeatTimeoutTimer);
      }
      if (this._connectionHeartbeatTimeoutInterval) {
        this._connectionHeartbeatTimeoutTimer = setTimeout(() => {
          e();
        }, this._connectionHeartbeatTimeoutInterval);
      }
    }
    clearConnectionHeartbeatTimeoutTimer() {
      if (this._connectionHeartbeatTimeoutTimer) {
        clearTimeout(this._connectionHeartbeatTimeoutTimer);
        this._connectionHeartbeatTimeoutTimer = null;
      }
    }
    get attempts() {
      return this._attempts;
    }
    matchMaxRetryAttempts() {
      return this._attempts >= this._maxRetryAttempts;
    }
    constructor(e = 0, t = 0) {
      this._maxRetryAttempts = e;
      this._connectionHeartbeatTimeoutInterval = t;
      r(this, "_attempts", 0);
      r(this, "_connectionHeartbeatTimeoutTimer", null);
    }
  }
  require.d(exports, {
    RetryCounter: function () {
      return a;
    }
  });
}