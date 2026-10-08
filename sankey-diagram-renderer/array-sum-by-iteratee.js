// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'sumBy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1800.93d11244.js
         * chunkId: 1800
         * moduleId: 618459
         */
module.exports = function (module, exports, require) {
  function i(t, e) {
    let n = 0;
    if (e === undefined) {
      for (let e of t) {
        if (e *= 1) {
          n += e;
        }
      }
    } else {
      let i = -1;
      for (let r of t) {
        if (r = +e(r, ++i, t)) {
          n += r;
        }
      }
    }
    return n;
  }
  require.d(exports, {
    sumBy: function () {
      return i;
    }
  });
}