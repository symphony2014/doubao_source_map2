// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'setDomAttributes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 394222
         */
module.exports = function (module, exports, require) {
  var tsRuntimeHelpers = require("ts-runtime-helpers") /*id: 287285*/;
  function i(t, e) {
    var n;
    var i;
    var o;
    var a;
    var s;
    var l;
    var u;
    var c;
    var f;
    var d;
    var h = e.on;
    var p = h === undefined ? {} : h;
    var v = e.dataset;
    var y = e.style;
    var g = e.className;
    var m = tsRuntimeHelpers.restHelper(e, ["on", "dataset", "style", "className"]);
    try {
      var E = tsRuntimeHelpers.createIterator(Object.entries(m));
      var b = E.next();
      for (; !b.done; b = E.next()) {
        var x = tsRuntimeHelpers.spreadArray(b.value, 2);
        var I = x[0];
        var T = x[1];
        if (I.startsWith("on")) {
          var _ = I.split("on")[1].toLowerCase();
          p[_] = T;
          delete m[I];
        }
      }
    } catch (t) {
      n = {
        error: t
      };
    } finally {
      try {
        if (b && !b.done && (i = E.return)) {
          i.call(E);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    if (Object.keys(p).length > 0) {
      try {
        var S = tsRuntimeHelpers.createIterator(Object.keys(p));
        var A = S.next();
        for (; !A.done; A = S.next()) {
          var _ = A.value;
          var C = p[_];
          try {
            t.addEventListener(_, C);
          } catch (t) {
            throw Error("[DOM-renderer]: addEventListener failed, eventName: " + _ + ", handler: " + C + ", msg: " + t.message);
          }
        }
      } catch (t) {
        o = {
          error: t
        };
      } finally {
        try {
          if (A && !A.done && (a = S.return)) {
            a.call(S);
          }
        } finally {
          if (o) {
            throw o.error;
          }
        }
      }
    }
    if (v) {
      try {
        var N = tsRuntimeHelpers.createIterator(Object.entries(v));
        var L = N.next();
        for (; !L.done; L = N.next()) {
          var O = tsRuntimeHelpers.spreadArray(L.value, 2);
          var w = O[0];
          var D = O[1];
          t.dataset[w] = "" + D;
        }
      } catch (t) {
        s = {
          error: t
        };
      } finally {
        try {
          if (L && !L.done && (l = N.return)) {
            l.call(N);
          }
        } finally {
          if (s) {
            throw s.error;
          }
        }
      }
    }
    if (y) {
      var P = "";
      try {
        var k = tsRuntimeHelpers.createIterator(Object.entries(y));
        var R = k.next();
        for (; !R.done; R = k.next()) {
          var M = tsRuntimeHelpers.spreadArray(R.value, 2);
          var w = M[0];
          var D = M[1];
          var z = w.replace(/[A-Z]/g, function (t) {
            return "-" + t.toLowerCase();
          });
          var U = typeof D == "number" ? D + "px" : D;
          P += z + ":" + U + ";";
        }
      } catch (t) {
        u = {
          error: t
        };
      } finally {
        try {
          if (R && !R.done && (c = k.return)) {
            c.call(k);
          }
        } finally {
          if (u) {
            throw u.error;
          }
        }
      }
      if (P) {
        t.setAttribute("style", P);
      }
    }
    if (g) {
      t.setAttribute("class", g);
    }
    try {
      var F = tsRuntimeHelpers.createIterator(Object.keys(m));
      var X = F.next();
      for (; !X.done; X = F.next()) {
        var j = X.value;
        t.setAttribute(j, e[j]);
      }
    } catch (t) {
      f = {
        error: t
      };
    } finally {
      try {
        if (X && !X.done && (d = F.return)) {
          d.call(F);
        }
      } finally {
        if (f) {
          throw f.error;
        }
      }
    }
    return t;
  }
  require.d(exports, {
    setDomAttributes: function () {
      return i;
    }
  });
}