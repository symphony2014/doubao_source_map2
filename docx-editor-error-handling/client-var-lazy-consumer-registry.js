// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'ClientVarLazyConsumerRegistry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 365600
         */
module.exports = function (module, exports, require) {
  var n;
  var nodeConfigRegistry = require("node-config-registry") /*id: 741507*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentNodeFactoryWrapper_1 = require("document-node-factory-wrapper_1") /*id: 677433*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.BOOKMARK, documentNodeFactoryWrapper_1.createDocumentNodeWithDefaults);
  var calloutEmojiUtils = require("callout-emoji-utils") /*id: 247313*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.CALLOUT, calloutEmojiUtils.createCalloutNode);
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.CHAT_CARD, function (e = {}, i = docBlockTypeConstants.blockTypeConstants.CHAT_CARD) {
    return documentNodeFactory_2.createDocumentNode(e, i);
  });
  var docxCodeBlockUtils = require("docx-code-block-utils") /*id: 352632*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.CODE, docxCodeBlockUtils.createCodeBlockNode);
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.DIAGRAM, function (e) {
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : docBlockTypeConstants.blockTypeConstants.DIAGRAM;
    docxEventCollector.wrappedCollector("client_insert_diagram", {
      create_source: "unknown",
      block_subtype: e.diagram?.diagramType
    });
    return documentNodeFactory_2.createDocumentNode(e, r);
  });
  var documentNodeFactory_1 = require("document-node-factory_1") /*id: 877890*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.DIVIDER, documentNodeFactory_1.createDocumentNode);
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.FALLBACK, documentNodeFactory_2.createDocumentNode);
  var documentNodeFactoryWrapper = require("document-node-factory-wrapper") /*id: 6829*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.FILE, documentNodeFactoryWrapper.createDocumentNodeWrapper);
  var gridDocumentNodeUtils = require("grid-document-node-utils") /*id: 431709*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.GRID, gridDocumentNodeUtils.createGridNode);
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, gridDocumentNodeUtils.createGridColumn);
  var headingTypeConstants = require("heading-type-constants") /*id: 23420*/;
  var documentNodeFoldUtils = require("document-node-fold-utils") /*id: 454245*/;
  headingTypeConstants.headingBlockTypes.forEach(e => nodeConfigRegistry.registerSnapshot(e, function (i, r = e) {
    return documentNodeFoldUtils.createEmptyNode(i, r);
  }));
  var documentNodeUtils_1 = require("document-node-utils_1") /*id: 759829*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.IFRAME, documentNodeUtils_1.createDocNode);
  var docxImageUtils = require("docx-image-utils") /*id: 164286*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.IMAGE, docxImageUtils.createImageNode);
  var documentNodeFactory = require("document-node-factory") /*id: 524026*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.BULLET, documentNodeFactory.createDocumentNode);
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.ORDERED, documentNodeFactory.createAutoSeqNode);
  var createDocumentNodeHelper = require("create-document-node-helper") /*id: 980168*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.PAGE, function (e, i = docBlockTypeConstants.blockTypeConstants.PAGE) {
    return createDocumentNodeHelper.createEmptyDocumentNode(e, i);
  });
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.PENDING, documentNodeFactory_2.createDocumentNode);
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.QUOTE, createDocumentNodeHelper.createEmptyDocumentNode);
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, documentNodeFactory_2.createDocumentNode);
  var tableNodeFactory = require("table-node-factory") /*id: 612896*/;
  var createEmptyCellDocumentNode = require("create-empty-cell-document-node") /*id: 44326*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.CELL, createEmptyCellDocumentNode.createEmptyCellDocumentNode);
  nodeConfigRegistry.registerConfig(docBlockTypeConstants.blockTypeConstants.TABLE, {
    createSnapshot: tableNodeFactory.createTableNode,
    deriveChildren: docxTableLayoutUtils.getCellRecordIds
  });
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.TASK, documentNodeFactory_2.createDocumentNode);
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.TASK_LIST, function (e = {}, i = docBlockTypeConstants.blockTypeConstants.TASK_LIST) {
    return documentNodeFactory_2.createDocumentNode(e, i);
  });
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT, documentNodeUtils_2.createDocumentNode);
  var documentNodeUtils = require("document-node-utils") /*id: 627986*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.TODO, documentNodeUtils.createDocumentNode);
  var createDocumentNodeWithDefaultType = require("create-document-node-with-default-type") /*id: 934095*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.VIEW, createDocumentNodeWithDefaultType.createDocumentNodeWithDefaultType);
  var wikiPreviewDataFactory = require("wiki-preview-data-factory") /*id: 21335*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.WIKI_CATALOG, wikiPreviewDataFactory.createNodeData);
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.WIKI_RECENT, wikiPreviewDataFactory.createPreviewData);
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.FOLDER_MANAGER, wikiPreviewDataFactory.createWikiData);
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.URL_PREVIEW, function (e = {}, i = docBlockTypeConstants.blockTypeConstants.URL_PREVIEW) {
    return documentNodeFactory_2.createDocumentNode(e, i);
  });
  require("creation-doc-network-error-handler") /*id: 687201*/;
  require("block-insertion-handler") /*id: 235064*/;
  require("block-focus-states") /*id: 324508*/;
  require("editor-data-manager-class") /*id: 699568*/;
  require("editor-revision-handlers") /*id: 977441*/;
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.AI, function (e = {}, i = docBlockTypeConstants.blockTypeConstants.AI) {
    return documentNodeFactory_2.createDocumentNode(e, i);
  });
  nodeConfigRegistry.registerSnapshot(docBlockTypeConstants.blockTypeConstants.MERMAID, function (e, i = docBlockTypeConstants.blockTypeConstants.MERMAID) {
    return documentNodeFactory_2.createDocumentNode(e, i);
  });
  var docOperationUtils = require("doc-operation-utils") /*id: 558255*/;
  nodeConfigRegistry.registerConfig(docBlockTypeConstants.blockTypeConstants.REVISION_CONTAINER, {
    deriveChildren: docOperationUtils.filterRevisionIds
  });
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var L = eventEmitterUmd;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docPerformanceTuningFlags = require("doc-performance-tuning-flags") /*id: 808188*/;
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  let F = {
    large_doc_block_size: 1000
  };
  let j = () => boolDefaultUtil.getDefaultBool("ccm_doc_perf_config", F);
  function $(e, i, r) {
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
  class H {
    destroy() {
      this.updated$.complete();
    }
    addBlockCount(e) {
      this.blockCount += e;
      if (e) {
        this.update();
      }
    }
    setMainFetchAllDone() {
      this.mainFetchAllDone = true;
    }
    isTuningAllowed() {
      return this.fgs !== 0;
    }
    hasFGs(e) {
      return (this.fgs & e) != 0;
    }
    has(e) {
      return (this.features & e) != 0;
    }
    update() {
      if (!this.has(docPerformanceTuningFlags.IdleApplyFlags.UNDETERMINED)) {
        return;
      }
      if (!this.hasFGs(docPerformanceTuningFlags.PerfTuningFlags.ALLOW_LARGE_DOC_PERF_TUNING)) {
        this.set(docPerformanceTuningFlags.IdleApplyFlags.ENABLE_IDLE_APPLY_ALL_BY_NO_LARGE_DOC_TUNING_FG);
        return;
      }
      let {
        blockCount: e
      } = this;
      if (e >= j().large_doc_block_size) {
        this.set(docPerformanceTuningFlags.IdleApplyFlags.ENABLE_IDLE_APPLY_CRITICAL_BY_LARGE_DOC);
        return;
      }
      if (this.mainFetchAllDone) {
        this.set(docPerformanceTuningFlags.IdleApplyFlags.ENABLE_IDLE_APPLY_ALL_BY_FETCH_ALL_DONE);
        return;
      }
      this.set(docPerformanceTuningFlags.IdleApplyFlags.UNDETERMINED);
    }
    set(e) {
      if (this.features !== e) {
        this.features = e;
        let i = JSON.stringify({
          fgs: this.fgs,
          feats: this.features,
          done: this.mainFetchAllDone,
          count: this.blockCount
        });
        docxEventCollector.docEventCollector("doc_bug_track_dev", {
          action: "performance_tuning",
          info: i
        });
        this.updated$.next(e);
      }
    }
    constructor() {
      $(this, "features", docPerformanceTuningFlags.IdleApplyFlags.UNDETERMINED);
      $(this, "fgs", docPerformanceTuningFlags.PerfTuningFlags.NONE);
      $(this, "mainFetchAllDone", false);
      $(this, "blockCount", 0);
      $(this, "updated$", new observableSubjectClass.Subject());
      this.fgs = (docxFeatureFlags.isMobileLargeDocIdle() ? docPerformanceTuningFlags.PerfTuningFlags.ALLOW_LARGE_DOC_PERF_TUNING : 0) | (docxFeatureFlags.isMobileApplyClientvar() ? docPerformanceTuningFlags.PerfTuningFlags.ALLOW_DOWNGRADE : 0);
      this.update();
    }
  }
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var docxUserDetailManager = require("docx-user-detail-manager") /*id: 794466*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  function G(e, i, r) {
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
  class q {
    init() {
      window.addEventListener("online", this.handleOnline);
    }
    destroy() {
      this.pendingRecordTask = [];
      this.failedFetchRecordsSet.clear();
      clearTimeout(this.fetchRecordBatchTimeout);
      window.removeEventListener("online", this.handleOnline);
    }
    async fetchRecord(e, i) {
      e = arrayIsArrayUtil.isArray(e) ? e : [e];
      let r = false;
      for (let n of e) {
        try {
          await this.fetchClientVar(n, i);
        } catch (e) {
          this.fetchRecordPromise.delete(n);
          r = true;
        }
      }
      return !r;
    }
    async fetchClientVar(e, i) {
      let r;
      if (this.fetchRecordPromise.has(e)) {
        r = this.fetchRecordPromise.get(e);
      } else {
        r = this.fetchRecordClientVars([e], i);
        this.fetchRecordPromise.set(e, r);
      }
      let n = await r;
      let {
        block_map: o
      } = n;
      if (o && Object.keys(o).length === 0) {
        docxUtilityHelpers.captureException(`[fetch record] ${e}, data: ${JSON.stringify(n)}`);
      }
      this.clientVarRegistry.register(n);
      this.fetchRecordPromise.delete(e);
      return n;
    }
    async fetchRecordBatch(e) {
      clearTimeout(this.fetchRecordBatchTimeout);
      let i = new Promise((i, r) => {
        this.pendingRecordTask.push({
          recordId: e,
          resolve: i,
          reject: r
        });
      });
      this.fetchRecordBatchTimeout = window.setTimeout(async () => {
        let e = [...this.pendingRecordTask];
        for (this.pendingRecordTask = []; e.length > 0;) {
          let i = e.splice(0, this.maxBlocks);
          let r = [...new Set(i.map(e => e.recordId))];
          try {
            let e;
            if (this.rootType === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
              e = this.rootRecordId;
            } else if (syncUrlBlockUtils.isSyncingActive()) {
              e = syncUrlBlockUtils.getUrlToken();
            }
            let n = await this.fetchRecordClientVars(r || [], this.pageToken, e);
            reactDomEntryWrapper.unstable_batchedUpdates(() => {
              this.clientVarRegistry.register(n);
              docxUserDetailManager.UserDetailManager.applyClientVar(n);
              this.clientVarRegistry.setMentionDocData(n);
            });
            i.forEach(e => {
              let {
                resolve: i
              } = e;
              return i();
            });
            this.fetchRecordSuccess$.next(n);
          } catch (e) {
            if (e instanceof Error && e.message === "Network Error") {
              r.forEach(e => this.failedFetchRecordsSet.add(e));
            }
            docxUtilityHelpers.captureException(e);
            i.forEach(i => {
              let {
                reject: r
              } = i;
              return r(e);
            });
          }
        }
      }, this.fetchRecordBatchTimeoutDelay);
      return i;
    }
    async fetchRecordClientVars(e, i, r) {
      return (await docxApiConstantsExports.docxApiService.getRecordClientVars(e, i || this.pageToken, r)).data;
    }
    constructor(e, i, r, n) {
      this.clientVarRegistry = e;
      this.pageToken = i;
      this.rootRecordId = r;
      this.rootType = n;
      G(this, "pendingRecordTask", []);
      G(this, "failedFetchRecordsSet", new Set());
      G(this, "fetchRecordPromise", new Map());
      G(this, "fetchRecordBatchTimeout", undefined);
      G(this, "fetchRecordBatchTimeoutDelay", undefined);
      G(this, "maxBlocks", undefined);
      G(this, "fetchRecordSuccess$", new observableSubjectClass.Subject());
      G(this, "handleOnline", () => {
        this.failedFetchRecordsSet.forEach(e => {
          this.fetchRecordBatch(e);
        });
        this.failedFetchRecordsSet.clear();
      });
      let {
        fetchRecordBatchTimeout: o,
        maxBlocks: l
      } = function () {
        let e = {
          maxBlocks: 50,
          fetchRecordBatchTimeout: 0
        };
        let i = boolDefaultGetterUtil.getDefaultBool("ccm_docx_fetch_block", e);
        return {
          ...e,
          ...i
        };
      }();
      this.fetchRecordBatchTimeoutDelay = o;
      this.maxBlocks = l;
    }
  }
  var docxFetchConcurrencyConfig = require("docx-fetch-concurrency-config") /*id: 858864*/;
  var docxLazyConsumerConfig = require("docx-lazy-consumer-config") /*id: 157711*/;
  function Q() {
    let e = {
      idle_force_apply: true,
      force_apply_block_count: 200,
      idle_limit_time: 50,
      idle_max_remain_time: 500
    };
    return Object.assign(e, boolDefaultUtil.getDefaultBool(docxLazyConsumerConfig.configKey, e));
  }
  function ee(e, i, r) {
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
  let et = 0;
  let ei = new URL(location.href).searchParams.get("interval");
  let er = ei ? parseInt(ei, 10) : 0;
  let en = Q();
  class eo {
    timeoutIdleCallback(e, i) {
      let r = Date.now();
      setTimeout(() => {
        e({
          didTimeout: false,
          timeRemaining: () => Math.max(0, this._maxRemainTime - (Date.now() - r))
        });
      }, 1);
      return 0;
    }
    messageChannelIdleCallback(e, i) {
      if (this.channel) {
        this.channel.port1.onmessage = () => {
          let i = Date.now();
          e({
            didTimeout: false,
            timeRemaining: () => Math.max(0, this._maxRemainTime - (Date.now() - i))
          });
        };
        this.channel.port2.postMessage(null);
        return 0;
      } else {
        return this.timeoutIdleCallback(e);
      }
    }
    setIdleCallback(e) {
      if (e) {
        this._idleCallback = e;
      }
    }
    start() {
      this._needStop = false;
      return !!this._busy || !!this._idleCallback && (this._busy = true, this.cancelNumber = this.requestIdleCallback(e => {
        if (Date.now() - et < er) {
          this._busy = false;
          this.start();
          return true;
        }
        et = Date.now();
        if (this._needStop) {
          this._busy = false;
          return false;
        }
        let i = e.timeRemaining();
        let {
          didTimeout: r
        } = e;
        let n = this._idleCallback && this._idleCallback(r, i);
        this._busy = false;
        if (n) {
          this.start();
        }
      }, {
        timeout: this._timeout
      }), true);
    }
    stop() {
      this._needStop = true;
      if (this.cancelIdleCallback) {
        this.cancelIdleCallback(this.cancelNumber);
      }
    }
    destroy() {
      this.stop();
      this._idleCallback = undefined;
    }
    constructor(e) {
      ee(this, "_idleCallback", undefined);
      ee(this, "_busy", false);
      ee(this, "_needStop", false);
      ee(this, "_timeout", en.idle_limit_time);
      ee(this, "_maxRemainTime", en.idle_max_remain_time);
      ee(this, "channel", window.MessageChannel ? new window.MessageChannel() : undefined);
      ee(this, "cancelNumber", undefined);
      ee(this, "requestIdleCallback", window.requestIdleCallback ? window.requestIdleCallback.bind(window) : this.messageChannelIdleCallback);
      ee(this, "cancelIdleCallback", window.cancelIdleCallback ? window.cancelIdleCallback.bind(window) : undefined);
      if (!e) {
        return;
      }
      this._idleCallback = e;
    }
  }
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  (n = {}).StoreClientvar = "storeClientvar";
  n.SplitClientvar = "splitClientvar";
  n.ApplyClientvar = "applyClientvar";
  n.LogDidNotAllDone = "logDidNotAllDone";
  let es = n;
  function ea(e, i) {
    i.stage = e;
    browserEnvironmentDetectionUtils.browserDetector.isMobile;
    docxEventCollector.wrappedCollector("ccm_doc_pre_edit_clientvar_apply_stage_dev", i);
  }
  function ec(e) {
    e.stage = es.LogDidNotAllDone;
    docxEventCollector.wrappedCollector("ccm_doc_pre_edit_clientvar_apply_stage_dev", e);
  }
  function ed(e) {
    e.task_id = e.task_id ? platformDocUtils.p5T(e.task_id) : "";
    e.isFirstSlice = `${e.isFirstSlice}`;
    ea(es.StoreClientvar, e);
  }
  function eu(e) {
    e.split_start_id = e.split_start_id ? platformDocUtils.p5T(e.split_start_id) : "";
    e.isFirstSlice = `${e.isFirstSlice}`;
    ea(es.SplitClientvar, e);
  }
  function eh(e) {
    if (e.task_data) {
      e.task_data.forEach(e => {
        e.task_id = e.task_id ? platformDocUtils.p5T(e.task_id) : "";
      });
    }
    e.isFirstSlice = `${e.isFirstSlice}`;
    e.isPreEditableEnable = `${e.isPreEditableEnable}`;
    ea(es.ApplyClientvar, e);
  }
  function ef(e) {
    if (e && e.block_map) {
      return Object.keys(e.block_map).length;
    } else {
      return 0;
    }
  }
  function eg(e) {
    if (e && e.block_map) {
      return Object.keys(e.block_map).map(docxFetchConcurrencyConfig.getShortId);
    } else {
      return [];
    }
  }
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  function em(e, i, r) {
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
  class ev {
    getClientvarByTaskId(e) {
      return this.pendingClientvarMap.get(e);
    }
    getTaskIdsByRecordId(e) {
      return this.mapRecordIdToTaskIds.get(e);
    }
    add(e, i, r) {
      var n;
      if (!r) {
        return;
      }
      let o = this.mapRecordIdToTaskIds.size;
      Object.keys(r.block_map).forEach(i => {
        let r = this.mapRecordIdToTaskIds.get(i) || new Set();
        r.add(e);
        this.mapRecordIdToTaskIds.set(i, r);
      });
      let l = this.mapRecordIdToTaskIds.size - o;
      let s = this.pendingClientvarMap.get(e);
      if (s) {
        this.pendingClientvarMap.set(e, docxBlockValidatorUtils.mergeBlockMaps([s, r]));
      } else {
        this.pendingTypeKey[i].push(e);
        this.pendingClientvarMap.set(e, r);
      }
      this.dealAddEventCb(e, i, r);
      if ((n = this.perf) !== null && n !== undefined) {
        n.addBlockCount(l);
      }
    }
    hasType(e) {
      return !!this.pendingTypeKey[e]?.length;
    }
    has(e) {
      return this.pendingClientvarMap.has(e);
    }
    destroy() {
      this.pendingClientvarMap.clear();
      this.mapRecordIdToTaskIds.clear();
      Object.keys(this.pendingTypeKey).forEach(e => {
        this.pendingTypeKey[e] = [];
      });
      this.addEventCbList = [];
    }
    onDataAdd(e) {
      if (e) {
        this.addEventCbList.push(e);
      }
    }
    dealAddEventCb(e, i, r) {
      let n = this.addEventCbList.length;
      if (!(n <= 0)) {
        for (let o = 0; o < n; ++o) {
          this.addEventCbList[o](e, i, r);
        }
      }
    }
    constructor(e) {
      this.perf = e;
      em(this, "pendingClientvarMap", new Map());
      em(this, "pendingTypeKey", {
        [docxLazyConsumerConfig.blockTypes.NORMAL]: [],
        [docxLazyConsumerConfig.blockTypes.FOLDABLE]: [],
        [docxLazyConsumerConfig.blockTypes.TABLE]: []
      });
      em(this, "mapRecordIdToTaskIds", new Map());
      em(this, "addEventCbList", []);
    }
  }
  var foldStateManager = require("fold-state-manager") /*id: 437732*/;
  let ey = () => 26;
  function eS(e, i = {}) {
    let {
      id: r
    } = e;
    let n = e.childrenIds || [];
    let {
      preTravel: o,
      postTravel: l
    } = i;
    let s = false;
    for (let a = 0, c = n.length; a < c; a++) {
      let c = n[a];
      let d = e.getNode(c);
      if (o) {
        let i = o(d, e, r, c, a);
        s = i === undefined ? s : i;
      }
      if (!s && d) {
        eS(d, i);
      }
      if (l) {
        let i = l(d, e, r, c, a);
        s = i === undefined ? s : i;
      }
    }
  }
  function ek(e, i = new Map()) {
    let r = i.get(e);
    return !!r && !r.show;
  }
  function eE(e, i) {
    let r = function (e) {
      let i = new Map();
      eS(e, {
        preTravel: (r, n, o, l, s) => {
          if (!r) {
            return;
          }
          let {
            folded: a
          } = r;
          let c = s === 0 ? n : n == null ? undefined : n.childAt(s - 1);
          let d = {
            isRoot: l === e.id,
            relativeId: c == null ? undefined : c.id,
            parentId: o,
            folded: a
          };
          let u = foldStateManager.FoldStateManager.calculateFoldState(r, d, i, i => {
            return e.getNode(i)?.depth;
          });
          if (u) {
            i.set(l, u);
          }
        }
      });
      return i;
    }(e);
    let n = function (e, i) {
      let r = new Map();
      eS(e, {
        postTravel: (e, n, o, s) => {
          let a;
          let c = (e == null ? undefined : e.type) || "";
          let d = (e == null ? undefined : e.childrenIds) || [];
          if (ek(s, i)) {
            r.set(s, {
              height: 0,
              marginTop: 0,
              marginBottom: 0,
              distanceToFirstChild: 0
            });
            return;
          }
          let u = ey();
          if (c === docBlockTypeConstants.blockTypeConstants.TABLE) {
            r.set(s, {
              height: u,
              marginTop: 0,
              marginBottom: 0,
              distanceToFirstChild: 0
            });
            return;
          }
          if (c === docBlockTypeConstants.blockTypeConstants.GRID) {
            let e = d.reduce((e, i) => {
              return Math.max(e, r.get(i)?.height ?? 26);
            }, 0);
            r.set(s, {
              height: e,
              marginTop: 0,
              marginBottom: 0,
              distanceToFirstChild: 0
            });
            return;
          }
          let h = 26 + d.reduce((e, i) => {
            return e + (r.get(i)?.height ?? 26);
          }, 0);
          for (let e = 0; e < d.length; e++) {
            let i = d[e];
            let n = r.get(i);
            if (n.height !== 0) {
              h += Math.max(n.marginTop, (a == null ? undefined : a.marginBottom) || 0);
              a = n;
            }
          }
          h += (a == null ? undefined : a.marginBottom) || 0;
          r.set(s, {
            height: h,
            marginTop: 0,
            marginBottom: 0,
            distanceToFirstChild: 26
          });
        }
      });
      eS(e, {
        preTravel: (e, i, n, o, s) => {
          let a = r.get(o);
          let c = (e == null ? undefined : e.type) || "";
          if (!n || !a) {
            return;
          }
          let d = c === docBlockTypeConstants.blockTypeConstants.TABLE;
          let u = i.type === docBlockTypeConstants.blockTypeConstants.GRID;
          if (s === 0 || u) {
            let e = r.get(n);
            a.topToParent = (e == null ? undefined : e.distanceToFirstChild) ?? 0;
            return d;
          }
          let f = i.childIdAt(s - 1);
          let g = r.get(f);
          let p = g.topToParent;
          let m = g.height;
          let v = g.marginBottom;
          if (ek(o)) {
            a.topToParent = p + m;
            return d;
          }
          let b = a.marginTop;
          a.topToParent = p + m + Math.max(v, b);
          return d;
        },
        postTravel: () => false
      });
      return r;
    }(e, r);
    let {
      top: o,
      height: s,
      bufferTopRange: a,
      bufferBottomRange: c
    } = i;
    let d = new Set();
    let u = new Set();
    (function e(i, r) {
      let {
        top: n,
        bottom: o,
        node: s,
        layoutTree: a,
        foldedStateMap: c,
        bufferTop: d = n,
        bufferBottom: u = o,
        isParentInBuffer: h
      } = i;
      let f = s.childrenIds || [];
      for (let i = 0, p = f.length; i < p; i += 1) {
        let p = f[i];
        let m = s.getNode(p);
        let v = a.get(p);
        if (!v) {
          continue;
        }
        let b = (m == null ? undefined : m.type) || "";
        let {
          height: y,
          topToParent: S = 0
        } = v;
        if (ek(p, c)) {
          continue;
        }
        let k = S + y;
        if (d > k) {
          continue;
        }
        if (u < S) {
          break;
        }
        let E = n <= k && o >= S;
        if (b === docBlockTypeConstants.blockTypeConstants.TABLE) {
          r(p, m, E);
          if (m) {
            eS(m, {
              preTravel: (e, i, n, o) => {
                r(o, e, !!E && !h);
              }
            });
          }
          continue;
        }
        let C = h;
        if (E) {
          r(p, m, !h);
        } else if (d <= k && u >= S) {
          r(p, m, false);
          C = true;
        }
        let _ = b === docBlockTypeConstants.blockTypeConstants.GRID;
        if (m == null ? undefined : m.childrenIds?.length) {
          e({
            node: m,
            layoutTree: a,
            foldedStateMap: c,
            bufferTop: _ ? 0 : d - S,
            top: n - S,
            bottom: o - S,
            bufferBottom: _ ? y : u - S,
            isParentInBuffer: C
          }, r);
        }
      }
    })({
      node: e,
      layoutTree: n,
      foldedStateMap: r,
      top: o,
      bottom: o + s,
      bufferTop: Math.max(o - a, 0),
      bufferBottom: o + s + c
    }, (e, i, r) => {
      if (r) {
        d.add(e);
      } else {
        u.add(e);
      }
    });
    return {
      viewporNodeIdSet: d,
      bufferNodeIdSet: u
    };
  }
  function eC(e, i, r, n) {
    let o = Object.keys(e.block_map).map(r => {
      let o = i.getTaskIdsByRecordId(r);
      if (!o) {
        var s;
        throw Error(`can not find task id when transformBlockMapToClientvars, ${docxFetchConcurrencyConfig.getShortId(r)},
        ${!!(n == null ? undefined : n.block_map[r])}, ${(s = e.block_map[r]) === null || s === undefined ? undefined : s.data?.type}`);
      }
      return {
        taskIds: Array.from(o),
        recordId: r
      };
    }).reduce((e, i) => {
      let {
        taskIds: r
      } = i;
      r.forEach(r => {
        e[r] ||= [];
        e[r].push(i.recordId);
      });
      return e;
    }, {});
    return Object.keys(o).reduce((r, n) => {
      let l = o[n].reduce((i, r) => {
        i[r] = e.block_map[r];
        return i;
      }, {});
      let s = Object.assign({}, i.getClientvarByTaskId(n), {
        block_map: l
      });
      r.push({
        taskId: n,
        clientvar: s
      });
      return r;
    }, []).sort(e => {
      let {
        taskId: i
      } = e;
      if (i === r) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  var docBlockChildrenUtil = require("doc-block-children-util") /*id: 615212*/;
  function eR(e, i, r) {
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
  class eI {
    updateData(e) {
      this.data = e;
      this.id = e.id;
      this.type = e.data.type;
      this.parentId = e.data.parent_id;
      this.childrenIds = docBlockChildrenUtil.getBlockChildren(e);
      this.folded = e.data.folded;
      this.depth = this.parentId ? (this.getNode(this.parentId)?.depth ?? 0) + 1 : 0;
    }
    getNode(e) {
      return this.treeNodeMap[e];
    }
    getTreeNodeMap() {
      return this.treeNodeMap;
    }
    hasChildren() {
      return !!this.childrenIds && this.childrenIds.length > 0;
    }
    childIdAt(e) {
      if (this.hasChildren()) {
        if (e < 0) {
          e = this.childrenIds.length + e;
        }
        return this.childrenIds[e];
      } else {
        return null;
      }
    }
    childAt(e) {
      let i = this.childIdAt(e);
      if (i) {
        return this.treeNodeMap[i];
      } else {
        return null;
      }
    }
    constructor(e, i) {
      this.treeNodeMap = i;
      eR(this, "id", undefined);
      eR(this, "type", undefined);
      eR(this, "parentId", undefined);
      eR(this, "childrenIds", undefined);
      eR(this, "folded", undefined);
      eR(this, "depth", undefined);
      eR(this, "data", undefined);
      eR(this, "visited", false);
      eR(this, "independentNodes", []);
      eR(this, "parent", null);
      eR(this, "firstChild", null);
      eR(this, "lastChild", null);
      eR(this, "prevSibling", null);
      eR(this, "nextSibling", null);
      eR(this, "offsetToParent", -1);
      this.updateData(e);
    }
  }
  function eM(e, i) {
    let {
      treeNodeMap: r
    } = e;
    (function (e, i) {
      let {
        independentNodes: r
      } = e;
      let n = new Set(r.map(e => e.id));
      for (let e = 0; e < i.length; e++) {
        let o = i[e];
        if (!n.has(o.id)) {
          r.push(o);
        }
      }
    })(e, Array.from(i).map(e => r[e]));
  }
  function eT(e, i, r, n, o, s) {
    let a = n[i];
    let c = e[i];
    if (c) {
      s.delete(i);
      if (a) {
        if (a.type === docBlockTypeConstants.blockTypeConstants.PENDING) {
          a.updateData(c);
        }
      } else {
        a = new eI(c, n);
        n[i] = a;
      }
    } else if (!a) {
      var d;
      a = new eI((d = o == null ? undefined : o.id, {
        id: i,
        version: 0,
        data: {
          type: docBlockTypeConstants.blockTypeConstants.PENDING,
          parent_id: d
        }
      }), n);
      n[i] = a;
    }
    a.parent = o;
    a.offsetToParent = r;
    let u = a.childrenIds || [];
    for (let i = 0; i < u.length; i++) {
      eT(e, u[i], i, n, a, s);
    }
    (function (e, i) {
      let r = e.childrenIds || [];
      if (!(r.length <= 0)) {
        e.firstChild = i[r[0]] || null;
        e.lastChild = i[r[r.length - 1]] || null;
        for (let e = 0; e < r.length; e++) {
          let n = i[r[e]];
          n.prevSibling = i[r[e - 1]] || null;
          n.nextSibling = i[r[e + 1]] || null;
        }
      }
    })(a, n);
  }
  let ew = "__ROOT__";
  function eB(e, i, r) {
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
  function eP() {
    return true;
  }
  function eL(e) {
    if (!e.hasChildren()) {
      e.visited = true;
      return;
    }
    let i = e.firstChild;
    let r = true;
    while (i) {
      if (!i.visited) {
        r = false;
        break;
      }
      i = i.nextSibling;
    }
    if (r) {
      e.visited = true;
    }
  }
  class eN {
    setRootRecordId(e) {
      this.rootRecordId = e;
    }
    getTree() {
      return this.tree;
    }
    split(e) {
      let {
        traverseStartRecordId: i,
        size: r,
        filter: n = eP,
        isFirstSlice: o = false,
        decendentOnly: l = false
      } = e;
      let s = performance.now();
      this.traverseStartNode ||= this.tree.getNode(this.rootRecordId);
      if (i) {
        this.traverseStartNode = this.tree.getNode(i) || this.traverseStartNode;
      }
      let a = {};
      let c = o && docxFeatureFlags.isNotMobileOrL() && r !== Infinity;
      this.traverseNode(this.traverseStartNode, r, a, n, c, l);
      let d = this.tree.getNode(this.rootRecordId);
      this.traverseIndependentNodes(d, a, n);
      let u = Object.keys(a).length;
      eu({
        split_start_id: i || "",
        split_size_expected: r === Infinity ? -1 : r,
        split_size_actual: u,
        cost_time: performance.now() - s,
        isFirstSlice: o
      });
      if (u < 1) {
        return null;
      } else {
        return {
          block_map: a
        };
      }
    }
    splitWithIds(e) {
      let i = performance.now();
      let r = {};
      let n = {
        count: 0
      };
      this.traverseStartNode = this.tree.getNode(this.rootRecordId);
      let o = docxFeatureFlags.isNotMobileOrL();
      let s = new Set(e);
      let a = e => {
        if (!e || e.type === docBlockTypeConstants.blockTypeConstants.PENDING) {
          return;
        }
        let i = false;
        if (o && s.has(e.id) && this.isBlockInTable(e)) {
          return;
        }
        if (s.has(e.id)) {
          r[e.id] = e.data;
          n.count++;
          this.slicedSet.add(e.id);
          i = true;
        }
        let c = e.firstChild;
        while (c && n.count < s.size) {
          a(c);
          c = c.nextSibling;
        }
        if (i) {
          eL(e);
        }
      };
      a(this.traverseStartNode);
      let c = this.tree.getNode(this.rootRecordId);
      this.traverseIndependentNodes(c, r, eP);
      eu({
        split_start_id: this.rootRecordId,
        split_size_expected: e.length,
        split_size_actual: n.count,
        cost_time: performance.now() - i,
        isFirstSlice: true
      });
      if (n.count < 1) {
        return null;
      } else {
        return {
          block_map: r
        };
      }
    }
    isBlockInTable(e) {
      let i = e;
      while (i == null ? undefined : i.parent) {
        if (i.parent.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
          return true;
        }
        i = i.parent;
      }
      return false;
    }
    destroy() {
      this.tree = undefined;
      this.traverseStartNode = undefined;
      this.slicedSet.clear();
      this.clientvarStorage = undefined;
    }
    traverseNode(e, i, r, n, o = false, s = false) {
      if (!e) {
        return;
      }
      let a = i;
      if (e.type !== docBlockTypeConstants.blockTypeConstants.PENDING) {
        if (i <= 0 && !this.slicedSet.has(e.id)) {
          r[e.id] = e.data;
          this.slicedSet.add(e.id);
        }
        let l = this.traverseChildren(e, 0, i, r, false, n, o);
        let c = Math.ceil((a = i - l) / 2);
        if (!s) {
          a -= this.traverseSibling(e, 0, c, r, false, n);
          a -= this.traverseSibling(e, 0, a, r, true, n);
        }
      }
      if (!s) {
        this.traverseNode(e.parent, a, r, n);
      }
    }
    traverseChildren(e, i, r, n, o, s, a = false) {
      if (e && e.type === docBlockTypeConstants.blockTypeConstants.TABLE && this.clientvarStorage.has(e.id)) {
        r = Infinity;
      }
      if (i >= r || !e || e.visited || e.type === docBlockTypeConstants.blockTypeConstants.PENDING || a && this.isBlockInTable(e)) {
        return i;
      }
      let c = i;
      let d = !e.visited;
      let u = false;
      if (d && !this.slicedSet.has(e.id) && s(e)) {
        c++;
        n[e.id] = e.data;
        this.slicedSet.add(e.id);
        u = true;
      }
      let h = o ? e.lastChild : e.firstChild;
      let f = c;
      while (h && c < r) {
        c = Math.max(c, this.traverseChildren(h, c, r, n, o, s, a));
        h = o ? h.prevSibling : h.nextSibling;
      }
      if (!u && c > f && d && !this.slicedSet.has(e.id)) {
        c++;
        u = true;
        n[e.id] = e.data;
        this.slicedSet.add(e.id);
      }
      if (u) {
        eL(e);
      }
      return c;
    }
    traverseSibling(e, i, r, n, o, s) {
      if (i >= r || !e || e.type === docBlockTypeConstants.blockTypeConstants.PENDING) {
        return i;
      }
      let a = i;
      let c = o ? e.prevSibling : e.nextSibling;
      while (c && (!this.autoBreakSiblingIter || a < r)) {
        a = Math.max(a, this.traverseChildren(c, a, r, n, o, s));
        c = o ? c.prevSibling : c.nextSibling;
      }
      return a;
    }
    traverseIndependentNodes(e, i, r) {
      let n = 0;
      if (!e) {
        return n;
      }
      let {
        independentNodes: o
      } = e;
      for (let e = 0; e < o.length; e++) {
        let l = o[e];
        n += this.traverseChildren(l, 0, Infinity, i, false, r);
      }
      return n;
    }
    constructor(e, i = false) {
      this.clientvarStorage = e;
      this.autoBreakSiblingIter = i;
      eB(this, "rootRecordId", undefined);
      eB(this, "tree", undefined);
      eB(this, "traverseStartNode", undefined);
      eB(this, "slicedSet", new Set());
      this.clientvarStorage.onDataAdd((e, i, r) => {
        if (this.tree) {
          let n = i === docxLazyConsumerConfig.blockTypes.TABLE ? [e] : [];
          (function (e, i, r) {
            let {
              block_map: n
            } = i;
            let {
              treeNodeMap: o
            } = e;
            for (let e in n) {
              let i = n[e];
              let s = o[e];
              if (s) {
                if (s.type === docBlockTypeConstants.blockTypeConstants.PENDING) {
                  s.updateData(i);
                } else {
                  r.includes(e);
                }
                continue;
              }
              s = new eI(i, o);
              o[e] = s;
            }
            let s = new Set(Object.keys(n));
            let a = new Set();
            for (let e in n) {
              let i = o[e];
              let r = o[i.parentId];
              i.parent = r;
              if (r && r.childrenIds) {
                i.offsetToParent = r.childrenIds.indexOf(e);
              }
              if (i.offsetToParent >= 0) {
                s.delete(e);
              }
              eT(n, e, i.offsetToParent, o, r, a);
            }
            eM(o[ew], s);
          })(this.tree, r, n);
        } else {
          this.tree = function (e, i) {
            let {
              block_map: r
            } = e;
            let n = {};
            let o = new Set(Object.keys(r));
            eT(r, i, -1, n, null, o);
            let l = n[i];
            n[ew] = l;
            let s = new Set();
            o.forEach(e => {
              let i = n[r[e].data.parent_id] || null;
              eT(r, e, -1, n, i, s);
            });
            eM(l, o);
            return l;
          }(r, this.rootRecordId);
        }
      });
    }
  }
  var noopFunction = require("noop-function") /*id: 824806*/;
  function eO(e, i, r) {
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
  function eD(e, i) {
    return Object.values(e.block_map).forEach(i);
  }
  class ex {
    addClientvar(e, i) {
      let {
        has_more: r
      } = i;
      let n = this.waitForApplyMap.get(e) || new Set();
      eD(i, e => {
        if (!this.appliedIdSet.has(e.id)) {
          n.add(e.id);
        }
      });
      n.delete(e);
      this.hasMoreStatus.set(e, r);
      this.waitForApplyMap.set(e, n);
    }
    applyClientvar(e, i) {
      let r = this.waitForApplyMap.get(e);
      eD(i, e => {
        r.delete(e.id);
        this.appliedIdSet.add(e.id);
      });
      this.waitForApplyMap.set(e, r);
    }
    isTaskAllApplied(e) {
      return this.hasMoreStatus.get(e) === false && this.waitForApplyMap.get(e)?.size === 0;
    }
    isAllTasksApplied() {
      let e = false;
      let i = Array.from(this.hasMoreStatus.keys());
      if (i.some(e => this.hasMoreStatus.get(e))) {
        e = true;
      }
      if (e) {
        ec({
          cost_time: 0,
          extra: `clientvar.hasMore is true, ids: ${i.map(e => docxFetchConcurrencyConfig.getShortId(e)).join(",")}`
        });
      }
      let r = Array.from(this.waitForApplyMap.keys()).find(e => this.waitForApplyMap.get(e).size);
      return !e && !r;
    }
    destroy() {
      this.hasMoreStatus.clear();
      this.waitForApplyMap.clear();
      this.appliedIdSet.clear();
    }
    constructor() {
      eO(this, "hasMoreStatus", new Map());
      eO(this, "waitForApplyMap", new Map());
      eO(this, "appliedIdSet", new Set());
    }
  }
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var lazyRecordClientvars = require("lazy-record-clientvars") /*id: 112384*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var firstScreenEventHandlerUtils = require("first-screen-event-handler-utils") /*id: 712591*/;
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  function eW(e) {
    return {
      type: storeActionConstants.actionTypes.UPDATE_PAID_STATUS,
      payload: e
    };
  }
  var alwaysTrueUtil = require("always-true-util") /*id: 74190*/;
  var ccmDocxPaywallWhitelist = require("ccm-docx-paywall-whitelist") /*id: 77728*/;
  function ez(e, i, r) {
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
  let eK = Q();
  class eX {
    get startId() {
      return this._startId;
    }
    getSplitter() {
      return this.splitter;
    }
    getClientvarStorage() {
      return this.clientVarStorage;
    }
    resetPaidStatus() {
      if (this.isMain) {
        reduxStoreInitializer.reduxStore.dispatch(eW(false));
      }
      this.isUnPaid = false;
    }
    updatePaidStatusWhenUnpaid(e) {
      if (ccmDocxPaywallWhitelist.isDocxWhitelisted() && this.isMain && ((e == null ? undefined : e.is_paid) === false && (reduxStoreInitializer.reduxStore.dispatch(eW(true)), this.isUnPaid = true), e == null ? undefined : e.default_preview_block_nums)) {
        var i;
        reduxStoreInitializer.reduxStore.dispatch((i = e == null ? undefined : e.default_preview_block_nums, {
          type: storeActionConstants.actionTypes.UPDATE_PAID_DEFAULT_BLOCK,
          payload: i
        }));
      }
    }
    add(e, i, r, n = false) {
      this.clientVarApplyStatus.addClientvar(e, r);
      let o = performance.now();
      if (n) {
        this.isInFileCopying = !r.concurrent;
        this.updatePaidStatusWhenUnpaid(r);
        this.clientVarStorage.add(this._token, i, r);
        ed({
          task_id: this.token,
          task_type: i,
          block_count: ef(r),
          isFirstSlice: n,
          cost_time: performance.now() - o
        });
        this.handleFirstSlice(r);
        return;
      }
      this.clientVarStorage.add(e, i, r);
      ed({
        task_id: e,
        task_type: i,
        block_count: ef(r),
        isFirstSlice: n,
        cost_time: performance.now() - o
      });
      if (this.isPreEditableEnable()) {
        if (this.clientVarApplyStatus.isTaskAllApplied(e)) {
          var l;
          if ((l = this.duplicatedApplyCb) !== null && l !== undefined) {
            l.call(this, e);
          }
        }
        if (this._needApplyAll || this._needApplyStartIdSoon && this._startId && !r.block_map[this._startId]) {
          let e = this.splitter.split({
            size: Infinity
          });
          let i = performance.now();
          if (e) {
            let r = eC(e, this.clientVarStorage, this.token);
            let n = [];
            r.forEach(e => {
              this.handleResponse(e.taskId, e.clientvar);
              n.push({
                task_id: e.taskId,
                block_count: ef(e.clientvar),
                block_list: eg(e.clientvar)
              });
            });
            eh({
              task_count: r.length,
              task_data: n,
              cost_time: performance.now() - i,
              isPreEditableEnable: true,
              reason: "splited_slice_apply"
            });
          }
          return;
        }
        this._needApplyStartIdSoon = false;
      } else {
        let i = performance.now();
        this.handleResponse(e, r);
        eh({
          task_count: 1,
          task_data: [{
            task_id: e,
            block_count: ef(r),
            block_list: eg(r)
          }],
          cost_time: performance.now() - i,
          isPreEditableEnable: false,
          reason: "split_disabled"
        });
      }
      this.tryToStartIdleApply();
    }
    set token(e) {
      this._token = e;
      this.splitter.setRootRecordId(e);
    }
    get token() {
      return this._token;
    }
    setFirstSliceReady(e) {
      this.onFirstSliceReady = e;
    }
    setBeforeApply(e) {
      this.beforeApplyCb = e;
    }
    setAfterApply(e) {
      this.afterApplyCb = e;
    }
    setFirstSliceApplied(e) {
      this.onFirstSliceApplied = e;
    }
    setDuplicated(e) {
      this.duplicatedApplyCb = e;
    }
    handleResponse(e, i) {
      if (this.beforeApplyCb) {
        this.beforeApplyCb(e, i);
      }
      if (i) {
        this.applyClientVar(e, i);
      }
      if (this.afterApplyCb) {
        this.afterApplyCb({
          taskId: e,
          clientvar: i,
          taskClientvar: this.clientVarStorage.getClientvarByTaskId(e),
          isTaskFinish: this.clientVarApplyStatus.isTaskAllApplied(e)
        });
      }
      return i;
    }
    setStartId(e, i = false) {
      this._startId = e;
      this._needApplyStartIdSoon = false;
      if ((!!this.splitter.getTree() || !this.isPreEditableEnable()) && i && !this._needApplyAll && this.isPreEditableEnable()) {
        let i = window.innerHeight;
        let r = i / 3;
        let {
          viewporNodeIdSet: n,
          bufferNodeIdSet: o
        } = eE(this.splitter.getTree(), {
          top: 0,
          height: i,
          bufferTopRange: r,
          bufferBottomRange: r
        });
        let l = n.size + o.size + 1;
        let s = this.splitter.split({
          size: l,
          traverseStartRecordId: e
        });
        if (s) {
          let e = performance.now();
          let i = [];
          eC(s, this.clientVarStorage, this.token).forEach(e => {
            let {
              taskId: r,
              clientvar: n
            } = e;
            this.handleResponse(r, n);
            i.push({
              task_id: r,
              block_count: ef(n),
              block_list: eg(n)
            });
          });
          eh({
            task_count: i.length,
            task_data: i,
            cost_time: performance.now() - e,
            isPreEditableEnable: true,
            reason: "call_by_biz"
          });
        }
      }
    }
    applyDescendent(e) {
      let i = this.splitter.split({
        size: Infinity,
        traverseStartRecordId: e,
        decendentOnly: true
      });
      if (!i) {
        return;
      }
      let r = performance.now();
      let n = [];
      eC(i, this.clientVarStorage, this.token).forEach(e => {
        let {
          taskId: i,
          clientvar: r
        } = e;
        this.handleResponse(i, r);
        n.push({
          task_id: i,
          block_count: ef(r),
          block_list: eg(r)
        });
      });
      eh({
        task_count: n.length,
        task_data: n,
        cost_time: performance.now() - r,
        reason: "apply_descendent"
      });
    }
    startApplyAllMode() {
      if (this.isPreEditableEnable() && !this._needApplyAll && (this._needApplyAll = true, this.stopIdleApply(), this._needApplyStartIdSoon = false, this.clientVarStorage.hasType(docxLazyConsumerConfig.blockTypes.NORMAL))) {
        let e = this.splitter.split({
          size: Infinity,
          traverseStartRecordId: this._token
        });
        if (e) {
          let i = performance.now();
          let r = eC(e, this.clientVarStorage, this.token);
          r.forEach(e => this.handleResponse(e.taskId, e.clientvar));
          if (docxFeatureFlags.isDocsMoreEvents()) {
            let e = r.map(e => ({
              task_id: e.taskId,
              block_count: ef(e.clientvar),
              block_list: eg(e.clientvar)
            }));
            eh({
              task_count: e.length,
              task_data: e,
              cost_time: performance.now() - i,
              reason: "apply_descendent"
            });
          }
        }
      }
    }
    stopApplyAllMode() {
      if (this.isPreEditableEnable() && this._needApplyAll) {
        this._needApplyAll = false;
        if (this._token) {
          this.tryToStartIdleApply();
        }
      }
    }
    checkNodeAndDecendentVisited(e) {
      return !this.splitter.getTree() || !!this.splitter.getTree().getNode(e)?.visited;
    }
    isPreEditableEnable() {
      let {
        isInFileCopying: e
      } = this;
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        return docxFeatureFlags.isMobileSplitFirstSlice() && !e;
      } else {
        return !docxShortcutFeatureDetection.isShortcutEnabled() && docxLazyConsumerConfig.isEnabled && !e;
      }
    }
    setApplyCriticalDone() {
      firstScreenEventHandlerUtils.debouncedExecution(() => {
        if (this.criticalRecordsApplied) {
          return;
        }
        this.criticalRecordsApplied = true;
        let e = JSON.stringify({
          token: docxUtilityHelpers.maskSensitiveData(this.token)
        });
        docxEventCollector.docEventCollector("doc_bug_track_dev", {
          action: "apply_critical_done",
          info: e
        });
        this.eventEmitter.emit(lazyRecordClientvars.clientvarEvents.CRITICAL_CLIENT_VAR_APPLY_DONE);
      });
    }
    splitFirstSliceClientVars(e) {
      let i;
      if (!this.isPreEditableEnable()) {
        return e;
      }
      let r = null;
      if (this._needApplyAll) {
        r = this._token;
      } else if (this._startId && !e.block_map[this._startId]) {
        this._needApplyStartIdSoon = true;
        r = this._startId;
      }
      if (r) {
        return this.splitter.split({
          size: Infinity,
          traverseStartRecordId: r,
          isFirstSlice: true
        });
      }
      let n = window.innerHeight;
      let o = n / 3;
      let {
        viewporNodeIdSet: l,
        bufferNodeIdSet: s
      } = eE(this.splitter.getTree(), {
        top: 0,
        height: n,
        bufferTopRange: o,
        bufferBottomRange: o
      });
      if (this._startId && this._startId !== this._token) {
        let e = l.size + s.size + 1;
        i = this.splitter.split({
          size: e,
          traverseStartRecordId: this._startId,
          isFirstSlice: true
        });
      } else {
        i = this.splitter.splitWithIds([...Array.from(l), ...Array.from(s), this._token]);
      }
      return i;
    }
    handleFirstSlice(e) {
      var i;
      let r = e;
      let n = this.splitFirstSliceClientVars(e);
      let o = performance.now();
      if (n) {
        let i = eC(n, this.clientVarStorage, this.token, e);
        if (i.length !== 1) {
          let e = Error("length !== 1 at handleFirstSlice");
          docxUtilityHelpers.captureException(e);
          throw e;
        }
        r = i[0].clientvar;
      }
      if (!this._needApplyStartIdSoon && !this._needApplyAll) {
        this.tryToStartIdleApply();
      }
      if (this.onFirstSliceReady) {
        this.onFirstSliceReady(r, this);
      } else {
        this.handleResponse(this._token, r);
      }
      eh({
        task_count: 1,
        task_data: [{
          task_id: this.token,
          block_count: ef(r),
          block_list: eg(r)
        }],
        cost_time: performance.now() - o,
        isPreEditableEnable: this.isPreEditableEnable(),
        isFirstSlice: true,
        reason: "first_slice"
      });
      if ((i = this.onFirstSliceApplied) !== null && i !== undefined) {
        i.call(this, r);
      }
    }
    tryToStartIdleApply(e) {
      if (e) {
        this.forceIdleApplyAll = true;
      }
      if (!this.isPreEditableEnable()) {
        return;
      }
      let {
        perfFeatures: i
      } = this;
      if (this.forceIdleApplyAll || !i || i.has(docPerformanceTuningFlags.IdleApplyFlags.ENABLE_IDLE_APPLY_ALL_OR_CRITICAL)) {
        return this.ensureIdleWorker().start();
      }
    }
    stopIdleApply() {
      var e;
      if ((e = this.idleWorker) !== null && e !== undefined) {
        e.stop();
      }
    }
    idleGetNextClientvar(e = 17) {
      let i = eK.force_apply_block_count;
      if (!eK.idle_force_apply) {
        i = Math.floor(e / 0.34 + 0.5);
      }
      return this.splitter.split({
        size: i,
        traverseStartRecordId: this._startId,
        filter: this.idleFilter
      });
    }
    initPendingRecordForBlockMap(e, i, r = {}) {
      let n = [];
      let s = new Set();
      let a = (e, o) => {
        if (this.dataProvider.has(e) || s.has(e)) {
          return;
        }
        s.add(e);
        let c = i[e]?.data || Object.assign({
          type: docBlockTypeConstants.blockTypeConstants.PENDING,
          sliced: true,
          parent_id: o
        }, r);
        n.push({
          id: e,
          snapshot: c
        });
      };
      for (let e in i) {
        nodeConfigRegistry.traverseNodes(e, null, e => {
          return {
            id: e,
            snapshot: i[e]?.data || {}
          };
        }, (e, i) => {
          a(e.id, i ? i.id : undefined);
          return true;
        });
      }
      this.dataProvider.register(n);
    }
    isRecordFetched(e) {
      let i = this.clientVarStorage.getTaskIdsByRecordId(e);
      return !!i && !!(i.size > 0);
    }
    applyClientVar(e, i) {
      let {
        block_map: r
      } = i;
      let n = false;
      try {
        if (e !== this.token) {
          if (!this.dataProvider.has(e)) {
            this.dataProvider.register([{
              id: e,
              snapshot: {
                type: docBlockTypeConstants.blockTypeConstants.PENDING
              }
            }]);
          }
          let {
            type: i
          } = this.dataProvider.get(e).snapshot;
          n = docxBlockValidatorUtils.isTableBlock(i);
        }
      } catch (e) {
        n = false;
      }
      this.initPendingRecordForBlockMap(e, r, {
        allowFail: n,
        baseRecordId: e
      });
      this.registrry.applyClientVar(i, e => {
        this.dataProvider.register(e);
      });
      docxEventCollector.docEventCollector("print_native_log", {
        stage: "applyClientVar-initPendingRecordForBlockMap",
        recordId: e
      });
      this.clientVarApplyStatus.applyClientvar(e, i);
    }
    checkApplyStatus() {
      let e = this.clientVarApplyStatus.isAllTasksApplied();
      let i = Array.from(this.clientVarApplyStatus.waitForApplyMap.keys()).filter(e => this.clientVarApplyStatus.waitForApplyMap.get(e).size);
      let r = i[0];
      if (e || !r) {
        return;
      }
      let n = [];
      if (i.length) {
        n = i.map(e => this.clientVarApplyStatus.waitForApplyMap.get(e)).filter(docxFetchConcurrencyConfig.isDefined).reduce((e, i) => {
          e.push(...Array.from(i.keys()).map(e => docxFetchConcurrencyConfig.getShortId(e)));
          return e;
        }, []);
      }
      ec({
        cost_time: 0,
        extra: `alldone fail, ids: ${JSON.stringify(n)}'`
      });
      if (this.splitter.getTree().visited) {
        let e = Array.from(this.clientVarApplyStatus.waitForApplyMap.get(r).keys());
        let i = this.splitter.getTree().getNode(e[0]);
        if (!i) {
          ec({
            cost_time: 0,
            extra: "not found node in splitter tree"
          });
          return;
        }
        try {
          if (eC({
            block_map: {
              [i.id]: i.data
            }
          }, this.clientVarStorage, this._token).some(e => e.taskId === r)) {
            ec({
              cost_time: 0,
              extra: "task mapping status error"
            });
          } else {
            ec({
              cost_time: 0,
              extra: "mapping blockId to taskId error"
            });
          }
        } catch (e) {
          ec({
            cost_time: 0,
            extra: `transform unFinish info, catch error, e: ${e}`
          });
        }
      } else {
        let e = i.find(e => e !== this._token);
        if (e) {
          let i = this.clientVarStorage.has(e);
          ec({
            cost_time: 0,
            extra: `tree not visited, find unFinished skipBlock in storage: ${i}`
          });
        } else {
          ec({
            cost_time: 0,
            extra: "tree not visited. may be algorithm bug"
          });
        }
      }
    }
    ensureIdleWorker() {
      this.idleWorker ||= new eo((e, i) => {
        if (!eK.idle_force_apply && (e || i < 1)) {
          return true;
        }
        let r = this.idleGetNextClientvar(i);
        if (!r) {
          if (this.fetchAllDone) {
            var n;
            if ((n = this.perfFeatures) === null || n === undefined ? undefined : n.has(docPerformanceTuningFlags.IdleApplyFlags.ENABLE_IDLE_APPLY_CRITICAL_BY_LARGE_DOC)) {
              this.setApplyCriticalDone();
            }
            this.checkApplyStatus();
          }
          return false;
        }
        let o = performance.now();
        let l = [];
        let s = eC(r, this.clientVarStorage, this.token);
        if (s.length) {
          s.forEach(e => {
            let {
              taskId: i,
              clientvar: r
            } = e;
            this.handleResponse(i, r);
            l.push({
              task_id: i,
              block_count: ef(r),
              block_list: eg(r)
            });
          });
          eh({
            task_count: s.length,
            task_data: l,
            cost_time: performance.now() - o,
            isPreEditableEnable: this.isPreEditableEnable(),
            reason: "idle_apply"
          });
          return true;
        } else {
          eh({
            task_count: s.length,
            task_data: l,
            cost_time: performance.now() - o,
            isPreEditableEnable: this.isPreEditableEnable(),
            reason: "no_tasks"
          });
          return false;
        }
      });
      return this.idleWorker;
    }
    destroy() {
      var e;
      var i;
      this.isDestroyed = true;
      if ((e = this.sub) !== null && e !== undefined) {
        e.unsubscribe();
      }
      this.handleClientvarApplyAllDone();
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALL_DONE_NEW, this.handleFetchAllDone);
      this.eventEmitter.off(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, this.handleClientvarApplyAllDone);
      if ((i = this.idleWorker) !== null && i !== undefined) {
        i.destroy();
      }
      this.onFirstSliceReady = undefined;
      this.beforeApplyCb = undefined;
      this.afterApplyCb = undefined;
      this.onFirstSliceApplied = undefined;
      this.duplicatedApplyCb = undefined;
      this.resetPaidStatus();
    }
    constructor(e, i, r, n) {
      this.registrry = e;
      this.dataProvider = i;
      this.eventEmitter = r;
      ez(this, "splitter", undefined);
      ez(this, "clientVarStorage", undefined);
      ez(this, "clientVarApplyStatus", undefined);
      ez(this, "_token", undefined);
      ez(this, "_startId", undefined);
      ez(this, "_needApplyStartIdSoon", false);
      ez(this, "_needApplyAll", false);
      ez(this, "onFirstSliceReady", undefined);
      ez(this, "beforeApplyCb", undefined);
      ez(this, "duplicatedApplyCb", undefined);
      ez(this, "afterApplyCb", undefined);
      ez(this, "onFirstSliceApplied", undefined);
      ez(this, "idleWorker", undefined);
      ez(this, "isMain", false);
      ez(this, "isInFileCopying", false);
      ez(this, "sub", undefined);
      ez(this, "applyAllDone", false);
      ez(this, "fetchAllDone", false);
      ez(this, "criticalRecordsApplied", false);
      ez(this, "perfFeatures", undefined);
      ez(this, "isDestroyed", false);
      ez(this, "forceIdleApplyAll", false);
      ez(this, "isUnPaid", false);
      ez(this, "handleFetchAllDone", () => {
        this.fetchAllDone = true;
        let {
          perfFeatures: e
        } = this;
        if (!e || (this.isMain && e.setMainFetchAllDone(), !e.has(docPerformanceTuningFlags.IdleApplyFlags.DISABLE_IDLE_APPLY_ALL_BY_DOWNGRADE | docPerformanceTuningFlags.IdleApplyFlags.UNDETERMINED))) {
          return;
        }
        let i = () => {
          firstScreenEventHandlerUtils.debouncedExecution(() => {
            var r;
            if ((r = this.sub) !== null && r !== undefined) {
              r.unsubscribe();
            }
            this.sub = undefined;
            if (!this.isDestroyed && !this.applyAllDone) {
              if (e.has(docPerformanceTuningFlags.IdleApplyFlags.UNDETERMINED)) {
                this.sub = e.updated$.subscribe(i);
                return;
              }
              if (!e.has(docPerformanceTuningFlags.IdleApplyFlags.DISABLE_IDLE_APPLY_ALL_BY_DOWNGRADE)) {
                if (!this.applyAllDone) {
                  this.tryToStartIdleApply();
                }
                return;
              }
              try {
                let e = this.splitter.getTree();
                let i = e && e.getNode(this.token);
                if (!i) {
                  return;
                }
                noopFunction.noopFunction(i, this);
              } catch (e) {} finally {
                this.setApplyCriticalDone();
              }
            }
          });
        };
        i();
      });
      ez(this, "idleFilter", e => {
        if (this.forceIdleApplyAll || e.id === this._startId) {
          return true;
        }
        let {
          perfFeatures: i
        } = this;
        if (i && i.has(docPerformanceTuningFlags.IdleApplyFlags.ENABLE_IDLE_APPLY_CRITICAL_BY_LARGE_DOC)) {
          return alwaysTrueUtil.alwaysTrue(e.data?.data);
        }
        return true;
      });
      ez(this, "handleClientvarApplyAllDone", () => {
        this.applyAllDone = true;
        this.stopIdleApply();
        this.clientVarStorage.destroy();
        this.clientVarApplyStatus.destroy();
        this.splitter.destroy();
      });
      this.isMain = !!(n == null ? undefined : n.isMain);
      this.perfFeatures = n == null ? undefined : n.perfFeats;
      this.clientVarStorage = new ev(this.perfFeatures);
      this.clientVarApplyStatus = new ex();
      this.splitter = new eN(this.clientVarStorage, docxFeatureFlags.isMobileLargeDocIdle());
      this.eventEmitter.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_FETCH_ALL_DONE_NEW, this.handleFetchAllDone);
      this.eventEmitter.on(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, this.handleClientvarApplyAllDone);
    }
  }
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var collectionPartitionFactory = require("collection-partition-factory") /*id: 505294*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var syncedBlockUrlManager = require("synced-block-url-manager") /*id: 70948*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docUserServiceToken = require("doc-user-service-token") /*id: 765582*/;
  function e1(e, i, r) {
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
  class e3 {
    connectCollab(e) {
      this.collab = e;
    }
    connectSync(e) {
      this.sync = e;
      e.setConnectSync(this.connectCollabSync.bind(this));
    }
    registerWithCustomRecordRegister(e, i) {
      if (!arrayIsArrayUtil.isArray(e)) {
        if ("block_map" in e) {
          e = this.clientVarsToResourceEntities(e);
        }
        e = arrayIsArrayUtil.isArray(e) ? e : [e];
      }
      let [r, n] = collectionPartitionFactory.partitionCollection(e, e => collaborativeEditingFlowSyncModule.isListInsertOperation(e));
      let {
        dataProvider: o,
        collab: l
      } = this;
      let s = [];
      n.forEach(e => {
        let {
          id: i,
          resourceType: r
        } = e;
        if (!o.has(i) || (l == null ? undefined : l.getVersion(i, r)) === undefined) {
          s.push({
            id: i,
            snapshot: e.data
          });
        }
      });
      r.forEach(e => {
        if (!o.has(e.id) && collaborativeEditingFlowSyncModule.isListInsertOperation(e)) {
          throw Error("can not register notification before record register");
        }
      });
      this.registerEntity(n);
      i(s);
    }
    register(e) {
      this.registerWithCustomRecordRegister(e, e => {
        this.dataProvider.register(e);
      });
    }
    registerEntity(e) {
      let i = e.filter(e => typeof e.version == "number").map(e => {
        if (e.data.type === "page" && e.data.originType === "synced_source") {
          let i = deepCloneWrapper_1.deepClone(e);
          i.data.type = "synced_source";
          return i;
        }
        return e;
      });
      if (this.collab && i.length) {
        this.collab.register(i);
        if (this.sync?.enabled) {
          this.sync.requestSync(i);
        } else {
          this.connectCollabSync(i);
        }
      }
    }
    applyClientVar(e, i) {
      this.registerWithCustomRecordRegister(e, e => {
        i(e);
      });
      this.setSyncedBlockUrl(e);
      this.setMentionDocData(e);
    }
    setMentionDocData(e) {
      this.embed.onEmbedPermissionChangeByClientVars(e);
    }
    setSyncedBlockUrl(e) {
      syncedBlockUrlManager.syncedBlockUrlMgr.updateUrlByClientVars(e);
    }
    clientVarsToResourceEntities(e) {
      let i = [];
      let {
        block_map: r
      } = e;
      Object.values(r).forEach(e => {
        let r = e.data;
        i.push({
          id: e.id,
          version: e.version,
          resourceType: collaborativeEditingFlowSyncModule.RecordManager.record,
          data: r
        });
      });
      return i;
    }
    connectCollabSync(e) {
      if (diContainerInstance.diContainer.get(docUserServiceToken.docUserServiceToken).getIsLoggedIn()) {
        var i;
        if ((i = this.collab) !== null && i !== undefined) {
          i.connectSync(e);
        }
      }
    }
    constructor(e, i) {
      this.dataProvider = e;
      this.embed = i;
      e1(this, "sync", undefined);
      e1(this, "collab", undefined);
    }
  }
  require("onboarding-doc-enum") /*id: 49559*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var docTokenFileTypeUtils = require("doc-token-file-type-utils") /*id: 133124*/;
  var docInlineComponentUtils = require("doc-inline-component-utils") /*id: 595942*/;
  var driveDocInlineComponentUtils = require("drive-doc-inline-component-utils") /*id: 759062*/;
  var stubTrueFunctions = require("stub-true-functions") /*id: 386838*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var docxTokenMappingResolver = require("docx-token-mapping-resolver") /*id: 586713*/;
  var docPermissionStatusSelectors = require("doc-permission-status-selectors") /*id: 16982*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var appConfigInitializer = require("app-config-initializer") /*id: 321601*/;
  function tr(e, i, r) {
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
  class tn {
    get hasInitPermission() {
      return this._hasInitPermission;
    }
    async getPermConfig(e) {
      let {
        token: i,
        isInitiative: r
      } = e;
      let n = await (platformDocUtils.ADP === null || platformDocUtils.ADP === undefined ? undefined : platformDocUtils.ADP({
        token: i,
        fileType: this.currentPageType,
        isInitiative: r
      }));
      if (n) {
        let e = n.initLarkServices;
        n.initLarkServices = async function () {
          await e();
          await appConfigInitializer.initAppConfig();
        };
        return n;
      }
      let o = platformDocUtils.HiA.getLocale();
      let l = {
        token: i,
        type: this.currentPageType
      };
      let s = {
        ...objectPathGetDefault.getObjectPathDefault(window, "User.clientFeatures", {}),
        is_equal_opt_enable: docxFeatureFlags.isEqualOptEnabled()
      };
      return {
        initLarkServices: appConfigInitializer.initAppConfig,
        entity: l,
        env: {
          locale: o
        },
        bizConfig: {
          globalConfig: objectPathGetDefault.getObjectPathDefault(window, "globalConfig"),
          FGConfig: s
        },
        sendTeaEvent: docxEventCollector.wrappedCollector,
        request: platformDocUtils.WY0
      };
    }
    async initPermission(e) {
      this.embedObjectSet.clear();
      let {
        initPermissionServices: i,
        EmbedObjPermissionManager: n
      } = e ? await require.e("docx_permission") /*id: 79036*/.then(require.bind(require, "docx-permission-manager") /*id: 594489*/) : await docxTaskSchedulerUtilities.scheduleTaskWithConfig({
        name: "docx.platformPermission",
        action: () => require.e("docx_permission") /*id: 79036*/.then(require.bind(require, "docx-permission-manager") /*id: 594489*/)
      });
      let o = browserEnvironmentDetectionUtils.browserDetector.isMobile ? await docxTokenMappingResolver.getRealToken(this.currentPageToken) : this.currentPageToken;
      i(await this.getPermConfig({
        token: o,
        isInitiative: e
      }));
      this.embedObjPermissionManager = new n({
        token: o,
        type: this.currentPageType,
        onPermissionChange: this.onPermissionChange
      });
      if (this.embedObjectCache.length > 0) {
        this.addEmbedObjs(this.embedObjectCache);
        this.embedObjectCache = [];
      }
      if (this.embedObjPermissionCache.length > 0) {
        this.addPermissionFromMeta(this.embedObjPermissionCache);
        this.embedObjPermissionCache = [];
      }
      this.initPermissionCallback.forEach(e => e == null ? undefined : e());
    }
    async initPermissionIfNeed(e) {
      let i = this._hasInitPermission && !e;
      if (!this.embedObjPermissionManager && !i) {
        this._hasInitPermission = true;
        await this.initPermission(!!e);
      }
    }
    addEmbedObjs(e) {
      if (!(e.length <= 0)) {
        this.initPermissionIfNeed(false);
        if (this.embedObjPermissionManager) {
          this.embedObjPermissionManager.addEmbedObjs(e);
          e.forEach(e => this.embedObjectSet.add(e.token));
        } else {
          this.embedObjectCache = this.embedObjectCache.concat(e);
        }
      }
    }
    destroy() {
      var e;
      if ((e = this.embedObjPermissionManager) !== null && e !== undefined) {
        e.destroy();
      }
      this.embedObjectSet.clear();
      this.initPermissionCallback.clear();
      this._hasInitPermission = false;
      this.permissionChange$.complete();
    }
    addInitPermissionCallback(e) {
      this.initPermissionCallback.add(e);
    }
    addPermissionFromMeta(e) {
      if (this.embedObjPermissionManager) {
        this.embedObjPermissionManager.addPermissionFromMeta(e);
      } else {
        this.embedObjPermissionCache = this.embedObjPermissionCache.concat(e);
      }
    }
    addEmbedObj(e, i, r, n) {
      if (this.notSupportPermission) {
        return;
      }
      let o = driveDocInlineComponentUtils.getDefaultTitleByType(e, r, i);
      if (o) {
        this.addEmbedObjs([{
          token: e,
          title: o,
          type: driveDocInlineComponentUtils.normalizeSuiteType(r),
          action_list: n
        }]);
      }
    }
    onEmbedPermissionChangeByClientVars(e) {
      if (this.notSupportPermission) {
        return;
      }
      let {
        block_map: i
      } = e;
      let r = Array.from(Object.values(i).reduce((e, i) => {
        let r = objectPathGetDefault.getObjectPathDefault(i, "data.text.apool.numToAttrib");
        if (r) {
          Object.values(r).forEach(i => {
            let [r, n] = i;
            if (r === inlineComponentConstants.componentType && n.indexOf(inlineComponentConstants.mentionTypes.DOC) !== -1) {
              let i = docInlineComponentUtils.parseJsonSafe(n);
              if (i == null ? undefined : i.data) {
                let {
                  token: r,
                  file_type: n,
                  title: o
                } = i.data;
                let l = driveDocInlineComponentUtils.getDefaultTitleByType(r, n, o);
                e.set(r, {
                  type: driveDocInlineComponentUtils.normalizeSuiteType(n),
                  token: r,
                  title: l
                });
              }
            }
          });
        }
        return e;
      }, new Map()).values());
      this.addEmbedObjs(r);
    }
    hasEmbedObj(e) {
      return this.embedObjectSet.has(e) || !!this.embedObjectCache.find(i => i.token === e);
    }
    fetchNoPermUser(e) {}
    bulkGrantPermission(e) {
      if (this.embedObjPermissionManager) {
        this.embedObjPermissionManager.bulkGrantPermission(e);
      }
    }
    constructor(e) {
      tr(this, "currentPageToken", undefined);
      tr(this, "embedObjPermissionManager", undefined);
      tr(this, "embedObjectCache", []);
      tr(this, "embedObjPermissionCache", []);
      tr(this, "embedObjectSet", new Set());
      tr(this, "notSupportPermission", undefined);
      tr(this, "embedObjToFetchPermissionList", new Map());
      tr(this, "_hasInitPermission", false);
      tr(this, "initPermissionCallback", new Set());
      tr(this, "currentPageType", undefined);
      tr(this, "permissionChange$", new observableSubjectClass.Subject());
      tr(this, "onPermissionChange", e => {
        var i;
        reduxStoreInitializer.reduxStore.dispatch((i = {
          pageToken: this.currentPageToken,
          embedObjectPermissions: e
        }, {
          type: storeActionConstants.actionTypes.UpdateEmbedObjPermission,
          payload: i
        }));
        this.permissionChange$.next(e);
      });
      tr(this, "checkApplyEmbed", async (e, i, r) => {
        let n = docPermissionStatusSelectors.getPermissionStatusForNode(reduxStoreInitializer.reduxStore.getState(), this.currentPageToken, e);
        try {
          if (!stubTrueFunctions.alwaysTrueCheck()) {
            return n;
          }
          if (!this.embedObjPermissionManager) {
            this.initPermissionIfNeed(true);
            return inlineComponentConstants.contentStatus.LOADING;
          }
          let o = driveDocInlineComponentUtils.normalizeSuiteType(i);
          await this.embedObjPermissionManager.checkApplyEmbed({
            token: e,
            type: o,
            title: r
          });
          return docPermissionStatusSelectors.getPermissionStatusForNode(reduxStoreInitializer.reduxStore.getState(), this.currentPageToken, e);
        } catch {
          return n;
        }
      });
      tr(this, "addEmbedObjToFetchPermission", e => stubTrueFunctions.alwaysTrueCheck() && this.embedObjToFetchPermissionList.set(e.token, e));
      tr(this, "fetchEmbedObjsAllembedPerm", () => {});
      this.currentPageToken = docTokenFileTypeUtils.getDocToken(e);
      this.currentPageType = docTokenFileTypeUtils.getFileType(e);
      this.notSupportPermission = docxShortcutFeatureDetection.isShortcutEnabled() || !stubTrueFunctions.alwaysTrueStub();
    }
  }
  var docxReactUpdateWrapper = require("docx-react-update-wrapper") /*id: 668243*/;
  function tl(e, i, r) {
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
  class ts {
    destroy() {
      this.dataProvider.destroy();
      this.dataFetcher.destroy();
      this.clientVarLazyConsumer.destroy();
      this.embedObjectManager.destroy();
      this.eventEmitter.removeAllListeners();
      if (this.hasOwnPerfFeatures) {
        var e;
        if ((e = this.perfFeatures) !== null && e !== undefined) {
          e.destroy();
        }
      }
    }
    constructor(e) {
      tl(this, "eventEmitter", undefined);
      tl(this, "embedObjectManager", undefined);
      tl(this, "dataProvider", undefined);
      tl(this, "dataFetcher", undefined);
      tl(this, "clientVarLazyConsumer", undefined);
      tl(this, "clientVarRegistry", undefined);
      tl(this, "perfFeatures", undefined);
      tl(this, "hasOwnPerfFeatures", false);
      let i = new L();
      let r = new docxEditorCore.DataService({
        rootRecordId: e.rootRecordId,
        createRecordToken: () => docTokenHelperUtils.generateDocToken(),
        transactionWrapper: docxReactUpdateWrapper.DocxUpdateWrapper.getInstance().getWrapper(e.needTriggerHook),
        logger: {
          log: (i, r) => docxEventCollector.docEventCollector(i, Object.assign({}, r, {
            origin_root_file_id: platformDocUtils.p5T(e.rootRecordId),
            origin_root_file_type: e == null ? undefined : e.rootType
          }))
        },
        derivationConfigs: nodeConfigRegistry.getAllConfigs()
      });
      let n = new tn({
        pageToken: e.noteToken || e.rootRecordId,
        isPreview: e.isPreview,
        rootType: e.rootType
      });
      let l = new e3(r, n);
      let s = new q(l, e.pageToken || e.rootRecordId, e.rootRecordId, e.rootType);
      s.init();
      let a = e.perfFeats;
      if (e.isMain && !a) {
        a = new H();
        this.hasOwnPerfFeatures = true;
      }
      this.perfFeatures = a;
      let c = new eX(l, r, i, {
        isMain: e.isMain,
        perfFeats: a
      });
      this.eventEmitter = i;
      this.dataProvider = r;
      this.dataFetcher = s;
      this.clientVarLazyConsumer = c;
      this.clientVarRegistry = l;
      this.embedObjectManager = n;
    }
  }
  require.d(exports, {
    ClientVarLazyConsumerRegistry: function () {
      return ts;
    }
  });
}