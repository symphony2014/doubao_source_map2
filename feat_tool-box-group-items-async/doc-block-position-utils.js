// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'calculateBlockPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 116715
         */
module.exports = function (module, exports, require) {
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var documentBlockInsertUtil = require("document-block-insert-util") /*id: 907868*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let u = async e => {
    let {
      blocks: l,
      isAppend: o,
      blockManager: u,
      extraProps: d
    } = e;
    let s = docBlockViewUtils.getBlockEdge(l, o);
    let p = {
      start: 0,
      len: 0
    };
    if (o) {
      p = {
        zoneId: (s = await documentBlockInsertUtil.insertBlocks({
          blockManager: u,
          blocks: l,
          newBlockType: docBlockTypeConstants.blockTypeConstants.TEXT
        })).model.zoneId,
        start: 0,
        len: 0
      };
    } else if (docxBlockUtils_1.isTextBlock(s)) {
      p = s.model.isEmpty ? {
        zoneId: s.model.zoneId,
        start: 0,
        len: 0
      } : editorZoneRangeUtils.createEditorRange(s, d.mark).toPosition();
    }
    return [s, p];
  };
  require.d(exports, {
    calculateBlockPosition: function () {
      return u;
    }
  });
}