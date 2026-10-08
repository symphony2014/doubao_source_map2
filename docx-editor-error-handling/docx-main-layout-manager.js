// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initMainLayoutManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 267392
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
  var mainLayoutManagerProvider = require("main-layout-manager-provider") /*id: 351995*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var v = debugBrowserConfig;
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var renderEventUtils = require("render-event-utils") /*id: 978100*/;
  function E(e, i, r) {
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
  class C {
    static lockChild(e) {
      var i;
      if (e instanceof HTMLElement && ((i = e.parentElement) === null || i === undefined ? undefined : i.dataset.lockedHeightBlock) != null) {
        e.dataset.lockedHeightBlockChild = "";
      }
    }
    lock(e) {
      e.dataset.lockedHeightBlock = "";
      Array.from(e.children).forEach(e => C.lockChild(e));
      if (!this.observerMap.has(e)) {
        let i = new MutationObserver(C.handleChildrenChange);
        i.observe(e, {
          childList: true
        });
        this.observerMap.set(e, i);
      }
    }
    unlock(e) {
      delete e.dataset.lockedHeightBlock;
      Array.from(e.children).forEach(e => {
        if (e instanceof HTMLElement) {
          delete e.dataset.lockedHeightBlockChild;
        }
      });
      if (this.observerMap.has(e)) {
        this.observerMap.get(e).disconnect();
        this.observerMap.delete(e);
      }
    }
    constructor() {
      E(this, "observerMap", new WeakMap());
    }
  }
  E(C, "handleChildrenChange", e => {
    e.forEach(e => {
      e.addedNodes.forEach(e => C.lockChild(e));
    });
  });
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  function I(e, i, r) {
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
  let M = boolDefaultUtil.getDefaultBool("ccm.docx.enable_virtual_error_slardar_report", false);
  let T = boolDefaultUtil.getDefaultBool("ccm.docx.enable_vr_tracker_report", false);
  class w {
    setErrorFrom(e) {
      this.errorFrom = e;
    }
    reportTea() {
      if (this.errorFrom && this.isDirty) {
        for (let e of this.toBeReportMessageMap.values()) {
          (function (e) {
            let {
              triggerTime: i,
              blockTypes: r,
              profile: n
            } = e;
            docxEventCollector.wrappedCollector("docx_virtual_render_oops_dev", {
              ...e,
              triggerTime: i.toString(),
              blockTypes: [...r.entries()].map(e => {
                let [i, [r, n]] = e;
                return `(${i}:${r}:${n}})`;
              }).join(","),
              profile: JSON.stringify(n)
            });
          })(e);
        }
        this.toBeReportMessageMap.clear();
        this.isDirty = false;
      }
    }
    reportSlardar(e, i, r) {
      if (!this.globalMessageSet.has(e.message) && !M) {
        docxUtilityHelpers.captureException(e, {
          useSlardarWeb: true,
          extra: {
            ...this.handleSlardarReport(r),
            source: i,
            isVrError: "1",
            from: this.errorFrom
          }
        });
      }
    }
    handleSlardarReport(e) {
      let i = {};
      Object.entries(e).forEach(e => {
        let [r, n] = e;
        i[r] = String(n);
      });
      return i;
    }
    getTrackerLog() {
      let e = new Set([bearVirtualLayoutReconciler.TrackerContextType.VIEWPORT_LOCKER_SET_TEMP_ANCHOR_NODE, bearVirtualLayoutReconciler.TrackerContextType.VIEWPORT_LOCKER_SET_ANCHOR_NODE, bearVirtualLayoutReconciler.TrackerContextType.VIEWPORT_LOCKER_SET_ANCHOR_NODE_BY_TMP, bearVirtualLayoutReconciler.TrackerContextType.VIEWPORT_LOCKER_POST_PAINT, bearVirtualLayoutReconciler.TrackerContextType.VIEWPORT_LOCKER_LOCK_VIEWPORT, bearVirtualLayoutReconciler.TrackerContextType.VIEWPORT_LOCKER_CALC_SHOULD_LOCK, bearVirtualLayoutReconciler.TrackerContextType.ENSURE_INACTIVE]);
      let i = this.reconciler.tracker.getOriginEachPaintContexts();
      if (!i || (i == null ? undefined : i.length) <= 0) {
        return "";
      } else {
        return JSON.stringify(i.map(i => ({
          ...i,
          c: i.c.filter(i => !Object.keys(i).some(i => i !== "r" && e.has(Number(i))))
        })));
      }
    }
    aggregationError(e, i) {
      var o;
      let l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.isDirty = true;
      let s = Date.now();
      let {
        message: a
      } = e;
      let {
        ignoreTea: c = false,
        blockType: d,
        nodeId: u,
        rate: h
      } = l;
      this.reportSlardar(e, i, l);
      let f = !this.globalMessageSet.has(a);
      if (f) {
        this.globalMessageSet.add(a);
      }
      if (c) {
        return;
      }
      let g = this.toBeReportMessageMap.get(a);
      if (!g) {
        let e = !["Invalid array length"].includes(a) && T;
        g = {
          message: a,
          source: i,
          blockTypes: new Map(),
          triggerTime: [],
          trackerLog: e ? this.getTrackerLog() : "empty",
          from: this.errorFrom,
          isFirst: f ? "1" : "0",
          count: 0,
          profile: {}
        };
        this.toBeReportMessageMap.set(a, g);
      }
      g.count++;
      let {
        triggerTime: p,
        blockTypes: m,
        profile: v
      } = g;
      if (!(p.length >= 10000)) {
        p.push(s);
        if (u && d) {
          m.set(u, [d, (m.get(u)?.[1] ?? 0) + 1]);
        }
        if (typeof h == "number") {
          v.viewportLockRates ||= [];
          if ((o = v.viewportLockRates) !== null && o !== undefined) {
            o.push(h);
          }
        }
      }
    }
    constructor(e) {
      I(this, "toBeReportMessageMap", new Map());
      I(this, "globalMessageSet", new Set());
      I(this, "reconciler", undefined);
      I(this, "errorFrom", undefined);
      I(this, "isDirty", false);
      this.reconciler = e;
    }
  }
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let P = boolDefaultGetterUtil.getDefaultBool("ccm.docx.use_resize_observer_lock", true);
  var docxVirtualLayoutConfig = require("docx-virtual-layout-config") /*id: 173628*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
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
  let O = new class {
    constructor() {
      A(this, "isScrolling", false);
      A(this, "getIsScrolling", () => this.isScrolling);
      A(this, "handleScrollStart", () => {
        this.isScrolling = true;
      });
      A(this, "handleScrollEnd", () => {
        this.isScrolling = false;
      });
    }
  }();
  window.globalScrollingStatus = O;
  var multiTextSelectionHandler = require("multi-text-selection-handler") /*id: 627646*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var numberStringUtils = require("number-string-utils") /*id: 762471*/;
  var zIndexConstants = require("z-index-constants") /*id: 470454*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var renderCacheManager = require("render-cache-manager") /*id: 318882*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var mediaEnvironmentStubs = require("media-environment-stubs") /*id: 862836*/;
  function Z(e, i, r) {
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
  let z = v("mainLayoutManager:service");
  let K = docxVirtualLayoutConfig.isNextFinderV2();
  let X = () => browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isInVC && docComponentStubConfig.checkClientFeature(docComponentStubConfig.emptyObject.DOCX_VIRTUAL_SCROLL_DEMOTION);
  let G = dependencyInjectionContainer.Provide(mainLayoutManagerProvider.mainLayoutManager)((n = (c = class {
    init() {
      z("mainLayoutManager init");
    }
    destroy() {
      this._isDestory = true;
      this.throttleReportViewportLock.cancel();
      if (X()) {
        mediaEnvironmentStubs.stubEventEmitter.off(docComponentStubConfig.emptyObject_1.MOBILE.COMMON.THERMAL_STATE, this.handleThermalStateChange);
      }
      this.reconciler.destroy();
      renderCacheManager.renderCacheManager.deleteDOMCache(this.renderLineCacheId);
      z("mainLayoutManager destory");
    }
    isDestory() {
      return this._isDestory;
    }
    start(e, i) {
      z("mainLayoutManager start");
      if (this.isStart) {
        z("warning: repeat start layoutManager");
        return;
      }
      this.isStart = true;
      let {
        enableVirtualRender: r,
        enableIdleWorker: n,
        trackerStoreSize: o,
        cacheCountLimit: l,
        ...s
      } = K;
      let {
        scroller: a,
        enableVirtualRender: c = r,
        enableIdleWorker: d = n,
        enableCheckViewportVisibility: u,
        overwriteDOMApi: h,
        getDeactiveNodeStyle: f,
        isSSR: p,
        errorFrom: m,
        isDocxAtSheet: v
      } = e;
      let {
        reconciler: b
      } = this;
      this.errorHandle = new w(b);
      this.errorHandle.setErrorFrom(m || "");
      this.enableVirtualRender = !!c;
      this.reportedMessageSet.clear();
      b.init({
        rootId: this.structService.root.id,
        ...s,
        overwriteDOMApi: h,
        getDeactiveNodeStyle: f,
        enableVirtualRender: c,
        enableIdleWorker: d,
        enableCheckViewportVisibility: u,
        enablePlaceholderHorizontalStyle: boolDefaultGetterUtil.getDefaultBool("docx_virtual_enable_placeholder_horizontal_style", false),
        enableFirstNodeCheck: boolDefaultGetterUtil.getDefaultBool("docx_bear_virtual_enable_first_node_check", false),
        enableScrollNodeAnchor: boolDefaultGetterUtil.getDefaultBool("docx_enable_scroll_node_anchor", false) || docxVirtualLayoutConfig.isMemoryRecycle(),
        isSSR: p,
        scroller: a,
        layoutNodeConfigs: i,
        trackerStoreSize: o ?? 10,
        onBufferChanged: this.handleBufferChangeEvent.bind(this),
        onViewportChanged: this.handleViewportChangeEvent.bind(this),
        onActiveChanged: this.handleActiveChangeEvent.bind(this),
        onPaint: this.handlePaint,
        onPostPaint: this.handlePostPaint,
        onScrollStart: this.handleScrollStart,
        onScrollEnd: this.handleScrollEnd,
        getRemainActiveNodes: this.getRemainActiveNodes,
        onLockNodeHeight: e => this.nodeHeightLocker.lock(e),
        onUnlockNodeHeight: e => this.nodeHeightLocker.unlock(e),
        onPostDidChangeNodes: this.handlePostDidChangeNodes,
        onViewportLocked: this.handleViewportLocked(m),
        onError: this.handleReportMessage("error", m),
        onWarning: this.handleReportMessage("warning", m),
        renderLineCacheStrategy: renderCacheManager.renderCacheManager.getOrCreateDOMCache(this.renderLineCacheId),
        onInit: this.handleReconcilerInit,
        scheduler: docxTaskSchedulerUtilities.getFlowWebPlatformUtils() && !v ? docxTaskSchedulerUtilities.taskSchedulerInstance.scheduler : undefined,
        onSetScrollTop: this.onSetScrollTop,
        cacheOptions: {
          cacheCountLimit: l,
          needStore: e => {
            let i = this.getBlockStructByBlockId(e);
            return !i || !docxVirtualLayoutConfig.getVirtualConfig.has(i.type);
          }
        },
        onPerfMatricUpdate: function () {
          let e = {};
          let i = debounceUtilWrapper.createDebounce(() => {
            if (!(Object.keys(e).length <= 0)) {
              try {
                Object.keys(e).forEach(i => {
                  let r = e[i];
                  let n = JSON.stringify({
                    durations: r.map(e => e.duration),
                    count: r.length
                  });
                  docxEventCollector.docEventCollector("doc_bug_track_dev", {
                    action: i,
                    info: n
                  });
                });
              } catch (e) {} finally {
                e = {};
              }
            }
          }, 3000);
          return r => {
            let {
              duration: n,
              type: o
            } = r;
            if (docxFeatureFlags.isDocsMoreEvents()) {
              e[o] = e[o] || [];
              e[o].push({
                duration: n,
                type: o
              });
              i();
            }
          };
        }(),
        useResizeObserverLock: P
      });
      if (P) {
        this.getReconciler().initViewportLocker();
      }
      if (X()) {
        let e = docComponentStubConfig.StatusManager.getCurrentStatus();
        this.handleThermalStateChange(e);
        mediaEnvironmentStubs.stubEventEmitter.on(docComponentStubConfig.emptyObject_1.MOBILE.COMMON.THERMAL_STATE, this.handleThermalStateChange);
      }
      this.reconcilerTrackerInjectUtils();
      this.scroller = a;
      z("mainLayoutManager start finish");
    }
    register(e, i) {
      this.subLayoutManagerInfo.set(e, i);
    }
    unregister(e) {
      this.subLayoutManagerInfo.delete(e);
    }
    addAdditionalActiveBlock(e) {
      this.reconciler.addAdditionalActiveBlock(e);
    }
    removeAdditionalActiveBlock(e) {
      this.reconciler.removeAdditionalActiveBlock(e);
    }
    isBlockViewportEntered(e) {
      return this.viewportBlockIds.has(e);
    }
    isBlockBufferEntered(e) {
      return this.bufferBlockIds.has(e) || this.viewportBlockIds.has(e);
    }
    getBlockViewByBlockIdFromSubLayoutManager(e, i) {
      let r = this.subLayoutManagerInfo.get(i);
      if (r) {
        let i = r.viewService.get();
        if (i) {
          let r = i.getBlockViewByBlockId(e);
          if (r) {
            return r;
          }
        }
      }
    }
    getBlockStructByBlockIdFromSubLayoutManager(e, i) {
      let r = this.subLayoutManagerInfo.get(i);
      if (r) {
        let {
          structService: i
        } = r;
        if (i) {
          let r = i.getBlockStructByBlockId(e);
          if (r) {
            return r;
          }
        }
      }
    }
    getBlockViewByBlockId(e) {
      for (let [i] of this.subLayoutManagerInfo) {
        let r = this.getBlockViewByBlockIdFromSubLayoutManager(e, i);
        if (r) {
          return r;
        }
      }
      z(`warning: can not find blockView from id: ${e}`);
    }
    getBlockStructByBlockId(e) {
      for (let [i] of this.subLayoutManagerInfo) {
        let r = this.getBlockStructByBlockIdFromSubLayoutManager(e, i);
        if (r) {
          return r;
        }
      }
      z(`warning: can not find blockModel from id: ${e}`);
    }
    getRecordByBlockId(e) {
      for (let [, r] of this.subLayoutManagerInfo) {
        let {
          structService: n
        } = r;
        let o = n.getBlockStructByBlockId(e)?.record;
        if (o) {
          return o;
        }
      }
      z(`warning: can not find record from id: ${e}`);
    }
    getSubLayoutManagerById(e) {
      for (let [i] of this.subLayoutManagerInfo) {
        if (this.getBlockStructByBlockIdFromSubLayoutManager(e, i) || this.getBlockViewByBlockIdFromSubLayoutManager(e, i)) {
          return i;
        }
      }
      z(`error: can not find subLayoutManager from id: ${e}`);
    }
    dispatchEventToSubManager(e, i, r) {
      let n = this.getSubLayoutManagerById(r);
      if (n) {
        var o;
        if ((o = this.subLayoutManagerInfo.get(n)) !== null && o !== undefined) {
          o.eventEmitter.dispatch(e, i, r);
        }
      }
    }
    classifyLayoutManagerByIds(e) {
      let i = new Map();
      for (let r of e) {
        let e = this.getSubLayoutManagerById(r);
        if (e) {
          let n = i.get(e);
          if (n) {
            n.push(r);
          } else {
            i.set(e, [r]);
          }
        }
      }
      return i;
    }
    handleBufferChangeEvent(e) {
      this.bufferBlockIds = new Set(this.reconciler.getBufferNodes());
      this.subLayoutManagerInfo.forEach(e => e.notifyUpdateActiveBlockIds());
      this.handleChangedEvent("buffer", e);
    }
    handleActiveChangeEvent() {
      this.subLayoutManagerInfo.forEach(e => e.notifyUpdateActiveBlockIds());
    }
    handleViewportChangeEvent(e) {
      this.viewportBlockIds = new Set(this.reconciler.getViewportNodes());
      this.handleChangedEvent("viewport", e);
    }
    getSelection() {
      return [...this.subLayoutManagerInfo.values()].reduce((e, i) => {
        e.push(...i.selectionAPI.getSelection());
        return e;
      }, []);
    }
    constructor() {
      var e;
      var i;
      Z(this, "enableVirtualRender", undefined);
      Z(this, "reconciler", new bearVirtualLayoutReconciler.Reconciler({
        disableSlice: browserEnvironmentDetectionUtils.browserDetector.isMobile,
        viewportOptions: browserEnvironmentDetectionUtils.browserDetector.isMobile ? {
          scrollInterval: 150
        } : undefined,
        enableNewRetain: boolDefaultGetterUtil.getDefaultBool("docx_virtual_scroll_retain", false),
        fg: docxVirtualLayoutConfig.isAnchorOptimized()
      }));
      Z(this, "viewportBlockIds", new Set());
      Z(this, "bufferBlockIds", new Set());
      Z(this, "errorHandle", undefined);
      Z(this, "reportedMessageSet", new Set());
      Z(this, "nodeHeightLocker", new C());
      Z(this, "scroller", undefined);
      Z(this, "renderLineCacheId", renderCacheManager.renderCacheManager.getCacheId());
      Z(this, "isStart", false);
      Z(this, "_isDestory", false);
      Z(this, "subLayoutManagerInfo", new Map());
      Z(this, "skipErrorId", {});
      e = "structService";
      if (i = d) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      Z(this, "getReconciler", () => this.reconciler);
      Z(this, "getScroller", () => this.scroller);
      Z(this, "handleThermalStateChange", e => {
        let r = docComponentStubConfig.getEmptyObject_1();
        this.reconciler.viewport.updateOptions({
          doNotUpdateViewportInScrolling: e >= (r.noUpdateInScrollLevel ?? 2)
        });
      });
      Z(this, "handleReconcilerInit", () => {
        this.subLayoutManagerInfo.forEach(e => e.notifyUpdateActiveBlockIds());
        this.reconcilerTrackerInjectUtils();
      });
      Z(this, "getEnableVirtualRender", () => this.enableVirtualRender);
      Z(this, "isSingleSubLayoutManager", () => this.subLayoutManagerInfo.size === 1);
      Z(this, "handleReportMessage", (e, i) => (e, i, r) => {
        if (r == null ? undefined : r.nodeId) {
          r.blockType = this.getBlockStructByBlockId(r.nodeId)?.type;
        }
        this.errorHandle.aggregationError(e, i, r);
        if (r != null) {
          r.disableConsoleLog;
        }
      });
      Z(this, "getBufferBlocks", () => this.filterUnExistNode(this.reconciler.getBufferNodes()));
      Z(this, "getViewportBlocks", () => this.filterUnExistNode(this.reconciler.getViewportNodes()));
      Z(this, "throttleReportViewportLock", debounceUtilWrapper.createDebounce((e, i) => {
        var o;
        var s;
        var a;
        let c = this.reconciler?.tracker;
        if (c) {
          a = {
            message: "viewport lock happening!",
            source: "onViewportLocked",
            scrollTrackerLogSize: ((o = c.getScrollTrackerLog) === null || o === undefined ? undefined : o.call(c)?.length) || 0,
            trackerLogSize: ((s = c.getTrackerLog) === null || s === undefined ? undefined : s.call(c, false)?.length) || 0,
            ...e
          };
          docxEventCollector.wrappedCollector("docx_virtual_render_info_dev", a);
          i();
        }
      }, 200, {
        leading: false
      }));
      Z(this, "filterUnExistNode", e => e.filter(e => this.getBlockViewByBlockId(e)));
      Z(this, "callViewChangedEvent", (e, i) => {
        var r;
        var n;
        if ((n = this.getBlockViewByBlockId(i)) !== null && n !== undefined && (r = n[e]) !== null && r !== undefined) {
          r.call(n);
        }
      });
      Z(this, "handleChangedEvent", (e, i) => {
        let {
          enterNodes: r,
          leaveNodes: n,
          viewportNodes: o
        } = i;
        let l = this.filterUnExistNode(r);
        let s = this.filterUnExistNode(n);
        let a = this.filterUnExistNode(o);
        let {
          enterEvent: c,
          leaveEvent: d,
          changeEvent: u
        } = renderEventUtils.getRenderEventMap(e);
        let h = [];
        l.forEach(e => {
          this.callViewChangedEvent(c, e);
          this.dispatchEventToSubManager(c, h, e);
        });
        s.forEach(e => {
          this.callViewChangedEvent(d, e);
          this.dispatchEventToSubManager(d, h, e);
        });
        let f = this.classifyLayoutManagerByIds(l);
        let g = this.classifyLayoutManagerByIds(s);
        let p = this.classifyLayoutManagerByIds(a);
        for (let [e, i] of this.subLayoutManagerInfo) {
          i.eventEmitter.dispatch(u, {
            enterBlocks: f.get(e) || [],
            leaveBlocks: g.get(e) || [],
            viewportBlocks: p.get(e) || []
          });
        }
      });
      Z(this, "handlePostPaint", () => {
        this.subLayoutManagerInfo.forEach(e => e.eventEmitter.dispatch(renderEventConstants.postPaint));
      });
      Z(this, "handlePaint", e => {
        var i;
        this.subLayoutManagerInfo.forEach(e => e.eventEmitter.dispatch(renderEventConstants.paint));
        this.classifyLayoutManagerByIds(e.layoutRecalculatedNodes).forEach((e, i) => {
          var r;
          if ((r = this.subLayoutManagerInfo.get(i)) !== null && r !== undefined) {
            r.eventEmitter.dispatch(renderEventConstants.postLayoutEvent, {
              layoutRecalculatedNodes: e
            });
          }
        });
        e.layoutRecalculatedNodes.forEach(e => {
          this.dispatchEventToSubManager(renderEventConstants.layoutRecalculated, e, e);
        });
        let r = [...e.layoutRecalculatedNodes, ...e.topToRootRecalculatedNodes];
        let n = this.classifyLayoutManagerByIds(r);
        n.forEach((i, r) => {
          var n;
          if ((n = this.subLayoutManagerInfo.get(r)) !== null && n !== undefined) {
            n.topChangedBlockIdsSubject.next({
              ids: [...i],
              fromLock: e.viewportLock
            });
          }
        });
        docxEventCollector.docEventCollector("print_native_log", {
          action: "handlePaint",
          subLayoutManagerAndChangeIds: n
        });
        if (!e.isScrollPaint && (i = this.errorHandle) !== null && i !== undefined) {
          i.reportTea();
        }
      });
      Z(this, "handleScrollEnd", () => {
        var e;
        O.handleScrollEnd();
        let i = this.classifyLayoutManagerByIds(this.getViewportBlocks());
        let r = this.classifyLayoutManagerByIds(this.getBufferBlocks());
        for (let [e, n] of this.subLayoutManagerInfo) {
          n.eventEmitter.dispatch(renderEventConstants.scrollEnd, {
            viewportBlocks: i.get(e) || [],
            bufferBlocks: r.get(e) || []
          });
        }
        if ((e = this.errorHandle) !== null && e !== undefined) {
          e.reportTea();
        }
      });
      Z(this, "handleViewportLocked", e => {
        let i = {
          from: e,
          lockedCount: 0
        };
        return () => {
          [...this.subLayoutManagerInfo.values()].forEach(e => e.eventEmitter.dispatch(renderEventConstants.viewportLocked));
          i.lockedCount += 1;
          this.throttleReportViewportLock(i, () => {
            i.lockedCount = 0;
          });
        };
      });
      Z(this, "handleScrollStart", () => {
        O.handleScrollStart();
        [...this.subLayoutManagerInfo.values()].forEach(e => e.eventEmitter.dispatch(renderEventConstants.scrollStart));
      });
      Z(this, "onSetScrollTop", e => {
        [...this.subLayoutManagerInfo.values()].forEach(i => i.onSetScrollTopSubject.next({
          from: e.from,
          scrollTop: e.scrollTop
        }));
      });
      Z(this, "getRemainActiveNodes", memoizeFunction.memoize(() => {
        let e = [];
        this.getSelection().forEach(i => {
          if (i.type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
            e.push(i.id);
          } else {
            let n = this.getSubLayoutManagerById(i.id);
            let o = n && this.subLayoutManagerInfo.get(n)?.structService;
            let l = o && o.getBlockStructByBlockId(i.id);
            if (l) {
              l.traverse(i => {
                e.push(i.id);
                return multiTextSelectionHandler.getContainerTypes().includes(i.type);
              });
            }
          }
        });
        return e;
      }, () => this.getSelection().map(e => e.id).toString()));
      Z(this, "reconcilerTrackerInjectUtils", () => {
        var e;
        if ((e = this.reconciler.tracker) !== null && e !== undefined) {
          e.injectUtils({
            getBlockType: e => {
              try {
                let r = this.getBlockStructByBlockId(e)?.type;
                if (!r) {
                  if (numberStringUtils.startsWithNumber(zIndexConstants.zIndexMax, e)) {
                    return "split";
                  }
                  if (numberStringUtils.startsWithNumber(zIndexConstants.zIndexMin, e)) {
                    return "table_row";
                  }
                }
                if (!r) {
                  for (let [, i] of this.subLayoutManagerInfo) {
                    let {
                      structService: r
                    } = i;
                    let n = r.getBlockStructByBlockId(e);
                    if (n) {
                      return n.snapshot.type;
                    }
                  }
                }
                return r || "";
              } catch (e) {
                z("getBlockType error");
              }
            },
            getRecordId: e => {
              try {
                return this.getRecordByBlockId(e)?.id || "";
              } catch (e) {
                z("getRecordId error");
              }
            }
          });
        }
      });
      Z(this, "handlePostDidChangeNodes", e => {
        [...this.subLayoutManagerInfo.values()].forEach(i => {
          i.postDidChangeNodesSubject.next(e);
        });
      });
      z("mainLayoutManager constructor");
    }
  }).prototype, o = "structService", l = [docxEditorCore.BLOCK_STRUCT_TOKEN], a = {}, Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), d = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a, c)) || c;
  function q() {
    docxEditorCore.registerProviders([G]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(mainLayoutManagerProvider.mainLayoutManager);
      e.init();
      return () => {
        e.destroy();
      };
    });
  }
  require.d(exports, {
    initMainLayoutManager: function () {
      return q;
    }
  });
}