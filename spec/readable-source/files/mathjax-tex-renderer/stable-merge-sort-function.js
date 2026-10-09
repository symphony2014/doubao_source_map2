// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'arraySliceWrapper_1'
// - Resolved require(955975) to 'array-slice-wrapper_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 397146
         */
module.exports = function (module, exports, require) {
  var arraySliceWrapper_1 = require("array-slice-wrapper_1") /*id: 955975*/;
  var T = Math.floor;
  function n(t, e) {
    var Q = t.length;
    if (Q < 8) {
      var o;
      var i;
      var a = 1;
      while (a < Q) {
        i = a;
        o = t[a];
        while (i && e(t[i - 1], o) > 0) {
          t[i] = t[--i];
        }
        if (i !== a++) {
          t[i] = o;
        }
      }
    } else {
      var u = T(Q / 2);
      var s = n(arraySliceWrapper_1(t, 0, u), e);
      var l = n(arraySliceWrapper_1(t, u), e);
      var c = s.length;
      var p = l.length;
      var h = 0;
      var f = 0;
      while (h < c || f < p) {
        t[h + f] = h < c && f < p ? e(s[h], l[f]) <= 0 ? s[h++] : l[f++] : h < c ? s[h++] : l[f++];
      }
    }
    return t;
  }
  module.exports = n;
}