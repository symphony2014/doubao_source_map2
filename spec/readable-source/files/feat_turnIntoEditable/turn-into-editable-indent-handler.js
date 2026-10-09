// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'treeNodeMoveUtil'
// - Resolved require(497145) to 'tree-node-move-util'
// - Renamed variable 'l' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'o' to 'documentNodeUtils_2'
// - Resolved require(868545) to 'document-node-utils_2'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Fr' to 'getAllowedBlockTypes' (module 433991)
// - Updated imported property 'rI' to 'hasTextIndent' (module 868545)
// - Updated imported property 'HK' to 'groupDocumentNodesByParent' (module 868545)
// - Updated imported property 'm' to 'moveChildrenUtil' (module 497145)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 398154
         */
module.exports = function (module, exports, require) {
  var treeNodeMoveUtil = require("tree-node-move-util") /*id: 497145*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  let i = [function (e) {
    let {
      selectionAPI: t
    } = e;
    return {
      actionBeforeBatchTurnInto: {
        cond: (e, t) => t !== docBlockTypeConstants.blockTypeConstants.TEXT && e.some(documentNodeUtils_2.hasTextIndent),
        h: (e, n, i, d) => {
          if (e.length === 0) {
            return;
          }
          let u = e.filter(documentNodeUtils_2.hasTextIndent);
          u.forEach(e => {
            n.replace(e.recordId, ["text_indent"], 0);
          });
          let c = documentNodeUtils_2.groupDocumentNodesByParent(u);
          let a = t.isBlockSelection(d);
          c.forEach(e => {
            let t = e[0];
            let {
              previousSibling: o
            } = t;
            if (o && docBlockTypeConstants.getAllowedBlockTypes().includes(o.type)) {
              let l = o.snapshot.children.length;
              treeNodeMoveUtil.moveChildrenUtil(n, e.map(e => e.recordId), t.parent.recordId, o.recordId, l);
              if (a) {
                let n = d.findIndex(e => e.id === t.id);
                if (n > -1) {
                  if (e.length === d.length) {
                    return;
                  }
                  d.splice(n, e.length);
                }
              }
            }
          });
          return d;
        }
      }
    };
  }];
  exports.default = i;
  require.r(exports);
}