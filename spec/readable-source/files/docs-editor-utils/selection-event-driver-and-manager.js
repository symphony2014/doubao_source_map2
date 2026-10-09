// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zl' to 'SelectionModelEvents'
// - Renamed export 'Iw' to 'SelectionContext'
// - Renamed export 'Ov' to 'SelectionModel'
// - Renamed export 'JH' to 'RectPainter'
// - Renamed export 'IY' to 'hasClassInAncestors'
// - Renamed export 'rF' to 'EventDriver'
// - Renamed export 'yO' to 'EventDriverEvents'
// - Renamed export 'DR' to 'SelectionEventDriver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 282246
         */
module.exports = function (module, exports, require) {
  let o = function (e, n = "px") {
    if (typeof e == "number") {
      return e + n;
    } else {
      return e;
    }
  };
  function i(e, n, r) {
    let i = e && e.style;
    if (i) {
      if (typeof n == "object") {
        for (let [e, r] of Object.entries(n)) {
          i[e] = o(r);
        }
      } else if (r && typeof n == "string") {
        i[n] = o(r);
      }
    }
  }
  function l(e) {
    return {
      ...e,
      x: e.clientX,
      y: e.clientY,
      target: e.target
    };
  }
  function c(e, n) {
    let r = e;
    while (r) {
      if (function (e, n) {
        return e instanceof HTMLElement && (e.classList ? e.classList.contains(n) : !!e.getAttribute && (e.getAttribute("class") || "").split(" ").some(e => e === n));
      }(r, n)) {
        return true;
      }
      r = r.parentNode;
    }
    return false;
  }
  var u;
  var a;
  var s;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var f = debugBrowserConfig;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var p = eventEmitterUmd;
  var docAiSummaryConstants = require("doc-ai-summary-constants") /*id: 306015*/;
  var copilotClassConstants = require("copilot-class-constants") /*id: 753500*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var captionEditorConstants = require("caption-editor-constants") /*id: 287236*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var whiteboardSelectors = require("whiteboard-selectors") /*id: 657196*/;
  var childDocTitleConstants = require("child-doc-title-constants") /*id: 559724*/;
  var sidebarUiIdentifiers = require("sidebar-ui-identifiers") /*id: 888542*/;
  var rectIntersectionUtils = require("rect-intersection-utils") /*id: 8673*/;
  var eventTypeConstants = require("event-type-constants") /*id: 561150*/;
  var domClassLayoutUtils = require("dom-class-layout-utils") /*id: 418505*/;
  var editorCommands = require("editor-commands") /*id: 361547*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  function B(e, n, r) {
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
  let D = f("selection:core: scrollable");
  class w {
    onDelayMove(e) {
      window.addEventListener("wheel", this.manualScroll, {
        passive: false
      });
    }
    setForceScrollSpeed(e, n) {
      this.forceScrollSpeed.x = e;
      this.forceScrollSpeed.y = n;
    }
    setForceScrollThresholdOfBoundary(e, n) {
      this.forceScrollThresholdOfBoundary.top = e;
      this.forceScrollThresholdOfBoundary.bottom = n;
    }
    setPreventScroll(e) {
      this.preventScroll = e;
    }
    getPaddingRight(e) {
      let n;
      let {
        boundaryAreaContainer: r,
        blockManager: o
      } = this.instance.options;
      if (o == null ? undefined : o.editorAPI.config.get("isSyncedReferenceBlock")) {
        return;
      }
      let i = e ? `${domClassLayoutUtils.domClassLayout.getScrollBarWidth()}px` : 0;
      if ((o == null ? undefined : o.editorAPI.config.get("isHistory")) || (o == null ? undefined : o.editorAPI.config.get("isPresentationMode"))) {
        if (r.offsetWidth - r.clientWidth > 0) {
          return i;
        } else {
          return 0;
        }
      } else if (o == null ? undefined : o.editorAPI.config.get("isPreview")) {
        return undefined;
      } else {
        return i;
      }
    }
    freezeDefaultScroll(e) {
      let {
        isMobile: n
      } = browserEnvironmentDetectionUtils.browserDetector;
      if (n) {
        return;
      }
      let {
        blockManager: r
      } = this.instance.options;
      if (r == null ? undefined : r.editorAPI.config.get("isSyncedReferenceBlock")) {
        return;
      }
      let {
        boundaryAreaContainer: o
      } = this.instance.options;
      let i = o.style.overflow;
      let l = e ? "hidden" : "";
      if (i !== l) {
        let n = this.getPaddingRight(e);
        Object.assign(o.style, {
          overflow: l,
          paddingRight: n
        });
        o.style.overflow = l;
        docxEditorEventConstantsAndManager.globalEventBus.trigger(editorCommands.editorCommands.FreezeDefaultScroll, [e]);
      }
    }
    onTapMove(e) {
      let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let {
        instance: r
      } = this;
      let o = () => {
        if (this.preventScroll) {
          return;
        }
        let {
          scrollSpeedDivider: i
        } = this.options;
        let {
          scrollSpeed: l,
          targetContainer: c
        } = r.selectionContext;
        if (l.x === null && l.y === null) {
          this.freezeDefaultScroll(false);
          return;
        }
        if (n) {
          this.freezeDefaultScroll(true);
        }
        if (l.y !== null && l.y !== 0) {
          let e = l.y / i;
          c.scrollTop += e / Math.abs(e) * Math.ceil(Math.abs(e));
        }
        r.handleAreaChange(e);
        requestAnimationFrame(o);
      };
      requestAnimationFrame(o);
    }
    onTabStop() {
      window.removeEventListener("wheel", this.manualScroll);
      this.freezeDefaultScroll(false);
    }
    calcScrollSpeed(e) {
      let {
        scrollTop: a,
        scrollHeight: s,
        clientHeight: d,
        scrollLeft: f,
        scrollWidth: h,
        clientWidth: _
      } = e.targetContainer;
      let p = e.targetBoundary;
      let {
        scrollSpeed: g
      } = e;
      let E = e.endX;
      let m = e.endY;
      if (E < p.left + this.options.scrollThresholdOfBoundary.x) {
        g.x = f ? -(this.forceScrollSpeed.x ?? Math.abs(p.left - E)) : null;
      } else if (E > p.left + p.width - this.options.scrollThresholdOfBoundary.x) {
        g.x = h - f - _ ? this.forceScrollSpeed.x ?? Math.abs(p.left + p.width - E) : null;
      } else {
        g.x = null;
      }
      if (m < p.top + (this.forceScrollThresholdOfBoundary.top ?? this.options.scrollThresholdOfBoundary.y)) {
        g.y = a ? -(this.forceScrollSpeed.y ?? Math.abs(p.top - m)) : null;
        D("this.forceScrollThresholdOfBoundary.y ?? this.options.scrollThresholdOfBoundary.y", this.forceScrollThresholdOfBoundary.top ?? this.options.scrollThresholdOfBoundary.y, g.y);
      } else if (m > p.top + p.height - (this.forceScrollThresholdOfBoundary.bottom ?? this.options.scrollThresholdOfBoundary.y)) {
        g.y = s - a - d ? this.forceScrollSpeed.y ?? Math.abs(p.top + p.height - m) : null;
      } else {
        g.y = null;
      }
      e.update({
        scrollSpeed: g
      });
    }
    constructor(e, n) {
      this.instance = e;
      this.options = n;
      B(this, "forceScrollSpeed", {
        x: undefined,
        y: undefined
      });
      B(this, "forceScrollThresholdOfBoundary", {
        top: undefined,
        bottom: undefined
      });
      B(this, "preventScroll", false);
      B(this, "manualScroll", e => {
        if (!this.instance.checkIfNeedCalcSelectablesIfLazy()) {
          return;
        }
        this.freezeDefaultScroll(false);
        let {
          instance: n
        } = this;
        let {
          scrollSpeed: r
        } = n.selectionContext;
        let {
          manualScrollSpeed: o
        } = this.options;
        let i = e.deltaY ? e.deltaY > 0 ? 1 : -1 : 0;
        let l = e.deltaX ? e.deltaX > 0 ? 1 : -1 : 0;
        n.selectionContext.update({
          scrollSpeed: {
            x: (r.x || 0) + l * o,
            y: (r.y || 0) + i * o
          }
        });
        D("manualScroll", n.selectionContext.scrollSpeed);
        n._handleTapMove(e, false);
        e.preventDefault();
      });
    }
  }
  function M(e, n, r) {
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
  (u = {})[u.NORMAL = 0] = "NORMAL";
  u[u.LAZY = 1] = "LAZY";
  let P = u;
  class F {
    get shouldBuildMultiText() {
      return this.renderMode === P.LAZY;
    }
    get beginX() {
      if (this.targetContainer) {
        let {
          scrollLeft: e
        } = this.targetContainer;
        return this.staticBeginX - e;
      }
      return 0;
    }
    getScrollTop(e) {
      if (this.getContainerScrollTop) {
        return this.getContainerScrollTop();
      } else if (e) {
        return e.scrollTop;
      } else {
        return 0;
      }
    }
    get beginY() {
      if (this.targetContainer) {
        return this.staticBeginY - this.getScrollTop(this.targetContainer);
      } else {
        return 0;
      }
    }
    setup(e) {
      let {
        beginX: n,
        beginY: r,
        targetContainer: o
      } = e;
      this.staticBeginX = (n || 0) + ((o == null ? undefined : o.scrollLeft) || 0);
      this.staticBeginY = (r || 0) + this.getScrollTop(o);
      delete e.beginX;
      delete e.beginY;
      return this.update(e);
    }
    update(e) {
      Object.keys(e).forEach(n => {
        this[n] = e[n];
      });
      return this;
    }
    destroy() {
      this.scrollSpeed = {
        x: null,
        y: null
      };
      this.singleClick = false;
      this.scrollAvailable = false;
      this.beginTarget = undefined;
      this.endTarget = undefined;
      this.staticBeginX = 0;
      this.staticBeginY = 0;
      this.endX = 0;
      this.endY = 0;
      this.selectables = [];
      this.renderMode = P.LAZY;
      this.isNeedResolveIfLazy = false;
      this.intersectSelectedBlocksMap.clear();
    }
    constructor(e) {
      M(this, "renderMode", P.LAZY);
      M(this, "isNeedResolveIfLazy", undefined);
      M(this, "scrollSpeed", {
        x: null,
        y: null
      });
      M(this, "singleClick", false);
      M(this, "tripleClick", false);
      M(this, "mobileTouchHitZeroSpace", false);
      M(this, "scrollAvailable", false);
      M(this, "beginTarget", undefined);
      M(this, "endTarget", undefined);
      M(this, "endX", 0);
      M(this, "endY", 0);
      M(this, "targetContainer", undefined);
      M(this, "targetBoundary", undefined);
      M(this, "selectables", []);
      M(this, "selectableCompleted", false);
      M(this, "lateralContainerBlockId", null);
      M(this, "intersectSelectedBlocksMap", new Map());
      M(this, "getContainerScrollTop", null);
      M(this, "staticBeginX", 0);
      M(this, "staticBeginY", 0);
      if (e == null ? undefined : e.getContainerScrollTop) {
        this.getContainerScrollTop = e.getContainerScrollTop;
      }
    }
  }
  function x(e, n, r) {
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
  let U = f("docx:selection:EventDriver");
  let G = [".ai-suggestion-side-card_orignal-text-dropdown-content", ".docx-popup-container", ".embed-spreadsheet", ".docx-reminder-popover-wrapper", ".docx-mindnote-block-container", ".block-overlay", ".catalogue", ".doc-cover-wrapper", ".doc-info-wrapper", "#docCommentContainer", ".message-container", ".feed-container", ".isv-block-container", ".find-replace-box-wrapper", ".poll-input-textarea", ".editor-kit-equation-popover-wrapper", ".bidirection-link-list", `.${tableLayoutConstants_1.tableClassNames.TABLE_HEADER}`, ".docx-global-comment", "div[class*=\"mention-container__main\"]", ".list-detail-dialog", ".docs_mode_switch_dropdown", ".sheet-block-select-container", ".poll-date-picker", ".ud__picker-dateInput", ".fold-handler", ".okr-block__popover-container", ".global-app--topbar", ".clipboard-menu-container", whiteboardSelectors.whiteboardContainer, whiteboardSelectors.whiteboardPortal, `.${copilotClassConstants.copilotContainer}`, ".image-cropper", `.${captionEditorConstants.captionEditorArea}`, `.${childDocTitleConstants.childTitleEditor}`, ".comment-btn", ".h5-toolbar-wrapper", ".delete-synced-source-confirm", ".paste-context-dropdown", ".comment-controls-dropdown", `.${sidebarUiIdentifiers.docSuggestionSidebar}`, `.${docAiSummaryConstants.summaryMountPoint}`, ".meego-block-by-selection-creator-container", "#flowCommentContainer"];
  (a = {}).startTargetFilter = "startTargetFilter";
  let H = a;
  class K extends p {
    get frame() {
      return this._frame;
    }
    isActive() {
      return this._activated;
    }
    activate() {
      this._activated = true;
    }
    deactivate() {
      this._activated = false;
    }
    register(e, n) {
      if (this[e] && this[e].indexOf(n) < 0) {
        this[e].push(n);
      }
    }
    unregister(e, n) {
      this[e] &&= this[e].filter(e => e !== n);
    }
    setup() {
      this.scrollable = new w(this, {
        scrollSpeedDivider: this.options.scrollSpeedDivider,
        manualScrollSpeed: this.options.manualScrollSpeed,
        scrollThresholdOfBoundary: this.options.scrollThresholdOfBoundary
      });
      this.enable();
    }
    cancel() {
      this._handleTapStop();
    }
    get container() {
      return this.options.blockManager.config.get("container");
    }
    enable() {
      this._frame.addEventListener("mousedown", this._handleTapStart);
      this._frame.addEventListener("contextmenu", this.handleContextmenu);
      this._frame.addEventListener("selectionchange", this.handleBrowserSelectionChange);
      this.enableAddition();
    }
    disable() {
      this._frame.removeEventListener("mousedown", this._handleTapStart);
      this._frame.removeEventListener("contextmenu", this.handleContextmenu);
      this._frame.removeEventListener("selectionchange", this.handleBrowserSelectionChange);
      this.disableAddition();
    }
    destroy() {
      this.disable();
      this.rectPainter.destroy();
      this.store.destroy();
      this._frame.removeEventListener("mousemove", this._delayedTapMove);
      this._frame.removeEventListener("mousemove", this._handleTapMove);
      if (docxFeatureFlags.isMobileMemoryLeakFix()) {
        this._frame.removeEventListener("mouseup", this._handleTapStop, true);
        this._frame.removeEventListener("dragend", this._handleTapStop, true);
      } else {
        this._frame.removeEventListener("mouseup", this._handleTapStop);
        this._frame.removeEventListener("dragend", this._handleTapStop);
      }
      this._frame.removeEventListener("selectionchange", this.handleBrowserSelectionChange);
    }
    serilizeTarget(e, n, r) {
      return e;
    }
    fire(e, n) {
      let r = {
        event: n,
        instance: this,
        area: this.rectPainter._area,
        continue: true,
        renderMode: this.selectionContext.renderMode,
        items: this.store.tmpStored.slice()
      };
      this.emit(e, r);
    }
    constructor(...e) {
      var n;
      super(...e);
      n = this;
      x(this, "_frame", document);
      x(this, "selectionContext", undefined);
      x(this, "scrollable", undefined);
      x(this, "rectPainter", undefined);
      x(this, "store", undefined);
      x(this, "startTargetFilter", []);
      x(this, "isSelecting", false);
      x(this, "lastSelectionType", undefined);
      x(this, "_activated", true);
      x(this, "options", undefined);
      x(this, "handleBrowserSelectionChange", e => {
        this.fire(eventTypeConstants.selectionEvents.browserSelectionChange, e);
        if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          return;
        }
        let n = getSelection();
        if ((n == null ? undefined : n.type) === "Range") {
          let e = (n == null ? undefined : n.rangeCount) ? n == null ? undefined : n.getRangeAt(0) : undefined;
          if (e && n && this.lastSelectionType !== "Range") {
            let {
              startContainer: r,
              endContainer: o
            } = e;
            if (this.isIgnoreNode(r, G) || this.isIgnoreNode(o, G)) {
              return;
            }
            this.lastSelectionType = n == null ? undefined : n.type;
            this.emit(eventTypeConstants.selectionEvents.selectingTapMove, true);
          }
        } else {
          this.lastSelectionType = n == null ? undefined : n.type;
          this.emit(eventTypeConstants.selectionEvents.selectingTapStop, false);
        }
      });
      x(this, "_handleTapStart", e => {
        if (!this.isActive() || e.shiftKey) {
          return;
        }
        if (this.isIgnoreEvent(e, G)) {
          U("click on ignored element, return, %o", e.target);
          return;
        }
        let {
          x: n,
          y: r,
          target: o
        } = l(e);
        U("start x, y", n, r);
        if (n === undefined || r === undefined) {
          return;
        }
        if (this.needCancelTap(e)) {
          return this._handleTapStop(e);
        }
        if (!o || e.button !== 0) {
          return;
        }
        let {
          boundaryAreaContainer: i
        } = this.options;
        if (this.startTargetFilter.some(e => !e(o))) {
          U("selection intercept!");
          return;
        }
        let c = o.getBoundingClientRect();
        let u = i.getBoundingClientRect();
        if (syncedBlockFeatureFlags.isSyncedBlockScrollable() && syncedReferenceBlockUtils.isSyncedReferenceBlock(this.options.blockManager.editorAPI)) {
          let e = syncedReferenceBlockUtils.getSyncedBlockBoundary(this.options.blockManager);
          let n = (e == null ? undefined : e.getBoundingClientRect()) || u;
          u = new DOMRect(n.left, u.top, n.width, u.height);
        }
        let a = rectIntersectionUtils.checkIntersection(u, c);
        let s = function (e) {
          let n = e.path || e.composedPath && e.composedPath();
          if (n && n.length > 0) {
            return n;
          }
          let r = e.target;
          while (r) {
            n.push(r);
            r = r.parentElement;
          }
          return n;
        }(e).includes(i);
        if (!a || !s) {
          U("target not in boundary: %o", o);
          this.onTargetNotInBoundray(o);
          return;
        }
        this.emit(eventTypeConstants.selectionEvents.selectingTapStart);
        this.fire(eventTypeConstants.selectionEvents.beforeStart, e);
        let d = this.computeRenderModeByStartTarget(o);
        let f = this.serilizeTarget(o, n, r);
        let h = null;
        if (d === P.LAZY) {
          h = this.getClosestLateralContainerBlockId(o);
        }
        this.selectionContext.setup({
          beginTarget: f,
          targetContainer: browserEnvironmentDetectionUtils.browserDetector.isMobile ? document.scrollingElement || undefined : i,
          targetBoundary: u,
          beginX: n,
          beginY: r,
          singleClick: true,
          renderMode: d,
          lateralContainerBlockId: h
        });
        U("setup startpoint", f);
        this._frame.addEventListener("mousemove", this._delayedTapMove, {
          passive: false
        });
        this._frame.addEventListener("mouseup", this._handleTapStop, true);
        this._frame.addEventListener("dragend", this._handleTapStop, true);
      });
      x(this, "handleContextmenu", e => {
        this.fire(eventTypeConstants.selectionEvents.contextmenu, e);
      });
      x(this, "needCancelTap", e => {
        let n = this.isSelecting && e.button !== 0;
        let r = !!e.ctrlKey && browserEnvironmentDetectionUtils.browserDetector.isMac;
        return n || r;
      });
      x(this, "isIgnoreEvent", (e, n) => {
        let r = e.target;
        return !!r && this.isIgnoreElement(r, n);
      });
      x(this, "isIgnoreNode", (e, n) => {
        let r = e.parentElement;
        return !!r && this.isIgnoreElement(r, n);
      });
      x(this, "isIgnoreElement", (e, n) => {
        if (n) {
          let r = false;
          for (let o of n) {
            for (let n of document.querySelectorAll(o)) {
              if (n === e || n.contains(e)) {
                r = true;
                break;
              }
            }
            if (r) {
              break;
            }
          }
          return r;
        }
        return false;
      });
      x(this, "_delayedTapMove", e => {
        let {
          x: r,
          y: o
        } = l(e);
        let {
          startThresholdWhenNormal: i
        } = this.options;
        let {
          beginX: c,
          beginY: u,
          renderMode: a
        } = this.selectionContext;
        if (this.options.blockManager?.editable) {
          let e = Math.abs(r - c);
          let n = Math.abs(o - u);
          if (a === P.NORMAL) {
            let r = e + n < i;
            U("_delayedTapMove skip=%s(%s+%s < %s)", r, e, n, i);
            if (r) {
              return;
            }
          }
        }
        if (!this.isActive()) {
          return;
        }
        if (this.selectionContext.renderMode === P.NORMAL) {
          this.clearBrowserTextSelection();
        }
        this._frame.removeEventListener("mousemove", this._delayedTapMove);
        this._frame.addEventListener("mousemove", this._handleTapMove, {
          passive: false
        });
        if (this.selectionContext.renderMode === P.NORMAL) {
          this.rectPainter.show();
        }
        let {
          targetContainer: s,
          targetBoundary: d
        } = this.selectionContext;
        this.selectionContext.update({
          singleClick: false
        });
        let f = browserEnvironmentDetectionUtils.browserDetector.isMobile ? s.clientHeight : s.scrollHeight;
        let h = browserEnvironmentDetectionUtils.browserDetector.isMobile ? s.clientWidth : s.scrollWidth;
        let _ = [Math.round(f) !== Math.round(d.height), Math.round(h) !== Math.round(d.width)].includes(true);
        this.selectionContext.update({
          scrollAvailable: _
        });
        if (_) {
          this.scrollable.onDelayMove(e);
        }
        U("targetBoundary=%o", d);
        this.rectPainter.layout({
          host: {
            top: d.y,
            left: d.x,
            width: d.width,
            height: d.height
          }
        });
        this.fire(eventTypeConstants.selectionEvents.start, e);
        this._handleTapMove(e);
        e.preventDefault();
      });
      x(this, "_handleTapMove", debounceUtilWrapper.createDebounce(function (e) {
        let r = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let {
          x: o,
          y: i,
          target: c
        } = l(e);
        let {
          scrollSpeed: u
        } = n.selectionContext;
        n.selectionContext.update({
          endX: o,
          endY: i,
          endTarget: c
        });
        n.isSelecting = true;
        n.emit(eventTypeConstants.selectionEvents.selectingTapMove, true);
        let a = n.checkIfNeedCalcSelectablesIfLazy();
        n.selectionContext.update({
          isNeedResolveIfLazy: a
        });
        if ([n.selectionContext.scrollAvailable, u.x !== null || u.y !== null, a].includes(false)) {
          n.handleAreaChange(e, a);
        } else {
          U("move: scroll");
          n.scrollable.onTapMove(e, r);
        }
      }, 30));
      x(this, "_handleTapStop", e => {
        this._handleTapMove.cancel();
        this.isSelecting = false;
        this._frame.removeEventListener("mousemove", this._delayedTapMove);
        this._frame.removeEventListener("mousemove", this._handleTapMove);
        if (docxFeatureFlags.isMobileMemoryLeakFix()) {
          this._frame.removeEventListener("mouseup", this._handleTapStop, true);
          this._frame.removeEventListener("dragend", this._handleTapStop, true);
        } else {
          this._frame.removeEventListener("mouseup", this._handleTapStop);
          this._frame.removeEventListener("dragend", this._handleTapStop);
        }
        this.scrollable.onTabStop();
        this.emit(eventTypeConstants.selectionEvents.selectingTapStop, false);
        if (e) {
          this.fire(eventTypeConstants.selectionEvents.stop, e);
        }
        this.selectionContext.destroy();
        this.rectPainter.hide();
        this.store.clearTmpSelection();
      });
      x(this, "handleAreaChange", function (e) {
        let r = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        n.rectPainter.calcAreaRect(n.selectionContext);
        n.scrollable.calcScrollSpeed(n.selectionContext);
        if (r) {
          n.calcSelectables();
          if (n.selectionContext.selectables.length > 0) {
            n.store.computeAndUpdate({
              selectables: n.selectionContext.selectables,
              areaRect: n.rectPainter._areaDomRect,
              selectableCompleted: n.selectionContext.selectableCompleted
            });
            if (n.store.tmpStored.length && n.selectionContext.renderMode === P.NORMAL) {
              n.clearBrowserTextSelection();
            }
            n.fire(eventTypeConstants.selectionEvents.move, e);
          }
        }
        if (!syncedReferenceBlockUtils.isSyncedReferenceBlock(n.options.blockManager.editorAPI)) {
          n.rectPainter.redrawArea(n.selectionContext);
        }
      });
    }
  }
  class Z extends K {
    enableAddition() {}
    disableAddition() {}
  }
  function $(e, n, r) {
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
  let j = f("docx:selection:RectPainter");
  class V {
    setup() {
      this._area = this._frame.createElement("div");
      this._hostElement = this._frame.createElement("div");
      this._hostElement.appendChild(this._area);
      this._area.classList.add(this.options.selectionAreaClass || "");
      i(this._area, {
        willChange: "top, left, bottom, right, width, height",
        top: 0,
        left: 0,
        position: "fixed"
      });
      i(this._hostElement, {
        overflow: "hidden",
        position: "fixed",
        transform: "translate3d(0, 0, 0)",
        pointerEvents: "none",
        zIndex: "99"
      });
      return this;
    }
    show() {
      this.options.selectionAreaContainer.appendChild(this._hostElement);
    }
    hide() {
      this._hostElement.remove();
    }
    layout(e) {
      i(this._hostElement, {
        top: e.host.top,
        left: e.host.left,
        width: e.host.width,
        height: e.host.height
      });
    }
    redrawArea(e) {
      let n = e.targetBoundary;
      let {
        x: r,
        y: o,
        width: i,
        height: l
      } = this._areaDomRect;
      let c = this._area.style;
      c.transform = `translate3d(${r - n.x}px,${o - n.y}px, 0)`;
      c.width = `${i}px`;
      c.height = `${l}px`;
    }
    calcAreaRect(e) {
      this._areaDomRect = function (e) {
        let n = e.targetBoundary;
        let r = e.endX;
        let o = e.endY;
        if (r < n.left) {
          r = n.left;
        } else if (r > n.left + n.width) {
          r = n.left + n.width;
        }
        if (o < n.top) {
          o = n.top;
        } else if (o > n.top + n.height) {
          o = n.top + n.height;
        }
        let i = Math.min(e.beginX, r);
        let l = Math.min(e.beginY, o);
        let c = Math.max(e.beginX, r);
        let u = Math.max(e.beginY, o);
        j("矩形位置", i, l, c, u);
        return new DOMRect(i, l, c - i, u - l);
      }(e);
    }
    destroy() {
      this._hostElement.remove();
    }
    constructor(e) {
      this.options = e;
      $(this, "_frame", document);
      $(this, "_area", undefined);
      $(this, "_areaDomRect", undefined);
      $(this, "_hostElement", undefined);
      this.setup();
    }
  }
  function W(e, n, r) {
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
  let X = f("sophon:selection: SelectionModel");
  (s = {}).CHANGE_WHEN_SELECTING = "changewhenselecting";
  s.CHANGE = "change";
  s.CHANGING = "changing";
  let Y = s;
  class z extends p {
    onSelectionChangeWhenSelecting(e) {
      this.on(Y.CHANGE_WHEN_SELECTING, e);
    }
    offSelectionChangeWhenSelecting(e) {
      this.off(Y.CHANGE_WHEN_SELECTING, e);
    }
    onSelectionChange(e) {
      this.on(Y.CHANGE, e);
    }
    offSelectionChange(e) {
      this.off(Y.CHANGE, e);
    }
    onSelectionChanging(e) {
      this.on(Y.CHANGING, e);
    }
    offSelectionChanging(e) {
      this.off(Y.CHANGING, e);
    }
    destroy() {
      this.removeAllListeners(Y.CHANGE_WHEN_SELECTING);
      this.removeAllListeners(Y.CHANGE);
      this.removeAllListeners(Y.CHANGING);
    }
    transaction(e, n, r) {
      let o = this._copy(this.stored);
      e();
      let i = !this.isStoreEqual(o, this.stored);
      if (r && i) {
        this.emit(Y.CHANGE, o, this._copy(this.stored), n);
      }
      if (i) {
        X("change", o, this.stored);
      }
      return i;
    }
    isStoreEqual(e, n) {
      return e.length === n.length && e.every((e, r) => this.isModelStrictEqual(e, n[r]));
    }
    getSelection() {
      return this.stored;
    }
    getTmpSelection() {
      return this.tmpStored;
    }
    clearTmpSelection() {
      this.tmpStored = [];
    }
    computeAndUpdate(e) {
      let {
        selectables: n,
        areaRect: r,
        selectableCompleted: o = false
      } = e;
      let {
        mode: i
      } = this.options;
      this.tmpStored = [];
      for (let e of n) {
        if (o || this.isFoldedBy(e)) {
          this._pushItem(this.tmpStored, e);
          continue;
        }
        let n = this.modelToRect(e);
        if (rectIntersectionUtils.checkIntersection(r, n, i)) {
          this._pushItem(this.tmpStored, e);
        }
      }
      this.emitSelectionChaning();
    }
    emitSelectionChaning() {
      let e = this.emitedTmpStored || this.stored;
      if (!this.isStoreEqual(e, this.tmpStored)) {
        this.emitedTmpStored = this.tmpStored;
        this.emit(Y.CHANGING, e, this.tmpStored);
      }
    }
    _removeItem(e, n) {
      let r = this.indexOf(e, n);
      if (~r) {
        e.splice(r, 1);
      }
    }
    _pushItem(e, n) {
      let r = this.indexOf(e, n);
      if (~r) {
        e[r] = n;
      } else {
        e.push(n);
      }
    }
    _copy(e) {
      return JSON.parse(JSON.stringify(e));
    }
    constructor(e) {
      super();
      this.options = e;
      W(this, "stored", []);
      W(this, "tmpStored", []);
      W(this, "emitedTmpStored", undefined);
    }
  }
  require.d(exports, {
    SelectionModelEvents: function () {
      return Y;
    },
    SelectionContext: function () {
      return F;
    },
    SelectionModel: function () {
      return z;
    },
    RectPainter: function () {
      return P;
    },
    hasClassInAncestors: function () {
      return c;
    },
    EventDriver: function () {
      return V;
    },
    EventDriverEvents: function () {
      return H;
    },
    SelectionEventDriver: function () {
      return Z;
    }
  });
}