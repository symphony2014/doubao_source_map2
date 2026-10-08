// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'FoldStateManager'
// - Renamed export 'vS' to 'FoldTypeEnum'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 437732
         */
module.exports = function (module, exports, require) {
  var o;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var d = debugBrowserConfig;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var clipboardSecurityChecker = require("clipboard-security-checker") /*id: 991067*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var foldStateSubjects = require("fold-state-subjects") /*id: 726089*/;
  var flowHeadingFoldUtils = require("flow-heading-fold-utils") /*id: 451530*/;
  var foldStatusConstants = require("fold-status-constants") /*id: 275668*/;
  var docxBlockFoldUtils = require("docx-block-fold-utils") /*id: 186232*/;
  var foldProviderAccessor = require("fold-provider-accessor") /*id: 786534*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function E(e, n, i) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var o = i.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  let _ = d("fold");
  let T = "AFTER_SHOW";
  (o = {})[o.MAIN = 0] = "MAIN";
  let N = o;
  class O {
    onServiceDispose() {
      var e;
      if ((e = this.subs) !== null && e !== undefined) {
        e.forEach(e => e.unsubscribe());
      }
      this.eventEmitter.removeListener(docxEditorConstantsConfig.toggleFold, this.handleToggleFold);
      docxEditorEventConstantsAndManager.globalEventBus.off(docxEditorConstantsConfig.toggleFold, this.handleToggleFold);
      this.showPool.clear();
      this.shouldShowBlockPool.clear();
      this.calculatePool.length = 0;
      this.foldStateMap = new Map();
      this.foldStatusMap = new Map();
    }
    get structService() {
      return this.editorAPI.structService;
    }
    get viewService() {
      return this.editorAPI.viewService;
    }
    getFoldStateMap() {
      return this.foldStateMap;
    }
    getFoldStateById(e) {
      return this.foldStateMap.get(e);
    }
    findFoldedBlocks(e) {
      if (!this.isFolded(e)) {
        return [];
      }
      let n = this.structService.getBlockStructByBlockId(e);
      if (!n) {
        return [];
      }
      if (docBlockTypeConstants.getAllowedBlockTypes().includes(n.type) && !docBlockTypeConstants.headingTypeArray.includes(n.type)) {
        return n.children.map(e => e.id);
      }
      if (!n.parent) {
        return [];
      }
      let i = n.parent.id;
      if (!i) {
        return [];
      }
      let o = [];
      for (let [n, {
        foldedBy: l
      }] of this.foldStateMap.entries()) {
        if (e === l) {
          let e = this.structService.getBlockStructByBlockId(n);
          if (e && e.parent && e.parent.id === i) {
            o.push(e);
          }
        }
      }
      return o.sort((e, n) => e.position - n.position).map(e => e.id);
    }
    findFoldedByBlock(e) {
      let n = this.foldStateMap.get(e);
      if (n && !n.show) {
        return n.foldedBy;
      }
    }
    isAncestorOf(e, n) {
      if (e === n) {
        return false;
      }
      let o = this.structService.getBlockStructByBlockId(n)?.parent;
      while (o) {
        if (o.id === e) {
          return true;
        }
        o = o.parent;
      }
      return false;
    }
    findClosestFoldsByBlock(e) {
      let n = [];
      let i = this.foldStateMap.get(e);
      let o = i == null ? undefined : i.type;
      let l = false;
      for (this.shouldShowBlockPool.has(e) && (l = true); i && (l || !i.show) && i.closestFolderId;) {
        let {
          closestFolderId: e,
          id: r,
          foldedBy: a
        } = i;
        i = this.foldStateMap.get(e);
        l = false;
        if (!i) {
          continue;
        }
        let d = O.isGreaterHeadingLevel(i.type, o);
        let s = this.isAncestorOf(e, r);
        if ((d || s || a === e) && (!this.isShow(i.id) || !!i.folded)) {
          n.push(e);
          o = i.type;
        }
      }
      return n;
    }
    waitUntilBlockShow(e, n) {
      return new Promise(i => {
        let o = null;
        let l = n => {
          if (n && n.show) {
            if (o) {
              window.clearTimeout(o);
            }
            this.eventEmitter.removeListener(T, l, e);
            i();
          }
        };
        this.eventEmitter.addListener(T, l, e);
        if (typeof n == "number") {
          o = window.setTimeout(() => {
            this.eventEmitter.removeListener(T, l, e);
            i();
          }, n);
        }
      });
    }
    waitUntilBlocksUnfold(e, n = 1000) {
      return new Promise(i => {
        let o = new Set(e.filter(e => {
          return this.foldStateMap.get(e)?.folded;
        }));
        if (!o.size) {
          return i();
        }
        let l = null;
        let r = e => {
          if (!!e && !e.folded) {
            o.delete(e.id);
            if (!o.size) {
              if (l) {
                window.clearTimeout(l);
              }
              this.eventEmitter.removeListener(foldStatusConstants.foldSetState, r);
              i();
            }
          }
        };
        this.eventEmitter.addListener(foldStatusConstants.foldSetState, r);
        if (typeof n == "number") {
          l = window.setTimeout(() => {
            this.eventEmitter.removeListener(foldStatusConstants.foldSetState, r);
            i();
          }, n);
        }
      });
    }
    enterIgnoreMode() {
      let e = this.findFoldedBlocksByStatus(true);
      this.cacheIgnoreFoldedIds = e;
      e.forEach(e => this.handleToggleFold(e, false));
    }
    exitIgnoreMode() {
      if (this.cacheIgnoreFoldedIds.length) {
        this.cacheIgnoreFoldedIds.forEach(e => this.handleToggleFold(e, true));
      }
    }
    handleMutations(e) {
      let {
        mutations: n,
        from: i,
        extra: o
      } = e;
      let a = {
        from: i,
        isInPaste: changeSourceValidators.isPasteSource(e),
        isInUndoRedo: changeSourceValidators.isUndoRedoSource(e),
        ignoreFold: (o == null ? undefined : o.ignoreFold) || i === collaborativeEditingFlowSyncModule.kq.REMOTE,
        isOnlyHandleComment: o == null ? undefined : o.skipCommentHandleTransaction
      };
      for (let e of n.removed) {
        if (!docxEditorCore.isMoveMutation(e)) {
          let {
            block: n,
            parent: i,
            previousSibling: o,
            nextSibling: l
          } = e;
          this.handleDestroy(n, i, o, l, a);
        }
      }
      let d = new Set();
      for (let e of n.added) {
        let {
          block: n
        } = e;
        if (this.foldStateMap.has(n.id)) {
          if (!d.has(n.id)) {
            this.handleUpdate(n, a);
          }
        } else {
          this.handleCascadeInit(n, a, d);
        }
      }
      for (let e of n.updated) {
        this.handleUpdate(e.block, a);
      }
    }
    handleReady() {
      let e = this.structService.root;
      let n = {
        isInit: true
      };
      e.traverse(e => {
        this.handleInit(e, n);
      });
    }
    handleCascadeInit(e, n, i) {
      let o = this.getRelativeBlockId(e.id);
      if (o && !this.foldStateMap.has(o)) {
        let e = this.structService.getBlockStructByBlockId(o);
        if (e) {
          this.handleCascadeInit(e, n, i);
        }
      }
      i.add(e.id);
      this.handleInit(e, n);
    }
    handleInit(e, n) {
      _("init", e.id, e);
      this.initFoldStatus(e);
      let i = this.calculateFoldState(e);
      if (i) {
        if (!n.isInPaste && !n.isInit && !n.ignoreFold && n.from !== collaborativeEditingFlowSyncModule.kq.SILENCE && !docxBlockUtils_1.hasParentOfBlockType(e.id, this.structService, docBlockTypeConstants.tableCalloutTypes)) {
          i.show = true;
        }
        this.save(i);
        if (n.from === collaborativeEditingFlowSyncModule.kq.REMOTE && docBlockTypeConstants.gridTableOkTypes.includes(e.type)) {
          this.checkNext(i);
        }
      }
    }
    initFoldStatus(e) {
      let n = !browserEnvironmentDetectionUtils.browserDetector.isMobile && docxBlockFoldUtils.isBlockFolded(e);
      let {
        editorAPI: i
      } = e;
      if (n && syncedReferenceBlockUtils.isSyncedReferenceBlock(i) && docxBlockFoldUtils.isInSpecialBlock(i)) {
        n = false;
      }
      if (typeof n == "boolean") {
        this.initSetFoldStatus(e.id, n);
      }
    }
    save(e) {
      let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let i = this.foldStateMap.get(e.id);
      if (!deepEqualUtil_1.deepEqual(i, e)) {
        _("保存计算结果", e.id, e);
        if ((!clipboardSecurityChecker.isSecuritySupported() || i) && ((i == null ? undefined : i.show) !== e.show || (i == null ? undefined : i.folded) !== e.folded)) {
          this.showPool.add(e.id);
          this.debounceShow(n);
        }
        this.foldStateMap.set(e.id, e);
        foldStateSubjects.foldSubjects.setFoldState$.next({
          foldState: e,
          options: {
            isLocal: n
          }
        });
        this.eventEmitter.dispatch(foldStatusConstants.foldSetState, e, e.id);
        this.eventEmitter.dispatch(foldStatusConstants.foldSetState, e);
        if (this.viewService.hasBlockViewByBlockId(e.id)) {
          this.viewService.getBlockViewByBlockId(e.id).onFoldStateChange(e, n);
        }
      }
    }
    static initFoldState(e) {
      let {
        id: n,
        type: i = "",
        show: o,
        foldStatus: l,
        foldedBy: r,
        foldedByType: a,
        closestFolderId: d
      } = e;
      let s = {
        show: o,
        type: i,
        id: n,
        foldedBy: r,
        foldedByType: a,
        closestFolderId: d
      };
      if (typeof l == "boolean") {
        s.folded = l;
      }
      return s;
    }
    static extendFoldState(e, n, i) {
      let {
        id: o,
        type: l = "",
        foldStatus: r,
        parentId: a
      } = e;
      let {
        show: d,
        folded: s,
        foldedBy: c,
        foldedByType: u,
        type: h,
        id: f
      } = n;
      let v = {
        id: o,
        type: l,
        closestFolderId: n.closestFolderId,
        foldedBy: n.foldedBy,
        foldedByType: n.foldedByType,
        show: n.show
      };
      if (O.isGreaterHeadingLevel(h, e.type)) {
        v.show = d ? !s : d;
        if (s) {
          v.foldedBy = c || f;
          v.foldedByType = u || h;
        }
      }
      if (f === a && typeof s == "boolean") {
        v.closestFolderId = f;
        if (d === true) {
          v.show = !s;
          if (s) {
            v.foldedBy = f;
            v.foldedByType = h;
          }
        }
      }
      if (h.includes("heading")) {
        v.closestFolderId = f;
      }
      if (typeof r == "boolean") {
        v.folded = r;
      }
      if (i == null ? undefined : i.has(o)) {
        v.show = true;
      }
      return v;
    }
    static isGreaterHeadingLevel(e, n) {
      let i = flowHeadingFoldUtils.parseHeadingLevel(e);
      let o = flowHeadingFoldUtils.parseHeadingLevel(n);
      return i !== null && (o === null || !!(i < o));
    }
    isEqual(e, n) {
      return e === null && n === null || e === undefined && n === undefined || !!e && !!n && Object.keys(e).every(i => e[i] === n[i]);
    }
    checkChildren(e) {
      let {
        id: n
      } = e;
      let i = this.structService.getBlockStructByBlockId(n);
      if (i && i.children[0]) {
        this.calculatePool.push(i.children[0].id);
      }
    }
    checkNext(e) {
      let n = this.structService.getBlockStructByBlockId(e.id);
      if (n && n.nextSibling) {
        this.calculatePool.push(n.nextSibling.id);
      }
    }
    initSetFoldStatus(e, n) {
      this.foldStatusMap.set(e, n);
    }
    setFoldStatus(e, n) {
      if (n !== this.foldStatusMap.get(e)) {
        this.initSetFoldStatus(e, n);
        if (!this.calculatePool.includes(e)) {
          this.calculatePool.push(e);
        }
        foldStateSubjects.foldSubjects.setFoldStatus$.next({
          blockId: e,
          folded: n
        });
      }
    }
    forceShowFoldedBlock(e, n) {
      if (this.isShow(e) && !this.shouldShowBlockPool.has(e)) {
        return;
      }
      let i = this.findClosestFoldsByBlock(e);
      if (i.length) {
        i.forEach(e => {
          this.setFoldStatus(e, false);
          if (n) {
            this.applyFoldedStatus(e, false);
          } else {
            this.changeReadOnlySignal.next({
              blockId: e,
              folded: false
            });
          }
        });
        this.debounceUpdate();
        return this.waitUntilBlockShow(e);
      }
    }
    static calculateFoldedBlocksByBlockId(e, n) {
      let i = e.editorAPI.getService(foldProviderAccessor.foldProvider);
      let o = new Map();
      for (let [e, l] of i.getFoldStateMap()) {
        o.set(e, Object.assign({}, l, {
          folded: n === e
        }));
      }
      let l = n => {
        let {
          id: r,
          parent: a
        } = n;
        let d = {
          isRoot: n.isRoot(),
          relativeId: i.getRelativeBlockId(r),
          parentId: a == null ? undefined : a.id,
          folded: o.get(r)?.folded || false
        };
        return O.calculateFoldState(n, d, o, n => {
          return e.getBlockStructByBlockId(n)?.depth;
        }, {
          translated: false,
          ignoreNoNeedFold: true
        });
      };
      let r = [];
      for (r.push(n); r.length > 0;) {
        let a = r.shift();
        let d = e.getBlockStructByBlockId(a);
        let s = d && l(d);
        if (s && (a === n || !i.isEqual(o.get(a), s))) {
          o.set(s.id, s);
          let n = e.getBlockStructByBlockId(s.id);
          if (n && n.children[0]) {
            r.push(n.children[0].id);
          }
          if (n && n.nextSibling) {
            r.push(n.nextSibling.id);
          }
        }
      }
      let a = [];
      for (let [e, i] of o) {
        if (i.foldedBy === n) {
          a.push(e);
        }
      }
      return a;
    }
    forceShowFoldedBlockByItself(e) {
      this.handleToggleFold(e, false);
    }
    forceShowAllFoldedBlock() {
      this.findFoldedBlocksByStatus(true).forEach(e => {
        this.forceShowFoldedBlockByItself(e);
      });
    }
    applyFoldedStatus(e, n) {
      let i = this.structService.getBlockStructByBlockId(e);
      if (!i || i.isDataPending()) {
        return;
      }
      let o = i.record;
      if (o.snapshot.folded !== n) {
        this.editorAPI.dataService.applyTransaction(docxEditorConstantsConfig.toggleFold, e => {
          e.replace(o.id, ["folded"], n);
        });
      }
    }
    constructor(e, n, i) {
      var o = this;
      this.editorAPI = e;
      this.eventEmitter = n;
      this.source = i;
      E(this, "id", uuidGeneratorUtil.generateUuid());
      E(this, "foldStateMap", new Map());
      E(this, "foldStatusMap", new Map());
      E(this, "shouldShowBlockPool", new Set());
      E(this, "calculatePool", []);
      E(this, "showPool", new Set());
      E(this, "subs", undefined);
      E(this, "changeReadOnlySignal", new docxEditorCore.SubjectType());
      E(this, "changeReadOnlySignalReciver", this.changeReadOnlySignal);
      E(this, "blockShownSubject", new observableSubjectClass.Subject());
      E(this, "blockShown$", this.blockShownSubject);
      E(this, "isFolded", e => this.foldStatusMap.get(e) === true);
      E(this, "isFoldedOrFoldedBy", e => this.isFolded(e) || !!this.findFoldedByBlock(e));
      E(this, "isShow", e => {
        var n;
        if ((n = this.structService.getBlockStructByBlockId(e)) === null || n === undefined ? undefined : n.isRoot()) {
          return true;
        }
        let i = this.foldStateMap.get(e);
        return (i ? i.show : undefined) === true;
      });
      E(this, "isShowWithStruct", e => {
        if (!this.foldStateMap.get(e.id)) {
          this.handleInit(e, {
            isInit: true
          });
        }
        return this.isShow(e.id);
      });
      E(this, "cacheIgnoreFoldedIds", []);
      E(this, "handleDestroy", (e, n, i, o, l) => {
        if (!l.isInUndoRedo && !l.isInPaste && !l.ignoreFold && l.from !== collaborativeEditingFlowSyncModule.kq.SILENCE && !docxBlockUtils_1.hasParentOfBlockType(e.id, this.structService, docBlockTypeConstants.tableCalloutTypes) && n) {
          this.handleBlockShow({
            topAffectedSib: i,
            midAffectedSib: o,
            btmAffectedSib: e
          });
        }
        _("destroy", e.id, e);
        this.foldStatusMap.delete(e.id);
        this.foldStateMap.delete(e.id);
        this.showPool.delete(e.id);
        this.shouldShowBlockPool.delete(e.id);
        this.calculatePool = this.calculatePool.filter(n => n !== e.id);
        let a = this.calculatePool.indexOf(e.id);
        if (a >= 0) {
          this.calculatePool.splice(a, 1);
        }
      });
      E(this, "handleUpdate", async (e, n) => {
        if (n == null ? undefined : n.isOnlyHandleComment) {
          return;
        }
        _("update", e.id, e);
        if (!this.calculatePool.includes(e.id)) {
          if (!this.foldStatusMap.has(e.id)) {
            this.initFoldStatus(e);
          }
          this.calculatePool.push(e.id);
        }
        let i = n == null ? undefined : n.isMovingBlock;
        let o = (n == null ? undefined : n.isInUndoRedo) || (n == null ? undefined : n.from) === collaborativeEditingFlowSyncModule.kq.SILENCE || docxBlockUtils_1.hasParentOfBlockType(e.id, this.structService, docBlockTypeConstants.tableCalloutTypes);
        let l = true;
        if (n == null ? undefined : n.from) {
          l = syncedReferenceBlockUtils.isChangeFromCurrentEditor(n, this.editorAPI.id);
        }
        let a = i || this.isShow(e.id);
        if (!o && a) {
          this.shouldShowBlockPool.add(e.id);
          await this.debounceUpdate(l);
          this.forceShowFoldedBlock(e.id, this.editorAPI.config.editable);
          this.shouldShowBlockPool.delete(e.id);
        } else {
          await this.debounceUpdate(l);
        }
      });
      E(this, "calculateFoldState", e => {
        let {
          id: n,
          parent: i
        } = e;
        let o = {
          isRoot: e.isRoot(),
          relativeId: this.getRelativeBlockId(n),
          parentId: i == null ? undefined : i.id,
          folded: this.foldStatusMap.get(n)
        };
        return O.calculateFoldState(e, o, this.foldStateMap, e => {
          return this.structService.getBlockStructByBlockId(e)?.depth;
        }, {
          translated: !!this.editorAPI.config.get("translated"),
          ignoreNoNeedFold: false,
          editorAPI: this.editorAPI
        });
      });
      E(this, "doShow", function () {
        let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        let n = [];
        for (let e of o.showPool) {
          let i = o.foldStateMap.get(e);
          n.push(i);
          o.showPool.delete(e);
          if (!o.viewService.hasBlockViewByBlockId(e)) {
            continue;
          }
          let l = o.viewService.getBlockViewByBlockId(e);
          if (l.hostElement) {
            if (i) {
              o.toggleBlockShow(i, l.hostElement);
            }
            o.eventEmitter.dispatch(T, [i], e);
            o.showPool.delete(e);
          }
        }
        if (n.length) {
          o.eventEmitter.addListenerOnce(foldStatusConstants.foldStatusPostView, () => {
            n.forEach(e => {
              if (e && o.isShow(e.id)) {
                o.eventEmitter.dispatch(T, [e], e.id);
              }
            });
          });
          o.eventEmitter.dispatch(foldStatusConstants.foldStatusChangeView, [n, e]);
        }
      });
      E(this, "debounceShow", docxBlockFoldUtils.asyncSingleExec(this.doShow));
      E(this, "getRelativeBlockId", e => {
        let n = this.structService.getBlockStructByBlockId(e);
        let i = n && (n.previousSibling || n.parent);
        if (i == null) {
          return undefined;
        } else {
          return i.id;
        }
      });
      E(this, "toggleBlockShow", (e, n) => !!n && (e.show ? n.classList.remove("block-hidden") : n.classList.add("block-hidden"), true));
      E(this, "reCalculateFoldState", function () {
        let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        _("pool length", o.calculatePool.length);
        let n = [];
        while (o.calculatePool.length > 0) {
          let i = o.calculatePool.shift();
          let l = o.structService.getBlockStructByBlockId(i);
          let r = l && o.calculateFoldState(l);
          if (r && !o.isEqual(o.foldStateMap.get(i), r)) {
            n.push({
              blockId: i,
              isShown: r.show
            });
            o.save(r, e);
            o.checkChildren(r);
            o.checkNext(r);
          }
        }
        o.blockShownSubject.next(n);
      });
      E(this, "debounceUpdate", docxBlockFoldUtils.asyncSingleExec(this.reCalculateFoldState));
      E(this, "handleToggleFold", function (e, n, i = false) {
        let l = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        o.setFoldStatus(e, n);
        o.debounceUpdate(l);
        if (i) {
          o.applyFoldedStatus(e, n);
        }
      });
      E(this, "findFoldedBlocksByStatus", e => {
        let n = [];
        for (let [i, o] of this.foldStatusMap.entries()) {
          if (o === e) {
            n.push(i);
          }
        }
        return n;
      });
      E(this, "handleBlockShow", e => {
        let {
          topAffectedSib: n,
          midAffectedSib: i,
          btmAffectedSib: o
        } = e;
        if (o) {
          this.handleUpdate(o, {
            isMovingBlock: true
          });
        }
        if (i) {
          this.handleUpdate(i, {
            isMovingBlock: true
          });
        }
        if (n) {
          let e = this.findFoldedByBlock(n == null ? undefined : n.id);
          let o = e && this.structService.getBlockStructByBlockId(e);
          if (o && i && i.active && O.isGreaterHeadingLevel(o.type, i.type)) {
            this.handleUpdate(n, {
              isMovingBlock: true
            });
          }
        }
      });
      let {
        structService: a,
        lifecycle: d
      } = e;
      this.subs = [a.mutation$.subscribe(this.handleMutations.bind(this)), d.editorReady$.subscribe(this.handleReady.bind(this))];
      this.eventEmitter.addListener(docxEditorConstantsConfig.toggleFold, this.handleToggleFold);
      docxEditorEventConstantsAndManager.globalEventBus.on(docxEditorConstantsConfig.toggleFold, this.handleToggleFold);
    }
  }
  E(O, "calculateFoldState", function (e, n, i, o) {
    var a;
    let s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      translated: false,
      ignoreNoNeedFold: false
    };
    let {
      id: c,
      type: u = "",
      depth: h
    } = e;
    let {
      isRoot: f,
      relativeId: v,
      parentId: m = docxEditorCore.ZERO_OFFSET,
      folded: S
    } = n;
    let {
      translated: y,
      editorAPI: w,
      ignoreNoNeedFold: I
    } = s;
    if (f || !u) {
      return;
    }
    let B = S;
    if (B && y) {
      B = false;
    }
    if (!I && B && docxBlockFoldUtils.hasParentOfType(e, docBlockTypeConstants.tableCalloutTypes)) {
      B = false;
    }
    if (w && syncedReferenceBlockUtils.isSyncedReferenceBlock(w) && docxBlockFoldUtils.isInSpecialBlock(w)) {
      B = false;
    }
    let b = v ? i.get(v) : undefined;
    let C = (a = b == null ? undefined : b.show) === null || a === undefined || a;
    let E = b == null ? undefined : b.foldedBy;
    if (E) {
      let e = o(E);
      let n = i.get(E);
      if (typeof e == "number" && h <= e) {
        C = (n == null ? undefined : n.show) ?? C;
      }
    }
    _("计算折叠状态", c);
    return O.createFoldState({
      block: e,
      id: c,
      type: u,
      show: C,
      foldStatus: B,
      foldedBy: C ? undefined : E,
      foldedByType: C ? undefined : b == null ? undefined : b.foldedByType,
      parentId: m,
      ignoreNoNeedFold: I,
      closestFolderId: m && i.has(m) ? i.get(m)?.closestFolderId : undefined
    }, b);
  });
  E(O, "createFoldState", (e, n) => {
    if (!n || !e.ignoreNoNeedFold && docxBlockFoldUtils.hasParentOfType(e.block, docBlockTypeConstants.blockTypeConstants.OKR)) {
      return O.initFoldState(e);
    }
    let i = docxBlockValidatorUtils.isHeadingBlock(e.type);
    let o = flowHeadingFoldUtils.parseHeadingLevel(e.type);
    let l = flowHeadingFoldUtils.parseHeadingLevel(n.foldedByType || n.type);
    let r = e.parentId !== n.id;
    if (e.show && r && i && l && o <= l) {
      return O.initFoldState(e);
    } else {
      return O.extendFoldState(e, n);
    }
  });
  require.d(exports, {
    FoldStateManager: function () {
      return O;
    },
    FoldTypeEnum: function () {
      return N;
    }
  });
}