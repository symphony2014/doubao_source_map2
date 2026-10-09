// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'layoutNodeBuilder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 893890
         */
module.exports = function (module, exports, require) {
  var layoutNodeBuilderProvider = require("layout-node-builder-provider") /*id: 163942*/;
  require.d(exports, {
    layoutNodeBuilder: function () {
      return layoutNodeBuilderProvider.layoutNodeBuilder;
    }
  });
}