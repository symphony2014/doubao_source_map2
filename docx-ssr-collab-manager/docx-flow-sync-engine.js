// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'DocxFlowSyncEngine'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 310118
         */
module.exports = function (module, exports, require) {
  var s;
  var n;
  var o;
  var a;
  var l;
  var c;
  var h;
  var d;
  var u;
  var f;
  var subscriptionCore = require("subscription-core") /*id: 259043*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var syncedReferenceBlockManager_1 = require("synced-reference-block-manager_1") /*id: 259219*/;
  var syncedReferenceBlockManager_2 = require("synced-reference-block-manager_2") /*id: 806884*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var suiteMemberManagement = require("suite-member-management") /*id: 741110*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var flowDoConfigServiceSymbol = require("flow-do-config-service-symbol") /*id: 533067*/;
  var operationalTransformCore = require("operational-transform-core") /*id: 379386*/;
  var docLoggerSymbol = require("doc-logger-symbol") /*id: 192564*/;
  var docSyncConfigFlags = require("doc-sync-config-flags") /*id: 934075*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  function x(e, i, r) {
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
  let {
    isTextOdoiOp: Z
  } = operationalTransformCore.easysyncUtils;
  var asyncUtilsAndStreamingOpsFilter = require("async-utils-and-streaming-ops-filter") /*id: 781913*/;
  var roomEventStatusConstants = require("room-event-status-constants") /*id: 871566*/;
  function W(e, i, r) {
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
  class X {
    pushTrace(e) {
      var r = arguments.length;
      var s = Array(r > 1 ? r - 1 : 0);
      var n = 1;
      for (; n < r; n++) {
        s[n - 1] = arguments[n];
      }
      let {
        rootId: o
      } = this;
      let [a] = s;
      if (window.splitterTrace?.rootId !== o) {
        window.splitterTrace = {
          rootId: o,
          traces: []
        };
      }
      window.splitterTrace.traces.push({
        type: e,
        data: a,
        rootId: o,
        time: performance.now()
      });
      this.isPersistRefresh = false;
    }
    flushToPersist() {
      if (!this.isPersistRefresh) {
        try {
          localStorage.setItem("splitter_trace_doubao", JSON.stringify(window.splitterTrace));
        } catch (e) {}
        this.isPersistRefresh = true;
      }
    }
    destory() {
      this.flushToPersist();
    }
    constructor({
      rootId: e
    }) {
      W(this, "rootId", undefined);
      W(this, "isPersistRefresh", false);
      this.rootId = e;
    }
  }
  var collabSubjectRegistry = require("collab-subject-registry") /*id: 703629*/;
  var tokenManager = require("token-manager") /*id: 939673*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  function q(e) {
    let i = platformDocUtils.KNd();
    if (docUrlResolver.isDocDomain(e) || i) {
      if (i) {
        let e = platformDocUtils.pEP();
        return {
          getIsReady: () => true,
          getProxyTokenByOrigin: () => e,
          getOriginTokenByProxy: () => e
        };
      }
      return {
        getIsReady: () => !!tokenManager.tokenManager.getRealTokenFromMemory(e),
        getProxyTokenByOrigin: e => tokenManager.tokenManager.getRealTokenFromMemory(e),
        getOriginTokenByProxy: e => tokenManager.tokenManager.getFakeTokenFromMemory(e)
      };
    }
  }
  var docxSubscriptionTypes = require("docx-subscription-types") /*id: 682485*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventLogger = require("docx-event-logger") /*id: 141272*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var flowDocChatMemberIo = require("flow-doc-chat-member-io") /*id: 956604*/;
  function er(e, i, r) {
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
  let es = new Map([["ccm_front_recv_msg_info_dev", e => {
    let i = {};
    e.forEach(e => {
      let {
        cs_uuid: r
      } = e;
      if (i[r]) {
        i[r].block_detail.push(e);
        i[r].set.add(e.block_id);
      } else {
        i[r] = {
          block_detail: [e],
          set: new Set([e.block_id])
        };
      }
    });
    let r = [];
    Object.entries(i).forEach(e => {
      let [i, {
        block_detail: s,
        set: n
      }] = e;
      r.push({
        cs_uuid: i,
        cs_block_num: n.size,
        message_type: "changeset",
        block_detail: s
      });
    });
    return r;
  }]]);
  let en = () => ({
    device_id: docxEditorBlockMetadataUtils.getDeviceIdFromStorage(),
    member_id: `${flowDocChatMemberIo.getChatIoInstance().getMemberId()}`
  });
  let eo = new Set(["dev_sync_new_changes", "dev_sync_emit_new_changes", "docx_collab_dev", "docx_sync_version_dev"]);
  let ea = new Set(["docx_collab_new_uuid"]);
  (s = {}).FlowSync = "docx_flow_sync_dev";
  s.TempTransaction = "ccm_doc_temp_transaction_dev";
  s.Exception = "doc_collab_exception_dev";
  let el = s;
  let ec = new Set(["user_change_resp_error_dev", "docx_sync_version_dev", "docx_heartbeat_callback_info_dev", "ccm_front_recv_msg_info_dev", "ccm_front_apply_msg_dev", "dev_sync_fetch_missing", "dev_sync_fetch_missing_end", el.Exception, el.FlowSync]);
  let eh = debugLoggerFactory.createLogger("[CollabLogger]");
  class ed extends docxEventLogger.DocxEventLogger {
    log(e, i) {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        ec.has(e);
      }
      if (ea.has(e)) {
        this.delayLog(e, i);
        return;
      }
      super.log(e, i);
    }
    exceptionLog(e, i) {
      this.log(el.Exception, {
        reason: e,
        ...i
      });
    }
    constructor(...e) {
      super(...e);
      er(this, "syncLog", (e, i) => {
        eh("sync", e, i);
        let r = {
          action: e,
          ...i
        };
        if (i == null ? undefined : i.isBatch) {
          this.batchLog(el.FlowSync, r);
          return;
        }
        this.log(el.FlowSync, r);
      });
      er(this, "tempLog", (e, i) => {
        eh("temp", e, i);
        let r = {
          action: e,
          ...i
        };
        this.log(el.TempTransaction, r);
      });
    }
  }
  function eu(e, i, r) {
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
  class ef {
    destroy() {
      this.subs.forEach(e => e.unsubscribe());
      this.changeCallbacks.length = 0;
    }
    constructor(e, i, r) {
      this.dataProvider = e;
      this.collab = i;
      this.changeChecker = r;
      eu(this, "subs", undefined);
      eu(this, "changeCallbacks", []);
      eu(this, "getRecordManagerFacade", () => {
        let {
          dataProvider: e
        } = this;
        return {
          hasRecord: i => e.has(i),
          getRecord: i => e.get(i),
          registerRecords: i => e.register(i),
          applyTransaction: e.applyTransaction.bind(e),
          onChange: e => {
            this.changeCallbacks.push(e);
            return () => {
              let i = this.changeCallbacks.indexOf(e);
              if (i >= 0) {
                this.changeCallbacks.splice(i, 1);
              }
            };
          },
          emitError: i => {
            e.error$.next(i);
          },
          interceptRemoteChanges: i => {
            e.interceptRemoteChange$.next({
              recordOps: i
            });
          }
        };
      });
      eu(this, "handleTempTransaction", e => {
        let {
          action: i,
          transactionName: r
        } = e;
        if (i === "submit") {
          this.collab.submitTempChange(r);
        } else {
          this.collab.cancelTempChange(r);
        }
      });
      eu(this, "handleDataProviderChange", e => {
        this.changeChecker(e);
        this.changeCallbacks.forEach(i => i(e));
      });
      this.subs = [e.change$.subscribe(this.handleDataProviderChange), e.tempTransaction$.subscribe(this.handleTempTransaction)];
    }
  }
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var browserDebugOfflineCheck = require("browser-debug-offline-check") /*id: 819067*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxTokenMappingResolver = require("docx-token-mapping-resolver") /*id: 586713*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var apiEndpointConstants = require("api-endpoint-constants") /*id: 403286*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var userColorUtilities = require("user-color-utilities") /*id: 511417*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  function eI(e, i, r) {
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
  let eR = "applyRemoteOperations";
  let eA = debugLoggerFactory.createLogger("BD-Collab");
  u = asyncUtilsAndStreamingOpsFilter.createAsyncWrapper("reFetchRoomMembers");
  n = (f = class extends collaborativeEditingFlowSyncModule.lw {
    get flowDocConfig() {
      return diContainerInstance.diContainer.get(flowDoConfigServiceSymbol.FlowDoConfigService);
    }
    get isSynchronizing() {
      return !(docUrlResolver.isDocDomain === null || docUrlResolver.isDocDomain === undefined ? undefined : docUrlResolver.isDocDomain()) && (this.sync.getIsSyncing() || this.hasChangesInBuffer);
    }
    get hasChangesInBuffer() {
      return !!this.engineSyncBuffer.bufferPool.length;
    }
    get suiteType() {
      if (this.type.includes("synced") || syncUrlBlockUtils.isSyncingActive()) {
        return "44";
      } else {
        return fileTypeConstants.BasicFileType.DOCX.toString();
      }
    }
    reFetchRoomMembers(e) {
      let i = docxTokenMappingResolver.resolveDocToken(this.token);
      return suiteMemberManagement.memberActions.fetchMemberInfos(i).then(e => {
        this.setHeartbeatVersion("member_channel", e.data.version);
        this.handleMemberChannelEvent({
          type: roomEventStatusConstants.roomEventTypes.ROOM_MEMBERS,
          ...e.data
        });
      });
    }
    refreshStreamingStatus() {
      let {
        rootRecordId: i
      } = this.dataProvider;
      let {
        getRecord: r
      } = this.collabDataHelper.getRecordManagerFacade();
      let s = r(i);
      let {
        enabled: n = false,
        expired_at: o,
        is_create_command: a
      } = objectPathGetDefault.getObjectPathDefault(s, "snapshot.status", {}).streaming ?? {};
      let l = asyncUtilsAndStreamingOpsFilter.parseNumber(o);
      let c = asyncUtilsAndStreamingOpsFilter.parseBoolean(a);
      let h = asyncUtilsAndStreamingOpsFilter.executeImmediately(() => !!n && (!!isUndefinedCheck.isUndefined(l) || !(l * 1000 < Date.now())) && !!c);
      this.updateStatus(h);
      if (!isUndefinedCheck.isUndefined(l)) {
        this.setExpiredTimer(l);
      }
    }
    setExpiredTimer(e) {
      if (this.timeoutHandler !== null) {
        clearTimeout(this.timeoutHandler);
        this.timeoutHandler = null;
      }
      this.timeoutHandler = window.setTimeout(() => {
        if (this.inStreaming) {
          this.updateStatus(false);
        }
      }, e);
    }
    async updateStatus(e) {
      if (this.inStreaming === e) {
        return;
      }
      let i = this.inStreaming && !e;
      let r = !this.inStreaming && e;
      this.inStreaming = e;
      if (i) {
        await asyncUtilsAndStreamingOpsFilter.delay(50);
        this.destorySplitter();
      }
      if (r) {
        this.setupSplitter();
      }
    }
    async isShouldSmooth() {
      return !!this.flowDocConfig && (this.isShouldSmoothCache === null && (this.isShouldSmoothCache = await this.flowDocConfig.getDocStreamingSmooth()), this.isShouldSmoothCache);
    }
    handleSplitError(e) {
      var i;
      var r;
      var s;
      let {
        scene: n,
        rootId: o,
        error: a,
        extra: l
      } = e;
      if ((i = this.events) !== null && i !== undefined) {
        i.emit("tech.split-error", {
          scene: n,
          error: a,
          rootId: o,
          extra: {
            ...l,
            revision: 3
          }
        });
      }
      if ((r = this.splitterTracer) !== null && r !== undefined) {
        r.pushTrace("error", {
          scene: n,
          message: String(a),
          name: objectPathGetDefault.getObjectPathDefault(a, "name")
        });
      }
      if (!this.hasSplitError && (s = this.splitterTracer) !== null && s !== undefined) {
        s.flushToPersist();
      }
      this.hasSplitError = true;
    }
    handleTraceStuck(e) {
      var i;
      let {
        rootRecordId: r
      } = this.dataProvider;
      if ((i = this.events) !== null && i !== undefined) {
        i.emit("tech.split-trace-stuck", {
          rootId: r,
          data: e
        });
      }
    }
    registerBlocksOfCompensation(e) {
      let {
        registerRecords: i
      } = this.collabDataHelper.getRecordManagerFacade();
      for (let r of getOwnKeys.getOwnKeys(e)) {
        let s = e[r];
        i([{
          id: r,
          snapshot: this.makeBlankRecordSnapshot()
        }]);
        this.register([{
          id: r,
          version: s.version,
          resourceType: collaborativeEditingFlowSyncModule.RecordManager.record
        }]);
      }
    }
    handleSplitterSubmit(e) {
      let {
        operations: i,
        compensationMap: r
      } = e;
      let {
        applyTransaction: s
      } = this.collabDataHelper.getRecordManagerFacade();
      try {
        var n;
        this.registerBlocksOfCompensation(r);
        if ((n = this.splitterTracer) !== null && n !== undefined) {
          n.pushTrace("submit_chunk", {
            ops: i
          });
        }
        for (let e of i) {
          let {
            id: i,
            ops: r
          } = e;
          s(eR, e => {
            e.apply(i, r);
          }, {
            from: collaborativeEditingFlowSyncModule.kq.REMOTE,
            extra: {
              bySplitter: true
            }
          });
        }
      } catch (e) {
        this.handleSplitError({
          scene: "splitter_submit",
          rootId: this.dataProvider.rootRecordId,
          error: e
        });
      }
    }
    getAllValidRecords() {
      let {
        rootRecordId: e
      } = this.dataProvider;
      let i = this.collabDataHelper.getRecordManagerFacade();
      return new Promise(r => {
        let s;
        let n = false;
        let o = e => {
          if (s != null) {
            s();
          }
          n = true;
          r(e);
        };
        let a = () => {
          if (n) {
            return;
          }
          let r = syncedReferenceBlockManager_1.getBlockDataMap(e, e => {
            return i.getRecord(e)?.snapshot;
          });
          if (!objectValuesHelper.getObjectValues(r).some(e => e.type === "pending")) {
            o(r);
          }
        };
        let l = this.dataProvider.initialDataReady$.subscribe(() => {
          a();
          s = i.onChange(a);
          this.subscriptions.push(new subscriptionCore.Subscription(() => {
            if (s != null) {
              s();
            }
          }));
        });
        this.subscriptions.push(l);
      });
    }
    async fetchRecordClientVars(e) {
      var i;
      var r;
      let {
        rootRecordId: s
      } = this.dataProvider;
      if ((i = this.splitterTracer) !== null && i !== undefined) {
        i.pushTrace("fetch_blocks", {
          ids: e
        });
      }
      let {
        block_map: n
      } = (await docxApiConstantsExports.docxApiService.getRecordClientVars(e, s)).data;
      if ((r = this.splitterTracer) !== null && r !== undefined) {
        r.pushTrace("fetch_blocks_result", {
          ids: e,
          blockMap: n
        });
      }
      return n;
    }
    async setupSplitter() {
      var e;
      var i;
      let r = await this.isShouldSmooth();
      if (this.splitter || !r) {
        return;
      }
      if ((e = this.splitterTracer) !== null && e !== undefined) {
        e.pushTrace("setup");
      }
      let {
        rootRecordId: s
      } = this.dataProvider;
      try {
        let e = new syncedReferenceBlockManager_2.SyncedReferenceBlockManager({
          rootId: s,
          onSubmit: this.handleSplitterSubmit.bind(this),
          onFetchBlocks: this.fetchRecordClientVars.bind(this),
          onTraceStuck: this.handleTraceStuck.bind(this),
          onUnbreakError: (e, i) => {
            let {
              scene: r,
              ...n
            } = i;
            this.handleSplitError({
              scene: r,
              rootId: s,
              error: e,
              extra: n
            });
          }
        });
        this.splitter = e;
        this.hasSplitError = false;
        let r = () => {
          if (document.hidden) {
            e.pauseTracer();
          } else {
            e.resumeTracer();
          }
        };
        document.addEventListener("visibilitychange", r);
        this.handleDestorySplitter = async () => {
          await e.flushAndStop();
          this.splitter = null;
          document.removeEventListener("visibilitychange", r);
        };
        let n = await this.getAllValidRecords();
        e.initRecords({
          records: n
        });
        if ((i = this.events) !== null && i !== undefined) {
          i.emit("tech.split-start", {
            rootId: s,
            extra: {
              revision: 3
            }
          });
        }
        this.splitterTracer.pushTrace("set_records", {
          records: deepCloneWrapper_1.deepClone(n)
        });
      } catch (e) {
        this.handleSplitError({
          scene: "setup_splitter",
          rootId: s,
          error: e
        });
      }
    }
    async destorySplitter() {
      var e;
      var i;
      var r;
      var s;
      var n;
      if (!this.splitter) {
        return;
      }
      if ((e = this.handleDestorySplitter) !== null && e !== undefined) {
        e.call(this);
      }
      let {
        rootRecordId: o
      } = this.dataProvider;
      if ((i = this.events) !== null && i !== undefined) {
        i.emit("tech.split-end", {
          rootId: o,
          hasError: this.hasSplitError,
          extra: {
            revision: 3
          }
        });
      }
      this.hasSplitError = false;
      if ((r = this.splitterTracer) !== null && r !== undefined) {
        r.pushTrace("destory");
      }
      let a = await this.getAllValidRecords();
      if ((s = this.splitterTracer) !== null && s !== undefined) {
        s.pushTrace("final_records", {
          records: a
        });
      }
      if ((n = this.splitterTracer) !== null && n !== undefined) {
        n.flushToPersist();
      }
    }
    applyTransaction(e, i, r) {
      if (e === eR && this.splitter) {
        return;
      }
      let {
        applyTransaction: s
      } = this.collabDataHelper.getRecordManagerFacade();
      s(e, i, r);
    }
    initSplitterInterception() {
      let e = this.collabDataHelper.getRecordManagerFacade();
      this.splitterTracer = new X({
        rootId: this.dataProvider.rootRecordId
      });
      let i = this.dataProvider.interceptRemoteChange$.subscribe(async i => {
        var r;
        var s;
        var n;
        var o;
        let {
          recordOps: a
        } = i;
        let l = this.receiveIndex;
        this.receiveIndex += 1;
        let c = a.map(e => {
          let {
            id: i,
            ops: r
          } = e;
          return {
            id: i,
            ops: r
          };
        });
        if ((r = this.splitterTracer) !== null && r !== undefined) {
          r.pushTrace("receive_ops", {
            ops: c,
            receiveIndex: l
          });
        }
        if (!this.splitter) {
          if ((s = this.splitterTracer) !== null && s !== undefined) {
            s.pushTrace("bypass");
          }
          return;
        }
        try {
          let [i, r] = asyncUtilsAndStreamingOpsFilter.filterStreamingOperations(c);
          if (r.length) {
            if ((n = this.splitterTracer) !== null && n !== undefined) {
              n.pushTrace("push_splitter", {
                ops: r,
                receiveIndex: l
              });
            }
          }
          await this.splitter.push(...r);
          if (i.length) {
            if ((o = this.splitterTracer) !== null && o !== undefined) {
              o.pushTrace("apply_streaming", {
                ops: i,
                receiveIndex: l
              });
            }
          }
          for (let s of i) {
            let {
              id: i,
              ops: r
            } = s;
            e.applyTransaction(eR, e => {
              e.apply(i, r);
            }, {
              from: collaborativeEditingFlowSyncModule.kq.REMOTE
            });
          }
        } catch (e) {
          this.handleSplitError({
            scene: "intercept_remote_change",
            rootId: this.dataProvider.rootRecordId,
            error: e
          });
        }
      });
      this.subscriptions.push(i);
      let r = e.onChange(this.refreshStreamingStatus.bind(this));
      this.subscriptions.push(new subscriptionCore.Subscription(() => {
        if (r != null) {
          r();
        }
      }));
      let s = this.dataProvider.initialDataReady$.subscribe(() => {
        this.refreshStreamingStatus();
      });
      this.subscriptions.push(s);
    }
    init(e) {
      if (this.inited) {
        throw Error("Failed to re-init collab");
      }
      this.inited = true;
      let {
        rootRecordId: i
      } = this.dataProvider;
      let s = this.type === docBlockTypeConstants.blockTypeConstants.PAGE ? {} : {
        host_token: docTokenHelperUtils.resolveDocToken(),
        host_type: platformDocUtils.kNj.DOCX,
        meta_token: i
      };
      if (syncUrlBlockUtils.isSyncingActive()) {
        s.meta_token = syncUrlBlockUtils.getUrlToken();
      }
      let n = this.collabDataHelper.getRecordManagerFacade();
      n.applyTransaction = this.applyTransaction.bind(this);
      this.initSplitterInterception();
      super.init(throttledDeepCloneUtil.throttledDeepClone({
        settingsConfig: docSyncConfigFlags.getFlowbaseConfig(),
        collab: this.type !== docBlockTypeConstants.blockTypeConstants.PAGE || !browserDebugOfflineCheck.isDebugOrOffline(),
        io: flowDocChatMemberIo.getChatIoInstance(),
        recordManager: n,
        axios: apiClientInstance.apiClient,
        requestAPI: {
          USER_CHANGE: apiEndpointConstants.apiEndpoints.userChange,
          NEW_CHANGES: apiEndpointConstants.apiEndpoints.fetchMiss
        },
        collabToken: e.collabToken,
        pageToken: e.pageToken,
        logger: this.logger,
        options: {
          messageHandlerPacks: this.getMessageHandlerPacks(),
          heartbeatsOptionMap: platformDocUtils.Nc8(),
          extraCommitParams: s,
          handleEntityNotFound: this.handleEntityNotFound
        },
        fetchMissMaxVersion: docSyncConfigFlags.mobilePreUpdateConfig.versionOverLimit,
        proxyManager: q(e.collabToken),
        isAllDataReady: this.lazyRecordStatus.isAllDone,
        useTempQueue: docSyncConfigFlags.tempTransactionEnabled,
        localVersionCompareEnable: docSyncConfigFlags.localVersionCompare,
        atomizationEnabled: docSyncConfigFlags.combineNewChanges,
        collectMissingIgnoreRepeatEnable: docSyncConfigFlags.fixCollectMissings
      }, e));
      if (!platformDocUtils.KNd()) {
        this.sync.on(collaborativeEditingFlowSyncModule.GM.ALL_MISS_FETCHED, this.handleAllMissFetched);
      }
      this.sync.on(collaborativeEditingFlowSyncModule.GM.MemberChannel, this.handleMemberChannelEvent);
      this.initSyncBuffer();
      platformDocUtils.x6v.addCanLeavePageHandler(this.canLeavePage);
      docxEditorEventConstantsAndManager.globalEventConstants.on(docxEditorEventConstantsAndManager.eventConstants.COMMON.DOWN_GRADING, this.handleUpdateSyncBufferInterval);
      suiteMemberManagement.memberActions.eventOnRefetchRoomMembers(this.reFetchRoomMembersBind, docxTokenMappingResolver.resolveDocToken(this.token));
      this.hooks = new collaborativeEditingFlowSyncModule.i0(this);
      if (browserEnvironmentDetectionUtils.browserDetector.isInVC && docSyncConfigFlags.vcSyncDegradeEnabled || !browserEnvironmentDetectionUtils.browserDetector.isInVC && docSyncConfigFlags.docxDegradeEnabled) {
        require.e("sync-downgrade") /*id: 56364*/.then(require.bind(require, "sync-downgrade-manager") /*id: 238663*/).then(e => this.syncDowngrading = new e.SyncDowngrading()).catch(e => docxUtilityHelpers.captureException(e));
      }
      require.e("collab-delay") /*id: 14097*/.then(require.bind(require, "move-operation-checker") /*id: 788873*/).then(e => this.checkMoveOp = e.moveOpChecker(this.checkCreate)).catch(e => docxUtilityHelpers.captureException(e));
      this.signalService.colabInitSignal.next(true);
    }
    destroy() {
      var e;
      var i;
      var r;
      if (this.inited) {
        this.forceFlush();
        super.destroy();
        this.sync.off(collaborativeEditingFlowSyncModule.GM.MemberChannel, this.handleMemberChannelEvent);
        this.sync.off(collaborativeEditingFlowSyncModule.GM.ALL_MISS_FETCHED, this.handleAllMissFetched);
        this.destroySyncBuffer();
        platformDocUtils.x6v.removeCanLeavePageHandler(this.canLeavePage);
        userColorUtilities.resetUserColor();
        this.hooks.destroy();
        suiteMemberManagement.memberActions.eventOffRefetchRoomMembers(this.reFetchRoomMembersBind, docxTokenMappingResolver.resolveDocToken(this.token));
        docxEditorEventConstantsAndManager.globalEventConstants.off(docxEditorEventConstantsAndManager.eventConstants.COMMON.DOWN_GRADING, this.handleUpdateSyncBufferInterval);
        if ((e = this.syncDowngrading) !== null && e !== undefined) {
          e.destroy();
        }
        this.signalService.destroy();
        if ((i = this.handleDestorySplitter) !== null && i !== undefined) {
          i.call(this);
        }
        if ((r = this.splitterTracer) !== null && r !== undefined) {
          r.destory();
        }
        for (let s of this.subscriptions) {
          s.unsubscribe();
        }
        if (this.timeoutHandler) {
          clearTimeout(this.timeoutHandler);
        }
      }
    }
    onSubmitted(e, i) {
      var r;
      if ((r = this.hooks) !== null && r !== undefined) {
        r.addTransactionHandlers(e, i);
      }
    }
    onFramesSubmitted(e) {
      var i;
      if ((i = this.hooks) !== null && i !== undefined) {
        i.onTransactionFramesSubmitted(e);
      }
    }
    offFramesSubmitted(e) {
      var i;
      if ((i = this.hooks) !== null && i !== undefined) {
        i.offTransactionFramesSubmitted(e);
      }
    }
    async sendMessage(e, i = {}) {
      let r = {
        type: this.type.includes("synced") || syncUrlBlockUtils.isSyncingActive() ? "SYNCED_BLOCK_DOCX" : "DOCX",
        data: {
          token: this.token,
          user_id: objectPathGetDefault.getObjectPathDefault(window, "User.id"),
          ...e
        },
        version: 2
      };
      let {
        type: s,
        token: n
      } = r.data;
      let o = q(this.token);
      if (o && s === roomEventStatusConstants.roomEventTypes.ENGAGEMENT_CURSOR) {
        let e = o.getProxyTokenByOrigin(n);
        if (!e) {
          return Promise.reject(`[ProxyIO]: sendCursorMessage fail, ${n} cannot find proxyToken`);
        }
        r.data.token = e;
        let i = r.data.cursor_info;
        i.selections = i.selections.map(e => ({
          ...e,
          id: o.getProxyTokenByOrigin(e.id) || e.id
        }));
      }
      return this.sync.io.request(r, i);
    }
    assignMemberInfo(e, i) {
      let r = objectPathGetDefault.getObjectPathDefault(e, "entities.users", {});
      let s = Object.assign(i);
      s.forEach(e => {
        let i = e.suid || e.user_id;
        e = Object.assign(e, r[i], {
          color_id: userColorUtilities.getUserColorId(i),
          cursorColor: userColorUtilities.getColorByUserId(i)
        });
      });
      return s;
    }
    handleNewChangesMessage(e, i) {
      var r;
      if (!this.handleSelfChangeset(e, i)) {
        this.engineSyncBuffer.pipe({
          ...e,
          editTime: i
        });
        if ((r = this.checkMoveOp) === null || r === undefined ? undefined : r.call(this, e.ops)) {
          this.engineSyncBuffer.consume();
          eA("flush consume remote");
        }
        this.signalService.newChangeMessageSignal.next(e);
      }
    }
    handleNewChangesEnd(e, i) {
      super.handleNewChangesEnd(e, i);
      this.signalService.newChangeEndSignal.next({
        editTime: i
      });
    }
    handleAcceptCommit(e) {
      this.engineSyncBuffer.consume(e.id, true);
      return super.handleAcceptCommit(e);
    }
    handleUpdateCursor(e) {
      this.signalService.userUpdateCursorSignal.next(e);
    }
    handleMultiGeoMessage(e) {}
    makeBlankRecordSnapshot() {
      return {
        type: docBlockTypeConstants.blockTypeConstants.PENDING
      };
    }
    constructor(e, i, r, s, n = {}) {
      super();
      this.dataProvider = e;
      this.lazyRecordStatus = i;
      this.type = r;
      this.handleEntityNotFound = s;
      eI(this, "forceFlushNextTime", false);
      eI(this, "collabDataHelper", undefined);
      eI(this, "subscriptions", []);
      eI(this, "timeoutHandler", null);
      eI(this, "inStreaming", false);
      eI(this, "splitter", null);
      eI(this, "hasSplitError", false);
      eI(this, "handleDestorySplitter", undefined);
      eI(this, "isShouldSmoothCache", null);
      eI(this, "splitterTracer", null);
      eI(this, "receiveIndex", 0);
      eI(this, "flush", () => {
        this.throttleFlush ||= debounceUtilWrapper.createDebounce(async () => {
          await Promise.resolve();
          this.engineSyncBuffer.consume(undefined, true);
          return super.flush();
        }, docSyncConfigFlags.getFlowbaseConfig().throttle_flush_time, {
          leading: false
        });
        this.throttleFlush();
        if (this.forceFlushNextTime) {
          this.forceFlush();
          if (!this.getUnSubmitted().size) {
            this.forceFlushNextTime = false;
            eA("flush local done");
          }
        }
      });
      eI(this, "forceFlush", () => {
        var e;
        var i;
        if ((e = this.throttleFlush) !== null && e !== undefined) {
          e.call(this);
        }
        if ((i = this.throttleFlush) !== null && i !== undefined) {
          i.flush();
        }
      });
      eI(this, "signalService", new collabSubjectRegistry.CollabSubjectReg());
      eI(this, "inited", false);
      eI(this, "memberVersion", undefined);
      eI(this, "midToVersion", new Map());
      eI(this, "throttleFlush", undefined);
      eI(this, "hooks", undefined);
      eI(this, "logger", undefined);
      eI(this, "syncDowngrading", undefined);
      eI(this, "currentCollabSwitcher", docxSubscriptionTypes.SubscriptionTypes.OFFLINE_APPLY);
      eI(this, "newChangeStopper", undefined);
      eI(this, "checkMoveOp", undefined);
      eI(this, "events", undefined);
      eI(this, "checkCreate", e => !this.getVersion(e) || this.dataProvider.get(e).snapshot.type === docBlockTypeConstants.blockTypeConstants.PENDING);
      eI(this, "handleResourceUpdateEvent", e => {
        this.signalService.resourceUpdateSignal.next(e);
      });
      eI(this, "handleMetaChangeEvent", e => {
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.DOCUMENT_SWITCH_DELETED, e);
      });
      eI(this, "getMessageHandlerPacks", () => [...platformDocUtils.K28.getMessageHandlerPacks(), {
        handler: e => {
          let {
            type: i
          } = e;
          switch (i) {
            case roomEventStatusConstants.roomEventTypes.USER_NEWINFO:
              {
                let {
                  version: r,
                  token: s,
                  member_count: n,
                  user_info: o,
                  member_id: a
                } = e;
                let {
                  user_id: l,
                  name: c,
                  avatar_url: h
                } = o;
                this.handleMemberChannelEvent({
                  type: i,
                  version: r,
                  suid: l,
                  token: s,
                  user_id: l,
                  member_id: a,
                  entities: {
                    users_count: n,
                    users: {
                      [l]: {
                        avatar_url: h,
                        cn_name: c,
                        en_name: c,
                        is_anonymous: 0,
                        user_email: "",
                        user_mobile: "",
                        user_type: 0
                      }
                    }
                  }
                });
                break;
              }
            case roomEventStatusConstants.roomEventTypes.USER_LEAVE:
              {
                let {
                  member_id: r,
                  version: s,
                  token: n,
                  user_count: o,
                  member_count: a
                } = e;
                this.handleMemberChannelEvent({
                  type: i,
                  member_id: [r],
                  token: n,
                  user_count: a,
                  users_count: o,
                  version: s
                });
                break;
              }
            case roomEventStatusConstants.roomEventTypes.ENGAGEMENT_CURSOR:
              {
                let {
                  token: r,
                  data: s,
                  user_id: n,
                  member_id: o
                } = e;
                let a = docxUtilityHelpers.parseJsonSafe(s);
                let l = {
                  type: i,
                  token: r,
                  user_id: n,
                  member_id: Number(o),
                  cursor_info: a
                };
                this.handleUpdateCursor(l);
                break;
              }
            case roomEventStatusConstants.roomEventTypes.UPDATE_ATTACHMENT:
              this.handleResourceUpdateEvent(e);
              break;
            case roomEventStatusConstants.roomEventTypes.META:
              this.handleMetaChangeEvent(e);
          }
        }
      }]);
      eI(this, "reFetchRoomMembersBind", this.reFetchRoomMembers.bind(this));
      eI(this, "switchCollabMode", async (e, i, r) => {
        this.engineSyncBuffer.consume();
        if (r == null) {
          r = e;
        }
        if (this.currentCollabSwitcher === undefined || i <= this.currentCollabSwitcher) {
          this.currentCollabSwitcher = r ? undefined : i;
          await this.sync.switchCollabMode(e, docxSubscriptionTypes.SubscriptionTypes[i]);
        }
      });
      eI(this, "stopApplyNewChanges", (e, i) => {
        if (e === "on") {
          if (this.newChangeStopper && this.newChangeStopper !== i) {
            throw Error(`sync buffer has already frozen, from:${this.newChangeStopper}`);
          }
          this.newChangeStopper = i;
          this.engineSyncBuffer.frozen();
        } else {
          this.engineSyncBuffer.deFrozen();
          this.newChangeStopper = undefined;
        }
      });
      eI(this, "clearNewChanges", () => {
        var e;
        if ((e = this.engineSyncBuffer) !== null && e !== undefined) {
          e.reset();
        }
      });
      eI(this, "handleUpdateSyncBufferInterval", e => {
        var i;
        var r;
        let s = {
          ...docSyncConfigFlags.syncConfig,
          ...e
        };
        if ((i = this.membersSyncBuffer) !== null && i !== undefined) {
          i.setConsumeIntervalOnActive(s.member_buffer_active_consume_interval);
        }
        if ((r = this.engineSyncBuffer) !== null && r !== undefined) {
          r.setConsumeIntervalOnActive(s.engine_buffer_active_consume_interval);
        }
      });
      eI(this, "handleMemberChannelEvent", e => {
        switch (e.type) {
          case roomEventStatusConstants.roomEventTypes.USER_NEWINFO:
          case roomEventStatusConstants.roomEventTypes.USER_LEAVE:
          case roomEventStatusConstants.roomEventTypes.ROOM_MEMBERS:
            this.memberVersion = e.version;
            this.membersSyncBuffer.pipe(e);
            break;
          case "heartbeat":
            if ((isUndefinedCheck.isUndefined(this.memberVersion) || e.version > this.memberVersion) && platformDocUtils.Y$v()) {
              this.reFetchRoomMembers(this.token);
            }
            break;
          case "refetch_member_list":
            if (suiteMemberManagement.memberActions.getSuiteMembers(platformDocUtils.Gkz.DOCX, docxTokenMappingResolver.resolveDocToken(this.token)).length < 150) {
              this.reFetchRoomMembers(this.token);
            }
        }
      });
      eI(this, "processMemberChannelMessage", e => {
        if (!this.handleMemberChannelMessageVersion(e)) {
          if (e.type === roomEventStatusConstants.roomEventTypes.USER_NEWINFO) {
            this.handleUserNewInfo(e);
          } else if (e.type === roomEventStatusConstants.roomEventTypes.USER_LEAVE) {
            this.handleUserLeave(e);
          } else if (e.type === roomEventStatusConstants.roomEventTypes.ROOM_MEMBERS) {
            this.handleMembersMessage(e);
          }
        }
      });
      eI(this, "updateMidToVersion", (e, i) => {
        let r = this.midToVersion.get(e);
        return (!r || !(r > i)) && (this.midToVersion.set(e, i), true);
      });
      eI(this, "handleMemberChannelMessageVersion", e => {
        if (e.type === roomEventStatusConstants.roomEventTypes.USER_NEWINFO) {
          return !this.updateMidToVersion(e.member_id, e.version);
        }
        if (e.type === roomEventStatusConstants.roomEventTypes.USER_LEAVE) {
          [].concat(e.member_id).forEach(i => this.updateMidToVersion(i, e.version));
        } else if (e.type === roomEventStatusConstants.roomEventTypes.ROOM_MEMBERS) {
          var i;
          this.midToVersion.clear();
          if ((i = e.members) !== null && i !== undefined) {
            i.forEach(i => this.updateMidToVersion(i.member_id, e.version));
          }
        }
        return false;
      });
      eI(this, "handleUserNewInfo", e => {
        let {
          entities: i,
          token: r,
          ...s
        } = e;
        let n = Object.assign(s, objectPathGetDefault.getObjectPathDefault(i, "users", {})[s.user_id], {
          count: i.users_count,
          color_id: userColorUtilities.getUserColorId(s.user_id),
          cursorColor: userColorUtilities.getColorByUserId(s.user_id),
          token: docxTokenMappingResolver.resolveDocToken(r)
        });
        suiteMemberManagement.memberActions.handleUserNewInfo("docx", n);
      });
      eI(this, "handleUserLeave", e => {
        e.token = docxTokenMappingResolver.resolveDocToken(e.token);
        suiteMemberManagement.memberActions.handleUserLeave("docx", e);
        this.signalService.userLeaveSignal.next(e);
      });
      eI(this, "handleMembersMessage", e => {
        let {
          count: i
        } = e;
        suiteMemberManagement.memberActions.handleMembersMessage("docx", Object.assign(e, {
          token: docxTokenMappingResolver.resolveDocToken(this.token),
          members: this.assignMemberInfo(e, e.members),
          count: i
        }));
      });
      eI(this, "handleAllMissFetched", () => {});
      eI(this, "canLeavePage", () => this.getUnSubmitted().size === 0 && this.getSubmitted().size === 0);
      let {
        events: o
      } = n;
      this.logger = new ed(eo, {
        realRootToken: this.dataProvider.rootRecordId,
        realRootType: this.type
      }, es, en);
      this.collabDataHelper = new ef(e, this, e => {
        let {
          recordOps: i,
          options: r
        } = e;
        if (this.checkMoveOp && r.from === collaborativeEditingFlowSyncModule.kq.LOCAL) {
          for (let e of i) {
            if (this.checkMoveOp(e.ops)) {
              eA("will flush local", e.id);
              this.forceFlushNextTime = true;
              break;
            }
          }
        }
      });
      this.events = o;
    }
  }).prototype;
  o = "reFetchRoomMembers";
  a = [u];
  l = Object.getOwnPropertyDescriptor(f.prototype, "reFetchRoomMembers");
  c = f.prototype;
  h = {};
  Object.keys(l).forEach(function (e) {
    h[e] = l[e];
  });
  h.enumerable = !!h.enumerable;
  h.configurable = !!h.configurable;
  if ("value" in h || h.initializer) {
    h.writable = true;
  }
  h = a.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, h);
  if (c && h.initializer !== undefined) {
    h.value = h.initializer ? h.initializer.call(c) : undefined;
    h.initializer = undefined;
  }
  if (h.initializer === undefined) {
    Object.defineProperty(n, o, h);
  }
  d = f;
  let ek = class extends d {
    get docLogger() {
      return diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol);
    }
    checkNeedDecompose(e) {
      let r = e[0]?.id;
      let s = false;
      if (e.length === 1 && this.preStreamingRecordId === r) {
        s = true;
      }
      if (this.token !== r) {
        this.preStreamingRecordId = r;
      }
      return s;
    }
    constructor(...e) {
      super(...e);
      x(this, "engineStreamingMode", false);
      x(this, "engineStreamingBufferPool", []);
      x(this, "engineStreamingTimer", null);
      x(this, "preStreamingRecordId", undefined);
      x(this, "toggleEngineStreamingMode", e => {
        if (this.engineStreamingMode !== e) {
          this.docLogger.persist.info({
            eventName: "FlowDocx_SyncBufferToggleEngineStreamingMode",
            meta: {
              ...this.getCommonReportParams(),
              value: e
            }
          });
          if (e === false && this.engineStreamingBufferPool.length) {
            this.handleNewChanges(this.engineStreamingBufferPool);
            this.engineStreamingBufferPool = [];
          }
          this.engineStreamingMode = e;
        }
      });
      x(this, "handleStreamingApplyMessage", () => {
        if (this.engineStreamingTimer) {
          return;
        }
        let e = this.calcStreamingCharCountPerTick();
        let i = [];
        for (let r = 0; r < e; r++) {
          let e = this.engineStreamingBufferPool.shift();
          if (!e) {
            break;
          }
          i.push(e);
        }
        if (i.length) {
          this.docLogger.persist.info({
            eventName: "FlowDocx_SyncBufferHandleStreamingApplyMessage",
            meta: {
              ...this.getCommonReportParams(),
              changesSize: i.length
            }
          });
          this.handleNewChanges(i);
          this.engineStreamingTimer = window.setTimeout(() => {
            this.engineStreamingTimer = null;
            this.handleMessageWithBuffer();
          }, this.calcStreamingTime());
        }
      });
      x(this, "calcStreamingTime", () => {
        let e = this.engineStreamingBufferPool.length;
        if (e < 10) {
          return 60;
        } else {
          return Math.max(16, 1 / e * 600);
        }
      });
      x(this, "calcStreamingCharCountPerTick", () => {
        let e = this.engineStreamingBufferPool.length;
        if (e < 50) {
          return 1;
        } else if (e < 100) {
          return 2;
        } else {
          return 3;
        }
      });
      x(this, "handleNonStreamingApplyMessage", e => {
        var i;
        let r = [];
        let s = 0;
        if ((i = this.engineSyncBuffer.composedResult) !== null && i !== undefined) {
          i.forEach(i => {
            let {
              editTime: n
            } = i;
            if (n && n > s) {
              s = n;
            }
            if (e) {
              if (i.id === e) {
                r.push(i);
              }
            } else {
              r.push(i);
            }
          });
        }
        this.handleNewChanges(r, s);
      });
      x(this, "handleMessageWithBuffer", e => {
        if (this.engineStreamingMode) {
          this.handleStreamingApplyMessage();
        } else {
          this.handleNonStreamingApplyMessage(e);
        }
      });
      x(this, "initSyncBuffer", () => {
        var e = this;
        this.engineSyncBuffer = collaborativeEditingFlowSyncModule.createSyncBuffer({
          logger: (e, i) => docxEventCollector.docEventCollector(e, Object.assign({}, i, {
            origin_root_file_id: platformDocUtils.p5T(this.token),
            origin_root_file_type: this.type
          })),
          isActiveModeEnabled: true,
          consumeIntervalOnActive: docSyncConfigFlags.syncConfig.engine_buffer_active_consume_interval,
          checkIfEnable: () => true,
          onEnterInactive: () => {
            this.sync.io.switchHeartbeatInactive();
            this.sync.io.setEntityExternalInfo(this.sync.getWatchingIOEntities().map(e => ({
              entity: e,
              inactive: 1
            })));
          },
          onEnterActive: () => {
            this.sync.io.switchHeartbeatActive();
            this.sync.io.setEntityExternalInfo(this.sync.getWatchingIOEntities().map(e => ({
              entity: e,
              inactive: 0
            })));
          },
          onSwitchToActiveMode: e => {},
          onConsumeDone: () => this.handleAllMissFetched(),
          clearBufferPool: e => {
            this.engineSyncBuffer.bufferPool = this.engineSyncBuffer.bufferPool.filter(i => i.id !== e);
            this.engineSyncBuffer.composedResult = this.engineSyncBuffer.composedResult.filter(i => i.id !== e);
            if (this.engineSyncBuffer.composedResult.length === 0) {
              this.engineSyncBuffer.composedResult = undefined;
            }
          },
          composeBuffer: function (i, r = []) {
            if (e.engineStreamingMode) {
              let r = i;
              let s = e.checkNeedDecompose(i);
              if (s) {
                r = i.map(i => function (e, i) {
                  try {
                    let {
                      ops: r,
                      id: s
                    } = e;
                    let n = r[0];
                    if (r.length > 1 || !n) {
                      return [e];
                    }
                    if ("subType" in n && n.subType.t === "easysync") {
                      return function (e, i) {
                        let {
                          o: r
                        } = e.subType;
                        let s = r.zone_changesets;
                        let {
                          apool: n
                        } = r;
                        let {
                          decomposedCs: o
                        } = function (e, i, r) {
                          let {
                            baseText: s
                          } = r;
                          let n = deltaSetChangesetConverter_1.changesetToDeltaSet(e, i);
                          if (!function (e) {
                            let {
                              ops: i
                            } = e.deltas[0];
                            if (i.length !== 2) {
                              return false;
                            }
                            let [r, s] = e.deltas[0].ops;
                            let n = r == null ? undefined : r.retain;
                            let o = s == null ? undefined : s.insert;
                            return isNumberUtil.isNumber(n) && isStringTypeCheck.isString(o);
                          }(n)) {
                            return {
                              changed: false
                            };
                          }
                          let {
                            ops: o
                          } = n.deltas[0];
                          let a = o[0];
                          let l = o[1];
                          let {
                            attributes: c
                          } = l;
                          let h = a.retain || 0;
                          let d = l.insert || "";
                          let u = [];
                          for (let e = 0, {
                              length: i
                            } = d; e < i; e++) {
                            let i = d[e];
                            let r = new contentStructureDelta.ContentDelta({});
                            let s = new deltaSetCore.DeltaSet({});
                            r.retain(h + e);
                            r.insert(i, c);
                            s = s.compose(r);
                            u.push(s);
                          }
                          let f = s;
                          return {
                            changed: true,
                            decomposedCs: u.map((e, r) => {
                              let s = deltaSetChangesetConverter_1.deltaSetToChangeset({
                                deltaSet: e,
                                apool: i,
                                texts: {
                                  0: f
                                }
                              });
                              f += d[r];
                              return s;
                            })
                          };
                        }(s[zeroConstantModule_1.versionValue], n, i);
                        if (o) {
                          return o.map(i => {
                            let r = deepCloneWrapper_1.deepClone(e);
                            r.subType.o.zone_changesets[zeroConstantModule_1.versionValue] = i;
                            return r;
                          });
                        } else {
                          return [e];
                        }
                      }(n, {
                        baseText: i.getText(s)
                      }).map(i => ({
                        ...e,
                        ops: [i]
                      }));
                    }
                  } catch (e) {
                    diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol).persist.error({
                      eventName: "FlowDocx_decomposeEasysyncRecordChangeError",
                      error: e
                    });
                  }
                  return [e];
                }(i, {
                  getText: i => {
                    let r = e.dataProvider.get(i);
                    return objectPathGetDefault.getObjectPathDefault(r, "snapshot.text.initialAttributedTexts.text[0]") || "";
                  }
                })).flat();
              }
              e.engineStreamingBufferPool.push(...r);
              e.docLogger.persist.info({
                eventName: "FlowDocx_SyncBufferDecomposeChangesets",
                meta: {
                  ...e.getCommonReportParams(),
                  originCsLength: i.length,
                  decomposedCsLength: r.length,
                  needDecompose: s ? "1" : "0"
                }
              });
              return [];
            }
            let s = 0;
            i.forEach(e => {
              let {
                id: i,
                editTime: n
              } = e;
              let o = -1;
              if (n && n > s) {
                s = n;
                e.editTime = s;
              }
              for (let e = r.length - 1; e >= 0; e--) {
                if (r[e].id === i) {
                  o = e;
                  break;
                }
              }
              if (o !== -1) {
                try {
                  let i = r[o].ops.concat(e.ops);
                  let s = false;
                  let n = false;
                  i.forEach(e => {
                    if (flowSyncDeltaOperations.isEasysyncSubtype(e)) {
                      s = true;
                    } else if (Z(e)) {
                      n = true;
                    }
                  });
                  if (s && n) {
                    r.push(e);
                    return;
                  }
                  r[o].ops = operationalTransformCore.compose(r[o].ops, e.ops);
                } catch (i) {
                  r.push(e);
                }
              } else {
                r.push(e);
              }
            });
            return r;
          },
          handleMessage: e => {
            e.forEach(e => {
              this.handleNewChanges(e, e.editTime);
            });
          },
          handleMessageOnReActive: this.handleMessageWithBuffer,
          handleMessageOnActive: this.handleMessageWithBuffer
        }, {
          isFullPipe: false
        });
        let i = () => {
          this.membersSyncBuffer.bufferPool.forEach(this.processMemberChannelMessage);
        };
        this.membersSyncBuffer = collaborativeEditingFlowSyncModule.createSyncBuffer({
          isActiveModeEnabled: true,
          consumeIntervalOnActive: docSyncConfigFlags.syncConfig.member_buffer_active_consume_interval,
          checkIfEnable: () => true,
          handleMessage: e => {
            e.forEach(this.processMemberChannelMessage);
          },
          handleMessageOnReActive: i,
          handleMessageOnActive: i
        }, {
          isFullPipe: true
        });
      });
      x(this, "destroySyncBuffer", () => {
        this.engineSyncBuffer.destroy();
        this.membersSyncBuffer.destroy();
      });
      x(this, "getCommonReportParams", () => {
        return {
          streamingBufferSize: this.engineStreamingBufferPool.length,
          composedResultSize: this.engineSyncBuffer.composedResult?.length
        };
      });
    }
  };
  require.d(exports, {
    DocxFlowSyncEngine: function () {
      return ek;
    }
  });
}