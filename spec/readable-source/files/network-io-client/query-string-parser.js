// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 907233
         */
module.exports = function (module, exports, require) {
  function t(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  module.exports = function (e, r, n, i) {
    r = r || "&";
    n = n || "=";
    var s = {};
    if (typeof e != "string" || e.length === 0) {
      return s;
    }
    var o = /\+/g;
    e = e.split(r);
    var a = 1000;
    if (i && typeof i.maxKeys == "number") {
      a = i.maxKeys;
    }
    var c = e.length;
    if (a > 0 && c > a) {
      c = a;
    }
    for (var l = 0; l < c; ++l) {
      var h;
      var u;
      var f;
      var p;
      var d = e[l].replace(o, "%20");
      var y = d.indexOf(n);
      if (y >= 0) {
        h = d.substr(0, y);
        u = d.substr(y + 1);
      } else {
        h = d;
        u = "";
      }
      f = decodeURIComponent(h);
      p = decodeURIComponent(u);
      if (t(s, f)) {
        if (Array.isArray(s[f])) {
          s[f].push(p);
        } else {
          s[f] = [s[f], p];
        }
      } else {
        s[f] = p;
      }
    }
    return s;
  };
}