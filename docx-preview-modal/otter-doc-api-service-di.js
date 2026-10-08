// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'getOtterDocService'
// - Renamed export 'x' to 'OtterDocApiSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 53616
         */
module.exports = function (module, exports, require) {
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  let r = Symbol("OtterDocAPIService");
  function a() {
    return diContainerInstance.diContainer.get(r);
  }
  require.d(exports, {
    getOtterDocService: function () {
      return a;
    },
    OtterDocApiSymbol: function () {
      return r;
    }
  });
}