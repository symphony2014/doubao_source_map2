// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'deepCloneWrapper_1'
// - Resolved require(391722) to 'deep-clone-wrapper_1'
// - Renamed variable 'l' to 'documentBlockOperations'
// - Resolved require(139630) to 'document-block-operations'
// - Renamed variable 'o' to 'docBlockTreeUtils'
// - Resolved require(772264) to 'doc-block-tree-utils'
// - Renamed variable 'i' to 'treeNodeMoveUtil'
// - Resolved require(497145) to 'tree-node-move-util'
// - Renamed variable 'd' to 'docxBlockSelectionHandler_1'
// - Resolved require(801350) to 'docx-block-selection-handler_1'
// - Renamed variable 'u' to 'editorSelectionUtilities'
// - Resolved require(913651) to 'editor-selection-utilities'
// - Renamed variable 'a' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'f' to 'insertBlockWithChildSnapshotHelper'
// - Resolved require(554298) to 'insert-block-with-child-snapshot-helper'
// - Renamed variable 's' to 'flowHeadingFoldUtils'
// - Resolved require(451530) to 'flow-heading-fold-utils'
// - Renamed variable 'p' to 'docBlockSelectionUtils'
// - Resolved require(906257) to 'doc-block-selection-utils'
// - Renamed variable 'h' to 'docBlockEmojiConstants'
// - Resolved require(664589) to 'doc-block-emoji-constants'
// - Renamed variable 'y' to 'calloutEmojiUtils'
// - Resolved require(247313) to 'callout-emoji-utils'
// - Renamed variable 'E' to 'calloutBlockUtils'
// - Resolved require(662420) to 'callout-block-utils'
// - Renamed variable 'O' to 'calloutActionConstants'
// - Resolved require(677493) to 'callout-action-constants'
// - Updated imported property 'Z' to 'deepClone' (module 391722)
// - Updated imported property 'm' to 'moveChildrenUtil' (module 497145)
// - Updated imported property 'RT' to 'blockTypes' (module 801350)
// - Updated imported property 'il' to 'supportedBlockTypes' (module 664589)
// - Updated imported property 'Bu' to 'findParentByType' (module 772264)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'vg' to 'hasTextSelection' (module 913651)
// - Updated imported property 'xF' to 'filterBlocksBySelection' (module 906257)
// - Updated imported property 'p0' to 'createCalloutNode' (module 247313)
// - Updated imported property 'tn' to 'toggleHeadingFold' (module 451530)
// - Updated imported property 'DB' to 'insertBlockWithChildSnapshot' (module 554298)
// - Updated imported property 'J' to 'calloutMultiSelect' (module 677493)
// - Updated imported property 'K' to 'turnIntoCallout' (module 677493)
// - Updated imported property 'Cl' to 'removeBlockItems' (module 139630)
// - Updated imported property 'Vx' to 'moveChildren' (module 139630)
// - Updated imported property '$5' to 'validateCalloutList' (module 662420)
// - Updated imported property 'Yu' to 'validateInsertion' (module 662420)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 427665
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  var treeNodeMoveUtil = require("tree-node-move-util") /*id: 497145*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  async function c(e, t, n, l, o) {
    let u = deepCloneWrapper_1.deepClone(t);
    await n.applyTransaction(l, t => {
      e.forEach(e => {
        if (e.type === o) {
          let {
            parent: r
          } = e;
          if (r) {
            let l = e.record.get(["children"]);
            let o = l.slice();
            let d = n.getRecord(r.recordId);
            let c = d.snapshot.children.indexOf(e.recordId);
            treeNodeMoveUtil.moveChildrenUtil(t, l, e.recordId, d.id, c + 1);
            t.removeChildren(d.id, [e.recordId]);
            let a = u.findIndex(t => typeof t != "string" && t.id === e.id);
            if (a > -1) {
              u.splice(a, 1, ...o);
            }
          }
        }
      });
    });
    return u.reduce((e, t) => {
      if (typeof t == "string") {
        e.push({
          id: n.getBlockIdsByRecordId(t)[0],
          type: docxBlockSelectionHandler_1.blockTypes.BLOCK
        });
      } else {
        e.push(t);
      }
      return e;
    }, []);
  }
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var insertBlockWithChildSnapshotHelper = require("insert-block-with-child-snapshot-helper") /*id: 554298*/;
  var flowHeadingFoldUtils = require("flow-heading-fold-utils") /*id: 451530*/;
  var docBlockSelectionUtils = require("doc-block-selection-utils") /*id: 906257*/;
  var docBlockEmojiConstants = require("doc-block-emoji-constants") /*id: 664589*/;
  var calloutEmojiUtils = require("callout-emoji-utils") /*id: 247313*/;
  var calloutBlockUtils = require("callout-block-utils") /*id: 662420*/;
  var calloutActionConstants = require("callout-action-constants") /*id: 677493*/;
  async function b(e, t, n) {
    let i = e.filter(e => docBlockEmojiConstants.supportedBlockTypes[e.type]);
    if (!i.length) {
      return t;
    }
    let c = i[0];
    if (!c.parent) {
      return t;
    }
    let {
      parent: E,
      position: b
    } = c;
    let g = docBlockTreeUtils.findParentByType(c, [docBlockTypeConstants.blockTypeConstants.CALLOUT]);
    if (g) {
      E = g.parent;
      b = g.position + 1;
    }
    let T = editorSelectionUtilities.hasTextSelection(t);
    let {
      blockList: I,
      noInSelBlockList: R
    } = docBlockSelectionUtils.filterBlocksBySelection(i, T, true);
    if (!I.length) {
      return t;
    }
    let v = calloutEmojiUtils.createCalloutNode();
    let D = I.map(e => e.id);
    let B = await flowHeadingFoldUtils.toggleHeadingFold(e, n);
    let [C, L] = insertBlockWithChildSnapshotHelper.insertBlockWithChildSnapshot({
      parentBlockId: E.id,
      blockManager: n,
      blockSnapshot: v,
      position: b,
      transactionName: T ? calloutActionConstants.calloutMultiSelect : calloutActionConstants.turnIntoCallout,
      childBlockIds: D,
      beforeInsert: e => {
        documentBlockOperations.removeBlockItems(e, D, n);
        documentBlockOperations.removeBlockItems(e, R);
        documentBlockOperations.moveChildren(e, E.recordId, b, R.map(e => e.recordId));
      }
    });
    await L;
    await B();
    let S = e.length !== i.length;
    if (!T && S) {
      let e = deepCloneWrapper_1.deepClone(t);
      i.forEach((t, n) => {
        let r = e.findIndex(e => e.id === t.id);
        if (r > -1) {
          if (n === 0) {
            e.splice(r, 1, {
              id: C,
              type: docxBlockSelectionHandler_1.blockTypes.BLOCK
            });
          } else {
            e.splice(r, 1);
          }
        }
      });
      return e;
    }
    return t;
  }
  async function g(e, t, n, r, l) {
    var o;
    let {
      toggle: i
    } = t;
    let d = i ?? calloutBlockUtils.validateCalloutList(e);
    let u = await (d ? c(e, n, r, "removeCalloutContainer", docBlockTypeConstants.blockTypeConstants.CALLOUT) : b(e, n, r));
    if ((o = t.updateSelection) === null || o === undefined || o) {
      l.setSelection(u);
    }
  }
  var T = [function (e) {
    let {
      blockManager: t,
      selectionAPI: n
    } = e;
    let r = {
      type: docBlockTypeConstants.blockTypeConstants.CALLOUT,
      h: async (e, r) => {
        await g(e, {
          ...r,
          updateSelection: false
        }, [], t, n);
      }
    };
    return {
      fixOperateTargetsRule: {
        cond: (e, t) => e.type === docBlockTypeConstants.blockTypeConstants.CALLOUT && !t,
        h: e => e.children
      },
      specialTurnIntoCase: {
        cond: e => e === docBlockTypeConstants.blockTypeConstants.CALLOUT,
        h: async (e, r, l) => {
          let o = function (e, t, n) {
            let {
              extractModelsBySelection: r,
              fixOperateTargets: l
            } = e;
            if (editorSelectionUtilities.hasTextSelection(t)) {
              return t.map(e => n.getBlockModelByBlockId(e.id));
            } else {
              return l(r(t, true), true);
            }
          }(e, l, t);
          if (calloutBlockUtils.validateInsertion(o)) {
            return g(o, r, l, t, n);
          }
        }
      },
      specialTurnIntoActionRule: r,
      canDoTurnIntoRule: {
        type: docBlockTypeConstants.blockTypeConstants.CALLOUT,
        h: calloutBlockUtils.validateInsertion
      },
      modelsMatchRule: {
        type: docBlockTypeConstants.blockTypeConstants.CALLOUT,
        h: calloutBlockUtils.validateCalloutList
      }
    };
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return T;
    }
  });
}