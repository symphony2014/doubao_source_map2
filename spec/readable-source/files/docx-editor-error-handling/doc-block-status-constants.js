// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F6' to 'blockStatusConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 870173
         */
module.exports = function (module, exports, require) {
  var n;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  docBlockTypeConstants.blockTypeConstants.SHEET;
  docBlockTypeConstants.blockTypeConstants.BITABLE;
  docBlockTypeConstants.blockTypeConstants.BASE_REFER;
  docBlockTypeConstants.blockTypeConstants.MINDMAP;
  docBlockTypeConstants.blockTypeConstants.FILE;
  docBlockTypeConstants.blockTypeConstants.WHITEBOARD;
  (n = {}).DONE = "done";
  n.FAIL = "fail";
  let l = n;
  require.d(exports, {
    blockStatusConstants: function () {
      return l;
    }
  });
}