// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'lazyRecordStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 738543
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("lazy-record-status");
  require.d(exports, {
    lazyRecordStatus: function () {
      return r;
    }
  });
}