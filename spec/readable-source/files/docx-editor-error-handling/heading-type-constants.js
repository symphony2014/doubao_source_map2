// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'headingBlockTypes'
// - Renamed export 'f' to 'headingLevel2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 23420
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let o = 2;
  let l = [docBlockTypeConstants.blockTypeConstants.HEADING1, docBlockTypeConstants.blockTypeConstants.HEADING2, docBlockTypeConstants.blockTypeConstants.HEADING3, docBlockTypeConstants.blockTypeConstants.HEADING4, docBlockTypeConstants.blockTypeConstants.HEADING5, docBlockTypeConstants.blockTypeConstants.HEADING6, docBlockTypeConstants.blockTypeConstants.HEADING7, docBlockTypeConstants.blockTypeConstants.HEADING8, docBlockTypeConstants.blockTypeConstants.HEADING9];
  require.d(exports, {
    headingBlockTypes: function () {
      return l;
    },
    headingLevel2: function () {
      return o;
    }
  });
}