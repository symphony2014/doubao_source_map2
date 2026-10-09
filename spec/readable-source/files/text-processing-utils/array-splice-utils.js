// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'concatArrays'
// - Renamed export 'd' to 'spliceArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 511403
         */
module.exports = function (module, exports, require) {
  function n(e, t, r, n) {
    let i;
    let o = e.length;
    let u = 0;
    t = t < 0 ? -t > o ? 0 : o + t : t > o ? o : t;
    r = r > 0 ? r : 0;
    if (n.length < 10000) {
      (i = Array.from(n)).unshift(t, r);
      e.splice(...i);
    } else {
      for (r && e.splice(t, r); u < n.length;) {
        (i = n.slice(u, u + 10000)).unshift(t, 0);
        e.splice(...i);
        u += 10000;
        t += 10000;
      }
    }
  }
  function i(e, t) {
    if (e.length > 0) {
      n(e, e.length, 0, t);
      return e;
    } else {
      return t;
    }
  }
  require.d(exports, {
    concatArrays: function () {
      return i;
    },
    spliceArray: function () {
      return n;
    }
  });
}