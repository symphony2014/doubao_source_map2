// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SvgPolyShapeElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 881678
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var svgPathElement = require("svg-path-element") /*id: 669730*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var geometryPolygonHitTest = require("geometry-polygon-hit-test") /*id: 471102*/;
  var _2dVectorMathUtils = require("2d-vector-math-utils") /*id: 843052*/;
  function l(t, e) {
    var n = t[0];
    var i = t[1];
    return Math.sqrt(Math.pow(e[0] - n, 2) + Math.pow(e[1] - i, 2));
  }
  function u(t, e, n) {
    var i = t._x1;
    var r = t._y1;
    var o = t._x2;
    var a = t._y2;
    if (t._l01_a > 1e-12) {
      var s = t._l01_2a * 2 + t._l01_a * 3 * t._l12_a + t._l12_2a;
      var h = t._l01_a * 3 * (t._l01_a + t._l12_a);
      i = (i * s - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / h;
      r = (r * s - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / h;
    }
    if (t._l23_a > 1e-12) {
      var l = t._l23_2a * 2 + t._l23_a * 3 * t._l12_a + t._l12_2a;
      var u = t._l23_a * 3 * (t._l23_a + t._l12_a);
      o = (o * l + t._x1 * t._l23_2a - e * t._l12_2a) / u;
      a = (a * l + t._y1 * t._l23_2a - n * t._l12_2a) / u;
    }
    t._context.bezierCurveTo(i, r, o, a, t._x2, t._y2);
  }
  function c() {}
  (function () {
    function t(t, e = 0.5) {
      this._context = t;
      this._alpha = e;
    }
    t.prototype.areaStart = function () {
      this._line = 0;
    };
    t.prototype.areaEnd = function () {
      this._line = NaN;
    };
    t.prototype.lineStart = function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    };
    t.prototype.lineEnd = function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
      }
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    };
    t.prototype.point = function (t, e) {
      t *= 1;
      e *= 1;
      if (this._point) {
        var n = this._x2 - t;
        var i = this._y2 - e;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          if (this._line) {
            this._context.lineTo(t, e);
          } else {
            this._context.moveTo(t, e);
          }
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          u(this, t, e);
      }
      this._l01_a = this._l12_a;
      this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a;
      this._l12_2a = this._l23_2a;
      this._x0 = this._x1;
      this._x1 = this._x2;
      this._x2 = t;
      this._y0 = this._y1;
      this._y1 = this._y2;
      this._y2 = e;
    };
  })();
  var p = function () {
    function t(t, e = 0.5) {
      this.areaStart = c;
      this.areaEnd = c;
      this._context = t;
      this._alpha = e;
    }
    t.prototype.lineStart = function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    };
    t.prototype.lineEnd = function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        case 2:
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        case 3:
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
      }
    };
    t.prototype.point = function (t, e) {
      t *= 1;
      e *= 1;
      if (this._point) {
        var n = this._x2 - t;
        var i = this._y2 - e;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x3 = t;
          this._y3 = e;
          break;
        case 1:
          this._point = 2;
          this._context.moveTo(this._x4 = t, this._y4 = e);
          break;
        case 2:
          this._point = 3;
          this._x5 = t;
          this._y5 = e;
          break;
        default:
          u(this, t, e);
      }
      this._l01_a = this._l12_a;
      this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a;
      this._l12_2a = this._l23_2a;
      this._x0 = this._x1;
      this._x1 = this._x2;
      this._x2 = t;
      this._y0 = this._y1;
      this._y1 = this._y2;
      this._y2 = e;
    };
    return t;
  }();
  i = function (t, e) {
    return (i = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function d(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function f(t, e, n) {
    var i = t._x1 - t._x0;
    var r = e - t._x1;
    var o = (t._y1 - t._y0) / (i || r < 0 && -0);
    var a = (n - t._y1) / (r || i < 0 && -0);
    return ((o < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) * Math.min(Math.abs(o), Math.abs(a), Math.abs((o * r + a * i) / (i + r)) * 0.5) || 0;
  }
  function g(t, e) {
    var n = t._x1 - t._x0;
    if (n) {
      return ((t._y1 - t._y0) * 3 / n - e) / 2;
    } else {
      return e;
    }
  }
  function y(t, e, n) {
    var i = t._x0;
    var r = t._y0;
    var o = t._x1;
    var a = t._y1;
    var s = (o - i) / 3;
    t._context.bezierCurveTo(i + s, r + s * e, o - s, a - s * n, o, a);
  }
  var v = function () {
    function t(t) {
      this._context = t;
    }
    t.prototype.areaStart = function () {
      this._line = 0;
    };
    t.prototype.areaEnd = function () {
      this._line = NaN;
    };
    t.prototype.lineStart = function () {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
      this._point = 0;
    };
    t.prototype.lineEnd = function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          y(this, this._t0, g(this, this._t0));
      }
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    };
    t.prototype.point = function (t, e) {
      var n = NaN;
      e *= 1;
      if ((t *= 1) !== this._x1 || e !== this._y1) {
        switch (this._point) {
          case 0:
            this._point = 1;
            if (this._line) {
              this._context.lineTo(t, e);
            } else {
              this._context.moveTo(t, e);
            }
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            y(this, g(this, n = f(this, t, e)), n);
            break;
          default:
            y(this, this._t0, n = f(this, t, e));
        }
        this._x0 = this._x1;
        this._x1 = t;
        this._y0 = this._y1;
        this._y1 = e;
        this._t0 = n;
      }
    };
    return t;
  }();
  var m = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    d(e, t);
    e.prototype.point = function (e, n) {
      t.prototype.point.call(this, n, e);
    };
    return e;
  }(v);
  var x = function () {
    function t(t) {
      this._context = t;
    }
    t.prototype.areaStart = function () {
      this._line = 0;
    };
    t.prototype.areaEnd = function () {
      this._line = NaN;
    };
    t.prototype.lineStart = function () {
      this._x = [];
      this._y = [];
    };
    t.prototype.lineEnd = function () {
      var t = this._x;
      var e = this._y;
      var n = t.length;
      if (n) {
        if (this._line) {
          this._context.lineTo(t[0], e[0]);
        } else {
          this._context.moveTo(t[0], e[0]);
        }
        if (n === 2) {
          this._context.lineTo(t[1], e[1]);
        } else {
          var i = _(t);
          var r = _(e);
          var o = 0;
          var a = 1;
          for (; a < n; ++o, ++a) {
            this._context.bezierCurveTo(i[0][o], r[0][o], i[1][o], r[1][o], t[a], e[a]);
          }
        }
      }
      if (this._line || this._line !== 0 && n === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
      this._x = this._y = null;
    };
    t.prototype.point = function (t, e) {
      this._x.push(+t);
      this._y.push(+e);
    };
    return t;
  }();
  function _(t) {
    var e;
    var n;
    var i = t.length - 1;
    var r = Array(i);
    var o = Array(i);
    var a = Array(i);
    r[0] = 0;
    o[0] = 2;
    a[0] = t[0] + t[1] * 2;
    e = 1;
    for (; e < i - 1; ++e) {
      r[e] = 1;
      o[e] = 4;
      a[e] = t[e] * 4 + t[e + 1] * 2;
    }
    r[i - 1] = 2;
    o[i - 1] = 7;
    a[i - 1] = t[i - 1] * 8 + t[i];
    e = 1;
    for (; e < i; ++e) {
      n = r[e] / o[e - 1];
      o[e] -= n;
      a[e] -= n * a[e - 1];
    }
    r[i - 1] = a[i - 1] / o[i - 1];
    e = i - 2;
    for (; e >= 0; --e) {
      r[e] = (a[e] - r[e + 1]) / o[e];
    }
    e = 0;
    o[i - 1] = (t[i] + r[i - 1]) / 2;
    for (; e < i - 1; ++e) {
      o[e] = t[e + 1] * 2 - r[e + 1];
    }
    return [r, o];
  }
  r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function b(t, e) {
    function n() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function w() {
    return (w = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function S() {
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
  var A = ["pointList", "smooth", "smoothMonotone"];
  var E = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "polyline";
      e.shapeKeys = A;
      return e;
    }
    b(e, t);
    e.prototype.getDefaultAttr = function () {
      return w(w({}, t.prototype.getDefaultAttr.call(this)), {
        pointList: [],
        smooth: false
      });
    };
    e.prototype.getAnimationKeys = function () {
      return S(t.prototype.getAnimationKeys.call(this), ["pointList"]);
    };
    e.prototype.brush = function (t) {
      var e = this.attr;
      var n = e.pointList;
      var i = e.smoothMonotone;
      var r = this.getExtendAttr("borderRadius") || 0;
      var o = this.type === "polygon";
      if (n && n.length !== 0) {
        if (this.attr.smooth) {
          var a = undefined;
          var s = new (this.type === "polygon" ? p : i === "x" ? v : i === "y" ? m : x)(t);
          s.lineStart();
          n.forEach(function (t) {
            return s.point(t.x, t.y);
          });
          s.lineEnd();
        } else {
          t.moveTo(n[0].x, n[0].y);
          var h = -1;
          var l = +!o;
          for (; l < n.length; l++) {
            h++;
            if (r) {
              var u = Array.isArray(r) ? r[h] || 0 : r;
              var c = n[l - 1];
              var d = n[l];
              var f = n[l + 1];
              var g = !c && o;
              if (g) {
                c = n[n.length - 1];
              }
              if (!f && o) {
                f = n[0];
              }
              this.lineToWithBorderRadius(t, c, d, f, u, g);
            } else {
              t.lineTo(n[l].x, n[l].y);
            }
          }
        }
      }
    };
    e.prototype.lineToWithBorderRadius = function (t, e, n, i, r, o) {
      if (!i && this.type === "polyline") {
        return t.lineTo(n.x, n.y);
      }
      var a;
      var s;
      var u;
      var c;
      var p;
      var d;
      var f;
      var g;
      var y;
      var v;
      var m;
      var x;
      var _;
      var b;
      var w;
      var S;
      var A;
      var E;
      var k;
      a = [e.x, e.y];
      s = [n.x, n.y];
      u = [i.x, i.y];
      c = Math.min(l(a, s), l(s, u));
      p = _2dVectorMathUtils.crossProduct2D(_2dVectorMathUtils.subtractVectors([0, 0], u, a), _2dVectorMathUtils.subtractVectors([0, 0], s, a)) < 0;
      f = Math.min(r, Math.abs(c * Math.tan((d = _2dVectorMathUtils.getAngleBetween(_2dVectorMathUtils.subtractVectors([0, 0], a, s), _2dVectorMathUtils.subtractVectors([0, 0], u, s))) / 2)));
      g = Math.atan2(a[1] - s[1], a[0] - s[0]) + (p ? -1 : 1) * d / 2;
      v = (y = f / Math.sin(d / 2)) * Math.cos(g);
      m = y * Math.sin(g);
      x = s[0] + v;
      _ = s[1] + m;
      b = g + Math.PI - (Math.PI / 2 - d / 2) * (p ? 1 : -1);
      w = g + Math.PI + (Math.PI / 2 - d / 2) * (p ? 1 : -1);
      S = x + f * Math.cos(b);
      A = _ + f * Math.sin(b);
      E = x + f * Math.cos(w);
      k = _ + f * Math.sin(w);
      var M = {
        radius: f,
        startPoint: [S, A],
        endPoint: [E, k],
        startAngle: b,
        endAngle: w,
        center: [x, _],
        clocWise: p
      };
      var P = M.radius;
      var O = M.startPoint;
      var C = M.startAngle;
      var T = M.endAngle;
      var I = M.center;
      var Z = M.clocWise;
      if (o) {
        t.moveTo(O[0], O[1]);
      } else {
        t.lineTo(O[0], O[1]);
      }
      t.arc(I[0], I[1], P, C, T, !Z);
    };
    e.prototype.computeBBox = function () {
      if (this.attr.smooth) {
        return this.getPathData().getPathBBox();
      } else {
        return geometryRectUtils.getPointsBounds(this.attr.pointList);
      }
    };
    e.prototype.isPointInFill = function (t, e) {
      var n = this.attr.pointList;
      return geometryPolygonHitTest.isPointInPolygon(n, t, e);
    };
    e.prototype.isPointInStroke = function (t, e, n) {
      var i = this.attr.pointList;
      return geometryPolygonHitTest.checkPolygonLineHit(i, false, n, t, e);
    };
    e.prototype.pickByGPU = function () {
      return this.attr.smooth;
    };
    return e;
  }(svgPathElement.SvgPathElement);
  require.d(exports, {
    SvgPolyShapeElement: function () {
      return E;
    }
  });
}