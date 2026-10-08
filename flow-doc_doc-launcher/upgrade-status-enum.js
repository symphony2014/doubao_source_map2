// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'UpgradeStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: history.95e09a2f.js
         * chunkId: 17374
         * moduleId: 249746
         */
module.exports = function (module, exports, require) {
  var r;
  (r = {})[r.NOT_UPGRADE = 0] = "NOT_UPGRADE";
  r[r.UPGRATING = 1] = "UPGRATING";
  r[r.UPGRADED = 2] = "UPGRADED";
  let s = r;
  require.d(exports, {
    UpgradeStatus: function () {
      return s;
    }
  });
}