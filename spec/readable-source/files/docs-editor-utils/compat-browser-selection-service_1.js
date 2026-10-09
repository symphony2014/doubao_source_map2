// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'selectionServiceKey'
// - Renamed export 'uS' to 'CompatSelectionSvc'
// - Renamed export 'rw' to 'compatBrowserSvc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 22128
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var selectionServiceProviderName = require("selection-service-provider-name") /*id: 572319*/;
  var compatBrowserSelectionService = require("compat-browser-selection-service") /*id: 833280*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var f = debugBrowserConfig;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var keyboardKeyCodes = require("keyboard-key-codes") /*id: 73916*/;
  var safariSelectionManager = require("safari-selection-manager") /*id: 441280*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  function b(e, n, r, o) {
    if (r) {
      Object.defineProperty(e, n, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(o) : undefined
      });
    }
  }
  function v(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  function T(e, n, r, o, i) {
    var l = {};
    Object.keys(o).forEach(function (e) {
      l[e] = o[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, o) {
      return o(e, n, r) || r;
    }, l);
    if (i && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(i) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, n, l);
      return null;
    } else {
      return l;
    }
  }
  let C = f("selection:compatBrowserSelection");
  let k = dependencyInjectionContainer.Provide(compatBrowserSelectionService.compatBrowserSvc)((i = T((o = class {
    init() {
      if (this.config.get("isMain")) {
        this.bindEvents();
        this.compatIOS17CaretColor();
      }
    }
    bindEvents() {
      docxEditorEventConstantsAndManager.nativeEventDispatcher.on("keydown", document, this.handleKeyDown, {
        container: this.config.get("container"),
        priority: -1
      });
    }
    compatIOS17CaretColor() {
      if (safariSelectionManager.isSafariAtVersion("17.2") && browserEnvironmentDetectionUtils.browserDetector.isLark) {
        let e = document.querySelector(":root");
        if (e && e instanceof HTMLElement) {
          e.style.setProperty("--caret-color-dm", "var(--primary-fill-default)");
        }
      }
    }
    unbindEvents() {
      docxEditorEventConstantsAndManager.nativeEventDispatcher.off("keydown", document, this.handleKeyDown);
    }
    destroy() {
      this.unbindEvents();
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      b(this, "selectionAPI", i, this);
      b(this, "config", l, this);
      v(this, "handleKeyDown", e => {
        try {
          this.forceCollectBrowserSelection(e);
        } catch (e) {}
      });
      v(this, "forceCollectBrowserSelection", e => {
        let r = e.keyCode === keyboardKeyCodes.keyCodeMap.ENTER;
        let o = browserEnvironmentDetectionUtils.browserDetector.isMac && e.metaKey && e.keyCode === keyboardKeyCodes.keyCodeMap.V || !browserEnvironmentDetectionUtils.browserDetector.isMac && e.ctrlKey && e.keyCode === keyboardKeyCodes.keyCodeMap.V;
        if (!r && !o) {
          return;
        }
        let i = document.getSelection();
        if (!i) {
          return;
        }
        let l = editorSelectionUtilities.isSelectionChanged(i, 0);
        if (!l) {
          return;
        }
        let c = l.startContainer;
        let u = c instanceof HTMLElement ? c : c.parentElement;
        let a = u == null ? undefined : u.closest("[data-block-id]");
        if (!a) {
          return;
        }
        let s = a == null ? undefined : a.dataset?.blockId;
        if (!s) {
          return;
        }
        let d = this.selectionAPI.getSelection();
        let f = arrayFirstElement.getFirstElement(d.map(e => e.id));
        if (Number(s) === f) {
          C("model selection and browser selection matched, no need to update selection", this.selectionAPI.getSelection().map(e => e.id));
          return;
        }
        this.selectionAPI.emitSelectionChange({
          force: false
        });
        C("model selection and browser selection mismatched, force collect browser selection, and new selection list is", this.selectionAPI.getSelection().map(e => e.id));
      });
    }
  }).prototype, "selectionAPI", [selectionServiceProviderName.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), l = T(o.prototype, "config", [docxEditorCore.CONFIG_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), o)) || o;
  var I = selectionServiceProviderName.selectionServiceKey;
  require.d(exports, {
    selectionServiceKey: function () {
      return I;
    },
    CompatSelectionSvc: function () {
      return k;
    },
    compatBrowserSvc: function () {
      return compatBrowserSelectionService.compatBrowserSvc;
    }
  });
}