// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveSearchCanvasConst'
// - Resolved require(498122) to 'receive-search-canvas-const'
// - Updated imported property 'f' to 'receiveSearchCanvas' (module 498122)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 860677
         */
module.exports = function (module, exports, require) {
  var receiveSearchCanvasConst = require("receive-search-canvas-const") /*id: 498122*/;
  let r = e => "search_result" in e ? receiveSearchCanvasConst.receiveSearchCanvas : undefined;
  require.r(exports);
  require.d(exports, {
    receiveSearchResultCanvasPluginMatcher: function () {
      return r;
    }
  });
}