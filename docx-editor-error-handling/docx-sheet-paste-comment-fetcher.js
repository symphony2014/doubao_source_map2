// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'fetchSheetComments'
// - Renamed export 'c' to 'sheetCommentCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 91861
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxSheetPasteUtils = require("docx-sheet-paste-utils") /*id: 88608*/;
  let l = new Map();
  async function s(e) {
    let {
      token: i
    } = docxSheetPasteUtils.parseTokenId(e.snapshot.token);
    if (!i) {
      return;
    }
    let {
      fetchClientVarsComments: r
    } = await platformDocUtils.kHi();
    if (!l.get(i)) {
      l.set(i, r(i).promise);
    }
    return l.get(i);
  }
  require.d(exports, {
    fetchSheetComments: function () {
      return s;
    },
    sheetCommentCache: function () {
      return l;
    }
  });
}