// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerLazyConsumerService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 897591
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
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var lazyConsumerToken = require("lazy-consumer-token") /*id: 103465*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var layoutManagerToken = require("layout-manager-token") /*id: 709939*/;
  function E(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function C(e, i, r) {
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
  function _(e, i, r, n, o) {
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
  n = dependencyInjectionContainer.Provide(lazyConsumerToken.lazyConsumerToken);
  o = dependencyInjectionContainer.Optional();
  l = dependencyInjectionContainer.Inject(lazyRecordStatusToken.lazyRecordStatus);
  let R = n((a = _((s = class {
    checkNodeAndDescendentVisited(e) {
      return this.consumer.checkNodeAndDecendentVisited(e);
    }
    startApplyAllMode() {
      this.consumer.startApplyAllMode();
    }
    stopApplyAllMode() {
      this.consumer.stopApplyAllMode();
    }
    tryToStartIdleApply(e) {
      this.consumer.tryToStartIdleApply(e);
    }
    stopIdleApply() {
      this.consumer.stopIdleApply();
    }
    setStartId(e, i) {
      this.consumer.setStartId(e, i);
    }
    getPerfFeatures() {
      return this.consumer.perfFeatures;
    }
    isCriticalRecordsApplied() {
      return this.consumer.criticalRecordsApplied;
    }
    isFetchAllDone() {
      return this.consumer.fetchAllDone;
    }
    isPreEditableEnable() {
      return this.consumer.isPreEditableEnable();
    }
    isRecordFetched(e) {
      return this.consumer.isRecordFetched(e);
    }
    init(e) {
      this.consumer = e;
      this.eventEmitter.on(renderEventConstants.paint, this.debounceUpdateStartIdIfNeeded);
    }
    destroy() {
      this.debounceUpdateStartIdIfNeeded.cancel();
      this.eventEmitter.off(renderEventConstants.paint, this.debounceUpdateStartIdIfNeeded);
    }
    onServiceDispose() {
      this.destroy();
    }
    getRootTreeNode() {
      let e = this.consumer.getSplitter().getTree();
      return (e == null ? undefined : e.getNode(this.consumer.token)) || null;
    }
    applyDescendent(e) {
      return this.consumer.applyDescendent(e);
    }
    getImpl() {
      return this.consumer;
    }
    constructor() {
      E(this, "eventEmitter", a, this);
      E(this, "layoutManager", c, this);
      E(this, "editorAPI", d, this);
      C(this, "consumer", undefined);
      E(this, "lazyRecordStatus", u, this);
      C(this, "checkTableApplied", e => {
        var i;
        return (i = this.lazyRecordStatus) !== null && i !== undefined && !!i.isAllDone || docxTableLayoutUtils.checkPendingStatus(e);
      });
      C(this, "updateStartIdIfNeeded", e => {
        let i = null;
        let r = e;
        let {
          structService: n
        } = this.editorAPI;
        I(this.layoutManager.getViewportBlocks(), e => {
          let r = n.getBlockStructByBlockId(e);
          if (!r) {
            return false;
          }
          let {
            type: o
          } = r;
          return (o === docBlockTypeConstants.blockTypeConstants.PENDING || o === docBlockTypeConstants.blockTypeConstants.TABLE && !this.checkTableApplied(r.children)) && (i = e, true);
        });
        if (i === null) {
          I(this.layoutManager.getBufferBlocks(), e => {
            return n.getBlockStructByBlockId(e)?.type === docBlockTypeConstants.blockTypeConstants.PENDING && (i = e, true);
          });
        }
        if (i) {
          let e = n.getBlockStructByBlockId(i)?.recordId;
          if (e) {
            this.consumer.setStartId(e, true);
          }
        }
        if (i) {
          while (r < 3) {
            r++;
            this.updateStartIdIfNeeded(r);
          }
        }
      });
      C(this, "debounceUpdateStartIdIfNeeded", debounceUtil_1_1.debounce(() => {
        this.updateStartIdIfNeeded(0);
      }, 50));
    }
  }).prototype, "eventEmitter", [eventEmitterProviderNameExport.eventEmitterProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), c = _(s.prototype, "layoutManager", [layoutManagerToken.layoutManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), d = _(s.prototype, "editorAPI", [docxEditorCore.EDITOR_API_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), u = _(s.prototype, "lazyRecordStatus", [o, l], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), s)) || s;
  function I(e, i) {
    let {
      length: r
    } = e;
    let n = r >> 1;
    let o = n - 1;
    while (o >= 0 || n < r) {
      if (n < r) {
        if (i(e[n], n)) {
          break;
        }
        n += 1;
      }
      if (o >= 0) {
        if (i(e[o], o)) {
          break;
        }
        o -= 1;
      }
    }
  }
  function M() {
    docxEditorCore.registerProviders([R]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(lazyConsumerToken.lazyConsumerToken);
      let i = dependencyInjectionContainer.get(docxEditorCore.CONFIG_TOKEN).get("dataHelper");
      e.init(i.clientVarLazyConsumer);
    });
  }
  require.d(exports, {
    registerLazyConsumerService: function () {
      return M;
    }
  });
}