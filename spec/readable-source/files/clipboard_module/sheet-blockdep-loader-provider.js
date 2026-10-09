// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'sheetBlockdepLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 16546
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("sheet-blockdep-loader");
  require.d(exports, {
    sheetBlockdepLoader: function () {
      return r;
    }
  });
}