// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'offlineUploadSvcId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 363270
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("offline-upload");
  require.d(exports, {
    offlineUploadSvcId: function () {
      return r;
    }
  });
}