// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'eventEmitterWrapper_1'
// - Resolved require(740547) to 'event-emitter-wrapper_1'
// - Renamed variable 's' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'domainUrlConverter'
// - Resolved require(42970) to 'domain-url-converter'
// - Renamed variable 'h' to 'chatConfigConstants'
// - Resolved require(577013) to 'chat-config-constants'
// - Renamed variable 'v' to 'uuidGeneratorUtil'
// - Resolved require(641535) to 'uuid-generator-util'
// - Renamed variable 'm' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'y' to 'frontierWebsocketClient'
// - Resolved require(177216) to 'frontier-websocket-client'
// - Updated imported property 'Fr' to 'convertDomainUrl' (module 42970)
// - Updated imported property 'HI' to 'chatIdHi' (module 577013)
// - Updated imported property 'DP' to 'platformType' (module 577013)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'eventEmitter' (module 740547)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'Z' to 'generateUuid' (module 641535)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 62847.d24ceef0.js
         * chunkId: 62847
         * moduleId: 577774
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let r = e => {
    try {
      return new URL(e).hostname;
    } catch (e) {
      return "";
    }
  };
  function o(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class a {
    report(e) {
      this.connectionUseTracerParams = e;
      this.logger.success({
        eventName: this.eventName,
        meta: this.connectionUseTracerParams
      });
    }
    constructor(e, t) {
      this.logger = t;
      o(this, "connectionUseTracerParams", undefined);
      o(this, "eventName", "ws_connection_use");
      this.connectionUseTracerParams = {
        access_key_v2: e.access_key_v2,
        access_key: e.access_key,
        device_id: e.device_id,
        ttwid: e.ttwid,
        endpoint: e.endpoint
      };
    }
  }
  function c() {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
  }
  var domainUrlConverter = require("domain-url-converter") /*id: 42970*/;
  var chatConfigConstants = require("chat-config-constants") /*id: 577013*/;
  class d {
    getConfig() {
      var e;
      let {
        config: t
      } = this;
      let i = (e = this.getSocketParams) === null || e === undefined ? undefined : e.call(this, t);
      return {
        fpID: t.ws_product_id || "",
        aID: t.ws_app_id || "",
        url: domainUrlConverter.convertDomainUrl(t.ws_domain || ""),
        service: Number(t.message_service_id) || 0,
        ttwID: t.ttwid,
        accessKey: t.ws_access_key || "",
        customParams: {
          version_code: chatConfigConstants.chatIdHi,
          device_platform: chatConfigConstants.platformType,
          ...(i ?? {}),
          device_id: t.web_id && t.web_id !== "0" ? t.web_id : ""
        },
        maxRetries: 10,
        maxMessageQueueLength: 0
      };
    }
    async refreshConfig() {
      try {
        var e;
        let t = await ((e = this.refreshSocketConfig) === null || e === undefined ? undefined : e.call(this));
        if (!t) {
          return;
        }
        this.config = t;
      } catch (e) {
        loggerServiceCore.defaultLogger.console.log({
          message: "Failed to refresh config:",
          error: e
        });
      }
    }
    constructor(e, t, i) {
      this.config = e;
      this.getSocketParams = t;
      this.refreshSocketConfig = i;
    }
  }
  let u = e => {
    if (!e || typeof e != "object") {
      return false;
    }
    let {
      type: t,
      level: i
    } = e;
    return t === "SOCKET_CLIENT_LOGGER_REPORT" && (i === "info" || i === "success" || i === "error");
  };
  let _ = (e, t) => {
    let i = e => {
      let {
        data: i
      } = e;
      if (u(i)) {
        if (i.level === "error") {
          t.error(i.payload);
          return;
        }
        if (i.level === "success") {
          t.success(i.payload);
          return;
        }
        t.info(i.payload);
      }
    };
    e.addEventListener("message", i);
    return () => {
      e.removeEventListener("message", i);
    };
  };
  function f() {
    return new SharedWorker("/doubao/chat/scripts/workers/502299dfeabbd878.sharedworker.js");
  }
  function p(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class g extends eventEmitterWrapper_1.eventEmitter {
    async _dispatch(e) {
      let t = this._request(e);
      let i = setTimeout(() => {
        let t = this._pending.get(e.payload.id);
        if (t) {
          this.logger.info(`[socket-client:port] request timeout, type: ${e.type}, id: ${e.payload.id}`);
          this._pending.delete(e.payload.id);
          t.reject(Error("shared worker request timeout"));
        }
      }, 5000);
      try {
        await t;
      } catch (e) {
        this.emit("error", e);
      } finally {
        clearTimeout(i);
      }
    }
    _rejectPendingRequests(e) {
      for (let [t, i] of this._pending) {
        i.reject(e);
      }
      this._pending.clear();
    }
    _resetPortReferences() {
      this._port = undefined;
      this._worker = undefined;
    }
    _resetConnectionState() {
      this._state = "idle";
      this._subscribed = false;
    }
    _resetConfigState() {
      this._frontierConfigManager = undefined;
    }
    _detachUnloadListener() {
      if (typeof window != "undefined") {
        window.removeEventListener("beforeunload", this.destroy);
      }
    }
    _attachUnloadListener() {
      if (typeof window != "undefined") {
        window.addEventListener("beforeunload", this.destroy);
      }
    }
    _closePort() {
      try {
        var e;
        if ((e = this._port) !== null && e !== undefined) {
          e.close();
        }
      } catch (e) {
        this.emit("error", e);
      }
    }
    _ensurePort() {
      var e;
      var t;
      var i;
      if (this._port) {
        return this._port;
      }
      if (typeof SharedWorker == "undefined" || (this.logger.info("[socket-client:port] create shared worker port"), this._worker = new f(), !this._worker)) {
        throw Error("SharedWorker is not supported in this environment");
      }
      this._port = this._worker.port;
      _(this._port, this.logger);
      this._port.onmessage = e => {
        this._handleWorkerMessage(e.data);
      };
      this._port.onmessageerror = () => {
        this.logger.info("[socket-client:port] shared worker message error");
        this.emit("error", Error("shared worker message error"));
      };
      this._worker.onerror = () => {
        this.logger.info("[socket-client:port] shared worker error, recreate port");
        this._recreatePort();
      };
      if ((e = (t = this._port).start) !== null && e !== undefined) {
        e.call(t);
      }
      this.logger.info("[socket-client:port] subscribe before connect");
      this.subscribe();
      this.logger.info("[socket-client:port] connect to shared worker");
      let n = (i = this._frontierConfigManager) === null || i === undefined ? undefined : i.getConfig();
      if (!n) {
        throw Error("frontier config not found");
      }
      this._dispatch({
        type: "CONNECT",
        payload: {
          id: c(),
          options: n
        }
      });
      return this._port;
    }
    _recreatePort() {
      try {
        if (this._destroyed) {
          return;
        }
        this.logger.info("[socket-client:port] recreate shared worker port");
        this._closePort();
        this._resetPortReferences();
        this._resetConnectionState();
        this._ensurePort();
      } catch (e) {
        this.emit("error", e);
      }
    }
    _handleWorkerMessage(e) {
      if (e && typeof e == "object") {
        switch (e.type) {
          case "OPEN":
            this._state = "open";
            this.emit("open");
            return;
          case "CLOSE":
            this._state = "closed";
            this.emit("close");
            return;
          case "MESSAGE":
            this.emit("message", e.payload.data);
            return;
          case "ERROR":
            this.emit("error", e.payload.error);
            return;
          case "ACK":
            {
              let t = this._pending.get(e.payload.id);
              if (!t) {
                return;
              }
              this._pending.delete(e.payload.id);
              t.resolve(e.payload.data);
              return;
            }
          case "ACK_ERROR":
            {
              let t = this._pending.get(e.payload.id);
              if (!t) {
                return;
              }
              this._pending.delete(e.payload.id);
              t.reject(e.payload.error);
              return;
            }
          default:
            return;
        }
      }
    }
    async _request(e) {
      if (this._destroyed) {
        throw Error("socket client destroyed");
      }
      let t = this._ensurePort();
      return new Promise((i, n) => {
        this._pending.set(e.payload.id, {
          resolve: i,
          reject: n
        });
        t.postMessage(e);
      });
    }
    init(e) {
      try {
        let {
          config: t,
          getSocketParams: i,
          refreshSocketConfig: n
        } = e;
        this.logger.info("[socket-client:port] init shared worker client");
        this._frontierConfigManager = new d(t, i, n);
        this._ensurePort();
      } catch (e) {
        this.emit("error", e);
      }
    }
    send(e, t) {
      let i = c();
      return this._dispatch({
        type: "SEND",
        payload: {
          id: i,
          data: e,
          options: t
        }
      });
    }
    async reconnect(e) {
      this.logger.info(`[socket-client:port] reconnect shared worker client\u{FF0C}reason: ${e}`);
      try {
        if (!this._frontierConfigManager) {
          throw Error("FrontierConfigManager not initialized");
        }
        await this._frontierConfigManager.refreshConfig();
        await this._dispatch({
          type: "UPDATE_OPTIONS",
          payload: {
            id: c(),
            options: this._frontierConfigManager.getConfig()
          }
        });
        await this._dispatch({
          type: "FORCE_RECONNECT",
          payload: {
            id: c()
          }
        });
      } catch (e) {
        this.emit("error", e);
      }
    }
    close() {
      return this.unsubscribe();
    }
    get readyState() {
      if (this._state === "connecting") {
        return 0;
      } else if (this._state === "open") {
        return 1;
      } else if (this._state === "closed" || this._state === "error") {
        return 3;
      } else {
        return undefined;
      }
    }
    async ping() {
      let e = c();
      await this._dispatch({
        type: "PING",
        payload: {
          id: e
        }
      });
    }
    async subscribe() {
      if (!this._subscribed) {
        this._subscribed = true;
        await this._dispatch({
          type: "SUBSCRIBE",
          payload: {
            id: c()
          }
        });
      }
    }
    async unsubscribe() {
      if (this._subscribed) {
        this._subscribed = false;
        await this._dispatch({
          type: "UNSUBSCRIBE",
          payload: {
            id: c()
          }
        });
      }
    }
    async destroy() {
      try {
        await this.close();
      } catch (e) {
        this.logger.error({
          message: "[socket-client:port] error occurred while closing",
          error: e
        });
      }
      this._destroyed = true;
      this.logger.info("[socket-client:port] destroy shared worker client");
      this._rejectPendingRequests(Error("socket client destroyed"));
      this._resetPortReferences();
      this._resetConnectionState();
      this._resetConfigState();
      this._detachUnloadListener();
      this._closePort();
      this.removeAllListeners();
    }
    constructor(e) {
      super();
      this.logger = e;
      p(this, "_destroyed", false);
      p(this, "_state", "idle");
      p(this, "_subscribed", false);
      p(this, "_worker", undefined);
      p(this, "_port", undefined);
      p(this, "_pending", new Map());
      p(this, "_frontierConfigManager", undefined);
      p(this, "runtime", "SharedWorker");
      this.destroy = this.destroy.bind(this);
      this._attachUnloadListener();
    }
  }
  p(g, "runtime", "SharedWorker");
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var frontierWebsocketClient = require("frontier-websocket-client") /*id: 177216*/;
  let w = e => {
    let {
      deviceID: i,
      customParams: n
    } = e;
    let s = {};
    s = n instanceof Function ? {} : n ?? {};
    return String(i ?? (s == null ? undefined : s.device_id)) ?? "";
  };
  let b = {
    1000: {
      code: 1000,
      category: "normal",
      reason: "Normal closure"
    },
    1001: {
      code: 1001,
      category: "normal",
      reason: "Endpoint is going away"
    },
    1002: {
      code: 1002,
      category: "protocol",
      reason: "Protocol error"
    },
    1003: {
      code: 1003,
      category: "protocol",
      reason: "Unsupported data"
    },
    1006: {
      code: 1006,
      category: "network",
      reason: "Abnormal closure (network error or crash)"
    },
    1007: {
      code: 1007,
      category: "protocol",
      reason: "Invalid frame payload data"
    },
    1008: {
      code: 1008,
      category: "policy",
      reason: "Policy violation"
    },
    1009: {
      code: 1009,
      category: "client",
      reason: "Message too big"
    },
    1010: {
      code: 1010,
      category: "protocol",
      reason: "Mandatory extension missing"
    },
    1011: {
      code: 1011,
      category: "server",
      reason: "Internal server error"
    },
    1012: {
      code: 1012,
      category: "server",
      reason: "Service restarted"
    },
    1013: {
      code: 1013,
      category: "server",
      reason: "Service overloaded, try again later"
    }
  };
  function E(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class C {
    addConnectOpenSuccessCount() {
      let {
        connect_open_success_count: i = 0
      } = this.runtimeSessionTracerParams ?? {};
      this.runtimeSessionTracerParams = {
        ...(this.runtimeSessionTracerParams ?? {}),
        connect_open_success_count: i + 1
      };
    }
    addConsecutiveFailuresCount() {
      let {
        consecutive_failures_count: i = 0,
        consecutive_failures_count_max: n = 0
      } = this.runtimeSessionTracerParams ?? {};
      this.runtimeSessionTracerParams = {
        ...(this.runtimeSessionTracerParams ?? {}),
        consecutive_failures_count: i + 1,
        consecutive_failures_count_max: Math.max(i + 1, n)
      };
    }
    resetConsecutiveFailuresAfter() {
      this.runtimeSessionTracerParams = {
        ...(this.runtimeSessionTracerParams ?? {}),
        consecutive_failures_count: 0
      };
    }
    startConnectionUptime() {
      if (!this.connectionActiveStartTime) {
        this.connectionActiveStartTime = performance.now();
      }
    }
    stopConnectionUptime() {
      if (this.connectionActiveStartTime) {
        this.totalConnectionUptimeDurationMs += performance.now() - this.connectionActiveStartTime;
        this.connectionActiveStartTime = undefined;
      }
    }
    getTotalUptimeDurationMs() {
      let {
        startTime: e
      } = this;
      return performance.now() - e;
    }
    getTotalConnectionUptimeDurationMs() {
      this.stopConnectionUptime();
      return this.totalConnectionUptimeDurationMs;
    }
    report(e) {
      let i = this.getTotalUptimeDurationMs();
      let n = this.getTotalConnectionUptimeDurationMs();
      this.runtimeSessionTracerParams = {
        ...(this.runtimeSessionTracerParams ?? {}),
        active_clients: e.active_clients,
        current_connection_state: e.current_connection_state,
        total_uptime_duration_ms: i,
        total_connection_uptime_duration_ms: n,
        connection_active_duration_rate: n / i
      };
      this.logger.success({
        eventName: this.eventName,
        meta: this.runtimeSessionTracerParams
      });
    }
    constructor(e, t) {
      this.logger = t;
      E(this, "eventName", "ws_connection_runtime_session");
      E(this, "runtimeSessionTracerParams", undefined);
      E(this, "startTime", performance.now());
      E(this, "totalConnectionUptimeDurationMs", 0);
      E(this, "connectionActiveStartTime", undefined);
      this.runtimeSessionTracerParams = {
        ws_runtime: e
      };
    }
  }
  function S(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class T {
    collectMeta(e) {
      return {
        ...this.commonTracerParams,
        ...e
      };
    }
    constructor(e, t) {
      S(this, "commonTracerParams", undefined);
      S(this, "eventName", undefined);
      this.commonTracerParams = e;
      this.eventName = t;
    }
  }
  function k(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class O extends T {
    addAttemptCount() {
      let {
        attempt_count: i = 0
      } = this.transactionTracerParams ?? {};
      this.transactionTracerParams = {
        ...(this.transactionTracerParams ?? {}),
        attempt_count: i + 1
      };
    }
    getConnectDuration() {
      let {
        startTime: e
      } = this;
      return performance.now() - e;
    }
    reportSuccess() {
      if (!this.hasReported) {
        this.hasReported = true;
        this.transactionTracerParams = {
          ...(this.transactionTracerParams ?? {}),
          connect_success: true,
          connect_end_stage: "open_success",
          connect_end_duration: this.getConnectDuration()
        };
        this.logger.success({
          eventName: this.eventName,
          meta: this.collectMeta(this.transactionTracerParams)
        });
      }
    }
    reportFailed(e) {
      var n;
      if (this.hasReported) {
        return;
      }
      this.hasReported = true;
      let s = (n = e) ? n.message.includes("timeout") ? "timeout" : n.message.includes("network") ? "network_offline" : n.message.includes("auth") ? "auth_failed" : n.message.includes("not support") ? "not_support_enviroment" : "other" : "other";
      this.transactionTracerParams = {
        ...(this.transactionTracerParams ?? {}),
        connect_success: false,
        connect_end_stage: "open_failed",
        connect_failed_reason: s,
        connect_failed_raw_reason: (e == null ? undefined : e.message) ?? "unknown",
        connect_end_duration: this.getConnectDuration()
      };
      this.logger.error({
        eventName: this.eventName,
        meta: this.collectMeta(this.transactionTracerParams),
        error: e
      });
    }
    reportCancel() {
      if (!this.hasReported) {
        this.hasReported = true;
        this.transactionTracerParams = {
          ...(this.transactionTracerParams ?? {}),
          connect_success: false,
          connect_end_stage: "open_cancelled",
          connect_end_duration: this.getConnectDuration()
        };
        this.logger.success({
          eventName: this.eventName,
          meta: this.collectMeta(this.transactionTracerParams)
        });
      }
    }
    constructor(e, t) {
      super(e, "ws_connect_transaction");
      this.logger = t;
      k(this, "transactionTracerParams", undefined);
      k(this, "hasReported", false);
      k(this, "startTime", performance.now());
    }
  }
  function I(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class L extends T {
    getSessionUptimeMs() {
      let {
        startTime: e
      } = this;
      return performance.now() - e;
    }
    report(e) {
      this.sessionTracerParams = {
        ...(this.sessionTracerParams ?? {}),
        session_uptime_ms: this.getSessionUptimeMs(),
        active_clients_at_close: e.active_clients_at_close,
        was_retrying_before_close: e.was_retrying_before_close,
        close_reason: e.close_reason,
        close_category: e.close_category
      };
      this.logger.success({
        eventName: this.eventName,
        meta: this.collectMeta(this.sessionTracerParams)
      });
    }
    constructor(e, t) {
      super(e, "ws_connection_session");
      this.logger = t;
      I(this, "sessionTracerParams", undefined);
      I(this, "startTime", performance.now());
    }
  }
  function P(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class R extends eventEmitterWrapper_1.eventEmitter {
    _destroyFws() {
      var e;
      var t;
      var i;
      var n;
      var s;
      if ((e = this.fws) !== null && e !== undefined) {
        e.close();
      }
      if ((t = this.fws) !== null && t !== undefined) {
        t.off("open");
      }
      if ((i = this.fws) !== null && i !== undefined) {
        i.off("close");
      }
      if ((n = this.fws) !== null && n !== undefined) {
        n.off("message");
      }
      if ((s = this.fws) !== null && s !== undefined) {
        s.off("error");
      }
      if (this.fws) {
        this.fws.onmessage = null;
        this.fws.onerror = null;
        this.fws.onclose = null;
        this.fws.onopen = null;
        this.fws.onStartReconnect = null;
      }
    }
    _resetLifecycleState() {
      this._destroyed = true;
      this._reconnectInFlight = false;
      this._fwsOptions = undefined;
      this.connectionSessionTracer = undefined;
      this.connectionOpenTracer = undefined;
    }
    _setFwsHandlers() {
      if (this.fws) {
        this.fws.onopen = () => {
          this.emit("open");
          if (this.connectionOpenTracer) {
            this.connectionOpenTracer.reportSuccess();
            this.connectionSessionTracer = new L(this.connectionOpenTracer?.commonTracerParams, this.logger);
            this.connectionRuntimeSessionTracer.addConnectOpenSuccessCount();
            this.connectionRuntimeSessionTracer.resetConsecutiveFailuresAfter();
            this.connectionRuntimeSessionTracer.startConnectionUptime();
          }
        };
        this.fws.onStartReconnect = () => {
          if (this.connectionOpenTracer) {
            this.connectionOpenTracer.addAttemptCount();
          }
        };
        this.fws.onmessage = e => {
          var i;
          let n = "";
          try {
            n = this._decoder.decode(e.message.payload);
          } catch {
            return;
          }
          let s = safeJsonUtils.safeParse(n, {});
          let r = (i = e.message.headers) === null || i === undefined ? undefined : i.find(e => e.key === "x_frontier_traceid")?.value;
          if (s && typeof s == "object") {
            this.emit("message", {
              data: s,
              trace_id: r
            });
          }
        };
        this.fws.onclose = e => {
          var t;
          this.emit("close");
          if (!this.connectionOpenTracer) {
            return;
          }
          this.connectionRuntimeSessionTracer.stopConnectionUptime();
          this.connectionOpenTracer.reportCancel();
          let i = function (e, t) {
            let i = b[e];
            if (i) {
              return {
                ...i,
                reason: t || i.reason
              };
            } else {
              return {
                code: e,
                category: "unknown",
                reason: t || "Unknown close reason"
              };
            }
          }(e.code, e.reason);
          if ((t = this.connectionSessionTracer) !== null && t !== undefined) {
            t.report({
              close_reason: i.reason,
              close_category: i.category,
              active_clients_at_close: this._activeClientsCount,
              was_retrying_before_close: e.willReconnect
            });
          }
        };
        this.fws.onerror = e => {
          this.emit("error", e);
          if (this.connectionOpenTracer) {
            this.connectionOpenTracer.reportFailed(Error(e.message));
            this.connectionRuntimeSessionTracer.addConsecutiveFailuresCount();
          }
        };
      }
    }
    _init(e) {
      this._destroyed = false;
      this.updateOptions(e);
      if (this.fws) {
        this._destroyFws();
      }
      this.connectionOpenTracer = new O({
        device_id: w(e) ?? "",
        access_token: e.accessKey,
        ttwid: String(e.ttwID) ?? "",
        connection_id: uuidGeneratorUtil.generateUuid(),
        ws_runtime: this.runtime,
        endpoint: r(Array.isArray(e.url) ? e.url[0] : e.url)
      }, this.logger);
      this.connectionOpenTracer.addAttemptCount();
      if (this.connectionOpenTracer) {
        try {
          this.fws = new frontierWebsocketClient.FWS(e);
        } catch (e) {
          this.emit("error", e);
          this.connectionOpenTracer.reportFailed(e);
          this.connectionRuntimeSessionTracer.addConsecutiveFailuresCount();
        }
        this._setFwsHandlers();
      }
    }
    reconnect(e) {
      if (!this._destroyed && !this._reconnectInFlight && this.fws) {
        this._reconnectInFlight = true;
        if (this._fwsOptions) {
          this._init(this._fwsOptions);
        }
        this._reconnectInFlight = false;
      }
    }
    attemptReconnect() {
      if (!this._destroyed && this.fws && this.fws.readyState !== this.fws.CONNECTING) {
        if (this.fws.readyState === this.fws.CLOSED || this.fws.readyState === this.fws.CLOSING) {
          this.reconnect("reconnecting on readyState CLOSED/CLOSING");
          return;
        }
        if (this.fws.readyState !== this.fws.OPEN) {
          this.reconnect("reconnecting on readyState != OPEN");
          return;
        }
        this.fws.pingOnce().catch(() => {
          this.reconnect("reconnecting on ping failure");
        });
      }
    }
    updateOptions(e) {
      this._fwsOptions = e;
    }
    async send(e, t) {
      if (!this.fws) {
        throw Error("fws send error: expect fws instance");
      }
      let i = (t == null ? undefined : t.headers) ? Object.entries(t.headers) : [];
      return this.fws.send(e, {
        headers: i.map(e => {
          let [t, i] = e;
          return {
            key: t,
            value: i
          };
        })
      });
    }
    close() {
      var e;
      if ((e = this.fws) !== null && e !== undefined) {
        e.close();
      }
    }
    get readyState() {
      return this.fws?.readyState;
    }
    destroy() {
      this.connectionRuntimeSessionTracer.stopConnectionUptime();
      this.connectionRuntimeSessionTracer.report({
        active_clients: this._activeClientsCount,
        current_connection_state: function (e) {
          switch (e) {
            case WebSocket.OPEN:
              return "open";
            case WebSocket.CONNECTING:
              return "connecting";
            case WebSocket.CLOSING:
              return "closing";
            case WebSocket.CLOSED:
            default:
              return "closed";
          }
        }(this.fws?.readyState)
      });
      this._destroyFws();
      this._resetLifecycleState();
      this.removeAllListeners();
    }
    constructor(e, t) {
      super();
      this.runtime = e;
      this.logger = t;
      P(this, "fws", undefined);
      P(this, "_destroyed", false);
      P(this, "_reconnectInFlight", false);
      P(this, "_decoder", new TextDecoder());
      P(this, "_fwsOptions", undefined);
      P(this, "_activeClientsCount", 0);
      P(this, "connectionOpenTracer", undefined);
      P(this, "connectionSessionTracer", undefined);
      P(this, "connectionRuntimeSessionTracer", undefined);
      this.attemptReconnect = this.attemptReconnect.bind(this);
      this.destroy = this.destroy.bind(this);
      this.connectionRuntimeSessionTracer = new C(this.runtime, this.logger);
    }
  }
  function D(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class M extends R {
    _attachWindowFocusListener() {
      var e;
      var t;
      var i;
      var n;
      if (typeof window != "undefined") {
        if ((t = window) !== null && t !== undefined && (e = t.removeEventListener) !== null && e !== undefined) {
          e.call(t, "focus", this.attemptReconnect);
        }
        if ((n = window) !== null && n !== undefined && (i = n.addEventListener) !== null && i !== undefined) {
          i.call(n, "focus", this.attemptReconnect);
        }
      }
    }
    _detachWindowFocusListener() {
      var e;
      var t;
      if (typeof window != "undefined") {
        if ((t = window) !== null && t !== undefined && (e = t.removeEventListener) !== null && e !== undefined) {
          e.call(t, "focus", this.attemptReconnect);
        }
      }
    }
    _attachWindowDestroyListener() {
      var e;
      var t;
      var i;
      var n;
      if (typeof window != "undefined") {
        if ((t = window) !== null && t !== undefined && (e = t.removeEventListener) !== null && e !== undefined) {
          e.call(t, "beforeunload", this.destroy);
        }
        if ((n = window) !== null && n !== undefined && (i = n.addEventListener) !== null && i !== undefined) {
          i.call(n, "beforeunload", this.destroy);
        }
      }
    }
    _resetFrontierConfigManager() {
      this._frontierConfigManager = undefined;
    }
    _detachWindowDestroyListener() {
      var e;
      var t;
      if (typeof window != "undefined") {
        if ((t = window) !== null && t !== undefined && (e = t.removeEventListener) !== null && e !== undefined) {
          e.call(t, "beforeunload", this.destroy);
        }
      }
    }
    init(e) {
      let {
        config: t,
        getSocketParams: i,
        refreshSocketConfig: n
      } = e;
      loggerServiceCore.defaultLogger.persist.info("[socket-client:page] init page client");
      this._frontierConfigManager = new d(t, i, n);
      let r = this._frontierConfigManager.getConfig();
      super._init(r);
      this._attachWindowFocusListener();
      this._attachWindowDestroyListener();
    }
    async reconnect(e) {
      loggerServiceCore.defaultLogger.persist.info(`[socket-client:page] reconnect page client\u{FF0C}reason: ${e}`);
      if (this._frontierConfigManager) {
        await this._frontierConfigManager.refreshConfig();
        this.updateOptions(this._frontierConfigManager.getConfig());
      }
      super.reconnect(e);
    }
    destroy() {
      loggerServiceCore.defaultLogger.persist.info("[socket-client:page] destroy page client");
      super.destroy();
      this._detachWindowFocusListener();
      this._detachWindowDestroyListener();
      this._resetFrontierConfigManager();
    }
    constructor(e) {
      super("BrowserPage", e);
      D(this, "_frontierConfigManager", undefined);
      this.attemptReconnect = this.attemptReconnect.bind(this);
      this.destroy = this.destroy.bind(this);
    }
  }
  D(M, "runtime", "BrowserPage");
  let N = e => loggerServiceCore.defaultLogger.persist.info(e);
  let x = e => loggerServiceCore.defaultLogger.persist.success(e);
  let B = e => loggerServiceCore.defaultLogger.persist.error(e);
  let A = () => ({
    info: e => N(e),
    success: e => x(e),
    error: e => B(e)
  });
  function q(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class j extends eventEmitterWrapper_1.eventEmitter {
    _onOpen() {
      var t;
      var n;
      var o;
      var c;
      var l;
      var p;
      var g;
      var v;
      new a({
        access_key: String((t = this._initOptions) === null || t === undefined ? undefined : t.config?.ws_access_key) ?? "",
        access_key_v2: String((n = this._initOptions) === null || n === undefined ? undefined : n.config?.ws_access_key_v2) ?? "",
        device_id: String((o = this._initOptions) === null || o === undefined ? undefined : o.config?.web_id) ?? "",
        ttwid: String((c = this._initOptions) === null || c === undefined ? undefined : c.config.ttwid) ?? "",
        endpoint: r(((l = this._initOptions) === null || l === undefined ? undefined : l.config.ws_domain) ?? "")
      }, this._logger).report({
        is_fallback: this._fallbackAttached,
        primary_edition: this._PrimarySupplier.runtime,
        fallback_edition: this._FallbackSupplier.runtime,
        ws_runtime: (p = this._active, g = this._PrimarySupplier, v = this._FallbackSupplier, p instanceof g ? g.runtime : v.runtime)
      });
      this.emit("open");
    }
    _onClose() {
      this.emit("close");
    }
    _onMessage(e) {
      this.emit("message", e);
    }
    _getErrorInfo(e) {
      if (e == null ? undefined : e.message) {
        return e.message;
      }
      if (e == null ? undefined : e.stack) {
        return e.stack;
      }
      if (typeof e == "string") {
        return e;
      }
      if (typeof e == "number" || typeof e == "boolean" || typeof e == "bigint") {
        return String(e);
      }
      if (e && typeof e == "object") {
        try {
          return JSON.stringify(e, Object.getOwnPropertyNames(e));
        } catch {}
      }
      return String(e);
    }
    _onError(e) {
      let t = this._getErrorInfo(e);
      if (this._fallbackAttached) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "[socket-client] error occurred using fallback",
          error: e,
          meta: {
            error_info: t
          }
        });
        this.emit("error", e);
        return;
      }
      loggerServiceCore.defaultLogger.persist.error({
        message: "[socket-client] error, trying fallback",
        error: e,
        meta: {
          error_info: t
        }
      });
      this._ensureFallback();
    }
    _bindActiveEvents() {
      if (this._active) {
        this._active.on("open", this._onOpen);
        this._active.on("close", this._onClose);
        this._active.on("message", this._onMessage);
        this._active.on("error", this._onError);
      }
    }
    _unbindActiveEvents() {
      if (this._active) {
        this._active.off("open", this._onOpen);
        this._active.off("close", this._onClose);
        this._active.off("message", this._onMessage);
        this._active.off("error", this._onError);
      }
    }
    _ensureFallback() {
      var e;
      if (!this._fallbackAttached) {
        this._fallbackAttached = true;
        this._unbindActiveEvents();
        if ((e = this._active) !== null && e !== undefined) {
          e.destroy();
        }
        this._active = new this._FallbackSupplier(this._logger);
        this._bindActiveEvents();
        if (this._initOptions) {
          this._active.init(this._initOptions);
        }
      }
      return this._active;
    }
    init(e) {
      this._initOptions = e;
      this._active.init(e);
    }
    send(e, t) {
      return this._active.send(e, t);
    }
    reconnect(e) {
      var t;
      var i;
      if ((t = (i = this._active).reconnect) === null || t === undefined) {
        return undefined;
      } else {
        return t.call(i, e);
      }
    }
    close() {
      return this._active.close();
    }
    destroy() {
      var e;
      if ((e = this._active) !== null && e !== undefined) {
        e.destroy();
      }
      this._unbindActiveEvents();
      this.removeAllListeners();
    }
    constructor(e) {
      super();
      q(this, "_PrimarySupplier", undefined);
      q(this, "_FallbackSupplier", undefined);
      q(this, "_logger", undefined);
      q(this, "_active", undefined);
      q(this, "_fallbackAttached", false);
      q(this, "_initOptions", undefined);
      this._PrimarySupplier = e.primary;
      this._FallbackSupplier = e.fallback;
      this._logger = A();
      this._onOpen = this._onOpen.bind(this);
      this._onClose = this._onClose.bind(this);
      this._onMessage = this._onMessage.bind(this);
      this._onError = this._onError.bind(this);
      this._active = new this._PrimarySupplier(this._logger);
      this._bindActiveEvents();
    }
  }
  function F() {
    return new j({
      primary: g,
      fallback: M
    });
  }
  require.r(exports);
  require.d(exports, {
    createSocketClientWithWorkerFallback: function () {
      return F;
    }
  });
}