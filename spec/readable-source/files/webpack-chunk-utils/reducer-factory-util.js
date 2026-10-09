// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'createReducer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 978342
         */
module.exports = function (module, exports, require) {
  function i(e, n) {
    return function (r = n, i) {
      let o = e[i.type];
      if (o) {
        return o(r, i);
      } else {
        return r;
      }
    };
  }
  require.d(exports, {
    createReducer: function () {
      return i;
    }
  });
}