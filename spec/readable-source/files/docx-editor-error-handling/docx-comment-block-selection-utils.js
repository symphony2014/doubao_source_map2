// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I5' to 'adjustCodeSelectionForFolding'
// - Renamed export 'RP' to 'createCaretRectFromSelection'
// - Renamed export 'g8' to 'resolveParentFileBlockSelection'
// - Renamed export 'm0' to 'm0'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 67708
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  let s = (e, i) => {
    if (!e) {
      return false;
    }
    let r = i.getBlockStructByBlockId(e);
    return !!r && !!r.parent && r.record.snapshot.type === docBlockTypeConstants.blockTypeConstants.FILE && r.parent.record.snapshot.type !== docBlockTypeConstants.blockTypeConstants.VIEW;
  };
  let a = (e, i, r) => {
    let l = r.getBlockModelByBlockId(e.blockId);
    let a = r.getBlockModelByBlockId(i.blockId);
    if (s(l.id, r) && l.parent?.id === a.id) {
      return i;
    } else if (s(a.id, r) && a.parent?.id === l.id) {
      return e;
    } else {
      return null;
    }
  };
  function c(e, i) {
    if (docxCommentFeatureFlags.shouldIgnoreCaretRect() && e.firstCharRect) {
      return {
        ...e,
        caretLeft: e.firstCharRect.left,
        top: e.firstCharRect.top,
        height: e.bottom - e.firstCharRect.top,
        blockId: i
      };
    } else {
      return {
        ...e,
        caretLeft: e.leftCaretRect.left,
        top: e.leftCaretRect.top,
        height: e.bottom - e.leftCaretRect.top,
        blockId: i
      };
    }
  }
  function d(e, i) {
    var r;
    var o;
    if (e.type !== docBlockTypeConstants.blockTypeConstants.CODE) {
      return;
    }
    let l = (r = e.codePlugin) === null || r === undefined ? undefined : r.getFoldModule();
    if (!l) {
      return;
    }
    let s = e.model.zoneState.offsetToPoint(i[0]);
    let {
      zoneId: a
    } = e.model;
    if (!l.isCollapsedLine(a, s.line)) {
      return;
    }
    let c = l.getCollapseFoldLines(a, s.line).sort((e, i) => i - e).find(i => {
      let r = e.model.zoneState.getLine(i);
      return r && !l.isCollapsedLine(a, r);
    });
    if (typeof c != "number") {
      return;
    }
    let d = (o = e.model.zoneState.getLine(c)) === null || o === undefined ? undefined : o.getOffset();
    if (d) {
      i[0] = d.start;
      i[1] = d.start;
    }
  }
  require.d(exports, {
    adjustCodeSelectionForFolding: function () {
      return d;
    },
    createCaretRectFromSelection: function () {
      return c;
    },
    resolveParentFileBlockSelection: function () {
      return a;
    },
    m0: function () {
      return docxCommentUtils.getBlockRectForComment;
    }
  });
}