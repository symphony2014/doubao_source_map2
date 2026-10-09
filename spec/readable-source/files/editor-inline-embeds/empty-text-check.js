// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'isEmptyTextBlock'
// - Renamed export 'c' to 'isEmptyTextModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 193795
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  let l = e => !!docBlockEditActions.isTextBlock(e) && e.type === docBlockTypeConstants.blockTypeConstants.TEXT && !!e.isEmpty && !e.snapshot.text_indent && (!e.snapshot.align || e.snapshot.align === docBlockTypeConstants.alignmentConstants.LEFT);
  let s = e => l(e.model);
  require.d(exports, {
    isEmptyTextBlock: function () {
      return s;
    },
    isEmptyTextModel: function () {
      return l;
    }
  });
}