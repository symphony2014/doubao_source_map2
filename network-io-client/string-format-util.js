// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 762807
         */
module.exports = function (module, exports, require) {
  function t(e, r) {
    if (typeof e == "string") {
      r = e;
      e = undefined;
    }
    var n = [];
    function i(e) {
      if (typeof e != "string") {
        var r = s();
        t.verbose;
        r = "return " + r;
        if (e) {
          var o = Object.keys(e);
          var a = Array(o.length + 1);
          var c = Array(o.length);
          var l = 0;
          while (l < o.length) {
            a[l] = o[l];
            c[l] = e[o[l++]];
          }
          a[l] = r;
          return Function.apply(null, a).apply(null, c);
        }
        return Function(r)();
      }
      var h = Array(arguments.length - 1);
      var u = 0;
      while (u < h.length) {
        h[u] = arguments[++u];
      }
      u = 0;
      e = e.replace(/%([%dfijs])/g, function (e, t) {
        var r = h[u++];
        switch (t) {
          case "d":
          case "f":
            return String(Number(r));
          case "i":
            return String(Math.floor(r));
          case "j":
            return JSON.stringify(r);
          case "s":
            return String(r);
        }
        return "%";
      });
      if (u !== h.length) {
        throw Error("parameter count mismatch");
      }
      n.push(e);
      return i;
    }
    function s(t) {
      return "function " + (t || r || "") + "(" + (e && e.join(",") || "") + "){\n  " + n.join("\n  ") + "\n}";
    }
    i.toString = s;
    return i;
  }
  module.exports = t;
  t.verbose = false;
}