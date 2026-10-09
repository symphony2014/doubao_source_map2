// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SvgSectorPathElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 6333
         */
module.exports = function (module, exports, require) {
  var i;
  var svgPathElement = require("svg-path-element") /*id: 669730*/;
  var geometryMathUtils = require("geometry-math-utils") /*id: 577989*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var checkPointInArcOrRing = require("check-point-in-arc-or-ring") /*id: 474598*/;
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
  function h(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function l() {
    return (l = Object.assign || function (t) {
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
  function u() {
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
  var c = ["cx", "cy", "radius", "radiusI", "start", "end", "round"];
  var p = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "sector";
      e.shapeKeys = c;
      return e;
    }
    h(e, t);
    e.prototype.getDefaultAttr = function () {
      return l(l({}, t.prototype.getDefaultAttr.call(this)), {
        cx: 0,
        cy: 0,
        radius: 0,
        radiusI: 0,
        start: 0,
        end: 0,
        round: false,
        borderRadius: 0
      });
    };
    e.prototype.getAnimationKeys = function () {
      return u(t.prototype.getAnimationKeys.call(this), ["cx", "cy", "start", "end", "radius", "radiusI"]);
    };
    e.prototype.brush = function (t) {
      var e = this.attr;
      var n = e.cx;
      var i = e.cy;
      var r = e.radius;
      var a = e.radiusI;
      var s = e.start;
      var h = e.end;
      var l = e.round;
      var u = e.borderRadius;
      if (!geometryMathUtils.isApproxEqual(s, h) || this.isClip) {
        var c = Math.abs(s - h);
        if (geometryMathUtils.isApproxEqual(c, geometryMathUtils.twoPi) || c > geometryMathUtils.twoPi) {
          t.arc(n, i, r, geometryMathUtils.twoPi, 0, true);
          t.moveTo(n + a, i);
          t.arc(n, i, a, 0, geometryMathUtils.twoPi, false);
          return;
        }
        var p = h < s;
        if (l || !u || u === 0) {
          var d = undefined;
          var f = undefined;
          t.arc(n, i, a, h, s, !p);
          if (l) {
            var g = geometryMathUtils.getPolarPoint(n, i, (r + a) / 2, s);
            var y = g.x;
            var v = g.y;
            d = p ? s + Math.PI : s - Math.PI;
            f = s;
            t.arc(y, v, Math.abs(r - a) / 2, d, f, p);
          }
          t.arc(n, i, r, s, h, p);
          if (l) {
            var m = geometryMathUtils.getPolarPoint(n, i, (r + a) / 2, h);
            var y = m.x;
            var v = m.y;
            d = h;
            f = p ? h - Math.PI : h + Math.PI;
            t.arc(y, v, Math.abs(r - a) / 2, d, f, p);
          }
          t.closePath();
        } else {
          var x = undefined;
          var _ = undefined;
          var b = undefined;
          var w = undefined;
          if (typeof u == "number") {
            x = _ = b = w = u;
          } else {
            x = u[0];
            _ = u[1];
            b = u[2];
            w = u[3];
          }
          var S = h - s;
          var A = S * this.attr.radiusI;
          var E = this.attr.radius - this.attr.radiusI;
          var k = S * this.attr.radius;
          var M = this.attr.radius - this.attr.radiusI;
          x = Math.min(A / Math.PI, E / Math.PI, x);
          _ = Math.min(E / Math.PI, k / Math.PI, _);
          b = Math.min(k / Math.PI, M / Math.PI, b);
          w = Math.min(M / Math.PI, A / Math.PI, w);
          var P = x ? Math.asin(x / (x + this.attr.radiusI)) : 0;
          var O = _ ? Math.asin(_ / (this.attr.radius - _)) : 0;
          var C = b ? Math.asin(b / (this.attr.radius - b)) : 0;
          var T = w ? Math.asin(w / (w + this.attr.radiusI)) : 0;
          var I = {
            x: this.attr.radiusI * Math.cos(s) + this.attr.cx,
            y: this.attr.radiusI * Math.sin(s) + this.attr.cy
          };
          var Z = {
            x: (this.attr.radiusI + x) * Math.cos(s) + this.attr.cx,
            y: (this.attr.radiusI + x) * Math.sin(s) + this.attr.cy
          };
          var L = {
            x: (x + this.attr.radiusI) * Math.cos(P) * Math.cos(s) + this.attr.cx,
            y: (x + this.attr.radiusI) * Math.cos(P) * Math.sin(s) + this.attr.cy
          };
          var R = {
            x: (this.attr.radius - _) * Math.cos(O) * Math.cos(s) + this.attr.cx,
            y: (this.attr.radius - _) * Math.cos(O) * Math.sin(s) + this.attr.cy
          };
          var D = {
            x: this.attr.radius * Math.cos(s) + this.attr.cx,
            y: this.attr.radius * Math.sin(s) + this.attr.cy
          };
          var B = {
            x: this.attr.radius * Math.cos(s + O) + this.attr.cx,
            y: this.attr.radius * Math.sin(s + O) + this.attr.cy
          };
          var j = {
            x: this.attr.radius * Math.cos(h) + this.attr.cx,
            y: this.attr.radius * Math.sin(h) + this.attr.cy
          };
          var z = {
            x: (this.attr.radius - b) * Math.cos(h) + this.attr.cx,
            y: (this.attr.radius - b) * Math.sin(h) + this.attr.cy
          };
          var N = {
            x: (this.attr.radiusI + w) * Math.cos(T) * Math.cos(h) + this.attr.cx,
            y: (this.attr.radiusI + w) * Math.cos(T) * Math.sin(h) + this.attr.cy
          };
          var F = {
            x: this.attr.radiusI * Math.cos(h) + this.attr.cx,
            y: this.attr.radiusI * Math.sin(h) + this.attr.cy
          };
          var W = {
            x: this.attr.radiusI * Math.cos(h - T) + this.attr.cx,
            y: this.attr.radiusI * Math.sin(h - T) + this.attr.cy
          };
          t.moveTo(L.x, L.y);
          t.lineTo(R.x, R.y);
          t.arcTo(D.x, D.y, B.x, B.y, _);
          t.arc(this.attr.cx, this.attr.cy, this.attr.radius, s + O, h - C, p);
          t.arcTo(j.x, j.y, z.x, z.y, b);
          t.lineTo(N.x, N.y);
          t.arcTo(F.x, F.y, W.x, W.y, w);
          t.arc(this.attr.cx, this.attr.cy, this.attr.radiusI, h - T, s + P, !p);
          t.arcTo(I.x, I.y, Z.x, Z.y, x);
        }
      }
    };
    e.prototype.isPointInFill = function (t, e) {
      var n = this.attr;
      var i = n.cx;
      var r = n.cy;
      var o = n.radius;
      var a = n.radiusI;
      var h = n.start;
      var l = n.end;
      return checkPointInArcOrRing.isPointInRing(i, r, o, a, h, l, t, e);
    };
    e.prototype.isPointInStroke = function (t, e, n) {
      var i = this.attr;
      var r = i.cx;
      var o = i.cy;
      var a = i.radius;
      var h = i.radiusI;
      var l = i.start;
      var u = i.end;
      return checkPointInArcOrRing.checkPointInArcOrRing(r, o, a, h, l, u, n, t, e);
    };
    e.prototype.computeBBox = function () {
      var t = this.attr;
      var e = t.cx;
      var n = t.cy;
      var i = t.radius;
      var r = t.radiusI;
      var o = t.start;
      var s = t.end;
      var h = t.round;
      var l = o;
      var u = s;
      if (h) {
        var c = Math.asin((i - r) / i) * (u > l ? 1 : -1);
        l -= c;
        u += c;
      }
      return geometryRectUtils.getArcStrokeBounds(e, n, i, r, l, u);
    };
    return e;
  }(svgPathElement.SvgPathElement);
  exports.SvgSectorPathElement = p;
}