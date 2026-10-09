// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Path'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 993453
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var a;
  var s;
  var h;
  var arraySumHelper = require("array-sum-helper") /*id: 218454*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  (i = a ||= {}).MOVE_TO = "moveTo";
  i.LINE_TO = "lineTo";
  i.ARC_TO = "arcTo";
  i.BEZIER_CURVE_TO = "bezierCurveTo";
  i.QUADRATIC_CURVE_TO = "quadraticCurveTo";
  i.CLOSE_PATH = "closePath";
  i.ELLIPSE = "ellipse";
  i.RECT = "rect";
  (r = s ||= {}).M = "M";
  r.L = "L";
  r.H = "H";
  r.V = "V";
  r.C = "C";
  r.S = "S";
  r.Q = "Q";
  r.T = "T";
  r.A = "A";
  r.Z = "Z";
  r.m = "m";
  r.l = "l";
  r.h = "h";
  r.v = "v";
  r.c = "c";
  r.s = "s";
  r.q = "q";
  r.t = "t";
  r.a = "a";
  r.z = "z";
  var c = {
    m: 2,
    l: 2,
    h: 1,
    v: 1,
    c: 6,
    s: 4,
    q: 4,
    t: 2,
    a: 7,
    z: 0
  };
  (o = h ||= {})[o.NUMBER = 0] = "NUMBER";
  o[o.COMMAND = 1] = "COMMAND";
  o[o.ANY = 2] = "ANY";
  var p = ["m", "l", "h", "v", "c", "s", "q", "t", "a", "z"];
  function d(t, e, n, i) {
    return [n * 2 - t, i * 2 - e];
  }
  function f(t, e, n, i) {
    var r = Math.sqrt((t * t + e * e) * (n * n + i * i));
    var o = Math.acos((t * n + e * i) / r);
    if (t * i - e * n < 0) {
      o = -o;
    }
    return o;
  }
  function g(t, e, n, i, r, o, a, s, h) {
    var l = Math.PI * r / 180;
    var u = 0;
    var c = 0;
    var p = 0;
    var d = 0;
    if (n == 0 || i == 0) {
      return -1;
    }
    var g = Math.sin(l);
    var y = Math.cos(l);
    var v = (t - s) / 2;
    var m = (e - h) / 2;
    var x = y * v + g * m;
    var _ = y * m - g * v;
    var b = n * i;
    var w = n * _;
    var S = i * x;
    var A = w * w + S * S;
    var E = Math.sqrt(Math.abs((b * b - A) / A));
    if (o == a) {
      E = -E;
    }
    var k = E * w / i;
    var M = -E * S / n;
    u = y * k - g * M + (t + s) / 2;
    c = g * k + y * M + (e + h) / 2;
    var P = (x - k) / n;
    var O = (_ - M) / i;
    p = f(1, 0, P, O);
    d = f(P, O, -((x + k) / n), -((_ + M) / i));
    for (var C = Math.PI * 2; d > C;) {
      d -= C;
    }
    while (d < 0) {
      d += C;
    }
    if (a === 0) {
      d -= C;
    }
    return [u, c, n, i, l, p, p + d, 1 - a];
  }
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var geometryMathUtils = require("geometry-math-utils") /*id: 577989*/;
  function m() {
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
  function x(t, e, n, i, r) {
    var o = t * (e * -3 + n * 9 - i * 9 + r * 3) + e * 6 - n * 12 + i * 6;
    return t * o - e * 3 + n * 3;
  }
  function _(t, e, n, i) {
    return Math.sqrt(Math.pow(n - t, 2) + Math.pow(i - e, 2));
  }
  function b(t, e, n, i, r, o, a, s, h = 1) {
    var l = h / 2;
    var u = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816];
    var c = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472];
    var p = 0;
    var d = 0;
    for (; d < 12; d++) {
      var f = l * u[d] + l;
      var g = x(f, t, n, r, a);
      var y = x(f, e, i, o, s);
      var v = g * g + y * y;
      p += c[d] * Math.sqrt(v);
    }
    return l * p;
  }
  function w(t) {
    if (t.type === "line") {
      return _.apply(null, t.params);
    }
    if (t.type === "arc") {
      var e = t.params[2];
      var n = t.params[3];
      return Math.abs(t.params[4] - n) * e;
    }
    if (t.type === "bezier") {
      return b.apply(null, t.params);
    }
  }
  var S = {
    line: function (t, e, n, i, r) {
      return {
        x: e + (i - e) * t,
        y: n + (r - n) * t,
        alpha: Math.atan2(r - n, i - e)
      };
    },
    arc: function (t, e, n, i, r, o) {
      var a = r + t * (o - r);
      var s = a + (r > o ? -Math.PI / 2 : Math.PI / 2);
      return {
        x: e + Math.cos(a) * i,
        y: n + Math.sin(a) * i,
        alpha: s
      };
    },
    bezier: function (t, e, n, i, r, o, a, s, h) {
      var l = 1 - t;
      var u = Math.pow(l, 3);
      var c = Math.pow(l, 2);
      var p = t * t;
      var d = p * t;
      return {
        x: u * e + c * 3 * t * i + l * 3 * t * t * o + d * s,
        y: u * n + c * 3 * t * r + l * 3 * t * t * a + d * h,
        alpha: Math.PI / 2 - Math.atan2(e + t * 2 * (i - e) + p * (o - i * 2 + e) - (i + t * 2 * (o - i) + p * (s - o * 2 + i)), n + t * 2 * (r - n) + p * (a - r * 2 + n) - (r + t * 2 * (a - r) + p * (h - a * 2 + r))) + Math.PI
      };
    }
  };
  function A(t, e) {
    return S[e.type].apply(null, m([t], e.params));
  }
  function E(t, e) {
    var n;
    var i;
    var r;
    var o;
    var a;
    var s;
    var h;
    var l = t.getPathList();
    var u = 0;
    for (; u < l.length; u++) {
      a = (h = l[u]).action;
      s = h.params;
      if (a === "moveTo") {
        n = s[0];
        i = s[1];
        r = s[0];
        o = s[1];
      }
      if (a === "lineTo") {
        var c = s[0];
        var p = s[1];
        e.push({
          type: "line",
          params: [r, o, c, p]
        });
        r = c;
        o = p;
      }
      if (a === "arc") {
        var d = s[0];
        var f = s[1];
        var g = s[2];
        var y = s[3];
        var m = s[4];
        var x = geometryMathUtils.getPolarPoint(d, f, g, y);
        var _ = geometryMathUtils.getPolarPoint(d, f, g, m);
        if (u > 0) {
          e.push({
            type: "line",
            params: [r, o, x.x, x.y]
          });
        }
        e.push({
          type: "arc",
          params: [d, f, g, y, m]
        });
        r = _.x;
        o = _.y;
      }
      if (a === "bezierCurveTo") {
        var b = s[0];
        var w = s[1];
        var S = s[2];
        var A = s[3];
        var E = s[4];
        var k = s[5];
        e.push({
          type: "bezier",
          params: [r, o, b, w, S, A, E, k]
        });
        r = E;
        o = k;
      }
      if (a === "rect") {
        var c = s[0];
        var p = s[1];
        var M = s[2];
        var P = s[3];
        e.push({
          type: "line",
          params: [c, p, c + M, p]
        });
        e.push({
          type: "line",
          params: [c + M, p, c + M, p + P]
        });
        e.push({
          type: "line",
          params: [c + M, p + P, c, p + P]
        });
        e.push({
          type: "line",
          params: [c, p + P, c, p]
        });
        r = c;
        o = p;
      }
      if (a === "closePath") {
        e.push({
          type: "line",
          params: [r, o, n, i]
        });
        r = s[0];
        o = s[1];
      }
    }
    return e;
  }
  var k = {
    arcTo: [[0, 1], [2, 3]],
    moveTo: [[0, 1]],
    lineTo: [[0, 1]],
    bezierCurveTo: [[0, 1], [2, 3], [4, 5]],
    quadraticCurveTo: [[0, 1], [2, 3]]
  };
  var M = function () {
    function t(t) {
      this._pathList = [];
      if (t) {
        this._pathList = function (t) {
          var e;
          var n;
          var i;
          var r;
          var o;
          var l;
          var u;
          var f;
          var y;
          var v = t.trim();
          var m = [];
          var x = [];
          var _ = "";
          var b = false;
          var w = h.COMMAND;
          var S = 0;
          var A = v.length;
          var E = /[a-z]/i;
          var k = /\s/i;
          var M = /\d/i;
          function P() {
            var t = parseFloat(_);
            if (isNaN(t)) {
              throw Error("Error: NaN");
            }
            x.push(t);
          }
          function O() {
            if (y) {
              if (m.length === 0 && y.toLocaleLowerCase() !== s.m) {
                throw Error("path should start with M or m");
              }
              var t = {
                action: y,
                params: x
              };
              if (c[y.toLocaleLowerCase()] !== x.length) {
                throw Error("Error, Expect Number");
              }
              m.push(t);
            }
          }
          for (var C = 0; C < A; C += 1) {
            var T = v[C];
            var I = E.test(T);
            var Z = k.test(T);
            var L = T === ",";
            var R = T === ".";
            var D = T === "e" || T === "E";
            var B = T === "-";
            var j = M.test(T);
            var z = C === A - 1;
            if (I && !D) {
              if (w === h.NUMBER) {
                throw Error("Error path, Expected number, " + v.slice(0, C));
              }
              if (p.indexOf(T.toLowerCase()) !== -1) {
                if (b) {
                  P();
                }
                O();
                b = false;
                _ = "";
                c[y = T];
                x = [];
                if (y === s.z || y === s.Z) {
                  w = h.COMMAND;
                } else {
                  w = h.NUMBER;
                  _ = "";
                }
              } else {
                throw Error("illegal path command");
              }
            } else if (j || R || B || D) {
              if (w === h.COMMAND) {
                throw Error("Error path, Expexct ");
              }
              b = true;
              _ += T;
              w = h.ANY;
            } else if (Z) {
              if (!b) {
                continue;
              }
              P();
              _ = "";
              b = false;
            } else if (L) {
              if (!b && x.length === 0) {
                throw Error("Error, excpected number");
              }
              if (b) {
                P();
                b = false;
              }
              _ = "";
            } else {
              throw Error("illegal string in path");
            }
            if (z) {
              if (b) {
                P();
              }
              O();
            }
          }
          e = 0;
          n = 0;
          i = 0;
          r = 0;
          o = 0;
          l = 0;
          u = 0;
          f = 0;
          return m.map(function (t) {
            var h = t.action;
            var c = t.params;
            var p = "";
            var y = [];
            switch (h) {
              case s.M:
                i = c[0];
                r = c[1];
                e = i;
                n = r;
                p = a.MOVE_TO;
                y = [i, r];
                break;
              case s.m:
                i += c[0];
                r += c[1];
                e = i;
                n = r;
                p = a.MOVE_TO;
                y = [i, r];
                break;
              case s.L:
                i = c[0];
                r = c[1];
                p = a.LINE_TO;
                y = [i, r];
                break;
              case s.l:
                i += c[0];
                r += c[1];
                p = a.LINE_TO;
                y = [i, r];
                break;
              case s.H:
                i = c[0];
                p = a.LINE_TO;
                y = [i, r];
                break;
              case s.h:
                i += c[0];
                p = a.LINE_TO;
                y = [i, r];
                break;
              case s.V:
                r = c[0];
                p = a.LINE_TO;
                y = [i, r];
                break;
              case s.v:
                r += c[0];
                p = a.LINE_TO;
                y = [i, r];
                break;
              case s.C:
                p = a.BEZIER_CURVE_TO;
                i = c[4];
                r = c[5];
                y = c.slice();
                o = c[2];
                l = c[3];
                break;
              case s.c:
                p = a.BEZIER_CURVE_TO;
                i = (y = [c[0] + i, c[1] + r, c[2] + i, c[3] + r, c[4] + i, c[5] + r])[4];
                r = y[5];
                o = y[2];
                l = y[3];
                break;
              case s.S:
                p = a.BEZIER_CURVE_TO;
                var v;
                var m = d(o, l, i, r);
                i = (y = [m[0], m[1], c[0], c[1], c[2], c[3]])[4];
                r = y[5];
                o = c[0];
                l = c[1];
                break;
              case s.s:
                p = a.BEZIER_CURVE_TO;
                var x;
                var _ = d(o, l, i, r);
                i = (y = [_[0], _[1], c[0] + i, c[1] + r, i + c[2], r + c[3]])[4];
                r = y[5];
                o = c[0];
                l = c[1];
                break;
              case s.Q:
                p = a.QUADRATIC_CURVE_TO;
                y = c.slice();
                i = c[2];
                r = c[3];
                u = c[0];
                f = c[1];
                break;
              case s.q:
                p = a.QUADRATIC_CURVE_TO;
                i = (y = [i + c[0], r + c[1], i + c[2], r + c[3]])[2];
                r = y[3];
                u = y[0];
                f = y[1];
                break;
              case s.T:
                p = a.QUADRATIC_CURVE_TO;
                var b;
                var w = d(u, f, i, r);
                i = (y = [w[0], w[1], c[0], c[1]])[2];
                r = y[3];
                u = y[0];
                f = y[1];
                break;
              case s.t:
                p = a.QUADRATIC_CURVE_TO;
                var S;
                var A = d(u, f, i, r);
                i = (y = [A[0], A[1], c[0] + i, c[1] + r])[2];
                r = y[3];
                u = y[0];
                f = y[1];
                break;
              case s.A:
                p = a.ELLIPSE;
                y = g.apply(null, [i, r].concat(c));
                i = c[5];
                r = c[6];
                break;
              case s.a:
                p = a.ELLIPSE;
                y = g.apply(null, [i, r].concat([c[0], c[1], c[2], c[3], c[4], c[5] + i, c[6] + r]));
                i += c[5];
                r += c[6];
                break;
              case s.Z:
                p = a.CLOSE_PATH;
                y = [];
                i = e;
                r = n;
                break;
              case s.z:
                p = a.CLOSE_PATH;
                i = e;
                r = n;
                y = [];
                break;
              default:
                throw Error("unknow command");
            }
            return {
              action: p,
              params: y
            };
          });
        }(t);
      }
    }
    t.prototype.setPathList = function (t) {
      this._pathList = t;
    };
    t.prototype.getPathList = function () {
      return this._pathList;
    };
    t.prototype.reflect = function () {};
    t.prototype.connectPath = function (t) {
      var e = this._pathList[this._pathList.length - 1];
      var n = t.getPathList().slice();
      var i = n[0];
      if (e && i) {
        var r = this.getActionEndPoint(e);
        var o = r.x;
        var a = r.y;
        var s = i.params;
        var h = s[0];
        var l = s[1];
        if (i.action === "moveTo" && geometryMathUtils.isApproxEqual(o, h) && geometryMathUtils.isApproxEqual(a, l)) {
          n.shift();
        }
      }
      this._pathList = this._pathList.concat(n);
    };
    t.prototype.closePath = function () {
      this._pathList.push({
        action: "closePath",
        params: []
      });
      return this;
    };
    t.prototype.moveTo = function (t, e) {
      this._pathList.push({
        action: "moveTo",
        params: [t, e]
      });
      return this;
    };
    t.prototype.lineTo = function (t, e) {
      this._pathList.push({
        action: "lineTo",
        params: [t, e]
      });
      return this;
    };
    t.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
      this._pathList.push({
        action: "bezierCurveTo",
        params: [t, e, n, i, r, o]
      });
      return this;
    };
    t.prototype.quadraticCurveTo = function (t, e, n, i) {
      this._pathList.push({
        action: "quadraticCurveTo",
        params: [t, e, n, i]
      });
      return this;
    };
    t.prototype.arc = function (t, e, n, i, r, o = false) {
      this._pathList.push({
        action: "arc",
        params: [t, e, n, i, r, o]
      });
      return this;
    };
    t.prototype.arcTo = function (t, e, n, i, r) {
      this._pathList.push({
        action: "arcTo",
        params: [t, e, n, i, r]
      });
      return this;
    };
    t.prototype.ellipse = function (t, e, n, i, r, o, a, s = true) {
      this._pathList.push({
        action: "ellipse",
        params: [t, e, n, i, r, o, a, s]
      });
      return this;
    };
    t.prototype.rect = function (t, e, n, i) {
      this._pathList.push({
        action: "rect",
        params: [t, e, n, i]
      });
      return this;
    };
    t.prototype.drawImage = function (t, e, n, i, r, o, a, s, h) {
      this._pathList.push({
        action: "drawImage",
        params: [t, e, n, i, r, o, a, s, h]
      });
    };
    t.prototype.fillText = function (t, e, n) {
      this._pathList.push({
        action: "fillText",
        params: [t, e, n]
      });
    };
    t.prototype.strokeText = function (t, e, n) {
      this._pathList.push({
        action: "strokeText",
        params: [t, e, n]
      });
    };
    t.prototype.drawOnCanvasContext = function (t) {
      this._pathList.forEach(function (e) {
        return t[e.action].apply(t, e.params);
      });
    };
    t.prototype.getPathBBox = function () {
      var t = this._pathList;
      var e = [];
      var n = this;
      var i = 0;
      for (; i < t.length; i++) {
        (function (i) {
          var r = t[i];
          var o = r.action;
          var a = r.params;
          if (o === "arc") {
            var s = a[0];
            var h = a[1];
            var l = a[2];
            var u = a[3];
            var c = a[4];
            n._pushBBoxPoints(e, geometryRectUtils.getArcBounds(s, h, l, u, c));
          } else if (o === "rect") {
            var p = a[0];
            var d = a[1];
            var f = a[2];
            var g = a[3];
            n._pushBBoxPoints(e, geometryRectUtils.normalizeRect(p, d, f, g));
          } else if (o === "moveTo" || o === "lineTo" || o === "bezierCurveTo" || o === "quadraticCurveTo" || o === "arcTo") {
            k[o].forEach(function (t) {
              var n = t[0];
              var i = t[1];
              var r = a[n];
              var o = a[i];
              e.push({
                x: r,
                y: o
              });
            });
          } else if (o === "ellipse") {
            var s = a[0];
            var h = a[1];
            var v = a[2];
            a[3];
            a[4];
            var u = a[5];
            var c = a[6];
            n._pushBBoxPoints(e, geometryRectUtils.getArcBounds(s, h, v, u, c));
          }
        })(i);
      }
      return geometryRectUtils.getPointsBounds(e);
    };
    t.prototype.getActionEndPoint = function (t) {
      var e;
      var n;
      var i = t.action;
      var r = t.params;
      if (i === "lineTo") {
        e = r[0];
        n = r[1];
      } else if (i === "arcTo") {
        e = r[2];
        n = r[3];
      } else if (i === "arc") {
        var o = r[0];
        var a = r[1];
        var s = r[2];
        var h = r[3];
        var l = geometryMathUtils.getPolarPoint(o, a, s, h);
        e = l.x;
        n = l.y;
      } else if (i === "bezierCurveTo") {
        e = r[4];
        n = r[5];
      } else if (i === "quadraticCurveTo") {
        e = r[2];
        n = r[3];
      }
      return {
        x: e,
        y: n
      };
    };
    t.prototype.getSVGPathString = function () {
      return function (t) {
        var e = "";
        var n = 0;
        for (; n < t.length; n++) {
          var i = t[n];
          var r = i.action;
          var o = i.params;
          if (r === "moveTo") {
            e += "M" + o[0] + "," + o[1] + " ";
          } else if (r === "lineTo") {
            e += "L" + o[0] + "," + o[1] + " ";
          } else if (r === "rect") {
            var a = o[0];
            var s = o[1];
            var h = o[2];
            var l = o[3];
            e += "M" + a + "," + s + "L" + (a + h) + "," + s + "L" + (a + h) + "," + (s + l) + "L" + a + "," + (s + l) + "z";
          } else if (r === "arc" || r === "ellipse") {
            e += function (t, e) {
              var n = t.action;
              var i = t.params;
              var r = i[0];
              var o = i[1];
              var a = i[2];
              var s = i[3];
              var h = i[4];
              var l = i[5];
              if (n === "ellipse") {
                r = i[0];
                o = i[1];
                a = i[2];
                s = i[5];
                h = i[6];
              }
              var u = geometryMathUtils.getPolarPoint(r, o, a, s);
              var c = h - s;
              var p = h;
              if (h - s >= geometryMathUtils.twoPi || geometryMathUtils.isApproxEqual(c, geometryMathUtils.twoPi)) {
                p = s + geometryMathUtils.twoPi - 0.0001;
              } else if (h - s <= -geometryMathUtils.twoPi || geometryMathUtils.isApproxEqual(c, -geometryMathUtils.twoPi)) {
                p = s - geometryMathUtils.twoPi + 0.0001;
              }
              var d = geometryMathUtils.getPolarPoint(r, o, a, p);
              var f = Math.abs(s - h) >= Math.PI;
              return (e > 0 ? "L" : "M") + u.x + "," + u.y + "A " + a + " " + a + " 0 " + +!!f + " " + +!l + " " + d.x + " " + d.y;
            }(t[n], n);
          } else if (r !== "arcTo") {
            if (r === "quadraticCurveTo") {
              e += "Q" + o[0] + "," + o[1] + " " + o[2] + "," + o[3];
            } else if (r === "bezierCurveTo") {
              e += "C" + o[0] + "," + o[1] + " " + o[2] + "," + o[3] + " " + o[4] + "," + o[5];
            } else if (r === "closePath") {
              e += "Z";
            }
          }
        }
        return e;
      }(this._pathList);
    };
    t.prototype.getTotalLength = function () {
      var t = E(this, []);
      return arraySumHelper.sumArray(t.map(function (t) {
        return w(t);
      }));
    };
    t.prototype.getPointAtLength = function (t) {
      var e = E(this, []);
      var n = 0;
      var i = 0;
      for (; i < e.length; i++) {
        var r = w(e[i]);
        if (n + r >= t) {
          return A((t - n) / r, e[i]);
        }
        n += r;
      }
      return A(0, e[0]);
    };
    t.prototype.getPointAtPercent = function (t) {
      if (t === 0 || t === 1) {
        var e = E(this, []);
        if (t === 0) {
          return A(0, e[0]);
        }
        if (t === 1) {
          return A(1, e[e.length - 1]);
        }
      }
      var n = this.getTotalLength();
      return this.getPointAtLength(n * t);
    };
    t.prototype.clone = function () {
      var e = new t();
      var n = deepCloneWrapper_1.deepClone(this._pathList);
      e.setPathList(n);
      return e;
    };
    t.prototype._pushBBoxPoints = function (t, e) {
      var n = e.x;
      var i = e.y;
      var r = e.width;
      var o = e.height;
      t.push({
        x: n,
        y: i
      });
      t.push({
        x: n + r,
        y: i
      });
      t.push({
        x: n + r,
        y: i + o
      });
      t.push({
        x: n,
        y: i + o
      });
    };
    return t;
  }();
  require.d(exports, {
    Path: function () {
      return M;
    }
  });
}