// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'linkServiceProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 880405
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("link-service");
  require.d(exports, {
    linkServiceProvider: function () {
      return r;
    }
  });
}