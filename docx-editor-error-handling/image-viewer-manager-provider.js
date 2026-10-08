// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'imageViewerManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 347257
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("image-viewer-manager");
  require.d(exports, {
    imageViewerManager: function () {
      return n;
    }
  });
}