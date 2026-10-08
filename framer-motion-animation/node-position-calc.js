// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'calcNodeOffset'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 212456
         */
module.exports = function (module, exports, require) {
  function n(t, e, i, n = 0, r = 1) {
    let s = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e);
    let o = t.size;
    let a = (o - 1) * n;
    if (typeof i == "function") {
      return i(s, o);
    } else if (r === 1) {
      return s * n;
    } else {
      return a - s * n;
    }
  }
  require.d(exports, {
    calcNodeOffset: function () {
      return n;
    }
  });
}