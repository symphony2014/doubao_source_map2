// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RT' to 'blockTypes'
// - Renamed export 'jh' to 'BlockSelectionHandler'
// - Renamed export 'Fs' to 'commandTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 801350
         */
module.exports = function (module, exports, require) {
  var o;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var throttledArgStringifyUtil = require("throttled-arg-stringify-util") /*id: 15104*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var a = debugBrowserConfig;
  var versionCompareUtil = require("version-compare-util") /*id: 147266*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  class h {
    setup() {
      this.context.store.onSelectionChange(this.onSelectionChange);
    }
    match(e) {
      return e.type === this.type;
    }
    render(e, n) {}
    filterUnValidSelect(e, n) {
      let r = e.filter(e => n.hasBlockModelByBlockId(e.id));
      if (editorSelectionUtilities.isBlockSelectionType(r)) {
        return editorSelectionUtilities.convertBlockIdsToSelection(editorSelectionUtilities.getAllBlockIdsExcludingTypes(this.context.blockManager, r.map(e => e.id), this.context.options.unSelectableType || []));
      } else {
        return r;
      }
    }
    onBeforeSet(e) {}
    onSelectionChange(e, n) {}
    destroy() {
      this.context.store.offSelectionChange(this.onSelectionChange);
    }
    constructor(e) {
      var n;
      var r;
      var o;
      this.context = e;
      r = undefined;
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
      }(n = "type", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
      this.onSelectionChange = this.onSelectionChange.bind(this);
    }
  }
  class _ extends h {
    onBeforeSet(e) {}
    filterUnValidSelect(e) {
      if (editorSelectionUtilities.hasTextSelection(e)) {
        return editorSelectionUtilities.filterCellBlocksFromSelection(this.context.blockManager, e);
      } else {
        return e;
      }
    }
  }
  var eventTypeConstants = require("event-type-constants") /*id: 561150*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
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
  class C extends _ {
    get viewService() {
      return this.context.blockManager.viewService;
    }
    removeCurrent(e) {
      let n = e.filter(e => this.match(e));
      let {
        blockManager: r
      } = this.context;
      n.forEach(e => {
        if (!r.hasBlockViewByBlockId(e.id)) {
          this.context.report("reset_text_selection_fail", {
            reason: "block instance not found"
          });
          return;
        }
        let n = r.getBlockViewByBlockIdNotCheck(e.id);
        if (n && editorTextBlockUtilities.isEditorInstance(n)) {
          n.removeCurrentSelection();
        }
      });
    }
    addCurrent(e) {}
    updateBrowserSelection(e) {
      let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (document.hasFocus()) {
        if (e.length === 0 && n) {
          if (browserEnvironmentDetectionUtils.browserDetector.isMobileRaw || browserEnvironmentDetectionUtils.browserDetector.isIPad && browserEnvironmentDetectionUtils.browserDetector.isSafari) {
            this.updateDomSelection({
              startContainer: null,
              startOffset: 0,
              endContainer: null,
              endOffset: 0
            });
          } else {
            this.context.restoreFocus();
          }
          return;
        }
        if (this.context.store.isSingleTextSelection(e)) {
          this.logIfSingleTextSelectionOutOfBound(e);
          this.updateInternalEditorSelection(e, n);
        } else if (this.context.store.isTextSelectionAcrossBlocks(e) && n) {
          this.updateInternalEditorSelection(e.filter(e => e.type === editorTypeConstants.blockTypes.TEXT));
          let n = this.getBlockBrowserRange(e[0], true);
          let r = this.getBlockBrowserRange(e[e.length - 1]);
          if (n && r) {
            this.updateDomSelection({
              startContainer: n.startContainer,
              startOffset: n.startOffset,
              endContainer: r.endContainer,
              endOffset: r.endOffset
            });
          }
        }
      }
    }
    _setTextBlockFocus(e, n) {
      if (!this.context.blockManager.hasBlockViewByBlockId(e.id)) {
        return;
      }
      let r = this.context.blockManager.getBlockViewByBlockIdNotCheck(e.id);
      if (r && editorTextBlockUtilities.isEditorInstance(r)) {
        r.setBlockFocus(n);
      }
    }
    getTextBlockRange(e) {
      return editorSelectionUtilities.getActiveEditorRangeFromSelection(this.context.blockManager, e, !this.context.store.forward);
    }
    getBlockBrowserRange(e, n = false) {
      let {
        id: r,
        type: o
      } = e;
      let i = this.viewService.getBlockViewByBlockId(r);
      if (!i || !i.hostElement || !document.contains(i.hostElement)) {
        return null;
      }
      if (o === editorTypeConstants.blockTypes.TEXT) {
        let n = this.getTextBlockRange(e);
        if (n) {
          return i.editor.selection.toDOMRange(n);
        }
      }
      let l = i.getSelectionLocator(n);
      return {
        startContainer: l,
        startOffset: 0,
        endContainer: l,
        endOffset: 1
      };
    }
    updateInternalEditorSelection(e, n = false) {
      if (!e.length) {
        return;
      }
      let r = e.map(e => this.getTextBlockRange(e)).filter(e => !!e);
      let o = this.viewService.getBlockViewByBlockId(e[0].id);
      if (!o || !r.length || (o.editor.selection.setSelection(r), !n || !o.blockManager.layoutManager.isBlockActive(o.id))) {
        return;
      }
      let i = browserEnvironmentDetectionUtils.browserDetector.isSafari && o.type === docBlockTypeConstants.blockTypeConstants.TODO && this.isSelectAllSingleText(e);
      o.editor.selection.updateBrowserSelection(i);
    }
    isSelectAllSingleText(e) {
      if (e.length !== 1) {
        return false;
      }
      let {
        id: n,
        selection: r
      } = e[0];
      let o = this.context.blockManager.getBlockModelByBlockId(n);
      return r.start === 0 && r.end === o.getText().length - 1;
    }
    updateDomSelection(e) {
      let {
        startContainer: n,
        startOffset: r,
        endContainer: o,
        endOffset: i
      } = e;
      let l = document.getSelection();
      if (l === null) {
        return;
      }
      if (n === null || o === null) {
        l.removeAllRanges();
        this.context.removeAllSelection();
        return;
      }
      let c = editorSelectionUtilities.isSelectionChanged(l, 0);
      if (!c || !editorSelectionUtilities.getRangeFromSelection(e, c)) {
        if (l.anchorNode !== l.baseNode || l.focusNode !== l.extentNode) {
          let n;
          n = this.context.store.forward ? {
            startContainer: l.baseNode,
            startOffset: l.baseOffset,
            endContainer: l.extentNode,
            endOffset: l.extentOffset
          } : {
            startContainer: l.extentNode,
            startOffset: l.extentOffset,
            endContainer: l.baseNode,
            endOffset: l.baseOffset
          };
          if (editorSelectionUtilities.getRangeFromSelection(e, n)) {
            return;
          }
        }
        if (l.collapse && l.extend) {
          if (n === o && r === i) {
            l.collapse(n, r);
          } else if (this.context.store.forward) {
            l.collapse(n, r);
            l.extend(o, i);
          } else {
            l.collapse(o, i);
            l.extend(n, r);
          }
        } else {
          let e = document.createRange();
          e.setStart(n, r);
          e.setEnd(o, i);
          l.removeAllRanges();
          l.addRange(e);
        }
        this.context.emit(eventTypeConstants.selectionEvents.updateBrowserSelection);
      }
    }
    onSelectionChange(e, n) {
      let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      super.onSelectionChange(e, n);
      e.forEach(e => {
        if (e.type === this.type && n.findIndex(n => e.id === n.id) === -1) {
          this._setTextBlockFocus(e, false);
        }
      });
      n.forEach(e => {
        if (e.type === editorTypeConstants.blockTypes.TEXT) {
          this._setTextBlockFocus(e, true);
        }
      });
      return this.updateBrowserSelection(n, r);
    }
    logIfSingleTextSelectionOutOfBound(e) {
      let {
        id: n,
        selection: r
      } = e[0];
      let o = this.context.blockManager.getBlockModelByBlockIdNotCheck(n);
      if (!o || !editorTextBlockUtilities.isTextBlock(o) || !r) {
        return;
      }
      let {
        start: i,
        end: l
      } = r;
      let c = editorTextBlockUtilities.getModelTextWithoutTrailing(o.zoneState).length;
      if (i < 0 || i > c || l < 0 || l > c) {
        let e = this.context.getContext()?.source;
        this.context.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
          action: "selection_out_of_bound",
          info: JSON.stringify({
            source: e,
            block_type: o.type,
            start: i,
            end: l,
            modelTextLength: c
          })
        });
      }
    }
    constructor(...e) {
      super(...e);
      T(this, "type", editorTypeConstants.blockTypes.TEXT);
      T(this, "onCurrentChange", function (e) {
        if (arguments.length > 1 && arguments[1] !== undefined) {
          arguments[1];
        }
      });
    }
  }
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var throttledArrayDifference_1 = require("throttled-array-difference_1") /*id: 979369*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var undoRedoEvents = require("undo-redo-events") /*id: 266127*/;
  function S(e, n, r) {
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
  let A = debugLoggerFactory.createLogger("BlockTypeSelection");
  let L = [docBlockTypeConstants.blockTypeConstants.PENDING, docBlockTypeConstants.blockTypeConstants.FALLBACK];
  class N extends h {
    setup() {
      super.setup();
      let {
        store: e,
        blockManager: n
      } = this.context;
      let {
        structService: r,
        viewService: o
      } = n.editorAPI;
      e.onSelectionChange(this.onSelectionChange);
      this.subs = [r.mutation$.subscribe(this.handleMutations), o.blockViewMount$.subscribe(this.handleBlockViewMount)];
    }
    onSelectionChange(e, n) {
      super.onSelectionChange(e, n);
      A(".onSelectionChange", e, n);
      this.selectedBlocks = new Map(n.map(e => [e.id, e]));
      let r = throttledArrayDifference_1.throttledArrayDiff(e, n, deepEqualUtil_1.deepEqual);
      let o = throttledArrayDifference_1.throttledArrayDiff(n, e, deepEqualUtil_1.deepEqual);
      r.forEach(e => {
        if (e.type === editorTypeConstants.blockTypes.BLOCK) {
          this.render(e, false);
        }
      });
      o.forEach(e => {
        if (e.type === editorTypeConstants.blockTypes.BLOCK) {
          this.render(e, true);
        }
      });
      if (!n.length) {
        this.context.store.forward = false;
      }
    }
    render(e, n) {
      A(".render block selection", e, n);
      this.setViewSelected(e.id, n);
    }
    setViewSelected(e, n) {
      let {
        blockManager: r
      } = this.context;
      let o = r.getBlockViewByBlockIdNotCheck(e);
      if (o == null ? undefined : o.setSelected) {
        A(".set view selected", o, n);
        if (o.forceOriginSetSelected) {
          o.originSetSelected(n);
        } else {
          o.setSelected(n);
        }
      }
    }
    destroy() {
      this.subs.forEach(e => e.unsubscribe());
      super.destroy();
    }
    constructor(...e) {
      super(...e);
      S(this, "type", editorTypeConstants.blockTypes.BLOCK);
      S(this, "selectedBlocks", new Map());
      S(this, "subs", undefined);
      S(this, "handleBlockViewMount", e => {
        let {
          blockView: r
        } = e;
        let {
          id: o
        } = r;
        let i = this.selectedBlocks.has(o);
        let l = i && this.selectedBlocks.get(o)?.type === editorTypeConstants.blockTypes.BLOCK;
        if (i && l) {
          this.setViewSelected(o, true);
        }
      });
      S(this, "handleMutations", e => {
        let {
          from: n,
          mutations: r
        } = e;
        if (docxFeatureFlags.isPiEnabled() && n === collaborativeEditingFlowSyncModule.kq.REMOTE) {
          return;
        }
        let o = new Set();
        for (let e of r.removed) {
          let {
            block: n
          } = e;
          if (this.selectedBlocks.has(n.id)) {
            o.add(n.id);
          }
        }
        for (let e of r.updated) {
          let {
            block: n,
            originalType: r
          } = e;
          let i = this.selectedBlocks.get(n.id);
          if (r && i) {
            if (L.includes(r)) {
              if (i.type === editorTypeConstants.blockTypes.BLOCK) {
                A(".handleMutations[reRenderSelected]", n.id, r, n.type);
                this.render(i, true);
              }
            } else {
              o.add(n.id);
            }
          }
        }
        if (!o.size) {
          return;
        }
        let i = this.context.getSelection();
        if (i.length) {
          if (i.length !== (i = i.filter(e => {
            let {
              id: n
            } = e;
            return !o.has(n);
          })).length) {
            let n = [undoRedoEvents.undoRedoEvents.UNDO, undoRedoEvents.undoRedoEvents.REDO];
            let r = !browserEnvironmentDetectionUtils.browserDetector.isAndroid || !e.name || !n.includes(e.name) || !!i.length;
            this.context.setSelection(i, {
              source: editorTypeConstants.commandTypes.Destroy,
              syncBrowser: r
            });
          }
        }
      });
    }
  }
  var selectionEventHandler = require("selection-event-handler") /*id: 873551*/;
  function D(e, n, r) {
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
  class w extends selectionEventHandler.SelectionEventHandler {
    constructor(...e) {
      super(...e);
      D(this, "onBeforeStart", e => {
        this.context.selectionContext.tripleClick = !!e.event && e.event.detail >= 3;
      });
      D(this, "onStart", e => {});
      D(this, "onStop", e => {
        this.context.selectionContext.tripleClick = false;
      });
    }
  }
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  function P(e, n, r) {
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
  class F extends selectionEventHandler.SelectionEventHandler {
    constructor(...e) {
      super(...e);
      P(this, "beginBlockId", docxEditorCore.ZERO_OFFSET);
      P(this, "onStart", e => {
        let {
          beginTarget: n
        } = this.context.selectionContext;
        this.beginBlockId = docxBlockUtils_2.getBlockIdFromNode(n) || docxEditorCore.ZERO_OFFSET;
      });
      P(this, "onMove", e => {
        if (this.beginBlockId === this.context.blockManager.rootBlockId) {
          return;
        }
        let n = this.context.store.getTmpSelection().filter(e => this.context.blockManager.getBlockModelByBlockId(e.id).type === docBlockTypeConstants.blockTypeConstants.CELL);
        this.context.selectionContext.intersectSelectedBlocksMap.set(docBlockTypeConstants.blockTypeConstants.CELL, n);
        if (n.length > 0) {
          this.context.emit(eventTypeConstants.selectionEvents.browserSelectionChange);
        }
      });
      P(this, "onStop", e => {});
    }
  }
  var docxTableLayoutCacheManager = require("docx-table-layout-cache-manager") /*id: 970630*/;
  class U extends selectionEventHandler.SelectionEventHandler {
    onBeforeStart(e) {}
    onStart(e) {}
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      n = "onStop";
      r = e => {
        docxTableLayoutCacheManager.tableLayoutCacheManager.clear();
      };
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
      }(n, "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  var checkEditPermission = require("check-edit-permission") /*id: 849362*/;
  function H(e, n, r) {
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
  class K extends selectionEventHandler.SelectionEventHandler {
    onBeforeStart(e) {}
    onStart(e) {}
    constructor(e) {
      super(e);
      this.context = e;
      H(this, "_onStop", null);
      H(this, "onStop", e => {
        var n;
        if (this.context.blockManager.editable) {
          if ((n = this._onStop) !== null && n !== undefined) {
            n.call(this, this, e);
          }
        }
      });
      checkEditPermission.checkEditPermission(this.context.blockManager, async () => {
        let {
          onStop: e
        } = await Promise.all([require.e("editor-core-selection") /*id: 13032*/, require.e("moment-locales-bundle") /*id: 85547*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("app-constants-and-enums") /*id: 86326*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("menu-component-chunk") /*id: 70389*/, require.e("renderer-slate-core") /*id: 18653*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("vendor-react-core") /*id: 75828*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx-block-management") /*id: 83252*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("docx-editor-core") /*id: 8716*/, require.e("webpack-modules-ui-components") /*id: 32240*/, require.e("page_editable_delay_resource") /*id: 68859*/]).then(require.bind(require, "docx-block-selection-handler") /*id: 256684*/);
        this._onStop = e;
      });
    }
  }
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
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
  class j extends selectionEventHandler.SelectionEventHandler {
    constructor(...e) {
      super(...e);
      $(this, "_prevSelection", []);
      $(this, "_tmpPrevSelection", []);
      $(this, "_selectionUpdated", undefined);
      $(this, "onStart", e => {
        this._prevSelection = this.context.getSelection();
        this._tmpPrevSelection = this._prevSelection;
        this._selectionUpdated = false;
      });
      $(this, "onMove", e => {
        if (this.context.selectionContext.shouldBuildMultiText) {
          return;
        }
        let n = this._tmpPrevSelection;
        let r = this.context.store.getTmpSelection();
        let o = throttledArrayDifference_1.throttledArrayDiff(n, r, deepEqualUtil_1.deepEqual);
        let i = throttledArrayDifference_1.throttledArrayDiff(r, n, deepEqualUtil_1.deepEqual);
        this.renderBlockSelection(r, o, i);
        this.context.store.stored = r;
        this.context.store.tmpStored = r;
        this._tmpPrevSelection = r;
        this._selectionUpdated = true;
      });
      $(this, "renderBlockSelection", (e, n, r) => {
        if (this.context.store.isBlockSelection(e)) {
          this.context.setFocusInHiddenInputDom(true);
        }
        n.forEach(e => {
          if (e.type === editorTypeConstants.blockTypes.BLOCK) {
            this.context.mainSelectionType.render(e, false);
          }
        });
        r.forEach(e => {
          if (e.type === editorTypeConstants.blockTypes.BLOCK) {
            this.context.mainSelectionType.render(e, true);
          }
        });
      });
      $(this, "onStop", e => {
        if (this._selectionUpdated) {
          let e = this.context.store.getTmpSelection();
          this.context.store.stored = this._prevSelection;
          this.context.setSelection(e, {
            source: editorTypeConstants.commandTypes.RectArea
          });
          if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
            docxEditorEventConstantsAndManager.globalEventConstants.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.BLOCK_MENU.SHOW_BLOCK_MENU);
          }
        }
        this._prevSelection = [];
        this._tmpPrevSelection = [];
        this._selectionUpdated = false;
      });
    }
  }
  var multiTextSelectionHandler = require("multi-text-selection-handler") /*id: 627646*/;
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
  class X extends selectionEventHandler.SelectionEventHandler {
    constructor(...e) {
      super(...e);
      W(this, "onBeforeStart", e => {});
      W(this, "onStart", e => {});
      W(this, "onStop", e => {});
    }
  }
  class Y extends selectionEventHandler.SelectionEventHandler {
    onBeforeStart(e) {}
    onStart(e) {}
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      n = "onStop";
      r = e => {
        let n = deepCloneWrapper_1.deepClone(this.context.getSelection());
        if (!this.context.store.isBlockSelection(n)) {
          return;
        }
        let r = n.filter(e => {
          let {
            id: n
          } = e;
          let r = this.context.blockManager.getRecordByBlockId(n);
          if (!r) {
            return false;
          }
          let {
            type: o,
            folded: i
          } = r.snapshot;
          return (this.context.fold.isFolded(n) || i) && o.includes("heading");
        });
        let o = e => n.findIndex(n => n.id === e);
        for (let {
          id: e
        } of r) {
          let r = editorSelectionUtilities.getAllBlockIdsExcludingTypes(this.context.blockManager, this.context.fold.findFoldedBlocks(e), this.context.options.unSelectableType || []);
          if (r.some(e => o(e) > -1)) {
            continue;
          }
          let i = o(e);
          let l = r.map(e => ({
            id: e,
            type: editorTypeConstants.blockTypes.BLOCK
          }));
          n.splice(i + 1, 0, ...l);
        }
        this.context.setSelection(n, {
          source: editorTypeConstants.commandTypes.RectArea
        });
      };
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
      }(n, "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  var touchInteractionUtil = require("touch-interaction-util") /*id: 593236*/;
  var syncedRefBlockSelection = require("synced-ref-block-selection") /*id: 360452*/;
  function J(e, n, r) {
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
  let Q = ["suspension-comment-area", "scrollable-container"];
  let ee = [".poll-block-adder__text", ".sheet-blocks-chart-element-dom"];
  class et extends selectionEventHandler.SelectionEventHandler {
    checkIsSingleClick(e) {
      if (this.mouseContext && e.type === "touchend") {
        let {
          x: n,
          y: r
        } = this.mouseContext;
        let {
          clientX: o,
          clientY: i
        } = touchInteractionUtil.normalizeEvent(e);
        let l = Math.abs(n - o);
        return Math.abs(r - i) < 20 && l < 20;
      }
      return false;
    }
    onBeforeStart(e) {}
    constructor(...e) {
      super(...e);
      J(this, "mouseContext", undefined);
      J(this, "onStart", e => {
        let {
          event: n
        } = e;
        if (browserEnvironmentDetectionUtils.browserDetector.isIOS && n && n.type === "touchstart") {
          let {
            clientX: e,
            clientY: r
          } = touchInteractionUtil.normalizeEvent(n);
          this.mouseContext = {
            x: e,
            y: r
          };
        }
      });
      J(this, "onStop", e => {
        let n = browserEnvironmentDetectionUtils.browserDetector.isIOS && e.event && this.checkIsSingleClick(e.event);
        if (e.continue && e.instance.selectionContext.singleClick || n) {
          var o;
          var l;
          var c;
          if (touchInteractionUtil.isValidTouchEvent(e.event)) {
            return;
          }
          let n = e.event?.target;
          if (!n) {
            return;
          }
          let u = this.context.options.getContentContainer();
          let a = this.context.options.boundaryAreaContainer;
          if (!a.contains(n) || !u || typeof n.contains != "function" || !u.parentElement) {
            return;
          }
          if (n.contains(u.parentElement) && a.contains(n)) {
            this.context.removeAllSelection();
            this.context.blur();
          } else if (u.contains(n) && Q.find(e => n.classList.contains(e))) {
            this.context.removeAllSelection();
            this.context.restoreFocus();
            if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
              this.context.blur();
            }
          } else {
            let e = (o = n.closest(".block")) === null || o === undefined ? undefined : o.getAttribute("data-block-type");
            let r = ((l = syncedRefBlockSelection.getSelection(this.context.blockManager)) === null || l === undefined ? undefined : l.current?.current) || this.context.getSelection();
            if (!!browserEnvironmentDetectionUtils.browserDetector.isMobile && !!browserEnvironmentDetectionUtils.browserDetector.isIOS && r.length === 0 && !!e && !docBlockTypeConstants.agendaTaskTypes.includes(e) && ![docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.POLL].includes(e) && (e !== docBlockTypeConstants.blockTypeConstants.FILE || !(c = n) || !c.closest(".embed-inline-block")) && e !== docBlockTypeConstants.blockTypeConstants.SHEET && !["TEXTAREA", "INPUT"].includes(n.tagName) && !ee.some(e => n.matches(e))) {
              this.context.blur();
            }
          }
        }
      });
    }
  }
  class en extends selectionEventHandler.SelectionEventHandler {
    onBeforeStart(e) {}
    onStart(e) {
      this.blockIframes ||= new Set();
      for (let e of Array.from(document.querySelectorAll(".block iframe"))) {
        this.blockIframes.add(e);
        e.style.pointerEvents = "none";
      }
    }
    onStop(e) {
      var n;
      if ((n = this.blockIframes) !== null && n !== undefined) {
        n.forEach(e => {
          e.style.pointerEvents = "";
        });
      }
      this.blockIframes = null;
    }
    constructor(...e) {
      var n;
      var r;
      super(...e);
      if ((n = typeof (r = function (e, n) {
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
      }(n = "blockIframes", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, n, {
          value: null,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = null;
      }
    }
  }
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  let eo = [".suspension-comment-area"];
  let ei = new Set(docBlockTypeConstants.codeBlockTypes);
  let el = [".task-block-text-editor"];
  function ec(e, n, r) {
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
  class eu extends selectionEventHandler.SelectionEventHandler {
    forceUpdateBrowserSelection(e) {
      let n = this.context.blockManager.getBlockViewByBlockIdNotCheck(e);
      if (n && editorTextBlockUtilities.isEditorInstance(n)) {
        n.editor.selection.updateBrowserSelection(true);
      }
    }
    constructor(...e) {
      super(...e);
      ec(this, "isContextMenu", false);
      ec(this, "onContextmenu", e => {
        this.isContextMenu = true;
        window.setTimeout(this.clearContextmenuContext, 200);
      });
      ec(this, "onBeforeStart", e => {
        this.clearContextmenuContext();
      });
      ec(this, "onStart", e => {});
      ec(this, "onStop", e => {});
      ec(this, "onBrowserSelectionChange", () => {
        if (this.isContextMenu) {
          this.fixContextMenuSelection();
        }
      });
      ec(this, "fixContextMenuSelection", () => {
        let e = this.context.getSelection();
        if (!this.isRightClickAtEmptyLine(e)) {
          return;
        }
        let n = e.slice(0, 1);
        this.context.setSelection(n, {
          syncBrowser: false,
          source: editorTypeConstants.commandTypes.FixContextMenuSelection
        });
        this.forceUpdateBrowserSelection(n[0].id);
      });
      ec(this, "isRightClickAtEmptyLine", e => {
        if (e.length !== 2) {
          return false;
        }
        let r = e[0];
        if (r.type !== editorTypeConstants.blockTypes.TEXT) {
          return false;
        }
        let o = this.context.blockManager.getBlockModelByBlockIdNotCheck(r.id);
        return !!o && !!docBlockEditActions.isTextBlock(o) && r.selection?.end === 0 && !!o.isEmpty;
      });
      ec(this, "clearContextmenuContext", () => {
        this.isContextMenu = false;
      });
    }
  }
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  function es(e, n, r) {
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
  class ed extends selectionEventHandler.SelectionEventHandler {
    constructor(...e) {
      super(...e);
      es(this, "currentHeightValue", "");
      es(this, "onBrowserSelectionChange", e => {
        let r = getSelection()?.type === "Range" ? "0" : "";
        if (browserDetectUtils.platformInfo.isIOS && this.currentHeightValue !== r) {
          this.currentHeightValue = r;
          this.context.blockManager.allBlockViews.forEach(e => {
            if (e.type === docBlockTypeConstants.blockTypeConstants.GRID) {
              var n;
              for (let o of ((n = e.contentElement) === null || n === undefined ? undefined : n.querySelectorAll(".column-gap")) || []) {
                o.style.height = r;
              }
            }
          });
        }
      });
      es(this, "onStart", e => {});
      es(this, "onStop", e => {});
    }
  }
  var chainManagerClasses = require("chain-manager-classes") /*id: 842731*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var blockHierarchyGeometryUtil = require("block-hierarchy-geometry-util") /*id: 797827*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  (o = {})[o.DEFAULT = 0] = "DEFAULT";
  o[o.RELATION_SOLVED = 1] = "RELATION_SOLVED";
  o[o.FINISH_IGONORE = 2] = "FINISH_IGONORE";
  o[o.FINISH_EXCEPTION = 3] = "FINISH_EXCEPTION";
  o[o.FINISH_SUCCESS = 4] = "FINISH_SUCCESS";
  o[o.FINISH_EMPTY = 5] = "FINISH_EMPTY";
  let eE = o;
  function em(e) {
    let n = e.blockManager.layoutManager.getViewportBlocks();
    if (syncUrlBlockUtils.isSyncingActive()) {
      let r = syncUrlBlockUtils.getBlockByToken(e.blockManager);
      if (r) {
        n = n.filter(e => e !== r.id);
      }
    }
    let r = document.querySelector(`.${docxEditorConstantsConfig.containerIds.ROOT}`);
    let o = (r == null ? undefined : r.getBoundingClientRect()) || {
      top: 0,
      bottom: window.innerHeight
    };
    let i = n[0];
    let l = e.rect.getOriginBlockRect(i);
    let c = n[n.length - 1];
    let u = e.rect.getOriginBlockRect(c);
    n.forEach(n => {
      let r = e.rect.getOriginBlockRect(n);
      if (r.left !== 0 || r.top !== 0 || r.width !== 0 || r.height !== 0) {
        if (r.top < l.top && r.top >= o.top) {
          i = n;
          l = r;
        }
        if (r.top > u.top && r.top <= o.bottom) {
          c = n;
          u = r;
        }
      }
    });
    let {
      top: a
    } = l;
    let s = i === c ? u.bottom : u.top;
    return {
      first: {
        id: i,
        y: a
      },
      last: {
        id: c,
        y: s
      }
    };
  }
  function eb(e, n, r) {
    let o = r.getBlockPath(e);
    o.push(e);
    let i = null;
    while (o.length) {
      let e = o.pop();
      if (r.getBlockModelByBlockId(e).type === n) {
        i = e;
        break;
      }
    }
    return i;
  }
  function ev(e, n) {
    e.debug("[resolveException] %s", n);
    e.finishReason = n;
    e.resolveStatus = eE.FINISH_EXCEPTION;
    return false;
  }
  function eT(e, n) {
    e.debug(n);
    e.resolveStatus = eE.FINISH_IGONORE;
    return false;
  }
  function eC(e, n, r, o) {
    if (r) {
      e.resolveStatus = eE.RELATION_SOLVED;
    }
    return !!deepEqualUtil_1.deepEqual(e.matchedIds, n) || (e.debug("resolveUpdateMatchIds: %s, reason=%s", n, o), e.matchedIds = n, true);
  }
  class ek extends chainManagerClasses.ChainNode {
    main(e, n) {
      let {
        x: r,
        y: o,
        target: i
      } = n;
      let l = docxBlockUtils_2.getBlockIdFromNode(i);
      let c = l;
      if (!(l = l || docxBlockUtils_2.getBlockIdFromPoint(r, o, false))) {
        return ev(e, "fail to resolve block after round-1 fixing, skip");
      }
      let u = !!e.targetIds.length;
      let {
        rootBlockId: a
      } = e.blockManager;
      let s = l === a;
      if (syncUrlBlockUtils.isSyncingActive()) {
        let n = syncUrlBlockUtils.getUrlToken();
        a = e.blockManager.getBlockIdsByRecordId(n)[0];
        s = s || l === a;
      }
      let d = false;
      if (s && blockHierarchyGeometryUtil.validateBlockMove({
        ancestorId: a,
        y: o,
        blockManager: e.blockManager,
        rect: e.rect
      })) {
        e.debug("命中根节点是因为落在间隙中");
        d = true;
      }
      if (s && !d) {
        let n = l;
        l = this.findClosestBlockIdWhenHitBoundary(e, u);
        e.debug("fix block: %s => %s", n, l);
      }
      if (!l) {
        return ev(e, "fail to resolve block after round-2 fixing, skip");
      }
      if (!u && s && d) {
        e.debug("修正起始节点是根节点且落在缝隙中的case");
        l = docxBlockUtils_2.getBlockIdFromPoint(r, o) || l;
      }
      if (u && s && d) {
        e.resolveStatus = eE.FINISH_IGONORE;
        return false;
      }
      let f = n => {
        let o = e.blockManager.getBlockModelByBlockIdNotCheck(n)?.type;
        return `${o}-${n}`;
      };
      e.targetIds.push(l);
      let h = e.targetIds.map(f);
      e.debug("resolved block: %s, unfixed=%s, point=(%s,%s), target=%o", h.join("=>"), c && f(c), r, o, i);
      return {
        targetIds: e.targetIds
      };
    }
    findClosestBlockIdWhenHitBoundary(e, n) {
      let r = em(e);
      if (!r) {
        return;
      }
      let {
        beginY: o,
        endY: i
      } = e.blockSelection.selectionContext;
      let l = n ? i : o;
      let c = Math.abs(l - r.first.y) < Math.abs(r.last.y - l);
      e.debug(c ? `\u{66F4}\u{63A5}\u{8FD1}\u{7B2C}\u{4E00}\u{4E2A}block ${r.first.id}` : `\u{66F4}\u{63A5}\u{8FD1}\u{6700}\u{540E}\u{4E00}\u{4E2A}block ${r.last.id}`);
      if (c) {
        return r.first.id;
      } else {
        return r.last.id;
      }
    }
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      r = "计算target对应的blockId";
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
      }(n = "desc", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var domRectBboxHelpers = require("dom-rect-bbox-helpers") /*id: 412452*/;
  var rectIntersectionUtils = require("rect-intersection-utils") /*id: 8673*/;
  class eO extends chainManagerClasses.ChainNode {
    main(e, n) {
      let {
        recursiveId: r
      } = n;
      let {
        blockManager: o,
        blockSelection: i,
        rect: l
      } = e;
      let c = i.rectPainter._areaDomRect;
      let u = function (e, n) {
        let {
          blockManager: r,
          blockSelection: o,
          rect: i
        } = e;
        let l = o.rectPainter._areaDomRect;
        let {
          children: c
        } = r.getBlockModelByBlockId(n);
        if (!c.length) {
          return true;
        }
        let u = domRectBboxHelpers.toDOMRect(i.getOriginBlockRect(n));
        let a = c[0].id;
        let s = domRectBboxHelpers.toDOMRect(i.getOriginBlockRect(a));
        let d = s.y - u.y;
        let f = Math.min(1, s.x - u.x);
        let h = new DOMRect(u.x, u.y, u.width, d);
        let _ = new DOMRect(u.x, u.y, f, u.height);
        let p = new DOMRect(u.x - 1, u.y, 1, u.height);
        let g = rectIntersectionUtils.checkIntersection(l, h, rectIntersectionUtils.IntersectionMode.TOUCH);
        let E = rectIntersectionUtils.checkIntersection(l, _, rectIntersectionUtils.IntersectionMode.TOUCH) && rectIntersectionUtils.checkIntersection(l, p, rectIntersectionUtils.IntersectionMode.TOUCH);
        return g || E;
      }(e, r);
      let a = e.blockManager.getBlockModelByBlockId(r).type;
      e.debug("ResolveRecursive: block=%s-%s, isCurrentCoveredSelf=%s", a, r, u);
      if (u) {
        return [r];
      }
      let {
        children: s
      } = o.getBlockModelByBlockId(r);
      let d = function e(n, r, o, i = []) {
        let l = 0;
        let c = r.length - 1;
        while (l <= c) {
          let u = Math.floor(l + (c - l) / 2);
          let a = domRectBboxHelpers.toDOMRect(o(r[u].id));
          if (a.top > n.bottom) {
            c = u - 1;
          } else if (a.bottom < n.top) {
            l = u + 1;
          } else {
            if (rectIntersectionUtils.checkIntersection(a, n, rectIntersectionUtils.IntersectionMode.TOUCH)) {
              i.push(r[u]);
            }
            let s = e(n, r.slice(l, u), o);
            let d = e(n, r.slice(u + 1, c + 1), o);
            return s.concat(i, d);
          }
        }
        return i;
      }(c, s.filter(e => !!(e == null ? undefined : e.id)), l.getOriginBlockRect.bind(l));
      if (d.length) {
        if (d.length > 1) {
          return d.map(e => e.id);
        } else {
          return this.main(e, {
            recursiveId: d[0].id
          });
        }
      } else {
        return [r];
      }
    }
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      r = "递归碰撞缩小范围从而找到更精准的结果";
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
      }(n = "desc", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  class eS extends chainManagerClasses.ChainNode {
    main(e) {
      let n = this.scanIds(e, {
        ids: e.matchedIds
      });
      eC(e, n.ids, false, "ResolveGrid");
      return n;
    }
    scanIds(e, n) {
      let {
        blockManager: r,
        blockSelection: o,
        rect: i
      } = e;
      let l = [];
      let c = new Set();
      for (let u of n.ids) {
        let n = eb(u, docBlockTypeConstants.blockTypeConstants.GRID, r);
        let a = o.rectPainter._areaDomRect;
        if (!n || n && !rectIntersectionUtils.checkIntersection(a, domRectBboxHelpers.toDOMRect(i.getOriginBlockRect(n)), rectIntersectionUtils.IntersectionMode.TOUCH)) {
          l.push(u);
          continue;
        }
        if (c.has(n)) {
          continue;
        }
        c.add(n);
        let {
          matchedIds: s,
          recursiveId: d
        } = this.scanGrid(e, {
          gridBlockId: n
        });
        if (s && s.length) {
          l = l.concat(s);
        }
        if (d) {
          let n = new eO().main(e, {
            recursiveId: d
          });
          l = l.concat(n);
        }
      }
      return {
        ids: l
      };
    }
    scanGrid(e, n) {
      let {
        gridBlockId: r
      } = n;
      let {
        blockManager: o,
        blockSelection: i,
        rect: l,
        fold: c
      } = e;
      let u = i.rectPainter._areaDomRect;
      let {
        type: a
      } = o.getBlockModelByBlockId(r);
      if (a !== docBlockTypeConstants.blockTypeConstants.GRID) {
        throw Error("ResolveGrid: error options");
      }
      let s = !c.isShow(r);
      let {
        children: d
      } = o.getBlockModelByBlockId(r);
      let f = d.map(e => {
        let n = o.getBlockModelByBlockId(e.id);
        let r = n.children.map(e => ({
          id: e.id,
          type: e.type,
          rect: domRectBboxHelpers.toDOMRect(l.getOriginBlockRect(e.id))
        }));
        let i = s ? r : r.filter(e => rectIntersectionUtils.checkIntersection(u, e.rect, rectIntersectionUtils.IntersectionMode.TOUCH));
        return {
          id: n.id,
          matchedChildren: i
        };
      }).filter(e => e.matchedChildren.length);
      if (f.length === 0) {
        return {
          matchedIds: []
        };
      }
      if (f.length > 1) {
        return {
          matchedIds: safeArrayFlattenUtil.safeFlattenArray(f.map(e => e.matchedChildren.map(e => e.id)))
        };
      }
      let h = f[0].matchedChildren;
      if (h.length > 1) {
        return {
          matchedIds: h.map(e => e.id)
        };
      } else if (h[0].type === docBlockTypeConstants.blockTypeConstants.TABLE) {
        return {
          matchedIds: [h[0].id]
        };
      } else {
        return {
          recursiveId: h[0].id
        };
      }
    }
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      r = "遇到gridBlock时的特殊处理";
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
      }(n = "desc", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  class eA extends chainManagerClasses.ChainNode {
    main(e) {
      if (e.resolveStatus === eE.RELATION_SOLVED) {
        return true;
      }
      let {
        targetsRelation: n,
        targetIds: r
      } = e;
      if (!n || !r) {
        throw Error("The context does not meet expectations");
      }
      let o = n && !n.hasRoot && (n.parent || n.ancestor);
      if (!o) {
        return true;
      }
      let {
        beginY: i,
        endY: l
      } = e.blockSelection.selectionContext;
      if (blockHierarchyGeometryUtil.validateBlockMove({
        ancestorId: o,
        blockManager: e.blockManager,
        rect: e.rect,
        y: o === r[0] ? i : l
      })) {
        return eT(e, "判断命中结果为直系关系且点落在缝隙中, 不更新选区");
      } else {
        return eC(e, [o], true, "ResolveRelationAncestor");
      }
    }
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      r = "处理起始点具备祖孙关系时的case";
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
      }(n = "desc", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  class eL extends chainManagerClasses.ChainNode {
    main(e) {
      return e.resolveStatus === eE.RELATION_SOLVED || !e.targetsRelation || !e.targetsRelation.isEqual || eC(e, e.targetIds.slice(0, 1), true, "ResolveRelationEqual");
    }
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      r = "处理起始点相等时的case";
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
      }(n = "desc", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  class eN extends chainManagerClasses.ChainNode {
    main(e) {
      let n;
      if (e.resolveStatus === eE.RELATION_SOLVED) {
        return true;
      }
      let {
        targetIds: r,
        blockManager: o
      } = e;
      let i = e => ({
        id: e,
        path: o.getBlockPath(e)
      });
      if (r.length !== 2) {
        return eT(e, "targetIds.length != 2");
      }
      let [l, c] = r;
      let u = i(l);
      let a = i(c);
      let s = blockHierarchyGeometryUtil.getCommonParent(u, a);
      if (!s) {
        return ev(e, "no common ancestor");
      }
      let d = o.getBlockModelByBlockId(s);
      let [f, h] = blockHierarchyGeometryUtil.getSortedIndices(d.children, u, a);
      return eC(e, f === -1 || h === -1 ? d.children.filter(e => !!(e == null ? undefined : e.id)).map(e => e.id) : d.children.filter((e, n) => f <= n && h >= n && e && e.id).map(e => e.id), true, `ResolveRelationNormal, commonAncestor=${d.type}-${s}(${l},${c})`);
    }
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      r = "通过起始点和结束点计算得出碰撞列表";
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
      }(n = "desc", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var docxTableEventHandler = require("docx-table-event-handler") /*id: 780961*/;
  var docxTableStickyUtils = require("docx-table-sticky-utils") /*id: 289191*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var browserEnvironmentConstants = require("browser-environment-constants") /*id: 881964*/;
  let eU = a("sophon:selection:table");
  let eG = (e, n) => {
    let {
      bottom: r,
      right: o
    } = e;
    let {
      bottom: i,
      right: l
    } = n;
    return i - r <= browserEnvironmentConstants.defaultBrowserSize || l - o <= browserEnvironmentConstants.defaultBrowserSize;
  };
  let eH = debounceUtil_1_1.debounce(docxTableEventHandler.trackCellClick, tableLayoutConstants_1.tableConstant1000);
  class eK extends chainManagerClasses.ChainNode {
    main(e) {
      let {
        ids: n,
        selectableCompleted: r
      } = this.scanIds(e, {
        ids: e.matchedIds
      });
      eC(e, n, false, "ResolveTable");
      if (r) {
        e.selectableCompleted = r;
      }
      return true;
    }
    scanIds(e, n) {
      let {
        blockManager: r,
        blockSelection: o
      } = e;
      let i = o.rectPainter._areaDomRect;
      let l = new Set();
      let c = new Set();
      for (let e of n.ids) {
        let n = eb(e, docBlockTypeConstants.blockTypeConstants.TABLE, r);
        if (n) {
          c.add(n);
        } else {
          l.add(e);
        }
      }
      if (l.size !== 0) {
        return {
          ids: n.ids
        };
      }
      let u = [];
      let a = [];
      for (let n of c) {
        let r = domRectBboxHelpers.toDOMRect(this.getTableWrapperRect(n, e));
        if (rectIntersectionUtils.checkIntersection(i, r, rectIntersectionUtils.IntersectionMode.OUTSIDE_TOUCH)) {
          u.push(n);
        }
        if (rectIntersectionUtils.checkIntersection(i, r, rectIntersectionUtils.IntersectionMode.TOUCH)) {
          a.push(n);
        }
      }
      if (a.length !== 1) {
        return {
          ids: n.ids
        };
      } else if (u.length === a.length && u.length === 1) {
        return {
          ids: u
        };
      } else {
        return this.scanTable(e, {
          id: a[0],
          originMatchedIds: n.ids
        });
      }
    }
    getTableWrapperRect(e, n) {
      var r;
      let {
        blockManager: o,
        rect: i
      } = n;
      let l = o.getBlockViewByBlockIdNotCheck(e);
      let c = l == null ? undefined : (r = l.hostElement) === null || r === undefined ? undefined : r.querySelector(`.${tableLayoutConstants_1.tableClassNames.TABLE_SCROLLER_CLASS}`);
      if (c) {
        return domRectBboxHelpers.copyRectProps(c.getBoundingClientRect());
      } else {
        return i.getOriginBlockRect(e);
      }
    }
    fixRect(e, n) {
      let r = {
        top: e.top,
        left: e.left,
        right: e.right,
        bottom: e.bottom,
        height: e.height,
        x: e.x,
        y: e.y
      };
      if (n >= 0) {
        return {
          ...r,
          x: e.x - n,
          left: e.left - n,
          width: e.width + n
        };
      } else {
        return {
          ...r,
          right: e.right - n,
          width: e.width - n
        };
      }
    }
    scanTable(e, n) {
      eU(`\u{4EC5}\u{9009}\u{4E2D} table-${n.id}`);
      let {
        blockManager: r,
        blockSelection: o
      } = e;
      let i = o.rectPainter._areaDomRect;
      let l = r.getBlockModelByBlockId(n.id);
      let c = r.getBlockViewByBlockId(n.id);
      let u = (() => {
        let e = c.tableViewScrollLeft;
        if (c.scrollManage) {
          let {
            scrollLeft: n
          } = c.scrollManage.getScrollStatus();
          return e + n;
        }
        return e;
      })();
      let a = (() => {
        let n = e.blockManager.editorAPI.id;
        let r = docxTableLayoutCacheManager.tableLayoutCacheManager.getTableScrollLeft(n);
        if (isNumberUtil.isNumber(r)) {
          return u - r;
        } else {
          docxTableLayoutCacheManager.tableLayoutCacheManager.setTableScrollLeft(n, u);
          return 0;
        }
      })();
      let s = docxTableStickyUtils.filterTableChildren({
        blockManager: r,
        blockSelection: o,
        table: l
      });
      let d = this.fixRect(i, a);
      let f = s.filter(e => {
        let n = r.getBlockViewByBlockIdNotCheck(e.id);
        return n && rectIntersectionUtils.checkIntersection(d, n.getHostRect(), rectIntersectionUtils.IntersectionMode.TOUCH);
      });
      if (f.length === 1) {
        return this.scanCell(e, {
          id: f[0].id,
          originMatchedIds: n.originMatchedIds
        });
      }
      let h = f.map(e => r.getBlockViewByBlockId(e.id));
      let _ = l.record.snapshot;
      return {
        ids: docxTableLayoutUtils.getCellIdsFromRange(h, docxTableLayoutCacheManager.tableLayoutCacheManager.getLayout(l.id, _), _).map(e => r.getBlockIdsByRecordId(e)).flat(),
        selectableCompleted: true
      };
    }
    scanCell(e, n) {
      eU(`\u{4EC5}\u{9009}\u{4E2D} cell-${n.id}`);
      let {
        blockManager: r,
        blockSelection: o,
        rect: i
      } = e;
      let l = o.rectPainter._areaDomRect;
      if (eG(l, i.getOriginBlockRect(n.id))) {
        eH("drag");
        return {
          ids: [n.id]
        };
      }
      let c = r.getBlockModelByBlockId(n.id).children.filter(e => rectIntersectionUtils.checkIntersection(l, domRectBboxHelpers.toDOMRect(i.getOriginBlockRect(e.id)), rectIntersectionUtils.IntersectionMode.TOUCH)).map(e => e.id);
      if (c.length === 1) {
        let n = c[0];
        let r = new eO().main(e, {
          recursiveId: n
        });
        e.debug("ResolveTable.scanCell.recursive: %s => %s", c, r);
        c = r;
      }
      return {
        ids: c
      };
    }
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      r = "遇到TableBlock时的特殊处理";
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
      }(n = "desc", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  class e$ extends chainManagerClasses.ChainNode {
    main(e, n) {
      if (!e.blockManager.editorAPI.modelService.isInitialDataReady()) {
        return false;
      }
      let r = this.closeToBlock(e, this.closeToBoundary(e, n));
      if (!r) {
        return false;
      }
      let {
        x: o,
        y: i
      } = r;
      let c = function (e, n, r) {
        let o = document.elementFromPoint(e, n);
        if (!syncedReferenceBlockUtils.isSyncedReferenceBlock(r.blockManager.editorAPI) && (o == null ? undefined : o.closest(".docx-synced_reference-block"))) {
          return o.closest(".docx-synced_reference-block");
        } else {
          return o;
        }
      }(o, i, e);
      if (!deepEqualUtil_1.deepEqual(r, n)) {
        e.debug("ResolveTarget: fix point (%s,%s) => (%s,%s), target=%o", n.x, n.y, o, i, c);
      }
      if (c) {
        return {
          x: o,
          y: i,
          target: c
        };
      } else {
        return ev(e, "ResolveTarget: target not found from fixed point");
      }
    }
    closeToBoundary(e, n) {
      let {
        x: r,
        y: o
      } = n;
      let {
        blockManager: i
      } = e;
      let l = i.getRootBlockId();
      let c = i.getBlockViewByBlockId(l).hostElement;
      let u = document.elementFromPoint(r, o);
      let a = e.rect.getBlockRect(l);
      let s = r > (a == null ? undefined : a.right) || r < (a == null ? undefined : a.left);
      if (c.contains(u) && !s) {
        return n;
      } else {
        return function (e) {
          let {
            x: n,
            y: r,
            brect: o,
            securitySize: i
          } = e;
          let l = o.x + i.left;
          let c = Math.min(o.x + o.width - i.right, document.body.clientWidth - i.right);
          let u = o.y + i.top;
          let a = Math.min(o.y + o.height - i.bottom, document.body.clientHeight - i.bottom);
          return {
            x: numberClampUtil.clampNumber(n, l, c),
            y: numberClampUtil.clampNumber(r, u, a)
          };
        }({
          x: r,
          y: o,
          securitySize: e.blockSelection.options.securitySizeOfBoundary,
          brect: c.getBoundingClientRect()
        });
      }
    }
    closeToBlock(e, n) {
      if (!document.elementFromPoint(n.x, n.y)) {
        ev(e, "closeToBlock: target not found from point fixed by closeToBoundary");
      }
      let r = em(e);
      if (!r) {
        e.debug("closeToBlock: no children in block, finish_empty");
        e.resolveStatus = eE.FINISH_EMPTY;
        return false;
      }
      let {
        first: o,
        last: i
      } = r;
      let l = numberClampUtil.clampNumber(n.y, o.y, i.y);
      return {
        x: n.x,
        y: l
      };
    }
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      r = "得到经过修正后的target";
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
      }(n = "desc", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  var targetBlockRelation = require("target-block-relation") /*id: 187984*/;
  class eV extends chainManagerClasses.ChainNode {
    main(e) {
      let {
        blockManager: n,
        blockSelection: r,
        matchedIds: o
      } = e;
      let i = editorSelectionUtilities.getAllBlockIdsExcludingTypes(n, o, [...r.unSelectableType, ...docBlockTypeConstants.objectiveKeyResultTypes]);
      eC(e, i, false, "ResolveUnSelectable");
      e.resolveStatus = eE.FINISH_SUCCESS;
      return {
        ids: i
      };
    }
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      r = "处理不可选中的block";
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
      }(n = "desc", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  var selectionEventDriverAndManager = require("selection-event-driver-and-manager") /*id: 282246*/;
  class eX extends selectionEventDriverAndManager.SelectionModel {
    elementToModel(e) {
      let n = docxBlockUtils_2.getBlockIdFromNode(e);
      if (!n) {
        throw Error("blockId not found with element");
      }
      return {
        id: n,
        type: editorTypeConstants.blockTypes.BLOCK
      };
    }
    modelToElement(e) {
      let n = this.blockManager.getBlockViewByBlockId(e.id);
      if (!n) {
        throw Error(`block not found: ${e.id}`);
      }
      return n.hostElement;
    }
    modelToRect(e) {
      if (!this.blockManager.getRecordByBlockId(e.id)) {
        throw Error(`block not found: ${e.id}`);
      }
      return domRectBboxHelpers.toDOMRect(this.rect.getOriginBlockRect(e.id));
    }
    isFoldedBy(e) {
      let n = this.fold.findFoldedByBlock(e.id);
      return !!this.tmpStored.find(e => e.id === n) && !this.fold.isShow(e.id);
    }
    isModelEqual(e, n) {
      return e.id === n.id && e.type === n.type;
    }
    isModelStrictEqual(e, n) {
      return deepEqualUtil_1.deepEqual(e, n);
    }
    includes(e, n) {
      return this.indexOf(e, n) > -1;
    }
    indexOf(e, n) {
      for (let r = 0; r < e.length; r++) {
        if (this.isModelEqual(e[r], n)) {
          return r;
        }
      }
      return -1;
    }
    isSingleTextSelection(e) {
      return editorSelectionUtilities.isSingleTextSelection(e);
    }
    isBlockSelection(e) {
      return editorSelectionUtilities.isBlockSelectionType(e);
    }
    isTextSelectionAcrossBlocks(e) {
      return editorSelectionUtilities.hasTextSelection(e);
    }
    isHybridSelection(e) {
      return editorSelectionUtilities.isMixedTextAndBlockSelection(e);
    }
    isCursor(e) {
      return editorSelectionUtilities.isCollapsedTextSelection(e);
    }
    getClonedSelection() {
      return this.getSelection().map(e => {
        let {
          id: n,
          type: r,
          selection: o
        } = e;
        let i = {
          id: n,
          type: r
        };
        if (o) {
          let {
            start: e,
            end: n
          } = o;
          i.selection = {
            start: e,
            end: n
          };
        }
        return i;
      });
    }
    constructor(e, n, r, o, i) {
      var l;
      var c;
      super(e);
      this.options = e;
      this.blockManager = n;
      this.rect = r;
      this.fold = o;
      this.context = i;
      if ((l = typeof (c = function (e, n) {
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
      }(l = "forward", "string")) == "symbol" ? c : c + "") in this) {
        Object.defineProperty(this, l, {
          value: true,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[l] = true;
      }
    }
  }
  var docBlockTraversalUtils = require("doc-block-traversal-utils") /*id: 680152*/;
  var keyboardKeyCodes = require("keyboard-key-codes") /*id: 73916*/;
  var composingServiceName = require("composing-service-name") /*id: 181291*/;
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  function e3(e, n, r) {
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
  let e4 = a("docx:selection: BlockSelection");
  let e2 = 0;
  class e6 extends selectionEventDriverAndManager.SelectionEventDriver {
    newSelectionContext(e) {
      let n;
      if (syncedReferenceBlockUtils.isSyncedReferenceBlock(e.editorAPI)) {
        n = {
          getContainerScrollTop: () => {
            return e.editorAPI.config.get("pageMainBoundary")?.scrollTop || 0;
          }
        };
      }
      return new selectionEventDriverAndManager.SelectionContext(n);
    }
    setup() {
      super.setup();
      let e = this.blockManager.config.get("isSyncedReferenceBlock");
      this.extensions = [j, en, K, ...(e ? [] : [et]), Y, U, w, X].map(e => new e(this));
      this.extensions.push(new F(this));
      this.extensions.push(new multiTextSelectionHandler.MultiTextSelectionHandler(this));
      this.extensions.push(new eu(this));
      this.extensions.push(new ed(this));
      this.extensions.forEach(e => {
        e.setup();
      });
      this.mainSelectionType = new N(this);
      this.mainSelectionType.setup();
      this.extendSelectionTypes = [C].map(e => new e(this));
      this.extendSelectionTypes.forEach(e => {
        e.setup();
      });
      this.on(eventTypeConstants.selectionEvents.stop, this._onStop);
    }
    destroy() {
      super.destroy();
      this.mainSelectionType.destroy();
      this.extendSelectionTypes.forEach(e => {
        e.destroy();
      });
      this.extensions.forEach(e => {
        e.destroy();
      });
      this.off(eventTypeConstants.selectionEvents.stop, this._onStop);
      this.hiddenInputDom.removeEventListener("keydown", this.handleKeydown);
      this.hiddenInputDom.removeEventListener("paste", this.handleCutOrPasteDone);
      this.hiddenInputDom.removeEventListener("cut", this.handleCutOrPasteDone);
      if (browserEnvironmentDetectionUtils.browserDetector.isMac && browserEnvironmentDetectionUtils.browserDetector.isSafari) {
        this.hiddenInputDom.removeEventListener("blur", this.handleHiddenInputBlur);
      }
      if (--e2 == 0) {
        this.hiddenInputDom.remove();
      }
    }
    checkIfNeedCalcSelectablesIfLazy() {
      let {
        beginTarget: e,
        endTarget: n,
        renderMode: r
      } = this.selectionContext;
      if (r === selectionEventDriverAndManager.RectPainter.NORMAL) {
        return true;
      }
      let o = e && n && docxBlockUtils_2.isSameBlock(e, n);
      let i = this.store.getTmpSelection();
      let l = i.length ? i : this.store.getSelection();
      let c = this.store.isSingleTextSelection(l);
      let u = n && !this.options.boundaryAreaContainer.contains(n);
      if (c && u || c && o || o && el.some(e => n == null ? undefined : n.closest(e))) {
        return false;
      }
      let a = docxBlockUtils_2.getBlockIdFromNode(e) || docxEditorCore.ZERO_OFFSET;
      let s = this.blockManager.hasBlockViewByBlockId(a) && this.blockManager.getBlockModelByBlockId(a).isRoot;
      let f = docxBlockUtils_2.getBlockIdFromNode(n);
      let h = f && this.blockManager.hasBlockViewByBlockId(f);
      return !s || !!h;
    }
    computeRenderModeByStartTarget(e) {
      if (!docxBlockUtils_2.isLazySelectionNode(e) && docxBlockUtils_2.isNodeOutsideBlockContent(e, this.blockManager)) {
        return selectionEventDriverAndManager.RectPainter.NORMAL;
      } else {
        return selectionEventDriverAndManager.RectPainter.LAZY;
      }
    }
    clearBrowserTextSelection() {
      this.setFocusInHiddenInputDom(true);
    }
    onTargetNotInBoundray(e) {
      var n;
      if (e == null ? undefined : (n = e.closest) === null || n === undefined ? undefined : n.call(e, ".suite_docs_mode_switch_container")) {
        this.removeAllSelection(true, editorTypeConstants.commandTypes.SwitchDocsMode);
      }
      this.removeAllSelection();
    }
    getClosestLateralContainerBlockId(e) {
      let n = docxBlockUtils_2.getBlockIdFromNode(e);
      if (!n) {
        return null;
      }
      let r = this.blockManager.getBlockModelByBlockIdNotCheck(n);
      if (!r) {
        return null;
      }
      if (r.type === docBlockTypeConstants.blockTypeConstants.PAGE) {
        for (let n of eo) {
          if (e.closest(n)) {
            return null;
          }
        }
      }
      return this.closestLateralContainer(n);
    }
    closestLateralContainer(e) {
      let n = this.blockManager.getBlockModelByBlockId(e);
      while (n && !ei.has(n.type)) {
        n = n.parent;
      }
      if (n) {
        return n.id;
      } else {
        return null;
      }
    }
    get boundaryAreaContainer() {
      return this.options.boundaryAreaContainer || document.body;
    }
    get pasteBoundary() {
      return this.options.pasteBoundary || document.body;
    }
    serilizeTarget(e, n, r) {
      var o;
      let i = this.buildResolveContext();
      o = {
        x: n,
        y: r
      };
      chainManagerClasses.ChainManager.create([e$, ek]).process(i, o);
      this.beginBlockId = i.targetIds[0];
      return e;
    }
    initHiddenInputDom() {
      let {
        blockManager: e
      } = this;
      let n = docHostTypeChecker.isSheetHost(e.config) ? e.config.get("boundary") : document.body;
      let r = n.querySelector(".docx-selection-hidden-textarea");
      if (r) {
        this.hiddenInputDom = r;
        return;
      }
      let o = document.createElement("textarea");
      o.className = "docx-selection-hidden-textarea";
      o.readOnly = true;
      o.style.position = "fixed";
      o.style.top = "0";
      o.style.left = "-100px";
      o.style.opacity = "0";
      o.style.width = "0";
      o.style.height = "100vh";
      o.innerHTML = " ";
      n.appendChild(o);
      this.hiddenInputDom = o;
      if (/addWaterMark=true/.test(location.search || "")) {
        let e = document.createElement("div");
        e.className = "water-mark-biany";
        e.style.position = "fixed";
        e.style.top = "0";
        e.style.left = "0";
        e.style.opacity = "0";
        e.style.width = "100%";
        e.style.height = "100%";
        e.style.pointerEvents = "none";
        e.innerHTML = "";
        document.body.appendChild(e);
      }
    }
    buildResolveContext(e) {
      return {
        blockManager: this.blockManager,
        blockSelection: this,
        targetIds: e ? [e] : [],
        matchedIds: [],
        debug: e4,
        resolveStatus: eE.DEFAULT,
        finishReason: "",
        selectableCompleted: false,
        rect: this.rect,
        fold: this.fold
      };
    }
    idsToSelectables(e) {
      return e.map(e => ({
        id: e,
        type: editorTypeConstants.blockTypes.BLOCK
      }));
    }
    calcSelectables() {
      if (!this.beginBlockId || !this.blockManager.hasBlockModelByBlockId(this.beginBlockId)) {
        return;
      }
      let e = this.buildResolveContext(this.beginBlockId);
      let {
        endX: n,
        endY: r
      } = this.selectionContext;
      if (n !== undefined && r !== undefined) {
        (function (e, n) {
          let r = [e$, ek, targetBlockRelation.TargetRelationNode, eL, eA, eN, eS, eK, eV];
          chainManagerClasses.ChainManager.create(r).process(e, n);
        })(e, {
          x: n,
          y: r
        });
        switch (e.resolveStatus) {
          case eE.FINISH_IGONORE:
          case eE.FINISH_EXCEPTION:
            break;
          case eE.FINISH_EMPTY:
            this.selectionContext.update({
              selectables: []
            });
            break;
          case eE.FINISH_SUCCESS:
            this.selectionContext.update({
              selectables: this.idsToSelectables(e.matchedIds),
              selectableCompleted: e.selectableCompleted
            });
            break;
          default:
            throw Error("resolve process not finished");
        }
      }
    }
    _onStop(e) {
      e4("stop", e);
      delete this.beginBlockId;
    }
    setFocusInHiddenInputDom() {
      let r = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      if (this.options.disableBlockSelectionAutoFocus) {
        return;
      }
      this.emit(eventTypeConstants.selectionEvents.restoreFocus);
      let o = this.store.getSelection().length;
      let i = window.getSelection()?.rangeCount;
      if (o && !i || r) {
        if (browserEnvironmentDetectionUtils.browserDetector.isFF) {
          return this.forceSelectHiddenInput();
        }
        this.hiddenInputDom.dataset.currentRootBlockId = String(this.blockManager.rootBlockId);
        this.hiddenInputDom.focus();
        this.hiddenInputDom.select();
        if (browserEnvironmentDetectionUtils.browserDetector.isMac && browserEnvironmentDetectionUtils.browserDetector.isSafari) {
          this.hiddenInputDom.focusStatus = true;
        }
        if (!getSelection()?.rangeCount && browserEnvironmentDetectionUtils.browserDetector.isIOS && versionCompareUtil.compareVersions(`${browserEnvironmentDetectionUtils.browserDetector.osversion}`, "17.0")) {
          this.forceSelectHiddenInput();
        }
      }
    }
    setHiddenInputDomReadOnly(e) {
      this.hiddenInputDom.readOnly = e;
    }
    getSelection() {
      return this.store.getClonedSelection();
    }
    getIsCurrentTextSelection(e) {
      let n = this.store.getSelection();
      return n.length === 1 && n[0].id === e && this.store.isSingleTextSelection(n);
    }
    getSelectedBlockIfInSelection(e) {
      return this.store.getSelection().find(n => n.id === e);
    }
    getBlockInNestedSelection(e) {
      let n = [];
      let r = this.blockManager.getBlockModelByBlockIdNotCheck(e);
      while (r) {
        n.push(r.id);
        r = r.parent ? this.blockManager.getBlockModelByBlockIdNotCheck(r.parent.id) : undefined;
      }
      return this.store.getSelection().find(e => n.includes(e.id));
    }
    getTmpSelection() {
      return this.store.tmpStored;
    }
    restoreFocus() {
      this.setFocusInHiddenInputDom(true);
    }
    clearExtendInternalSelection(e, n = []) {
      e = e.filter(e => !n.includes(e.id));
      this.extendSelectionTypes.forEach(n => {
        n.removeCurrent(e);
      });
    }
    setContext(e, n) {
      this.context = n;
    }
    blur() {
      if (document.activeElement) {
        document.activeElement.blur();
      }
      this.emit(eventTypeConstants.selectionEvents.blur);
      this.setHiddenInputDomReadOnly(true);
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        this.setFocusInHiddenInputDom();
      }
    }
    getContext() {
      return this.context;
    }
    getSelectionContext() {
      return this.selectionContext;
    }
    setSelection(e, n = {
      source: editorTypeConstants.commandTypes.ExternalInvoke,
      syncBrowser: true,
      force: false
    }) {
      let {
        syncBrowser: r = true,
        force: o = false,
        shouldNotify: u = true
      } = n;
      let a = deepCloneWrapper_1.deepClone(e);
      a = this.mainSelectionType.filterUnValidSelect(a, this.blockManager);
      this.extendSelectionTypes.forEach(e => {
        a = e.filterUnValidSelect(a);
      });
      let s = this.getSelection();
      if (deepEqualUtil_1.deepEqual(a, s)) {
        if (o) {
          this.updateBrowserSelection();
        }
        return;
      }
      if (!a.length) {
        this.clearExtendInternalSelection(s);
        this.store.transaction(() => {
          this.setContext(a, n);
          this.store.stored = [];
        }, r, u);
        if (r) {
          this.updateBrowserSelection();
        }
        return;
      }
      let d = this.store.isBlockSelection(a);
      this.mainSelectionType.onBeforeSet(a);
      this.extendSelectionTypes.forEach(e => {
        e.onBeforeSet(a);
      });
      let f = [];
      if (!d) {
        f.push(a[0].id);
      }
      this.clearExtendInternalSelection(s, f);
      this.store.transaction(() => {
        this.setContext(a, n);
        this.store.stored = a;
        let e = throttledArgStringifyUtil.throttledStringify(a.map(e => e.type));
        this.extendSelectionTypes.some(n => {
          let r = n.type === e[0];
          if (r) {
            n.addCurrent(a[0]);
          }
          return r;
        });
        if (n.source !== editorTypeConstants.commandTypes.Destroy && d) {
          let e = [editorTypeConstants.commandTypes.Backspace, editorTypeConstants.commandTypes.Redo, editorTypeConstants.commandTypes.Undo, editorTypeConstants.commandTypes.EditControl, editorTypeConstants.commandTypes.KeyboardSelectAll, editorTypeConstants.commandTypes.AIPartialWritingRestoreSelection];
          if (browserEnvironmentDetectionUtils.browserDetector.isMobile && e.includes(n.source)) {
            this.setHiddenInputDomReadOnly(false);
          }
          this.setFocusInHiddenInputDom(true);
          if (browserEnvironmentDetectionUtils.browserDetector.isIOS) {
            this.setHiddenInputDomReadOnly(true);
          }
        }
      }, r, u);
      if (n.source === editorTypeConstants.commandTypes.Redo || n.source === editorTypeConstants.commandTypes.Undo) {
        idleCallbackPolyfill_1.requestIdleCallback(() => {
          docEditorActionMap.collectBlockEvent({
            actionObject: d ? docBlockConstants.scopeTypes.BLOCK : docBlockConstants.scopeTypes.TEXT,
            source: docEditorActionMap.uiComponentTypes.content_page,
            blockManager: this.blockManager,
            actionType: docEditorActionMap.actionConstants[n.source.toLowerCase()],
            blocks: a,
            click: docEditorActionMap.uiActionTypes.hotkey_action
          });
        });
      }
    }
    removeAllSelection() {
      let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : editorTypeConstants.commandTypes.ExternalInvoke;
      this.setSelection([], {
        source: n,
        syncBrowser: e
      });
    }
    updateBrowserSelection(e = this.getSelection()) {
      this.extendSelectionTypes.forEach(n => {
        n.updateBrowserSelection(e);
      });
    }
    selectAll(e) {
      let {
        rootBlockId: n
      } = this.blockManager;
      if (syncUrlBlockUtils.isSyncingActive()) {
        let e = syncUrlBlockUtils.getBlockByToken(this.blockManager);
        if (!e) {
          return;
        }
        n = e.id;
      }
      let {
        children: r
      } = this.blockManager.getBlockModelByBlockId(n);
      let o = r.map(e => e.id);
      let i = (e == null ? undefined : e.withRoot) ? [n, ...o] : o;
      let l = docBlockTraversalUtils.flattenBlockIds(i, this.blockManager);
      this.setSelection(l, e);
    }
    report(e, n) {
      let r = this.getSelection();
      idleCallbackPolyfill_1.requestIdleCallback(() => {
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent(`sophon_selection_${e}`, {
          ...n,
          currentSelection: JSON.stringify(r)
        });
      });
    }
    constructor(e, n, r) {
      super();
      this.options = e;
      this.focus = n;
      this.fold = r;
      e3(this, "blockManager", undefined);
      e3(this, "rect", undefined);
      e3(this, "composingService", undefined);
      e3(this, "context", null);
      e3(this, "store", undefined);
      e3(this, "rectPainter", new selectionEventDriverAndManager.EventDriver({
        selectionAreaClass: this.options.selectionAreaClass,
        selectionAreaContainer: this.options.selectionAreaContainer
      }));
      e3(this, "selectionContext", undefined);
      e3(this, "unSelectableType", undefined);
      e3(this, "extensions", undefined);
      e3(this, "mainSelectionType", undefined);
      e3(this, "extendSelectionTypes", undefined);
      e3(this, "hiddenInputDom", undefined);
      e3(this, "beginBlockId", undefined);
      e3(this, "handleHiddenInputBlur", () => {
        this.hiddenInputDom.focusStatus &&= false;
      });
      e3(this, "handleKeydown", e => {
        if ((e.metaKey || e.ctrlKey) && [keyboardKeyCodes.keyCodeMap.V, keyboardKeyCodes.keyCodeMap.X].includes(e.keyCode)) {
          this.setHiddenInputDomReadOnly(false);
        }
      });
      e3(this, "handleCutOrPasteDone", () => {
        this.setHiddenInputDomReadOnly(true);
      });
      e3(this, "forceSelectHiddenInput", () => {
        var e;
        let n = this.hiddenInputDom.parentElement;
        let r = Array.from(n.childNodes).indexOf(this.hiddenInputDom);
        if ((e = getSelection()) !== null && e !== undefined) {
          e.collapse(n, r);
        }
      });
      this.blockManager = e.blockManager;
      this.rect = e.rect;
      docxEditorCore.onServiceReady(this.blockManager.editorAPI, composingServiceName.composingService, e => {
        this.composingService = e;
      });
      this.selectionContext = this.newSelectionContext(this.blockManager);
      this.store = new eX({
        mode: this.options.mode
      }, this.blockManager, this.rect, this.fold, this.selectionContext);
      this.unSelectableType = e.unSelectableType || [];
      this.initHiddenInputDom();
      e2++;
      this.hiddenInputDom.addEventListener("keydown", this.handleKeydown);
      this.hiddenInputDom.addEventListener("paste", this.handleCutOrPasteDone);
      this.hiddenInputDom.addEventListener("cut", this.handleCutOrPasteDone);
      if (browserEnvironmentDetectionUtils.browserDetector.isMac && browserEnvironmentDetectionUtils.browserDetector.isSafari) {
        this.hiddenInputDom.addEventListener("blur", this.handleHiddenInputBlur);
      }
    }
  }
  require.d(exports, {
    blockTypes: function () {
      return editorTypeConstants.blockTypes;
    },
    BlockSelectionHandler: function () {
      return e6;
    },
    commandTypes: function () {
      return editorTypeConstants.commandTypes;
    }
  });
}