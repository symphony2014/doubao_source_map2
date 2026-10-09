// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ki' to 'getPointsBounds'
// - Renamed export 'Mk' to 'getRectsBounds'
// - Renamed export 'PL' to 'getArcStrokeBounds'
// - Renamed export 'XH' to 'createSquareRect'
// - Renamed export 'Xb' to 'rectsIntersect'
// - Renamed export 'al' to 'getArcBounds'
// - Renamed export 'cU' to 'createEmptyRect'
// - Renamed export 'fH' to 'alignRect'
// - Renamed export 'gr' to 'expandRect'
// - Renamed export 'iv' to 'normalizeRect'
// - Renamed export 'mo' to 'containsPoint'
// - Renamed export 'sX' to 'snapRectToGrid'
// - Renamed export 'w1' to 'rectFromPoints'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 404476
         */
module.exports = function (module, exports, require) {
  var geometryMathUtils = require("geometry-math-utils") /*id: 577989*/;
  var geometryPoint2d = require("geometry-point-2d") /*id: 325076*/;
  function o() {
    var t = 0;
    var e = 0;
    var n = arguments.length;
    for (; e < n; e++) {
      t += arguments[e].length;
    }
    var i = Array(t);
    var r = 0;
    var e = 0;
    for (; e < n; e++) {
      var o = arguments[e];
      var a = 0;
      var s = o.length;
      for (; a < s; a++, r++) {
        i[r] = o[a];
      }
    }
    return i;
  }
  function a() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  function s(t) {
    var e = t.x;
    var n = t.y;
    var i = t.width;
    var r = t.height;
    var o = Math.floor(e - 0.5);
    var a = Math.floor(n - 0.5);
    return {
      x: o,
      y: a,
      width: Math.ceil(e + i + 0.5) - o,
      height: Math.ceil(n + r + 0.5) - a
    };
  }
  function h(t, e, n, i = 1) {
    return e >= t.x - i / 2 && e <= t.x + t.width + i / 2 && n >= t.y - i / 2 && n <= t.y + t.height + i / 2;
  }
  function l(t, e) {
    return Math.abs(t.x + t.width / 2 - (e.x + e.width / 2)) * 2 < t.width + e.width && Math.abs(t.y + t.height / 2 - (e.y + e.height / 2)) * 2 < t.height + e.height;
  }
  function u(t, e) {
    return {
      x: t.x - e,
      y: t.y - e,
      width: t.width + e * 2,
      height: t.height + e * 2
    };
  }
  function c(t, e = true) {
    if (e) {
      t = t.filter(function (t) {
        return t.width > 0 && t.height > 0;
      });
    }
    if (t.length === 0) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    var n = Number.POSITIVE_INFINITY;
    var i = Number.POSITIVE_INFINITY;
    var r = Number.NEGATIVE_INFINITY;
    var o = Number.NEGATIVE_INFINITY;
    var a = 0;
    for (; a < t.length; a++) {
      var s = t[a];
      if (s.width !== 0 && s.height !== 0 || !e) {
        n = Math.min(s.x, n);
        i = Math.min(s.y, i);
        r = Math.max(s.x + s.width, r);
        o = Math.max(s.y + s.height, o);
      }
    }
    return {
      x: n,
      y: i,
      width: r - n,
      height: o - i
    };
  }
  function p(t, e, n, i) {
    return {
      x: Math.min(t, t + n),
      y: Math.min(e, e + i),
      width: Math.abs(n),
      height: Math.abs(i)
    };
  }
  function d(t, e, n) {
    return {
      x: t - n,
      y: e - n,
      width: n * 2,
      height: n * 2
    };
  }
  function f(t, e, n, i) {
    return {
      x: Math.min(t, n),
      y: Math.min(e, i),
      width: Math.abs(t - n),
      height: Math.abs(e - i)
    };
  }
  function g(t, e, n, a, s) {
    if (n === 0 || geometryMathUtils.isApproxEqual(a, s)) {
      return {
        x: t,
        y: e,
        width: 0,
        height: 0
      };
    }
    var h = Math.abs(s - a);
    var l = [t - n, t + n];
    var u = [e - n, e + n];
    if (h > geometryMathUtils.twoPi || geometryMathUtils.isApproxEqual(h, geometryMathUtils.twoPi)) {
      return d(t, e, n);
    }
    var c = h > Math.PI;
    var p = (a + s) / 2;
    var f = geometryPoint2d.Point2D.fromPolar(t, e, n, a);
    var g = geometryPoint2d.Point2D.fromPolar(t, e, n, s);
    var y = g.distanceTo(f.x, f.y);
    var m = g.getAngleFrom(f.x, f.y);
    var x = geometryPoint2d.Point2D.fromPolar(t, e, n, p);
    var _ = new geometryPoint2d.Point2D((f.x + g.x) / 2, (f.y + g.y) / 2);
    var b = v(o([x.clone().angleMoveTo(m, c ? n : y / 2), x.clone().angleMoveTo(m + Math.PI, c ? n : y / 2)], [_.clone().angleMoveTo(m, c ? n : y / 2), _.clone().angleMoveTo(m + Math.PI, c ? n : y / 2)]));
    var w = b.x;
    var S = b.y;
    var A = b.width;
    var E = b.height;
    var k = Math.max(l[0], w);
    var M = Math.max(u[0], S);
    return {
      x: k,
      y: M,
      width: Math.min(l[1], w + A) - k,
      height: Math.min(u[1], S + E) - M
    };
  }
  function y(t, e, n, i, r, o) {
    return c([g(t, e, n, r, o), g(t, e, Math.max(i, 0.000001), r, o)]);
  }
  function v(t) {
    if (t.length === 0) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    var e = Number.POSITIVE_INFINITY;
    var n = Number.POSITIVE_INFINITY;
    var i = Number.NEGATIVE_INFINITY;
    var r = Number.NEGATIVE_INFINITY;
    t.forEach(function (t) {
      e = Math.min(t.x, e);
      i = Math.max(t.x, i);
      n = Math.min(t.y, n);
      r = Math.max(t.y, r);
    });
    return {
      x: e,
      y: n,
      width: i - e,
      height: r - n
    };
  }
  function m(t, e, n, i, r) {
    var o = t.x;
    var a = t.y;
    var s = t.width;
    var h = t.height;
    var l = o;
    var u = a;
    if (i === "left") {
      l = o;
    } else if (i === "center") {
      l = o + (s - e) / 2;
    } else if (i === "right") {
      l = o + s - e;
    }
    if (r === "top") {
      u = a;
    } else if (r === "middle") {
      u = a + (h - n) / 2;
    } else if (r === "bottom") {
      u = a + h - n;
    }
    return {
      x: l,
      y: u
    };
  }
  require.d(exports, {
    getPointsBounds: function () {
      return v;
    },
    getRectsBounds: function () {
      return c;
    },
    getArcStrokeBounds: function () {
      return y;
    },
    createSquareRect: function () {
      return d;
    },
    rectsIntersect: function () {
      return l;
    },
    getArcBounds: function () {
      return g;
    },
    createEmptyRect: function () {
      return a;
    },
    alignRect: function () {
      return m;
    },
    expandRect: function () {
      return u;
    },
    normalizeRect: function () {
      return p;
    },
    containsPoint: function () {
      return h;
    },
    snapRectToGrid: function () {
      return s;
    },
    rectFromPoints: function () {
      return f;
    }
  });
}