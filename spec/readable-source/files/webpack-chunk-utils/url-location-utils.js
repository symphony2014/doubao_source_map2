// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'TI' to 'setHash'
// - Renamed export 'TT' to 'setSearch'
// - Renamed export 'cN' to 'getHash'
// - Renamed export 'iy' to 'getSearch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 979504
         */
module.exports = function (module, exports, require) {
  let i = window.location.search;
  let o = window.location.hash;
  let a = () => i;
  let u = () => o;
  let c = e => i = e;
  let _ = e => o = e;
  require.d(exports, {
    setHash: function () {
      return _;
    },
    setSearch: function () {
      return c;
    },
    getHash: function () {
      return u;
    },
    getSearch: function () {
      return a;
    }
  });
}