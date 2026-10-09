// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 311961
         */
module.exports = function (module, exports, require) {
  function e(t, e) {
    var r;
    var n;
    var i;
    var o;
    var s;
    var a;
    var c;
    var l;
    var u = {};
    var h = e.length;
    if (h) {
      var p = 0;
      var f = -2;
      var d = [];
      for (r = 0; r < h; r++) {
        i = e[r];
        d.push(0);
        if (e[p].marker !== i.marker || f !== i.token - 1) {
          p = r;
        }
        f = i.token;
        i.length = i.length || 0;
        if (i.close) {
          if (!u.hasOwnProperty(i.marker)) {
            u[i.marker] = [-1, -1, -1, -1, -1, -1];
          }
          s = u[i.marker][!!i.open * 3 + i.length % 3];
          a = n = p - d[p] - 1;
          for (; n > s; n -= d[n] + 1) {
            if ((o = e[n]).marker === i.marker && o.open && o.end < 0 && (c = false, (o.close || i.open) && (o.length + i.length) % 3 == 0 && (o.length % 3 != 0 || i.length % 3 != 0) && (c = true), !c)) {
              l = n > 0 && !e[n - 1].open ? d[n - 1] + 1 : 0;
              d[r] = r - n + l;
              d[n] = l;
              i.open = false;
              o.end = r;
              o.close = false;
              a = -1;
              f = -2;
              break;
            }
          }
          if (a !== -1) {
            u[i.marker][!!i.open * 3 + (i.length || 0) % 3] = a;
          }
        }
      }
    }
  }
  module.exports = function (t) {
    var r;
    var n = t.tokens_meta;
    var i = t.tokens_meta.length;
    e(t, t.delimiters);
    r = 0;
    for (; r < i; r++) {
      if (n[r] && n[r].delimiters) {
        e(t, n[r].delimiters);
      }
    }
  };
}