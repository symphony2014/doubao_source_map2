// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerDocxErrorOopsServices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 275561
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
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  let _ = {
    [collaborativeEditingFlowSyncModule.ErrorType.TENANT_CAPACITY_LIMIT]: platformDocUtils.P4G.STORAGE_SPACE,
    [collaborativeEditingFlowSyncModule.ErrorType.USER_CAPACITY_LIMIT]: platformDocUtils.P4G.STORAGE_USER,
    [collaborativeEditingFlowSyncModule.ErrorType.DEPARTMENT_CAPACITY_LIMIT]: platformDocUtils.P4G.STORAGE_DEPARTMENT,
    [collaborativeEditingFlowSyncModule.ErrorType.DOCS_SIZE_LIMIT]: platformDocUtils.P4G.STORAGE_SPACE
  };
  let R = {
    [collaborativeEditingFlowSyncModule.ErrorType.DOCS_SIZE_LIMIT]: {
      limitedType: platformDocUtils.Pl3.DOCS_STORAGE_LIMIT
    }
  };
  let I = [collaborativeEditingFlowSyncModule.ErrorType.TENANT_CAPACITY_LIMIT, collaborativeEditingFlowSyncModule.ErrorType.USER_CAPACITY_LIMIT, collaborativeEditingFlowSyncModule.ErrorType.DEPARTMENT_CAPACITY_LIMIT, collaborativeEditingFlowSyncModule.ErrorType.DOCS_SIZE_LIMIT];
  let M = (e, i) => platformDocUtils.k2r(_[e], {
    type: platformDocUtils.UdD.EDIT_FILE,
    mountNodeToken: i || docTokenHelperUtils.resolveDocToken(),
    mountPoint: docApiConstants.fileTypes.FILE,
    ...(R[e] || {})
  }, {
    useCTA: false,
    scene: "user_change",
    extraTips: t("LarkCCM_StorageMgmt_ViewNewEditsInHistory_Desc")
  });
  var docxErrorStatusHandler = require("docx-error-status-handler") /*id: 570520*/;
  var docxErrorStatusConsts = require("docx-error-status-consts") /*id: 731910*/;
  var docxPerformanceStageCollector = require("docx-performance-stage-collector") /*id: 753948*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var lazyRecordClientvars = require("lazy-record-clientvars") /*id: 112384*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncedRefBlockToken = require("synced-ref-block-token") /*id: 893973*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxErrorHandler = require("docx-error-handler") /*id: 135685*/;
  var pageOopsServiceProvider = require("page-oops-service-provider") /*id: 695060*/;
  let j = dependencyInjectionContainer.Provide(pageOopsServiceProvider.pageOopsProvider)((n = (c = class {
    get editPermission() {
      return !!this.editorAPI.config.get("editPermission");
    }
    get dataEmitter() {
      return this.editorAPI.config.get("dataHelper").eventEmitter;
    }
    init() {}
    destroy() {
      this.hideOopsModal();
    }
    handleSyncOops(e, i) {
      var r;
      if (e !== docxErrorStatusHandler.errorStatusCategories.NotOops || i.code === collaborativeEditingFlowSyncModule.ErrorType.NO_PERMISSION) {
        this.dataEmitter.emit(lazyRecordClientvars.clientvarEvents.SHOW_OOPS, i);
        if ((r = this.editorAPI.getService(syncedRefBlockToken.syncedRefBlockToken, {
          dynamic: true
        }).get()) !== null && r !== undefined) {
          r.setSyncedBlockStatus(this.editorAPI.modelService.rootRecordId, "LOADING_ERROR");
        }
      }
    }
    showOopsModal(e) {
      let {
        code: i,
        msg: r,
        type: n,
        requestId: o,
        ttLogId: l,
        eagleId: s,
        detail: a,
        editable: c = this.editPermission,
        url: d = "",
        queryParams: u = {}
      } = e;
      let {
        scm: h,
        scmDocx: f
      } = docxErrorStatusHandler.getScmDebugInfo();
      let g = Error(`[page oops]: code: ${i}; ${n}; ${i > 0 ? a : r};`);
      if (e.stack) {
        g.stack = e.stack;
      }
      let p = docxErrorDebugUtils.mergeErrorDetail(g, a);
      docxUtilityHelpers.captureException(p);
      let m = {
        error: p,
        msg: r,
        type: n,
        code: i,
        scm: h,
        scmDocx: f,
        url: d,
        queryParams: u,
        requestId: o,
        ttLogId: l,
        editable: c,
        detail: a,
        blockType: docxErrorDebugUtils.extractBlockType(a),
        editorAPI: this.editorAPI
      };
      let v = docxErrorStatusHandler.findErrorCategory(i);
      if (syncedReferenceBlockUtils.isSyncedReferenceBlock(this.editorAPI)) {
        this.handleSyncOops(v, m);
        return;
      }
      if (v === docxErrorStatusHandler.errorStatusCategories.NotOops) {
        return;
      }
      let b = docxErrorHandler.handleDocxError(m);
      if (b) {
        this.unmountOopsFn = b;
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.SHOW_OOPS, m);
        this.dataEmitter.emit(lazyRecordClientvars.clientvarEvents.SHOW_OOPS, m);
        docxPerformanceStageCollector.DocxPerformanceStageCollector.renderFail(docxErrorStatusConsts.errorConstants.DEV_OOPS);
      }
    }
    hideOopsModal() {
      var e;
      if ((e = this.unmountOopsFn) !== null && e !== undefined) {
        e.call(this);
      }
    }
    constructor() {
      var e;
      var i;
      var r;
      var n;
      if ((e = typeof (n = function (e, i) {
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
      }(e = "unmountOopsFn", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: null,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = null;
      }
      i = "editorAPI";
      if (r = d) {
        Object.defineProperty(this, i, {
          enumerable: r.enumerable,
          configurable: r.configurable,
          writable: r.writable,
          value: r.initializer ? r.initializer.call(this) : undefined
        });
      }
    }
  }).prototype, o = "editorAPI", l = [docxEditorCore.EDITOR_API_TOKEN], a = {}, Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), d = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a, c)) || c;
  var blockOopsServiceProvider = require("block-oops-service-provider") /*id: 574532*/;
  var browserEnvironmentDetectionUtils_1 = require("browser-environment-detection-utils_1") /*id: 439836*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  function z(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function K(e, i, r) {
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
  function X(e, i, r, n, o) {
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
  function G() {
    docxEditorCore.registerProviders([j, {
      provide: blockOopsServiceProvider.blockOopsServiceId,
      useAsync: async () => {
        let {
          BlockOopsServiceImpl: e
        } = await docxTaskSchedulerUtilities.scheduleTaskWithConfig({
          action: () => require.e("block_oops_service") /*id: 28868*/.then(require.bind(require, "block-oops-service") /*id: 840894*/),
          config: {
            stage: businessStageConstants.businessConstants.DocxStage.firstScreenMainContentUsable
          },
          name: "docx.blockOops"
        });
        return e;
      }
    }]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.instantiate(q);
      e.init();
      return () => e.destroy();
    });
  }
  u = dependencyInjectionContainer.Async();
  f = X((h = class {
    get config() {
      return this.editorAPI.config;
    }
    get isPreview() {
      return !!this.config.get("isPreview");
    }
    get rootRecordId() {
      return this.editorAPI.modelService.rootRecordId;
    }
    init() {
      this.pageOopsService.init();
      let {
        dataService: i
      } = this.editorAPI;
      let r = this.config.get("originalDataProvider") ?? i;
      this.subs = [r.error$.subscribe(e => {
        if (this.isPreview) {
          return;
        }
        let {
          code: i,
          recordOps: r,
          options: n
        } = e;
        if (!browserEnvironmentDetectionUtils_1.isBrowserEnvironment() || !n || !changeSourceValidators.isOfflineSource(n)) {
          if (I.includes(i) && docxFeatureFlags.isSzEnabled()) {
            M(i, syncedReferenceBlockUtils.isChangeFromCurrentEditor_1(this.editorAPI));
            return;
          }
          if ((i === collaborativeEditingFlowSyncModule.ErrorType.APPLY_FAILED || i === collaborativeEditingFlowSyncModule.ErrorType.SCHEMA_ERROR) && r && docxErrorStatusHandler.filterRecordsById(r, this.rootRecordId)) {
            this.selectionService.clearSelection("block oops");
            this.dispatchBlockOops(r, e);
          } else {
            this.pageOopsService.showOopsModal(e);
          }
        }
      })];
    }
    async dispatchBlockOops(e, i) {
      if (!this.blockOopsService) {
        var r;
        this.blockOopsService = await this.blockOopsServiceGetter;
        if ((r = this.blockOopsService) !== null && r !== undefined) {
          r.init();
        }
      }
      let {
        code: n,
        msg: o,
        stack: l,
        transactionName: s
      } = i;
      if (Array.isArray(e)) {
        e.forEach((e, i) => {
          var r;
          if ((r = this.blockOopsService) !== null && r !== undefined) {
            r.blockOopsByRecordId(e.record.id, {
              name: "block oops",
              message: o,
              stack: l,
              detail: {
                transactionName: s,
                index: i
              }
            }, n);
          }
        });
      }
    }
    destroy() {
      if (Array.isArray(this.subs)) {
        this.subs.forEach(e => e.unsubscribe());
      }
      this.pageOopsService.destroy();
      if (this.blockOopsService) {
        this.blockOopsService.destroy();
      }
      this.blockOopsService = null;
    }
    constructor() {
      z(this, "pageOopsService", f, this);
      z(this, "blockOopsServiceGetter", g, this);
      z(this, "editorAPI", p, this);
      z(this, "selectionService", m, this);
      K(this, "blockOopsService", null);
      K(this, "subs", undefined);
    }
  }).prototype, "pageOopsService", [pageOopsServiceProvider.pageOopsProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  g = X(h.prototype, "blockOopsServiceGetter", [u, blockOopsServiceProvider.blockOopsServiceId], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  p = X(h.prototype, "editorAPI", [docxEditorCore.EDITOR_API_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  m = X(h.prototype, "selectionService", [compatBrowserSelectionService_1.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let q = h;
  require.d(exports, {
    registerDocxErrorOopsServices: function () {
      return G;
    }
  });
}