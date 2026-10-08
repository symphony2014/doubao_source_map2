// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'arraySliceLimit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 490754
         */
module.exports = function (module, exports, require) {
  function n(t, r) {
    if (r == null || r > t.length) {
      r = t.length;
    }
    var e = 0;
    var n = Array(r);
    for (; e < r; e++) {
      n[e] = t[e];
    }
    return n;
  }
  require.d(exports, {
    arraySliceLimit: function () {
      return n;
    }
  });
}