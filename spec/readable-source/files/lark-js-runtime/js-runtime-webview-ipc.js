// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'JsRuntimeWebviewIpc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 125322
         */
module.exports = function (module, exports, require) {
  var runtimeLoggerProvider = require("runtime-logger-provider") /*id: 431418*/;
  var jsRuntimeContextFactory = require("js-runtime-context-factory") /*id: 679446*/;
  var simpleEventEmitter = require("simple-event-emitter") /*id: 679006*/;
  var uuidGenerator = require("uuid-generator") /*id: 907521*/;
  var jsRuntimeIpcTypes = require("js-runtime-ipc-types") /*id: 320030*/;
  var jsRuntimeIpcFilter = require("js-runtime-ipc-filter") /*id: 356499*/;
  function u(e, t, r) {
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
  class h extends simpleEventEmitter.EventEmitter {
    entity() {
      return jsRuntimeContextFactory.runtimeContextFactory.webview(this.id);
    }
    async startup() {
      this.port.addEventListener("message", this.handleMessageEvent);
      this.port.start();
      runtimeLoggerProvider.runtimeLogger.info("[WebWebviewIPC] startup");
    }
    shutdown() {
      this.port.close();
      this.port.removeEventListener("message", this.handleMessageEvent);
      runtimeLoggerProvider.runtimeLogger.info("[WebWebviewIPC] shutdown");
    }
    handleMessageEvent(e) {
      let {
        data: t
      } = e;
      switch (t == null ? undefined : t.type) {
        case jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_MESSAGE:
          {
            let e = t.message;
            if (!jsRuntimeContextFactory.runtimeContextFactory.equals(e.receiver, this.entity())) {
              runtimeLoggerProvider.runtimeLogger.warn("[WebWebviewIPC] receive invalid message");
              return;
            }
            this.emit(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_MESSAGE, e);
            break;
          }
        case jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_BROADCAST:
          this.emit(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_BROADCAST, t.message);
          break;
        case jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_SUBSCRIBE:
          runtimeLoggerProvider.runtimeLogger.error("[WebWebviewIPC] should not receive subscribe event");
          break;
        case jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_ERROR:
          this.emit(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_ERROR, t.message);
          break;
        default:
          runtimeLoggerProvider.runtimeLogger.warn("[WebWebviewIPC] receive unknown event");
      }
    }
    send(e, t) {
      if (!jsRuntimeIpcFilter.isJsRuntimeMessage(e, t)) {
        runtimeLoggerProvider.runtimeLogger.error("[WebWebviewIPC] checkBeforeSend failed", e, t, this.entity());
        return;
      }
      this.port.postMessage({
        type: e,
        message: t
      });
    }
    constructor(e) {
      super();
      u(this, "id", uuidGenerator.generateUuid());
      u(this, "port", undefined);
      this.port = e;
      this.handleMessageEvent = this.handleMessageEvent.bind(this);
    }
  }
  require.d(exports, {
    JsRuntimeWebviewIpc: function () {
      return h;
    }
  });
}