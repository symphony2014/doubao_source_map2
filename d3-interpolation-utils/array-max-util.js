// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'maxBy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 878770
         */
module.exports = function (module, exports, require) {
  function i(t, n) {
    let e;
    if (n === undefined) {
      for (let n of t) {
        if (n != null && (e > n || e === undefined && n >= n)) {
          e = n;
        }
      }
    } else {
      let i = -1;
      for (let r of t) {
        if ((r = n(r, ++i, t)) != null && (e > r || e === undefined && r >= r)) {
          e = r;
        }
      }
    }
    return e;
  }
  require.d(exports, {
    maxBy: function () {
      return i;
    }
  });
}