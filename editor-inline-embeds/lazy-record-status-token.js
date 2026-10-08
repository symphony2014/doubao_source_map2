// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'lazyRecordStatus'
// - Renamed export 'd' to 'lazyRecordToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 931385
         */
module.exports = function (module, exports, require) {
  var lazyRecordProviderName = require("lazy-record-provider-name") /*id: 475970*/;
  var lazyRecordStatusProvider = require("lazy-record-status-provider") /*id: 738543*/;
  require.d(exports, {
    lazyRecordStatus: function () {
      return lazyRecordStatusProvider.lazyRecordStatus;
    },
    lazyRecordToken: function () {
      return lazyRecordProviderName.lazyRecordToken;
    }
  });
}