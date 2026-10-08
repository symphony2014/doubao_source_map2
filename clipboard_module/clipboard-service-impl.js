// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'l' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'c' to 'docxClipboardHandler_1'
// - Resolved require(191387) to 'docx-clipboard-handler_1'
// - Renamed variable 'u' to 'compatibleEditorContext_1'
// - Resolved require(2711) to 'compatible-editor-context_1'
// - Renamed variable 'd' to 'clipboardServiceProvider'
// - Resolved require(417317) to 'clipboard-service-provider'
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'Y' to 'clipboardServiceId' (module 417317)
// - Updated imported property 'Z' to 'DocxClipboardHandler' (module 191387)
// - Updated imported property 'E4' to 'CONFIG_TOKEN' (module 135760)
// - Updated imported property 'x' to 'compatibleContext' (module 2711)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 999831
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var a;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxClipboardHandler_1 = require("docx-clipboard-handler_1") /*id: 191387*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var clipboardServiceProvider = require("clipboard-service-provider") /*id: 417317*/;
  function h(e, n, i, r) {
    if (i) {
      Object.defineProperty(e, n, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(r) : undefined
      });
    }
  }
  function p(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  function f(e, n, i, r, o) {
    var a = {};
    Object.keys(r).forEach(function (e) {
      a[e] = r[e];
    });
    a.enumerable = !!a.enumerable;
    a.configurable = !!a.configurable;
    if ("value" in a || a.initializer) {
      a.writable = true;
    }
    a = i.slice().reverse().reduce(function (i, r) {
      return r(e, n, i) || i;
    }, a);
    if (o && a.initializer !== undefined) {
      a.value = a.initializer ? a.initializer.call(o) : undefined;
      a.initializer = undefined;
    }
    if (a.initializer === undefined) {
      Object.defineProperty(e, n, a);
      return null;
    } else {
      return a;
    }
  }
  let g = dependencyInjectionContainer.Provide(clipboardServiceProvider.clipboardServiceId)((o = f((r = class {
    init() {
      let e = this.context.toPlainObject();
      this.instance = new docxClipboardHandler_1.DocxClipboardHandler({
        ...e,
        isPresentationMode: !!this.config.get("isPresentationMode"),
        isSyncedReferenceBlock: this.config.get("isSyncedReferenceBlock"),
        pageToken: this.config.get("token")
      });
      this.update();
      this.unWatch = this.watch();
    }
    destroy() {
      var e;
      var n;
      if ((e = this.unWatch) !== null && e !== undefined) {
        e.unsubscribe();
      }
      if ((n = this.instance) !== null && n !== undefined) {
        n.unmount();
      }
    }
    onServiceDispose() {
      this.destroy();
    }
    update() {
      this.instance.update({
        copyable: this.config.get("copyable"),
        editable: this.config.get("editable")
      });
    }
    watch() {
      return this.config.change$.subscribe(e => {
        if (e.has("copyable") || e.has("editable")) {
          this.update();
        }
      });
    }
    constructor() {
      p(this, "instance", undefined);
      h(this, "config", o, this);
      h(this, "context", a, this);
      p(this, "unWatch", undefined);
    }
  }).prototype, "config", [docxEditorCore.CONFIG_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), a = f(r.prototype, "context", [compatibleEditorContext_1.compatibleContext], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), r)) || r;
  require.r(exports);
  require.d(exports, {
    ClipboardImpl: function () {
      return g;
    }
  });
}