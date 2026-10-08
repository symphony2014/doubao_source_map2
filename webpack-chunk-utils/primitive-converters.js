// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VB' to 'toNumber'
// - Renamed export 'vT' to 'toString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 383327
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return Number(e);
  }
  function o(e) {
    return String(e);
  }
  require.d(exports, {
    toNumber: function () {
      return i;
    },
    toString: function () {
      return o;
    }
  });
}