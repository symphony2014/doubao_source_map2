// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dj' to 'getBotRequestId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 36990
         */
module.exports = function (module, exports, require) {
  var botStoreManager = require("bot-store-manager") /*id: 359169*/;
  let r = e => botStoreManager.botStore.getState().botIdToRequestIdMap[e || ""];
  require.d(exports, {
    getBotRequestId: function () {
      return r;
    }
  });
}