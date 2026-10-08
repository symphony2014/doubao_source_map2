// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initSelectionProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 168159
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var selectionServiceProviderName = require("selection-service-provider-name") /*id: 572319*/;
  var eventTypeConstants = require("event-type-constants") /*id: 561150*/;
  var rectIntersectionUtils = require("rect-intersection-utils") /*id: 8673*/;
  var composingServiceName = require("composing-service-name") /*id: 181291*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var blockRectServiceId = require("block-rect-service-id") /*id: 768934*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function _(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function R(e, i, r) {
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
  function I(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  n = dependencyInjectionContainer.Provide(selectionServiceProviderName.selectionServiceKey);
  o = dependencyInjectionContainer.Dynamic();
  l = dependencyInjectionContainer.Dynamic();
  s = dependencyInjectionContainer.Dynamic();
  let M = n((c = I((a = class {
    get options() {
      return this._sel.options;
    }
    get forward() {
      return this._sel.store.forward;
    }
    set forward(e) {
      this._sel.store.forward = e;
    }
    init(e, i) {
      let r = new docxBlockSelectionHandler_1.BlockSelectionHandler({
        blockManager: this.blockManager.get(),
        rect: this.rect.get(),
        mode: rectIntersectionUtils.IntersectionMode.TOUCH,
        startXThresholdWhenLazy: 0,
        startYThresholdWhenLazy: 35,
        startThresholdWhenNormal: 10,
        scrollSpeedDivider: 30,
        scrollThresholdOfBoundary: {
          x: 80,
          y: 25
        },
        manualScrollSpeed: 750,
        selectionAreaClass: "selection-area",
        securitySizeOfBoundary: {
          top: 5,
          left: 5,
          right: 5,
          bottom: 5
        },
        ...e
      }, this.focus, i);
      r.setup();
      this._sel = r;
      this.rafUpdateBrowserSelection = function (e) {
        let i = null;
        let r = function () {
          var r = arguments.length;
          var n = Array(r);
          var o = 0;
          for (; o < r; o++) {
            n[o] = arguments[o];
          }
          if (n[0] && n[0].persist) {
            n[0].persist();
          }
          if (i === null) {
            i = window.requestAnimationFrame(() => {
              e.apply(null, n);
              i = null;
            });
          }
        };
        r.cancel = () => {
          if (i) {
            window.cancelAnimationFrame(i);
            i = null;
          }
        };
        return r;
      }(this.updateBrowserSelection.bind(this));
    }
    on(e, i) {
      this._sel.on(e, i);
    }
    off(e, i) {
      this._sel.off(e, i);
    }
    register(e, i) {
      return this._sel.register(e, i);
    }
    unregister(e, i) {
      return this._sel.unregister(e, i);
    }
    getSelection() {
      return this._sel.getSelection();
    }
    getIsCurrentTextSelection(e) {
      return this._sel.getIsCurrentTextSelection(e);
    }
    getSelectedBlockIfInSelection(e) {
      return this._sel.getSelectedBlockIfInSelection(e);
    }
    setForceScrollSpeed(e, i) {
      return this._sel.scrollable.setForceScrollSpeed(e, i);
    }
    setForceScrollThresholdOfBoundary(e, i) {
      return this._sel.scrollable.setForceScrollThresholdOfBoundary(e, i);
    }
    setPreventScroll(e) {
      return this._sel.scrollable.setPreventScroll(e);
    }
    getSelectionWithoutCursor() {
      let e = this._sel.getSelection();
      if (this.isCursor(e)) {
        return [];
      } else {
        return e;
      }
    }
    getContext() {
      return this._sel.getContext();
    }
    getSelectionContext() {
      return this._sel.getSelectionContext();
    }
    removeAllSelection() {
      let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      let i = arguments.length > 1 ? arguments[1] : undefined;
      return this._sel.removeAllSelection(e, i);
    }
    restoreFocus() {
      this._sel.restoreFocus();
    }
    emitSelectionChange(e) {
      this._sel.emit(eventTypeConstants.selectionEvents.browserSelectionChange, undefined, e);
    }
    isFocus() {
      return this.isFocusInHiddenInputDom() || this.isFocusInBoundary() || browserEnvironmentDetectionUtils.browserDetector.isMobile;
    }
    isFocusInHiddenInputDom() {
      let e = window.getSelection();
      let {
        hiddenInputDom: i
      } = this._sel;
      if (e) {
        let {
          focusNode: r,
          focusOffset: n
        } = e;
        if (i.contains((r == null ? undefined : r.childNodes[n]) || null) || i.contains(e.focusNode)) {
          return true;
        }
      }
      return !!browserEnvironmentDetectionUtils.browserDetector.isMac && !!browserEnvironmentDetectionUtils.browserDetector.isSafari && !!i.focusStatus && (e == null ? undefined : e.rangeCount) === 0;
    }
    getHiddenInputDomCurrentRootBlockId() {
      let {
        hiddenInputDom: e
      } = this._sel;
      return e.dataset.currentRootBlockId;
    }
    clearBrowserTextSelection() {
      this._sel.setFocusInHiddenInputDom(true);
    }
    getBoundary() {
      return this.options.boundaryAreaContainer;
    }
    isFocusInBoundary() {
      let e = window.getSelection();
      return !!e && !!this._sel.pasteBoundary.contains(e.focusNode);
    }
    copyOrCutSelectedBlocks(e, i) {
      this.restoreFocus();
      if (i) {
        let {
          hiddenInputDom: e
        } = this._sel;
        e.dataset.copyOrCutBlockId = String(i);
      }
      if (e === "cut") {
        this._sel.setHiddenInputDomReadOnly(false);
      }
      document.execCommand(e);
      this._sel.setHiddenInputDomReadOnly(true);
    }
    copySelectedBlocks() {
      document.execCommand("copy");
    }
    selectAll(e) {
      if (!this.isSelecting()) {
        return this._sel.selectAll(e);
      }
    }
    getExtendSelectionType(e) {
      let i = this._sel.extendSelectionTypes.filter(i => i.type === e)[0];
      if (!i) {
        throw Error(`${e} not found`);
      }
      return i;
    }
    getTextSelectionType() {
      return this.getExtendSelectionType(editorTypeConstants.blockTypes.TEXT);
    }
    isSingleTextSelection(e = this.getSelection()) {
      return this._sel.store.isSingleTextSelection(e);
    }
    isCollapsedTextSelection(e = this.getSelection()) {
      if (this.isSingleTextSelection(e)) {
        return e[0].selection?.end === e[0].selection?.start;
      }
      return false;
    }
    isBlockSelection(e = this.getSelection()) {
      return this._sel.store.isBlockSelection(e);
    }
    isTextSelectionAcrossBlocks(e = this.getSelection()) {
      return this._sel.store.isTextSelectionAcrossBlocks(e);
    }
    isHybridSelection(e = this.getSelection()) {
      return this._sel.store.isHybridSelection(e);
    }
    isCursor(e = this.getSelection()) {
      return this._sel.store.isCursor(e);
    }
    onSelectionChangeWhenSelecting(e) {
      return this._sel.store.onSelectionChangeWhenSelecting(e);
    }
    offSelectionChangeWhenSelecting(e) {
      return this._sel.store.offSelectionChangeWhenSelecting(e);
    }
    onSelectionChange(e) {
      return this._sel.store.onSelectionChange(e);
    }
    offSelectionChange(e) {
      return this._sel.store.offSelectionChange(e);
    }
    onSelectionChanging(e) {
      return this._sel.store.onSelectionChanging(e);
    }
    offSelectionChanging(e) {
      return this._sel.store.offSelectionChanging(e);
    }
    destroy() {
      this._sel.destroy();
      this.rafUpdateBrowserSelection.cancel();
    }
    onServiceDispose() {
      this.destroy();
    }
    blur() {
      this._sel.blur();
    }
    isSelecting() {
      return this._sel.isSelecting;
    }
    setIsSelecting(e) {
      this._sel.isSelecting = e;
    }
    isActive() {
      return this._sel.isActive();
    }
    activate() {
      this._sel.activate();
    }
    deactivate() {
      this._sel.deactivate();
    }
    cancel() {
      this._sel.cancel();
    }
    updateBrowserSelection(e = this.getSelection()) {
      this._sel.updateBrowserSelection(e);
    }
    setIsComposing(e) {
      var i;
      if ((i = this.composing.get()) !== null && i !== undefined) {
        i.setIsComposing(e);
      }
    }
    getIsComposing() {
      return !!this.composing.get()?.isComposing;
    }
    setHiddenInputDomReadOnly(e) {
      this._sel.setHiddenInputDomReadOnly(e);
    }
    setFocusInHiddenInputDom() {
      this._sel.setFocusInHiddenInputDom(true);
    }
    constructor() {
      var e = this;
      R(this, "_sel", undefined);
      _(this, "blockManager", c, this);
      _(this, "rect", d, this);
      _(this, "composing", u, this);
      R(this, "rafUpdateBrowserSelection", undefined);
      R(this, "setSelection", (e, i) => this._sel.setSelection(e, i));
      R(this, "clearSelection", e => this._sel.setSelection([], {
        source: e
      }));
      R(this, "focus", function (i) {
        let r = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (r && e._sel.boundaryAreaContainer) {
          let {
            scrollTop: r
          } = e._sel.boundaryAreaContainer;
          i.focus();
          e._sel.boundaryAreaContainer.scrollTo({
            top: r
          });
        } else {
          i.focus();
        }
      });
    }
  }).prototype, "blockManager", [o, blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), d = I(a.prototype, "rect", [l, blockRectServiceId.blockRectServiceId], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), u = I(a.prototype, "composing", [s, composingServiceName.composingService], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), a)) || a;
  function T() {
    docxEditorCore.registerProviders([M, compatBrowserSelectionService_1.CompatSelectionSvc]);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(compatBrowserSelectionService_1.compatBrowserSvc).init();
    });
  }
  require.d(exports, {
    initSelectionProvider: function () {
      return T;
    }
  });
}