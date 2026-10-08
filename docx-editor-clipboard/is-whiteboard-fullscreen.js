// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'isWhiteboardFull'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 465910
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function i(e) {
    let {
      allBlockViews: o
    } = e;
    return !!o.length && e.allBlockViews.some(e => e.type === docBlockTypeConstants.blockTypeConstants.WHITEBOARD && e.getFullscreenState());
  }
  require.d(exports, {
    isWhiteboardFull: function () {
      return i;
    }
  });
}