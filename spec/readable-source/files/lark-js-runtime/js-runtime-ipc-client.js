// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(488992) to 'process-browser-shim'
// - Resolved require(513225) to 'js-runtime-webview-ipc_1'
// - Resolved require(256580) to 'pc-webview-ipc-handler'
// - Renamed variable 'o' to 'runtimeLoggerProvider'
// - Resolved require(431418) to 'runtime-logger-provider'
// - Renamed variable 'a' to 'jsRuntimeContextFactory'
// - Resolved require(679446) to 'js-runtime-context-factory'
// - Renamed variable 'l' to 'simpleEventEmitter'
// - Resolved require(679006) to 'simple-event-emitter'
// - Renamed variable 'u' to 'jsRuntimeIpcTypes'
// - Resolved require(320030) to 'js-runtime-ipc-types'
// - Renamed variable 'v' to 'larkJsRuntimeConfig'
// - Resolved require(961555) to 'lark-js-runtime-config'
// - Renamed variable 'p' to 'jsRuntimeWebviewIpc'
// - Resolved require(125322) to 'js-runtime-webview-ipc'
// - Renamed variable 'E' to 'uuidGenerator'
// - Resolved require(907521) to 'uuid-generator'
// - Updated imported property 'M' to 'jsRuntimeIpc' (module 513225)
// - Updated imported property 'M' to 'pcWebviewIpcInstance' (module 256580)
// - Updated imported property 'v' to 'EventEmitter' (module 679006)
// - Updated imported property '$' to 'JsRuntimeIpcTypes' (module 320030)
// - Updated imported property 'P' to 'runtimeContextFactory' (module 679446)
// - Updated imported property 'c' to 'runtimeLogger' (module 431418)
// - Updated imported property 'D' to 'generateUuid' (module 907521)
// - Updated imported property 'O' to 'runtimeConfig' (module 961555)
// - Updated imported property 'J' to 'JsRuntimeWebviewIpc' (module 125322)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 579522
         */
module.exports = function (module, exports, require) {
  let i;
  i = require("process-browser-shim") /*id: 488992*/.env.LARK_ENV === "web" ? require("js-runtime-webview-ipc_1") /*id: 513225*/.jsRuntimeIpc : require("pc-webview-ipc-handler") /*id: 256580*/.pcWebviewIpcInstance;
  var n;
  var s;
  var runtimeLoggerProvider = require("runtime-logger-provider") /*id: 431418*/;
  var jsRuntimeContextFactory = require("js-runtime-context-factory") /*id: 679446*/;
  var simpleEventEmitter = require("simple-event-emitter") /*id: 679006*/;
  var jsRuntimeIpcTypes = require("js-runtime-ipc-types") /*id: 320030*/;
  function h(e, t, r = Date.now()) {
    return {
      ...e,
      metrics: {
        ...e.metrics,
        [t]: r
      }
    };
  }
  function c() {
    return {
      clientStart: Date.now()
    };
  }
  class d extends simpleEventEmitter.EventEmitter {
    initConfig(e) {}
    async startup() {
      this.ipc.on(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_MESSAGE, this.handleIPCMessageEvent);
      this.ipc.on(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_BROADCAST, this.handleIPCBroadcastEvent);
      await this.ipc.startup();
    }
    shutdown() {
      this.ipc.off(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_MESSAGE, this.handleIPCMessageEvent);
      this.ipc.off(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_BROADCAST, this.handleIPCBroadcastEvent);
      this.ipc.shutdown();
    }
    sendToJSWorklet(e, t) {
      let r = jsRuntimeContextFactory.runtimeContextFactory.jsWorklet(e);
      this.send(r, t);
    }
    send(e, t) {
      let r = this.ipc.entity();
      let i = c();
      this.ipc.send(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_MESSAGE, {
        sender: r,
        receiver: e,
        payload: t,
        metrics: i
      });
    }
    broadcast(e) {
      let t = this.ipc.entity();
      if (!jsRuntimeContextFactory.runtimeContextFactory.isJSWorklet(t)) {
        runtimeLoggerProvider.runtimeLogger.error("[JSRuntimeClient]: broadcast only support in JSWorklet context!");
        return;
      }
      let r = c();
      this.ipc.send(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_BROADCAST, {
        sender: t,
        payload: e,
        metrics: r
      });
    }
    subscribe(e) {
      let t = this.ipc.entity();
      this.ipc.send(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_SUBSCRIBE, {
        sender: t,
        payload: {
          subscribe: true,
          jsWorklets: e
        }
      });
    }
    unsubscribe(e) {
      let t = this.ipc.entity();
      this.ipc.send(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_SUBSCRIBE, {
        sender: t,
        payload: {
          subscribe: false,
          jsWorklets: e
        }
      });
    }
    entity() {
      return this.ipc.entity();
    }
    handleIPCMessageEvent(e) {
      let t = h(e, "serverStart");
      this.emit("message", t);
    }
    handleIPCBroadcastEvent(e) {
      let t = h(e, "serverStart");
      this.emit("broadcast", t);
    }
    constructor(e) {
      var t;
      var r;
      var i;
      super();
      r = undefined;
      if ((t = typeof (i = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(t = "ipc", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = r;
      }
      this.ipc = e;
      this.handleIPCMessageEvent = this.handleIPCMessageEvent.bind(this);
      this.handleIPCBroadcastEvent = this.handleIPCBroadcastEvent.bind(this);
    }
  }
  var larkJsRuntimeConfig = require("lark-js-runtime-config") /*id: 961555*/;
  var jsRuntimeWebviewIpc = require("js-runtime-webview-ipc") /*id: 125322*/;
  function f(e) {
    if (typeof e == "string") {
      return e;
    } else {
      return e.href;
    }
  }
  let _ = e => `
  globalThis.__origin_href__ = '${e}';
  importScripts('${e}');
`;
  var uuidGenerator = require("uuid-generator") /*id: 907521*/;
  function S(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let b = `
  const sharedWorkerUrls = new Map();
  onconnect = (e) => {
    const port = e.ports[0];
    port.onmessage = (e) => {
      const message = e.data;
      if (message?.type !== 'req_shared_worker_urls') {
        return;
      }

      const payload = message.payload.map(({ id, url }) => {
        if (!sharedWorkerUrls.has(id)) {
          sharedWorkerUrls.set(id, url);
        }
        return { id, url: sharedWorkerUrls.get(id) }
      });

      port.postMessage({
        type: 'res_shared_worker_urls',
        id: message.id,
        payload,
      });
    };
  };
`;
  let R = new class {
    startup(e) {
      let t = "data:application/javascript;base64," + btoa(b);
      this.worker = new SharedWorker(t, {
        name: `js-runtime-shared-worker-urls-${e}`
      });
      this.worker.port.addEventListener("message", this.handleMessage);
      this.worker.port.start();
    }
    shutdown() {
      var e;
      var t;
      if ((e = this.worker) !== null && e !== undefined) {
        e.port.close();
      }
      if ((t = this.worker) !== null && t !== undefined) {
        t.port.removeEventListener("message", this.handleMessage);
      }
      this.worker = undefined;
    }
    convert(e) {
      let t = e.map(e => ({
        id: f(e),
        url: function (e) {
          let t = new Blob([_(f(e))], {
            type: "application/javascript"
          });
          return URL.createObjectURL(t);
        }(e)
      }));
      return new Promise(e => {
        let r = uuidGenerator.generateUuid();
        this.worker.port.postMessage({
          id: r,
          type: "req_shared_worker_urls",
          payload: t
        });
        this.resolvers.set(r, e);
      });
    }
    handleMessage(e) {
      var t;
      let {
        data: r
      } = e;
      if (r.type === "res_shared_worker_urls") {
        if ((t = this.resolvers.get(r.id)) !== null && t !== undefined) {
          t(r.payload.map(e => e.url));
        }
        this.resolvers.delete(r.id);
      }
    }
    constructor() {
      S(this, "worker", undefined);
      S(this, "resolvers", new Map());
      this.handleMessage = this.handleMessage.bind(this);
    }
  }();
  function m(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  (s = n ||= {}).CREATE_SHARED_WORKER_REQ = "CREATE_SHARED_WORKER_REQ";
  s.CREATE_SHARED_WORKER_RES = "CREATE_SHARED_WORKER_RES";
  s.DELETE_SHARED_WORKER_REQ = "DELETE_SHARED_WORKER_REQ";
  class g {
    startup() {
      this.port.addEventListener("message", this.handleMessage);
    }
    shutdown() {
      this.port.removeEventListener("message", this.handleMessage);
    }
    async createSharedWorker(e) {
      let {
        id: t,
        params: r
      } = e;
      let i = {
        name: r.name,
        jash: {
          userId: r.userId,
          service: r.service
        }
      };
      let s = new SharedWorker((await R.convert([r.url]))[0], i);
      s.port.start();
      this.sharedWorkers.set(t, s);
      let o = {
        command: n.CREATE_SHARED_WORKER_RES,
        data: {
          id: t,
          port: s.port
        }
      };
      this.port.postMessage(o, [s.port]);
    }
    deleteSharedWorker(e) {
      let t = this.sharedWorkers.get(e);
      if (t != null) {
        t.port.close();
      }
      this.sharedWorkers.delete(e);
    }
    handleMessage(e) {
      let {
        data: t
      } = e;
      switch (t == null ? undefined : t.command) {
        case n.CREATE_SHARED_WORKER_REQ:
          this.createSharedWorker(t.data);
          break;
        case n.DELETE_SHARED_WORKER_REQ:
          this.deleteSharedWorker(t.data.id);
      }
    }
    constructor(e) {
      m(this, "port", undefined);
      m(this, "sharedWorkers", new Map());
      this.port = e;
      this.handleMessage = this.handleMessage.bind(this);
    }
  }
  class I {
    get running() {
      return this.isRunning;
    }
    tryStartService() {
      return !this.isRunning && (this.isRunning = true, true);
    }
    tryStopService() {
      return !!this.isRunning && (this.isRunning = false, true);
    }
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "isRunning", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: false,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = false;
      }
    }
  }
  function y(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let P = new class {
    startup() {
      if (this.state.tryStartService()) {
        this.services.forEach(e => e.startup());
      }
    }
    shutdown() {
      if (this.state.tryStopService()) {
        this.services.reverse().forEach(e => e.startup());
      }
    }
    constructor(e) {
      y(this, "state", new I());
      y(this, "services", []);
      this.services = e;
    }
  }([]);
  function C(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let w = larkJsRuntimeConfig.runtimeConfig.isWeb && larkJsRuntimeConfig.runtimeConfig.useSharedWorker ? new class extends d {
    initConfig(e) {
      this.config = e;
    }
    async startup() {
      if (!this.config) {
        throw Error("You need to init config first in web environment!");
      }
      P.startup();
      R.startup(this.config.userId);
      let e = function (e, t, r) {
        let i = typeof e == "string" ? new URL(e) : e;
        i.searchParams.append(t, r);
        return i;
      }(this.config.jsRuntimeUrl, "userId", this.config.userId);
      let t = (await R.convert([e]))[0];
      this.jsRuntimeWorker = new SharedWorker(t, {
        name: "js-runtime"
      });
      this.sharedWorkerFactoryHost = new g(this.jsRuntimeWorker.port);
      this.ipc = new jsRuntimeWebviewIpc.JsRuntimeWebviewIpc(this.jsRuntimeWorker.port);
      this.sharedWorkerFactoryHost.startup();
      super.startup();
      this.jsRuntimeWorker.port.start();
    }
    shutdown() {
      var e;
      var t;
      if ((e = this.jsRuntimeWorker) !== null && e !== undefined) {
        e.port.close();
      }
      super.shutdown();
      if ((t = this.sharedWorkerFactoryHost) !== null && t !== undefined) {
        t.shutdown();
      }
      R.shutdown();
      P.shutdown();
    }
    constructor() {
      super(undefined);
      C(this, "config", undefined);
      C(this, "jsRuntimeWorker", undefined);
      C(this, "sharedWorkerFactoryHost", undefined);
    }
  }() : new d(i);
  if (!larkJsRuntimeConfig.runtimeConfig.isProduction) {
    globalThis.js_runtime_client = w;
  }
  require.d(exports, {
    client: function () {
      return w;
    }
  });
}