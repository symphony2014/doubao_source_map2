// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'getActionType'
// - Renamed export 'Z' to 'OrderedListSequenceManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 225567
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var docListOpsHandler = require("doc-list-ops-handler") /*id: 691963*/;
  var orderedListSequenceUpdateHandler = require("ordered-list-sequence-update-handler") /*id: 34474*/;
  var editorActionConstants = require("editor-action-constants") /*id: 216889*/;
  var orderedBlockUtils = require("ordered-block-utils") /*id: 5008*/;
  let p = (e, i) => {
    let r = e.action[i];
    if (typeof r == "string") {
      return r;
    } else if (isObjectOrFunction_1_1.isObjectOrFunction(r)) {
      return r.type;
    } else {
      return "";
    }
  };
  let m = (e, i, r) => {
    var n;
    let o = e.action[i];
    return ((n = r.getRecord(o)) === null || n === undefined ? undefined : n.snapshot.type) || "";
  };
  class v extends editorContextFacade.EditorContextFacade {
    getEffect() {
      return () => {
        reactCoreLibraryReexport.useEffect(() => {
          let e;
          let i = this.blockManager.dataService.change$.subscribe(i => {
            let {
              recordOps: r
            } = i;
            let n = r.filter(e => !!e.ops.find(e => this.isModifySeq(e) || this.isTurnInto(e, docBlockTypeConstants.blockTypeConstants.ORDERED)));
            let o = r.filter(e => !!e.ops.find(e => this.isInsert(e, docBlockTypeConstants.blockTypeConstants.ORDERED)));
            e = requestAnimationFrame(() => {
              n.forEach(e => {
                let {
                  id: i
                } = e;
                let r = this.blockManager.getBlockIdsByRecordId(i)[0];
                if (r) {
                  this.renumberOList(r);
                }
              });
              o.forEach(e => {
                this.handleInsert(e);
              });
            });
          });
          return () => {
            i.unsubscribe();
            if (e) {
              window.cancelAnimationFrame(e);
            }
          };
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          let e = this.blockManager.editorAPI.dataService.change$.subscribe(e => {
            let {
              recordOps: i
            } = e;
            i.filter(e => !!e.ops.find(e => this.isRemove(e, docBlockTypeConstants.blockTypeConstants.ORDERED))).forEach(e => {
              this.handleRemove(e);
            });
          });
          return () => {
            e.unsubscribe();
          };
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          let e = this.blockManager.editorAPI.dataService.change$.subscribe(e => {
            let {
              recordOps: o,
              options: l
            } = e;
            if (l.from === collaborativeEditingFlowSyncModule.kq.LOCAL && !changeSourceValidators.isUndoRedoSource(l) && l.extra?.editorId === this.blockManager.editorAPI.id && !l.extra?.isRevisionChange) {
              let e = this.getRecordOpsContext(o, l);
              if (!e) {
                return;
              }
              this.batchModifySeqIfNecessary(e);
            }
          });
          return () => {
            e.unsubscribe();
          };
        }, []);
      };
    }
    isTurnInto(e, i) {
      if (!collaborativeEditingFlowSyncModule.transformOperations(e)) {
        return false;
      }
      let r = p(e, "od");
      let o = p(e, "oi");
      return r !== o && [o, r].includes(i);
    }
    isModifySeq(e) {
      return e.p[0] === "seq";
    }
    isInsert(e, i) {
      return !!collaborativeEditingFlowSyncModule.$b(e) && e.p[0] === "children" && m(e, "li", this.blockManager) === i;
    }
    isRemove(e, i) {
      return !!collaborativeEditingFlowSyncModule.isDeleteOperation(e) && e.p[0] === "children" && m(e, "ld", this.blockManager) === i;
    }
    getRecordOpsContext(e, i) {
      let r = changeSourceValidators.isPasteSource(i);
      let n = e.filter(e => this.isInsertRecordOp(e));
      let o = e.filter(e => this.isRemoveRecordOp(e));
      if (r) {
        return {
          recordOps: e,
          recordOpsType: editorActionConstants.operationTypes.PASTE,
          targetRecordOps: [...n, ...o],
          targetRecordOpTypes: [...Array(n.length).fill(editorActionConstants.actionTypes.INSERT), ...Array(o.length).fill(editorActionConstants.actionTypes.REMOVE)]
        };
      }
      let l = e.filter(e => this.isTurnintoRecordOp(e));
      if (l.length) {
        let i = l.map(e => this.getTurnintoRecordOpType(e));
        return {
          recordOps: e,
          recordOpsType: editorActionConstants.operationTypes.TURNINTO,
          targetRecordOps: l,
          targetRecordOpTypes: i
        };
      }
      if (n.length && o.length) {
        let i = docListOpsHandler.flattenInsertOps(n).filter(e => this.isInsert(e, docBlockTypeConstants.blockTypeConstants.ORDERED));
        let r = docListOpsHandler.flattenRemoveOps(o).filter(e => this.isRemove(e, docBlockTypeConstants.blockTypeConstants.ORDERED));
        if (i.length === r.length) {
          r.forEach(e => {
            let r = e.action.ld;
            if (!i.find(e => e.action.li === r)) {
              return null;
            }
          });
          return {
            recordOps: e,
            recordOpsType: editorActionConstants.operationTypes.MOVE,
            targetRecordOps: [...n, ...o],
            targetRecordOpTypes: [...Array(n.length).fill(editorActionConstants.actionTypes.INSERT), ...Array(o.length).fill(editorActionConstants.actionTypes.REMOVE)]
          };
        }
      } else if (n.length === 1) {
        return {
          recordOps: e,
          recordOpsType: editorActionConstants.operationTypes.INSERT,
          targetRecordOps: n,
          targetRecordOpTypes: [editorActionConstants.actionTypes.INSERT]
        };
      } else if (o.length === 1) {
        return {
          recordOps: e,
          recordOpsType: editorActionConstants.operationTypes.REMOVE,
          targetRecordOps: o,
          targetRecordOpTypes: [editorActionConstants.actionTypes.REMOVE]
        };
      }
      return null;
    }
    isTurnintoRecordOp(e) {
      let {
        ops: i
      } = e;
      return i.find(e => this.isTurnInto(e, docBlockTypeConstants.blockTypeConstants.ORDERED));
    }
    isInsertRecordOp(e) {
      let {
        ops: i
      } = e;
      return i.find(e => this.isInsert(e, docBlockTypeConstants.blockTypeConstants.ORDERED));
    }
    isRemoveRecordOp(e) {
      let {
        ops: i
      } = e;
      return i.find(e => this.isRemove(e, docBlockTypeConstants.blockTypeConstants.ORDERED));
    }
    getTurnintoRecordOpType(e) {
      let {
        ops: i
      } = e;
      if (p(i.find(e => this.isTurnInto(e, docBlockTypeConstants.blockTypeConstants.ORDERED)), "oi") === docBlockTypeConstants.blockTypeConstants.ORDERED) {
        return editorActionConstants.actionTypes.TURNINTO_INSERT;
      } else {
        return editorActionConstants.actionTypes.TURNINTO_REMOVE;
      }
    }
    batchModifySeqIfNecessary(e) {
      let {
        recordOpsType: i,
        targetRecordOps: r,
        targetRecordOpTypes: o
      } = e;
      let l = new Map();
      switch (i) {
        case editorActionConstants.operationTypes.TURNINTO:
          l = orderedListSequenceUpdateHandler.handleTurnIntoOps(this.blockManager, r, o);
          break;
        case editorActionConstants.operationTypes.MOVE:
          l = orderedListSequenceUpdateHandler.handleMoveOps(this.blockManager, r, o);
          break;
        case editorActionConstants.operationTypes.INSERT:
          {
            let e = r[0];
            let i = docListOpsHandler.checkHeaderMerge(this.blockManager, e);
            l = orderedListSequenceUpdateHandler.handleInsertOps(this.blockManager, e, i);
            break;
          }
        case editorActionConstants.operationTypes.REMOVE:
          {
            let e = r[0];
            l = orderedListSequenceUpdateHandler.handleRemoveOps(this.blockManager, e);
            break;
          }
        case editorActionConstants.operationTypes.PASTE:
          l = orderedListSequenceUpdateHandler.handleInsertRemoveOps(this.blockManager, r, o);
      }
      if (l.size) {
        Promise.resolve().then(() => {
          this.blockManager.applyTransaction(`ordered:${i}:modifySeq`, e => {
            l.forEach((i, r) => {
              var o;
              let l = this.blockManager.getRecordByBlockId(r)?.id;
              if (l && ((o = this.blockManager.getRecord(l)) === null || o === undefined ? undefined : o.get(["seq"])) !== i) {
                e.replace(l, ["seq"], i);
              }
            });
          }, {
            mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
          });
        });
      }
    }
    renumberOList(e) {
      let i = this.blockManager.getBlockStructByBlockId(e);
      if (!i) {
        return;
      }
      let r = i.nextSibling;
      let n = r && orderedBlockUtils.isOrderedBlock(r) && orderedBlockUtils.hasNoSequence(r);
      let o = [];
      o = n ? orderedBlockUtils.getUnorderedBlocks(this.blockManager, e, orderedBlockConstants.OrderDirection.DOWN) : orderedBlockUtils.getOrderedBlocks(this.blockManager, e, orderedBlockConstants.OrderDirection.DOWN);
      this.blockManager.dispatch(orderedBlockConstants.orderUpdateAction, [e], e);
      for (let i of o) {
        this.blockManager.dispatch(orderedBlockConstants.orderUpdateAction, [i.blockId], i.blockId);
      }
    }
    handleRemove(e) {
      let {
        orderedBlockIds: i
      } = docListOpsHandler.getRemoveOpInfo(this.blockManager, e);
      i.forEach(e => {
        this.renumberOList(e);
      });
    }
    handleInsert(e) {
      let {
        orderedBlockIds: i
      } = docListOpsHandler.getInsertOpInfo(this.blockManager, e);
      i.forEach(e => {
        this.renumberOList(e);
      });
    }
  }
  require.d(exports, {
    getActionType: function () {
      return p;
    },
    OrderedListSequenceManager: function () {
      return v;
    }
  });
}