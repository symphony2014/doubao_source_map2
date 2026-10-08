// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 986001
         */
module.exports = function (module, exports, require) {
  module.exports = {
    diff: function (e, r, n) {
      if (!e || typeof e != "object" || !r || typeof r != "object") {
        throw Error("both arguments must be objects or arrays");
      }
      n ||= function (e) {
        return e;
      };
      return function e(r, o, a, i) {
        var c;
        var s = Object.keys(r);
        var l = s.length;
        var u = Object.keys(o);
        var d = u.length;
        var f = 0;
        for (; f < l; f++) {
          var g = Array.isArray(r) ? Number(s[f]) : s[f];
          if (!(g in o)) {
            c = a.concat(g);
            i.remove.push({
              op: "remove",
              path: n(c)
            });
          }
        }
        for (var f = 0; f < d; f++) {
          var g = Array.isArray(o) ? Number(u[f]) : u[f];
          var b = r[g];
          var p = o[g];
          if (g in r) {
            if (b !== p) {
              if (Object(b) !== b || Object(p) !== p) {
                c = t(c, a, g, i, n, o);
              } else if (Object.keys(b).length || Object.keys(p).length || String(b) == String(p)) {
                e(r[g], o[g], a.concat(g), i);
              } else {
                c = t(c, a, g, i, n, o);
              }
            }
          } else {
            c = a.concat(g);
            var h = o[g];
            i.add.push({
              op: "add",
              path: n(c),
              value: h
            });
          }
        }
        return i.remove.reverse().concat(i.replace).concat(i.add);
      }(e, r, [], {
        remove: [],
        replace: [],
        add: []
      });
    },
    jsonPatchPathConverter: function (e) {
      return [""].concat(e).join("/");
    }
  };
  function t(e, t, r, n, o, a) {
    e = t.concat(r);
    n.replace.push({
      op: "replace",
      path: o(e),
      value: a[r]
    });
    return e;
  }
}