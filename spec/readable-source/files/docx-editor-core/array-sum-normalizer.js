// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'normalizeArraySum'
// - Renamed export 'h' to 'getColumnWidths'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 980212
         */
module.exports = function (module, exports, require) {
  var arraySumHelper = require("array-sum-helper") /*id: 218454*/;
  var arraySumByMatcher = require("array-sum-by-matcher") /*id: 746667*/;
  function l(e, n, i) {
    let l = arraySumHelper.sumArray(e);
    if (l <= n) {
      return e;
    }
    let a = 0;
    let s = [];
    let c = n / l;
    (e = [...e]).forEach((e, n, r) => {
      let o = Math.round(e * c);
      if (o <= i) {
        a += i - o;
        r[n] = i;
      } else {
        s.push(n);
        r[n] = o;
      }
    });
    if (a > 0 && s.length > 0) {
      let n = arraySumByMatcher.sumByMatcher(s, n => e[n]);
      let r = (n - a) / n;
      s.forEach(n => {
        let o = e[n];
        e[n] = Math.max(i, Math.round(o * r));
      });
    }
    return e;
  }
  function a(e) {
    let {
      columns_id: n,
      column_set: i
    } = e;
    return n.map(e => i[e].column_width);
  }
  require.d(exports, {
    normalizeArraySum: function () {
      return l;
    },
    getColumnWidths: function () {
      return a;
    }
  });
}