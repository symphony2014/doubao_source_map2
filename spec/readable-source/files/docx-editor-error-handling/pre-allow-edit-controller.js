// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'KeyEventInterceptor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 745161
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
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docPerformanceTuningFlags = require("doc-performance-tuning-flags") /*id: 808188*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  function C(e, i, r) {
    let n = r.get(e) || r.set(e, new Set()).get(e);
    if ([...n].some(e => deepEqualUtil_1.deepEqual(e, i))) {
      return true;
    }
    n.add(i);
  }
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var lazyConsumerToken = require("lazy-consumer-token") /*id: 103465*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var layoutManagerToken = require("layout-manager-token") /*id: 709939*/;
  var editCheckerProvider = require("edit-checker-provider") /*id: 884051*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var docPreEditChangeIntercept = require("doc-pre-edit-change-intercept") /*id: 98436*/;
  class P {
    canEdit(e, i, r = {}) {
      if (this.editController.shouldSkipIntercept()) {
        return true;
      }
      this.collectParamas = {
        handlerName: e,
        context: r
      };
      let n = true;
      switch (e) {
        case docEditorCommandConstants.boldCommand:
        case docEditorCommandConstants.italicCommand:
        case docEditorCommandConstants.underlineCommand:
        case docEditorCommandConstants.strikethroughCommand:
        case docEditorCommandConstants.inlineCodeCommand:
          n = this.interceptTextualKeyEvent(i, r);
          break;
        case docEditorCommandConstants.commandTab:
        case docEditorCommandConstants.unTabCommand:
          n = this.interceptTabKeyEvent(i, r);
          break;
        case docEditorCommandConstants.textAlignCommand:
          n = this.interceptAlignKeyEvent(i, r);
          break;
        case docEditorCommandConstants.textHighlightCommand:
          n = this.interceptHighlightKeyEvent(i);
          break;
        case docEditorCommandConstants.commentCommand:
          n = this.interceptCommentKeyEvent(i);
          break;
        default:
          n = true;
      }
      this.collectParamas = null;
      return n;
    }
    interceptCollect(e, i) {
      if (this.collectParamas === null) {
        return;
      }
      let {
        handlerName: r,
        context: n
      } = this.collectParamas;
      let o = n == null ? undefined : n.source;
      let l = (n == null ? undefined : n.mouse) === undefined ? "unknown" : (n == null ? undefined : n.mouse) ? "tool" : "keyboard";
      docPreEditChangeIntercept.reportUserOperation({
        op_source: o || l,
        op_type: r,
        edit_type: i.type,
        interceptedRecord: e.record
      }, e.blockManager);
    }
    interceptKeyEvent(e, i, r) {
      return !i || ((r == null ? undefined : r.isSingleTextSelection) && (i = [i[0]]), i.every(i => {
        let {
          actionBlock: r = i,
          ...n
        } = typeof e == "function" ? e(i) : e;
        if (!r) {
          return true;
        }
        let o = this.editController.canBlockEditAndTryApply(r.record, r.type, n);
        if (!o) {
          this.interceptCollect(i, n);
        }
        return o;
      }));
    }
    interceptTextualKeyEvent(e, i) {
      return this.interceptKeyEvent({
        type: "UPDATE_ATTRIBUTE",
        changedKey: "text",
        newValue: "unknown"
      }, e, i);
    }
    interceptAlignKeyEvent(e, i) {
      return this.interceptKeyEvent(() => ({
        type: "UPDATE_ATTRIBUTE",
        changedKey: "align",
        newValue: "unknown"
      }), e, i);
    }
    interceptTabKeyEvent(e, i) {
      return this.interceptKeyEvent(e => {
        return {
          type: "DELETE_CHILD",
          index: e.model.position,
          actionBlock: e.editorAPI.modelService.getBlockModelByBlockId(e.id)?.parent
        };
      }, e, i);
    }
    interceptCommentKeyEvent(e) {
      return this.interceptKeyEvent({
        type: "UPDATE_ATTRIBUTE",
        changedKey: "comments",
        newValue: "unknown"
      }, e);
    }
    interceptHighlightKeyEvent(e) {
      return this.interceptTextualKeyEvent(e);
    }
    constructor(e) {
      var i;
      var r;
      this.editController = e;
      if ((i = typeof (r = function (e, i) {
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
      }(i = "collectParamas", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: null,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = null;
      }
    }
  }
  var preAllowEditControllerName = require("pre-allow-edit-controller-name") /*id: 957001*/;
  var docBlockValidationUtils = require("doc-block-validation-utils") /*id: 906066*/;
  function A(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function O(e, i, r) {
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
  function D(e, i, r, n, o) {
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
  n = dependencyInjectionContainer.Provide(preAllowEditControllerName.preAllowEditProvider);
  o = dependencyInjectionContainer.Optional();
  l = dependencyInjectionContainer.Inject(lazyRecordStatusToken.lazyRecordStatus);
  s = dependencyInjectionContainer.Dynamic();
  a = dependencyInjectionContainer.Many();
  let x = n((d = D((c = class {
    init() {
      var e;
      this.subs = [(e = this.lazyRecordStatus) === null || e === undefined ? undefined : e.applyAllDone$.subscribe(this.handleApplyAllDone), this.editorAPI.dataService.change$.subscribe(this.handleAfterChange)].filter(Boolean);
    }
    canBlockEditAndTryApply(e, i, r) {
      if (this.shouldSkipIntercept()) {
        return true;
      }
      let n = this.canBlockEdit(e, i, r);
      let o = this.lazyConsumer.getPerfFeatures();
      if (o && o.isTuningAllowed() && !n && e && o.has(docPerformanceTuningFlags.IdleApplyFlags.OPTIMIZE_IDLE_APPLY | docPerformanceTuningFlags.IdleApplyFlags.UNDETERMINED)) {
        this.lazyConsumer.applyDescendent(e.id);
        return this.canBlockEdit(e, i, r);
      } else {
        return n;
      }
    }
    canBlockEdit(e, i, r) {
      if (docBlockValidationUtils.isPendingRecord(e)) {
        return false;
      }
      if (r.type === "INSERT_CHILD") {
        return true;
      }
      let o = this.editorAPI.structService.getBlockStructsByRecordId(e.id)[0];
      if (r.type === "UPDATE_ATTRIBUTE" && o && docBlockValidationUtils.hasPendingRecord(o)) {
        return false;
      }
      if (r.type === "DELETE_CHILD") {
        if (!o) {
          return false;
        }
        {
          let e = o.children[r.index];
          if (!e || docBlockValidationUtils.hasPendingRecord(e)) {
            return false;
          }
        }
      }
      let l = (this.checkers.get() ?? []).find(e => e.blockType === i);
      return !l || l.checkFunc({
        record: e,
        action: r,
        modelService: this.editorAPI.modelService,
        layoutManager: this.layoutManager,
        lazyConsumer: this.lazyConsumer
      });
    }
    destroy() {
      var e;
      if ((e = this.subs) !== null && e !== undefined) {
        e.forEach(e => e.unsubscribe());
      }
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      O(this, "dataApplyFinished", false);
      A(this, "editorAPI", d, this);
      A(this, "layoutManager", u, this);
      A(this, "lazyConsumer", h, this);
      A(this, "lazyRecordStatus", f, this);
      O(this, "subs", undefined);
      A(this, "checkers", g, this);
      A(this, "blockManager", p, this);
      O(this, "handleApplyAllDone", () => {
        this.dataApplyFinished = true;
      });
      O(this, "shouldSkipIntercept", () => this.dataApplyFinished || !this.lazyConsumer.isPreEditableEnable());
      O(this, "keyEventsInterceptor", new P(this));
      O(this, "handleAfterChange", e => {
        var i;
        if (e.options.from === collaborativeEditingFlowSyncModule.kq.LOCAL) {
          i = this.blockManager;
          idleCallbackPolyfill_1.requestIdleCallback(() => function (e, i) {
            let r;
            let {
              recordOps: n,
              options: o
            } = e;
            n.find(e => r = function (e) {
              let i = new Map();
              return e.find(e => {
                if (collaborativeEditingFlowSyncModule.transformOperations(e) && deepEqualUtil_1.deepEqual(e.action.od, e.action.oi) || collaborativeEditingFlowSyncModule.isListMoveOperation(e) && deepEqualUtil_1.deepEqual(e.action.ld, e.action.li)) {
                  return true;
                }
                if (collaborativeEditingFlowSyncModule.isListDeleteOperation(e)) {
                  let {
                    action: r,
                    p: n
                  } = e;
                  return C(n.join(), r.od, i);
                }
                if (collaborativeEditingFlowSyncModule.isCreateOperation(e)) {
                  let {
                    action: r,
                    p: n
                  } = e;
                  return C(n.join(), r.oi, i);
                }
                if (collaborativeEditingFlowSyncModule.isDeleteOperation(e)) {
                  let {
                    action: r,
                    p: n
                  } = e;
                  return C(n.join(), r.ld, i);
                }
                if (collaborativeEditingFlowSyncModule.$b(e)) {
                  let {
                    action: r,
                    p: n
                  } = e;
                  return C(n.join(), r.li, i);
                }
              });
            }(e.ops));
            if (r) {
              let {
                transactionName: e
              } = o;
              i.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
                action: "report_redundant_op",
                info: {
                  transactionName: e
                },
                redundantOpPath: r.p.join()
              });
            }
          }(e, i));
        }
      });
    }
  }).prototype, "editorAPI", [docxEditorCore.EDITOR_API_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), u = D(c.prototype, "layoutManager", [layoutManagerToken.layoutManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), h = D(c.prototype, "lazyConsumer", [lazyConsumerToken.lazyConsumerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), f = D(c.prototype, "lazyRecordStatus", [o, l], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), g = D(c.prototype, "checkers", [s, a, editCheckerProvider.editCheckerProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), p = D(c.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), c)) || c;
  require.d(exports, {
    KeyEventInterceptor: function () {
      return x;
    }
  });
}