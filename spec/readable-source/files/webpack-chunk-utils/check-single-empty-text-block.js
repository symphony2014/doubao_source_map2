// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'checkSingleEmptyTextBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 963907
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let a = e => {
    var r;
    let a = e.getBlockStructByBlockId(e.rootBlockId);
    let u = a && a.children;
    if (!u) {
      return true;
    }
    if (u.length > 1) {
      return false;
    }
    let c = u[0];
    if (!c || c.isDataPending()) {
      return true;
    }
    let _ = e.getBlockViewByBlockIdNotCheck(c.id);
    let l = c.type === docBlockTypeConstants.blockTypeConstants.TEXT;
    let s = (_ == null ? undefined : _.selectionAPI.getSelection()[0]?.id) === c.id && (_ == null ? undefined : (r = _.editor) === null || r === undefined ? undefined : r.getStatus("isComposing"));
    if (!l || s || c.snapshot.text_indent === 1 || c.children.length) {
      return false;
    }
    let E = docxEditorCore.getBlockModel(c);
    return !!E && E.isTextBlock && E.isEmpty;
  };
  require.d(exports, {
    checkSingleEmptyTextBlock: function () {
      return a;
    }
  });
}