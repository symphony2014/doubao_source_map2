// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initDocxScheduler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 857011
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
  var h;
  var f;
  var g;
  var p;
  var m;
  var v;
  var b;
  var y;
  var S;
  var k;
  var E;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  let R = dependencyInjectionContainer.providerName("first-screen-ssr-collect");
  var schedulerProvidersAccessor = require("scheduler-providers-accessor") /*id: 102884*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var layoutManagerToken = require("layout-manager-token") /*id: 709939*/;
  var docxResourceSchedulerProvider = require("docx-resource-scheduler-provider") /*id: 54859*/;
  function x(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function F(e, i, r) {
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
  function j(e, i, r, n, o) {
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
  let $ = dependencyInjectionContainer.Provide(docxResourceSchedulerProvider.docxSchedulerProv)((o = j((n = class {
    init() {
      this.eventEmitter.addListenerOnce(renderEventConstants.paint, this.initBlockLoadingStatus);
      this.eventEmitter.addListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
      this.isFlushed = false;
    }
    destroy() {
      this.eventEmitter.removeListener(renderEventConstants.paint, this.initBlockLoadingStatus);
      this.eventEmitter.removeListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
      clearTimeout(this.flushTimer);
      this.flushTimer = null;
      this.loadingBlockSet.clear();
      this.isFlushed = false;
    }
    onServiceDispose() {
      this.destroy();
    }
    handleFirstSlice(e) {
      let i = Object.entries(e.block_map).some(e => {
        let [i, r] = e;
        return this.loadableBlockTypes.has(r.data.type);
      });
      if (!i) {
        if (docxTaskSchedulerUtilities.taskSchedulerInstance !== null && docxTaskSchedulerUtilities.taskSchedulerInstance !== undefined) {
          docxTaskSchedulerUtilities.taskSchedulerInstance.scheduler.disableSchedule();
        }
        if (docxTaskSchedulerUtilities.taskSchedulerInstance !== null && docxTaskSchedulerUtilities.taskSchedulerInstance !== undefined) {
          docxTaskSchedulerUtilities.taskSchedulerInstance.scheduler.flushAll();
        }
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("resource_scheduler_dev", {
          action: "no_loadable_block_flush_at_once",
          timestamp: Date.now()
        });
      }
      if (i) {
        this.flushTimer = setTimeout(() => {
          this.flushAll();
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("resource_scheduler_exception_dev", {
            action: "flush_task_queue_timeout",
            isOnline: `${networkStateEventCollector.collectNetworkState()}`,
            is_visible: `${document.visibilityState}` == "visible",
            block_remain: [...this.loadingBlockSet].map(e => {
              let i = this.modelService.getBlockModelsByRecordId(e);
              if (i[0]) {
                return i[0].type;
              } else {
                return "unknown";
              }
            }).join("/")
          });
        }, 20000);
      }
    }
    onBlockReady(e) {
      if (this.loadingBlockSet.size !== 0) {
        this.loadingBlockSet.delete(e);
        if (this.loadingBlockSet.size === 0) {
          this.flushAll();
        }
      }
    }
    flushAll() {
      if (this.isFlushed) {
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("resource_scheduler_exception_dev", {
          action: "flush_multiple_times",
          block_remain: [...this.loadingBlockSet].map(e => {
            let i = this.modelService.getBlockModelsByRecordId(e);
            if (i[0]) {
              return i[0].type;
            } else {
              return "unknown";
            }
          }).join("/")
        });
      }
      this.isFlushed = true;
      if (docxTaskSchedulerUtilities.taskSchedulerInstance !== null && docxTaskSchedulerUtilities.taskSchedulerInstance !== undefined) {
        docxTaskSchedulerUtilities.taskSchedulerInstance.scheduler.flushAll();
      }
      clearTimeout(this.flushTimer);
      this.flushTimer = null;
      this.eventEmitter.removeListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
    }
    notifyCommentRendered() {}
    cancelCommentRendered() {}
    notifyBlockRendered() {}
    cancelBlockRendered() {}
    constructor() {
      F(this, "loadableBlockTypes", new Set([docBlockTypeConstants.blockTypeConstants.MINDMAP, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.WHITEBOARD]));
      F(this, "loadingBlockSet", new Set());
      x(this, "modelService", o, this);
      x(this, "eventEmitter", l, this);
      x(this, "layoutManager", s, this);
      x(this, "blockManager", a, this);
      F(this, "flushTimer", undefined);
      F(this, "isFlushed", false);
      F(this, "initBlockLoadingStatus", () => {
        this.layoutManager.getViewportBlocks().forEach(e => {
          let i = this.modelService.getBlockModelByBlockId(e);
          if (i && this.loadableBlockTypes.has(i.type)) {
            this.loadingBlockSet.add(i == null ? undefined : i.recordId);
          }
        });
        if (this.loadingBlockSet.size === 0) {
          if (docxTaskSchedulerUtilities.taskSchedulerInstance !== null && docxTaskSchedulerUtilities.taskSchedulerInstance !== undefined) {
            docxTaskSchedulerUtilities.taskSchedulerInstance.scheduler.disableSchedule();
          }
          this.flushAll();
        }
      });
      F(this, "handleBufferChanged", e => {
        let {
          leaveBlocks: i
        } = e;
        if (this.loadingBlockSet.size !== 0) {
          i.forEach(e => {
            let {
              recordId: i
            } = this.modelService.getBlockModelByBlockId(e);
            this.loadingBlockSet.delete(i);
          });
          if (this.loadingBlockSet.size === 0) {
            this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("resource_scheduler_dev", {
              action: "no_loadable_block_after_scroll_flush_at_once",
              timestamp: Date.now()
            });
            this.eventEmitter.removeListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
            this.flushAll();
          }
        }
      });
    }
  }).prototype, "modelService", [docxEditorCore.MODEL_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), l = j(n.prototype, "eventEmitter", [eventEmitterProviderNameExport.eventEmitterProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), s = j(n.prototype, "layoutManager", [layoutManagerToken.layoutManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), a = j(n.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), n)) || n;
  let H = dependencyInjectionContainer.Provide(docxResourceSchedulerProvider.docxSchedulerProv)(c = class {
    cancelBlockRendered() {}
    notifyCommentRendered() {}
    cancelCommentRendered() {}
    notifyBlockRendered() {}
    init() {}
    destroy() {}
    handleFirstSlice(e) {}
    onBlockReady(e) {}
  }) || c;
  function U(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function W(e, i, r) {
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
  function V(e, i, r, n, o) {
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
  let Z = require("bool-default-getter-util") /*id: 855627*/.getDefaultBool("ccm.docx.resource_scheduler_add_block", false) ? [docBlockTypeConstants.blockTypeConstants.POLL, docBlockTypeConstants.blockTypeConstants.DIAGRAM, docBlockTypeConstants.blockTypeConstants.FILE, docBlockTypeConstants.blockTypeConstants.WHITEBOARD, docBlockTypeConstants.blockTypeConstants.ISV, docBlockTypeConstants.blockTypeConstants.MINDMAP, docBlockTypeConstants.blockTypeConstants.OKRX, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.CALENDAR_EVENT, docBlockTypeConstants.blockTypeConstants.MEEGO, docBlockTypeConstants.blockTypeConstants.AGENDA] : [];
  let z = dependencyInjectionContainer.Provide(docxResourceSchedulerProvider.docxSchedulerProv)((u = V((d = class {
    init() {
      this.eventEmitter.addListenerOnce(renderEventConstants.paint, this.initBlockLoadingStatus);
      this.eventEmitter.addListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
      let e = this.configService.get("isMain");
      let i = this.configService.get("isPreview");
      if (e) {
        docxTaskSchedulerUtilities.taskSchedulerInstance.scheduler.disableIdleTask();
        this.waitForCommentRenderTask = docxTaskSchedulerUtilities.createManualResolvePromise("docx.comment");
        this.waitForBlockRenderTask = docxTaskSchedulerUtilities.createManualResolvePromise("docx.firstScreenBlockRender");
      }
      if (i) {
        docxTaskSchedulerUtilities.taskSchedulerInstance.scheduler.enableIdleTask();
      }
    }
    destroy() {
      var e;
      var i;
      this.eventEmitter.removeListener(renderEventConstants.paint, this.initBlockLoadingStatus);
      this.eventEmitter.removeListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
      this.loadingBlockSet.clear();
      if ((e = this.waitForBlockRenderTask) !== null && e !== undefined) {
        e.cancel();
      }
      if ((i = this.waitForCommentRenderTask) !== null && i !== undefined) {
        i.cancel();
      }
      this.cancelCommentRendered();
      if (this.configService.get("isMain")) {
        docxTaskSchedulerUtilities.taskSchedulerInstance.scheduler.disableIdleTask();
      }
    }
    onServiceDispose() {
      this.destroy();
    }
    notifyCommentRendered() {
      var e;
      var i;
      if (!this.waitForCommentRenderTask && this.configService.get("isMain")) {
        if ((i = docxTaskSchedulerUtilities.taskSchedulerInstance.log) !== null && i !== undefined) {
          i.call(docxTaskSchedulerUtilities.taskSchedulerInstance, "comment_task_notifyFinish_too_early", {
            extraParams: {
              version: 2
            }
          });
        }
      }
      if ((e = this.waitForCommentRenderTask) !== null && e !== undefined) {
        e.notifyFinish();
      }
    }
    cancelCommentRendered() {
      var e;
      if ((e = this.waitForCommentRenderTask) !== null && e !== undefined) {
        e.cancel();
      }
    }
    notifyBlockRendered() {
      var e;
      var i;
      if (!this.waitForBlockRenderTask && (i = docxTaskSchedulerUtilities.taskSchedulerInstance.log) !== null && i !== undefined) {
        i.call(docxTaskSchedulerUtilities.taskSchedulerInstance, "block_task_notifyFinish_too_early", {
          extraParams: {
            version: 2
          }
        });
      }
      if ((e = this.waitForBlockRenderTask) !== null && e !== undefined) {
        e.notifyFinish();
      }
    }
    cancelBlockRendered() {
      var e;
      if ((e = this.waitForBlockRenderTask) !== null && e !== undefined) {
        e.cancel();
      }
    }
    handleFirstSlice(e) {
      if (!Object.entries(e.block_map).some(e => {
        let [i, r] = e;
        return this.loadableBlockTypes.has(r.data.type);
      })) {
        this.notifyBlockRendered();
      }
    }
    onBlockReady(e) {
      if (this.loadingBlockSet.size !== 0 && (this.loadingBlockSet.delete(e), this.loadingBlockSet.size === 0)) {
        var i;
        if ((i = docxTaskSchedulerUtilities.taskSchedulerInstance.log) !== null && i !== undefined) {
          i.call(docxTaskSchedulerUtilities.taskSchedulerInstance, "all_block_ready", {
            extraParams: {
              version: 2
            }
          });
        }
        this.notifyBlockRendered();
      }
    }
    constructor() {
      W(this, "loadableBlockTypes", new Set([docBlockTypeConstants.blockTypeConstants.MINDMAP, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE, docBlockTypeConstants.blockTypeConstants.TASK_LIST, ...Z]));
      W(this, "loadingBlockSet", new Set());
      U(this, "modelService", u, this);
      U(this, "eventEmitter", h, this);
      U(this, "configService", f, this);
      U(this, "layoutManager", g, this);
      W(this, "waitForBlockRenderTask", undefined);
      W(this, "waitForCommentRenderTask", undefined);
      W(this, "initBlockLoadingStatus", () => {
        this.layoutManager.getViewportBlocks().forEach(e => {
          var r;
          let n = this.modelService.getBlockModelByBlockId(e);
          if (n && this.loadableBlockTypes.has(n == null ? undefined : (r = n.record) === null || r === undefined ? undefined : r.snapshot?.type)) {
            this.loadingBlockSet.add(n == null ? undefined : n.recordId);
          }
        });
        if (this.loadingBlockSet.size === 0) {
          this.notifyBlockRendered();
        }
      });
      W(this, "handleBufferChanged", e => {
        let {
          leaveBlocks: i
        } = e;
        if (this.loadingBlockSet.size !== 0 && (i.forEach(e => {
          let {
            recordId: i
          } = this.modelService.getBlockModelByBlockId(e);
          this.loadingBlockSet.delete(i);
        }), this.loadingBlockSet.size === 0)) {
          var r;
          if ((r = docxTaskSchedulerUtilities.taskSchedulerInstance.log) !== null && r !== undefined) {
            r.call(docxTaskSchedulerUtilities.taskSchedulerInstance, "no_loadable_block_after_scroll_flush_at_once", {
              extraParams: {
                version: 2
              }
            });
          }
          this.eventEmitter.removeListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
          this.notifyBlockRendered();
        }
      });
    }
  }).prototype, "modelService", [docxEditorCore.MODEL_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), h = V(d.prototype, "eventEmitter", [eventEmitterProviderNameExport.eventEmitterProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), f = V(d.prototype, "configService", [docxEditorCore.CONFIG_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), g = V(d.prototype, "layoutManager", [layoutManagerToken.layoutManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), d)) || d;
  var loadableBlockSchedulerProvider = require("loadable-block-scheduler-provider") /*id: 809759*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var blockMacroUtils = require("block-macro-utils") /*id: 761509*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var globalConfigGetters = require("global-config-getters") /*id: 47815*/;
  var changeSourceConstants = require("change-source-constants") /*id: 363583*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var docBlockStatusConstants = require("doc-block-status-constants") /*id: 870173*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var docxSsrSchedulerConfig = require("docx-ssr-scheduler-config") /*id: 174298*/;
  let es = "DOCX_BLOCK_SSR_TTU_DURATION";
  function ea() {
    return function () {
      let e;
      try {
        e = JSON.parse(localStorage.getItem(es) || "{}");
      } catch (i) {
        docxSsrSchedulerConfig.trackSsrEvent("parse_duration_fail", {
          err_msg: i.message
        });
        e = {};
      }
      return e;
    }();
  }
  function ec(e, i, r) {
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
  let ed = new class {
    shouldRequest(e) {
      if (!this.supportFilterTypes.includes(e)) {
        return true;
      }
      let i = ea()[e];
      if (i == null || !i.length) {
        return false;
      }
      {
        let n = this.blockSSRConfig.limit_info?.[e] || Infinity;
        return i.some(e => e > n);
      }
    }
    constructor() {
      ec(this, "blockSSRConfig", docxSsrSchedulerConfig.getSsrConfig());
      ec(this, "supportFilterTypes", [docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.WHITEBOARD]);
      ec(this, "handleBlockLoadEnd", e => {
        let {
          type: i,
          ttu_duration: r
        } = e;
        if (!this.supportFilterTypes.includes(i) || r === undefined) {
          return;
        }
        let n = ea()[i] || [];
        n.push(r);
        (function (e, i) {
          let r = ea();
          let n = [...i];
          if (n.length > 10) {
            n.shift();
          }
          let o = {
            ...r,
            [e]: n.slice(0, 10)
          };
          localStorage.setItem(es, JSON.stringify(o));
        })(i, n);
      });
      blockLoadPerformanceTracker.BlockLoadPerformanceTracker.onBlockLoadEnd(this.handleBlockLoadEnd);
    }
  }();
  function eu(e) {
    return {
      id: e.id,
      type: e.data.type,
      version: e.version,
      parent_id: e.data.parent_id
    };
  }
  function eh(e) {
    return {
      ...eu(e),
      token: e.data.token || ""
    };
  }
  function ef(e) {
    return {
      ...eu(e),
      token: e.data.token || "",
      width: e.data.width,
      height: e.data.height
    };
  }
  class eg {
    generate(e) {
      if (this.customGenerateConfig[e.data.type]) {
        return this.customGenerateConfig[e.data.type](e);
      } else {
        return eu(e);
      }
    }
    constructor() {
      var e;
      var i;
      var r;
      i = undefined;
      if ((e = typeof (r = function (e, i) {
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
      }(e = "customGenerateConfig", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
      this.customGenerateConfig = {
        [docBlockTypeConstants.blockTypeConstants.SHEET]: eh,
        [docBlockTypeConstants.blockTypeConstants.WHITEBOARD]: ef
      };
    }
  }
  var docxSsrDataScheduler = require("docx-ssr-data-scheduler") /*id: 456291*/;
  function em(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function ev(e, i, r) {
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
  function eb(e, i, r, n, o) {
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
  p = dependencyInjectionContainer.Provide(loadableBlockSchedulerProvider.schedulerProvider);
  m = dependencyInjectionContainer.Optional();
  v = dependencyInjectionContainer.Optional();
  let ey = p((y = eb((b = class {
    get isDocxH5SSR() {
      return changeSourceConstants.isH5Browser && window.ssrInfo?.isDocxSSR;
    }
    init() {
      var r;
      var n;
      if (!this.isBlockSSRSceneEnable() && !this.isDocxH5SSR) {
        return;
      }
      let o = globalConfigGetters.getSpaceApiConfig()?.length > 0;
      let l = ((r = window) === null || r === undefined ? undefined : r.scm?.branch) || "master";
      if (!o) {
        this.log("no_request_server");
        return;
      }
      if (!this.isEnableBlockSSR()) {
        return;
      }
      this.ssrDataManager.setConfig({
        ssrConfig: docxSsrSchedulerConfig.getSsrConfig(),
        log: this.log,
        requestCommonParams: {
          token: docTokenHelperUtils.resolveDocToken(),
          options: {
            branch: l,
            biz: this.configService.get("isInWiki") ? "wiki" : "docx"
          }
        }
      });
      this.sliceAfterSub = (n = this.lazyRecordStatus) === null || n === undefined ? undefined : n.applySliceAfter$.subscribe(this.onSliceReponse);
      this.changeSub = this.dataService.change$.subscribe(this.onRecordChange);
      let s = this.dataService.getRecordMap();
      if (s.size) {
        let e = {};
        for (let [i, r] of s) {
          e[i] = {
            id: i,
            data: r.snapshot
          };
        }
        this.prefetchBlockSSR({
          clientvar: {
            block_map: e
          }
        });
      }
    }
    waitForStaticBlock(e) {
      let {
        snapshot: i
      } = this.dataService.getRecordByRecordId(e) || {};
      if (this.blockSSRFetchStatus.has(e) || !i) {
        return Promise.resolve({
          ssrData: "",
          recordId: e
        });
      }
      let r = this.getValidBlockInfo({
        id: e,
        data: {
          ...i
        }
      });
      if (r) {
        return this.ssrDataManager.waitForStaticBlock(r);
      } else {
        return Promise.resolve({
          ssrData: "",
          recordId: e
        });
      }
    }
    onBlockReady(e) {
      this.ssrDataManager.removeData(e);
      this.blockSSRFetchStatus.set(e, docBlockStatusConstants.blockStatusConstants.DONE);
    }
    getValidBlockInfo(e) {
      let {
        data: i
      } = e;
      if (this.isEnableBlockSSR() && this.needToCollectBlockType.includes(i.type) && this.checkShouldFetchSSR(e) && ed.shouldRequest(i.type)) {
        return this.requestInfoGenerator.generate(e);
      }
    }
    colletBlockDomFromSSRBox(e) {
      if (blockMacroUtils.blockTypes.has(e.type)) {
        let i = document.querySelector(`${docxEditorConstantsConfig.ssrBoxSelector} [data-record-id="${e.recordId}"]`);
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile && !i) {
          i = document.querySelector(`${docxEditorConstantsConfig.fakeCacheBoxSelector} [data-record-id="${e.recordId}"]`);
        }
        let r = i == null ? undefined : i.children[0];
        let n = function (e, i) {
          switch (i || (e == null ? undefined : e.dataset.blockType)) {
            case docBlockTypeConstants.blockTypeConstants.SHEET:
            case docBlockTypeConstants.blockTypeConstants.ISV:
              return (e == null ? undefined : e.querySelector(".docx-block-loading")) || !!(e == null ? undefined : e.querySelector(".block-ssr-fallback")) || (e == null ? undefined : e.classList.contains("block-ssr-fallback"));
            default:
              if (e == null) {
                return undefined;
              } else {
                return e.classList.contains("block-ssr-fallback");
              }
          }
        }(i, e.type);
        if (!r || n) {
          return;
        }
        let o = r.getBoundingClientRect();
        let l = {
          ssrData: i == null ? undefined : i.innerHTML,
          width: o == null ? undefined : o.width,
          height: o == null ? undefined : o.height,
          isCollectFromSSR: true,
          isFallback: n,
          dom: r
        };
        this.ssrDataManager.updateSSRDataCache(e.recordId, l);
        return l;
      }
    }
    destroy() {
      var e;
      var i;
      this.docInfoSSRCacheHtml = "";
      this.codeSSRCacheMap.clear();
      if ((e = this.sliceAfterSub) !== null && e !== undefined) {
        e.unsubscribe();
      }
      if ((i = this.changeSub) !== null && i !== undefined) {
        i.unsubscribe();
      }
      this.ssrDataManager.destroy();
      this.blockSSRFetchStatus.clear();
      this.remoteCollab.clear();
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      ev(this, "needToCollectBlockType", docxSsrSchedulerConfig.getSsrConfig().block_types || []);
      ev(this, "remoteCollab", new Set());
      ev(this, "docInfoSSRCacheHtml", "");
      em(this, "dataService", y, this);
      ev(this, "aiSummarySSRCacheHtml", "");
      ev(this, "codeSSRCacheMap", new Map());
      em(this, "configService", S, this);
      em(this, "collabService", k, this);
      em(this, "lazyRecordStatus", E, this);
      ev(this, "changeSub", undefined);
      ev(this, "sliceAfterSub", undefined);
      ev(this, "requestInfoGenerator", new eg());
      ev(this, "ssrImageRecords", []);
      ev(this, "ssrDataManager", new docxSsrDataScheduler.DocxSsrScheduler());
      ev(this, "blockSSRFetchStatus", new Map());
      ev(this, "getSSRContent", e => {
        let {
          recordId: i
        } = e;
        if (this.blockSSRFetchStatus[i] || !this.isBlockSSRSceneEnable() && !this.isDocxH5SSR) {
          return {
            ssrData: ""
          };
        }
        let r = this.ssrDataManager.getSSRContent(i);
        return r || this.colletBlockDomFromSSRBox(e);
      });
      ev(this, "getDocInfoSSRContent", e => {
        if (this.docInfoSSRCacheHtml) {
          return this.docInfoSSRCacheHtml;
        }
        let r = document.querySelector(`${docxEditorConstantsConfig.ssrBoxSelector} [data-record-id="${e}"]`);
        if (r) {
          if (r.dataset?.blockType === docBlockTypeConstants.blockTypeConstants.PAGE) {
            this.collectDocInfoSSRDom(r, "get-content");
          }
          return this.docInfoSSRCacheHtml;
        } else {
          return "";
        }
      });
      ev(this, "getAISummarySSRContent", () => {
        if (this.aiSummarySSRCacheHtml) {
          return this.aiSummarySSRCacheHtml;
        }
        let e = document.querySelector(`${docxEditorConstantsConfig.ssrBoxSelector} .doc-ai-summary-mount-point`);
        if (e) {
          this.aiSummarySSRCacheHtml = e.outerHTML;
          return this.aiSummarySSRCacheHtml;
        } else {
          return "";
        }
      });
      ev(this, "setAISummarySSRContent", e => {
        this.aiSummarySSRCacheHtml = e;
      });
      ev(this, "getCoverSSRContent", () => {
        let e = document.querySelector(`${docxEditorConstantsConfig.ssrBoxSelector} .ssr-cover-image-container`);
        if (e) {
          return e.outerHTML;
        } else {
          return "";
        }
      });
      ev(this, "collectCodeSSRContent", (e, i) => {
        let r = i.innerHTML;
        this.codeSSRCacheMap.set(e, r);
      });
      ev(this, "getCodeSSRContent", e => {
        if (this.codeSSRCacheMap.has(e)) {
          return this.codeSSRCacheMap.get(e);
        }
        let r = document.querySelector(`${docxEditorConstantsConfig.ssrBoxSelector} [data-record-id="${e}"]`);
        if (r && r.dataset?.blockType === docBlockTypeConstants.blockTypeConstants.CODE) {
          this.collectCodeSSRContent(e, r);
          return this.codeSSRCacheMap.get(e);
        }
      });
      ev(this, "deleteCodeSSRContent", e => {
        this.codeSSRCacheMap.delete(e);
      });
      ev(this, "log", (e, i) => {
        docxSsrSchedulerConfig.trackSsrEvent(e, i);
      });
      ev(this, "onSliceReponse", e => {
        let {
          taskId: i,
          clientvar: r
        } = e;
        this.prefetchBlockSSR({
          taskId: i,
          clientvar: r
        });
      });
      ev(this, "prefetchBlockSSR", e => {
        let {
          clientvar: i
        } = e;
        if (!this.isEnableBlockSSR() || !this.isPrefetchSSRSceneEnable()) {
          return;
        }
        let r = Object.values(i.block_map).map(e => this.getValidBlockInfo(e)).filter(e => !!e);
        this.ssrDataManager.batchFetchSSRData(r);
      });
      ev(this, "isEnableBlockSSR", () => this.isBlockSSRSceneEnable() && docxSsrSchedulerConfig.isSsrEnabled());
      ev(this, "isBlockSSRSceneEnable", () => {
        let e = this.configService.get("isHistory");
        let i = this.configService.get("isBidirectionalLink");
        let r = this.configService.get("isDocAISummary");
        let {
          isMobile: n
        } = browserEnvironmentDetectionUtils.browserDetector;
        let o = n && !docxFeatureFlags.isE2Enabled();
        return !e && !i && !r && !o;
      });
      ev(this, "isPrefetchSSRSceneEnable", () => docxSsrSchedulerConfig.isSsrOptEnabled ? !browserEnvironmentDetectionUtils.browserDetector.isInVC : !browserEnvironmentDetectionUtils.browserDetector.isInVC && !browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms);
      ev(this, "checkShouldFetchSSR", e => {
        var i;
        let {
          id: r,
          version: n,
          data: o
        } = e;
        if (this.blockSSRFetchStatus.has(r) || this.remoteCollab.has(r)) {
          return false;
        }
        let l = n || ((i = this.collabService) === null || i === undefined ? undefined : i.getVersion(r, collaborativeEditingFlowSyncModule.RecordManager.record));
        return l !== undefined && !!(l >= 0) && (![docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.WHITEBOARD].includes(o.type) || !!o.token);
      });
      ev(this, "collectDocInfoSSRDom", (e, i) => {
        if (!docxFeatureFlags.isK7Enabled()) {
          return;
        }
        let r = e.querySelector(".ssr-doc-info-content");
        if (r) {
          this.docInfoSSRCacheHtml = r.outerHTML;
          docxEventCollector.wrappedCollector("docx_web_ssr_dev", {
            action: "collect-doc-info-ssr",
            info: JSON.stringify({
              from: i
            })
          });
        }
      });
      ev(this, "onRecordChange", e => {
        let {
          options: i,
          recordOps: r
        } = e;
        if (i.from === collaborativeEditingFlowSyncModule.kq.REMOTE) {
          r.forEach(e => {
            let {
              record: i,
              snapshotBeforeApply: r
            } = e;
            if (this.needToCollectBlockType.includes(i.snapshot.type) && (r == null ? undefined : r.type) === docxEditorCore.PENDING_STATUS) {
              this.remoteCollab.add(i.id);
            }
          });
        }
      });
    }
  }).prototype, "dataService", [docxEditorCore.BLOCK_DATA_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), S = eb(b.prototype, "configService", [docxEditorCore.CONFIG_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), k = eb(b.prototype, "collabService", [m, collabTriggersProvider.collabProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), E = eb(b.prototype, "lazyRecordStatus", [v, lazyRecordStatusToken.lazyRecordStatus], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), b)) || b;
  function eS() {
    docxEditorCore.registerProviders([{
      provide: schedulerProvidersAccessor.docxSchedulerProv,
      useClass: browserEnvironmentDetectionUtils.browserDetector.isMobile ? H : docxTaskSchedulerUtilities.getFlowWebPlatformUtils() ? z : $
    }, ey]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(schedulerProvidersAccessor.docxSchedulerProv);
      let i = dependencyInjectionContainer.get(loadableBlockSchedulerProvider.schedulerProvider);
      e.init();
      if (i.isBlockSSRSceneEnable() || i.isDocxH5SSR) {
        dependencyInjectionContainer.getDynamic(R).onReady(e => {
          e.init();
          i.init();
        });
      }
    });
  }
  require.d(exports, {
    initDocxScheduler: function () {
      return eS;
    }
  });
}