// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'dedent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 454132
         */
module.exports = function (module, exports, require) {
  function i(t) {
    var e = [];
    var r = 1;
    for (; r < arguments.length; r++) {
      e[r - 1] = arguments[r];
    }
    var i = Array.from(typeof t == "string" ? [t] : t);
    i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var a = i.reduce(function (t, e) {
      var r = e.match(/\n([\t ]+|(?!\s).)/g);
      if (r) {
        return t.concat(r.map(function (t) {
          return t.match(/[\t ]/g)?.length ?? 0;
        }));
      } else {
        return t;
      }
    }, []);
    if (a.length) {
      var o = RegExp("\n[\t ]{" + Math.min.apply(Math, a) + "}", "g");
      i = i.map(function (t) {
        return t.replace(o, "\n");
      });
    }
    i[0] = i[0].replace(/^\r?\n/, "");
    var l = i[0];
    e.forEach(function (t, e) {
      var r = l.match(/(?:^|\n)( *)$/);
      var a = r ? r[1] : "";
      var o = t;
      if (typeof t == "string" && t.includes("\n")) {
        o = String(t).split("\n").map(function (t, e) {
          if (e === 0) {
            return t;
          } else {
            return "" + a + t;
          }
        }).join("\n");
      }
      l += o + i[e + 1];
    });
    return l;
  }
  require.d(exports, {
    dedent: function () {
      return i;
    }
  });
}