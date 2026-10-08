// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DF' to 'maxBlockCount'
// - Renamed export 'JX' to 'supportedBlockTypes'
// - Renamed export 'lx' to 'blockLimit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 558922
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let o = [docBlockTypeConstants.blockTypeConstants.CODE, docBlockTypeConstants.blockTypeConstants.FILE, docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.WHITEBOARD, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER];
  let l = 500;
  let s = 3;
  require.d(exports, {
    maxBlockCount: function () {
      return s;
    },
    supportedBlockTypes: function () {
      return o;
    },
    blockLimit: function () {
      return l;
    }
  });
}