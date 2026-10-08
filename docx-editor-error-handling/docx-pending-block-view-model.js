// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerPendingBlockViewModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 218962
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var providerNameConstants = require("provider-name-constants") /*id: 349632*/;
  var zeroSpaceProviderName = require("zero-space-provider-name") /*id: 715309*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  class p extends docBlockModelClass.DocBlockModel {
    constructor(e) {
      super(e);
    }
  }
  o = "type";
  l = docBlockTypeConstants.blockTypeConstants.PENDING;
  if ((o = typeof (n = function (e, i) {
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
  }(o, "string")) == "symbol" ? n : n + "") in p) {
    Object.defineProperty(p, o, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    p[o] = l;
  }
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var snapshotColumnWidthUtil = require("snapshot-column-width-util") /*id: 729416*/;
  var layoutNodeBuilderReexport = require("layout-node-builder-reexport") /*id: 893890*/;
  let S = dependencyInjectionContainer.Provide(layoutNodeBuilderReexport.layoutNodeBuilder)(s = class {
    getLayoutNodeConfig(e, i) {
      let n = {
        calculateModel: i && i.show ? bearVirtualLayoutReconciler.CalculateModel.PENDING : bearVirtualLayoutReconciler.CalculateModel.IGNORE
      };
      if (e.parent?.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
        n.defaultWidth = snapshotColumnWidthUtil.getColumnWidth(e.parent, e.position);
      }
      return n;
    }
    constructor() {
      var e;
      var i;
      var r;
      e = "type";
      i = docBlockTypeConstants.blockTypeConstants.PENDING;
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
      }(e, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
    }
  }) || s;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var pendingClientVarProvider = require("pending-client-var-provider") /*id: 835547*/;
  var blockOopsServiceProvider = require("block-oops-service-provider") /*id: 574532*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var clientVarProviderAccess = require("client-var-provider-access") /*id: 503677*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var lazyRecordClientvars = require("lazy-record-clientvars") /*id: 112384*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function B(e, i, r) {
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
  let P = dependencyInjectionContainer.Provide(pendingClientVarProvider.pendingClientVarId)((c = class {
    destroy() {
      this.isDestroyed = true;
      this.subs.forEach(e => e == null ? undefined : e.unsubscribe());
    }
    onServiceDispose() {
      this.destroy();
    }
    shouldFetchRecord(e) {
      return !e.snapshot.sliced || !this.lazyRecord || this.lazyRecord.status.isAllDone;
    }
    onReady() {
      for (let e of this.structService.getBlockStructsByType(docxEditorCore.PENDING_STATUS)) {
        if (this.shouldFetchRecord(e)) {
          this.fetchRecord(e.recordId);
        }
      }
    }
    onMutation(e) {
      var i;
      if (!e.isLocal() && ((i = e.extra) === null || i === undefined || !i.bySplitter)) {
        for (let {
          block: i
        } of e.mutations.added) {
          if (i.type === docxEditorCore.PENDING_STATUS && this.shouldFetchRecord(i)) {
            this.fetchRecord(i.recordId);
          }
        }
      }
    }
    async fetchRecord(e) {
      try {
        await this.clientVar.fetchRecordBatch(e);
      } catch (i) {
        if (this.isDestroyed) {
          return;
        }
        docxEventCollector.docEventCollector("doc_bug_track_dev", {
          action: "blank_block_fetch_record_error",
          info: docxUtilityHelpers.maskSensitiveData(e),
          error: i && i.message
        });
        (await this.oops).blockOopsByRecordId(e, i, -101050);
      }
    }
    handleClientVarsFetchAllDone() {
      for (let e of this.structService.getBlockStructsByType(docxEditorCore.PENDING_STATUS)) {
        let {
          record: i
        } = e;
        this.handleRecordFetchDone(i);
      }
    }
    async handleRecordFetchDone(e) {
      let {
        clientVar: i,
        lazyRecord: r
      } = this;
      try {
        let n = r.getTaskStatus(e.snapshot.baseRecordId);
        if (!n) {
          return;
        }
        let o = e.snapshot.type !== docBlockTypeConstants.blockTypeConstants.PENDING;
        let l = n.isFetchedErr() && e.snapshot.allowFail;
        if (o || l) {
          return;
        }
        docxBlockValidatorUtils.wrapDocxEventCollector(lazyRecordClientvars.docxRecordVar, {
          block_map_incomplete: 1
        });
        docxEventCollector.docEventCollector("doc_bug_track_dev", {
          action: "pending_client_var_fetch_record",
          info: docxUtilityHelpers.maskSensitiveData(e.id)
        });
        await i.fetchRecordBatch(e.id);
      } catch (i) {
        if (this.isDestroyed) {
          return;
        }
        docxEventCollector.docEventCollector("doc_bug_track_dev", {
          action: "blank_block_fetch_record_error",
          info: docxUtilityHelpers.maskSensitiveData(e.id),
          error: i && i.message
        });
        (await this.oops).blockOopsByRecordId(e.id, i, -101050);
      }
    }
    constructor(e, i, r, n) {
      B(this, "subs", undefined);
      B(this, "isDestroyed", false);
      B(this, "clientVar", undefined);
      B(this, "structService", undefined);
      B(this, "oops", undefined);
      B(this, "lazyRecord", undefined);
      this.clientVar = e;
      this.structService = i;
      this.oops = r;
      this.lazyRecord = n;
      let o = n == null ? undefined : n.status;
      this.subs = [i.ready$.subscribe(this.onReady.bind(this)), i.mutation$.subscribe(this.onMutation.bind(this)), o == null ? undefined : o.applyAllDone$.subscribe(this.handleClientVarsFetchAllDone.bind(this))];
    }
  }, a = c = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, clientVarProviderAccess.getClientProvider), typescriptRuntimeHelpers.decorate(1, docxEditorCore.BLOCK_STRUCT_TOKEN), typescriptRuntimeHelpers.decorate(2, dependencyInjectionContainer.Async()), typescriptRuntimeHelpers.decorate(2, blockOopsServiceProvider.blockOopsServiceId), typescriptRuntimeHelpers.decorate(3, dependencyInjectionContainer.Optional()), typescriptRuntimeHelpers.decorate(3, lazyRecordStatusToken.lazyRecordToken), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined, undefined, undefined, undefined])], c))) || a;
  require("react-core-library-reexport") /*id: 634663*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class A extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    render() {
      let {
        displaymode: e
      } = this.props;
      return reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          display: e === "inline" ? "inline" : "block"
        }
      });
    }
  }
  function O() {
    docxEditorCore.registerAutoRuns([P]);
    docxEditorCore.registerProviders([S]);
    docxEditorCore.registerViewModel(p, {
      viewCreator: A,
      extensions: [zeroSpaceProviderName.zeroSpaceProviderName, [providerNameConstants.blockLoadingProvider, {
        displayMode: docBlockTypeConstants.blockDisplayConstants.INLINE
      }]]
    });
  }
  require.d(exports, {
    registerPendingBlockViewModel: function () {
      return O;
    }
  });
}