// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fx' to 'applyDeleteRevision'
// - Renamed export 'G' to 'getDeleteRevision'
// - Renamed export 'SG' to 'createDeleteRevisionWithSelection'
// - Renamed export 'cu' to 'adjustSelectionAfterDelete'
// - Renamed export 'iG' to 'processDeleteRevision'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 642450
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var diProviderRevisionBaseService = require("di-provider-revision-base-service") /*id: 951946*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var docxRevisionFeatureCheckers = require("docx-revision-feature-checkers") /*id: 964037*/;
  var editorRevisionSelectionUtils = require("editor-revision-selection-utils") /*id: 421120*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  var snapshotRevisionUtils = require("snapshot-revision-utils") /*id: 696424*/;
  var emptyTextCheck = require("empty-text-check") /*id: 193795*/;
  let I = debugLoggerFactory.createLogger("revision-delete");
  let C = [docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE];
  function P(e, i) {
    let n = {
      revision: null,
      hasCompleteDeletedRevision: false,
      hasCompleteAdditiveRevision: false
    };
    if (!e.config.get("revising")) {
      return n;
    }
    let r = e => {
      return e.userId === userEnvironmentUtils.getUserInfo().userId && (editorRevisionUtilities.isDeleteOp(e.type) || editorRevisionUtilities.isReplaceDeleteOp(e.type, e.details?.subType));
    };
    if (editorRevisionSelectionUtils.findRevisionInSelections(e, i, r, {
      isCompleteWithinSelectionsOnly: true
    })) {
      return {
        ...n,
        hasCompleteDeletedRevision: true
      };
    }
    let s = editorRevisionSelectionUtils.findRevisionInSelections(e, i, e => {
      return e.userId === userEnvironmentUtils.getUserInfo().userId && (editorRevisionUtilities.isAddOp(e.type) || editorRevisionUtilities.isReplaceAddOp(e.type, e.details?.subType));
    }, {
      isCompleteWithinSelectionsOnly: true
    });
    if (s) {
      return {
        ...n,
        revision: s,
        hasCompleteAdditiveRevision: true
      };
    }
    let a = editorRevisionSelectionUtils.findRevisionInBlock(e, i, r);
    if (a) {
      I("inherit delete revision in the selection", a);
      return {
        ...n,
        revision: a
      };
    }
    let c = function (e) {
      let i = arrayFirstElement.getFirstElement(e);
      if (!editorSelectionUtilities.isTextSelectionType(i.type)) {
        return null;
      }
      {
        let {
          selection: e = {
            start: 0,
            end: 0
          }
        } = i;
        if (e.start > 0) {
          return {
            ...i,
            selection: {
              start: e.start - 1,
              end: e.start
            }
          };
        }
      }
    }(i);
    if (c) {
      let i = editorRevisionSelectionUtils.findRevisionInBlock(e, [c], r);
      if (i) {
        I("inherit delete revision before the selection", i);
        return {
          ...n,
          revision: i
        };
      }
    }
    let u = function (e) {
      let i = lastElementHelper.getLastElement(e);
      if (editorSelectionUtilities.isTextSelectionType(i.type)) {
        let {
          selection: e = {
            start: 0,
            end: 0
          }
        } = i;
        return {
          ...i,
          selection: {
            start: e.end,
            end: e.end + 1
          }
        };
      }
      return null;
    }(i);
    if (u) {
      let i = editorRevisionSelectionUtils.findRevisionInBlock(e, [u], r);
      if (i) {
        I("inherit delete revision after the selection", i);
        return {
          ...n,
          revision: i
        };
      }
    }
    let h = e.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId();
    let [p, v] = Object.entries(editorRevisionOperations.createDeleteOperation({
      revisionId: h
    }))[0];
    return {
      ...n,
      revision: [p, v]
    };
  }
  function A(e, i) {
    let {
      isTextSelection: n,
      deletedTextLength: r
    } = i;
    if (n && r) {
      let i = e.getSelection();
      if (i.length !== 1) {
        return;
      }
      let n = arrayFirstElement.getFirstElement(i);
      if (e.isCollapsedTextSelection()) {
        let i = n.selection.start - r;
        e.setSelection([{
          ...n,
          selection: {
            start: i,
            end: i
          }
        }]);
      } else {
        e.setSelection([{
          ...n,
          selection: {
            start: n.selection.start,
            end: n.selection.start
          }
        }]);
      }
    }
  }
  function O(e, i, n, r) {
    let o;
    let l;
    if (!e.config.get("revising") || function (e) {
      if (e.length !== 1) {
        return false;
      }
      let i = e[0];
      if (!C.includes(i.type)) {
        return false;
      }
      if (i.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE) {
        return function (e) {
          let {
            innerBlockManager: i
          } = e.model;
          if (!i) {
            return false;
          }
          let n = i.allBlockViews;
          if (n.length !== 2) {
            return false;
          }
          let r = n.find(e => e.type !== docBlockTypeConstants.blockTypeConstants.PAGE);
          return r && emptyTextCheck.isEmptyTextBlock(r);
        }(i);
      }
      let {
        model: n
      } = i;
      if (n.children.length > 1) {
        return false;
      }
      let r = n.children[0];
      return r && emptyTextCheck.isEmptyTextModel(r);
    }(i)) {
      return [null, null];
    }
    let s = !n.isTextSelectionAcrossBlocks() && !(r == null ? undefined : r.isSingleTextSelection);
    let a = s ? editorRevisionUtilities.getSelectionViews(i.map(e => e.model)) : n.getSelection();
    let c = editorRevisionSelectionUtils.findRevisionInSelections(e, a, e => {
      return e.userId === userEnvironmentUtils.getUserInfo().userId && (editorRevisionUtilities.isAddOp(e.type) || editorRevisionUtilities.isReplaceAddOp(e.type, e.details?.subType));
    }, {
      isCompleteWithinSelectionsOnly: true,
      isCompleteWithTextualParagraph: s
    });
    if (c) {
      I("already has add revision in selections", c);
      return [null, {
        type: editorRevisionUtilities.parseJsonSafe(c[1])?.type || editorRevisionConstants.diffOperationMap.ADD,
        revisionId: editorRevisionUtilities.stripRevIdString(c[0])
      }];
    }
    let p = !!(r == null ? undefined : r.isReplaceRevision);
    o = p ? editorRevisionOperations.createReplaceRevision(e) : editorRevisionOperations.createDeleteRevision(e);
    l = {
      type: p ? editorRevisionConstants.diffOperationMap.REPLACE : editorRevisionConstants.diffOperationMap.DELETE,
      revisionId: o.revisionId
    };
    I("add new deletive revision", o);
    if (!p) {
      let i = e => {
        return e.userId === userEnvironmentUtils.getUserInfo().userId && (editorRevisionUtilities.isDeleteOp(e.type) || editorRevisionUtilities.isReplaceDeleteOp(e.type, e.details?.subType));
      };
      let n = editorRevisionSelectionUtils.findRevisionInSelections(e, a, i);
      if (n) {
        I("already has delete revision in selections", n);
        return [{
          selectedBlocks: a,
          isBlockSelection: s,
          deleteRevision: null
        }, null];
      }
      let r = editorRevisionSelectionUtils.findRevisionInSelections(e, a, i, {
        isCompleteWithinSelectionsOnly: true
      });
      if (r) {
        let e = editorRevisionUtilities.stripRevIdString(r[0]);
        o = editorRevisionOperations.createRevisionObject({
          type: editorRevisionConstants.diffOperationMap.DELETE,
          revisionId: e
        });
        l = {
          type: editorRevisionConstants.diffOperationMap.DELETE,
          revisionId: e
        };
        I("inherit delete revision", o);
      }
    }
    return [{
      selectedBlocks: a,
      isBlockSelection: s,
      deleteRevision: o
    }, l];
  }
  function B(e, i, n, o) {
    let {
      isBlockSelection: l,
      deleteRevision: d,
      selectedBlocks: u
    } = n;
    if (!d) {
      return;
    }
    let f = !!(o == null ? undefined : o.useTextApply);
    u.forEach(n => {
      let {
        id: o,
        type: g
      } = n;
      let b = e.getBlockViewByBlockIdNotCheck(o);
      if (!!b && !docBlockTypeConstants.selectionViewTypes.includes(b.type)) {
        if (editorTextBlockUtilities.isEditorInstance(b)) {
          let {
            model: e
          } = b;
          let o = editorRevisionUtilities.getSelectionRange(b, n);
          let h = editorRevisionUtilities.formatRevisionId(d.revisionId);
          let k = editorRevisionUtilities.stringifyRevOmitId(d);
          let E = new contentStructureDelta.ContentDelta({
            zoneId: e.zoneId
          });
          E.retain(o.start);
          E.retain(o.end - o.start, {
            [h]: k
          });
          if (f) {
            e.apply(E, {
              extra: {
                op: i
              }
            });
          } else {
            let n = e.zoneState.applyDeltaWithClone(E).toAttributeText();
            flowSyncDeltaOperations.editWithLineManager(i, e.record, n);
          }
          let T = o.end === editorTextBlockUtilities.getModelTextWithoutTrailing(e.zoneState).length;
          let I = l || g === editorTypeConstants.blockTypes.BLOCK;
          if (I || T && e.next && u.some(i => {
            return i.id === e.next?.id;
          })) {
            let n = {
              isParagraph: true
            };
            if (docxRevisionFeatureCheckers.isRevisionCardEnabled()) {
              n.isBlock = I;
            }
            let r = throttledDeepCloneUtil.throttledDeepClone(deepCloneWrapper_1.deepClone(d), {
              details: n
            });
            snapshotRevisionUtils.upsertRevision(i, e.record, r);
          }
        } else {
          snapshotRevisionUtils.upsertRevision(i, b.record, d);
        }
      }
    });
  }
  function x(e, i, n) {
    let {
      selectedBlocks: r,
      isBlockSelection: l
    } = n;
    let s = arrayFirstElement.getFirstElement(r);
    if (!s) {
      i.removeAllSelection();
      return;
    }
    let a = e.getBlockViewByBlockIdNotCheck(s.id);
    if (a && editorTextBlockUtilities.isEditorInstance(a)) {
      let {
        start: e
      } = editorRevisionUtilities.getSelectionRange(a, s);
      if (!l) {
        a.editor.setPreventUpdateDomSelection(true);
      }
      i.setSelection([{
        id: a.id,
        type: editorTypeConstants.blockTypes.TEXT,
        selection: {
          start: e,
          end: e
        }
      }]);
      if (!l) {
        a.editor.setPreventUpdateDomSelection(false);
      }
    } else {
      i.removeAllSelection();
    }
  }
  require.d(exports, {
    applyDeleteRevision: function () {
      return x;
    },
    getDeleteRevision: function () {
      return P;
    },
    createDeleteRevisionWithSelection: function () {
      return B;
    },
    adjustSelectionAfterDelete: function () {
      return A;
    },
    processDeleteRevision: function () {
      return O;
    }
  });
}