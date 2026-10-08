// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaShapeBase'
// - Resolved require(790913) to 'konva-shape-base'
// - Renamed variable 'n' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 's' to 'bezierArcLengthUtils'
// - Resolved require(688449) to 'bezier-arc-length-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 789339
         */
module.exports = function (module, exports, require) {
  exports.Path = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let bezierArcLengthUtils = require("bezier-arc-length-utils") /*id: 688449*/;
  class o extends konvaShapeBase.Shape {
    constructor(t) {
      super(t);
      this.dataArray = [];
      this.pathLength = 0;
      this._readDataAttribute();
      this.on("dataChange.konva", function () {
        this._readDataAttribute();
      });
    }
    _readDataAttribute() {
      this.dataArray = o.parsePathData(this.data());
      this.pathLength = o.getPathLength(this.dataArray);
    }
    _sceneFunc(t) {
      var e = this.dataArray;
      t.beginPath();
      var i = false;
      var r = 0;
      for (; r < e.length; r++) {
        var a = e[r].command;
        var n = e[r].points;
        switch (a) {
          case "L":
            t.lineTo(n[0], n[1]);
            break;
          case "M":
            t.moveTo(n[0], n[1]);
            break;
          case "C":
            t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
            break;
          case "Q":
            t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
            break;
          case "A":
            var s = n[0];
            var o = n[1];
            var h = n[2];
            var l = n[3];
            var d = n[4];
            var c = n[5];
            var u = n[6];
            var f = n[7];
            var g = h > l ? h : l;
            var p = h > l ? 1 : h / l;
            var v = h > l ? l / h : 1;
            t.translate(s, o);
            t.rotate(u);
            t.scale(p, v);
            t.arc(0, 0, g, d, d + c, 1 - f);
            t.scale(1 / p, 1 / v);
            t.rotate(-u);
            t.translate(-s, -o);
            break;
          case "z":
            i = true;
            t.closePath();
        }
      }
      if (i || this.hasFill()) {
        t.fillStrokeShape(this);
      } else {
        t.strokeShape(this);
      }
    }
    getSelfRect() {
      var t;
      var e;
      var i = [];
      this.dataArray.forEach(function (t) {
        if (t.command === "A") {
          var e = t.points[4];
          var r = t.points[5];
          var a = t.points[4] + r;
          var n = Math.PI / 180;
          if (Math.abs(e - a) < n) {
            n = Math.abs(e - a);
          }
          if (r < 0) {
            for (let r = e - n; r > a; r -= n) {
              let e = o.getPointOnEllipticalArc(t.points[0], t.points[1], t.points[2], t.points[3], r, 0);
              i.push(e.x, e.y);
            }
          } else {
            for (let r = e + n; r < a; r += n) {
              let e = o.getPointOnEllipticalArc(t.points[0], t.points[1], t.points[2], t.points[3], r, 0);
              i.push(e.x, e.y);
            }
          }
        } else if (t.command === "C") {
          for (let e = 0; e <= 1; e += 0.01) {
            let r = o.getPointOnCubicBezier(e, t.start.x, t.start.y, t.points[0], t.points[1], t.points[2], t.points[3], t.points[4], t.points[5]);
            i.push(r.x, r.y);
          }
        } else {
          i = i.concat(t.points);
        }
      });
      var r = i[0];
      var a = i[0];
      var n = i[1];
      var s = i[1];
      var h = 0;
      for (; h < i.length / 2; h++) {
        t = i[h * 2];
        e = i[h * 2 + 1];
        if (!isNaN(t)) {
          r = Math.min(r, t);
          a = Math.max(a, t);
        }
        if (!isNaN(e)) {
          n = Math.min(n, e);
          s = Math.max(s, e);
        }
      }
      return {
        x: r,
        y: n,
        width: a - r,
        height: s - n
      };
    }
    getLength() {
      return this.pathLength;
    }
    getPointAtLength(t) {
      return o.getPointAtLengthOfDataArray(t, this.dataArray);
    }
    static getLineLength(t, e, i, r) {
      return Math.sqrt((i - t) * (i - t) + (r - e) * (r - e));
    }
    static getPathLength(t) {
      let e = 0;
      for (var i = 0; i < t.length; ++i) {
        e += t[i].pathLength;
      }
      return e;
    }
    static getPointAtLengthOfDataArray(t, e) {
      var i;
      var r = 0;
      var a = e.length;
      if (!a) {
        return null;
      }
      while (r < a && t > e[r].pathLength) {
        t -= e[r].pathLength;
        ++r;
      }
      if (r === a) {
        return {
          x: (i = e[r - 1].points.slice(-2))[0],
          y: i[1]
        };
      }
      if (t < 0.01) {
        return {
          x: (i = e[r].points.slice(0, 2))[0],
          y: i[1]
        };
      }
      var n = e[r];
      var h = n.points;
      switch (n.command) {
        case "L":
          return o.getPointOnLine(t, n.start.x, n.start.y, h[0], h[1]);
        case "C":
          return o.getPointOnCubicBezier(bezierArcLengthUtils.t2length(t, o.getPathLength(e), t => bezierArcLengthUtils.getCubicArcLength([n.start.x, h[0], h[2], h[4]], [n.start.y, h[1], h[3], h[5]], t)), n.start.x, n.start.y, h[0], h[1], h[2], h[3], h[4], h[5]);
        case "Q":
          return o.getPointOnQuadraticBezier(bezierArcLengthUtils.t2length(t, o.getPathLength(e), t => bezierArcLengthUtils.getQuadraticArcLength([n.start.x, h[0], h[2]], [n.start.y, h[1], h[3]], t)), n.start.x, n.start.y, h[0], h[1], h[2], h[3]);
        case "A":
          var l = h[0];
          var d = h[1];
          var c = h[2];
          var u = h[3];
          var f = h[4];
          var g = h[5];
          var p = h[6];
          f += g * t / n.pathLength;
          return o.getPointOnEllipticalArc(l, d, c, u, f, p);
      }
      return null;
    }
    static getPointOnLine(t, e, i, r, a, n = e, s = i) {
      var o = (a - i) / (r - e + 1e-8);
      var h = Math.sqrt(t * t / (1 + o * o));
      if (r < e) {
        h *= -1;
      }
      var l = o * h;
      if (r === e) {
        d = {
          x: n,
          y: s + l
        };
      } else if ((s - i) / (n - e + 1e-8) === o) {
        d = {
          x: n + h,
          y: s + l
        };
      } else {
        var d;
        var c;
        var u;
        var f = this.getLineLength(e, i, r, a);
        var g = (n - e) * (r - e) + (s - i) * (a - i);
        g /= f * f;
        c = e + g * (r - e);
        u = i + g * (a - i);
        var p = this.getLineLength(n, s, c, u);
        var v = Math.sqrt(t * t - p * p);
        h = Math.sqrt(v * v / (1 + o * o));
        if (r < e) {
          h *= -1;
        }
        l = o * h;
        d = {
          x: c + h,
          y: u + l
        };
      }
      return d;
    }
    static getPointOnCubicBezier(t, e, i, r, a, n, s, o, h) {
      function l(t) {
        return t * 3 * (1 - t) * (1 - t);
      }
      return {
        x: t * t * t * o + t * 3 * t * (1 - t) * n + r * l(t) + (1 - t) * (1 - t) * (1 - t) * e,
        y: t * t * t * h + t * 3 * t * (1 - t) * s + a * l(t) + (1 - t) * (1 - t) * (1 - t) * i
      };
    }
    static getPointOnQuadraticBezier(t, e, i, r, a, n, s) {
      return {
        x: t * t * n + t * 2 * (1 - t) * r + (1 - t) * (1 - t) * e,
        y: t * t * s + t * 2 * (1 - t) * a + (1 - t) * (1 - t) * i
      };
    }
    static getPointOnEllipticalArc(t, e, i, r, a, n) {
      var s = Math.cos(n);
      var o = Math.sin(n);
      var h = {
        x: i * Math.cos(a),
        y: r * Math.sin(a)
      };
      return {
        x: t + (h.x * s - h.y * o),
        y: e + (h.x * o + h.y * s)
      };
    }
    static parsePathData(t) {
      if (!t) {
        return [];
      }
      var e = t;
      var i = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
      e = e.replace(RegExp(" ", "g"), ",");
      for (var r = 0; r < i.length; r++) {
        e = e.replace(RegExp(i[r], "g"), "|" + i[r]);
      }
      var a = e.split("|");
      var n = [];
      var s = [];
      var o = 0;
      var h = 0;
      var l = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
      for (r = 1; r < a.length; r++) {
        var d = a[r];
        var c = d.charAt(0);
        d = d.slice(1);
        s.length = 0;
        while (v = l.exec(d)) {
          s.push(v[0]);
        }
        var u = [];
        var f = 0;
        var g = s.length;
        for (; f < g; f++) {
          if (s[f] === "00") {
            u.push(0, 0);
            continue;
          }
          var p = parseFloat(s[f]);
          if (isNaN(p)) {
            u.push(0);
          } else {
            u.push(p);
          }
        }
        while (u.length > 0 && !isNaN(u[0])) {
          var v;
          var m;
          var y;
          var _;
          var b;
          var x;
          var S;
          var C;
          var w;
          var P;
          var T;
          var E = "";
          var M = [];
          var k = o;
          var A = h;
          switch (c) {
            case "l":
              o += u.shift();
              h += u.shift();
              E = "L";
              M.push(o, h);
              break;
            case "L":
              o = u.shift();
              h = u.shift();
              M.push(o, h);
              break;
            case "m":
              var O = u.shift();
              var F = u.shift();
              o += O;
              h += F;
              E = "M";
              if (n.length > 2 && n[n.length - 1].command === "z") {
                for (var D = n.length - 2; D >= 0; D--) {
                  if (n[D].command === "M") {
                    o = n[D].points[0] + O;
                    h = n[D].points[1] + F;
                    break;
                  }
                }
              }
              M.push(o, h);
              c = "l";
              break;
            case "M":
              o = u.shift();
              h = u.shift();
              E = "M";
              M.push(o, h);
              c = "L";
              break;
            case "h":
              o += u.shift();
              E = "L";
              M.push(o, h);
              break;
            case "H":
              o = u.shift();
              E = "L";
              M.push(o, h);
              break;
            case "v":
              h += u.shift();
              E = "L";
              M.push(o, h);
              break;
            case "V":
              h = u.shift();
              E = "L";
              M.push(o, h);
              break;
            case "C":
              M.push(u.shift(), u.shift(), u.shift(), u.shift());
              o = u.shift();
              h = u.shift();
              M.push(o, h);
              break;
            case "c":
              M.push(o + u.shift(), h + u.shift(), o + u.shift(), h + u.shift());
              o += u.shift();
              h += u.shift();
              E = "C";
              M.push(o, h);
              break;
            case "S":
              y = o;
              _ = h;
              if ((m = n[n.length - 1]).command === "C") {
                y = o + (o - m.points[2]);
                _ = h + (h - m.points[3]);
              }
              M.push(y, _, u.shift(), u.shift());
              o = u.shift();
              h = u.shift();
              E = "C";
              M.push(o, h);
              break;
            case "s":
              y = o;
              _ = h;
              if ((m = n[n.length - 1]).command === "C") {
                y = o + (o - m.points[2]);
                _ = h + (h - m.points[3]);
              }
              M.push(y, _, o + u.shift(), h + u.shift());
              o += u.shift();
              h += u.shift();
              E = "C";
              M.push(o, h);
              break;
            case "Q":
              M.push(u.shift(), u.shift());
              o = u.shift();
              h = u.shift();
              M.push(o, h);
              break;
            case "q":
              M.push(o + u.shift(), h + u.shift());
              o += u.shift();
              h += u.shift();
              E = "Q";
              M.push(o, h);
              break;
            case "T":
              y = o;
              _ = h;
              if ((m = n[n.length - 1]).command === "Q") {
                y = o + (o - m.points[0]);
                _ = h + (h - m.points[1]);
              }
              o = u.shift();
              h = u.shift();
              E = "Q";
              M.push(y, _, o, h);
              break;
            case "t":
              y = o;
              _ = h;
              if ((m = n[n.length - 1]).command === "Q") {
                y = o + (o - m.points[0]);
                _ = h + (h - m.points[1]);
              }
              o += u.shift();
              h += u.shift();
              E = "Q";
              M.push(y, _, o, h);
              break;
            case "A":
              b = u.shift();
              x = u.shift();
              S = u.shift();
              C = u.shift();
              w = u.shift();
              P = o;
              T = h;
              o = u.shift();
              h = u.shift();
              E = "A";
              M = this.convertEndpointToCenterParameterization(P, T, o, h, C, w, b, x, S);
              break;
            case "a":
              b = u.shift();
              x = u.shift();
              S = u.shift();
              C = u.shift();
              w = u.shift();
              P = o;
              T = h;
              o += u.shift();
              h += u.shift();
              E = "A";
              M = this.convertEndpointToCenterParameterization(P, T, o, h, C, w, b, x, S);
          }
          n.push({
            command: E || c,
            points: M,
            start: {
              x: k,
              y: A
            },
            pathLength: this.calcLength(k, A, E || c, M)
          });
        }
        if (c === "z" || c === "Z") {
          n.push({
            command: "z",
            points: [],
            start: undefined,
            pathLength: 0
          });
        }
      }
      return n;
    }
    static calcLength(t, e, i, r) {
      var a;
      var n;
      var h;
      var l;
      switch (i) {
        case "L":
          return o.getLineLength(t, e, r[0], r[1]);
        case "C":
          return bezierArcLengthUtils.getCubicArcLength([t, r[0], r[2], r[4]], [e, r[1], r[3], r[5]], 1);
        case "Q":
          return bezierArcLengthUtils.getQuadraticArcLength([t, r[0], r[2]], [e, r[1], r[3]], 1);
        case "A":
          a = 0;
          var d = r[4];
          var c = r[5];
          var u = r[4] + c;
          var f = Math.PI / 180;
          if (Math.abs(d - u) < f) {
            f = Math.abs(d - u);
          }
          n = o.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], d, 0);
          if (c < 0) {
            for (l = d - f; l > u; l -= f) {
              h = o.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], l, 0);
              a += o.getLineLength(n.x, n.y, h.x, h.y);
              n = h;
            }
          } else {
            for (l = d + f; l < u; l += f) {
              h = o.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], l, 0);
              a += o.getLineLength(n.x, n.y, h.x, h.y);
              n = h;
            }
          }
          h = o.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], u, 0);
          return a += o.getLineLength(n.x, n.y, h.x, h.y);
      }
      return 0;
    }
    static convertEndpointToCenterParameterization(t, e, i, r, a, n, s, o, h) {
      var l = Math.PI / 180 * h;
      var d = Math.cos(l) * (t - i) / 2 + Math.sin(l) * (e - r) / 2;
      var c = Math.sin(l) * -1 * (t - i) / 2 + Math.cos(l) * (e - r) / 2;
      var u = d * d / (s * s) + c * c / (o * o);
      if (u > 1) {
        s *= Math.sqrt(u);
        o *= Math.sqrt(u);
      }
      var f = Math.sqrt((s * s * (o * o) - s * s * (c * c) - o * o * (d * d)) / (s * s * (c * c) + o * o * (d * d)));
      if (a === n) {
        f *= -1;
      }
      if (isNaN(f)) {
        f = 0;
      }
      var g = f * s * c / o;
      var p = -(f * o) * d / s;
      var v = (t + i) / 2 + Math.cos(l) * g - Math.sin(l) * p;
      var m = (e + r) / 2 + Math.sin(l) * g + Math.cos(l) * p;
      function y(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      }
      function _(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (y(t) * y(e));
      }
      function b(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(_(t, e));
      }
      var x = b([1, 0], [(d - g) / s, (c - p) / o]);
      var S = [(d - g) / s, (c - p) / o];
      var C = [(d * -1 - g) / s, (c * -1 - p) / o];
      var w = b(S, C);
      if (_(S, C) <= -1) {
        w = Math.PI;
      }
      if (_(S, C) >= 1) {
        w = 0;
      }
      if (n === 0 && w > 0) {
        w -= Math.PI * 2;
      }
      if (n === 1 && w < 0) {
        w += Math.PI * 2;
      }
      return [v, m, s, o, x, w, l, n];
    }
  }
  exports.Path = o;
  o.prototype.className = "Path";
  o.prototype._attrsAffectingSize = ["data"];
  konvaCoreConfig._registerNode(o);
  konvaPropertyFactory.Factory.addGetterSetter(o, "data");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}