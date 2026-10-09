// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'formatNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89268.5726bc94.js
         * chunkId: 89268
         * moduleId: 769192
         */
module.exports = function (module, exports, require) {
  function i(e, t = 2) {
    if (Number.isFinite(e)) {
      return e.toFixed(t).replace(/\.0+$/u, "").replace(/(\.\d*?[1-9])0+$/u, "$1");
    } else {
      return String(e);
    }
  }
  require.d(exports, {
    formatNumber: function () {
      return i;
    }
  });
}