// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'setKeyTimestamp'
// - Renamed export 'C' to 'timestampStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 278453
         */
module.exports = function (module, exports, require) {
  let n = {};
  function o(e) {
    return function (e, i, r = false) {
      if (!e[i] || r) {
        e[i] = Date.now();
      }
    }(n, e);
  }
  require.d(exports, {
    setKeyTimestamp: function () {
      return o;
    },
    timestampStore: function () {
      return n;
    }
  });
}