// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'imageOpServiceName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 713630
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("image-operation-service");
  require.d(exports, {
    imageOpServiceName: function () {
      return o;
    }
  });
}