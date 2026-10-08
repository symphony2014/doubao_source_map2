// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'RenderEnvEnum'
// - Renamed export 'Z' to 'OrderedBlockManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 107278
         */
module.exports = function (module, exports, require) {
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var structureQueryToken = require("structure-query-token") /*id: 763917*/;
  var flowHeadingFoldUtils = require("flow-heading-fold-utils") /*id: 451530*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var orderedListSequenceManager = require("ordered-list-sequence-manager") /*id: 225567*/;
  var docListOpsHandler = require("doc-list-ops-handler") /*id: 691963*/;
  var editorActionConstants = require("editor-action-constants") /*id: 216889*/;
  var orderedBlockUtils = require("ordered-block-utils") /*id: 5008*/;
  function E(e, i, r) {
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
  (n = {}).SSR = "SSR";
  n.PDF = "PDF";
  n.PREVIEW = "PREVIEW";
  n.SHORTCUT = "SHORTCUT";
  n.HISTORY = "HISTORY";
  n.NORMAL = "NORMAL";
  let C = n;
  exports.OrderedBlockManager = class {
    syncUpdateView() {
      if (this.pendingSet.size !== 0) {
        this.asyncUpdateView.cancel();
        this.udpateView();
      }
    }
    get layoutManager() {
      return this.blockManager.layoutManager;
    }
    get dataService() {
      return this.blockManager.dataService;
    }
    init() {
      let {
        editorAPI: e
      } = this.blockManager;
      this.subs = [this.dataService.interceptChange$.subscribe(this.handleBeforeRecordChange), this.dataService.change$.subscribe(this.handleAfterRecordChange), e.lifecycle.editorReady$.subscribe(this.handleBlockTreeInited), e.structService.mutation$.subscribe(this.handleMutations)];
      this.blockManager.addListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
    }
    destroy() {
      this.subs.forEach(e => e == null ? undefined : e.unsubscribe());
      this.asyncUpdateView.cancel();
      this.blockManager.removeListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
    }
    getEnv() {
      return this.env;
    }
    getOrder(e) {
      return this.orderMap.get(e);
    }
    initOrderFromClientvars(e, i) {
      let r = [];
      this.initContainer(i);
      this.traverse(e, i, n => {
        if (this.matchType(n.data.type) && this.isValidSeq(n.data.seq) && n.id !== i) {
          let e = {
            recordId: n.id,
            blockType: n.data.type,
            seq: n.data.seq,
            seqLevel: n.data.seq_level || "auto",
            isDeleted: false,
            isCopy: false
          };
          r.push(e);
        }
        return !this.containerType.includes(n.data.type) || n.id === i || (this.initOrderFromClientvars(e, n.id), false);
      });
      let n = this.calOrderQueue(r);
      this.calcOrder(n);
    }
    isValidSeq(e) {
      return orderedBlockUtils.isValidSequence(e);
    }
    updateOrder(e, i) {
      this.orderMap.set(e, i);
      this.pendingSet.add(e);
      this.syncUpdateView();
    }
    udpateView() {
      reactDomEntryWrapper.unstable_batchedUpdates(() => {
        [...this.pendingSet].forEach(e => {
          let i = this.blockManager.getBlockIdsByRecordId(e)[0];
          if (this.layoutManager.isBlockActive(i)) {
            this.pendingSet.delete(e);
            try {
              this.forceUpdate(e);
            } catch (e) {}
          }
        });
      });
    }
    traverse(e, i, r) {
      let {
        block_map: n
      } = e;
      let o = n[i];
      if (!o || !r(o)) {
        return;
      }
      let {
        children: l
      } = o.data;
      if (o.data.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
        l = docxTableLayoutUtils.getCellRecordIds(o.data);
      }
      if (l != null) {
        l.forEach(i => this.traverse(e, i, r));
      }
    }
    collectMathedBlockIds(e, i) {
      this.blockManager.editorAPI.getService(structureQueryToken.structureQueryToken).traverseRecord(e, e => {
        this.blockManager.getBlockIdsByRecordId(e.id).forEach(e => {
          if (!this.blockManager.hasBlockStructByBlockId(e)) {
            return;
          }
          let r = this.blockManager.getBlockStructByBlockId(e);
          if (r && this.match(r)) {
            i.add(e);
          }
        });
        return true;
      });
    }
    getRemoveBlockIds(e) {
      let {
        ops: i
      } = e;
      return i.reduce((e, i) => {
        if (collaborativeEditingFlowSyncModule.isDeleteOperation(i) && i.p[0] === "children" && typeof i.action.ld == "string") {
          this.collectMathedBlockIds(i.action.ld, e);
        }
        return e;
      }, new Set());
    }
    isTurnInto(e) {
      if (!collaborativeEditingFlowSyncModule.transformOperations(e)) {
        return false;
      }
      let i = orderedListSequenceManager.getActionType(e, "od");
      let r = orderedListSequenceManager.getActionType(e, "oi");
      return i !== r && [r, i].some(e => this.blockTypes.includes(e));
    }
    isModifySeq(e) {
      return e.p[0] === "seq" || e.p[0] === "seq_level";
    }
    isInsertRecordOp(e) {
      let {
        ops: i
      } = e;
      return i.find(e => this.isInsert(e, "heading"));
    }
    isRemoveRecordOp(e) {
      let {
        ops: i
      } = e;
      return i.find(e => this.isRemove(e, "heading"));
    }
    isInsertOpWithHeadingChild(e) {
      let {
        ops: i
      } = e;
      return i.find(e => {
        if (!collaborativeEditingFlowSyncModule.$b(e) || e.p[0] !== "children") {
          return false;
        }
        let i = e.action.li;
        let r = this.blockManager.getRecord(i);
        if (r) {
          var n;
          var o;
          if ((o = r.snapshot) === null || o === undefined) {
            return undefined;
          } else if ((n = o.children) === null || n === undefined) {
            return undefined;
          } else {
            return n.some(e => {
              let i = this.blockManager.getBlockStructsByRecordId(e)[0];
              return i && this.match(i);
            });
          }
        }
        return false;
      });
    }
    isInsert(e, i) {
      let r = collaborativeEditingFlowSyncModule.$b(e);
      let n = collaborativeEditingFlowSyncModule.isCreateOperation(e);
      if (!r && !n) {
        return false;
      }
      if (r) {
        return e.p[0] === "children" && this.getTypeByOp(e, "li", this.blockManager).includes(i);
      }
      if (n) {
        var s;
        let r = e == null ? undefined : e.action?.oi;
        if (e.p.length === 0 && r) {
          if ((s = r.children) === null || s === undefined) {
            return undefined;
          } else {
            return s.some(e => {
              var r;
              if ((r = this.blockManager.getRecord(e)) === null || r === undefined) {
                return undefined;
              } else {
                return r.snapshot.type.includes(i);
              }
            });
          }
        }
      }
      return false;
    }
    isRemove(e, i) {
      return !!collaborativeEditingFlowSyncModule.isDeleteOperation(e) && e.p[0] === "children" && this.getTypeByOp(e, "ld", this.blockManager).includes(i);
    }
    constructor({
      blockManager: e,
      eventEmitter: i,
      selectionAPI: r,
      env: n
    }) {
      E(this, "subs", []);
      E(this, "blockManager", undefined);
      E(this, "eventEmitter", undefined);
      E(this, "selectionAPI", undefined);
      E(this, "orderMap", new Map());
      E(this, "pendingSet", new Set());
      E(this, "env", undefined);
      E(this, "blockTreeInited", false);
      E(this, "isDataReady", false);
      E(this, "SHOULD_NOT_SKIP_TRANSACTIONS", [docxEditorCore.REPLACE_PENDING]);
      E(this, "asyncUpdateView", debounceUtil_1_1.debounce(() => {
        if (this.isDataReady && this.pendingSet.size !== 0) {
          this.udpateView();
        }
      }, 0));
      E(this, "blockTypes", undefined);
      E(this, "containerType", undefined);
      E(this, "handleBufferChanged", () => {
        this.asyncUpdateView();
      });
      E(this, "handleMutations", e => {
        let {
          mutations: i
        } = e;
        if (this.env !== C.SSR && this.env !== C.SHORTCUT) {
          for (let {
            block: e
          } of i.added) {
            this.handleInsert(e);
          }
          for (let {
            block: e,
            originalType: r
          } of i.updated) {
            if (r) {
              this.handleInsert(e);
            }
          }
        }
      });
      E(this, "handleBlockTreeInited", () => {
        var e;
        this.blockTreeInited = true;
        if (this.env === C.SSR || this.env === C.SHORTCUT) {
          return;
        }
        let {
          structService: i
        } = this.blockManager;
        if ((e = i.root) !== null && e !== undefined) {
          e.traverse(e => {
            this.handleInsert(e);
          });
        }
      });
      E(this, "handleBeforeRecordChange", e => {
        if (!this.blockTreeInited) {
          return;
        }
        let {
          options: i
        } = e;
        let r = i.from;
        let n = changeSourceValidators.isUndoRedoSource(i);
        let o = changeSourceValidators.isPasteSource(i);
        let {
          transactionName: l
        } = e.options;
        let s = r !== "remote" && !o && !orderedBlockConstants.orderedCommands.includes(l || "") && !n;
        let {
          recordOps: a
        } = e;
        a.forEach(e => {
          this.getRemoveBlockIds(e).forEach(e => {
            let i = this.blockManager.getBlockStructByBlockId(e);
            if (i) {
              this.handleRemove(i, undefined, s);
            }
          });
        });
      });
      E(this, "handleAfterRecordChange", e => {
        if (this.blockTreeInited) {
          try {
            var i;
            let {
              recordOps: r,
              options: n
            } = e;
            let o = n.from === collaborativeEditingFlowSyncModule.kq.REMOTE;
            let s = !o;
            let a = changeSourceValidators.isUndoRedoSource(n);
            let c = changeSourceValidators.isPasteSource(n);
            let d = r.filter(e => this.isInsertRecordOp(e));
            let u = r.filter(e => this.isRemoveRecordOp(e));
            let f = r.filter(e => this.isInsertOpWithHeadingChild(e));
            if (c && (d.length > 0 || u.length > 0) && s && !a) {
              let e = {
                recordOps: r,
                recordOpsType: editorActionConstants.operationTypes.PASTE,
                targetRecordOps: [...d, ...u],
                targetRecordOpTypes: [...Array(d.length).fill(editorActionConstants.actionTypes.INSERT), ...Array(u.length).fill(editorActionConstants.actionTypes.REMOVE)]
              };
              this.batchModifySeqIfNecessary(e);
            } else if (d.length && u.length && s && !a && !((i = n.transactionName) === null || i === undefined ? undefined : i.includes("tab"))) {
              let e = docListOpsHandler.flattenInsertOps(d).filter(e => this.isInsert(e, "heading"));
              let i = docListOpsHandler.flattenRemoveOps(u).filter(e => this.isRemove(e, "heading"));
              if (e.length === i.length) {
                i.forEach(i => {
                  let r = i.action.ld;
                  if (!e.find(e => e.action.li === r)) {
                    return null;
                  }
                });
                let n = {
                  recordOps: r,
                  recordOpsType: editorActionConstants.operationTypes.MOVE,
                  targetRecordOps: [...d, ...u],
                  targetRecordOpTypes: [...Array(d.length).fill(editorActionConstants.actionTypes.INSERT), ...Array(u.length).fill(editorActionConstants.actionTypes.REMOVE)]
                };
                this.batchModifySeqIfNecessary(n);
              } else if (this.blockManager.config.get("translatedWithOriginal") && e.length > i.length) {
                let e = {
                  recordOps: r,
                  recordOpsType: editorActionConstants.operationTypes.INSERT,
                  targetRecordOps: d,
                  targetRecordOpTypes: [editorActionConstants.actionTypes.INSERT]
                };
                this.batchModifySeqIfNecessary(e);
              }
            } else if (d.length > 0 && s) {
              let e = {
                recordOps: r,
                recordOpsType: editorActionConstants.operationTypes.INSERT,
                targetRecordOps: d,
                targetRecordOpTypes: [editorActionConstants.actionTypes.INSERT]
              };
              this.batchModifySeqIfNecessary(e);
            } else if (f.length > 0 && s && !a) {
              let e = {
                recordOps: r,
                recordOpsType: editorActionConstants.operationTypes.INSERT,
                targetRecordOps: f,
                targetRecordOpTypes: [editorActionConstants.actionTypes.INSERT]
              };
              this.batchModifySeqIfNecessary(e);
            } else if (u.length > 0 && s && !a) {
              let e = {
                recordOps: r,
                recordOpsType: editorActionConstants.operationTypes.REMOVE,
                targetRecordOps: u,
                targetRecordOpTypes: [editorActionConstants.actionTypes.REMOVE]
              };
              this.batchModifySeqIfNecessary(e);
            } else if ((a || o) && d.length > 0) {
              flowHeadingFoldUtils.getInsertOps(this.blockManager, r, true).forEach(e => {
                let i = this.blockManager.getBlockStructsByRecordId(e)[0];
                this.handleInsert(i);
              });
            } else {
              r.forEach(e => {
                let i = this.blockManager.getBlockStructsByRecordId(e.id)[0];
                if (!i) {
                  return;
                }
                let r = i.record.get(["seq"]);
                let o = e.ops.find(e => this.isModifySeq(e));
                if (o) {
                  if (this.match(i)) {
                    if (n.transactionName === "turninto") {
                      let i = {
                        recordOps: [e],
                        recordOpsType: editorActionConstants.operationTypes.MARKDOWN,
                        targetRecordOps: [],
                        targetRecordOpTypes: [],
                        shouldCollab: s
                      };
                      this.batchModifySeqIfNecessary(i);
                    } else {
                      this.handleInsert(i);
                    }
                  } else {
                    this.handleRemove(i, undefined, s);
                    if (collaborativeEditingFlowSyncModule.transformOperations(o) || collaborativeEditingFlowSyncModule.isListDeleteOperation(o)) {
                      r = o.action.od;
                    }
                  }
                }
                let a = e.ops.find(e => this.isTurnInto(e));
                if (a) {
                  let e = orderedListSequenceManager.getActionType(a, "od");
                  if (this.matchType(e) && this.isValidSeq(r)) {
                    this.handleRemove(i, e, s);
                  }
                  if (this.match(i)) {
                    this.handleInsert(i);
                  }
                }
              });
            }
          } catch (e) {
            this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
              action: "docx_heading_after_record_change_error",
              info: docxEditorBlockMetadataUtils.serializeError(e)
            });
          }
        }
      });
      E(this, "getTypeByOp", (e, i, r) => {
        var n;
        let o = e.action[i];
        return ((n = r.getRecord(o)) === null || n === undefined ? undefined : n.snapshot.type) || "";
      });
      this.blockManager = e;
      this.eventEmitter = i;
      this.selectionAPI = r;
      this.env = n || C.NORMAL;
      let a = window.location.hash.slice(1).length > 0;
      this.isDataReady = [C.SSR, C.SHORTCUT, C.PREVIEW, C.PDF].includes(this.env) || !a;
    }
  };
  require.d(exports, {
    RenderEnvEnum: function () {
      return C;
    }
  });
}