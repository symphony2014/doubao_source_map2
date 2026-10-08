// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerClientVarProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 239121
         */
module.exports = function (module, exports, require) {
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var clientVarProviderAccess = require("client-var-provider-access") /*id: 503677*/;
  var clientVarProviderName = require("client-var-provider-name") /*id: 399717*/;
  function c(e, i, r) {
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
  let d = dependencyInjectionContainer.Provide(clientVarProviderName.clientVarProvider)(n = class {
    init(e, i) {
      this.fetcher = e;
      this.registry = i;
    }
    get fetchRecordSuccess$() {
      return this.fetcher.fetchRecordSuccess$;
    }
    constructor() {
      c(this, "fetcher", undefined);
      c(this, "registry", undefined);
      c(this, "applyClientVar", (e, i) => this.registry.applyClientVar(e, i));
      c(this, "fetchRecordBatch", e => this.fetcher.fetchRecordBatch(e));
      c(this, "fetchRecord", (e, i) => this.fetcher.fetchRecord(e, i));
    }
  }) || n;
  function u() {
    docxEditorCore.registerProviders([d]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(clientVarProviderAccess.getClientProvider);
      let i = dependencyInjectionContainer.get(docxEditorCore.CONFIG_TOKEN).get("dataHelper");
      e.init(i.dataFetcher, i.clientVarRegistry);
    });
  }
  require.d(exports, {
    registerClientVarProvider: function () {
      return u;
    }
  });
}