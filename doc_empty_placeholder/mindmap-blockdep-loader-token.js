// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'mindmapBlockdepId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 426720
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("mindmap-blockdep-loader");
  require.d(exports, {
    mindmapBlockdepId: function () {
      return o;
    }
  });
}