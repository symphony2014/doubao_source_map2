// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ScrollPerfCollector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 255986
         */
module.exports = function (module, exports, require) {
  var n;
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docAnalyticsMetrics = require("doc-analytics-metrics") /*id: 121662*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var docxPerformanceStageCollector = require("docx-performance-stage-collector") /*id: 753948*/;
  function d(e) {
    return typeof e == "number" && isFinite(e);
  }
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var docxVirtualLayoutConfig = require("docx-virtual-layout-config") /*id: 173628*/;
  function v(e, i, r) {
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
  let {
    isMobile: p
  } = browserEnvironmentDetectionUtils.browserDetector;
  let {
    renderLimitTime: g
  } = docxVirtualLayoutConfig.isNextFinderV2();
  let b = 1000 / 60;
  let E = 50 + 1000 / 60;
  let S = 117 + 1000 / 60;
  let _ = 417 + 1000 / 60;
  (n = k || {})[n.UP = 0] = "UP";
  n[n.DOWN = 1] = "DOWN";
  var k = n;
  class y {
    get layoutManager() {
      return this.blockManager.layoutManager;
    }
    get reconciler() {
      return this.layoutManager.getReconciler();
    }
    get tracker() {
      return this.reconciler.tracker;
    }
    get scrollTop() {
      if (this.scroller instanceof Document) {
        return window.scrollY;
      } else {
        return this.scroller.scrollTop;
      }
    }
    addFrameMessage(e) {
      let i = this.reconciler.getViewportNodes();
      let r = {
        duration: e,
        viewportNodes: {}
      };
      for (let e of i) {
        let i = syncedReferenceBlockUtils.getBlockModelByBlockIdWithSynced(this.blockManager, e);
        if (i) {
          r.viewportNodes[i.type] ||= {
            type: i.type,
            count: 0,
            renderedCount: 0
          };
          r.viewportNodes[i.type].count++;
          if (this.reconciler.cacheLines.has(e)) {
            r.viewportNodes[i.type].renderedCount++;
          }
        }
      }
      this.frameMessages.push(r);
    }
    genScrollStartMessage() {
      let {
        container: e,
        scrollTop: i
      } = this;
      let r = e.offsetHeight;
      let n = i + window.innerHeight;
      Object.assign(this.scrollLog, {
        scroll_top: d(i) ? i : -1,
        scroll_bottom: d(n) ? n : -1,
        document_height: d(r) ? r : -1,
        window_width: window.innerWidth
      });
    }
    collectLog() {
      var e;
      this.genScrollEndMessage();
      let {
        avgRenderCostWithType: i,
        ...r
      } = this.genPaintLog();
      let n = {
        ...this.scrollLog,
        ...docAnalyticsMetrics.getDocMetrics(this.blockManager, this.commentModule),
        ...r,
        scroll_miss_frame_duration: this.maxMissFrameDuration,
        scrollStartTime: this.startTime - this.docxOpenTime,
        scrollEndTime: this.endTime - this.docxOpenTime,
        fg: JSON.stringify({
          comment_refactor_fe: docxCommentFeatureFlags.isCommentConfigAvailable(),
          viewport_lock_comment_update: docxCommentFeatureFlags.isCommentPerfEnabled(),
          horizontalRenderEnable: docxVirtualLayoutConfig.isAnchorLockLong()
        }),
        scroll_from: this.scrollFromDocxMode,
        block_profile: JSON.stringify({
          ...i
        }),
        temp_info: JSON.stringify({
          maxLockRate: this.reconciler.tempCollectMaxLockRate()
        }),
        viewportNodes: JSON.stringify(this.getViewportNodeInfo()),
        ...(((e = this.scrollCollectorExtraInfo) === null || e === undefined ? undefined : e.getCollectorExtraInfo()) || {})
      };
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_performance_scroll_dev", n);
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        browserEnvironmentDetectionUtils.browserDetector.isIPad;
      }
    }
    getViewportNodeInfo() {
      if (!this.blockManager || !this.reconciler) {
        return {};
      }
      let e = {};
      this.reconciler.getViewportNodes().forEach(i => {
        let r = syncedReferenceBlockUtils.getBlockModelByBlockIdWithSynced(this.blockManager, i);
        if (r) {
          e[i] = r.type;
        } else {
          e[i] = "unknown";
        }
      });
      return e;
    }
    genScrollEndMessage() {
      let {
        scrollTop: e,
        scrollLog: i,
        frameMessages: r,
        endTime: n,
        startTime: o
      } = this;
      let l = e - i.scroll_top;
      let s = l >= 0 ? k.DOWN : k.UP;
      let a = r.length;
      let c = n - o;
      let [d, u, h] = [0, 0, 0];
      let [f, m] = [0, 0];
      r.forEach(e => {
        let {
          duration: i,
          viewportNodes: r
        } = e;
        Object.values(r).forEach(e => {
          let {
            count: i,
            renderedCount: r
          } = e;
          f += i;
          m += r;
        });
        if (i > E) {
          d++;
          if (i > S) {
            u++;
            if (i > _) {
              h++;
            }
          }
        }
      });
      Object.assign(this.scrollLog, {
        direction: s,
        duration: c,
        distance: Math.abs(l),
        frame_count: a,
        scroll_avg_fps: a && c ? Math.round(a / (c / 1000)) : 0,
        slight_count: d,
        medium_count: u,
        serious_count: h,
        avg_render_rate: m / f,
        scroll_start_timestamp: o,
        scroll_end_timestamp: n
      });
    }
    genPaintLog() {
      let {
        eachPaintMessages: e
      } = this;
      let i = new Map();
      let r = [];
      let n = 0;
      let o = 0;
      let l = 0;
      let s = 0;
      let a = 0;
      let c = 0;
      let d = [];
      e.forEach(e => {
        let {
          renderCount: u,
          layoutCount: h,
          renderCost: f,
          paintCost: m,
          blockCosts: v
        } = e;
        if (!n && u) {
          n = 1;
        }
        o = Math.max(o, u);
        l += u;
        s = Math.max(s, h);
        a = Math.max(a, m);
        if (f >= g) {
          r.push(u);
        }
        if (u) {
          c++;
        }
        d.push(m);
        i = new Map([...i, ...v]);
      });
      let u = this.genAvgRenderCost(i);
      let h = e.length;
      let f = r.reduce((e, i) => e + i, 0);
      return {
        paint_has_render: n,
        paint_max_render_count: o,
        paint_total_rendered_count: l,
        paint_max_layout_count: s,
        paint_max_paint_time: a,
        paint_times: h,
        avg_render_count_each_frame: f && f / r.length,
        render_frame_rate: h && c / h,
        each_paint_cost: d,
        avgRenderCostWithType: u
      };
    }
    genAvgRenderCost(e) {
      return Object.entries(Array.from(e.entries()).reduce((e, i) => {
        let [n, o] = i;
        let {
          type: l
        } = syncedReferenceBlockUtils.getBlockModelByBlockIdWithSynced(this.blockManager, n) ?? {};
        if (l) {
          let i = `${l}_render_avg_cost`;
          e[i] ||= [0, 0];
          e[i][0] += o;
          e[i][1]++;
        }
        return e;
      }, {})).reduce((e, i) => {
        let [r, [n, o]] = i;
        e[r] = n / o;
        return e;
      }, {});
    }
    reset() {
      this.maxMissFrameDuration = 0;
      this.docxOpenTime = 0;
      this.startTime = 0;
      this.endTime = 0;
      this.prevFrameTimeStamp = 0;
      this.scrollLog = {
        direction: k.DOWN,
        duration: 0,
        distance: 0,
        scroll_top: -1,
        scroll_bottom: -1,
        document_height: -1,
        window_width: -1,
        frame_count: 0,
        scroll_avg_fps: -1,
        slight_count: 0,
        medium_count: 0,
        serious_count: 0,
        avg_render_rate: 0,
        scroll_start_timestamp: 0,
        scroll_end_timestamp: 0
      };
      this.frameMessages = [];
      this.eachPaintMessages = [];
    }
    constructor({
      scroller: e,
      container: i,
      blockManager: n,
      commentModule: l,
      scrollFromDocxMode: s
    }) {
      v(this, "scroller", undefined);
      v(this, "container", undefined);
      v(this, "blockManager", undefined);
      v(this, "commentModule", undefined);
      v(this, "maxMissFrameDuration", 0);
      v(this, "rAFId", undefined);
      v(this, "scrollLog", undefined);
      v(this, "scrollFromDocxMode", undefined);
      v(this, "frameMessages", undefined);
      v(this, "eachPaintMessages", undefined);
      v(this, "docxOpenTime", 0);
      v(this, "startTime", 0);
      v(this, "endTime", 0);
      v(this, "prevFrameTimeStamp", 0);
      v(this, "scrollCollectorExtraInfo", undefined);
      v(this, "initExtraInfoCollect", () => docxTaskSchedulerUtilities.scheduleTaskWithConfig({
        action: () => require.e("performance-monitor-scroll-collector") /*id: 71247*/.then(require.bind(require, "scroll-performance-collector") /*id: 185854*/).then(e => {
          let {
            ScrollCollectorExtraInfo: i
          } = e;
          this.scrollCollectorExtraInfo = new i({
            blockManager: this.blockManager
          });
          return this.scrollCollectorExtraInfo;
        }),
        name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
      }));
      v(this, "handleVirtualScrollStart", () => {
        var e;
        this.docxOpenTime = docxPerformanceStageCollector.DocxPerformanceStageCollector.getStartTime() ?? 0;
        this.startTime = Date.now();
        if ((e = this.scrollCollectorExtraInfo) !== null && e !== undefined) {
          e.handleScrollStart(this.startTime);
        }
        this.genScrollStartMessage();
        this.tracker.startRecordPaintContextsOnScroll();
        this.rAFId = window.requestAnimationFrame(this.runEveryFrame);
      });
      v(this, "handleVirtualScrollEnd", () => {
        var e;
        this.endTime = Date.now();
        if ((e = this.scrollCollectorExtraInfo) !== null && e !== undefined) {
          e.handleScrollEnd(this.endTime);
        }
        window.cancelAnimationFrame(this.rAFId);
        this.collectLog();
        this.tracker.stopRecordPaintContextsOnScroll();
        this.reset();
      });
      v(this, "runEveryFrame", e => {
        if (this.prevFrameTimeStamp !== 0) {
          let i = e - this.prevFrameTimeStamp;
          this.maxMissFrameDuration = Math.max(this.maxMissFrameDuration, i - b);
          this.addFrameMessage(i);
        }
        this.prevFrameTimeStamp = e;
        this.rAFId = window.requestAnimationFrame(this.runEveryFrame);
      });
      v(this, "collectEachPaint", e => {
        let i = 0;
        let r = e[e.length - 1].r;
        let n = {
          renderCount: 0,
          layoutCount: 0,
          blockCosts: new Map(),
          paintCost: 0,
          renderCost: 0,
          layoutCost: 0,
          mountCost: 0
        };
        e.forEach(e => {
          var r;
          var l;
          let s = e[bearVirtualLayoutReconciler.TrackerContextType.DID_CHANGE_NODE];
          if (s) {
            if ((r = this.scrollCollectorExtraInfo) !== null && r !== undefined) {
              r.handleChangeNodeContext(s);
            }
          }
          let a = e[bearVirtualLayoutReconciler.TrackerContextType.RENDER];
          if (a) {
            if ((l = this.scrollCollectorExtraInfo) !== null && l !== undefined) {
              l.handleRenderContext(a);
            }
            let [e, i, r] = a;
            n.renderCount += e;
            n.blockCosts = new Map([...n.blockCosts, ...i]);
            n.renderCost += r;
          }
          let c = e[bearVirtualLayoutReconciler.TrackerContextType.LAYOUT];
          if (c) {
            let [, e, i] = c[1];
            n.layoutCount += e ?? 0;
            n.layoutCost += i;
          }
          if (!i && e[bearVirtualLayoutReconciler.TrackerContextType.PAINT]) {
            i = e.r;
          }
        });
        n.paintCost = i && r ? r - i : 0;
        this.eachPaintMessages.push(n);
      });
      v(this, "bindEvents", () => {
        this.layoutManager.bindScrollStartEvent("on", this.handleVirtualScrollStart);
        this.layoutManager.bindScrollEndEvent("on", this.handleVirtualScrollEnd);
        this.tracker.bindCollectEvent("on", {
          [bearVirtualLayoutReconciler.VirtualEvent.TRACKER_EACH_PAINT]: this.collectEachPaint
        });
      });
      v(this, "destroy", () => {
        var e;
        this.layoutManager.bindScrollStartEvent("off", this.handleVirtualScrollStart);
        this.layoutManager.bindScrollEndEvent("off", this.handleVirtualScrollEnd);
        this.tracker.bindCollectEvent("off", {
          [bearVirtualLayoutReconciler.VirtualEvent.TRACKER_EACH_PAINT]: this.collectEachPaint
        });
        if ((e = this.scrollCollectorExtraInfo) !== null && e !== undefined) {
          e.destroy();
        }
        window.cancelAnimationFrame(this.rAFId);
      });
      this.scroller = p ? document : e;
      this.container = i;
      this.blockManager = n;
      this.commentModule = l;
      this.scrollFromDocxMode = s;
      this.initExtraInfoCollect();
      this.bindEvents();
      this.reset();
    }
  }
  require.d(exports, {
    ScrollPerfCollector: function () {
      return y;
    }
  });
}