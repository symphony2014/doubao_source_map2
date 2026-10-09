// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initRevisionExt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 606712
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
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var diProviderRevisionBaseService = require("di-provider-revision-base-service") /*id: 951946*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var chatUserInfoService = require("chat-user-info-service") /*id: 152763*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var relationServiceProviderName = require("relation-service-provider-name") /*id: 233471*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var revisionServiceProvider = require("revision-service-provider") /*id: 493533*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  function T(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function w(e, i, r) {
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
  function B(e, i, r, n, o) {
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
  n = dependencyInjectionContainer.Provide(diProviderRevisionBaseService.revisionBaseService);
  o = dependencyInjectionContainer.Optional();
  let P = n((s = B((l = class {
    get revising() {
      return this.editorAPI.config.get("revising");
    }
    async init() {
      this.subs = [this.editorAPI.dataService.change$.subscribe(this.handleRecordManagerChange), {
        unsubscribe: () => docxEditorEventConstantsAndManager.globalEventEmitter.off(docxEditorEventConstantsAndManager.eventConstants.COMMON.COLLAB_MODULE_INIT_FINISH, this.handleSyncReady)
      }, {
        unsubscribe: () => {
          var e;
          if ((e = this.collabModule) === null || e === undefined) {
            return undefined;
          } else {
            return e.offFramesSubmitted(this.handleCommitSubmitted);
          }
        }
      }, {
        unsubscribe: docxEditorCore.onServiceReady(this.editorAPI, revisionServiceProvider.revisionServiceId, this.handleRevisionReady)
      }];
      if (this.collabModule?.sync) {
        this.collabModule.onFramesSubmitted(this.handleCommitSubmitted);
      } else {
        docxEditorEventConstantsAndManager.globalEventEmitter.once(docxEditorEventConstantsAndManager.eventConstants.COMMON.COLLAB_MODULE_INIT_FINISH, this.handleSyncReady);
      }
      this.relationManager = this.editorAPI.getService(relationServiceProviderName.relationServiceProviderName).register({
        groupId: "revision",
        parseValueFromBlock: editorRevisionUtilities.getBlockRevisionIds,
        parseValueFromRecord: editorRevisionUtilities.getSnapshotRevIds,
        insertRecordIdInOrder: editorRevisionUtilities.insertRecordIdSorted
      });
    }
    destroy() {
      this.subs.forEach(e => e.unsubscribe());
    }
    generateRevisionId() {
      let e = uuidGeneratorUtil.generateUuid();
      let i = chatUserInfoService.userInfoService.getCurrentUser().get("id");
      let r = new Date().getTime();
      return platformDocUtils.p5T(e + i + String(r));
    }
    getRecordIdsByRevisionId(e) {
      return this.relationManager.getRecordIdsByValue(e);
    }
    constructor() {
      T(this, "editorAPI", s, this);
      T(this, "collabModule", a, this);
      T(this, "blockManager", c, this);
      w(this, "subs", undefined);
      w(this, "relationManager", undefined);
      w(this, "isReady", false);
      w(this, "revisionService", undefined);
      w(this, "dataChangeBuffer", new Map());
      w(this, "handleSyncReady", () => {
        var e;
        if ((e = this.collabModule) !== null && e !== undefined) {
          e.onFramesSubmitted(this.handleCommitSubmitted);
        }
      });
      w(this, "handleRevisionReady", e => {
        this.revisionService = e;
        this.isReady = true;
        this.editableServiceLoaded();
      });
      w(this, "handleRefreshModel", e => {
        let {
          from: r
        } = e.options;
        let n = changeSourceValidators.isUndoRedoSource(e.options);
        let o = e.options.extra?.isRevisionChange;
        if (r === collaborativeEditingFlowSyncModule.kq.REMOTE || n && o) {
          for (let {
            id: i,
            ops: r
          } of e.recordOps) {
            let [e] = this.blockManager.getBlockModelsByRecordId(i);
            if (e && editorTextBlockUtilities.isTextBlock(e)) {
              for (let i of r) {
                let r;
                if (i.p.includes("revisions")) {
                  if (collaborativeEditingFlowSyncModule.$b(i)) {
                    r = i.action.li;
                  } else if (collaborativeEditingFlowSyncModule.isDeleteOperation(i)) {
                    r = i.action.ld;
                  }
                  if (r && editorRevisionUtilities.hasTurnIntoDetail(r)) {
                    e.forceRefresh();
                  }
                }
              }
            }
          }
        }
      });
      w(this, "handleRecordManagerChange", e => {
        var r;
        this.handleRefreshModel(e);
        if (!this.revising) {
          return;
        }
        let n = changeSourceValidators.isUndoRedoSource(e.options);
        let {
          from: o,
          transactionFrame: l
        } = e.options;
        if (o !== collaborativeEditingFlowSyncModule.kq.LOCAL && o !== collaborativeEditingFlowSyncModule.kq.TEMPORARY) {
          return;
        }
        let s = e.options.extra?.revisionContext;
        if (!s) {
          return;
        }
        let a = Array.isArray(s) ? s : [s];
        if (this.isReady) {
          if ((r = this.revisionService) !== null && r !== undefined) {
            r.onRecordChange({
              transactionFrame: l,
              isInUndoRedo: n,
              contexts: a
            });
          }
        } else {
          this.dataChangeBuffer.set(l, {
            transactionFrame: l,
            isInUndoRedo: n,
            contexts: a,
            submitted: false
          });
        }
      });
      w(this, "handleCommitSubmitted", e => {
        e.forEach(e => {
          if (this.isReady) {
            var i;
            if ((i = this.revisionService) !== null && i !== undefined) {
              i.onRecordChangeSubmit(e);
            }
          } else {
            let i = this.dataChangeBuffer.get(e);
            if (i) {
              i.submitted = true;
            }
          }
        });
      });
      w(this, "editableServiceLoaded", () => {
        for (let [r, n] of this.dataChangeBuffer.entries()) {
          var e;
          var i;
          if ((e = this.revisionService) !== null && e !== undefined) {
            e.onRecordChange(n);
          }
          if (n.submitted) {
            if ((i = this.revisionService) !== null && i !== undefined) {
              i.onRecordChangeSubmit(r);
            }
          }
        }
        this.dataChangeBuffer.clear();
        this.isReady = true;
      });
    }
  }).prototype, "editorAPI", [docxEditorCore.EDITOR_API_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), a = B(l.prototype, "collabModule", [o, collabTriggersProvider.collabProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), c = B(l.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), l)) || l;
  var revisionExtensionServiceToken = require("revision-extension-service-token") /*id: 755911*/;
  var firstScreenEventHandlerUtils = require("first-screen-event-handler-utils") /*id: 712591*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docxRevisionSignals = require("docx-revision-signals") /*id: 196153*/;
  function D(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function x(e, i, r) {
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
  function F(e, i, r, n, o) {
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
  let j = debugLoggerFactory.createLogger("revision-extension-service");
  let $ = dependencyInjectionContainer.Provide(revisionExtensionServiceToken.revisionExtSvcToken)((u = F((d = class {
    init() {
      this.subs = [this.viewService.blockViewMount$.subscribe(this.handleBlockViewMount)];
    }
    destroy() {
      var e;
      this.subs.forEach(e => e.unsubscribe());
      if ((e = this.cancelRaf) !== null && e !== undefined) {
        e.call(this);
      }
    }
    constructor() {
      D(this, "viewService", u, this);
      D(this, "signal", h, this);
      x(this, "subs", undefined);
      x(this, "waitNotifyIds", new Set());
      x(this, "cancelRaf", null);
      x(this, "handleBlockViewMount", e => {
        j("block mount", e.blockView.id);
        this.batchNotifyBlockRenderFinish(e.blockView.id);
      });
      x(this, "batchNotifyBlockRenderFinish", e => {
        this.waitNotifyIds.add(e);
        if (!this.cancelRaf) {
          this.cancelRaf = firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => {
            j("batch notify", this.waitNotifyIds.size);
            this.signal.next(new Set(this.waitNotifyIds));
            this.waitNotifyIds.clear();
            this.cancelRaf = null;
          }, 0);
        }
      });
      x(this, "onBlockReady", e => {
        j("block ready", e);
        this.batchNotifyBlockRenderFinish(e);
      });
    }
  }).prototype, "viewService", [docxEditorCore.VIEW_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), h = F(d.prototype, "signal", [docxRevisionSignals.getRevisionExt], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), d)) || d;
  function H() {
    docxEditorCore.registerSignals([{
      provide: docxRevisionSignals.revisionExtSig,
      useClass: docxEditorCore.SubjectType
    }]);
    docxEditorCore.registerProviders([P, $]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(diProviderRevisionBaseService.revisionBaseService);
      let i = dependencyInjectionContainer.get(revisionExtensionServiceToken.revisionExtSvcToken);
      e.init();
      i.init();
      return () => {
        e.destroy();
        i.destroy();
      };
    });
  }
  require.d(exports, {
    initRevisionExt: function () {
      return H;
    }
  });
}