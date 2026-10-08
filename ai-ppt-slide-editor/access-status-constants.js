// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'AccessStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 76876
         */
module.exports = function (module, exports, require) {
  var r;
  (r = {}).NoAccess = "NoAccess";
  r.Deleted = "Deleted";
  r.Public = "Public";
  r.Error = "Error";
  r.NotCompatible = "NotCompatible";
  let n = r;
  require.d(exports, {
    AccessStatus: function () {
      return n;
    }
  });
}