// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'areArraysEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 788205
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    if (e === t) {
      return true;
    }
    for (var n = 0; n < e.length; n++) {
      if (!Object.is(e[n], t[n])) {
        return false;
      }
    }
    return true;
  }
  require.d(exports, {
    areArraysEqual: function () {
      return r;
    }
  });
}