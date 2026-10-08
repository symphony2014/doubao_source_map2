// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'pcWebviewIpcInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 256580
         */
module.exports = function (module, exports, require) {
  var runtimeLoggerProvider = require("runtime-logger-provider") /*id: 431418*/;
  var jsRuntimeContextFactory = require("js-runtime-context-factory") /*id: 679446*/;
  var simpleEventEmitter = require("simple-event-emitter") /*id: 679006*/;
  var jsRuntimeIpcTypes = require("js-runtime-ipc-types") /*id: 320030*/;
  var jsRuntimeIpcFilter = require("js-runtime-ipc-filter") /*id: 356499*/;
  class l extends simpleEventEmitter.EventEmitter {
    entity() {
      if (this.id === undefined) {
        throw Error("[PCWebviewIPC] you should call startup() before entity()");
      }
      return jsRuntimeContextFactory.runtimeContextFactory.webview(this.id);
    }
    async startup() {
      this.id = await ShellAPI.app.ipc.getCurrentId();
      ShellAPI.app.ipc.on(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_MESSAGE, this.handleIPCMessageEvent);
      ShellAPI.app.ipc.on(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_BROADCAST, this.handleIPCMessageEvent);
      ShellAPI.app.ipc.on(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_ERROR, this.handleIPCMessageEvent);
    }
    shutdown() {
      ShellAPI.app.ipc.off(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_MESSAGE, this.handleIPCMessageEvent);
      ShellAPI.app.ipc.off(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_BROADCAST, this.handleIPCMessageEvent);
      ShellAPI.app.ipc.off(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_ERROR, this.handleIPCMessageEvent);
      this.id = undefined;
    }
    send(e, t) {
      if (!jsRuntimeIpcFilter.isJsRuntimeMessage(e, t)) {
        runtimeLoggerProvider.runtimeLogger.error("[PCWebviewIPC] checkBeforeSend failed", e, t, this.entity());
        return;
      }
      ShellAPI.app.ipc.sendTo(1, e, t);
    }
    handleIPCMessageEvent(e) {
      let {
        type: t,
        detail: r
      } = e;
      switch (t) {
        case jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_MESSAGE:
          this.emit(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_MESSAGE, r);
          break;
        case jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_BROADCAST:
          this.emit(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_BROADCAST, r);
          break;
        case jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_SUBSCRIBE:
          runtimeLoggerProvider.runtimeLogger.error("[PCWebviewIPC] webview should not receive subscribe event");
          break;
        case jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_ERROR:
          this.emit(jsRuntimeIpcTypes.JsRuntimeIpcTypes.JS_RUNTIME_IPC_ERROR, r);
          break;
        default:
          runtimeLoggerProvider.runtimeLogger.error("[PCWebviewIPC] receive unknown event");
      }
    }
    constructor() {
      var e;
      var t;
      var r;
      super();
      t = undefined;
      if ((e = typeof (r = function (e, t) {
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
      }(e = "id", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
      this.handleIPCMessageEvent = this.handleIPCMessageEvent.bind(this);
    }
  }
  let u = new l();
  require.d(exports, {
    pcWebviewIpcInstance: function () {
      return u;
    }
  });
}