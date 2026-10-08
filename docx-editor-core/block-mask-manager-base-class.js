// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'BlockMaskManagerBase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 471875
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l;
  var a;
  var s;
  var c;
  var u;
  var d;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docCommentUtils = require("doc-comment-utils") /*id: 315488*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var docTokenStyleConstants = require("doc-token-style-constants") /*id: 611528*/;
  var docBlockTypeCheckers = require("doc-block-type-checkers") /*id: 391113*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var syncedRefBlockToken = require("synced-ref-block-token") /*id: 893973*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var blockMaskUpdaterProvider = require("block-mask-updater-provider") /*id: 406318*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockZoomUtils = require("doc-block-zoom-utils") /*id: 735944*/;
  function A(e, n, i) {
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
  let D = debugLoggerFactory.createEnabledLogger("block:block-mask-rect");
  class L {
    getHostRectInsetDelta() {
      return this.hostRectInsetDelta || this.refreshHostRectInsetDelta("getHostRectInsetDelta");
    }
    refreshHostRectInsetDelta(e) {
      let n = this.calcHostRectInsetDelta(e);
      let i = !deepEqualUtil_1.deepEqual(this.hostRectInsetDelta, n);
      if (!this.hostRectInsetDelta || i) {
        this.hostRectInsetDelta = n;
        this.hostRectInsetDeltaChange$.next(this.hostRectInsetDelta);
        D(this.logId, "%s: hostRectInsetDelta=%s/%s", e, n.leftDelta, n.rightDelta);
      }
      return this.hostRectInsetDelta;
    }
    getHostRectView() {
      if (syncedBlockFeatureFlags.isSyncedBlockScrollable() && syncedReferenceBlockUtils.isSyncedReferenceBlock(this.hostBlock.blockManager.editorAPI) && this.hostBlock.type === docBlockTypeConstants.blockTypeConstants.PAGE) {
        let e = syncedReferenceBlockUtils.getSyncedReferenceBlockView(this.hostBlock.blockManager.editorAPI);
        if (e) {
          return e;
        }
      }
      return this.hostBlock;
    }
    calcHostRectInsetDelta(e) {
      let {
        struct: n,
        blockManager: i,
        props: r
      } = this.hostBlock;
      if (!n.children.length) {
        return {
          leftDelta: 0,
          rightDelta: 0
        };
      }
      let {
        fold: o
      } = r.recursionProps;
      let l = this.getHostRectView().getRealHostRect();
      let {
        left: a,
        right: s
      } = l;
      let c = [];
      n.traverse(n => {
        if (!docBlockTypeCheckers.isEmbeddedBlockType(n.type) || docxBlockUtils_1.hasParentOfBlockType(n.id, i, docBlockTypeConstants.blockTypeConstants.CELL)) {
          return;
        }
        if (o.isFoldedOrFoldedBy(n.id)) {
          D(this.logId, "%s.calcHostRectInsetDelta: skip folded %s-%s", e, n.type, n.id);
          return;
        }
        let r = i.getBlockViewByBlockIdNotCheck(n.id);
        if (!r) {
          return;
        }
        let l = r.getExtendedContentRect();
        if (l.width) {
          c.push(`${r.logId}=${l.left}/${l.right}`);
          a = Math.min(a, l.left);
          s = Math.max(s, l.right);
        }
      });
      D(this.logId, "%s.calcHostRectInsetDelta, rect(left/right): %o %s=%s/%s, minLeft/maxRight=%s/%s", e, c, this.hostBlock.logId, l.left, l.right, a, s);
      let u = a - l.left;
      let d = l.right - s;
      if (this.hostBlock.editorAPI.config.get("isPresentationMode") && syncedBlockFeatureFlags.isSyncedBlockScrollable()) {
        var h;
        var f;
        let e = (h = (f = this.hostBlock).getMaskContainer) === null || h === undefined ? undefined : h.call(f);
        if (e && docBlockZoomUtils.isPresentationMode(e) || docBlockZoomUtils.isPresentationMode(this.hostBlock.hostElement)) {
          let e = docBlockZoomUtils.getDefaultLineHeight();
          u /= e;
          d /= e;
        }
      }
      return {
        leftDelta: u,
        rightDelta: d
      };
    }
    constructor(e) {
      this.hostBlock = e;
      A(this, "hostRectInsetDelta", undefined);
      A(this, "logId", undefined);
      A(this, "hostRectInsetDeltaChange$", new observableSubjectClass.Subject());
      this.logId = e.logId;
    }
  }
  var docxTextRangeHighlightUtils = require("docx-text-range-highlight-utils") /*id: 663042*/;
  var aiBgSelectionClasses = require("ai-bg-selection-classes") /*id: 281313*/;
  function x(e, n, i) {
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
  let U = debugLoggerFactory.createEnabledLogger("block:block-mask-manager");
  let z = [docBlockTypeConstants.blockTypeConstants.HEADING1, docBlockTypeConstants.blockTypeConstants.HEADING2, docBlockTypeConstants.blockTypeConstants.HEADING3, docBlockTypeConstants.blockTypeConstants.HEADING4, docBlockTypeConstants.blockTypeConstants.HEADING5, docBlockTypeConstants.blockTypeConstants.HEADING6, docBlockTypeConstants.blockTypeConstants.HEADING7, docBlockTypeConstants.blockTypeConstants.HEADING8, docBlockTypeConstants.blockTypeConstants.HEADING9, docBlockTypeConstants.blockTypeConstants.HEADINGN, docBlockTypeConstants.blockTypeConstants.ORDERED, docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.TODO, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.TEXT, docBlockTypeConstants.blockTypeConstants.AI];
  let H = ["selected", "hovered", "sync-selected", "background", "reminder-highlighted", "block-flash", "synced-block-overflow-border", aiBgSelectionClasses.aiClassConstants.flash, aiBgSelectionClasses.aiClassConstants.permanent, aiBgSelectionClasses.aiClassConstants.mockSelection, aiBgSelectionClasses.aiClassConstants.mockBlockSelection, aiBgSelectionClasses.aiClassConstants.mockAiAutoApplySelection];
  let F = ["selected", "hovered"];
  let $ = ["sync-selected"];
  let Z = [aiBgSelectionClasses.aiClassConstants.mockAiAutoApplySelection];
  function W(e, n) {
    if (!n) {
      return e;
    }
    let i = docxTextRangeHighlightUtils.calculateTextRangeHighlight(n);
    if (i) {
      i.forEach(n => {
        if (n) {
          e.appendChild(n);
        }
      });
      e.classList.add("text-flash-mask");
    }
    return e;
  }
  function G(e, n) {
    if (n == null ? undefined : n.options.noBorderRadius) {
      return "0px";
    } else {
      return `${z.includes(e) ? 6 : 8}px`;
    }
  }
  class j {
    static getMaskDom(e, n) {
      if (this.maskDom) {
        this.maskDom.style.borderRadius = G(e, n);
        return W(this.maskDom.cloneNode(), n);
      }
      let i = document.createElement("div");
      i.setAttribute("contenteditable", "false");
      Object.assign(i.style, {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: G(e, n),
        pointerEvents: "none"
      });
      this.maskDom = i;
      return W(this.maskDom.cloneNode(), n);
    }
    static updateMaskDom(e, n) {
      return W(e, n);
    }
    destroy() {
      this.debouncedRefreshMaskStyle.cancel();
      this.guardedRefreshMaskStyle.cancel();
    }
    get hostRectInsetDeltaChange$() {
      return this.maskRect?.hostRectInsetDeltaChange$;
    }
    get hostElement() {
      return this.hostBlock.hostElement;
    }
    get maskUpdater() {
      if (this.isMaskUpdateEnabled) {
        return this.hostBlock.editorAPI.getService(blockMaskUpdaterProvider.blockMaskUpdaterName, {
          optional: true
        });
      } else {
        return undefined;
      }
    }
    getHostRectInsetDelta() {
      var e;
      if ((e = this.maskRect) === null || e === undefined) {
        return undefined;
      } else {
        return e.getHostRectInsetDelta();
      }
    }
    updateMaskDomStyle(e, n, i) {
      if (e) {
        Object.assign(e.style, i || {});
        this.updateMaskStyle([e], n);
      } else {
        this.updateMaskStyle([], n);
      }
    }
    addMask(e, n, i, r, o) {
      var l;
      if (F.includes(e)) {
        let n = this.getExclusiveMaskType();
        if (n && n !== e) {
          U(this.logId, "skip adding exclusive mask %s, unequal to current(%s)", e, n);
          return null;
        }
      }
      if (this.hasMaskClass(e)) {
        U(this.logId, "refresh style for already-existing mask %s, extraStyle=%o", e, i);
        let r = this.getMask(e, n);
        if (Z.includes(e) && r) {
          r = j.updateMaskDom(r, o);
        }
        this.updateMaskDomStyle(r, `refreshMask(${e})`, i);
        return;
      }
      U(this.logId, "add %s mask, extraStyle=%o", e, i);
      let a = $.includes(e) ? null : j.getMaskDom(r, o);
      this.updateMaskDomStyle(a, `addMask(${e}, undefined, undefined, ${r})`, i);
      if (a) {
        a.classList.add(this.getMaskClass(e));
        n.appendChild(a);
        this.maskContainers.set(e, n);
      }
      this.toggleMaskClass(n, e, true);
      if ((l = this.maskUpdater) !== null && l !== undefined) {
        l.addBlockListener(this.hostBlock.id, this.delayedRefreshMaskStyle);
      }
      return a;
    }
    removeMask(e, n) {
      var i;
      let r = this.getMask(n);
      if (r || this.hasMaskClass(n)) {
        U(this.logId, "remove %s mask", n);
        if (r != null) {
          r.remove();
        }
        this.toggleMaskClass(e, n, false);
        if (!this.getMaskTypes().length && (i = this.maskUpdater) !== null && i !== undefined) {
          i.removeBlockListener(this.hostBlock.id);
        }
      }
    }
    toggleMaskClass(e, n, i) {
      let {
        hostBlock: r
      } = this;
      if (i) {
        r.toggleHostClass(n, true);
        if (e != null) {
          e.classList.add(n);
        }
      } else {
        r.toggleHostClass(n, false);
        if (e != null) {
          e.classList.remove(n);
        }
      }
    }
    hasMaskClass(e) {
      return this.hostBlock.hasHostClass(e);
    }
    getExclusiveMaskType() {
      return F.find(e => this.hasMaskClass(e));
    }
    getMaskTypes() {
      return H.filter(e => this.hasMaskClass(e));
    }
    getMaskClass(e) {
      return `${e}-mask`;
    }
    constructor(e) {
      var n;
      var i = this;
      this.hostBlock = e;
      x(this, "logId", undefined);
      x(this, "maskContainers", new Map());
      x(this, "maskRect", undefined);
      x(this, "isMaskUpdateEnabled", undefined);
      x(this, "toggleMask", function (e, n, r, o = i.hostElement, l, a, s = false) {
        if (!$.includes(e) || i.maskUpdater) {
          if (n) {
            if (s) {
              i.removeMask(o, e);
            }
            if (o) {
              i.addMask(e, o, r, l, a);
            }
          } else {
            i.removeMask(o, e);
          }
        }
      });
      x(this, "getMask", (e, n) => {
        let i = n || this.maskContainers.get(e);
        if (i) {
          return function (e, n) {
            try {
              return e.querySelector(`:scope > .${n}`);
            } catch {
              var i;
              let r;
              i = `.${n}`;
              r = null;
              e.querySelectorAll(i).forEach(n => {
                if (n.parentElement === e) {
                  r = r || n;
                }
              });
              return r;
            }
          }(i, this.getMaskClass(e));
        } else {
          return null;
        }
      });
      x(this, "updateMaskStyle", (e, n) => {
        if (!this.maskRect) {
          return;
        }
        let {
          leftDelta: i,
          rightDelta: r
        } = this.maskRect.refreshHostRectInsetDelta(n);
        U(this.logId, "%s: maskInsetDelta=%s/%s", n, i, r);
        e.forEach(e => {
          let n = e.style;
          n.left = `${i}px`;
          n.right = `${r}px`;
        });
      });
      x(this, "delayedRefreshMaskStyle", e => {
        this.guardedRefreshMaskStyle(`guard.${e}`);
        this.debouncedRefreshMaskStyle(e);
      });
      x(this, "refreshMaskStyle", e => {
        let n = this.getMaskTypes();
        let i = n.map(e => this.getMask(e)).filter(e => e);
        this.updateMaskStyle(i, `${e}.refreshMask(${n})`);
      });
      x(this, "debouncedRefreshMaskStyle", debounceUtil_1_1.debounce(this.refreshMaskStyle, 5, {
        maxWait: 30
      }));
      x(this, "guardedRefreshMaskStyle", debounceUtil_1_1.debounce(this.refreshMaskStyle, 500));
      this.logId = this.hostBlock.logId;
      this.isMaskUpdateEnabled = (n = e.type, syncedBlockFeatureFlags.isSyncedBlockScrollable() ? docBlockTypeCheckers.isAllowedBlockType(n) || docBlockTypeCheckers.isSyncedPageType(n) : docBlockTypeCheckers.isAllowedBlockType(n));
      if (this.isMaskUpdateEnabled) {
        this.maskRect = new L(e);
      }
    }
  }
  x(j, "maskDom", null);
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  function X(e, n, i) {
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
  class J extends docxEditorBlockRenderer.BlockViewBase {
    get record() {
      return this.struct.record;
    }
    get snapshot() {
      return this.record.snapshot;
    }
    get translated() {
      return !!this.props.recursionProps.translated;
    }
    get blockManager() {
      return this.props.recursionProps.blockManager;
    }
    get modelService() {
      return this.editorAPI.modelService;
    }
    get viewService() {
      return this.editorAPI.viewService;
    }
    get config() {
      return this.editorAPI.config;
    }
    get viewport() {
      return this.props.recursionProps.viewport;
    }
    get selectionAPI() {
      return this.props.recursionProps.selectionAPI;
    }
    get boundary() {
      return this.props.recursionProps.boundary;
    }
    get editable() {
      return this.props.recursionProps.editable !== false;
    }
    get revising() {
      return !!this.props.recursionProps.revising;
    }
    get isMobileEditMode() {
      return this.props.recursionProps.isMobileEditMode;
    }
    get vcController() {
      return this.props.recursionProps.vcController;
    }
    get editPermission() {
      return this.props.recursionProps.editPermission !== false;
    }
    get eventEmitter() {
      return this.props.recursionProps.eventEmitter;
    }
    get isSSR() {
      return this.props.recursionProps.isSSR === true;
    }
    get isShortcut() {
      return this.props.recursionProps.isShortcut === true;
    }
    get isHistory() {
      return this.props.recursionProps.isHistory === true;
    }
    get parentId() {
      return this.props.parentId;
    }
    get isPresentationMode() {
      return this.props.recursionProps.isPresentationMode === true;
    }
    get hostElement() {
      return this.props.hostElementRef.current;
    }
    toggleHostClass(e, n) {
      return this.props.viewContext.toggleHostClass(e, n);
    }
    hasHostClass(e) {
      var n;
      return !!((n = this.hostElement) === null || n === undefined ? undefined : n.classList.contains(e));
    }
    shouldComponentUpdate(e, n, i) {
      return this.struct.active;
    }
    isBufferEntered() {
      return this.bufferEntered;
    }
    isViewportEntered() {
      return this.viewportEntered;
    }
    getViewLoaded() {
      return this.viewLoaded;
    }
    setViewLoaded(e) {
      this.viewLoaded = e;
    }
    enterBuffer() {
      if (!this.bufferEntered) {
        this.bufferEntered = true;
        this.invokeEnterBuffer();
      }
    }
    invokeEnterBuffer() {
      if (this.onBufferEnter) {
        this.onBufferEnter();
      }
    }
    leaveBuffer() {
      if (this.bufferEntered) {
        this.bufferEntered = false;
        this.invokeLeaveBuffer();
      }
    }
    invokeLeaveBuffer() {
      if (this.onBufferLeave) {
        this.onBufferLeave();
      }
    }
    enterViewport() {
      if (!this.viewportEntered) {
        this.viewportEntered = true;
        if (this.onViewportEnter) {
          this.onViewportEnter();
        }
      }
    }
    leaveViewport() {
      if (this.viewportEntered) {
        this.viewportEntered = false;
        if (this.onViewportLeave) {
          this.onViewportLeave();
        }
      }
    }
    blockViewDidMount() {
      if (this.onBlockDataUpdate) {
        this.cancelBlockDataUpdate = this.props.onBlockDataUpdate(this.onBlockDataUpdate.bind(this));
      }
    }
    blockViewWillUnmount() {
      var e;
      if ((e = this.cancelBlockDataUpdate) !== null && e !== undefined) {
        e.call(this);
      }
    }
    constructor(...e) {
      super(...e);
      X(this, "bufferEntered", false);
      X(this, "viewportEntered", false);
      X(this, "viewLoaded", undefined);
      X(this, "cancelBlockDataUpdate", undefined);
    }
  }
  function K(e, n, i) {
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
  c = dependencyInjectionContainer.Dynamic();
  r = (u = class extends J {
    static getMaskDom(e) {
      return j.getMaskDom(e);
    }
    get model() {
      return this.props.model;
    }
    get blockMaskManager() {
      this._blockMaskManager ||= new j(this);
      return this._blockMaskManager;
    }
    get logId() {
      return `${this.type}-${this.id}`;
    }
    get focusElement() {
      return null;
    }
    get isWithBoundary() {
      return false;
    }
    get record() {
      return this.model.record;
    }
    get snapshot() {
      return this.record.snapshot;
    }
    get containerElement() {
      let {
        hostElement: e
      } = this;
      if (this.CONTAINER_CLASS && e) {
        return e.querySelector(`.${this.CONTAINER_CLASS}`);
      } else if (this.isPresentationMode && e) {
        return e.querySelector(".presentation-mode-container");
      } else {
        return e;
      }
    }
    get contentElement() {
      let n = this.hostElement?.firstElementChild;
      if (n == null ? undefined : n.classList.contains("docx-block-zero-space")) {
        n = n.nextElementSibling;
      }
      return n;
    }
    get blockContentElement() {}
    getElementByClass(e) {
      var n;
      if ((n = this.hostElement) === null || n === undefined) {
        return undefined;
      } else {
        return n.querySelector(`.${e}`);
      }
    }
    get scrollElement() {
      return this.getElementByClass(docTokenStyleConstants.docSelectors.CONTENT_SCROLLER);
    }
    get forceOriginSetSelected() {
      return this.props.forceOriginSetSelected === true;
    }
    getSelectionLocator(e) {
      let n = this.hostElement.querySelectorAll(".docx-block-zero-space [data-zero-space]");
      let i = n[0];
      let r = n[n.length - 1];
      return (e ? i : r) || this.hostElement;
    }
    originSetSelected(e) {
      let n;
      if (this.isPresentationMode) {
        n = this.getElementByClass(docBlockTypeConstants.presentationContainer) || undefined;
      } else if (this.getMaskContainer) {
        n = this.getMaskContainer() || undefined;
      }
      this.blockMaskManager.toggleMask("selected", e, undefined, n, this.type);
    }
    setSelected(e) {
      this.originSetSelected(e);
    }
    setSyncSelected(e) {
      this.blockMaskManager.toggleMask("sync-selected", e, undefined, undefined, this.type);
    }
    setHovered(e) {
      this.blockMaskManager.toggleMask("hovered", e, {
        backgroundColor: docTokenStyleConstants.styleConstants.BLOCK_BG_HOVER
      }, undefined, this.type);
    }
    getHostRect() {
      let {
        rect: e,
        blockManager: n
      } = this.props.recursionProps;
      let i = n.getBlockViewByBlockId(n.rootBlockId);
      let r = i.hostElement.getBoundingClientRect();
      let o = e.getBlockRect(this.id, i.id);
      return new DOMRect(r.left + o.left, r.top + o.top, o.width, o.height);
    }
    getRealHostRect() {
      if (this.isPresentationMode) {
        return docBlockZoomUtils.getZoomedBoundingClientRect(this.hostElement);
      } else {
        return this.hostElement.getBoundingClientRect();
      }
    }
    getContentRect() {
      return this.calcContentRect(0);
    }
    getExtendedContentRect() {
      return this.calcContentRect(0, this.isPresentationMode);
    }
    getOverflowableContainer() {
      let e = this.props;
      return e.scrollManage && e.scrollManage.getScrollContainer() || null;
    }
    calcContentRect(e, n = false) {
      let i = n ? docBlockZoomUtils.getZoomedBoundingClientRect : e => e.getBoundingClientRect();
      let r = () => this.contentElement ? i(this.contentElement) : new DOMRect(0, 0, 0, 0);
      if (!docBlockTypeCheckers.isEmbeddedBlockType(this.type)) {
        return r();
      }
      let o = this.getOverflowableContainer();
      let l = o && o.firstElementChild;
      if (!o || !l || o.classList.contains(docxScrollableConstants.scrollableContainer) && !o.classList.contains(docxScrollableConstants.scrollRectReady)) {
        return r();
      }
      let a = i(o);
      let s = i(l);
      let c = i(this.hostElement);
      if (a.width === 0) {
        return r();
      }
      let u = a.left - (browserEnvironmentDetectionUtils.browserEnv.isMobile ? 0 : e);
      let d = numberClampUtil.clampNumber(s.left - e, u, c.left);
      let h = numberClampUtil.clampNumber(s.right, c.right, a.right);
      return new DOMRect(d, c.top, h - d, c.height);
    }
    removeAllSelectStatus() {
      if (this.hostElement) {
        this.setSelected(false);
        this.setSyncSelected(false);
        this.setHovered(false);
      }
    }
    getText() {
      return "";
    }
    onResize(e) {}
    onFoldStateChange(e, n) {}
    getCommentRef(e) {
      let n = docCommentUtils.getCommentId(e);
      return this.hostElement.querySelector(`.block-comment.${n}`);
    }
    addCommentHighlight(e) {
      if (this.props.toggleCommentHighlight) {
        this.props.toggleCommentHighlight(true);
      }
    }
    removeCommentHighlight(e, n) {
      if (typeof this.props.toggleCommentHighlight != "function") {
        return;
      }
      if (!n) {
        this.props.toggleCommentHighlight(false);
        return;
      }
      let r = this.blockManager.editorAPI.getService(compatibleEditorContext_1.compatibleContext).commentModule?.module;
      if (r) {
        let e = r.getCommentByCommentId(n);
        let i = e && this.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE && docxCommentUtils.isSameParentToken(e, this.model);
        let o = r.getRecordsByCommentId(n);
        if (!o || !o.size || !o.has(this.record.id) || i) {
          this.props.toggleCommentHighlight(false);
          return;
        }
      }
      let o = this.getCommentRef(e);
      if (o && !o.classList.contains(docCommentUtils.getCommentId(n))) {
        this.props.toggleCommentHighlight(false);
      }
    }
    addRevisionHighlight(e, n) {
      var i;
      var r;
      if ((i = (r = this.props).toggleRevisionHighlight) !== null && i !== undefined) {
        i.call(r, e, true);
      }
    }
    removeRevisionHighlight(e, n) {
      var i;
      var r;
      if ((i = (r = this.props).toggleRevisionHighlight) !== null && i !== undefined) {
        i.call(r, e, false);
      }
    }
    addFallbackMarkClass(e) {
      var n;
      var i;
      if ((n = (i = this.props).toggleFallBackId) !== null && n !== undefined) {
        n.call(i, e, "add");
      }
    }
    removeFallbackMarkClass(e) {
      var n;
      var i;
      if ((n = (i = this.props).toggleFallBackId) !== null && n !== undefined) {
        n.call(i, e, "remove");
      }
    }
    toggleAnchorHighlight(e, n) {
      if (this.props.toggleAnchorHighlight) {
        this.props.toggleAnchorHighlight(e, n);
      }
    }
    attachBlockView() {}
    detachBlockView() {}
    blockViewDidMove() {
      this.removeAllSelectStatus();
      this.detachBlockView();
      this.attachBlockView();
    }
    blockViewWillUnmount() {
      super.blockViewWillUnmount();
      if (this._blockMaskManager) {
        this._blockMaskManager.destroy();
      }
      this.removeAllSelectStatus();
    }
    renderChildren(e = {}) {
      return this.editorAPI.viewService.renderChildren(this.id, Object.assign({
        recursionProps: this.props.recursionProps
      }, e));
    }
    constructor(e) {
      var n;
      var i;
      super(e);
      n = "syncedReferenceBlockManagerGetter";
      if (i = d) {
        Object.defineProperty(this, n, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      K(this, "_blockMaskManager", null);
      K(this, "CONTAINER_CLASS", "");
      K(this, "getNestedRecordId", e => e || this.record.id);
      K(this, "getAlignType", undefined);
    }
  }).prototype;
  o = "syncedReferenceBlockManagerGetter";
  l = [c, syncedRefBlockToken.syncedRefBlockToken];
  s = {};
  Object.keys(a = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    s[e] = a[e];
  });
  s.enumerable = !!s.enumerable;
  s.configurable = !!s.configurable;
  if ("value" in s || s.initializer) {
    s.writable = true;
  }
  d = (s = l.slice().reverse().reduce(function (e, n) {
    return n(r, o, e) || e;
  }, s)).initializer === undefined ? (Object.defineProperty(r, o, s), null) : s;
  let Y = u;
  require.d(exports, {
    BlockMaskManagerBase: function () {
      return Y;
    }
  });
}