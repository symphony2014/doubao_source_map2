// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$p' to 'handleTranslateOkr'
// - Renamed export 'cf' to 'isWhiteboardTrans'
// - Renamed export 'fu' to 'updateTranslateIds'
// - Renamed export 'yq' to 'isSheetTranslateEdit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 436987
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockChildrenUtils = require("docx-block-children-utils") /*id: 429601*/;
  var docTranslationBlockConfig = require("doc-translation-block-config") /*id: 391959*/;
  var docTranslateBlockUtils_1 = require("doc-translate-block-utils_1") /*id: 520675*/;
  var translationSuffixUtils = require("translation-suffix-utils") /*id: 203170*/;
  function u(e, n) {
    return !!docTranslateBlockUtils_1.isDocTranslateEdit(e) && docTranslationBlockConfig.whiteboardBlockTypes.includes(n);
  }
  function s(e, n) {
    return !!docTranslateBlockUtils_1.isDocTranslateEdit(e) && docTranslationBlockConfig.supportedSheetTypes.includes(n);
  }
  function d(e, n) {
    let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let o = [];
    n.forEach(n => {
      let l = e[n];
      if (l) {
        if (r) {
          let n = docxBlockChildrenUtils.getAllBlockChildren(l.snapshot);
          l.snapshot.children = d(e, n, r);
        }
        if (translationSuffixUtils.isTranslated(n)) {
          let r = translationSuffixUtils.removeTranslation(n);
          let o = e[n];
          let i = e[r];
          if (!o || !i) {
            return;
          }
          let l = o.snapshot.children || [];
          l.forEach(n => {
            if (e[n]) {
              e[n].snapshot.parent_id = r;
            }
          });
          i.snapshot.children = l;
        } else {
          o.push(n);
        }
      }
    });
    return o;
  }
  function h(e, n) {
    if (!docTranslateBlockUtils_1.isDocTranslateEdit(e)) {
      return;
    }
    let r = d(n.recordMap, n.recordIds, true);
    n.recordIds = r;
    n.blockIds = n.blockIds.filter(n => {
      let o = e.getRecordByBlockId(n);
      return o && r.includes(o.id);
    });
  }
  function f(e, n, r) {
    if (!docTranslateBlockUtils_1.isDocTranslateEdit(e)) {
      return;
    }
    let i = n[r];
    if (!i) {
      return;
    }
    let {
      snapshot: l
    } = i;
    if (l.type === docBlockTypeConstants.blockTypeConstants.OKR || l.type === docBlockTypeConstants.blockTypeConstants.OBJECTIVE) {
      i.snapshot.children = d(n, i.snapshot.children || [], false);
    }
  }
  require.d(exports, {
    handleTranslateOkr: function () {
      return f;
    },
    isWhiteboardTrans: function () {
      return u;
    },
    updateTranslateIds: function () {
      return h;
    },
    isSheetTranslateEdit: function () {
      return s;
    }
  });
}