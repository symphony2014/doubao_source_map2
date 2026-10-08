// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$d' to 'getBlockWidth'
// - Renamed export 'SN' to 'findCellBlockInPath'
// - Renamed export 'Ud' to 'isPreviewViewBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_equation_view.34d076e0.js
         * chunkId: 59870
         * moduleId: 66547
         */
module.exports = function (module, exports, require) {
  require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docxBlockViewConfig = require("docx-block-view-config") /*id: 727302*/;
  let s = e => e && e.type === docBlockTypeConstants.blockTypeConstants.CELL;
  function c(e, n, r, i) {
    if (i || !n || e.hasBlockModelByBlockId(n)) {
      return [...(r || e.getBlockPath(n)), n].find(n => s(e.getBlockModelByBlockIdNotCheck(n)));
    } else {
      return "";
    }
  }
  let u = (e, n) => e.type === docBlockTypeConstants.blockTypeConstants.VIEW && !!n && e.view_type === viewTypeConstants.viewTypes?.Preview && fileUtilsAndViewHelpers.getFileNameWithoutExtension(n);
  let d = e => {
    let n = e.snapshot.type;
    if (n === docBlockTypeConstants.blockTypeConstants.URL_PREVIEW) {
      let n = e.snapshot.url_type;
      return docxBlockViewConfig.blockWidthMap.get(n);
    }
    return docxBlockViewConfig.blockWidthMap.get(n);
  };
  require.d(exports, {
    getBlockWidth: function () {
      return d;
    },
    findCellBlockInPath: function () {
      return c;
    },
    isPreviewViewBlock: function () {
      return u;
    }
  });
}