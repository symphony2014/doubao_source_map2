// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 919093
         */
module.exports = function (module, exports, require) {
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var o = Math.floor;
  function i(t, r) {
    var e = t.length;
    if (e < 8) {
      var a;
      var u;
      var c = 1;
      while (c < e) {
        u = c;
        a = t[c];
        while (u && r(t[u - 1], a) > 0) {
          t[u] = t[--u];
        }
        if (u !== c++) {
          t[u] = a;
        }
      }
    } else {
      var f = o(e / 2);
      var s = i(arraySlicePolyfill_2(t, 0, f), r);
      var l = i(arraySlicePolyfill_2(t, f), r);
      var v = s.length;
      var p = l.length;
      var h = 0;
      var d = 0;
      while (h < v || d < p) {
        t[h + d] = h < v && d < p ? r(s[h], l[d]) <= 0 ? s[h++] : l[d++] : h < v ? s[h++] : l[d++];
      }
    }
    return t;
  }
  module.exports = i;
}