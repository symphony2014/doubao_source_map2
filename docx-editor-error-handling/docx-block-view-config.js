// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HD' to 'docxConfig'
// - Renamed export 'Sz' to 'blockWidthMap'
// - Renamed export 'Y1' to 'notifyBlockWidth'
// - Renamed export 'uO' to 'clearCellMinWidth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_equation_view.34d076e0.js
         * chunkId: 59870
         * moduleId: 727302
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var docxLayoutConstants_1 = require("docx-layout-constants_1") /*id: 700786*/;
  var docxPreviewConstants = require("docx-preview-constants") /*id: 296825*/;
  let s = "NOTIFY_BLOCK_WIDTH";
  let c = "CLEAR_CELL_MIN_WIDTH";
  let u = new Map([[docBlockTypeConstants.blockTypeConstants.GRID, docxLayoutConstants_1.configLimitMid], [docBlockTypeConstants.blockTypeConstants.CODE, 330], [docBlockTypeConstants.blockTypeConstants.CALLOUT, 100], [docBlockTypeConstants.blockTypeConstants.DIAGRAM, 360], [docBlockTypeConstants.blockTypeConstants.MINDMAP, 360], [docBlockTypeConstants.blockTypeConstants.CHAT_CARD, 360], [docBlockTypeConstants.blockTypeConstants.VIEW, 360], [docBlockTypeConstants.blockTypeConstants.POLL, 320], [docBlockTypeConstants.blockTypeConstants.BOOKMARK, 156], [docBlockTypeConstants.blockTypeConstants.MESSAGE, 214], [docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, 280], [docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE, 280], [docBlockTypeConstants.blockTypeConstants.AI, 280], [docxPreviewConstants.messageLinkTypes.message, 214]]);
  let d = docxViewConfigConstants.getDocxConfig();
  require.d(exports, {
    docxConfig: function () {
      return d;
    },
    blockWidthMap: function () {
      return u;
    },
    notifyBlockWidth: function () {
      return s;
    },
    clearCellMinWidth: function () {
      return c;
    }
  });
}