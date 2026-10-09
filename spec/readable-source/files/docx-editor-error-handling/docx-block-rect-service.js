// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerBlockRect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 284142
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var layoutManagerToken = require("layout-manager-token") /*id: 709939*/;
  var domRectBboxHelpers = require("dom-rect-bbox-helpers") /*id: 412452*/;
  var blockRectGetterToken = require("block-rect-getter-token") /*id: 346455*/;
  function y(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function S(e, i, r) {
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
  function k(e, i, r, n, o) {
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
  let E = dependencyInjectionContainer.Provide(blockRectGetterToken.blockRectGetterName)((l = k((o = class {
    get editorAPI() {
      return this.blockManager.editorAPI;
    }
    get reconciler() {
      return this.layoutManager.getReconciler();
    }
    get mainBlockManager() {
      return syncedReferenceBlockUtils.getMainDocxBlockManager(this.editorAPI) ?? this.blockManager;
    }
    get mainViewService() {
      return syncedReferenceBlockUtils.getMainDocxEditorView(this.editorAPI) ?? this.view;
    }
    getBlockRect(e) {
      let i = syncedReferenceBlockUtils.getBlockViewByBlockIdWithSynced(this.mainBlockManager, e);
      if (!i || this.blockManager.hasBlockModelByBlockId(e) && !this._blockIsInDocument(i)) {
        return this._getBlockRectFromLayoutTree(e);
      }
      let r = i.hostElement.getBoundingClientRect();
      if (domRectBboxHelpers.hasNonZeroSize(r)) {
        return domRectBboxHelpers.copyRectProps(r);
      } else {
        return this._getBlockRectFromLayoutTree(e);
      }
    }
    batchedGetBlockRects(e, i) {
      let r = new Map();
      let n = this.mainViewService.root;
      if (n) {
        this.rootRect = n.getContentRect();
      }
      try {
        e.forEach(e => {
          let n = i(e);
          r.set(e, n);
        });
      } finally {
        this.rootRect = null;
      }
      return r;
    }
    getCaretRect(e, i, r, n = {
      ignoreRectContainer: false
    }) {
      let o = syncedReferenceBlockUtils.getBlockViewByBlockIdWithSynced(this.mainBlockManager, e);
      let l = this._getCaretCacheKey(e, i, r);
      if (!o || !this._blockIsInDocument(o)) {
        let i = this._getBlockRectFromLayoutTree(e);
        if (i) {
          let e = this.caretCache.get(l);
          if (e) {
            i.top += e.top;
            i.left += e.left;
            i.height = e.height;
            i.bottom = i.top + i.height;
          }
          i.width = 0;
          i.right = i.left;
        }
        return i;
      }
      if (!o.isTextBlock) {
        return null;
      }
      let {
        zoneState: s
      } = o.model;
      let a = s.getModelText();
      let c = s.getZoneId();
      let [d, u] = this.getNewLineAndOffset(a, i);
      let h = o.editor.rectModule.getRawCaretRect({
        line: d,
        offset: u,
        zoneId: c
      }, n);
      let f = o.hostElement.getBoundingClientRect();
      h.width = 0;
      h.right = h.left;
      this.caretCache.set(l, {
        top: h.top - f.top,
        left: h.left - f.left,
        height: h.height
      });
      return h;
    }
    getRangeRect(e, i, r) {
      let n = syncedReferenceBlockUtils.getBlockViewByBlockIdWithSynced(this.mainBlockManager, e);
      let o = this._getRangeCacheKey(e, i, r);
      if (!n || !this._blockIsInDocument(n)) {
        let i = this._getBlockRectFromLayoutTree(e);
        if (i) {
          let e = this.rangeCache.get(o);
          if (e) {
            Object.assign(i, throttledPathFilterStringify.throttledPathStr(e, ["left", "right", "height", "width"]));
          }
        }
        return i;
      }
      if (!n.isTextBlock) {
        return null;
      }
      let {
        zoneState: l
      } = n.model;
      let s = l.getModelText();
      let a = l.getZoneId();
      let [c, d] = this.getNewLineAndOffset(s, i);
      let [u, h] = this.getNewLineAndOffset(s, r);
      let p = n.editor.rectModule.getRawRangeRect({
        start: {
          line: c,
          zoneId: a,
          offset: d
        },
        end: {
          line: u,
          zoneId: a,
          offset: h
        }
      });
      this.rangeCache.set(o, p);
      return p;
    }
    _getCaretCacheKey(e, i, r) {
      return `${e}-${i}-${r}`;
    }
    _getRangeCacheKey(e, i, r) {
      return `${e}-${i}-${r}`;
    }
    _blockIsInDocument(e) {
      return this.layoutManager.getActiveBlocks().has(e.id);
    }
    getNewLineAndOffset(e, i) {
      let r = e.split("\n");
      if (r.length <= 2) {
        return [0, i];
      }
      if (e.length <= i) {
        let e = r.length - 2;
        return [e, r[e].length];
      }
      let n = 0;
      let o = 0;
      for (let e = 0, l = r.length; e < l; e++) {
        let l = r[e].length;
        if (n + l >= i) {
          o = e;
          break;
        }
        n += l + 1;
      }
      let l = o !== 0 ? i - n : i;
      return [o, l];
    }
    _getBlockRectFromLayoutTree(e) {
      let i;
      let r;
      let n = this.layoutManager.getLayoutInfo(e, true);
      if (!n) {
        return null;
      }
      let o = this.mainViewService.root;
      if (!o) {
        return null;
      }
      if (this.rootRect) {
        i = this.rootRect.top;
        r = this.rootRect.left;
      } else {
        let e = o.getContentRect();
        i = e.top;
        r = e.left;
      }
      let {
        width: l,
        height: s,
        top: a
      } = n;
      let c = i + a;
      let d = n.left ? n.left : r;
      return {
        left: d,
        right: d + l,
        top: c,
        bottom: c + s,
        width: l,
        height: s
      };
    }
    constructor() {
      y(this, "blockManager", l, this);
      y(this, "layoutManager", s, this);
      y(this, "view", a, this);
      S(this, "caretCache", new Map());
      S(this, "rangeCache", new Map());
      S(this, "rootRect", null);
    }
  }).prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), s = k(o.prototype, "layoutManager", [layoutManagerToken.layoutManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), a = k(o.prototype, "view", [docxEditorCore.VIEW_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), o)) || o;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var observableSafeFilter = require("observable-safe-filter") /*id: 669476*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var syncedRefBlockToken = require("synced-ref-block-token") /*id: 893973*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  (n = {}).text = "text";
  n.line = "line";
  n.block = "block";
  let L = n;
  var blockRectServiceProvider = require("block-rect-service-provider") /*id: 688428*/;
  function A(e, i, r) {
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
  let O = dependencyInjectionContainer.Provide(blockRectServiceProvider.blockRectServiceId)((d = class {
    get rootBlockId() {
      return this.blockManager.rootBlockId;
    }
    get mainRootBlockId() {
      let {
        editorAPI: e
      } = this.blockManager;
      if (!this.isSyncedReferenceBlock) {
        return this.rootBlockId;
      }
      {
        let i = e.getService(syncedRefBlockToken.syncedRefBlockToken, {
          optional: true
        });
        return ((i == null ? undefined : i.getMainDocxEditorAPI()) || e).getService(docxEditorCore.MODEL_TOKEN).rootBlockId;
      }
    }
    get isSyncedReferenceBlock() {
      let {
        editorAPI: e
      } = this.blockManager;
      return !!e.config.get("isSyncedReferenceBlock");
    }
    getRootBlockId() {
      return this.rootBlockId;
    }
    destroy() {
      let {
        eventEmitter: e
      } = this.blockManager;
      e.off(docxScrollableConstants.scrollEvents.ON_SCROLL, this.clearCache);
      this.subs.forEach(e => e.unsubscribe());
      e.removeListener(renderEventConstants.bufferChanged, this.clearCache);
      e.addListener(editorUiConstants.editorResizeClass, this.handleEditorResize);
    }
    onServiceDispose() {
      this.destroy();
    }
    getBlockClientRect(e) {
      return this.blockRectGetter.getBlockRect(e);
    }
    getBlockRectCacheKey(e, i = this.mainRootBlockId) {
      let r = this.fold.findFoldedByBlock(e) || e;
      let n = this.blockManager.getBlockStructByBlockId(r);
      return domRectBboxHelpers.buildCacheKey({
        blockId: r,
        blockType: n == null ? undefined : n.type,
        cacheType: L.block,
        relativeBlock: i
      });
    }
    getBlockRect(e, i = this.mainRootBlockId) {
      let r = this.fold.findFoldedByBlock(e);
      if (r) {
        return this.getFoldedRect(r, i);
      }
      let n = this.getBlockRectCacheKey(e, i);
      if (this.cache.has(n)) {
        return this.cache.get(n);
      }
      let o = this.getRelativeRect(e);
      let l = this.getRelativeRect(i);
      let s = domRectBboxHelpers.calcRelativeRect(o, l);
      this.cache.set(n, s);
      return s;
    }
    batchedGetBlockRects(e, i) {
      return this.blockRectGetter.batchedGetBlockRects(e, e => this.getBlockRect(e, i));
    }
    getOriginBlockRect(e) {
      return this.blockRectGetter.getBlockRect(e) || domRectBboxHelpers.createEmptyRect();
    }
    getCaretRect(e, i, r = this.mainRootBlockId) {
      let n = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
      let o = this.fold.findFoldedByBlock(e);
      if (o) {
        return this.getFoldedRect(o, r);
      }
      let l = this.blockManager.getBlockStructByBlockId(e);
      let s = domRectBboxHelpers.buildCacheKey({
        blockId: e,
        blockType: l.type,
        cacheType: L.text,
        relativeBlock: r,
        offset: i,
        isStart: n
      });
      if (this.cache.has(s)) {
        return this.cache.get(s);
      }
      let a = this.getActualCaretRect(e, i, r, n);
      this.cache.set(s, a);
      return a;
    }
    getRangeRectCacheKey(e, i, r = this.mainRootBlockId) {
      let n = this.fold.findFoldedByBlock(e);
      if (n) {
        return this.getBlockRectCacheKey(n, r);
      }
      let o = this.blockManager.getBlockStructByBlockId(e);
      return domRectBboxHelpers.buildCacheKey({
        blockId: e,
        blockType: o == null ? undefined : o.type,
        cacheType: L.text,
        relativeBlock: r,
        rangeStart: i[0],
        rangeEnd: i[1]
      });
    }
    getRangeRect(e, i, r = this.mainRootBlockId) {
      let n = this.fold.findFoldedByBlock(e);
      if (n) {
        let e = this.getFoldedRect(n, r);
        return {
          ...e,
          leftCaretRect: e
        };
      }
      let o = this.getRangeRectCacheKey(e, i, r);
      if (this.cache.has(o)) {
        return this.cache.get(o);
      }
      let l = this.blockRectGetter.getRangeRect(e, i[0], i[1]);
      if (!l) {
        let e = domRectBboxHelpers.createEmptyRect();
        return {
          ...e,
          leftCaretRect: e
        };
      }
      let s = this.getRelativeRect(r);
      let a = {
        ...domRectBboxHelpers.calcRelativeRect(l, s),
        leftCaretRect: this.getCaretRect(e, i[0], r)
      };
      if (a.top !== a.leftCaretRect.top && docxCommentFeatureFlags.shouldIgnoreCaretRect()) {
        let r = this.blockRectGetter.getRangeRect(e, i[0], i[0] + 1);
        if (r) {
          a.firstCharRect = domRectBboxHelpers.calcRelativeRect(r, s);
        }
      }
      this.cache.set(o, a);
      return a;
    }
    getRangeClientRect(e, i) {
      return this.blockRectGetter.getRangeRect(e, i[0], i[1]);
    }
    getActualCaretRect(e, i, r = this.mainRootBlockId) {
      let n = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
      let o = arguments.length > 4 ? arguments[4] : undefined;
      let l = this.blockRectGetter.getCaretRect(e, i, n, o);
      if (!l) {
        return domRectBboxHelpers.createEmptyRect();
      }
      let s = this.getRelativeRect(r);
      return domRectBboxHelpers.calcRelativeRect(l, s);
    }
    getRelativeRect(e) {
      return this.blockRectGetter.getBlockRect(e) ?? domRectBboxHelpers.createEmptyRect();
    }
    getFoldedRect(e, i) {
      let r = this.getBlockRect(e, i);
      return domRectBboxHelpers.createVerticalRect(r.bottom);
    }
    get fold() {
      return this.context.get().fold;
    }
    clearCacheByKey(e) {
      this.cache.delete(e);
    }
    getCacheRectByKey(e) {
      return this.cache.get(e);
    }
    getBlockManager() {
      return this.blockManager;
    }
    constructor(e, i, r) {
      A(this, "cache", new Map());
      A(this, "subs", undefined);
      A(this, "blockManager", undefined);
      A(this, "blockRectGetter", undefined);
      A(this, "context", undefined);
      A(this, "clearCache", () => {
        this.cache.clear();
      });
      A(this, "handleEditorResize", debounceUtil_1_1.debounce(() => {
        this.clearCache();
      }, 50));
      let {
        eventEmitter: n,
        dataService: o,
        layoutManager: l
      } = e;
      this.blockManager = e;
      this.blockRectGetter = i;
      this.context = r;
      n.on(docxScrollableConstants.scrollEvents.ON_SCROLL, this.clearCache);
      n.addListener(editorUiConstants.editorResizeClass, this.handleEditorResize);
      n.addListener(renderEventConstants.bufferChanged, this.clearCache);
      this.subs = [o.beforeChange$.subscribe(this.clearCache)];
      this.subs.push(l.topChangedBlockIds$.pipe(observableSafeFilter.createSafeFilter(e => {
        let {
          ids: i
        } = e;
        return i.length > 0;
      })).subscribe(this.clearCache));
    }
  }, c = d = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, blockManagerToken.blockManagerToken), typescriptRuntimeHelpers.decorate(1, blockRectGetterToken.blockRectGetterName), typescriptRuntimeHelpers.decorate(2, dependencyInjectionContainer.Dynamic()), typescriptRuntimeHelpers.decorate(2, compatibleEditorContext_1.compatibleContext), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined, undefined, undefined])], d))) || c;
  function D() {
    docxEditorCore.registerProviders([O, E]);
  }
  require.d(exports, {
    registerBlockRect: function () {
      return D;
    }
  });
}