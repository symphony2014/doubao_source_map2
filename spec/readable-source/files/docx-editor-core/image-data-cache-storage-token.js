// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'imageDataCacheToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 328701
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("image-data-cache-storage");
  require.d(exports, {
    imageDataCacheToken: function () {
      return r;
    }
  });
}