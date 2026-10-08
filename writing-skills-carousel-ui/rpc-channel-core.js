// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'RpcChannel'
// - Renamed export 'l' to 'RpcError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 737542
         */
module.exports = function (module, exports, require) {
  var rpcProtocolConstants = require("rpc-protocol-constants") /*id: 645329*/;
  var corpcDebugLoggers = require("corpc-debug-loggers") /*id: 363765*/;
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
  class s {
    init(e) {
      this.dispatcher = e;
      this.dispatcher.setHandlers({
        onRpcRequest: this.handleRequest.bind(this),
        onRpcResponse: this.handleResponse.bind(this)
      });
    }
    registerMethod(e, t) {
      this.handlers[e] = t;
    }
    registerMethods(e) {
      Object.assign(this.handlers, e);
    }
    unregisterMethod(e) {
      delete this.handlers[e];
    }
    async call(e, t, n) {
      if (!this.dispatcher) {
        throw Error("[RpcChannel] Not initialized");
      }
      let r = this.generateRequestId();
      let o = {
        jsonrpc: "2.0",
        id: r,
        method: e,
        params: t
      };
      return new Promise((t, s) => {
        var l;
        let c = setTimeout(() => {
          this.pendingRequests.delete(r);
          s(new a(rpcProtocolConstants.errorCodes.TIMEOUT, `RPC call '${e}' timed out`));
        }, n ?? this.defaultTimeout);
        this.pendingRequests.set(r, {
          resolve: t,
          reject: s,
          timer: c
        });
        let u = {
          type: rpcProtocolConstants.messageTypes.RPC_REQUEST,
          payload: o
        };
        if ((l = this.dispatcher) !== null && l !== undefined) {
          l.send(u);
        }
      });
    }
    async handleRequest(e) {
      var t;
      let {
        id: n,
        method: r,
        params: o
      } = e.payload;
      let s = this.handlers[r];
      let a = await this.executeHandler(n, r, s, o);
      if ((t = this.dispatcher) !== null && t !== undefined) {
        t.send({
          type: rpcProtocolConstants.messageTypes.RPC_RESPONSE,
          payload: a
        });
      }
    }
    async executeHandler(e, t, n, r) {
      if (!n) {
        return this.createErrorResponse(e, rpcProtocolConstants.errorCodes.METHOD_NOT_FOUND, `Method '${t}' not found`);
      }
      try {
        let t = await n(r);
        return {
          jsonrpc: "2.0",
          id: e,
          result: t
        };
      } catch (r) {
        let t = r instanceof Error ? r.message : String(r);
        let n = r instanceof Error ? {
          stack: r.stack
        } : undefined;
        return this.createErrorResponse(e, rpcProtocolConstants.errorCodes.HANDLER_ERROR, t, n);
      }
    }
    handleResponse(e) {
      let t = e.payload;
      let {
        id: n
      } = t;
      if (n === null) {
        corpcDebugLoggers.channelDebug("[warn] Received response with null id");
        return;
      }
      let o = this.pendingRequests.get(n);
      if (!o) {
        corpcDebugLoggers.channelDebug("[warn] Received response for unknown request:", n);
        return;
      }
      clearTimeout(o.timer);
      this.pendingRequests.delete(n);
      if (rpcProtocolConstants.isError(t)) {
        o.reject(new a(t.error.code, t.error.message, t.error.data));
      } else {
        o.resolve(t.result);
      }
    }
    generateRequestId() {
      return ++this.requestIdCounter;
    }
    createErrorResponse(e, t, n, i) {
      let r = {
        code: t,
        message: n
      };
      if (i !== undefined) {
        r.data = i;
      }
      return {
        jsonrpc: "2.0",
        id: e,
        error: r
      };
    }
    cancelAllPending() {
      this.pendingRequests.forEach((e, t) => {
        clearTimeout(e.timer);
        e.reject(new a(rpcProtocolConstants.errorCodes.CONNECTION_CLOSED, "Connection closed"));
      });
      this.pendingRequests.clear();
    }
    dispose() {
      this.cancelAllPending();
      this.handlers = {};
      this.dispatcher = null;
    }
    getPendingCount() {
      return this.pendingRequests.size;
    }
    constructor(e = 30000) {
      o(this, "dispatcher", null);
      o(this, "handlers", {});
      o(this, "pendingRequests", new Map());
      o(this, "requestIdCounter", 0);
      o(this, "defaultTimeout", undefined);
      this.defaultTimeout = e;
    }
  }
  class a extends Error {
    toJSON() {
      let e = {
        code: this.code,
        message: this.message
      };
      if (this.data !== undefined) {
        e.data = this.data;
      }
      return e;
    }
    constructor(e, t, n) {
      super(t);
      o(this, "code", undefined);
      o(this, "data", undefined);
      this.name = "RpcError";
      this.code = e;
      this.data = n;
      Object.setPrototypeOf(this, a.prototype);
    }
  }
  require.d(exports, {
    RpcChannel: function () {
      return s;
    },
    RpcError: function () {
      return a;
    }
  });
}