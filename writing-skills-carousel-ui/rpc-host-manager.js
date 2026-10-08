// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'RpcHostManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 953389
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var feishuAccessTokenService = require("feishu-access-token-service") /*id: 578645*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcProtocolConstants = require("rpc-protocol-constants") /*id: 645329*/;
  var rpcChannelCore = require("rpc-channel-core") /*id: 737542*/;
  var corpcDebugLoggers = require("corpc-debug-loggers") /*id: 363765*/;
  function d(e, t, n) {
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
  class p {
    init(e) {
      if (this.port) {
        this.dispose();
      }
      this.port = e;
      this.boundMessageHandler = this.handleMessage.bind(this);
      this.port.addEventListener("message", this.boundMessageHandler);
      this.port.start();
    }
    setHandlers(e) {
      this.handlers = {
        ...this.handlers,
        ...e
      };
    }
    send(e) {
      if (!this.port) {
        corpcDebugLoggers.dispatcherDebug("[warn] Cannot send message: port not initialized");
        return;
      }
      this.port.postMessage(e);
    }
    handleMessage(e) {
      var t;
      var n;
      var i;
      var r;
      var o;
      var s;
      var a;
      var c;
      var d;
      var p;
      let h = e.data;
      if (!h || typeof h != "object" || !("type" in h)) {
        corpcDebugLoggers.dispatcherDebug("[warn] Received invalid message:", h);
        return;
      }
      switch (h.type) {
        case rpcProtocolConstants.messageTypes.HEARTBEAT:
          if ((t = (n = this.handlers).onHeartbeat) !== null && t !== undefined) {
            t.call(n, h);
          }
          break;
        case rpcProtocolConstants.messageTypes.HEARTBEAT_ACK:
          if ((i = (r = this.handlers).onHeartbeatAck) !== null && i !== undefined) {
            i.call(r, h);
          }
          break;
        case rpcProtocolConstants.messageTypes.RPC_REQUEST:
          if ((o = (s = this.handlers).onRpcRequest) !== null && o !== undefined) {
            o.call(s, h);
          }
          break;
        case rpcProtocolConstants.messageTypes.RPC_RESPONSE:
          if ((a = (c = this.handlers).onRpcResponse) !== null && a !== undefined) {
            a.call(c, h);
          }
          break;
        case rpcProtocolConstants.messageTypes.EVENT:
          if ((d = (p = this.handlers).onEvent) !== null && d !== undefined) {
            d.call(p, h);
          }
          break;
        default:
          corpcDebugLoggers.dispatcherDebug("[warn] Unknown message type:", h.type);
      }
    }
    dispose() {
      if (this.port && this.boundMessageHandler) {
        this.port.removeEventListener("message", this.boundMessageHandler);
        this.port.close();
      }
      this.port = null;
      this.boundMessageHandler = null;
      this.handlers = {};
    }
    isInitialized() {
      return this.port !== null;
    }
    constructor() {
      d(this, "port", null);
      d(this, "handlers", {});
      d(this, "boundMessageHandler", null);
    }
  }
  function h(e, t, n) {
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
  let f = {
    interval: 5000,
    timeout: 5000,
    maxMissed: 5
  };
  class g {
    init(e, t = "initiator") {
      this.dispatcher = e;
      this.role = t;
      this.dispatcher.setHandlers({
        onHeartbeat: this.handleHeartbeat.bind(this),
        onHeartbeatAck: this.handleHeartbeatAck.bind(this)
      });
    }
    start(e) {
      if (!this.isActive) {
        this.isActive = true;
        this.missedCount = 0;
        this.onDisconnect = e ?? null;
        if (this.role === "initiator") {
          this.sendHeartbeat();
          this.intervalTimer = setInterval(() => {
            this.sendHeartbeat();
          }, this.config.interval);
        }
      }
    }
    stop() {
      this.isActive = false;
      if (this.intervalTimer) {
        clearInterval(this.intervalTimer);
        this.intervalTimer = null;
      }
      this.clearTimeoutTimer();
      this.missedCount = 0;
      this.onDisconnect = null;
    }
    sendHeartbeat() {
      if (this.dispatcher && this.isActive) {
        this.dispatcher.send({
          type: rpcProtocolConstants.messageTypes.HEARTBEAT,
          payload: {
            timestamp: Date.now()
          }
        });
        this.clearTimeoutTimer();
        this.timeoutTimer = setTimeout(() => {
          this.handleMissedHeartbeat();
        }, this.config.timeout);
      }
    }
    clearTimeoutTimer() {
      if (this.timeoutTimer) {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = null;
      }
    }
    handleHeartbeat(e) {
      if (!this.dispatcher || !this.isActive) {
        return;
      }
      let t = {
        type: rpcProtocolConstants.messageTypes.HEARTBEAT_ACK,
        payload: {
          timestamp: e.payload.timestamp
        }
      };
      this.dispatcher.send(t);
      this.lastHeartbeatTime = Date.now();
    }
    handleHeartbeatAck(e) {
      if (this.isActive) {
        this.clearTimeoutTimer();
        this.missedCount = 0;
        this.lastHeartbeatTime = Date.now();
      }
    }
    handleMissedHeartbeat() {
      this.missedCount++;
      if (this.missedCount >= this.config.maxMissed) {
        this.handleDisconnect();
      }
    }
    handleDisconnect() {
      var e;
      this.stop();
      if ((e = this.onDisconnect) !== null && e !== undefined) {
        e.call(this);
      }
    }
    getTimeSinceLastHeartbeat() {
      if (this.lastHeartbeatTime === 0) {
        return Infinity;
      } else {
        return Date.now() - this.lastHeartbeatTime;
      }
    }
    getMissedCount() {
      return this.missedCount;
    }
    isHeartbeatActive() {
      return this.isActive;
    }
    updateConfig(e) {
      this.config = {
        ...this.config,
        ...e
      };
    }
    dispose() {
      this.stop();
      this.dispatcher = null;
    }
    constructor(e = {}) {
      h(this, "dispatcher", null);
      h(this, "config", undefined);
      h(this, "intervalTimer", null);
      h(this, "timeoutTimer", null);
      h(this, "missedCount", 0);
      h(this, "lastHeartbeatTime", 0);
      h(this, "isActive", false);
      h(this, "onDisconnect", null);
      h(this, "role", "initiator");
      this.config = {
        ...f,
        ...e
      };
    }
  }
  function m(e, t, n) {
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
  class v {
    init(e) {
      this.dispatcher = e;
      this.dispatcher.setHandlers({
        onEvent: this.handleEvent.bind(this)
      });
    }
    on(e, t) {
      this.handlers[e] ||= new Set();
      this.handlers[e].add(t);
      return () => {
        this.off(e, t);
      };
    }
    once(e, t) {
      let n = i => {
        this.off(e, n);
        t(i);
      };
      return this.on(e, n);
    }
    off(e, t) {
      let n = this.handlers[e];
      if (n) {
        n.delete(t);
        if (n.size === 0) {
          delete this.handlers[e];
        }
      }
    }
    emit(e, t) {
      if (!this.dispatcher) {
        corpcDebugLoggers.eventDebug("[warn] Not initialized");
        return;
      }
      this.dispatcher.send({
        type: rpcProtocolConstants.messageTypes.EVENT,
        payload: {
          event: e,
          data: t
        }
      });
    }
    handleEvent(e) {
      let {
        event: t,
        data: n
      } = e.payload;
      let i = this.handlers[t];
      if (i) {
        i.forEach(e => {
          try {
            e(n);
          } catch (e) {
            corpcDebugLoggers.eventDebug(`[error] Error in event handler for '${t}':`, e);
          }
        });
      }
    }
    removeAllListeners(e) {
      if (e) {
        delete this.handlers[e];
      } else {
        this.handlers = {};
      }
    }
    listenerCount(e) {
      return this.handlers[e]?.size ?? 0;
    }
    eventNames() {
      return Object.keys(this.handlers);
    }
    dispose() {
      this.handlers = {};
      this.dispatcher = null;
    }
    constructor() {
      m(this, "dispatcher", null);
      m(this, "handlers", {});
    }
  }
  function _(e, t, n) {
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
  class y {
    start() {
      if (!this.isListening) {
        this.boundHandshakeListener = this.handleHandshakeRequest.bind(this);
        window.addEventListener("message", this.boundHandshakeListener);
        this.isListening = true;
      }
    }
    stop() {
      if (this.boundHandshakeListener) {
        window.removeEventListener("message", this.boundHandshakeListener);
        this.boundHandshakeListener = null;
      }
      this.isListening = false;
    }
    handleHandshakeRequest(e) {
      let t = e.data;
      if (!t || t.type !== rpcProtocolConstants.messageTypes.HANDSHAKE_REQUEST) {
        return;
      }
      let {
        clientId: n,
        version: i
      } = t.payload;
      if (!n) {
        corpcDebugLoggers.hostDebug("[warn] Rejected connection: clientId is required");
        return;
      }
      if (!this.isOriginAllowed(e.origin)) {
        corpcDebugLoggers.hostDebug("[warn] Rejected connection from disallowed origin:", e.origin);
        return;
      }
      if (this.clients.has(n)) {
        corpcDebugLoggers.hostDebug("[warn] Client already connected:", n);
        this.disconnectClient(n);
      }
      let r = new MessageChannel();
      let {
        port1: o
      } = r;
      let {
        port2: s
      } = r;
      let a = new p();
      let d = new rpcChannelCore.RpcChannel(this.config.rpcTimeout);
      let h = new v();
      let f = new g(this.config.heartbeat);
      a.init(o);
      d.init(a);
      h.init(a);
      f.init(a, "initiator");
      d.registerMethods(this.globalRpcHandlers);
      let m = {
        clientId: n,
        origin: e.origin,
        version: i,
        port: o,
        state: rpcProtocolConstants.connectionStates.CONNECTED,
        lastHeartbeat: Date.now()
      };
      this.clients.set(n, {
        connection: m,
        dispatcher: a,
        rpcChannel: d,
        eventChannel: h,
        heartbeat: f
      });
      f.start(() => {
        this.handleClientDisconnect(n);
      });
      let _ = {
        type: rpcProtocolConstants.messageTypes.HANDSHAKE_RESPONSE,
        payload: {
          clientId: n,
          version: this.config.version,
          channels: ["rpc", "event"]
        }
      };
      e.source.postMessage(_, e.origin, [s]);
      this.onConnectionCallbacks.forEach(e => {
        try {
          e(n, m);
        } catch (e) {
          corpcDebugLoggers.hostDebug("[error] Error in connection callback:", e);
        }
      });
    }
    isOriginAllowed(e) {
      return this.config.allowedOrigins.includes("*") || this.config.allowedOrigins.includes(e);
    }
    handleClientDisconnect(e) {
      let t = this.clients.get(e);
      if (t) {
        t.connection.state = rpcProtocolConstants.connectionStates.DISCONNECTED;
        t.heartbeat.dispose();
        t.rpcChannel.dispose();
        t.eventChannel.dispose();
        t.dispatcher.dispose();
        this.clients.delete(e);
        this.onDisconnectionCallbacks.forEach(t => {
          try {
            t(e);
          } catch (e) {
            corpcDebugLoggers.hostDebug("[error] Error in disconnection callback:", e);
          }
        });
      }
    }
    disconnectClient(e) {
      this.handleClientDisconnect(e);
    }
    registerMethod(e, t) {
      this.globalRpcHandlers[e] = t;
      this.clients.forEach(n => {
        n.rpcChannel.registerMethod(e, t);
      });
    }
    registerMethods(e) {
      for (let [t, n] of Object.entries(e)) {
        this.registerMethod(t, n);
      }
    }
    unregisterMethod(e) {
      delete this.globalRpcHandlers[e];
      this.clients.forEach(t => {
        t.rpcChannel.unregisterMethod(e);
      });
    }
    async call(e, t, n, i) {
      let r = this.clients.get(e);
      if (!r) {
        throw new rpcChannelCore.RpcError(rpcProtocolConstants.errorCodes.CONNECTION_CLOSED, `Client not found: ${e}`);
      }
      return r.rpcChannel.call(t, n, i);
    }
    async callAll(e, t, n) {
      let i = new Map();
      await Promise.all(Array.from(this.clients.keys()).map(async r => {
        try {
          let o = await this.call(r, e, t, n);
          i.set(r, o);
        } catch (e) {
          i.set(r, e);
        }
      }));
      return i;
    }
    emit(e, t, n) {
      let i = this.clients.get(e);
      if (!i) {
        corpcDebugLoggers.hostDebug("[warn] Client not found:", e);
        return;
      }
      i.eventChannel.emit(t, n);
    }
    emitAll(e, t) {
      this.clients.forEach(n => {
        n.eventChannel.emit(e, t);
      });
    }
    on(e, t, n) {
      let i = this.clients.get(e);
      if (i) {
        return i.eventChannel.on(t, n);
      } else {
        corpcDebugLoggers.hostDebug("[warn] Client not found:", e);
        return emptyExportFunction.emptyFunction;
      }
    }
    onAll(e, t) {
      let n = [];
      this.clients.forEach((i, r) => {
        let o = i.eventChannel.on(e, e => {
          t(r, e);
        });
        n.push(o);
      });
      return () => {
        n.forEach(e => e());
      };
    }
    onConnection(e) {
      this.onConnectionCallbacks.add(e);
      return () => {
        this.onConnectionCallbacks.delete(e);
      };
    }
    onDisconnection(e) {
      this.onDisconnectionCallbacks.add(e);
      return () => {
        this.onDisconnectionCallbacks.delete(e);
      };
    }
    getClientIds() {
      return Array.from(this.clients.keys());
    }
    getClient(e) {
      return this.clients.get(e)?.connection;
    }
    isClientConnected(e) {
      let t = this.clients.get(e);
      return (t == null ? undefined : t.connection.state) === rpcProtocolConstants.connectionStates.CONNECTED;
    }
    getClientCount() {
      return this.clients.size;
    }
    dispose() {
      this.stop();
      Array.from(this.clients.keys()).forEach(e => {
        this.disconnectClient(e);
      });
      this.globalRpcHandlers = {};
      this.onConnectionCallbacks.clear();
      this.onDisconnectionCallbacks.clear();
    }
    constructor(e = {}) {
      _(this, "config", undefined);
      _(this, "clients", new Map());
      _(this, "globalRpcHandlers", {});
      _(this, "onConnectionCallbacks", new Set());
      _(this, "onDisconnectionCallbacks", new Set());
      _(this, "boundHandshakeListener", null);
      _(this, "isListening", false);
      this.config = {
        version: e.version ?? "1.0.0",
        allowedOrigins: e.allowedOrigins ?? ["*"],
        heartbeat: e.heartbeat ?? {},
        rpcTimeout: e.rpcTimeout ?? 30000
      };
    }
  }
  function b(e) {
    e.registerMethod("auth.getHeaders", () => {
      let e = feishuAccessTokenService.getFeishuAccessTokenService();
      if (!e) {
        throw Error("[RpcHostManager] FeishuAccessTokenService not available");
      }
      return e.getAuthHeadersAsync();
    });
  }
  class S {
    static getInstance(e = "default") {
      if (!this.instances.has(e)) {
        let t = new y({
          allowedOrigins: [location.origin, "*"],
          rpcTimeout: 30000
        });
        b(t);
        t.start();
        this.instances.set(e, t);
      }
      return this.instances.get(e);
    }
    static createInstance(e, t = "default") {
      if (this.instances.has(t)) {
        return this.instances.get(t);
      }
      let n = new y(e);
      b(n);
      this.instances.set(t, n);
      return n;
    }
    static getOrCreateInstance(e, t = "default") {
      let n = this.instances.get(t);
      return n || this.createInstance(e, t);
    }
    static disposeInstance(e) {
      let t = this.instances.get(e);
      if (t) {
        t.dispose();
        this.instances.delete(e);
      }
    }
    static disposeAll() {
      this.instances.forEach(e => e.dispose());
      this.instances.clear();
    }
    static hasInstance(e) {
      return this.instances.has(e);
    }
    static getInstanceKeys() {
      return Array.from(this.instances.keys());
    }
  }
  r = "instances";
  o = new Map();
  if ((r = typeof (i = function (e, t) {
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
  }(r, "string")) == "symbol" ? i : i + "") in S) {
    Object.defineProperty(S, r, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    S[r] = o;
  }
  require.d(exports, {
    RpcHostManager: function () {
      return S;
    }
  });
}