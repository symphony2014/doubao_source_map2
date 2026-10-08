// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GI' to 'getContainerTypes'
// - Renamed export 'ZI' to 'MultiTextSelectionHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 627646
         */
module.exports = function (module, exports, require) {
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var i = debugBrowserConfig;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var throttledArrayDifference_1 = require("throttled-array-difference_1") /*id: 979369*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  require("doc-ai-summary-eligibility-checker") /*id: 225028*/;
  var docAiSummaryConstants = require("doc-ai-summary-constants") /*id: 306015*/;
  let s = e => {
    let n = document.querySelector(`.${docAiSummaryConstants.summaryMountPoint}`);
    if (e) {
      if (n != null) {
        n.classList.add(docAiSummaryConstants.selectionDisabled, docAiSummaryConstants.classMultiTextSelect);
      }
    } else if (n != null) {
      n.classList.remove(docAiSummaryConstants.classMultiTextSelect);
    }
  };
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var codeBlockConstants = require("code-block-constants") /*id: 48094*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var selectionEventDriverAndManager = require("selection-event-driver-and-manager") /*id: 282246*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  function T(e, n, r) {
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
  var C = new class {
    setCurrentEditor(e) {
      this.currentEditor = e;
    }
    isSameEditor(e) {
      return this.currentEditor === e;
    }
    constructor() {
      T(this, "visible", false);
      T(this, "swiping", false);
      T(this, "inMotion", false);
      T(this, "currentEditor", undefined);
      T(this, "setVisible", e => {
        this.visible = e;
      });
      T(this, "setSwiping", e => {
        this.swiping = e;
      });
      T(this, "setInMotion", e => {
        this.inMotion = e;
      });
      T(this, "isVisible", () => this.visible || this.isSwiping());
      T(this, "isRunning", () => this.visible || this.isInMotion());
      T(this, "isSwiping", () => this.swiping);
      T(this, "isInMotion", () => this.swiping || this.inMotion);
    }
  }();
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var selectionEventHandler = require("selection-event-handler") /*id: 873551*/;
  function R(e, n, r) {
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
  let y = i("multiTextSelection");
  let O = [docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.TASK, docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM, docBlockTypeConstants.blockTypeConstants.AI];
  let S = [docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.TASK, docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM, docBlockTypeConstants.blockTypeConstants.AI];
  let A = () => syncUrlBlockUtils.isSyncingActive() ? S : O;
  let L = [docBlockTypeConstants.blockTypeConstants.CELL];
  let N = ["column-gap-inner", "ud__input-input__placeholder__wrapper"];
  let B = [codeBlockConstants.codeBlockCaption, "draggable-btn", "history-diff-alignable-highlight", "code-block-line"];
  class D extends selectionEventHandler.SelectionEventHandler {
    get modelService() {
      return this.context.blockManager.modelService;
    }
    get viewService() {
      return this.context.blockManager.viewService;
    }
    get containerTypeList() {
      return A();
    }
    get unSelectableType() {
      return this.context.options.unSelectableType || [];
    }
    get singleContainerType() {
      return L;
    }
    isIOSBlockMenuVisible() {
      return browserEnvironmentDetectionUtils.browserDetector.isIOS && C.isVisible() && editorSelectionUtilities.isBlockSelectionType(this.context.getSelection());
    }
    clearContextmenuContext() {
      this.isContextMenu = false;
      this.contextMenuSelChangeCount = 0;
    }
    isNewCodeHeaderIgnoreDom(e) {
      var n;
      var r;
      let o = e.parentNode;
      return (o == null ? undefined : (n = o.closest) === null || n === undefined ? undefined : n.call(o, `.${codeBlockConstants.codeBlockCaption}`)) || (o == null ? undefined : (r = o.closest) === null || r === undefined ? undefined : r.call(o, `.${codeBlockConstants.codeBlockHeaderToolbar}`));
    }
    onBrowserSelectionChangeImpl(e, n) {
      var o;
      var i;
      var l;
      let c = (i = n == null ? undefined : n.force) !== null && i !== undefined && i;
      let u = (l = n == null ? undefined : n.syncBrowser) === null || l === undefined || l;
      if (this.context.selectionContext.renderMode === selectionEventDriverAndManager.RectPainter.NORMAL) {
        return;
      }
      y(".onBrowserSelectionChange", e);
      if (Array.from(this.context.selectionContext.intersectSelectedBlocksMap.values()).some(e => e.length > 0)) {
        y(".onBrowserSelectionChange[hasIntersectSelectedBlocks]: tmpPrevSelection=%O", this.tmpPrevSelection);
        if (this.tmpPrevSelection.length > 0) {
          this.diffRenderBlockSelection(this.tmpPrevSelection, []);
          this.tmpPrevSelection = [];
        }
        this.selectionUpdated = false;
        if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          this.context.selectionContext.renderMode = selectionEventDriverAndManager.RectPainter.NORMAL;
        }
        return;
      }
      let a = getSelection();
      let s = (a == null ? undefined : a.rangeCount) ? a == null ? undefined : a.getRangeAt(0) : undefined;
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && this.context.selectionContext.mobileTouchHitZeroSpace) {
        y(".onBrowserSelectionChange[mobileTouchHitZeroSpace]");
        this.context.selectionContext.mobileTouchHitZeroSpace = false;
        return;
      }
      if (!s || !a) {
        y(".onBrowserSelectionChange[noRange]");
        if (browserEnvironmentDetectionUtils.browserDetector.isAndroid || browserEnvironmentDetectionUtils.browserDetector.isMac && browserEnvironmentDetectionUtils.browserDetector.isSafari && this.context.hiddenInputDom.focusStatus) {
          y("noRange because of safari focus remove selection.");
          return;
        }
        if (!this.context.isSelecting && !this.isIOSBlockMenuVisible()) {
          this.context.removeAllSelection(true, browserEnvironmentDetectionUtils.browserDetector.isIPadApp ? editorTypeConstants.commandTypes.IPadAppRemoveAllSelection : editorTypeConstants.commandTypes.ExternalInvoke);
        }
        return;
      }
      if (this.context.composingService && this.context.composingService.isComposing && !c && u) {
        y(".onBrowserSelectionChange[isComposing]");
        return;
      }
      let {
        startContainer: f,
        endContainer: _,
        startOffset: v,
        endOffset: T
      } = s;
      if (this.hasMultipleSelectionIgnoreDom(f, _)) {
        y(".onBrowserSelectionChange[hasIgnoreDom]");
        return;
      }
      if (this.isNewCodeHeaderIgnoreDom(f) || this.isNewCodeHeaderIgnoreDom(_)) {
        return;
      }
      if (this.context.blockManager.editorAPI.config.get("isBidirectionalLink")) {
        y(".onBrowserSelectionChange[isBidirectionalLink]");
        return;
      }
      let C = this.context.options.boundaryAreaContainer.querySelector(".docx-popup-container");
      if (C == null ? undefined : C.contains(f)) {
        this.context.removeAllSelection(false);
      }
      if (f instanceof Element && f.classList.contains("view-name-flex-input-container") && f.closest(".bitable-toolbar-doc-wrapper")) {
        this.context.removeAllSelection(false);
      }
      let I = this.context.blockManager.getBlockViewByBlockIdNotCheck(this.context.blockManager.rootBlockId)?.hostElement;
      if (!(I == null ? undefined : I.contains(f))) {
        y(".onBrowserSelectionChange[notSelectedInCurrentRoot]");
        return;
      }
      let R = false;
      let O = function (e) {
        let {
          endContainer: n,
          endOffset: r
        } = e;
        if (!(n instanceof HTMLElement) || !n.closest(".docx-okr-block")) {
          return null;
        }
        let o = null;
        for (let e of Array.from(n.childNodes).splice(0, r).reverse()) {
          if (!(e instanceof HTMLElement)) {
            continue;
          }
          let n = e.querySelectorAll(`[${docxEditorConstantsConfig.dataBlockIdAttr}]`);
          if (n.length) {
            o = n[n.length - 1];
            break;
          }
        }
        return o;
      }(s);
      if (O) {
        R = true;
      }
      if (this.context.selectionContext.tripleClick && !this.context.isSelecting) {
        y(".onBrowserSelectionChange[tripleClick]");
        O = f;
        R = true;
      }
      let S = docxBlockUtils_2.getBlockIdFromNode(f);
      let A = docxBlockUtils_2.getBlockIdFromNode(O || _);
      this.context.store.forward = !editorSelectionUtilities.isRangeEqual(a, editorSelectionUtilities.isSelectionChanged(a, 0));
      if (!S || !A) {
        if (!this.context.isSelecting && this.context.store.isTextSelectionAcrossBlocks(this.context.getSelection())) {
          this.context.removeAllSelection();
        }
        y(".onBrowserSelectionChange[selectionNotInBlock]");
        return;
      }
      if (S === A) {
        if (this.isContextMenu && this.isContextmenuOnBlockSelection(A)) {
          return;
        }
        let e = this.modelService.getBlockModelByBlockId(S);
        let n = function (e) {
          let {
            startContainer: n,
            endContainer: r,
            collapsed: o
          } = e;
          let {
            parentNode: i
          } = n;
          if (n === r && o && i && i instanceof Element) {
            var l;
            if ((l = i.parentElement) === null || l === undefined ? undefined : l.classList.contains("docx-block-zero-space")) {
              return !!i.attributes?.["data-zero-space"];
            }
            if (i.classList.contains("selection-locator")) {
              return true;
            }
          }
          return false;
        }(s);
        if (!e) {
          return;
        }
        if (n) {
          this.context.restoreFocus();
        }
        if (docBlockTypeConstants.taskOnlyTypes.includes(e.type) && !n) {
          y(".onBrowserSelectionChange[hitThirdPartyEditor]");
          return this.context.removeAllSelection(false);
        }
        if (e.type === docBlockTypeConstants.blockTypeConstants.TABLE && this.isHitTableNonEditable(s)) {
          y(".onBrowserSelectionChange resotreFocus from hitTableNonEditable");
          this.context.restoreFocus();
          return;
        }
        if (!editorTextBlockUtilities.isTextBlock(e) && !n) {
          return;
        }
        if (e.type === docBlockTypeConstants.blockTypeConstants.TABLE && n) {
          let e = this.context.getSelection();
          if (editorSelectionUtilities.isBlockSelectionType(e)) {
            y(".onBrowserSelectionChange: restoreFocus fro table zeroSpace");
            this.context.restoreFocus();
          }
          return;
        }
        let r = [docBlockTypeConstants.blockTypeConstants.IMAGE, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE];
        if (browserEnvironmentDetectionUtils.browserDetector.isIOS && r.includes(e.type) && n) {
          return;
        }
      }
      if (S !== A || f !== _ || v !== T || (o = this.context.blockManager.getBlockViewByBlockIdNotCheck(S)) === null || o === undefined || !o.isRoot || selectionEventDriverAndManager.hasClassInAncestors(f, "page-block-content")) {
        this.buildMultipleSelection({
          domSelection: a,
          startBlockId: S,
          endBlockId: A,
          force: R,
          syncBrowser: u
        });
      }
    }
    isHitTableNonEditable(e) {
      var n;
      var r;
      var o;
      var i;
      var l;
      let {
        startContainer: c,
        endContainer: u,
        startOffset: a,
        endOffset: s
      } = e;
      return !!(c == null ? undefined : (n = c.classList) === null || n === undefined ? undefined : n.contains("table-content-padding")) && !!(u == null ? undefined : (r = u.classList) === null || r === undefined ? undefined : r.contains("table-content-padding")) && a === s || !e.collapsed && !!(c == null ? undefined : (o = c.classList) === null || o === undefined ? undefined : o.contains("table-content-padding")) && (!!(u == null ? undefined : (i = u.classList) === null || i === undefined ? undefined : i.contains("right-shadow")) || !!(u == null ? undefined : (l = u.classList) === null || l === undefined ? undefined : l.contains("left-shadow")));
    }
    isContextmenuOnBlockSelection(e) {
      let n = this.context.getSelection();
      return editorSelectionUtilities.isBlockSelectionType(n) && !!this.context.getBlockInNestedSelection(e);
    }
    hasMultipleSelectionIgnoreDom(e, n) {
      var r;
      return ((e == null ? undefined : (r = e.closest) === null || r === undefined ? undefined : r.call(e, codeBlockConstants.codeFoldBlockSelector)) ? [...N, ...B] : N).some(r => e.nodeType === Node.ELEMENT_NODE && (e == null ? undefined : e.classList.contains(r)) || n.nodeType === Node.ELEMENT_NODE && (n == null ? undefined : n.classList.contains(r)));
    }
    setTempSelection(e) {
      this.context.store.stored = e;
      let n = this.tmpPrevSelection;
      this.diffRenderBlockSelection(n, e);
      this.tmpPrevSelection = e;
      this.selectionUpdated = true;
      this.context.store.emit(selectionEventDriverAndManager.SelectionModelEvents.CHANGE_WHEN_SELECTING, n, deepCloneWrapper_1.deepClone(e));
    }
    diffRenderBlockSelection(e, n) {
      let r = editorSelectionUtilities.mergeSelectionChanges(e, n);
      let o = editorSelectionUtilities.mergeSelectionChanges(n, e);
      y(".diffRenderBlockSelection: toBeRemoved=%O, toBeAdded=%O", r, o);
      this.renderBlockSelection(r, o);
    }
    renderBlockSelection(e, n) {
      e.forEach(e => {
        if (e.type === editorTypeConstants.blockTypes.BLOCK) {
          this.context.mainSelectionType.render(e, false);
        }
      });
      n.forEach(e => {
        if (e.type === editorTypeConstants.blockTypes.BLOCK) {
          this.context.mainSelectionType.render(e, true);
        }
      });
    }
    isTextualBlock(e) {
      return !!e && !!e.model.isTextBlock;
    }
    getContainers(e) {
      let n = [];
      let r = this.modelService.getBlockModelByBlockId(e);
      while (r) {
        if (this.containerTypeList.includes(r.type)) {
          n.push(r.id);
        }
        r = r.parent;
      }
      return n;
    }
    getIterator(e, n) {
      let r = n;
      let o = this.getContainers(e);
      let i = this.getContainers(r);
      let l = this.modelService.getBlockModelByBlockId(e);
      if (o.length !== i.length || o[0] !== i[0] || o[0] === r || i[0] === e) {
        let n = throttledArrayDifference_1.throttledArrayDiff(o, i, deepEqualUtil_1.deepEqual);
        let a = throttledArrayDifference_1.throttledArrayDiff(i, o, deepEqualUtil_1.deepEqual);
        let s = n[n.length - 1];
        let d = this.context.store.forward ? n[n.length - 1] : a[a.length - 1];
        let f = d ? this.modelService.getBlockModelByBlockId(d) : null;
        if (f && this.singleContainerType.includes(f.type)) {
          r = (l = f).id;
        } else if (s) {
          l = this.modelService.getBlockModelByBlockId(s) || l;
        } else if (n.length === 0 && a.length > 1 && this.context.isSelecting) {
          l = this.modelService.getBlockModelByBlockId(e);
        } else if (o.length === i.length) {
          l = this.modelService.getBlockModelByBlockId(o[0]) || l;
        }
      }
      let a = () => {
        if (!l || i.includes(l.id)) {
          return l = null;
        }
        let e = l;
        while (e.children.length) {
          e = e.children[e.children.length - 1];
        }
        l = e;
      };
      let s = () => !l || !l.next || l.id === r || this.containerTypeList.includes(l.type) && (a(), l === null) ? null : (l = l.next, this.unSelectableType.includes(l.type)) ? s() : l;
      return {
        next: s,
        current: () => l
      };
    }
    getModelSelection(e, n, r) {
      if (this.unSelectableType.includes(n.type)) {
        return null;
      }
      let o = this.viewService.getBlockViewByBlockId(n.id);
      if (r !== editorTypeConstants.blockTypes.BLOCK) {
        if (o && this.isTextualBlock(o)) {
          var i;
          let r = (i = o.model.domRangeToModelRange(e)) === null || i === undefined ? undefined : i.toPosition();
          let l = o.editor.getText().length;
          let c = r ? r.start : 0;
          let u = r ? r.start + r.len : l;
          return {
            id: n.id,
            type: editorTypeConstants.blockTypes.TEXT,
            selection: {
              start: c,
              end: u
            }
          };
        }
        if (!o && n.isTextBlock) {
          return {
            id: n.id,
            type: editorTypeConstants.blockTypes.TEXT,
            selection: {
              start: 0,
              end: n.getText().length
            }
          };
        }
      }
      return {
        id: n.id,
        type: editorTypeConstants.blockTypes.BLOCK
      };
    }
    buildMultipleSelection(e) {
      let n;
      let {
        domSelection: r,
        startBlockId: o,
        endBlockId: i,
        force: l,
        syncBrowser: c
      } = e;
      let u = [];
      let a = this.getIterator(o, i);
      let s = a.current();
      if (!s) {
        return u;
      }
      do {
        let e;
        if (e = s.type === docBlockTypeConstants.blockTypeConstants.CODE && o !== i ? this.getModelSelection(r, s, editorTypeConstants.blockTypes.BLOCK) : this.getModelSelection(r, s)) {
          u.push(e);
        }
        if (n === undefined && (e == null ? undefined : e.type) === editorTypeConstants.blockTypes.TEXT) {
          n = e.id;
        }
        s = a.next();
      } while (s);
      let d = n === undefined ? undefined : this.context.blockManager.getBlockViewByBlockIdNotCheck(n);
      if (d && editorTextBlockUtilities.isEditorInstance(d)) {
        if (this.context.store.isTextSelectionAcrossBlocks(u)) {
          d.editor.setPreventUpdateDomSelection(true);
        } else {
          d.editor.setPreventUpdateDomSelection(false);
        }
      }
      if (this.context.isSelecting) {
        this.setTempSelection(u);
      } else {
        this.context.setSelection(u, {
          source: editorTypeConstants.commandTypes.MultiTextSelectionNonDrag,
          force: l,
          syncBrowser: c
        });
      }
    }
    constructor(...e) {
      super(...e);
      R(this, "prevSelection", []);
      R(this, "tmpPrevSelection", []);
      R(this, "selectionUpdated", undefined);
      R(this, "contextMenuSelChangeCount", 0);
      R(this, "isContextMenu", false);
      R(this, "onStart", e => {
        this.prevSelection = this.context.getSelection();
        s(true);
      });
      R(this, "onStop", e => {
        let n = this.context.selectionContext.intersectSelectedBlocksMap.get(docBlockTypeConstants.blockTypeConstants.CELL);
        if (this.selectionUpdated && !(n == null ? undefined : n.length)) {
          let e = this.tmpPrevSelection;
          this.context.store.stored = this.prevSelection;
          if (editorSelectionUtilities.isSelectionAllBlocksWithEmptyText(e)) {
            e = e.filter(e => e.type === editorTypeConstants.blockTypes.BLOCK);
          }
          this.context.setSelection(e, {
            source: editorTypeConstants.commandTypes.MultiTextSelectionDrag,
            force: true
          });
          if (editorSelectionUtilities.isBlockSelectionType(e) && browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
            docxEditorEventConstantsAndManager.globalEventConstants.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.SHOW_BLOCK_MENU);
          }
        }
        s(false);
        this.prevSelection = [];
        this.tmpPrevSelection = [];
        this.selectionUpdated = false;
      });
      R(this, "onBeforeStart", e => {
        if (e.event?.button !== 2) {
          this.clearContextmenuContext();
        }
      });
      R(this, "onContextmenu", () => {
        this.isContextMenu = true;
      });
      R(this, "onBrowserSelectionChange", (e, n) => {
        this.contextMenuSelChangeCount++;
        this.onBrowserSelectionChangeImpl(e, n);
        if (this.contextMenuSelChangeCount === 2 && this.isContextMenu) {
          this.clearContextmenuContext();
        }
      });
    }
  }
  require.d(exports, {
    getContainerTypes: function () {
      return A;
    },
    MultiTextSelectionHandler: function () {
      return D;
    }
  });
}