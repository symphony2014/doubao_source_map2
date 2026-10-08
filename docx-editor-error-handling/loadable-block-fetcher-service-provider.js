// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerLoadableBlockFetcherService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 974946
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
  var loadableBlockFetcherProvider = require("loadable-block-fetcher-provider") /*id: 289910*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var idleTaskScheduler = require("idle-task-scheduler") /*id: 580927*/;
  var docxImageUrlResolver = require("docx-image-url-resolver") /*id: 323878*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var layoutManagerToken = require("layout-manager-token") /*id: 709939*/;
  function M(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function T(e, i, r) {
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
  function w(e, i, r, n, o) {
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
  let B = "unknown error";
  n = dependencyInjectionContainer.Provide(loadableBlockFetcherProvider.loadableBlockToken);
  o = dependencyInjectionContainer.Optional();
  let P = n((s = w((l = class {
    get moduleService() {
      return this.editorAPI.moduleService;
    }
    get structService() {
      return this.editorAPI.structService;
    }
    get moduleRegistry() {
      return this.editorAPI.moduleService.registry;
    }
    get fetcherManager() {
      return this.editorAPI.moduleService.fetcherManager;
    }
    init() {
      this.eventEmitter.addListener(renderEventConstants.bufferChanged, this.handleBufferChange);
      let {
        structService: e
      } = this;
      let {
        lazyRecordStatus: i
      } = this;
      this.subs = [e.ready$.subscribe(this.handleReady), e.mutation$.subscribe(this.handleMutations), i == null ? undefined : i.sliceResponse$.subscribe(this.loadBlockModule), i == null ? undefined : i.skippedBlockFetchDone$.subscribe(this.handleSliceResponse), i == null ? undefined : i.applyAllDone$.subscribe(this.handleAllowEdit)].filter(Boolean);
    }
    isBlockFetchComplete(e) {
      let i = this.getBlockFetcher(e);
      return i == null || i.isComplete();
    }
    isBlockFetched(e) {
      let i = this.getBlockFetcher(e);
      return i == null || i.isReady();
    }
    isBlockFetchError(e) {
      let i = this.getBlockFetcher(e);
      return i != null && i.isError();
    }
    canBlockFetch(e) {
      return !!this.getBlockFetcher(e);
    }
    getBlockFetcher(e) {
      return this.fetcherManager.getBlockFetcher(e);
    }
    getBlockError(e) {
      let i = this.getBlockFetcher(e);
      if (this.isBlockFetchError(e)) {
        return (i == null ? undefined : i.error).message || B;
      } else {
        return "";
      }
    }
    getBlockFetchResult(e) {
      let i = this.getBlockFetcher(e);
      if (i == null) {
        return undefined;
      } else {
        return i.getFetchedResult();
      }
    }
    retryFetchBlock(e) {
      let i = this.structService.getBlockStructByBlockId(e);
      if (i) {
        this.fetchFinishBlockIds.delete(e);
        this.fetchBlock(i.type, businessStageConstants.businessConstants.DocxStage.immediate, 30000);
        this.fetchingBlockIds.add(e);
      }
    }
    async fetchBlock(e, i, r = 30000) {
      let n = this.blockFetchPriorityMap.get(e);
      if (n != null && n <= i) {
        return;
      }
      let o = this.moduleRegistry.getModuleByBlockType(e);
      if (!o) {
        return;
      }
      this.blockFetchPriorityMap.set(e, i);
      let l = i === businessStageConstants.businessConstants.DocxStage.immediate;
      return new Promise(n => {
        try {
          this.fetcherManager.bootstrapFetcher(o, {
            immediately: l,
            stage: i,
            timeout: r
          }, r => {
            this.blockFetchPriorityMap.delete(e);
            if (docxEditorCore.isTimeoutError(r)) {
              let r = this.blockRetryMap.get(e) || 0;
              if (r < 3) {
                this.blockRetryMap.set(e, r + 1);
                this.fetchBlock(e, i, 10000);
                return;
              }
            }
            this.notifyFetchFinish(this.fetchingBlockIds, e, r);
            idleCallbackPolyfill_1.requestIdleCallback(() => {
              this.notifyFetchFinish(this.pendingBlockIds, e, r);
            });
            n(r);
          });
        } catch (e) {
          n(e);
        }
      });
    }
    notifyFetchFinish(e, i, r) {
      Array.from(e).filter(e => {
        let r = this.structService.getBlockStructByBlockId(e);
        return (r == null ? undefined : r.type) === i && !this.fetchFinishBlockIds.has(e);
      }).forEach(i => {
        e.delete(i);
        this.fetchFinish$.next({
          blockId: i,
          error: r ? r.message || B : ""
        });
        this.fetchFinishBlockIds.add(i);
      });
    }
    shouldSkipBlockFetch(e) {
      return this.fetchingBlockIds.has(e.id) || this.pendingBlockIds.has(e.id) || this.idleFetchingBlocks.has(e.recordId) || this.isBlockFetchComplete(e.snapshot.type);
    }
    destroy() {
      this.eventEmitter.removeListener(renderEventConstants.bufferChanged, this.handleBufferChange);
      this.subs.forEach(e => e.unsubscribe());
      this.fetchingBlockIds.clear();
      this.pendingBlockIds.clear();
      this.fetchFinishBlockIds.clear();
      this.blockFetchPriorityMap.clear();
      this.blockRetryMap.clear();
      this.idleWorker.destroy();
      this.idleFetchingBlocks.clear();
      this.fetchFinish$.complete();
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      M(this, "editorAPI", s, this);
      M(this, "eventEmitter", a, this);
      M(this, "layoutManager", c, this);
      M(this, "lazyRecordStatus", d, this);
      T(this, "fetchingBlockIds", new Set());
      T(this, "pendingBlockIds", new Set());
      T(this, "fetchFinishBlockIds", new Set());
      T(this, "idleWorker", new idleTaskScheduler.IdleTaskScheduler(1));
      T(this, "idleFetchingBlocks", new Set());
      T(this, "blockFetchPriorityMap", new Map());
      T(this, "blockRetryMap", new Map());
      T(this, "subs", undefined);
      T(this, "fetchFinish$", new observableSubjectClass.Subject());
      T(this, "loadBlockModule", e => {
        let {
          clientvar: i
        } = e;
        if (docxFeatureFlags.isMobileDisableIdleWorker() || docxFeatureFlags.isNotMobileEs() || docxImageUrlResolver.resolveImageUrl) {
          let e = function () {
            let e = browserEnvDetectionUtil.browserDetector.isMobile ? objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.ensure_module_loaded_block_types", []) : [];
            return new Set([...docBlockTypeConstants.bitableChartTypes, ...e]);
          }();
          try {
            Object.keys(i.block_map).forEach(r => {
              this.traverseRecord(r, i.block_map, i => {
                let r = i.data.type;
                if (e.has(r) && this.editorAPI.moduleService.isBlockModuleExisted(r) && !this.editorAPI.moduleService.isBlockModuleReady(r)) {
                  this.editorAPI.moduleService.loadBlockModule(r);
                }
              });
            });
          } catch (e) {}
        }
      });
      T(this, "handleBufferChange", e => {
        let {
          enterBlocks: i,
          leaveBlocks: r
        } = e;
        i.forEach(e => this.handleEnterBuffer(e));
        r.forEach(e => this.handleLeaveBuffer(e));
      });
      T(this, "handleEnterBuffer", e => {
        let i = this.structService.getBlockStructByBlockId(e);
        if (!i || !this.canBlockFetch(i.snapshot.type) || this.fetchFinishBlockIds.has(e)) {
          return;
        }
        if (this.pendingBlockIds.has(e)) {
          this.fetchingBlockIds.add(e);
          this.pendingBlockIds.delete(e);
        }
        let r = i.snapshot.type;
        if (this.isBlockFetchComplete(r)) {
          if (this.isBlockFetched(r)) {
            this.fetchFinish$.next({
              blockId: e,
              error: this.getBlockError(r)
            });
            this.fetchFinishBlockIds.add(e);
          }
        } else {
          this.fetchBlock(r, businessStageConstants.businessConstants.DocxStage.immediate);
          this.fetchingBlockIds.add(e);
        }
      });
      T(this, "handleLeaveBuffer", e => {
        if (this.fetchingBlockIds.has(e)) {
          this.pendingBlockIds.add(e);
          this.fetchingBlockIds.delete(e);
        }
      });
      T(this, "handleReady", () => {
        var e;
        if ((e = this.editorAPI.structService.root) !== null && e !== undefined) {
          e.traverse(e => {
            if (!this.shouldSkipBlockFetch(e)) {
              this.fetchBlock(e.snapshot.type, businessStageConstants.businessConstants.DocxStage.immediate);
              this.fetchingBlockIds.add(e.id);
            }
          });
        }
      });
      T(this, "handleMutations", e => {
        let {
          mutations: i
        } = e;
        for (let e of i.removed) {
          if (!docxEditorCore.isMoveMutation(e)) {
            let {
              block: i
            } = e;
            if (this.canBlockFetch(i.type)) {
              this.fetchingBlockIds.delete(i.id);
              this.pendingBlockIds.delete(i.id);
              this.fetchFinishBlockIds.delete(i.id);
            }
          }
        }
        let r = e => {
          if (!this.shouldSkipBlockFetch(e)) {
            this.fetchBlock(e.snapshot.type, businessStageConstants.businessConstants.DocxStage.immediate);
            this.fetchingBlockIds.add(e.id);
          }
        };
        for (let e of i.added) {
          if (!docxEditorCore.isMoveAddMutation(e)) {
            let {
              block: i
            } = e;
            r(i);
          }
        }
        for (let e of i.updated) {
          if (e.originalType) {
            let {
              block: i
            } = e;
            r(i);
          }
        }
      });
      T(this, "handleSliceResponse", e => {
        let {
          clientvar: i
        } = e;
        if (browserEnvDetectionUtil.browserDetector.isMobile) {
          Object.keys(i.block_map).forEach(e => {
            this.traverseRecord(e, i.block_map, i => {
              if (!this.isBlockFetchComplete(i.data.type)) {
                if (!this.blockFetchPriorityMap.has(i.data.type)) {
                  this.idleWorker.addTask(e => this.fetchBlock(i.data.type, businessStageConstants.businessConstants.DocxStage.idle, 30000).then(e));
                }
                this.idleFetchingBlocks.add(e);
              }
            });
          });
        }
      });
      T(this, "handleAllowEdit", () => {
        if (!docxFeatureFlags.isMobileDisableIdleWorker()) {
          this.idleWorker.start();
        }
      });
      T(this, "traverseRecord", (e, i, r) => {
        let n = i[e];
        if (n) {
          r(n);
          (n.data.children || []).forEach(e => this.traverseRecord(e, i, r));
        }
      });
    }
  }).prototype, "editorAPI", [docxEditorCore.EDITOR_API_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), a = w(l.prototype, "eventEmitter", [eventEmitterProviderNameExport.eventEmitterProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), c = w(l.prototype, "layoutManager", [layoutManagerToken.layoutManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), d = w(l.prototype, "lazyRecordStatus", [o, lazyRecordStatusToken.lazyRecordStatus], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), l)) || l;
  function L() {
    docxEditorCore.registerProviders([P]);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(loadableBlockFetcherProvider.loadableBlockToken).init();
    });
  }
  require.d(exports, {
    registerLoadableBlockFetcherService: function () {
      return L;
    }
  });
}