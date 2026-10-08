// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'lazyRecordToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 475970
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("lazy-record");
  require.d(exports, {
    lazyRecordToken: function () {
      return r;
    }
  });
}