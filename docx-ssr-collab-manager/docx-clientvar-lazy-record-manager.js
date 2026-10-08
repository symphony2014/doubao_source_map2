// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'DocxClientVarLazyRecordManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 877121
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var replaySubject = require("replay-subject") /*id: 229131*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var flowDocIoClient = require("flow-doc-io-client") /*id: 257963*/;
  var catalogueStateManager = require("catalogue-state-manager") /*id: 918543*/;
  var docLoggerSymbol = require("doc-logger-symbol") /*id: 192564*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  async function _(e, i) {}
  let m = e => false;
  let E = e => false;
  var flowDocChatMemberIo = require("flow-doc-chat-member-io") /*id: 956604*/;
  var syncedBlockAuthorizationManager = require("synced-block-authorization-manager") /*id: 870887*/;
  var browserEnvironmentDetectionUtils_1 = require("browser-environment-detection-utils_1") /*id: 439836*/;
  var fullscreenModeDetector = require("fullscreen-mode-detector") /*id: 71569*/;
  require("editor-data-manager-class") /*id: 699568*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docxSyncedBlockUtils = require("docx-synced-block-utils") /*id: 791402*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var observableTakeOperator = require("observable-take-operator") /*id: 731916*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var N = debugBrowserConfig;
  var syncedReferenceBlockManager = require("synced-reference-block-manager") /*id: 750510*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function w(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  let D = N("dev:ssr2csr");
  class M {
    start() {
      var e;
      D("!!!start");
      this.context.startTime = Date.now();
      if ((e = this.collab.sync) !== null && e !== undefined) {
        e.on(collaborativeEditingFlowSyncModule.GM.WillFetchMiss, this.handleWillFetchMiss);
      }
      this.setTimeout();
    }
    markChanged() {
      this.context.changed = true;
    }
    report() {
      if (this.reported) {
        return;
      }
      let i = Date.now();
      let {
        navigationStart: r,
        responseEnd: s
      } = performance.timing;
      let n = {
        isLarkFeed: browserEnvironmentDetectionUtils.browserDetector.isLarkFeed,
        navigationStart: r,
        responseEnd: s,
        htmlLoadDuration: s - r,
        changed: this.context.changed,
        duration: i - this.context.startTime,
        startTime: this.context.startTime,
        endTime: i,
        ssrFrom: window.templateRequestInfo?.ssrFrom || ""
      };
      D("!!!report", n);
      docxEventCollector.docEventCollector("docx_ssr_to_csr_dev", n);
      this.reported = true;
    }
    isTimeout() {
      return Date.now() - this.context.startTime > 5000;
    }
    setTimeout() {
      this.clearTimeout();
      this.timer = window.setTimeout(() => {
        D("!!!timeout");
        this.stop();
      }, 5000);
    }
    clearTimeout() {
      if (this.timer) {
        window.clearTimeout(this.timer);
      }
      this.timer = null;
    }
    constructor(e, i, r) {
      this.dataProvider = e;
      this.collab = i;
      w(this, "firstScreenClientvar", undefined);
      w(this, "timer", null);
      w(this, "reported", false);
      w(this, "context", {
        startTime: 0,
        changed: false
      });
      w(this, "stop", () => {
        var e;
        var i;
        D("!!!stop");
        this.clearTimeout();
        if ((e = this.collab.sync) !== null && e !== undefined) {
          e.off(collaborativeEditingFlowSyncModule.GM.WillFetchMiss, this.handleWillFetchMiss);
        }
        if ((i = this.collab.sync) !== null && i !== undefined) {
          i.off(collaborativeEditingFlowSyncModule.GM.NewChanges, this.handleNewChanges);
        }
        this.report();
        this.firstScreenClientvar = undefined;
      });
      w(this, "handleWillFetchMiss", () => {
        var e;
        var i;
        D("!!!will");
        if ((e = this.collab.sync) !== null && e !== undefined) {
          e.off(collaborativeEditingFlowSyncModule.GM.NewChanges, this.handleNewChanges);
        }
        if ((i = this.collab.sync) !== null && i !== undefined) {
          i.on(collaborativeEditingFlowSyncModule.GM.NewChanges, this.handleNewChanges);
        }
      });
      w(this, "handleNewChanges", e => {
        D("!!!new");
        if (this.isTimeout()) {
          return;
        }
        let {
          recordChange: i,
          fromSocketOrHttp: r
        } = e;
        if (r !== "http") {
          return;
        }
        let {
          id: s,
          ops: n
        } = i;
        if (this.dataProvider.rootRecordId === s && n.some(this.isChangedInFirstScreen) || this.firstScreenClientvar && Object.keys(this.firstScreenClientvar.block_map).includes(s)) {
          this.markChanged();
          return this.stop();
        }
      });
      w(this, "isChangedInFirstScreen", e => collaborativeEditingFlowSyncModule.isDeleteOperation(e) || collaborativeEditingFlowSyncModule.$b(e) ? typeof e.p[1] == "number" && e.p[1] <= 50 : !!e.p.includes("cover"));
      if (r) {
        this.firstScreenClientvar = syncedReferenceBlockManager.syncReferenceBlock(r);
      }
    }
  }
  function F(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class V {
    destroy() {
      var e;
      this.sub.unsubscribe();
      if ((e = this.logger) !== null && e !== undefined) {
        e.stop();
      }
      this.logger = null;
    }
    constructor(e, i, r) {
      this.dataProvider = e;
      this.collab = i;
      this.status = r;
      F(this, "sub", undefined);
      F(this, "logger", null);
      F(this, "onFirstScreen", e => {
        this.logger = new M(this.dataProvider, this.collab, e.clientvarToWork);
        this.logger.start();
      });
      this.sub = this.status.subTaskFinish$.pipe(observableTakeOperator.takeOperator(1)).subscribe(this.onFirstScreen);
    }
  }
  function B(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class H {
    get enabled() {
      return true;
    }
    setConnectSync(e) {
      this.connectSync = e;
    }
    requestSync(e) {
      this.pendingSyncTask.push({
        entities: e
      });
      if (!this.needDelaySync) {
        this.beginSync();
      }
    }
    destroy() {
      this.needDelaySync = true;
    }
    beginSync() {
      this.pendingSyncTask.forEach(e => this.connectSync(e.entities));
      this.pendingSyncTask = [];
    }
    constructor() {
      B(this, "needDelaySync", true);
      B(this, "pendingSyncTask", []);
      B(this, "connectSync", undefined);
      B(this, "onAllowEdit", () => {
        this.needDelaySync = false;
        this.beginSync();
      });
    }
  }
  let U = "LazyRendereRend";
  let x = "BlockRendered";
  let Z = "TaskError";
  function j(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class $ {
    requestRender(e) {
      let {
        clientvar: i,
        recordId: r,
        hash: s
      } = e;
      try {
        Promise.resolve().then(e => {
          this.cancelDelay = ((() => {
            this.eventEmitter.emit(x, {
              clientvarToWork: i,
              taskId: r,
              hash: s
            });
            this.eventEmitter.emit(U, {
              fullClientvar: i,
              taskId: r,
              hash: s
            });
          }).apply(null), emptyExportFunction.emptyFunction);
          return e;
        }).catch(console.error);
      } catch (e) {
        this.eventEmitter.emit(Z, {
          clientvarToWork: i,
          taskId: r
        });
        throw e;
      }
    }
    onSubTaskFinish(e) {
      this.eventCallbacks.push(e);
      this.eventEmitter.on(x, e);
    }
    onTaskFinish(e) {
      this.eventCallbacks.push(e);
      this.eventEmitter.on(U, e);
    }
    onTaskError(e) {
      this.eventCallbacks.push(e);
      this.eventEmitter.on(Z, e);
    }
    destroy() {
      this.eventCallbacks.forEach(e => {
        this.eventEmitter.off(U, e);
        this.eventEmitter.off(x, e);
        this.eventEmitter.off(Z, e);
      });
      this.eventCallbacks = [];
      if (this.cancelDelay) {
        this.cancelDelay();
      }
    }
    constructor(e) {
      this.eventEmitter = e;
      j(this, "eventCallbacks", []);
      j(this, "cancelDelay", undefined);
    }
  }
  var observableFromEventUtil = require("observable-from-event-util") /*id: 704650*/;
  var observableSafeOperatorUtil = require("observable-safe-operator-util") /*id: 179988*/;
  var shareReplayConfig = require("share-replay-config") /*id: 335744*/;
  var observableShareReplayOperator = require("observable-share-replay-operator") /*id: 669027*/;
  var safeObservableIntervalFactory = require("safe-observable-interval-factory") /*id: 398888*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var lazyRecordClientvars = require("lazy-record-clientvars") /*id: 112384*/;
  function J(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class Q {
    get isFirstScreen() {
      if (docxCommentConstants.isMobileCommentMode) {
        return this.isFirstSlice;
      } else {
        return this.isFirstSlice && this.isFirstPaint;
      }
    }
    markEventCollectedIfNecessary(e, i) {
      if (!this.collectedEvents.has(e)) {
        this.collectedEvents.add(e);
        if (i != null) {
          i();
        }
      }
    }
    isSkipBlockDataApplied(e) {
      return this.skipBlockApplied.has(e);
    }
    destroy() {
      this.subs.forEach(e => {
        e.unsubscribe();
      });
    }
    delegateEvent(e, i) {
      return this.observeEvent(e, emptyExportFunction.emptyFunction, i);
    }
    observeEvent(e, i, r = {}) {
      let s = observableFromEventUtil.fromEvent(this.eventEmitter, e);
      if (r.once) {
        s = s.pipe(observableTakeOperator.takeOperator(1));
      }
      return s.pipe(observableSafeOperatorUtil.createSafeOperator(i), r.replay ? shareReplayConfig.shareReplayConfig(1) : observableShareReplayOperator.shareReplayWithConfig());
    }
    constructor(e) {
      this.eventEmitter = e;
      J(this, "shouldJump", true);
      J(this, "skipFirstScreen", false);
      J(this, "canJump", false);
      J(this, "useCache", false);
      J(this, "collectedEvents", new Set());
      J(this, "skipBlockApplied", new Set());
      J(this, "skippedBlockApplied$", this.observeEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SKIP_BLOCK_APPLIED, e => {
        let {
          taskId: i
        } = e;
        this.skipBlockApplied.add(i);
      }));
      J(this, "skippedBlockError$", this.delegateEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_SKIPPED_BLOCK_ERROR));
      J(this, "taskFinish$", this.delegateEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_RENDER_TASK_FINISH));
      J(this, "sliceResponse$", this.delegateEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_RESPONSE));
      J(this, "clientvarAddedIntoStorage$", this.delegateEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_ADDED_INTO_STORAGE));
      J(this, "applySliceAfter$", this.delegateEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_SLICE_CLIENTVAR_AFTER));
      J(this, "subTaskFinish$", this.delegateEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SUB_TASK_FINISH));
      J(this, "skippedBlockFetchDone$", this.delegateEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_SKIPPED_BLOCK_DONE));
      J(this, "isFirstSlice", false);
      J(this, "firstSliceReady$", this.observeEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SUB_TASK_FINISH, () => {
        this.isFirstSlice = true;
      }, {
        replay: true,
        once: true
      }));
      J(this, "isFirstPaint", false);
      J(this, "firstPaintReady$", new replaySubject.ReplaySubject(1));
      J(this, "isAllDone", false);
      J(this, "isFetchAllDone", false);
      J(this, "isCriticalDone", false);
      J(this, "applyAllDone$", this.observeEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, () => {
        this.isAllDone = true;
      }, {
        replay: true,
        once: true
      }));
      J(this, "fetchAllDone$", this.observeEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALL_DONE_NEW, () => {
        this.isFetchAllDone = true;
      }, {
        replay: true,
        once: true
      }));
      J(this, "applyCriticalDone$", this.observeEvent(lazyRecordClientvars.clientvarEvents.CRITICAL_CLIENT_VAR_APPLY_DONE, () => {
        this.isCriticalDone = true;
      }, {
        replay: true,
        once: true
      }));
      J(this, "shouldShowLoading", true);
      J(this, "showLoading$", this.applyAllDone$.pipe(safeObservableIntervalFactory.createSafeInterval(100), observableSafeOperatorUtil.createSafeOperator(() => {
        this.shouldShowLoading = false;
      }), shareReplayConfig.shareReplayConfig(1)));
      J(this, "isFetchAllowEdit", false);
      J(this, "fetchAllowEdit$", this.observeEvent(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALLOW_EDIT, () => {
        this.isFetchAllowEdit = true;
      }, {
        replay: true,
        once: true
      }));
      J(this, "isPostAllowEdit", false);
      J(this, "postFetchAllowEdit$", this.observeEvent(lazyRecordClientvars.clientvarEvents.POST_CLIENTVAR_FETCH_ALLOW_EDIT, () => {
        this.isPostAllowEdit = true;
      }, {
        replay: true,
        once: true
      }));
      J(this, "isAllowEdit", false);
      J(this, "allowEdit$", this.observeEvent(lazyRecordClientvars.clientvarEvents.ALLOW_EDIT, () => {
        this.isAllowEdit = true;
      }, {
        replay: true,
        once: true
      }));
      J(this, "subs", undefined);
      this.subs = [this.firstSliceReady$.subscribe(), this.firstPaintReady$.subscribe(() => this.isFirstPaint = true), this.applyAllDone$.subscribe(), this.showLoading$.subscribe(), this.fetchAllowEdit$.subscribe(), this.postFetchAllowEdit$.subscribe(), this.allowEdit$.subscribe(), this.skippedBlockApplied$.subscribe(), this.skippedBlockError$.subscribe(), this.taskFinish$.subscribe(), this.applySliceAfter$.subscribe(), this.subTaskFinish$.subscribe(), this.skippedBlockFetchDone$.subscribe()];
    }
  }
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var statusCodes = require("status-codes") /*id: 497936*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docxErrorStatusConsts = require("docx-error-status-consts") /*id: 731910*/;
  var docxPerformanceStageCollector = require("docx-performance-stage-collector") /*id: 753948*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var firstScreenEventHandlerUtils = require("first-screen-event-handler-utils") /*id: 712591*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  function el(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class ec {
    get from() {
      return docxPerformanceStageCollector.DocxPerformanceStageCollector.from;
    }
    collectEventWithOrigin(e, i = {}) {
      docxBlockValidatorUtils.wrapDocxEventCollector(e, {
        ...i,
        origin_root_file_id: platformDocUtils.p5T(this.dataProvider.rootRecordId),
        origin_root_file_type: this.rootType
      });
    }
    destroy() {
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_SLICE_CLIENTVAR_AFTER, this.afterEachTaskSliceClientvarApply);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_RESPONSE, this.handleSliceResponse);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_MAIN_CONTENT_DONE, this.handleMainContentFetched);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_TASK_WILL_START, this.handleFetchWillStart);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALL_DONE_NEW, this.handleFetchAllDone);
      Object.keys(this.fetchCount).forEach(e => {
        this.fetchCount[e] = 0;
      });
      this.applySliceTimes = 0;
    }
    constructor(e, i, r) {
      this.dataProvider = e;
      this.eventEmitter = i;
      this.rootType = r;
      el(this, "token", undefined);
      el(this, "fetchCount", {
        all: 0,
        body: 0,
        table: 0,
        fold: 0
      });
      el(this, "applySliceTimes", 0);
      el(this, "onClientVarFetchStart", () => undefined);
      el(this, "onClientVarFetchError", () => undefined);
      el(this, "onClientVarFetchSuccess", () => undefined);
      el(this, "handleFetchAllDone", e => {
        let {
          consumer: i
        } = e;
        firstScreenEventHandlerUtils.debouncedExecution(() => {
          var e;
          let r = (e = i.getSplitter().getTree()) === null || e === undefined ? undefined : e.getNode(this.token);
          if (!r) {
            return;
          }
          let s = {
            total: 0
          };
          (function e(i) {
            if (i) {
              s[i.type] = (s[i.type] || 0) + 1;
              s.total++;
              (i.childrenIds || []).forEach(r => {
                e(i.getNode(r));
              });
            }
          })(r);
          let n = JSON.stringify(s);
          docxEventCollector.docEventCollector("doc_bug_track_dev", {
            action: "doc_block_info",
            info: n
          });
        });
      });
      el(this, "handleFetchWillStart", e => {
        let {
          isFoldable: i,
          isTable: r
        } = e;
        if (r) {
          this.fetchCount.table++;
        } else if (i) {
          this.fetchCount.fold++;
        }
      });
      el(this, "handleMainContentFetched", e => {
        this.collectEventWithOrigin(lazyRecordClientvars.fetchSliceStates.MAIN_CONTENT_FETCH_DONE, {
          fetchBodyCount: this.fetchCount.body,
          taskId: platformDocUtils.p5T(e)
        });
      });
      el(this, "handleSupportEditableChange", e => {});
      el(this, "handleSliceResponse", e => {
        let {
          taskId: i,
          clientvar: r,
          isFirstSlice: s
        } = e;
        if (i === this.token) {
          this.fetchCount.body++;
        }
        this.fetchCount.all++;
        let n = platformDocUtils.p5T(i);
        this.collectEventWithOrigin(lazyRecordClientvars.fetchSliceStates.HANDLE_RESPONSE, {
          taskId: n,
          hasMore: r.has_more,
          isFirstSlice: s
        });
        docxFeatureFlags.isDocsMoreEvents();
      });
      el(this, "afterEachTaskSliceClientvarApply", () => {
        this.applySliceTimes++;
      });
      this.token = this.dataProvider.rootRecordId;
      i.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_SLICE_CLIENTVAR_AFTER, this.afterEachTaskSliceClientvarApply);
      i.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_RESPONSE, this.handleSliceResponse);
      i.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_MAIN_CONTENT_DONE, this.handleMainContentFetched);
      i.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_TASK_WILL_START, this.handleFetchWillStart);
      if (docxFeatureFlags.isDocsMoreEvents()) {
        i.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALL_DONE_NEW, this.handleFetchAllDone);
      }
    }
  }
  var docxErrorHandlerUtils = require("docx-error-handler-utils") /*id: 271803*/;
  var historyVisibilityObserver = require("history-visibility-observer") /*id: 474806*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxPageAnalyticsTracker = require("docx-page-analytics-tracker") /*id: 64203*/;
  var docxSsrPerformanceCollector = require("docx-ssr-performance-collector") /*id: 970523*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var offlineCreateSuccessDialogManager = require("offline-create-success-dialog-manager") /*id: 915455*/;
  var docxConfigManager = require("docx-config-manager") /*id: 981333*/;
  function em(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  let eE = Object.values(collaborativeEditingFlowSyncModule.ErrorType);
  class eb extends ec {
    destroy() {
      super.destroy();
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_FATAL, this.handleClientvarSliceFatal);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.POST_CLIENTVAR_FETCH_ALLOW_EDIT, this.handleClientVarsAllowEdit);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, this.handleApplyAllDone);
      this.supportEditableChange$.complete();
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_WORKER_FETCH_ALL_DONE, this.handleWorkerFetchAllDone);
    }
    constructor(e, i, r, s) {
      super(e, i, r);
      em(this, "supportEditableChange$", new behaviorSubjectClass.BehaviorSubject(false));
      em(this, "onPermError", undefined);
      em(this, "handleSupportEditableChange", e => {
        this.supportEditableChange$.next(e);
      });
      em(this, "handleClientvarSliceFatal", e => {
        this.collectEventWithOrigin(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_FATAL, {
          taskId: platformDocUtils.p5T(e.taskId)
        });
        if (!docxConfigManager.docxConfigManager.isEmbedDocx && (collaborativeEditingFlowSyncModule.recoverableErrorCodes.includes(e.code) || eE.includes(e.code) || e.code === 671020001 || e.code === docxEditorConstantsConfig.documentStatusCodes.UPGRADED_FUSION_DOC || e.code === -8)) {
          var i;
          docxPerformanceStageCollector.DocxPerformanceStageCollector.renderFail(docxErrorStatusConsts.errorConstants.FETCH_CLIENTVAR_ERROR_PERM, e);
          let r = {
            [collaborativeEditingFlowSyncModule.ErrorType.LOGIN_REQUIRED]: statusCodes.statusCodes.STATUS_CODE.LOGIN_REQUIRED,
            [collaborativeEditingFlowSyncModule.ErrorType.NO_PERMISSION]: statusCodes.statusCodes.STATUS_CODE.FORBIDDEN,
            [collaborativeEditingFlowSyncModule.ErrorType.NOT_FOUND]: statusCodes.statusCodes.STATUS_CODE.NOT_FOUND,
            [collaborativeEditingFlowSyncModule.ErrorType.DELETED]: statusCodes.statusCodes.STATUS_CODE.NOTE_DELETED,
            [collaborativeEditingFlowSyncModule.ErrorType.INVALID_PARAM]: statusCodes.statusCodes.STATUS_CODE.INVALID_PARAMETERS,
            671020001: 671020001,
            [docxEditorConstantsConfig.documentStatusCodes.UPGRADED_FUSION_DOC]: docxEditorConstantsConfig.documentStatusCodes.UPGRADED_FUSION_DOC
          };
          if ((i = this.onPermError) !== null && i !== undefined) {
            i.call(this, {
              code: r[e.code] || statusCodes.statusCodes.STATUS_CODE.FAILED,
              msg: e.msg
            });
          }
          return;
        }
        let r = e.isFirstSlice && e.code === collaborativeEditingFlowSyncModule.ErrorType.NETWORK_ERROR && browserEnvironmentDetectionUtils.browserDetector.isLark && browserEnvironmentDetectionUtils.browserDetector.isMobile;
        if (networkStateEventCollector.collectNetworkState() && !r) {
          docxErrorHandlerUtils.handleDocxError({
            event: e,
            type: lazyRecordClientvars.lazyRecordType
          });
          this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.SHOW_OOPS, e);
        }
      });
      em(this, "handleClientVarsAllowEdit", () => {
        firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => {
          let e = Date.now();
          docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.RENDER_DOCX_ALLOW_EDIT, e);
          docxSsrPerformanceCollector.ssrPerformanceTracker.collectRenderEditorSuccess({
            current: e
          });
          if (!fullscreenModeDetector.isFullscreenMode()) {
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateLoadMainStageDurationList(platformDocUtils.Gkz.DOCX, platformDocUtils.Mbm.RENDER_FILE_ALLOW_EDIT, Date.now());
          }
          this.collectEventWithOrigin(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALLOW_EDIT);
          this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.ALLOW_EDIT, {});
        });
        offlineCreateSuccessDialogManager.OfflineCreateDialogManager.getInstance().closeDialog();
        firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => {
          historyVisibilityObserver.historyVisibility.getObserverTrigger$().next(lazyRecordClientvars.clientvarEvents.ALLOW_EDIT);
        });
      });
      em(this, "handleFirstScreenSuccuess", e => {
        firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => {
          docxEditorEventConstantsAndManager.globalReplaySubject.next(e);
          docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.RENDER_DOCX_FIRST_CLIENTVAR_SUCCESS);
          this.eventEmitter.emit("FIRST_CLIENTVAR_SUCCESS");
          if (window.__SSR_NEED_LOG__) {
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.RENDER_DOCX_FIRST_SCREEN_SUCCESS, window.docSSRDomReadyTime);
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateLoadMainStageDurationList(platformDocUtils.Gkz.DOCX, platformDocUtils.Mbm.RENDER_FILE_ETHERPAD_SUCCESS, window.docSSRDomReadyTime);
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateLoadMainStageDurationList(platformDocUtils.Gkz.DOCX, platformDocUtils.Mbm.RENDER_FILE_ALL_TIME_TO_VISIT, window.docSSRDomReadyTime);
            window.__SSR_NEED_LOG__ = false;
          } else {
            var i;
            var r;
            this.dataProvider;
            this.supportEditableChange$;
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.RENDER_DOCX_FIRST_SCREEN_SUCCESS);
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateLoadMainStageDurationListByNextRender(platformDocUtils.Gkz.DOCX, platformDocUtils.Mbm.RENDER_FILE_ETHERPAD_SUCCESS);
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateLoadMainStageDurationListByNextRender(platformDocUtils.Gkz.DOCX, platformDocUtils.Mbm.RENDER_FILE_ALL_TIME_TO_VISIT);
          }
          if (browserEnvironmentDetectionUtils.browserDetector.isDocComponent()) {
            platformDocUtils.tI2(platformDocUtils.aWg.DOCX_FIRST_SCREEN_SUCCESS, null);
          }
        });
      });
      em(this, "handleApplyAllDone", () => {
        docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStageByNextRender(docxErrorStatusConsts.docxRenderStates.RENDER_DOCX_CLIENTVARS_ALL_DONE);
      });
      em(this, "handleWorkerFetchAllDone", e => {
        docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.WORKER_FETCH_DOCX_CLIENTVAR_FINISH, e.fetchFinishTime);
        docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.WORKER_FETCH_DOCX_CLIENTVAR_TO_MAIN_FINISH, e.mainFinishTime);
      });
      this.onPermError = s;
      i.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_FATAL, this.handleClientvarSliceFatal);
      i.on(lazyRecordClientvars.clientvarEvents.POST_CLIENTVAR_FETCH_ALLOW_EDIT, this.handleClientVarsAllowEdit);
      i.once(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SUB_TASK_FINISH, this.handleFirstScreenSuccuess);
      i.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, this.handleApplyAllDone);
      i.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_WORKER_FETCH_ALL_DONE, this.handleWorkerFetchAllDone);
      this.onClientVarFetchStart = () => {
        docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.FETCH_DOCX_CLIENTVARS_START);
        docxPerformanceStageCollector.DocxPerformanceStageCollector.updateLoadMainStageDurationList(platformDocUtils.Gkz.DOCX, platformDocUtils.Mbm.FETCH_FILE_CLIENTVARS_START);
      };
      this.onClientVarFetchError = e => {
        docxPageAnalyticsTracker.pageAnalyticsTracker.applyClientVar(docxPageAnalyticsTracker.PageFetchStatus.FETCH_FAIL);
        if (!lazyRecordClientvars.criticalErrorCodes.has(e == null ? undefined : e.code)) {
          docxPerformanceStageCollector.DocxPerformanceStageCollector.renderFail(docxErrorStatusConsts.errorConstants.FETCH_CLIENTVAR_ERROR);
        }
      };
      this.onClientVarFetchSuccess = (e, i) => {
        docxPerformanceStageCollector.DocxPerformanceStageCollector.setExtraData({
          fg: {
            allow_pre_edit: i,
            docx_clientvar_fetch_new_mode: docxFeatureFlags.isNotMobileOrL(),
            open_doc_no_garr_fish: docxFeatureFlags.isJpEnabled(),
            open_doc_mpa_enable: docxFeatureFlags.isGxEnabled(),
            docx_bear_virtual_enable_stop_while: true
          }
        });
        docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.FETCH_DOCX_CLIENTVARS_SUCCESS);
        docxPerformanceStageCollector.DocxPerformanceStageCollector.updateLoadMainStageDurationList(platformDocUtils.Gkz.DOCX, platformDocUtils.Mbm.FETCH_FILE_CLIENTVARS_SUCCESS);
        docxPageAnalyticsTracker.pageAnalyticsTracker.applyClientVar(docxPageAnalyticsTracker.PageFetchStatus.FETCH_SUCCESS, e);
      };
    }
  }
  function ey(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class eS extends ec {
    destroy() {
      super.destroy();
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_FATAL, this.handleClientvarSliceFatal);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.POST_CLIENTVAR_FETCH_ALLOW_EDIT, this.handleClientVarsAllowEdit);
    }
    constructor(e, i, r, s) {
      super(e, i, r);
      this.syncMgr = s;
      ey(this, "handleClientvarSliceFatal", e => {
        var i;
        this.collectEventWithOrigin(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_FATAL, {
          taskId: platformDocUtils.p5T(e.taskId)
        });
        this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.SHOW_OOPS, e);
        if ((i = this.syncMgr) !== null && i !== undefined) {
          i.setSyncedBlockStatus(this.token, "LOADING_ERROR");
        }
      });
      ey(this, "handleClientVarsAllowEdit", () => {
        firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => {
          this.collectEventWithOrigin(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALLOW_EDIT);
          this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.ALLOW_EDIT, {});
        });
      });
      i.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_FATAL, this.handleClientvarSliceFatal);
      i.on(lazyRecordClientvars.clientvarEvents.POST_CLIENTVAR_FETCH_ALLOW_EDIT, this.handleClientVarsAllowEdit);
    }
  }
  var clientVarMetaManager = require("client-var-meta-manager") /*id: 865679*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var fetchSyncConstants = require("fetch-sync-constants") /*id: 290082*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  function eN(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class eP {
    reset() {
      this.fetched = false;
      this.rendered = false;
      this.fetchedErr = false;
    }
    setFetched() {
      this.fetched = true;
    }
    setFetchErr() {
      this.fetchedErr = true;
    }
    setApplied() {
      this.applied = true;
    }
    setRendered() {
      this.rendered = true;
    }
    isDone() {
      return this.fetched && this.applied && this.rendered || this.fetchedErr;
    }
    isFetchedErr() {
      return this.fetchedErr;
    }
    isFetched() {
      return this.fetched;
    }
    isApplied() {
      return this.applied;
    }
    isAllowFail() {
      return this.allowFail;
    }
    getTaskId() {
      return this.taskId;
    }
    constructor(e, i) {
      this.taskId = e;
      this.allowFail = i;
      eN(this, "fetched", false);
      eN(this, "rendered", false);
      eN(this, "applied", false);
      eN(this, "fetchedErr", false);
    }
  }
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  class eL {
    isThisType(e) {
      let {
        data: i
      } = e;
      return i.type === docBlockTypeConstants.blockTypeConstants.TABLE;
    }
    needRequest(e, i) {
      return this.isThisType(e) && docxTableLayoutUtils.getCellRecordIds(e.data).some(e => !i[e]);
    }
  }
  class ew {
    needRequest(e, i) {
      let {
        data: r
      } = e;
      return this.foldableTypes.has(r.type) && !r.type.includes("heading") && e.data.folded && (r.children || []).some(e => !i[e]);
    }
    isThisType(e) {
      let {
        data: i
      } = e;
      return this.foldableTypes.has(i.type);
    }
    constructor(e) {
      var i;
      var r;
      var s;
      r = undefined;
      if ((i = typeof (s = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var s = r.call(e, i || "default");
          if (typeof s != "object") {
            return s;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i = "foldableTypes", "string")) == "symbol" ? s : s + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
      this.foldableTypes = e.foldableTypes;
    }
  }
  var queryJumpHandler = require("query-jump-handler") /*id: 932663*/;
  var isDesktopBrowserChecker = require("is-desktop-browser-checker") /*id: 493826*/;
  var docxClientvarFetchManager_1 = require("docx-clientvar-fetch-manager_1") /*id: 21095*/;
  var docxFetchConcurrencyConfig = require("docx-fetch-concurrency-config") /*id: 858864*/;
  var docxLazyConsumerConfig = require("docx-lazy-consumer-config") /*id: 157711*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docPerformanceTuningFlags = require("doc-performance-tuning-flags") /*id: 808188*/;
  var docxWidthModeConfig = require("docx-width-mode-config") /*id: 106194*/;
  var docxUserDetailManager = require("docx-user-detail-manager") /*id: 794466*/;
  function ej(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class e$ {
    async waitFetchManager() {
      this.fetchManager ||= await this.fetchSingleInstance.waitFetchManager();
    }
    getTaskStatus(e) {
      return this.taskStatusMap.get(e);
    }
    getFirstSlice(e) {
      let {
        fetcHash: i,
        fetchId: r,
        onFirstSliceError: s
      } = e;
      this.initClientvars({
        id: r,
        hash: i
      }).catch(e => {
        var r;
        var o;
        let a = otterDocApiServiceDi.getOtterDocService().isApiError(e) ? e.errorOption : null;
        let l = Number(a == null ? undefined : a.code);
        if (l === collaborativeEditingFlowSyncModule.ErrorType.CODE_CURSOR_INVALID) {
          if ((o = this.fetchSingleInstance.cacheManager) !== null && o !== undefined) {
            o.deleteCache();
          }
        }
        if (s) {
          s(e);
        }
        if ((r = this.taskStatusMap.get(this.token)) !== null && r !== undefined) {
          r.setFetchErr();
        }
        let c = {
          blockType: "page",
          taskId: this.token,
          mode: docxFetchConcurrencyConfig.getFetchMode(i, browserEnvDetectionUtil.browserDetector),
          requestId: e.requestId,
          ttLogId: (a == null ? undefined : a.logId) || e.ttLogId,
          url: (a == null ? undefined : a.requestConfig?.url) || e.url,
          queryParams: e.queryParams,
          msg: objectPathGetDefault.getObjectPathDefault(e, "msg") || objectPathGetDefault.getObjectPathDefault(e, "message"),
          resMsg: objectPathGetDefault.getObjectPathDefault(a == null ? undefined : a.response, "message"),
          code: l || collaborativeEditingFlowSyncModule.ErrorType.LAZY_RECORD_RES_EXCEPTION,
          type: lazyRecordClientvars.lazyRecordType,
          from: this.logger.from,
          stack: e.stack,
          isFirstSlice: true
        };
        docxUtilityHelpers.captureException(e);
        this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_FATAL, c);
        this.logger.collectEventWithOrigin(lazyRecordClientvars.mergedRecordStates.FETCH_SLICED_ERROR, c);
        this.destroy();
      });
    }
    genSkipBlockSet() {
      let e = objectValuesHelper.getObjectValues(docBlockTypeConstants.blockTypeConstants).filter(e => docxBlockValidatorUtils.isBulletOrderType(e));
      this.needRequestSkipBlockHandler.set(ew, new ew({
        foldableTypes: new Set(e)
      }));
      this.needRequestSkipBlockHandler.set(eL, new eL());
    }
    isPreEditableEnable() {
      return this.lazyConsumer.isPreEditableEnable();
    }
    get clientvarFrom() {
      return this.fetchSingleInstance.clientvarFrom;
    }
    notifySkipBlockHideLoading(e, i) {
      if (e) {
        Object.entries(e.block_map).forEach(r => {
          let [s, n] = r;
          if (docxBlockValidatorUtils.isTableBlock(n.data.type) && !this.shouldBlockRequest(n, e.block_map)) {
            this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SKIP_BLOCK_APPLIED, {
              taskId: s,
              hash: i
            });
          }
        });
      }
    }
    uploadFetchStateInfo(e) {
      let {
        id: i,
        hash: r,
        lazyConsumer: s
      } = e;
      let n = [];
      let o = e => Object.keys(e || {}).find(i => {
        if (!e[i].data) {
          n.push(i);
          return false;
        }
        if (e[i].data.type !== docBlockTypeConstants.blockTypeConstants.TABLE) {
          return false;
        }
        {
          let e = this.fetchManager.getClientvar(i);
          return !e || (!e.code || !!e.data) && (e.data.next_cursors || []).find(e => !this.fetchManager.getClientvar(e));
        }
      });
      let a = this.fetchManager.getClientvar(i);
      let l = -1;
      let c = -1;
      let h = 0;
      let d = 0;
      let f = 0;
      let v = 0;
      if (a) {
        d = 1;
        if (a.code === 0 && a.data) {
          let e = a.data;
          let i = e.block_map || {};
          l = +!!e.concurrent;
          c = Number(e.has_more);
          if (!(e.next_cursors || []).find(e => !this.fetchManager.getClientvar(e))) {
            v = 1;
          }
          if (!o(i)) {
            h = 1;
          }
        } else {
          f = 1;
        }
      }
      let g = {
        stage: "beforeApply",
        fetchStartStage: this.fetchManager.stage,
        use_cache: +!!this.fetchManager.getRemainInfo(),
        hash: r,
        isLark: Number(browserEnvDetectionUtil.browserDetector.isLark),
        isLarkPcTab: Number(browserEnvDetectionUtil.browserDetector.isLarkPcTab),
        concurrent: l,
        hasMore: c,
        remain_info: JSON.stringify(this.fetchManager.getRemainInfo()),
        mobile: Number(this.fetchSingleInstance.isMobile),
        is_fg_enabled: +!!this.fetchSingleInstance.isPreFetchEnable,
        concurrency_count_limit: this.fetchSingleInstance.maxConcurrency,
        fetchFinish: Number(this.fetchManager.getFinishInfo().isFinish),
        from: this.logger.from,
        isFirstSliceFetched: d,
        isFirstSliceError: f,
        firstTableFinished: h,
        pageCursorsFinished: v,
        fetchFinishAfterFirstApplied: 0,
        pageCursorsFinishedAfterFirstApplied: 0,
        tableInFirstAppliedSliceFinished: 0,
        emptyBlocks: n.map(e => platformDocUtils.p5T(e))
      };
      browserEnvDetectionUtil.browserDetector.isMobile;
      this.logger.collectEventWithOrigin(lazyRecordClientvars.concurrencyFlags.PRE_CONCURRENCY_FETCH_STATE, g);
      s.setFirstSliceApplied(e => {
        let r = (this.fetchManager.getClientvar(i) || {}).data || {};
        let s = 0;
        let a = 0;
        if (v || !(r.next_cursors || []).find(e => !this.fetchManager.getClientvar(e))) {
          s = 1;
        }
        if (h) {
          a = 1;
        } else if (!o((e || {}).block_map || {})) {
          a = 1;
        }
        let l = {
          stage: "afterApply",
          concurrent: +!!r.concurrent,
          hasMore: +!!r.has_more,
          fetchFinishAfterFirstApplied: Number(this.fetchManager.getFinishInfo().isFinish),
          pageCursorsFinishedAfterFirstApplied: s,
          tableInFirstAppliedSliceFinished: a,
          emptyBlocks: n.map(e => platformDocUtils.p5T(e))
        };
        browserEnvDetectionUtil.browserDetector.isMobile;
        this.logger.collectEventWithOrigin(lazyRecordClientvars.concurrencyFlags.PRE_CONCURRENCY_FETCH_STATE, Object.assign({}, g, l));
      });
    }
    async initClientvars(e) {
      let i;
      let {
        id: r,
        blockType: s,
        hash: n
      } = e;
      let {
        lazyConsumer: o,
        eventEmitter: a,
        taskStatusMap: l
      } = this;
      o.token = this.token;
      if (n) {
        o.setStartId(n);
      }
      let [c, h] = queryJumpHandler.queryJumpManager.getQueryJumpInfo();
      let {
        rootType: d
      } = this;
      let f = c && c === queryJumpHandler.reminderConstants.Reminder && h && h.block_id;
      if (d === docBlockTypeConstants.blockTypeConstants.PAGE && f) {
        let e = h.block_id;
        o.setStartId(e);
        let r = true;
        i = () => {
          if (r) {
            r = false;
            i = undefined;
            this.lazyRecordStatus.canJump = true;
            this.eventEmitter.emit(lazyRecordClientvars.lazyRecordJump);
          }
        };
      }
      o.setBeforeApply((e, i) => {
        if (docxUserDetailManager.UserDetailManager !== null && docxUserDetailManager.UserDetailManager !== undefined) {
          docxUserDetailManager.UserDetailManager.applyClientVar(i);
        }
        if (isDesktopBrowserChecker.isDesktopBrowser()) {
          clientVarMetaManager.ClientVarMetaManager.applyClientVar(i);
        }
      });
      o.setAfterApply(e => {
        a.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_SLICE_CLIENTVAR_AFTER, e);
        let {
          taskId: r,
          clientvar: s,
          taskClientvar: o,
          isTaskFinish: c
        } = e;
        let h = l.get(r);
        if ((h == null ? undefined : h.isFetched()) && c) {
          h.setApplied();
        }
        if (this.isPreEditableEnable() || [...l.values()].filter(e => !e.isAllowFail()).every(e => e.isApplied())) {
          this.tryToConnectSyncAndToggleEditable();
        }
        this.renderer.requestRender({
          clientvar: s,
          recordId: r,
          hash: n
        });
        if (h == null ? undefined : h.isApplied()) {
          this.notifySkipBlockHideLoading(o, n);
        }
        if (i) {
          i();
        }
      });
      o.setDuplicated(e => {
        if (this.isPreEditableEnable()) {
          let i = l.get(e);
          if (i == null ? undefined : i.isFetched()) {
            i.setApplied();
            i.setRendered();
            let r = [...this.taskStatusMap.values()];
            let s = r.filter(e => !e.isAllowFail());
            let o = s.every(e => e.isApplied());
            let a = s.every(e => e.isDone());
            let l = r.every(e => e.isDone());
            this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_RENDER_TASK_FINISH, {
              taskId: e,
              hash: n
            });
            if (o) {
              this.tryToConnectSyncAndToggleEditable();
            }
            if (a) {
              this.tryToEmitAllowEdit();
            }
            if (l) {
              this.tryToEmitAllDone();
            }
          }
        }
      });
      let v = docxFetchConcurrencyConfig.getFetchMode(n, browserEnvDetectionUtil.browserDetector);
      let g = platformDocUtils.p5T(this.token);
      this.logger.collectEventWithOrigin(lazyRecordClientvars.fetchSliceStates.FETCH_SLICED_CLIENTVARS, {
        mode: v,
        blockType: s,
        hash: platformDocUtils.p5T(n),
        taskId: g
      });
      this.getOrInitTaskStatus(this.token);
      a.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_TASK_WILL_START, {
        taskId: this.token,
        blockType: s
      });
      let p = true;
      let _ = {
        id: r,
        mode: v,
        blockType: s,
        ...(n ? {
          block_id: n
        } : {}),
        hash: n,
        onSliceResponse: e => {
          let {
            data: i
          } = e;
          this.logger.collectEventWithOrigin(lazyRecordClientvars.fetchSliceStates.FETCH_SLICED_CLIENTVARS_RESPONSE, {
            isDestroyed: this.isDestroyed,
            data: i
          });
          if (!this.isDestroyed) {
            i.id = this.token;
            a.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_RESPONSE, {
              isFirstSlice: p,
              taskId: this.token,
              clientvar: i
            });
            o.add(this.token, docxLazyConsumerConfig.blockTypes.NORMAL, i, p);
            a.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_ADDED_INTO_STORAGE);
            p = false;
          }
        },
        onAllSliceResponse: e => {
          if (!this.isDestroyed) {
            this.notifySkipBlockHideLoading(e, n);
            this.logger.collectEventWithOrigin(lazyRecordClientvars.fetchSliceStates.ON_ALL_SLICE_RESPONSE, {
              taskId: g
            });
          }
        },
        onTaskFetchedResponse: e => {
          let i = e === r ? this.token : e;
          this.onTaskFetched(i);
        }
      };
      this.useCache = !!this.fetchManager.getRemainInfo();
      this.lazyRecordStatus.useCache = this.useCache;
      this.uploadFetchStateInfo({
        id: r,
        hash: n,
        lazyConsumer: o
      });
      await this.concurrencyFetchSlicedClientvars(_);
      this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_MAIN_CONTENT_DONE, r);
    }
    async concurrencyFetchSlicedClientvars(e, i) {
      let r = [];
      let {
        id: s,
        hash: n,
        block_id: o = s,
        onSliceResponse: a,
        onAllSliceResponse: l,
        onTaskFetchedResponse: c
      } = e;
      let h = n ? s : o;
      let d = [h];
      while (d.length) {
        let e = [];
        let n = [];
        let o = d[0];
        let l = this.fetchManager.getClientvar(o);
        l ||= await this.fetchManager.fetchClientvar(o);
        if (l.code || !l.data) {
          throw l;
        }
        let v = l.data;
        if (!this.isDoOnce) {
          this.isDoOnce = true;
          if (docxWidthModeConfig.isConfigReady()) {
            await docxWidthModeConfig.syncWidthMode(v);
          } else {
            docxWidthModeConfig.updateWidthMode(v);
          }
          let e = this.checkClientvar(v, s);
          if (e.code !== 0) {
            throw Error(e.msg);
          }
        }
        let {
          skip_blocks: g,
          cursor: p,
          has_more: _,
          concurrent: m
        } = v;
        let {
          next_cursors: E
        } = v;
        if (!m) {
          this._ready = false;
        }
        d.shift();
        if (!this._ready) {
          E = _ ? [p] : [];
        }
        if (E == null ? undefined : E.length) {
          d.push(...E);
        }
        e.push(v);
        if (!i && (g == null ? undefined : g.length)) {
          n.push(...g);
        }
        while (d.length) {
          let r = d[0];
          let s = this.fetchManager.getClientvar(r);
          if (!s) {
            break;
          }
          if (s.code || !s.data) {
            docxUtilityHelpers.captureException(Error(`fetch clientvar error, code:${s.code}, typeof data: ${typeof s.data}, msg: ${s.msg}`), {
              useSlardarWeb: true
            });
            throw s;
          }
          let o = s.data;
          let {
            skip_blocks: a,
            has_more: l,
            cursor: c
          } = o;
          d.shift();
          e.push(o);
          if (!this._ready && l) {
            d.push(c);
          }
          if (!i && (a == null ? undefined : a.length)) {
            n.push(...a);
          }
        }
        while (n.length && this._ready && !this.isPreEditableEnable()) {
          var u;
          var f;
          let i = n[0];
          let r = this.fetchManager.getClientvar(i);
          if (!r) {
            break;
          }
          if (r.code || !r.data) {
            if ((f = this.taskStatusMap.get(i)) !== null && f !== undefined) {
              f.setFetchErr();
            }
            break;
          }
          let s = r.data;
          let o = [];
          if (!((u = s.next_cursors) === null || u === undefined ? undefined : u.every(e => {
            let i = this.fetchManager.getClientvar(e);
            if (i && !i.code) {
              o.push(i.data);
            }
            return i && !i.code;
          }))) {
            break;
          }
          n.shift();
          e.push(s, ...o);
        }
        let b = docxBlockValidatorUtils.mergeBlockMaps(e);
        let y = b.block_map;
        let S = n.map(e => {
          this.getOrInitTaskStatus(e, docxBlockValidatorUtils.isTableBlock(y[e].data.type));
          return e;
        });
        b.next_cursors = Array.from(d);
        b.skip_blocks = Array.from(S);
        r.push(b);
        if (!d.length && c) {
          c(s);
        }
        if (a) {
          a({
            data: b,
            taskId: h,
            hasMore: b.has_more
          });
        }
        if (!i) {
          setTimeout(() => this.fetchSkipBlocksClientvars(b, S), 1);
        }
      }
      let v = docxBlockValidatorUtils.mergeBlockMaps(r);
      if (l) {
        l(v);
      }
      return v;
    }
    checkClientvar(e, i) {
      let r = "";
      let s = 0;
      if (!syncUrlBlockUtils.isSyncingActive() || e.id !== i) {
        if (i) {
          if (e) {
            if (e.block_map) {
              if (!e.block_map[i] && !e.block_map[this.token]) {
                r = "[ClientvarTreeSplitter] before buildBlockTree, block_map without rootId";
                s = -1;
              }
            } else {
              r = "[ClientvarTreeSplitter] before buildBlockTree, no block_map";
              s = -1;
            }
          } else {
            r = "[ClientvarTreeSplitter] before buildBlockTree, no clientvar";
            s = -1;
          }
        } else {
          r = "[ClientvarTreeSplitter] before buildBlockTree, no rootRecordId";
          s = -1;
        }
      }
      return {
        msg: r,
        code: s
      };
    }
    isAllTaskFetched(e) {
      let i = [...this.taskStatusMap.values()];
      if (e) {
        i = i.filter(e => !e.isAllowFail());
      }
      return i.every(e => e.isFetched());
    }
    fetchSkipBlocksClientvars(e, i) {
      let r = i => {
        let {
          id: r,
          data: s
        } = e.block_map[i];
        let {
          type: n
        } = s;
        let o = () => this.concurrencyFetchSlicedClientvars({
          id: r,
          mode: fetchSyncConstants.fetchModes.SPECIFIC,
          blockType: n,
          block_id: i,
          onSliceResponse: e => {
            var r;
            if (!this.isDestroyed) {
              this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_RESPONSE, {
                taskId: i,
                clientvar: e.data
              });
              if (!((r = this.taskStatusMap.get(i)) === null || r === undefined ? undefined : r.isAllowFail())) {
                this.lazyConsumer.add(i, docxLazyConsumerConfig.blockTypes.FOLDABLE, e.data);
                this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_ADDED_INTO_STORAGE);
              }
            }
          },
          onAllSliceResponse: e => {
            var r;
            if (!this.isDestroyed) {
              if ((r = this.taskStatusMap.get(i)) === null || r === undefined ? undefined : r.isAllowFail()) {
                this.lazyConsumer.add(i, docxLazyConsumerConfig.blockTypes.TABLE, e);
              }
              this.logger.collectEventWithOrigin(lazyRecordClientvars.fetchSliceStates.ON_ALL_SLICE_RESPONSE, {
                taskId: platformDocUtils.p5T(i)
              });
              this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_SKIPPED_BLOCK_DONE, {
                clientvar: e,
                taskId: i
              });
            }
          },
          onTaskFetchedResponse: e => this.onTaskFetched(e)
        }, true);
        return o().catch(e => {
          var r;
          if ((r = this.taskStatusMap.get(i)) !== null && r !== undefined) {
            r.setFetchErr();
          }
          let a = {
            blockType: "page",
            taskId: platformDocUtils.p5T(i),
            mode: fetchSyncConstants.fetchModes.SPECIFIC,
            requestId: e.requestId,
            url: e.url,
            queryParams: e.queryParams,
            msg: objectPathGetDefault.getObjectPathDefault(e, "msg") || objectPathGetDefault.getObjectPathDefault(e, "message"),
            resMsg: objectPathGetDefault.getObjectPathDefault(e, "resMsg"),
            code: objectPathGetDefault.getObjectPathDefault(e, "code") || collaborativeEditingFlowSyncModule.ErrorType.LAZY_RECORD_RES_EXCEPTION,
            type: lazyRecordClientvars.lazyRecordType,
            from: this.logger.from
          };
          this.logger.collectEventWithOrigin(lazyRecordClientvars.mergedRecordStates.FETCH_SLICED_ERROR, a);
          let l = docxBlockValidatorUtils.isTableBlock(n);
          try {
            let r = () => {
              let e = this.fetchManager.getClientvar(i);
              if (e && !e.code && e.data) {
                let {
                  next_cursors: r = []
                } = e.data;
                for (let e of r) {
                  let r = this.fetchManager.getClientvar(e);
                  if (!r || !!r.code || !r.data) {
                    this.fetchManager.retryTable(i, e);
                  }
                }
              } else {
                this.fetchManager.retryTable(i);
              }
              return o();
            };
            if (l) {
              let n = {
                ...s,
                error: e,
                fetchFn: r,
                taskId: i
              };
              this.retryInfoMap.set(i, n);
              this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_SKIPPED_BLOCK_ERROR, n);
            } else {
              this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_FATAL, {
                ...a,
                error: e,
                fetchFn: r,
                taskId: i
              });
              this.destroy();
            }
          } catch (e) {}
        });
      };
      i.forEach(i => {
        let {
          type: s
        } = e.block_map[i].data;
        this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_TASK_WILL_START, {
          taskId: i,
          blockType: s,
          isTable: s === docBlockTypeConstants.blockTypeConstants.TABLE,
          isFoldable: docxBlockValidatorUtils.isBulletOrderType(s) && !docxBlockValidatorUtils.isHeadingBlock(s)
        });
        this.logger.collectEventWithOrigin(lazyRecordClientvars.fetchSliceStates.GEN_FETCH_SKIP_BLOCK_TASK, {
          taskId: platformDocUtils.p5T(i)
        });
        return r(i).then(e => {
          if (s === docBlockTypeConstants.blockTypeConstants.TABLE) {
            this.eventEmitter.emit(lazyRecordClientvars.skipBlockDidFetch, i);
          }
        });
      });
    }
    injectRenderer(e) {
      this.renderer = e;
      this.renderer.onTaskFinish(e => {
        let {
          taskId: i
        } = e;
        let r = this.taskStatusMap.get(i);
        let s = this.isPreEditableEnable();
        if (s) {
          this.tryToEmitAllowEdit();
        }
        if (!(r == null ? undefined : r.isApplied())) {
          return;
        }
        if (r != null) {
          r.setRendered();
        }
        let n = [...this.taskStatusMap.values()];
        let o = n.every(e => e.isDone());
        let a = !s && n.filter(e => !e.isAllowFail()).every(e => e.isDone());
        this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_RENDER_TASK_FINISH, e);
        if (a) {
          this.tryToEmitAllowEdit();
        }
        if (o) {
          this.tryToEmitAllDone();
        }
      });
      this.renderer.onSubTaskFinish(e => {
        this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SUB_TASK_FINISH, Object.assign({}, e, {
          lazyRecord: this
        }));
      });
    }
    destroy() {
      var e;
      var i;
      if (this.fetchManager) {
        this.isDestroyed = true;
        docxEditorEventConstantsAndManager.globalEventEmitter.off(docxEditorEventConstantsAndManager.eventConstants.HISTORY.TOGGLE_REVERT, this.listenHistoryRevert);
        if ((e = this.renderer) !== null && e !== undefined) {
          e.destroy();
        }
        this.taskStatusMap.clear();
        this.retryInfoMap.clear();
        if ((i = this.fetchSingleInstance.cacheManager) !== null && i !== undefined) {
          i.destroy();
        }
        this.fetchManager.destroy();
        this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALLOW_EDIT, this.tryFetchMiss);
        this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CRITICAL_CLIENT_VAR_APPLY_DONE, this.tryFetchMiss);
      }
    }
    tryToEmitAllDone() {
      this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_WORKER_FETCH_ALL_DONE, {
        finishInfo: this.fetchManager.getFinishInfo()
      });
      firstScreenEventHandlerUtils.executeAfterFirstPaint(() => {
        this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, {
          lazyRecord: this
        });
        this.setCollabAllDataReady();
      }, this.lazyRecordStatus);
    }
    tryToConnectSyncAndToggleEditable() {
      if (!this.readyToToggleEditable) {
        this.lazySync.onAllowEdit();
        this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALLOW_EDIT);
        this.readyToToggleEditable = true;
      }
    }
    onTaskFetched(e) {
      var i;
      if ((i = this.taskStatusMap.get(e)) !== null && i !== undefined) {
        i.setFetched();
      }
      if (this.isAllTaskFetched()) {
        this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALL_DONE_NEW, {
          consumer: this.lazyConsumer
        });
      }
    }
    getOrInitTaskStatus(e, i) {
      let r = this.taskStatusMap.get(e);
      if (r) {
        r.reset();
      } else {
        r = new eP(e, i);
        this.taskStatusMap.set(e, r);
      }
      return r;
    }
    shouldBlockRequest(e, i) {
      return [...this.needRequestSkipBlockHandler.values()].some(r => r.needRequest(e, i));
    }
    setCollabAllDataReady() {
      if (!this.isCollabReadySet) {
        this.isCollabReadySet = true;
        this.collab.sync.setAllDataReady();
      }
    }
    constructor(e, i, r, s, n, o, a, l, c) {
      this.eventEmitter = e;
      this.collab = i;
      this.lazySync = r;
      this.lazyRecordStatus = s;
      this.logger = n;
      this.lazyConsumer = a;
      this.token = l;
      this.rootType = c;
      ej(this, "needRequestSkipBlockHandler", new Map());
      ej(this, "taskStatusMap", new Map([]));
      ej(this, "cancelBackClientvarApply", undefined);
      ej(this, "useCache", false);
      ej(this, "retryInfoMap", new Map());
      ej(this, "renderer", undefined);
      ej(this, "isDoOnce", false);
      ej(this, "readyToToggleEditable", false);
      ej(this, "_ready", true);
      ej(this, "isDestroyed", false);
      ej(this, "fetchSingleInstance", undefined);
      ej(this, "isCollabReadySet", false);
      ej(this, "fetchManager", undefined);
      ej(this, "listenHistoryRevert", () => {
        this.lazyConsumer.startApplyAllMode();
      });
      ej(this, "tryToEmitAllowEdit", (() => {
        let e = false;
        return () => {
          if (!e) {
            firstScreenEventHandlerUtils.executeAfterFirstPaint(() => {
              if (!e) {
                this.tryToConnectSyncAndToggleEditable();
                this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.POST_CLIENTVAR_FETCH_ALLOW_EDIT);
                e = true;
              }
            }, this.lazyRecordStatus);
          }
        };
      })());
      ej(this, "tryFetchMiss", () => {
        if (this.readyToToggleEditable && this.isAllTaskFetched()) {
          let {
            perfFeatures: e
          } = this.lazyConsumer;
          if (e && e.has(docPerformanceTuningFlags.IdleApplyFlags.OPTIMIZE_IDLE_APPLY | docPerformanceTuningFlags.IdleApplyFlags.UNDETERMINED)) {
            this.setCollabAllDataReady();
          }
        }
      });
      e.on(docxEditorEventConstantsAndManager.eventConstants.HISTORY.TOGGLE_REVERT, this.listenHistoryRevert);
      this.injectRenderer(o);
      this.isDestroyed = false;
      this.fetchSingleInstance = docxClientvarFetchManager_1.DocxClientvarFetchManager.getInstance().getFetcher(this.token);
      this.fetchManager = this.fetchSingleInstance.clientvarFetchManager;
      let {
        perfFeatures: h
      } = this.lazyConsumer;
      if (h == null ? undefined : h.isTuningAllowed()) {
        if (!(h == null ? undefined : h.hasFGs(docPerformanceTuningFlags.PerfTuningFlags.ALLOW_LARGE_DOC_PERF_TUNING))) {
          this.eventEmitter.on(lazyRecordClientvars.clientvarEvents.POST_CLIENTVAR_FETCH_ALLOW_EDIT, this.tryFetchMiss);
        }
        this.eventEmitter.on(lazyRecordClientvars.clientvarEvents.CRITICAL_CLIENT_VAR_APPLY_DONE, this.tryFetchMiss);
      }
    }
  }
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  let eK = e => {
    var r;
    let {
      type: n,
      clearHandle: o
    } = e;
    if (n === "on") {
      if (((r = globalThis) === null || r === undefined ? undefined : r.LarkAPI?.paging) && !browserEnvDetectionUtil.browserDetector.isFromGroup()) {
        globalThis.LarkAPI.paging.getRuntimeInstances().then(e => {
          let {
            content: i
          } = e;
          i.on("destroyed", o);
        }).catch(e => {});
      } else {
        window.addEventListener("beforeunload", o);
      }
    } else if (n === "off" && (!globalThis.LarkAPI?.paging || browserEnvDetectionUtil.browserDetector.isFromGroup())) {
      window.removeEventListener("beforeunload", o);
    }
  };
  let ez = e => {};
  function eq(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class eY {
    startListen() {
      this.eventEmitter.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, this.handleAllDone);
      this.eventEmitter.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_RESPONSE, this.onSliceResp);
      this.eventEmitter.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_SKIPPED_BLOCK_DONE, this.onSkipResponse);
      this.eventEmitter.on(lazyRecordClientvars.clientvarEvents.SHOW_OOPS, this.handleOops);
      eK({
        type: "on",
        clearHandle: this.getClientVarsByBackground,
        clearSuiteClientVarsHandle: this.deleteCache
      });
    }
    destroy() {
      this.stopListen();
    }
    deleteSSRCache() {
      if (this.clientVarCache?.rootType === docBlockTypeConstants.blockTypeConstants.PAGE && this.token) {
        ez(this.token);
      }
    }
    setUseCompleteCache(e) {
      this.useCompleteCache = e;
    }
    stopListen() {
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, this.handleAllDone);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SLICE_RESPONSE, this.onSliceResp);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_SKIPPED_BLOCK_DONE, this.onSkipResponse);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.SHOW_OOPS, this.handleOops);
      eK({
        type: "off",
        clearHandle: this.getClientVarsByBackground,
        clearSuiteClientVarsHandle: this.deleteCache
      });
    }
    constructor(e, i, r) {
      this.eventEmitter = e;
      eq(this, "clientVarCache", undefined);
      eq(this, "useCompleteCache", false);
      eq(this, "token", undefined);
      eq(this, "restNextCursors", undefined);
      eq(this, "restSkipBlockSet", undefined);
      eq(this, "clientvarExtraParams", undefined);
      eq(this, "clientVarsToMerge", undefined);
      eq(this, "saveCollectedClientvar", () => {
        var e;
        if (this.clientVarsToMerge && this.useCompleteCache) {
          this.clientVarsToMerge.next_cursors = Array.from(this.restNextCursors);
          this.clientVarsToMerge.skip_blocks = Array.from(this.restSkipBlockSet);
          if ((e = this.clientVarCache) !== null && e !== undefined) {
            e.setClientVarsCache(this.clientVarsToMerge);
          }
        }
      });
      eq(this, "handleOops", e => {
        var i;
        if ((i = this.clientVarCache) !== null && i !== undefined) {
          i.setInvalid("oops");
        }
      });
      eq(this, "deleteCache", () => {
        var e;
        if ((e = this.clientVarCache) !== null && e !== undefined) {
          e.setInvalid("deleteCache");
        }
      });
      eq(this, "getClientVarsByBackground", () => {
        var i;
        if (this.clientVarCache?.rootType === docBlockTypeConstants.blockTypeConstants.PAGE && this.token) {
          if ((i = this.clientVarCache) !== null && i !== undefined) {
            i.getClientVarsByBackground({
              token: this.token,
              ...this.clientvarExtraParams
            });
          }
        }
      });
      eq(this, "handleAllDone", () => {
        this.saveCollectedClientvar();
      });
      eq(this, "onSliceResp", e => {
        let {
          clientvar: i,
          taskId: r
        } = e;
        if (r !== this.token) {
          return;
        }
        let {
          next_cursors: s,
          skip_blocks: n
        } = i;
        this.restNextCursors = s || [];
        if (n != null) {
          n.forEach(e => this.restSkipBlockSet.add(e));
        }
        this.clientVarsToMerge = this.merge(this.clientVarsToMerge, i);
        this.setUseCompleteCache(!this.clientVarsToMerge.has_more);
      });
      eq(this, "onSkipResponse", e => {
        let {
          clientvar: i,
          taskId: r
        } = e;
        if (r !== this.token) {
          this.restSkipBlockSet.delete(r);
          this.clientVarsToMerge = this.merge(this.clientVarsToMerge, throttledOmitPathStringify.omitPathStringify(i, ["has_more", "cursor", "skip_blocks", "next_cursors"]));
          this.setUseCompleteCache(!this.clientVarsToMerge.has_more);
        }
      });
      eq(this, "merge", (e, i) => {
        let r = throttledDeepCloneUtil.throttledDeepClone(e, i);
        r.next_cursors = i.next_cursors;
        Object.entries(r.block_map).forEach(e => {
          let [i, s] = e;
          if (s.isFake) {
            delete r.block_map[i];
          }
        });
        return r;
      });
      if (!offlineStatusSelectorsUtils.isMobileOrOffline()) {
        return;
      }
      this.clientVarCache = r;
      this.clientvarExtraParams = i;
      this.startListen();
      this.restNextCursors = [];
      this.restSkipBlockSet = new Set();
      this.token = r == null ? undefined : r.token;
      window.addEventListener("visibilitychange", () => {
        if (document.visibilityState !== "visible") {
          this.getClientVarsByBackground();
        }
      });
      window.addEventListener("beforeClear", () => {
        this.getClientVarsByBackground();
      });
    }
  }
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docxTokenMappingResolver = require("docx-token-mapping-resolver") /*id: 586713*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docBlockOperationManager = require("doc-block-operation-manager") /*id: 479790*/;
  var docxOfflineClientVarStore = require("docx-offline-client-var-store") /*id: 104010*/;
  var blockActionConstants = require("block-action-constants") /*id: 699900*/;
  var docxApplyChanges = require("docx-apply-changes") /*id: 822361*/;
  var docxLoggerFactory = require("docx-logger-factory") /*id: 417672*/;
  var docxOfflineService = require("docx-offline-service") /*id: 170752*/;
  var docxWorkletConstants = require("docx-worklet-constants") /*id: 256071*/;
  var docxRustFileOperations = require("docx-rust-file-operations") /*id: 966944*/;
  let tr = (e, i) => {
    var r;
    if (i != null && (r = i.client) !== null && r !== undefined) {
      r.sendToJSWorklet(docxWorkletConstants.ccmWorklet, {
        name: docxWorkletConstants.updateClientvars,
        token: e.token
      });
    }
  };
  let ts = async (e, i) => {
    var r;
    await (i == null ? undefined : (r = i.client) === null || r === undefined ? undefined : r.sendToJSWorklet(docxWorkletConstants.ccmWorklet, {
      name: docxWorkletConstants.downloadResource,
      token: e
    }));
  };
  let tn = async e => {
    let i = docxOfflineService.offlineService.getDocxImageOfflineStore(window.User.id);
    await i.deleteItem(`OFFLINE_UPLOAD_IMAGE_DATA_${e}`);
    await i.deleteItem(`OFFLINE_PASTE_IMAGE_DATA${e}`);
    let r = docxOfflineService.offlineService.getDocxFileOfflineStore(window.User.id);
    await r.deleteItem(`OFFLINE_UPLOAD_FILE_DATA${e}`);
    await r.deleteItem(`OFFLINE_PASTE_FILE_DATA${e}`);
    await docxRustFileOperations.deleteResourceCache(e);
  };
  function to(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class ta {
    get cacheKey() {
      return `CLIENT_VARS${this.rootType === docBlockTypeConstants.blockTypeConstants.PAGE ? "" : this.token}`;
    }
    get localCacheKey() {
      return `LOCAL_CLIENT_VARS${this.rootType === docBlockTypeConstants.blockTypeConstants.PAGE ? "" : this.token}`;
    }
    async getToken() {
      return docxTokenMappingResolver.getRealToken(this.token);
    }
    setInvalid(e, i, r) {
      let s = isErrorUtil.isError(i) ? i.message : String(i);
      this.logger.info(`cache is broken: ${e}, detail: ${s}`);
      if (r) {
        this.logger.info(`lack block length: ${r.length}, example ${r[0]}`);
      }
      docxEventCollector.docEventCollector("ccm_doc_client_vars_cache_error_dev", {
        action: "after_optimize_set_invalid",
        message: e,
        detail: s
      });
      this.getToken().then(e => {
        docxOfflineClientVarStore.getDocxVarStore(blockActionConstants.clientVarTypes.CLIENT_VARS).setItem({
          key: this.cacheKey,
          token: e,
          data: undefined,
          type: 22
        });
        tn(e);
        this.isValid = false;
      }).catch(e => {
        this.logger.info(`setInvalid getToken error: ${e}`);
      });
    }
    destroy() {
      var e;
      var i;
      var r;
      var s;
      if (!!this.isClientVarsSyncEnabled && !syncUrlBlockUtils.isSyncingActive()) {
        docxUserDetailManager.UserDetailManager.offChange(this.handleUserInfoChange);
        this.collab.off(collaborativeEditingFlowSyncModule.MessageType.AcceptCommit, this._handleAcceptCommit);
        this.collab.off(collaborativeEditingFlowSyncModule.MessageType.InitFinish, this._handleSyncReady);
        if ((e = this.collab.sync) !== null && e !== undefined) {
          e.off(collaborativeEditingFlowSyncModule.GM.NewChanges, this._handleNewChanges);
        }
        if ((i = this.collab.sync) !== null && i !== undefined) {
          i.off(collaborativeEditingFlowSyncModule.GM.VersionChange, this._handleVersionChange);
        }
        this.handleMetaChange;
        if ((r = this.sub) !== null && r !== undefined) {
          r.unsubscribe();
        }
        this.updater.destroy();
        this.logger.info("destroy success");
      }
    }
    constructor(e, i, r, s, n) {
      this.fetcher = e;
      this.collab = i;
      this.token = r;
      to(this, "isClientVarsSyncEnabled", docxApplyChanges.getDefaultTrue());
      to(this, "updater", new docBlockOperationManager.DocBlockManager({
        deletedBlocks: {},
        token: this.token
      }));
      to(this, "isValid", this.isClientVarsSyncEnabled);
      to(this, "structureVersionInDB", -1);
      to(this, "beforeCacheChanges", []);
      to(this, "changesInThrottle", {
        pageVersion: -1,
        ops: [],
        deletedBlocks: {},
        uuid: ""
      });
      to(this, "clientVarsCache", undefined);
      to(this, "sub", undefined);
      to(this, "rootType", undefined);
      to(this, "jsRuntimeClient", undefined);
      to(this, "lastSaveClientvarsUuid", undefined);
      to(this, "logger", docxLoggerFactory.createLogger("CVC"));
      to(this, "init", () => {
        var e;
        if (!!this.isClientVarsSyncEnabled && !syncUrlBlockUtils.isSyncingActive()) {
          this.collab.on(collaborativeEditingFlowSyncModule.MessageType.AcceptCommit, this._handleAcceptCommit);
          this.collab.on(collaborativeEditingFlowSyncModule.MessageType.InitFinish, this._handleSyncReady);
          this.handleMetaChange;
          this.sub = this.fetcher.fetchRecordSuccess$.subscribe(e => {
            this.addBlockData(e);
          });
          docxUserDetailManager.UserDetailManager.onChange(this.handleUserInfoChange);
          this.logger.info("init success");
        }
      });
      to(this, "setClientVarsCache", e => {
        this.structureVersionInDB = e.structure_version;
        this.clientVarsCache = e;
        try {
          for (let {
            updateType: e,
            data: r,
            blockWillApplyVersion: s
          } of this.beforeCacheChanges) {
            var i;
            if ((i = this.updater.updateClientvarsMap.get(e)) !== null && i !== undefined) {
              i({
                clientvarsCache: this.clientVarsCache,
                data: r,
                blockWillApplyVersion: s
              });
            }
          }
          this.beforeCacheChanges = [];
          if (this.updater.deficiencyBlocks.size === 0) {
            this.clientVarsCache.structure_version = this.collab.getSyncVersion();
          }
          this._save(true, blockActionConstants.blockActionTypes.INIT);
        } catch (e) {
          this.setInvalid("setClientVarsCache error", e);
        }
      });
      to(this, "getClientVarsCache", () => this.clientVarsCache);
      to(this, "updateCache", async (e, i) => {
        if (!e.data?.block_map || !(Object.keys(e.data.block_map).length > 0)) {
          throw Error("no blocks in clientvars");
        }
        let {
          isValid: s,
          illegalType: n,
          lackBlocks: o
        } = docxBlockValidatorUtils.validateBlockMap(e.data, this.rootType);
        if (!s) {
          this.setInvalid(n, undefined, o);
          return;
        }
        let a = Object.keys(e.data.block_map).length;
        let l = Date.now();
        let c = uuidGeneratorUtil.generateUuid();
        e.setDataTimestamp = l;
        e.timestamp = l;
        safeObjectSetWrapper.safeObjectSet(e.data, "uuid", c);
        if (this.updater.checkHasDeficiencyBlocks(e.data)) {
          this.logger.info("deficiencyBlocks not empty, ignore!", this.updater.deficiencyBlocks.size);
          return;
        }
        let h = await this.getToken();
        if (browserEnvironmentDetectionUtils_1.isBrowserEnvironment()) {
          await Promise.all([docxOfflineClientVarStore.getDocxVarStore(blockActionConstants.clientVarTypes.CLIENT_VARS).setItem({
            key: this.cacheKey,
            token: h,
            data: e,
            type: 22
          }), docxOfflineClientVarStore.getDocxVarStore(blockActionConstants.clientVarTypes.LOCAL_CLIENT_VARS).setItem({
            key: this.localCacheKey,
            token: h,
            data: e,
            type: 22
          })]);
        } else {
          await docxOfflineClientVarStore.getDocxVarStore(blockActionConstants.clientVarTypes.CLIENT_VARS).setItem({
            key: this.cacheKey,
            token: h,
            data: e,
            type: 22
          });
        }
        this.lastSaveClientvarsUuid = c;
        if (docxApplyChanges.isDocxApplyChanges()) {
          this.structureVersionInDB = e.data.structure_version;
          this.changesInThrottle = {
            pageVersion: this.structureVersionInDB,
            ops: [],
            deletedBlocks: {},
            uuid: this.lastSaveClientvarsUuid
          };
          await docxOfflineClientVarStore.getDocxVarStore(blockActionConstants.clientVarTypes.CLIENT_VARS_OP).setItem({
            key: blockActionConstants.cacheOpListKey,
            token: h,
            data: undefined,
            type: 22
          });
          this._setClientVarsOp.cancel();
        }
        if (platformDocUtils.iqA) {
          reduxStoreInitializer.reduxStore.dispatch(platformDocUtils.iqA({
            token: h,
            data: e
          }));
        }
        docxEventCollector.docEventCollector("ccm_doc_client_vars_cache_dev", {
          status: "save_success",
          version: e.data.structure_version
        });
        this.logger.info(`setData success,
      version: ${e.data.structure_version},
      blockLen: ${a},
      because: ${i},
      setDataTimestamp: ${l},
      uuid: ${c}`);
        ts(h, this.jsRuntimeClient);
      });
      to(this, "beforeHasCache", (e, i, r) => {
        this.beforeCacheChanges.push({
          updateType: e,
          data: deepCloneWrapper_1.deepClone(i),
          blockWillApplyVersion: r
        });
      });
      to(this, "getClientVarsByBackground", e => {
        try {
          if (this.isValid && this.clientVarsCache) {
            this._save(true, blockActionConstants.blockActionTypes.DESTROY);
          }
          tr(e, this.jsRuntimeClient);
        } catch (e) {
          this.setInvalid("getClientVarsByBackground error", e);
        }
      });
      to(this, "addBlockData", async e => {
        try {
          if (!this.isValid) {
            return;
          }
          let {
            clientVarsCache: i
          } = this;
          if (!i) {
            this.beforeHasCache(blockActionConstants.blockActionTypes.ADD_BLOCK_DATA, e);
            return;
          }
          this.clientVarsCache = this.updater.handleAddBlock({
            clientvarsCache: i,
            data: e
          });
          this._collectChangesInThrottle({
            type: blockActionConstants.blockActionTypes.ADD_BLOCK_DATA,
            data: e
          });
          this._save(false, blockActionConstants.blockActionTypes.ADD_BLOCK_DATA);
        } catch (e) {
          this.setInvalid("addBlockData error", e);
        }
      });
      to(this, "updateMentionDocCache", (e, i, r, s) => {
        try {
          if (!this.isValid) {
            return;
          }
          if (!this.clientVarsCache) {
            this.beforeHasCache(blockActionConstants.blockActionTypes.MENTION_DOC_CHANGE, [e, i, r, s]);
            return;
          }
          this.clientVarsCache = this.updater.handleMentionDocChange({
            clientvarsCache: this.clientVarsCache,
            data: [e, i, r, s]
          });
          this._collectChangesInThrottle({
            type: blockActionConstants.blockActionTypes.MENTION_DOC_CHANGE,
            data: [e, i, r, s]
          });
          this._save(false, blockActionConstants.blockActionTypes.MENTION_DOC_CHANGE);
        } catch (e) {
          this.setInvalid("updateMentionDocCache error", e);
        }
      });
      to(this, "handleUserInfoChange", (e, i) => {
        try {
          if (!this.isValid) {
            return;
          }
          if (!this.clientVarsCache) {
            this.beforeHasCache(blockActionConstants.blockActionTypes.MENTION_USER_CHANGE, [e, i]);
            return;
          }
          this.clientVarsCache = this.updater.handleUserInfoChange({
            clientvarsCache: this.clientVarsCache,
            data: [e, i]
          });
          this._collectChangesInThrottle({
            type: blockActionConstants.blockActionTypes.MENTION_USER_CHANGE,
            data: [e, i]
          });
          this._save(false, blockActionConstants.blockActionTypes.MENTION_USER_CHANGE);
        } catch (e) {
          this.setInvalid("handleUserInfoChange error", e);
        }
      });
      to(this, "_save", (e, i) => {
        if (!this.isValid) {
          return;
        }
        if (!this.clientVarsCache) {
          throw Error("will save clientvars, but it is undefined");
        }
        let r = {
          code: 0,
          msg: "Success",
          data: this.clientVarsCache
        };
        let s = `${e ? "flush" : "throttle"}_${i}`;
        if (e) {
          this.updateCache(r, s);
        } else {
          this._throttleUpdateCache(r, s);
        }
      });
      to(this, "_throttleUpdateCache", debounceUtilWrapper.createDebounce(this.updateCache, 15000));
      to(this, "_handleAcceptCommit", e => {
        try {
          var r;
          if (!this.isValid || !e.recordOperation?.ops || ((r = e.recordOperation) === null || r === undefined ? undefined : r.ops.length) === 0) {
            return;
          }
          let {
            id: s
          } = e;
          let n = this.collab.getVersion(s);
          if (!n) {
            throw Error("recordOperations version is undefined");
          }
          if (!this.clientVarsCache) {
            this.beforeHasCache(blockActionConstants.blockActionTypes.ACCEPT_COMMIT, e, n);
            return;
          }
          this.clientVarsCache = this.updater.handleAcceptCommit({
            clientvarsCache: this.clientVarsCache,
            data: e,
            blockWillApplyVersion: n
          });
          if (this.updater.deficiencyBlocks.size === 0) {
            this.clientVarsCache.structure_version = this.collab.getSyncVersion();
          }
          this._collectChangesInThrottle({
            type: blockActionConstants.blockActionTypes.ACCEPT_COMMIT,
            blockWillApplyVersion: n,
            data: e
          });
          this._save(false, blockActionConstants.blockActionTypes.ACCEPT_COMMIT);
        } catch (e) {
          this.setInvalid("handleAcceptCommit error", e);
        }
      });
      to(this, "_handleNewChanges", e => {
        try {
          if (!this.isValid) {
            return;
          }
          let {
            recordChange: i,
            isNewEntity: r
          } = e;
          let {
            id: s
          } = i;
          let n = r ? 1 : this.collab.getVersion(s);
          if (!n) {
            throw Error("recordOperations version is undefined");
          }
          if (!this.clientVarsCache) {
            this.beforeHasCache(blockActionConstants.blockActionTypes.NEW_CHANGES, e, n);
            return;
          }
          this.clientVarsCache = this.updater.handleNewChanges({
            clientvarsCache: this.clientVarsCache,
            data: e,
            blockWillApplyVersion: n
          });
          if (this.updater.deficiencyBlocks.size === 0) {
            this.clientVarsCache.structure_version = this.collab.getSyncVersion();
          }
          this._collectChangesInThrottle({
            type: blockActionConstants.blockActionTypes.NEW_CHANGES,
            blockWillApplyVersion: n,
            data: e
          });
          this._save(false, blockActionConstants.blockActionTypes.NEW_CHANGES);
        } catch (e) {
          this.setInvalid("handleNewChanges error", e);
        }
      });
      to(this, "_handleVersionChange", async e => {
        try {
          if (!this.isValid) {
            return;
          }
          if (!this.clientVarsCache) {
            this.beforeHasCache(blockActionConstants.blockActionTypes.VERSION_CHANGE, e);
            return;
          }
          this.clientVarsCache = this.updater.handleVersionChange({
            clientvarsCache: this.clientVarsCache,
            data: e
          });
          this._collectChangesInThrottle({
            type: blockActionConstants.blockActionTypes.VERSION_CHANGE,
            data: e
          });
          this._save(false, blockActionConstants.blockActionTypes.VERSION_CHANGE);
        } catch (e) {
          this.setInvalid("handleVersionChange error", e);
        }
      });
      to(this, "handleMetaChange", e => {
        try {
          if (!this.isValid || !e.editTime) {
            return;
          }
          if (!this.clientVarsCache) {
            this.beforeHasCache(blockActionConstants.blockActionTypes.EDITTIME_CHANGE, e);
            return;
          }
          this.clientVarsCache = this.updater.handleMetaChange({
            clientvarsCache: this.clientVarsCache,
            data: e
          });
          this._collectChangesInThrottle({
            type: blockActionConstants.blockActionTypes.EDITTIME_CHANGE,
            data: e
          });
          this._save(false, blockActionConstants.blockActionTypes.EDITTIME_CHANGE);
        } catch (e) {
          this.setInvalid("handleMetaChange error", e);
        }
      });
      to(this, "_handleSyncReady", () => {
        if (!this.collab?.sync) {
          this.logger.info("sync is undefined when _handleSyncReady");
          return;
        }
        this.collab.sync.on(collaborativeEditingFlowSyncModule.GM.NewChanges, this._handleNewChanges);
        this.collab.sync.on(collaborativeEditingFlowSyncModule.GM.VersionChange, this._handleVersionChange);
      });
      to(this, "_collectChangesInThrottle", e => {
        if (!docxApplyChanges.isDocxApplyChanges()) {
          this.logger.info("isDocxClientVarsApplyChangesEnabled is false");
          return;
        }
        if (!this.clientVarsCache) {
          this.setInvalid("collectChangesInThrottle clientvarsCache is undefined");
          throw Error("collectChangesInThrottle clientvarsCache is undefined");
        }
        if (!this.lastSaveClientvarsUuid) {
          this.setInvalid("collectChangesInThrottle lastSaveClientvarsUuid is undefined");
          throw Error("collectChangesInThrottle lastSaveClientvarsUuid is undefined");
        }
        this.changesInThrottle.ops.push(e);
        this.changesInThrottle.pageVersion = this.structureVersionInDB;
        this.changesInThrottle.deletedBlocks = this.updater.deletedBlocks;
        this.changesInThrottle.uuid = this.lastSaveClientvarsUuid;
        this._setClientVarsOp();
      });
      to(this, "_setClientVarsOp", debounceUtil_1_1.debounce(() => {
        this.getToken().then(e => docxOfflineClientVarStore.getDocxVarStore(blockActionConstants.clientVarTypes.CLIENT_VARS_OP).setItem({
          key: blockActionConstants.cacheOpListKey,
          token: e,
          data: this.changesInThrottle,
          type: 22
        }));
      }));
      this.rootType = s;
      this.jsRuntimeClient = n;
    }
  }
  var mobileOfflineStatusCheck = require("mobile-offline-status-check") /*id: 381620*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docUniqueIdManager = require("doc-unique-id-manager") /*id: 809545*/;
  var docxSecureStorageManager = require("docx-secure-storage-manager") /*id: 363869*/;
  var apiEndpointConstants = require("api-endpoint-constants") /*id: 403286*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  var docxWatchdogConfig = require("docx-watchdog-config") /*id: 595315*/;
  var taskSyncStatusConstants = require("task-sync-status-constants") /*id: 964181*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var browserDebugOfflineCheck = require("browser-debug-offline-check") /*id: 819067*/;
  function tm(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class tE {
    constructor() {
      tm(this, "sendMessageToOtherTab", (e, i) => {
        localStorage.setItem(e, JSON.stringify({
          backupIDMap: i
        }));
        localStorage.removeItem(e);
      });
      tm(this, "getMessageFromEvent", (e, i) => {
        if (i.key !== e || !i.newValue) {
          return null;
        }
        let r = JSON.parse(i.newValue);
        return typeof r == "object" && r.backupIDMap;
      });
      tm(this, "onHandleReceiveMessage", e => {
        window.addEventListener("storage", e);
      });
      tm(this, "offHandleReceiveMessage", e => {
        window.removeEventListener("storage", e);
      });
    }
  }
  var secureStorageInitializer = require("secure-storage-initializer") /*id: 724501*/;
  var docxEventLogger = require("docx-event-logger") /*id: 141272*/;
  let tS = browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp;
  class tC extends docxEventLogger.DocxEventLogger {
    log(e, i) {
      if (e !== collaborativeEditingFlowSyncModule.LogCategories.DATA_CHANGE && (tS || offlineStatusSelectorsUtils.isDocxOfflineEnabled())) {
        docxLoggerFactory.createLogger("offline-sync").info(`${e} params: ${i ? JSON.stringify(i) : ""}`);
      }
      if (e === collaborativeEditingFlowSyncModule.LogCategories.END) {
        this.onLogEnd(i);
      }
      super.log(e, {
        ...i,
        driver: secureStorageInitializer.getStorageDriver()
      });
    }
    constructor(e, i, r) {
      var s;
      var n;
      var o;
      super(e, i);
      this.onLogEnd = r;
      s = "logError";
      n = docxUtilityHelpers.captureException;
      if ((s = typeof (o = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var s = r.call(e, i || "default");
          if (typeof s != "object") {
            return s;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(s, "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, s, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[s] = n;
      }
    }
  }
  var docxWorkletTokenManager = require("docx-worklet-token-manager") /*id: 949493*/;
  var tokenManager = require("token-manager") /*id: 939673*/;
  function tR(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  let tA = function () {
    var e = arguments.length;
    var i = Array(e);
    var r = 0;
    for (; r < e; r++) {
      i[r] = arguments[r];
    }
  };
  class tk {
    constructor(e, i = true) {
      var r = this;
      this.token = e;
      this.isPage = i;
      tR(this, "storage", undefined);
      tR(this, "needSyncStorage", undefined);
      tR(this, "createStatusStorage", undefined);
      tR(this, "jsRuntimeClient", undefined);
      tR(this, "constantKey", "PAGE_TOKEN");
      tR(this, "cacheKey", []);
      tR(this, "getItem", async e => {
        var i;
        var r;
        var s;
        var n;
        var o;
        var a;
        let l = await ((i = this.createStatusStorage) === null || i === undefined ? undefined : i.getItem(this.token));
        if (l) {
          let {
            token: i,
            status: a
          } = l;
          if (a === taskSyncStatusConstants.taskOpStatus.START) {
            if ((s = this.storage) === null || s === undefined) {
              return undefined;
            } else {
              return s.getItem(e);
            }
          }
          if (a === taskSyncStatusConstants.taskOpStatus.REAL_TOKEN_OBTAINED) {
            let r = await ((n = this.storage) === null || n === undefined ? undefined : n.getItem(e));
            return r || ((o = this.storage) === null || o === undefined ? undefined : o.getItem(e.replace(e, i)));
          }
          if ((r = this.storage) === null || r === undefined) {
            return undefined;
          } else {
            return r.getItem(e.replace(e, i));
          }
        }
        {
          let i = await ((a = this.storage) === null || a === undefined ? undefined : a.getItem(e));
          if (!docUrlResolver.isDocDomain(this.token) && i && i.change_map) {
            let e = await tokenManager.tokenManager.getFakeToken(this.token);
            this.refreshBackupData(i, e);
          }
          return i;
        }
      });
      tR(this, "refreshBackupData", (e, i) => {
        let {
          change_map: r
        } = e;
        if (r[i]) {
          r[this.token] = r[i];
          r[this.token].id = this.token;
          delete r[i];
          Object.keys(r).forEach(e => {
            r[e].payload.ops = collaborativeEditingFlowSyncModule.mergeOperationsWithTransform({
              ops: r[e].payload.ops,
              originID: i,
              replaceID: this.token
            });
          });
          return e;
        }
      });
      tR(this, "getKeyWithoutToken", function (e, i = r.token) {
        if (r.isPage) {
          return e.replace(i, r.constantKey);
        } else {
          return e;
        }
      });
      tR(this, "setItem", async (e, i) => {
        var r;
        var s;
        var n;
        var o;
        tA("setItem", e, i);
        let a = await ((r = this.createStatusStorage) === null || r === undefined ? undefined : r.getItem(this.token));
        if (!a) {
          if ((o = this.storage) === null || o === undefined) {
            return undefined;
          } else {
            return o.setItem(e, i);
          }
        }
        {
          let {
            token: r,
            status: o
          } = a;
          if (o === taskSyncStatusConstants.taskOpStatus.START) {
            if ((n = this.storage) === null || n === undefined) {
              return undefined;
            } else {
              return n.setItem(e, i);
            }
          }
          if (o === taskSyncStatusConstants.taskOpStatus.REAL_TOKEN_OBTAINED) {
            this.cacheKey.push(e);
            setTimeout(async () => {
              var r;
              var s;
              let n = await ((r = this.createStatusStorage) === null || r === undefined ? undefined : r.getItem(this.token));
              if (!n || n.status === taskSyncStatusConstants.taskOpStatus.REAL_TOKEN_OBTAINED) {
                throw Error("create status always is REAL_TOKEN_OBTAINED");
              }
              if (this.cacheKey[e]) {
                if ((s = this.storage) === null || s === undefined) {
                  return undefined;
                } else {
                  return s.setItem(e.replace(e, n.token), i);
                }
              }
            }, 5000);
            return;
          }
          delete this.cacheKey[e];
          if ((s = this.storage) === null || s === undefined) {
            return undefined;
          } else {
            return s.setItem(e.replace(e, r), i);
          }
        }
      });
      tR(this, "removeItem", async e => {
        var i;
        if ((i = this.storage) === null || i === undefined) {
          return undefined;
        } else {
          return i.deleteItem(e);
        }
      });
      tR(this, "updateOfflineUsableStatus", e => {
        var i;
        var r;
        if ((r = this.jsRuntimeClient) !== null && r !== undefined && (i = r.client) !== null && i !== undefined) {
          i.sendToJSWorklet(docxWorkletConstants.ccmWorklet, {
            name: docxWorkletConstants.updateOfflineUsableStatus,
            token: this.token,
            status: e,
            from: "[docx] update is need sync"
          });
        }
      });
      tR(this, "updateIsNeedSync", (e, i) => {
        var r;
        if ((r = this.needSyncStorage) !== null && r !== undefined) {
          r.setItem(`DOCX_BACKGROUND_NEED_SYNC:${this.token}`, e);
        }
        if (e) {
          if (!networkStateEventCollector.collectNetworkState()) {
            this.updateOfflineUsableStatus(taskSyncStatusConstants.fileSyncStatus.UPLOAD_PENDING);
          }
        } else {
          this.updateOfflineUsableStatus(taskSyncStatusConstants.fileSyncStatus.SYNCED);
        }
      });
      this.storage = docxOfflineService.offlineService.getDocxOperationOfflineStore(window.User.id);
      this.needSyncStorage = docxOfflineService.offlineService.getNeedSyncOfflineStore(window.User.id);
      this.jsRuntimeClient = docxWorkletTokenManager.DocxWorkletTokenManager;
      if (docUrlResolver.isDocDomain(e)) {
        this.createStatusStorage = docxOfflineService.offlineService.getCreateStatusStore(window.User.id);
      }
    }
  }
  function tN(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  tR(tk, "category", "pcDontHasCategory");
  let tP = new Set(["docx_backup_change_dev"]);
  class tO extends collaborativeEditingFlowSyncModule.FlowCollab {
    init() {
      super.init();
      window.addEventListener("online", this.handleOnline);
    }
    destroy() {
      super.destroy();
      this.logEnd$.complete();
      this._storage = null;
      window.removeEventListener("online", this.handleOnline);
    }
    _getStorage() {
      if (!this._storage) {
        if (mobileOfflineStatusCheck.isMobileOrOffline(true)) {
          this._storage = new tk(this.token, this.rootType === docBlockTypeConstants.blockTypeConstants.PAGE);
        } else {
          this._storage = docxSecureStorageManager.DocxSecureStorage;
        }
      }
      return this._storage;
    }
    _getRequestInstance() {
      return {
        request: this.collab.sync.autoRetryRequest.bind(this.collab.sync)
      };
    }
    _createLogger() {
      return new tC(tP, {
        realRootToken: this.token,
        realRootType: this.rootType
      }, this.onLogEnd);
    }
    _getCollab() {
      return this.collab;
    }
    _getOfflineApplyAPI() {
      let {
        dataProvider: e
      } = this;
      return {
        hasRecord: i => e.has(i),
        getRecord: i => e.get(i),
        registerRecords: i => e.register(i),
        applyTransaction: e.applyTransaction.bind(e)
      };
    }
    _getMultiTabMessenger() {
      return new tE();
    }
    constructor(e, i, r, s) {
      super(e.rootRecordId, {
        pageToken: s,
        isNeedWatchCollab: true,
        isNeedApply: r === docBlockTypeConstants.blockTypeConstants.PAGE && browserDebugOfflineCheck.isDebugOrOffline(),
        requestAPI: {
          USER_CHANGE: apiEndpointConstants.apiEndpoints.userChange,
          NEW_CHANGES: apiEndpointConstants.apiEndpoints.fetchMiss
        },
        uniqueMemberId: taskSyncStatusConstants.taskConstantId,
        onSyncStatusChanged: e => this._onSyncStatusChanged(e),
        onDataSubmitted: (e, i, r) => this.onDataSubmitted$.next({
          backupID: e,
          payload: i,
          response: r
        }),
        getUniqueID: () => docUniqueIdManager.uniqueIdProvider(),
        MAX_BACKUP_SIZE: docxWatchdogConfig.getWatchdogConfig().maxBackupSize,
        EXPIRATION_INTERVAL: docxWatchdogConfig.getWatchdogConfig().backupValidDays * 86400000,
        extraCommitParams: r === docBlockTypeConstants.blockTypeConstants.PAGE ? {} : {
          host_token: docTokenHelperUtils.resolveDocToken(),
          host_type: platformDocUtils.kNj.DOCX,
          meta_token: e.rootRecordId
        },
        isNewClearerEnable: boolDefaultGetterUtil.getDefaultBool("ccm.docx.new.clearer", false),
        checkBackupidInterval: 180000,
        isSuspenseRecordType: e => e === docBlockTypeConstants.blockTypeConstants.PENDING,
        isGetLastBackupStatusEnable: browserEnvironmentDetectionUtils_1.isBrowserEnvironment()
      });
      this.dataProvider = e;
      this.collab = i;
      this.rootType = r;
      tN(this, "onDataSubmitted$", new observableSubjectClass.Subject());
      tN(this, "logEnd$", new observableSubjectClass.Subject());
      tN(this, "_storage", undefined);
      tN(this, "_onSyncStatusChanged", e => {
        let i = this._getStorage();
        if (mobileOfflineStatusCheck.isMobileOrOffline(true) && this.rootType === docBlockTypeConstants.blockTypeConstants.PAGE && i instanceof tk) {
          i.updateIsNeedSync(e, this.collab.getSyncVersion());
        }
      });
      tN(this, "onLogEnd", e => {
        this.logEnd$.next(e);
      });
      tN(this, "handleOnline", () => {
        if (offlineStatusSelectorsUtils.isGlobalOffline() && !reduxStoreInitializer.reduxStore.getState().appState.currentUser.toJS().id) {
          reduxStoreInitializer.reduxStore.dispatch(platformDocUtils.kav());
        }
      });
    }
  }
  var clientVarLazyConsumerRegistry = require("client-var-lazy-consumer-registry") /*id: 365600*/;
  var noopFunction = require("noop-function") /*id: 824806*/;
  function tD(e) {
    return i => {
      let {
        id: r
      } = i;
      try {
        var s;
        var o;
        if (!(e == null ? undefined : (s = e.perfFeatures) === null || s === undefined ? undefined : s.has(docPerformanceTuningFlags.IdleApplyFlags.OPTIMIZE_IDLE_APPLY | docPerformanceTuningFlags.IdleApplyFlags.UNDETERMINED))) {
          return;
        }
        let i = e == null ? undefined : e.getSplitter().getTree();
        let a = i == null ? undefined : i.getNode(r);
        let l = i == null ? undefined : i.getNode(e.token);
        if (!l || !a || (a == null ? undefined : (o = a.data) === null || o === undefined ? undefined : o.data?.type) === docBlockTypeConstants.blockTypeConstants.PENDING) {
          return;
        }
        noopFunction.noopFunction(l, e, e => {
          return (e == null ? undefined : e.data?.id) === r;
        });
      } catch (e) {}
    };
  }
  var multiGeoToastManager = require("multi-geo-toast-manager") /*id: 330126*/;
  var docxFlowSyncEngine = require("docx-flow-sync-engine") /*id: 310118*/;
  function tV(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class tB extends docxFlowSyncEngine.DocxFlowSyncEngine {
    init(e) {
      super.init(e);
      if (!platformDocUtils.KNd()) {
        this.sync.on(collaborativeEditingFlowSyncModule.GM.NewChangesExtra, this.handleNewChangesExtra);
        this.sync.on(collaborativeEditingFlowSyncModule.GM.WillFetchMiss, this.handleWillFetchMiss);
        this.sync.on(collaborativeEditingFlowSyncModule.GM.HEARTBEAT_CALLBACK, this.handleHeartbeatCallbackRelay);
      }
      docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.COLLAB_MODULE_INIT_FINISH);
    }
    destroy() {
      super.destroy();
      if (this.sync) {
        this.sync.off(collaborativeEditingFlowSyncModule.GM.NewChangesExtra, this.handleNewChangesExtra);
        this.sync.off(collaborativeEditingFlowSyncModule.GM.WillFetchMiss, this.handleWillFetchMiss);
        this.sync.off(collaborativeEditingFlowSyncModule.GM.HEARTBEAT_CALLBACK, this.handleHeartbeatCallbackRelay);
      }
      multiGeoToastManager.MultiGeoToastManager.endAll();
    }
    handleAcceptCommit(e) {
      let i = super.handleAcceptCommit(e);
      this.signalService.acceptCommitSignal.next(e);
      return i;
    }
    handleMultiGeoMessage(e) {
      let {
        token: i,
        status: r
      } = e;
      switch (r) {
        case "201":
          multiGeoToastManager.MultiGeoToastManager.start(i);
          break;
        case "203":
          multiGeoToastManager.MultiGeoToastManager.end(i);
      }
    }
    constructor(...e) {
      super(...e);
      tV(this, "handleAllMissFetched", () => {
        if (!this.hasChangesInBuffer) {
          docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.ALL_MISSED_APPLIED);
        }
      });
      tV(this, "handleNewChangesExtra", e => {
        let {
          user_map: i
        } = e;
        if (i) {
          docxUserDetailManager.UserDetailManager.applyNewChangesExtra(i);
        }
        if (isDesktopBrowserChecker.isDesktopBrowser()) {
          clientVarMetaManager.ClientVarMetaManager.applyNewChangesExtra(e);
        }
      });
      tV(this, "handleWillFetchMiss", () => {
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.FETCH_MISS);
      });
      tV(this, "handleHeartbeatCallbackRelay", () => {
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.HEARTBEAT_CALLBACK);
      });
    }
  }
  class tH extends tB {
    handleNewChangesMessage(e, i) {
      let {
        id: r
      } = e;
      if (e.id !== this.dataProvider.rootRecordId && this.dataProvider.getRecordMap().has(r)) {
        super.handleNewChangesMessage(e, i);
      }
    }
  }
  class tU extends docxFlowSyncEngine.DocxFlowSyncEngine {
    handleNewChangesMessage() {}
  }
  var docxSubscriptionTypes = require("docx-subscription-types") /*id: 682485*/;
  var docxEditorBugTracker = require("docx-editor-bug-tracker") /*id: 140860*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var deferredPromiseFactory_1 = require("deferred-promise-factory_1") /*id: 397926*/;
  function tW(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class tX extends clientVarLazyConsumerRegistry.ClientVarLazyConsumerRegistry {
    async init() {
      if (!this.clientVarLazyLoader.fetchManager) {
        await this.clientVarLazyLoader.waitFetchManager();
      }
      await this.initClientVar();
    }
    destroy() {
      var s;
      var n;
      var o;
      docxEditorBugTracker.trackDocxEditorBug({
        stage: "data-manager destroy",
        fetchLibNeedDestroy: this.fetchLibNeedDestroy,
        fetchSingleToken: this.fetchSingleToken,
        rootRecordId: docxUtilityHelpers.maskSensitiveData(this.options?.rootRecordId),
        pageToken: docxUtilityHelpers.maskSensitiveData(this.options?.pageToken),
        refCount: this.ref?.ref
      });
      if (this.fetchLibNeedDestroy) {
        let e = docxClientvarFetchManager_1.DocxClientvarFetchManager.getInstance().getFetcher(this.options.rootRecordId);
        docxClientvarFetchManager_1.DocxClientvarFetchManager.getInstance().unregister(this.options.rootRecordId);
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          e.stop(this.fetchSingleToken);
        }
        if (e && e.clientvarFetchManager) {
          e.clientvarFetchManager.destroy();
        }
      }
      this.awaitFirstSliceResult = undefined;
      this.restored = false;
      this.logger.destroy();
      this.dataCollab.destroy();
      this.status.destroy();
      this.lazySync.destroy();
      this.lazyRenderer.destroy();
      this.clientVarLazyLoader.destroy();
      if ((s = this.clientVarCache) !== null && s !== undefined) {
        s.destroy();
      }
      this.offlineSync.destroy();
      if ((n = this.ssrToCsrLogger) !== null && n !== undefined) {
        n.destroy();
      }
      if ((o = this.jsRuntimeClient) !== null && o !== undefined) {
        o.destory();
      }
      super.destroy();
    }
    async awaitFirstSliceClientVarsDone() {
      try {
        let {
          awaitFirstSliceClientVars: e
        } = this.options;
        if (e) {
          let i = this.dataProvider.rootRecordId;
          let r = e(i);
          if (r) {
            this.awaitFirstSliceResult = await r;
          }
        }
      } catch (e) {}
    }
    mockSyncedBlock(e) {
      let i = e[this.options.rootRecordId];
      if (i && i.data.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
        i.data.originType = docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
        i.data.type = "page";
        if (!function (e) {
          if (!e) {
            return true;
          }
          let {
            initialAttributedTexts: i,
            apool: r
          } = e;
          return !i.attribs || !i.text || !r.numToAttrib;
        }(i.data.text)) {
          return;
        }
        i.data.text = {
          apool: {
            nextNum: 0,
            numToAttrib: {}
          },
          initialAttributedTexts: {
            attribs: {
              0: ""
            },
            text: {
              0: ""
            }
          }
        };
      }
    }
    async fetchRecords(e) {
      let i = e ? {
        mode: 4,
        id: this.options.pageToken,
        limit: 1,
        block_id: e
      } : {
        id: this.options.pageToken
      };
      return (await apiClientInstance.apiClient.get("/api/docx/pages/client_vars", {
        baseURL: "/space",
        params: i,
        retryMaxCount: 0
      })).data;
    }
    async initClientVar() {
      var e;
      var i;
      var s;
      var n;
      var a;
      var l;
      var c;
      var h;
      var f;
      this.logger.onClientVarFetchStart();
      if (this.options.awaitFirstSliceClientVars) {
        await this.awaitFirstSliceClientVarsDone();
        if ((e = (i = this.options).resetCurrentClientVarsFetchTask) !== null && e !== undefined) {
          e.call(i);
        }
      }
      try {
        if (fullscreenModeDetector.isFullscreenMode()) {
          let e = this.dataProvider.rootRecordId;
          let i = platformDocUtils.o0s.parseQuery(location.search).blockId;
          let l = null;
          if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
            let o = (n = window.DATA) === null || n === undefined ? undefined : (s = n[e]) === null || s === undefined ? undefined : s.CLIENT_VARS?.data;
            let a = tG(o, i);
            if (a) {
              l = tK(a);
            }
          } else {
            l = (a = window.DATA) === null || a === undefined ? undefined : a.clientVars?.data;
          }
          if (!l) {
            let e = null;
            if (i) {
              e = await this.fetchRecords(i);
            } else {
              let r = await this.fetchRecords();
              i = function (e, i) {
                let {
                  block_map: r,
                  block_sequence: s
                } = e;
                if (!r || !s) {
                  return e.id;
                }
                for (let e of s) {
                  var n;
                  if (((n = r[e]) === null || n === undefined ? undefined : n.data.type) === i) {
                    return e;
                  }
                }
                return e.id;
              }(r, docBlockTypeConstants.blockTypeConstants.WHITEBOARD);
              e = tG(r, i);
            }
            l = tK(e);
          }
          if (l) {
            this.initCollab(l);
            this.connectFullscreenSync(e, i, l.structure_version);
            clientVarMetaManager.ClientVarMetaManager.applyClientVar(l);
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.FETCH_DOCX_CLIENTVARS_SUCCESS, 0);
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.WORKER_FETCH_DOCX_CLIENTVAR_FINISH, 0);
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.WORKER_FETCH_DOCX_CLIENTVAR_TO_MAIN_FINISH, 0);
            this.clientVarLazyConsumer.token = e;
            this.clientVarRegistry.applyClientVar(l, e => {
              this.dataProvider.register(e);
            });
            this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_SUB_TASK_FINISH, Object.assign({}, {
              clientvarToWork: l,
              taskId: l.id
            }, {
              lazyRecord: this
            }));
            this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALLOW_EDIT);
            this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.POST_CLIENTVAR_FETCH_ALLOW_EDIT);
            this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, {
              lazyRecord: this.clientVarLazyLoader
            });
            this.dataCollab.sync.setAllDataReady();
          } else {
            let e = Error("blockDataManager fetchClientvars no data error.");
            e.code = collaborativeEditingFlowSyncModule.ErrorType.NOT_FOUND;
            throw e;
          }
        } else {
          await this.initSliceClientvars(this.options.rootType === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE);
        }
      } catch (e) {
        diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol).persist.error({
          eventName: "FlowDocx_InitClientVarError",
          error: e
        });
        if ((l = (c = this.options).onFetchError) !== null && l !== undefined) {
          l.call(c, e);
        }
        if ((h = (f = this.options).onClientVarsError) !== null && h !== undefined) {
          h.call(f, e == null ? undefined : e.errorOption);
        }
        this.logger.onClientVarFetchError(e);
        this.fetchError$.next(e);
        throw e;
      }
    }
    async initSliceClientvars(e) {
      var i;
      let l = e ? this.options.pageToken : this.options.rootRecordId;
      let c = e ? "" : window.location.hash.slice(1);
      this.fetchLibNeedDestroy = true;
      if ((i = this.clientVarCache) !== null && i !== undefined) {
        i.init();
      }
      let {
        getClientVarsRequestExtraParams: h
      } = this.options;
      if (offlineStatusSelectorsUtils.isMobileOrOffline()) {
        this.fetchSingleToken = `${`${Math.random()}`.slice(2, -1)}${new Date().getTime()}`;
        await _(this.options.rootType);
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          docxEditorBugTracker.trackDocxEditorBug({
            stage: "data-manager init clientvar",
            fetchLibNeedDestroy: this.fetchLibNeedDestroy,
            fetchSingleToken: this.fetchSingleToken,
            rootRecordId: docxUtilityHelpers.maskSensitiveData(this.options?.rootRecordId),
            pageToken: docxUtilityHelpers.maskSensitiveData(this.options?.pageToken),
            refCount: this.ref?.ref
          });
        }
        if (await docxClientvarFetchManager_1.DocxClientvarFetchManager.getInstance().getFetcher(this.options.rootRecordId, this.offlineSync?.getLastBackupIsRestored).start(l, "editor", new eY(this.eventEmitter, (h == null ? undefined : h()) ?? {}, this.clientVarCache), {
          awaitToken: this.fetchSingleToken,
          rootType: this.options.rootType
        })) {
          return;
        }
      } else {
        docxClientvarFetchManager_1.DocxClientvarFetchManager.getInstance().getFetcher(this.options.rootRecordId).start(l, "editor", undefined, {
          restartCodes: [collaborativeEditingFlowSyncModule.ErrorType.NO_PERMISSION],
          awaitFirstSliceResult: this.awaitFirstSliceResult,
          rootType: this.options.rootType
        });
      }
      this.onClientVarSlicedFetchInit();
      let f = (c = docTokenHelperUtils.transformTokenId(c)).startsWith("fdc");
      let v = this.clientVarLazyLoader;
      let g = this.clientVarLazyConsumer;
      let p = deferredPromiseFactory_1.deferredPromise();
      g.setFirstSliceReady(async (e, i) => {
        this.logger.collectEventWithOrigin(lazyRecordClientvars.fetchSliceStates.ON_FIRST_SLICE_READY, {
          taskId: platformDocUtils.p5T(i.token)
        });
        if (syncUrlBlockUtils.isSyncingActive()) {
          var s;
          let i = syncUrlBlockUtils.getUrlToken();
          e = tK(e, i);
          this.initCollab(e, i, e.block_map[i].version);
          let n = ((s = e.meta_map) === null || s === undefined ? undefined : s[syncUrlBlockUtils.getParentToken()]?.sub_type) !== 4;
          syncedBlockAuthorizationManager.SyncedBlockAuthorizationManager.getInstance().fetchSyncedBlockFg(syncUrlBlockUtils.getUrlToken());
          docxSyncedBlockUtils.setSyncedBlockFlag(n);
        } else {
          this.initCollab(e);
        }
        v.genSkipBlockSet();
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          await _(this.options.rootType);
        }
        if (this.options.rootType === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
          this.mockSyncedBlock(e.block_map);
        }
        i.handleResponse(i.token, e);
        this.logger.onClientVarFetchSuccess(e, g.isPreEditableEnable());
        p.resolve();
      });
      v.getFirstSlice({
        fetchId: l,
        fetcHash: f && c ? c : undefined,
        onFirstSliceError: e => {
          p.reject(e);
        }
      });
      await p.promise;
    }
    initCollab(e, i, r) {
      this.dataCollab.init({
        collabToken: i || this.dataProvider.rootRecordId,
        pageToken: this.options.pageToken,
        version: isUndefinedCheck.isUndefined(r) ? e.structure_version : r
      });
    }
    onClientVarSlicedFetchInit() {
      this.logger.collectEventWithOrigin(lazyRecordClientvars.fetchSliceStates.INIT_SLICE_CLIENTVARS, {
        taskId: platformDocUtils.p5T(this.dataProvider.rootRecordId)
      });
    }
    connectFullscreenSync(e, i, r) {
      let n = browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp ? flowDocChatMemberIo.getChatIoInstance() : flowDocIoClient.FlowDocIoClient.getInstance();
      let o = {
        isNewProtocol: true,
        resource_type: collaborativeEditingFlowSyncModule.RecordManager.page,
        route_key: e,
        route_type: collaborativeEditingFlowSyncModule.Record,
        token: e,
        type: "DOCX"
      };
      n.register(o, {
        message: {
          handler: emptyExportFunction.emptyFunction,
          filter: emptyExportFunction.emptyFunction
        },
        heartbeats: {
          engine_channel: {
            version: r,
            interval: 1,
            callback: async (e, r) => {
              if (e > r) {
                try {
                  await this.fetchRecords(i);
                } catch (e) {
                  if (e.code === collaborativeEditingFlowSyncModule.ErrorType.NOT_FOUND) {
                    location.href = xssContentSanitizer.sanitizeUrl(location.origin + location.pathname, null, {
                      logType: "js.href/src",
                      reportOnly: "false",
                      blackConfig: "{}",
                      configMode: "merge",
                      isCloseSSRReport: false,
                      bid: "flow_web",
                      region: "cn",
                      urlLimit: "-1",
                      htmlLimit: "-1",
                      isSaveValidUrl: false,
                      isRuntimeLog: false,
                      isDOMParser: true,
                      escapeRule: "escape-report",
                      reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                      scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                      scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                      scmVersion: "1.0.4.168",
                      webpackPluginVersion: "3.4.5",
                      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rWjNZME01ZDFsN%9-ZFpWMlJzWTNrNWEySXl%bnBNTWxKMld-az$hMkl5$FhSWmJ-aDJX$Ep6ZEZwSFJqQlp$ek-w$1ZjMWF*b3lWbmxN-mxKNldWaEtib$JZ$FQwPQ"
                    });
                  }
                }
              }
            }
          }
        },
        isNewHeartbeatsProtocol: true,
        acceptWatchHandler: emptyExportFunction.emptyFunction
      });
      n.watches([o]);
    }
    constructor(e) {
      var s;
      super(e);
      tW(this, "dataCollab", undefined);
      tW(this, "clientVarCache", undefined);
      tW(this, "clientVarLazyLoader", undefined);
      tW(this, "status", undefined);
      tW(this, "offlineSync", undefined);
      tW(this, "logger", undefined);
      tW(this, "blockDataApplyEnd$", new observableSubjectClass.Subject());
      tW(this, "lazySync", undefined);
      tW(this, "lazyRenderer", undefined);
      tW(this, "options", undefined);
      tW(this, "fetchSingleToken", undefined);
      tW(this, "ssrToCsrLogger", undefined);
      tW(this, "jsRuntimeClient", undefined);
      tW(this, "fetchLibNeedDestroy", false);
      tW(this, "restored", false);
      tW(this, "awaitFirstSliceResult", undefined);
      tW(this, "fetchError$", new replaySubject.ReplaySubject(1));
      tW(this, "ref", new catalogueStateManager.CatalogueResource());
      tW(this, "onFetchAllDone", () => {
        let {
          perfFeatures: e
        } = this.clientVarLazyConsumer;
        if (e && e.has(docPerformanceTuningFlags.IdleApplyFlags.OPTIMIZE_IDLE_APPLY) && this.dataCollab.inited) {
          this.restore();
        }
      });
      tW(this, "restore", () => {
        if (this.restored) {
          return;
        }
        this.restored = true;
        let e = Date.now();
        let i = false;
        let r = false;
        this.offlineSync.restore({
          baseVersion: this.dataCollab.getSyncVersion(),
          beforeRestore: () => e = Date.now(),
          onApplyEnd: (s, n, o) => {
            if (browserEnvironmentDetectionUtils_1.isBrowserEnvironment()) {
              r = m({
                isSuccess: s,
                backupID: n,
                lastBackupStatus: o,
                isPage: this.options?.rootType === docBlockTypeConstants.blockTypeConstants.PAGE
              });
              i = s;
            }
            this.releaseCollabAndEdit(e);
          },
          afterRestore: () => this.releaseCollabAndEdit(e),
          beforeApplyChange: tD(this.clientVarLazyConsumer),
          finallyRestore: (e, s) => {
            var a;
            if (browserEnvironmentDetectionUtils_1.isBrowserEnvironment() && E({
              completedIds: e,
              lastBackupStatus: s,
              blockDataApplyEnd$: this.blockDataApplyEnd$,
              isPage: this.options?.rootType === docBlockTypeConstants.blockTypeConstants.PAGE,
              isApplySuccess: i,
              isLoading: r
            })) {
              this.dataCollab.switchCollabMode(true, docxSubscriptionTypes.SubscriptionTypes.OFFLINE_APPLY);
              if ((a = this.blockDataApplyEnd$) !== null && a !== undefined) {
                a.next({
                  isRestore: true,
                  isPage: this.options?.rootType === docBlockTypeConstants.blockTypeConstants.PAGE
                });
              }
            }
          }
        });
      });
      tW(this, "releaseCollabAndEdit", onceFunctionFactory.createOnce(e => {
        if (this.clientVarLazyConsumer.isUnPaid) {
          return;
        }
        let i = Date.now() - e;
        this.logger.collectEventWithOrigin("backup_restore_release_edit_dev", {
          duration: i
        });
        if (browserEnvironmentDetectionUtils.browserDetector.isDocComponent()) {
          platformDocUtils.tI2(platformDocUtils.aWg.DOCX_ALLOW_EDIT, null);
        }
        if (!browserEnvironmentDetectionUtils_1.isBrowserEnvironment()) {
          this.dataCollab.switchCollabMode(true, docxSubscriptionTypes.SubscriptionTypes.OFFLINE_APPLY);
          this.blockDataApplyEnd$.next({
            isRestore: true,
            isPage: this.options?.rootType === docBlockTypeConstants.blockTypeConstants.PAGE
          });
        }
      }));
      this.options = e;
      let {
        events: l
      } = e;
      let {
        dataProvider: h,
        dataFetcher: d,
        eventEmitter: f,
        clientVarLazyConsumer: g
      } = this;
      if (browserEnvironmentDetectionUtils.isSuperApp() && this.options?.rootType === docBlockTypeConstants.blockTypeConstants.PAGE) {
        this.jsRuntimeClient = docxWorkletTokenManager.DocxWorkletTokenManager;
        docxWorkletTokenManager.DocxWorkletTokenManager.setToken(this.options?.pageToken);
      }
      let p = function (e, i, r, s) {
        switch (e) {
          case docBlockTypeConstants.blockTypeConstants.PAGE:
            return new eb(i, r, e, s.onClientVarsError);
          case docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE:
            return new eS(i, r, e, s.syncMgr);
          default:
            return new ec(i, r, e);
        }
      }(e.rootType, h, f, this.options);
      let _ = new Q(f);
      let b = fullscreenModeDetector.isFullscreenMode();
      let y = function (e, i, r, s, n, o = {}) {
        let {
          events: a
        } = o;
        if (syncUrlBlockUtils.isSyncingActive()) {
          return new tH(i, r, e);
        } else if (s) {
          return new tU(i, r, e);
        } else if (e === docBlockTypeConstants.blockTypeConstants.PAGE) {
          return new tB(i, r, e, n, {
            events: a
          });
        } else {
          return new docxFlowSyncEngine.DocxFlowSyncEngine(i, r, e, n, {
            events: a
          });
        }
      }(e.rootType, h, _, b, tD(g), {
        events: l
      });
      if ((browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp || browserEnvironmentDetectionUtils.isSuperApp()) && this.options?.rootType === docBlockTypeConstants.blockTypeConstants.PAGE) {
        this.clientVarCache = new ta(d, y, e.rootRecordId, e.rootType, this.jsRuntimeClient);
      }
      let I = new H();
      let A = new $(f);
      if (browserEnvironmentDetectionUtils.browserDetector.isLarkFeed) {
        this.ssrToCsrLogger = new V(h, y, _);
      }
      let k = new e$(f, y, I, _, p, A, g, e.rootRecordId, e.rootType);
      let N = new tO(h, y, e.rootType, e.pageToken);
      this.logger = p;
      this.dataCollab = y;
      this.status = _;
      this.lazySync = I;
      this.lazyRenderer = A;
      this.clientVarLazyLoader = k;
      this.offlineSync = N;
      this.clientVarRegistry.connectCollab(y);
      this.clientVarRegistry.connectSync(I);
      this.offlineSync.init();
      if ((s = g.perfFeatures) === null || s === undefined ? undefined : s.isTuningAllowed()) {
        _.fetchAllDone$.subscribe(this.onFetchAllDone);
      }
      if (offlineStatusSelectorsUtils.isGlobalOffline()) {
        this.eventEmitter.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, this.restore);
      } else {
        h.initialDataReady$.subscribe(this.restore);
      }
    }
  }
  function tG(e, i) {
    if (!e) {
      return;
    }
    let s = e == null ? undefined : e.block_map?.[i];
    let n = [i];
    if (s) {
      e.block_map = {
        [i]: s
      };
      e.block_sequence = n;
      return e;
    }
  }
  function tK(e, i) {
    let s = deepCloneWrapper_1.deepClone(e);
    let n = {
      id: "",
      version: 1,
      data: {
        type: "page",
        parent_id: "",
        comments: null,
        locked: false,
        hidden: false,
        author: "",
        children: [""],
        text: {
          apool: {
            nextNum: 0,
            numToAttrib: {}
          },
          initialAttributedTexts: {
            attribs: {
              0: ""
            },
            text: {
              0: ""
            }
          }
        },
        align: ""
      }
    };
    let o = i || s.block_sequence?.[0];
    if (!o) {
      return s;
    }
    let a = s.block_map[o];
    let l = s.id;
    let c = s.block_sequence ? s.block_sequence : [o];
    n.id = l;
    n.data.author = a.data.author;
    n.data.children = [o];
    s.block_map[l] = n;
    s.block_sequence = [l, ...c];
    return s;
  }
  require.d(exports, {
    DocxClientVarLazyRecordManager: function () {
      return tX;
    }
  });
}