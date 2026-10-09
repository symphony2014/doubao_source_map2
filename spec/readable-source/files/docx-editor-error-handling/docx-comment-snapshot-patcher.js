// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'collaborativeEditingFlowSyncModule'
// - Resolved require(756448) to 'collaborative-editing-flow-sync-module'
// - Renamed variable 'o' to 'isNullCheck'
// - Resolved require(36126) to 'is-null-check'
// - Renamed variable 'l' to 'flowSyncDeltaOperations'
// - Resolved require(539974) to 'flow-sync-delta-operations'
// - Renamed variable 's' to 'docxEventCollector'
// - Resolved require(477626) to 'docx-event-collector'
// - Renamed variable 'a' to 'docxEditorBlockMetadataUtils'
// - Resolved require(501598) to 'docx-editor-block-metadata-utils'
// - Renamed variable 'c' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Renamed variable 'd' to 'undoRedoEvents'
// - Resolved require(266127) to 'undo-redo-events'
// - Renamed variable 'u' to 'docxCommentConstants'
// - Resolved require(580976) to 'docx-comment-constants'
// - Renamed variable 'h' to 'docxCommentUtils'
// - Resolved require(668699) to 'docx-comment-utils'
// - Updated imported property 'ur' to 'undoRedoEvents' (module 266127)
// - Updated imported property 'JR' to 'getCommentIdsFromApool' (module 668699)
// - Updated imported property 'qP' to 'getCommentDiffSets' (module 668699)
// - Updated imported property 'ZP' to 'docEventCollector' (module 477626)
// - Updated imported property 'hL' to 'commentActionEvents' (module 580976)
// - Updated imported property 'Z' to 'serializeError' (module 501598)
// - Updated imported property 'Z' to 'isNull' (module 36126)
// - Updated imported property 'sZ' to 'isEasysyncSubtype' (module 539974)
// - Updated imported property 'E9' to 'transformOperations' (module 756448)
// - Updated imported property 'XM' to 'isCreateOperation' (module 756448)
// - Updated imported property 'k$' to 'hasTextWithApoolSimple' (module 469443)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 449931
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var undoRedoEvents = require("undo-redo-events") /*id: 266127*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  function f(e, i, r) {
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
  class g {
    init() {
      this.pageEventEmitter.on(undoRedoEvents.undoRedoEvents.BEFORE_UNDO_REDO, this.handleUndoRedo);
      this.sub = this.blockManager.editorAPI.dataService.interceptChange$.subscribe(this.handleTransaction);
    }
    destroy() {
      this.pageEventEmitter.off(undoRedoEvents.undoRedoEvents.BEFORE_UNDO_REDO, this.handleUndoRedo);
      this.sub.unsubscribe();
    }
    constructor(e) {
      f(this, "pageEventEmitter", undefined);
      f(this, "blockManager", undefined);
      f(this, "sub", undefined);
      f(this, "getCommentsByRecordId", undefined);
      f(this, "handleUndoRedo", (e, i) => {
        this.handleTransaction({
          options: {
            from: collaborativeEditingFlowSyncModule.kq.LOCAL,
            transactionName: "undo/redo",
            transactionFrame: 0
          },
          recordOps: e,
          op: i
        });
      });
      f(this, "handleEasysyncTransaction", (e, i) => {
        try {
          let {
            record: r,
            id: n
          } = i;
          let o = r.snapshot;
          let l = docxCommentUtils.getCommentIdsFromApool(o.text);
          let s = this.getCommentsByRecordId ? this.getCommentsByRecordId(n) : new Set(e.get(n).snapshot.comments);
          this.diffAndPatchTextCommentChange(n, e, o, s || new Set(), l);
        } catch (e) {
          docxEventCollector.docEventCollector(docxCommentConstants.commentActionEvents.exception, {
            ...docxEditorBlockMetadataUtils.serializeError(e),
            msg: "handleEasysyncTransaction failed"
          });
        }
      });
      f(this, "diffAndPatchTextCommentChange", (e, i, r, n, l) => {
        let s = r.text.initialAttributedTexts.text["0"].length === 0;
        let {
          deletedSet: a,
          addedSet: c
        } = docxCommentUtils.getCommentDiffSets(n, l);
        if (a.size === 0 && c.size === 0) {
          return;
        }
        let d = isNullCheck.isNull(r.comments);
        let u = r.comments || [];
        if (s) {
          u.forEach(e => a.add(e));
        }
        let f = [];
        a.forEach(e => {
          let i = u.indexOf(e);
          if (i !== -1) {
            f.push(i);
          }
        });
        f.sort((e, i) => i - e);
        if (d) {
          i.replace(e, ["comments"], Array.from(c));
          return;
        }
        f.forEach(r => {
          i.remove(e, ["comments", r]);
        });
        c.forEach(r => {
          if (u.indexOf(r) === -1) {
            i.insert(e, ["comments", 0], r);
          }
        });
      });
      f(this, "handleTransaction", e => {
        let {
          options: i,
          recordOps: r,
          op: o
        } = e;
        if (i.from === collaborativeEditingFlowSyncModule.kq.LOCAL && (!i.extra || !i.extra.skipCommentHandleTransaction)) {
          r.forEach(e => {
            for (let i of e.ops) {
              if (i.p[0] === "comments") {
                return;
              }
              if (flowSyncDeltaOperations.isEasysyncSubtype(i)) {
                this.handleEasysyncTransaction(o, e);
                return;
              }
            }
            e.ops.forEach(i => {
              if (collaborativeEditingFlowSyncModule.transformOperations(i)) {
                let r = i.p[0] === "text";
                let n = i.p.length === 0 && editorTextBlockUtilities.hasTextWithApoolSimple(e.record.snapshot);
                if (r || n) {
                  this.diffAndPatchTextCommentChange(e.id, o, e.record.snapshot, docxCommentUtils.getCommentIdsFromApool(r ? i.action.od : i.action.od.text), docxCommentUtils.getCommentIdsFromApool(r ? i.action.oi : i.action.oi.text));
                }
              } else if (collaborativeEditingFlowSyncModule.isCreateOperation(i) && i.p.length === 0 && i.action.oi) {
                let r = i.action.oi;
                if (!r.text) {
                  return;
                }
                let n = Array.from(docxCommentUtils.getCommentIdsFromApool(r.text));
                if (n.length === 0) {
                  return;
                }
                if (r.comments === undefined) {
                  o.insert(e.id, ["comments"], n);
                } else {
                  o.replace(e.id, ["comments"], n);
                }
              }
            });
          });
        }
      });
      this.pageEventEmitter = e.pageEventEmitter;
      this.blockManager = e.blockManager;
      this.getCommentsByRecordId = e.getCommentsByRecordId;
    }
  }
  require.r(exports);
  require.d(exports, {
    CommentSnapshotPatcher: function () {
      return g;
    }
  });
}