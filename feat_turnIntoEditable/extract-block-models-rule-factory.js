// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'lastElementHelper'
// - Resolved require(715951) to 'last-element-helper'
// - Renamed variable 'l' to 'docBlockTreeUtils'
// - Resolved require(772264) to 'doc-block-tree-utils'
// - Renamed variable 'o' to 'editorSelectionUtilities'
// - Resolved require(913651) to 'editor-selection-utilities'
// - Renamed variable 'i' to 'docxBlockSelectionHandler_1'
// - Resolved require(801350) to 'docx-block-selection-handler_1'
// - Updated imported property 'RT' to 'blockTypes' (module 801350)
// - Updated imported property 'vg' to 'hasTextSelection' (module 913651)
// - Updated imported property 'Z' to 'getLastElement' (module 715951)
// - Updated imported property 'm5' to 'getBlockModelsByIds' (module 772264)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 421005
         */
module.exports = function (module, exports, require) {
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  function d(e) {
    return e.type === docxBlockSelectionHandler_1.blockTypes.TEXT && e.selection.start === e.selection.end;
  }
  var u = [function (e) {
    let {
      blockManager: t,
      editorContext: n,
      selectionAPI: i
    } = e;
    return {
      extractBlockModelsRule: {
        cond: (e, t) => editorSelectionUtilities.hasTextSelection(e) || i.isBlockSelection(e) && !t && !n.fold.isShow(lastElementHelper.getLastElement(e).id),
        h: e => {
          if (e.length === 0) {
            return [];
          }
          if (editorSelectionUtilities.hasTextSelection(e)) {
            let n = e.slice();
            let l = e[0];
            let o = lastElementHelper.getLastElement(e);
            if (d(l)) {
              n.shift();
            }
            if (d(o)) {
              n.pop();
            }
            return n.map(e => t.getBlockModelByBlockId(e.id));
          }
          let i = lastElementHelper.getLastElement(e).id;
          let {
            fold: u
          } = n;
          while (!u.isShow(i)) {
            let e = u.getFoldStateById(i);
            if (e) {
              i = e.foldedBy;
            } else {
              break;
            }
          }
          let c = e.findIndex(e => e.id === i);
          let a = c > -1 ? e.slice(0, c + 1) : e;
          return docBlockTreeUtils.getBlockModelsByIds(a, t);
        }
      }
    };
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return u;
    }
  });
}