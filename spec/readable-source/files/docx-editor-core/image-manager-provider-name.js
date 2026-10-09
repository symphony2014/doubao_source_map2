// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'imageManagerName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 852709
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("image-manager");
  require.d(exports, {
    imageManagerName: function () {
      return r;
    }
  });
}