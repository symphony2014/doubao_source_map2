// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerDynamicBootstrapTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 773092
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  var dynamicModeConst = require("dynamic-mode-const") /*id: 959888*/;
  function a(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
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
  let c = "__DYNAMIC_TRIGGER_PROXYED_FLAG__";
  class d {
    init(e) {
      this.scheduler = e;
      this.injection.registerHook(this);
      this.injection.injectorDidCreate$.subscribe(this.onInjectorCreate);
    }
    bootstrapModule(e) {
      if (!e || !e.isAsync() || e.isReady()) {
        return;
      }
      let i = this.moduleConfigMap.get(e) || this.defaultBootstrapConfig;
      this.scheduler.bootstrapModule(e, Object.assign({
        autoRetry: true
      }, i));
    }
    onDynamicResolve(e, i, r) {
      if ((r & dependencyInjectionContainer.InjectionFlags.MANY) != 0) {
        return;
      }
      let n = this.scheduler.registry.getModulesByProvider(e);
      if (n && !i[c] && n.length === 1) {
        this.proxyDynamicOne(i, n);
        i[c] = true;
      }
    }
    proxyDynamicOne(e, i) {
      let {
        get: r,
        onReady: n,
        then: o
      } = e;
      e.get = () => {
        i.forEach(e => this.bootstrapModule(e));
        return r.call(e);
      };
      e.onReady = e => {
        i.forEach(e => this.bootstrapModule(e));
        return n.call(null, e);
      };
      e.then = (e, r) => {
        i.forEach(e => this.bootstrapModule(e));
        return o.call(null, e, r);
      };
    }
    start(e) {
      if (e) {
        this.moduleConfigMap = e;
      }
    }
    constructor() {
      a(this, "name", dynamicModeConst.dynamicMode);
      a(this, "scheduler", undefined);
      a(this, "injection", dependencyInjectionContainer.get(docxEditorCore.INJECTION_TOKEN));
      a(this, "moduleConfigMap", new Map());
      a(this, "defaultBootstrapConfig", {
        stage: businessStageConstants.businessConstants.DocxStage.immediately
      });
      a(this, "onInjectorCreate", e => {
        e.registerHook(this);
      });
    }
  }
  function u() {
    docxEditorCore.registerTrigger(() => dependencyInjectionContainer.instantiate(d));
  }
  require.d(exports, {
    registerDynamicBootstrapTrigger: function () {
      return u;
    }
  });
}