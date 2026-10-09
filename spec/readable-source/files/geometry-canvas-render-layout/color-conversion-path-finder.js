// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'colorConvert'
// - Resolved require(886055) to 'color-convert'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 60499
         */
module.exports = function (module, exports, require) {
  var colorConvert = require("color-convert") /*id: 886055*/;
  module.exports = function (t) {
    var e = function (t) {
      var e = function () {
        var t = {};
        var e = Object.keys(colorConvert);
        var n = e.length;
        var r = 0;
        for (; r < n; r++) {
          t[e[r]] = {
            distance: -1,
            parent: null
          };
        }
        return t;
      }();
      var n = [t];
      for (e[t].distance = 0; n.length;) {
        var r = n.pop();
        var o = Object.keys(colorConvert[r]);
        var a = o.length;
        var s = 0;
        for (; s < a; s++) {
          var h = o[s];
          var l = e[h];
          if (l.distance === -1) {
            l.distance = e[r].distance + 1;
            l.parent = r;
            n.unshift(h);
          }
        }
      }
      return e;
    }(t);
    var n = {};
    var r = Object.keys(e);
    var o = r.length;
    var a = 0;
    for (; a < o; a++) {
      var s = r[a];
      if (e[s].parent !== null) {
        n[s] = function (t, e) {
          var n = [e[t].parent, t];
          var r = colorConvert[e[t].parent][t];
          var o = e[t].parent;
          while (e[o].parent) {
            n.unshift(e[o].parent);
            r = function (t, e) {
              return function (n) {
                return e(t(n));
              };
            }(colorConvert[e[o].parent][o], r);
            o = e[o].parent;
          }
          r.conversion = n;
          return r;
        }(s, e);
      }
    }
    return n;
  };
}