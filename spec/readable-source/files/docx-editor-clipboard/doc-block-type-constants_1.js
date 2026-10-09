// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'blockTypeMap'
// - Renamed export 'i' to 'validHtmlTags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 240222
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let i = {
    bullet: docBlockTypeConstants.blockTypeConstants.BULLET,
    number: docBlockTypeConstants.blockTypeConstants.ORDERED,
    check: docBlockTypeConstants.blockTypeConstants.TODO,
    done: docBlockTypeConstants.blockTypeConstants.TODO
  };
  let a = ["DIV", "SPAN", "P", "H1", "H2", "H3", "H4", "H5", "H6", "UL", "OL", "LI", "PRE"];
  require.d(exports, {
    blockTypeMap: function () {
      return i;
    },
    validHtmlTags: function () {
      return a;
    }
  });
}