// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxWorkletTokenManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 949493
         */
module.exports = function (module, exports, require) {
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxWorkletConstants = require("docx-worklet-constants") /*id: 256071*/;
  function a(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class l {
    static getInstance() {
      if (!l.instance) {
        l.instance = new l();
        this.startupPromise = l.instance.init();
      }
      return l.instance;
    }
    async init() {
      if (!browserEnvironmentDetectionUtils.isSuperApp() || browserEnvDetectionUtil.browserDetector.isFromGroup()) {
        return;
      }
      let {
        client: e
      } = await require.e("lark-js-runtime") /*id: 1795*/.then(require.bind(require, "js-runtime-ipc-client") /*id: 579522*/);
      this.client = e;
      let {
        content: i
      } = await window.LarkAPI.paging.getRuntimeInstances();
      i.on("destroyed", () => {
        if (this.token) {
          this.client.sendToJSWorklet(docxWorkletConstants.ccmWorklet, {
            name: docxWorkletConstants.updateOpenWebviewToken,
            token: this.token,
            type: docxWorkletConstants.workletStates.close
          });
        }
      });
      await e.startup();
      e.subscribe([docxWorkletConstants.ccmWorklet]);
    }
    destory() {
      this.client.sendToJSWorklet(docxWorkletConstants.ccmWorklet, {
        name: docxWorkletConstants.updateOpenWebviewToken,
        token: this.token,
        type: docxWorkletConstants.workletStates.close
      });
    }
    constructor() {
      a(this, "token", undefined);
      a(this, "client", undefined);
      a(this, "setToken", async e => {
        if (this.token !== e) {
          await l.startupPromise;
          this.client.sendToJSWorklet(docxWorkletConstants.ccmWorklet, {
            name: docxWorkletConstants.updateOpenWebviewToken,
            token: e,
            type: docxWorkletConstants.workletStates.open
          });
          this.token = e;
        }
      });
    }
  }
  a(l, "instance", undefined);
  a(l, "startupPromise", undefined);
  exports.DocxWorkletTokenManager = l.getInstance();
}