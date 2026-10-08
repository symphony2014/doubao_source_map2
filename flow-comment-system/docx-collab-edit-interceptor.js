// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initCollabEdit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 916674
         */
module.exports = function (module, exports, require) {
  var o;
  var r;
  var l;
  var a;
  var s;
  var c;
  var d;
  var h;
  var u;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var eventBreakRuleToken = require("event-break-rule-token") /*id: 727603*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var preAllowEditControllerName = require("pre-allow-edit-controller-name") /*id: 957001*/;
  let k = e => {
    let {
      commandName: i,
      event: n,
      blockManager: o,
      selectionAPI: r,
      editorAPI: l
    } = e;
    let a = r.getSelection();
    let s = r.isSingleTextSelection(a);
    let c = a.filter(e => o.hasBlockViewByBlockId(e.id)).map(e => o.getBlockViewByBlockId(e.id));
    let d = l.getService(preAllowEditControllerName.preAllowEditProvider);
    return !!i && d.keyEventsInterceptor.canEdit(i, c, {
      isSingleTextSelection: s,
      mouse: false,
      source: docEditorActionMap.uiComponentTypes.content_page
    }) === false && ([docEditorCommandConstants.commandTab, docEditorCommandConstants.unTabCommand].includes(i) && n.preventDefault(), true);
  };
  var collabControllerProvider = require("collab-controller-provider") /*id: 754546*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var lazyConsumerToken = require("lazy-consumer-token") /*id: 103465*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var docPreEditChangeIntercept = require("doc-pre-edit-change-intercept") /*id: 98436*/;
  var docBlockValidationUtils = require("doc-block-validation-utils") /*id: 906066*/;
  function B(e, i, n, o) {
    if (n) {
      Object.defineProperty(e, i, {
        enumerable: n.enumerable,
        configurable: n.configurable,
        writable: n.writable,
        value: n.initializer ? n.initializer.call(o) : undefined
      });
    }
  }
  function T(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  function P(e, i, n, o, r) {
    var l = {};
    Object.keys(o).forEach(function (e) {
      l[e] = o[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = n.slice().reverse().reduce(function (n, o) {
      return o(e, i, n) || n;
    }, l);
    if (r && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(r) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  o = dependencyInjectionContainer.Provide(collabControllerProvider.collabControllerName);
  r = dependencyInjectionContainer.Optional();
  l = dependencyInjectionContainer.Inject(lazyRecordStatusToken.lazyRecordStatus);
  let D = o((s = P((a = class {
    bindEvents() {
      var e;
      var i;
      this.subs = [this.dataService.interceptRemoteChange$.subscribe(this.handleRemoteChange), (e = this.lazyRecordStatus) === null || e === undefined ? undefined : e.applyAllDone$.subscribe(this.consumeCacheOperation), (i = this.lazyRecordStatus) === null || i === undefined ? undefined : i.applySliceAfter$.subscribe(this.handleSliceApplied)].filter(Boolean);
    }
    setCacheOperation(e, i) {
      e.forEach(e => {
        let i = this.cacheOperations.get(e.id) || [];
        i.push(e);
        this.cacheOperations.set(e.id, i);
      });
      e.length = 0;
      docPreEditChangeIntercept.reportRemoteChanges(i, this.blockManager);
    }
    unBindEvents() {
      var e;
      if ((e = this.subs) !== null && e !== undefined) {
        e.forEach(e => e.unsubscribe());
      }
    }
    onServiceDispose() {
      this.unBindEvents();
    }
    constructor() {
      B(this, "dataService", s, this);
      T(this, "subs", undefined);
      B(this, "editController", c, this);
      T(this, "cacheOperations", new Map());
      B(this, "lazyRecordStatus", d, this);
      T(this, "isAllDone", false);
      B(this, "lazyConsumer", h, this);
      B(this, "blockManager", u, this);
      T(this, "handleRemoteChange", e => {
        let {
          recordOps: i
        } = e;
        if (this.isAllDone) {
          return;
        }
        let n = {};
        if (!i.every(e => !this.cacheOperations.has(e.id) || (n.intercept_reason = docPreEditChangeIntercept.interceptType.HasCacheOp, n.interceptedRecord = new collaborativeEditingFlowSyncModule.VisibilityState(e.id, {
          ...e.record.snapshot,
          type: (e.record.snapshot.type || "").toString()
        }), false))) {
          this.setCacheOperation(i, n);
          return;
        }
        let o = i.map(e => e.ops.map(i => collaborativeEditingFlowSyncModule.isDeleteOperation(i) && i.p[0] === "children" ? {
          record: new collaborativeEditingFlowSyncModule.VisibilityState(e.id, {
            ...e.record.snapshot,
            type: (e.record.snapshot.type || "").toString()
          }),
          action: {
            type: "DELETE_CHILD",
            index: i.p[1]
          }
        } : collaborativeEditingFlowSyncModule.$b(i) && i.p[0] === "children" ? {
          record: new collaborativeEditingFlowSyncModule.VisibilityState(e.id, {
            ...e.record.snapshot,
            type: (e.record.snapshot.type || "").toString()
          }),
          action: {
            type: "INSERT_CHILD",
            index: i.p[1],
            id: i.action.li,
            newBlockRecord: e.record
          }
        } : collaborativeEditingFlowSyncModule.isCreateOperation(i) || collaborativeEditingFlowSyncModule.isListDeleteOperation(i) || collaborativeEditingFlowSyncModule.transformOperations(i) ? {
          record: new collaborativeEditingFlowSyncModule.VisibilityState(e.id, {
            ...e.record.snapshot,
            type: (e.record.snapshot.type || "").toString()
          }),
          action: {
            type: "UPDATE_ATTRIBUTE",
            changedKey: i.p[0] || "",
            newValue: "oi" in i.action ? i.action.oi : undefined
          }
        } : null).filter(docBlockValidationUtils.isNotNull)).filter(e => e.length);
        if (boolDefaultGetterUtil.getDefaultBool("ccm.docx.sync.intercept", false)) {
          o.forEach(e => {
            e.forEach(e => {
              let {
                record: i
              } = e;
              this.lazyConsumer.applyDescendent(i.id);
            });
          });
          return;
        }
        if (!o.every(e => e.every(e => {
          let {
            record: i,
            action: o
          } = e;
          n.intercept_reason = docPreEditChangeIntercept.interceptType.EditControl;
          n.edit_type = o.type;
          n.interceptedRecord = i;
          return this.editController.canBlockEditAndTryApply(i, i.snapshot.type, o);
        }))) {
          this.setCacheOperation(i, n);
          return;
        }
      });
      T(this, "handleSliceApplied", () => {
        let e = [];
        this.cacheOperations.forEach((i, n) => {
          if (this.lazyConsumer.checkNodeAndDescendentVisited(n)) {
            this.applyCacheTransaction(i);
            e.push(n);
          }
        });
        e.forEach(e => this.cacheOperations.delete(e));
      });
      T(this, "applyCacheTransaction", e => {
        this.blockManager.applyTransaction("reApplyRemoteOperations", i => {
          e.forEach(e => {
            i.apply(e.id, e.ops);
          });
        }, {
          from: collaborativeEditingFlowSyncModule.kq.REMOTE
        });
      });
      T(this, "consumeCacheOperation", () => {
        this.isAllDone = true;
        this.cacheOperations.forEach(e => {
          this.applyCacheTransaction(e);
        });
      });
    }
  }).prototype, "dataService", [docxEditorCore.BLOCK_DATA_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), c = P(a.prototype, "editController", [preAllowEditControllerName.preAllowEditProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), d = P(a.prototype, "lazyRecordStatus", [r, l], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), h = P(a.prototype, "lazyConsumer", [lazyConsumerToken.lazyConsumerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), u = P(a.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), a)) || a;
  var preAllowEditController = require("pre-allow-edit-controller") /*id: 745161*/;
  function A() {
    docxEditorCore.registerProviders([preAllowEditController.KeyEventInterceptor, D, {
      provide: eventBreakRuleToken.eventBreakRuleToken,
      useValue: k
    }]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(preAllowEditControllerName.preAllowEditProvider);
      let i = dependencyInjectionContainer.get(collabControllerProvider.collabControllerName);
      e.init();
      i.bindEvents();
    });
  }
  require.d(exports, {
    initCollabEdit: function () {
      return A;
    }
  });
}