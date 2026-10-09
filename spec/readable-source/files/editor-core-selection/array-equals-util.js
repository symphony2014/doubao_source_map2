// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'areArraysEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 503762
         */
module.exports = function (module, exports, require) {
  function i(e, t) {
    if (e.length !== t.length) {
      return false;
    }
    for (var n = 0; n < e.length; n++) {
      if (e[n] !== t[n]) {
        return false;
      }
    }
    return true;
  }
  require.d(exports, {
    areArraysEqual: function () {
      return i;
    }
  });
}