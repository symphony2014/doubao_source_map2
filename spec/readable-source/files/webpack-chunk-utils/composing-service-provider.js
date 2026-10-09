// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'composingServiceName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 678505
         */
module.exports = function (module, exports, require) {
  let i = require("dependency-injection-container") /*id: 555385*/.providerName("composing-service");
  require.d(exports, {
    composingServiceName: function () {
      return i;
    }
  });
}