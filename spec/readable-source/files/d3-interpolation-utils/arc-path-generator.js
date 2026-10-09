// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createArcGenerator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 489961
         */
module.exports = function (module, exports, require) {
  var constantCreator_1 = require("constant-creator_1") /*id: 29801*/;
  var safeMathUtils = require("safe-math-utils") /*id: 608921*/;
  var pathBuilderFactory = require("path-builder-factory") /*id: 468606*/;
  function u(t) {
    return t.innerRadius;
  }
  function a(t) {
    return t.outerRadius;
  }
  function s(t) {
    return t.startAngle;
  }
  function c(t) {
    return t.endAngle;
  }
  function h(t) {
    return t && t.padAngle;
  }
  function f(t, n, e, i, o, u, a) {
    var s = t - e;
    var c = n - i;
    var h = (a ? u : -u) / safeMathUtils.sqrt(s * s + c * c);
    var f = h * c;
    var l = -h * s;
    var _ = t + f;
    var p = n + l;
    var y = e + f;
    var d = i + l;
    var x = (_ + y) / 2;
    var g = (p + d) / 2;
    var v = y - _;
    var m = d - p;
    var b = v * v + m * m;
    var M = o - u;
    var w = _ * d - y * p;
    var Z = (m < 0 ? -1 : 1) * safeMathUtils.sqrt(safeMathUtils.max(0, M * M * b - w * w));
    var T = (w * m - v * Z) / b;
    var N = (-w * v - m * Z) / b;
    var k = (w * m + v * Z) / b;
    var $ = (-w * v + m * Z) / b;
    var C = T - x;
    var D = N - g;
    var U = k - x;
    var S = $ - g;
    if (C * C + D * D > U * U + S * S) {
      T = k;
      N = $;
    }
    return {
      cx: T,
      cy: N,
      x01: -f,
      y01: -l,
      x11: T * (o / M - 1),
      y11: N * (o / M - 1)
    };
  }
  function l() {
    var t = u;
    var n = a;
    var e = constantCreator_1.createConstant(0);
    var l = null;
    var _ = s;
    var p = c;
    var y = h;
    var d = null;
    var x = pathBuilderFactory.createPathBuilder(g);
    function g() {
      var i;
      var o;
      var u = +t.apply(this, arguments);
      var a = +n.apply(this, arguments);
      var s = _.apply(this, arguments) - safeMathUtils.halfPi;
      var c = p.apply(this, arguments) - safeMathUtils.halfPi;
      var h = safeMathUtils.abs(c - s);
      var g = c > s;
      d ||= i = x();
      if (a < u) {
        o = a;
        a = u;
        u = o;
      }
      if (a > safeMathUtils.epsilon) {
        if (h > safeMathUtils.twoPi - safeMathUtils.epsilon) {
          d.moveTo(a * safeMathUtils.cos(s), a * safeMathUtils.sin(s));
          d.arc(0, 0, a, s, c, !g);
          if (u > safeMathUtils.epsilon) {
            d.moveTo(u * safeMathUtils.cos(c), u * safeMathUtils.sin(c));
            d.arc(0, 0, u, c, s, g);
          }
        } else {
          var v;
          var m;
          var b = s;
          var M = c;
          var w = s;
          var Z = c;
          var T = h;
          var N = h;
          var k = y.apply(this, arguments) / 2;
          var $ = k > safeMathUtils.epsilon && (l ? +l.apply(this, arguments) : safeMathUtils.sqrt(u * u + a * a));
          var C = safeMathUtils.min(safeMathUtils.abs(a - u) / 2, +e.apply(this, arguments));
          var D = C;
          var U = C;
          if ($ > safeMathUtils.epsilon) {
            var S = safeMathUtils.safeAsin($ / u * safeMathUtils.sin(k));
            var A = safeMathUtils.safeAsin($ / a * safeMathUtils.sin(k));
            if ((T -= S * 2) > safeMathUtils.epsilon) {
              S *= g ? 1 : -1;
              w += S;
              Z -= S;
            } else {
              T = 0;
              w = Z = (s + c) / 2;
            }
            if ((N -= A * 2) > safeMathUtils.epsilon) {
              A *= g ? 1 : -1;
              b += A;
              M -= A;
            } else {
              N = 0;
              b = M = (s + c) / 2;
            }
          }
          var P = a * safeMathUtils.cos(b);
          var Y = a * safeMathUtils.sin(b);
          var E = u * safeMathUtils.cos(Z);
          var H = u * safeMathUtils.sin(Z);
          if (C > safeMathUtils.epsilon) {
            var B;
            var F = a * safeMathUtils.cos(M);
            var O = a * safeMathUtils.sin(M);
            var j = u * safeMathUtils.cos(w);
            var L = u * safeMathUtils.sin(w);
            if (h < safeMathUtils.pi) {
              if (B = function (t, n, e, i, o, u, a, s) {
                var c = e - t;
                var h = i - n;
                var f = a - o;
                var l = s - u;
                var _ = l * c - f * h;
                if (!(_ * _ < safeMathUtils.epsilon)) {
                  _ = (f * (n - u) - l * (t - o)) / _;
                  return [t + _ * c, n + _ * h];
                }
              }(P, Y, j, L, F, O, E, H)) {
                var q = P - B[0];
                var R = Y - B[1];
                var I = F - B[0];
                var z = O - B[1];
                var J = 1 / safeMathUtils.sin(safeMathUtils.safeAcos((q * I + R * z) / (safeMathUtils.sqrt(q * q + R * R) * safeMathUtils.sqrt(I * I + z * z))) / 2);
                var V = safeMathUtils.sqrt(B[0] * B[0] + B[1] * B[1]);
                D = safeMathUtils.min(C, (u - V) / (J - 1));
                U = safeMathUtils.min(C, (a - V) / (J + 1));
              } else {
                D = U = 0;
              }
            }
          }
          if (N > safeMathUtils.epsilon) {
            if (U > safeMathUtils.epsilon) {
              v = f(j, L, P, Y, a, U, g);
              m = f(F, O, E, H, a, U, g);
              d.moveTo(v.cx + v.x01, v.cy + v.y01);
              if (U < C) {
                d.arc(v.cx, v.cy, U, safeMathUtils.atan2(v.y01, v.x01), safeMathUtils.atan2(m.y01, m.x01), !g);
              } else {
                d.arc(v.cx, v.cy, U, safeMathUtils.atan2(v.y01, v.x01), safeMathUtils.atan2(v.y11, v.x11), !g);
                d.arc(0, 0, a, safeMathUtils.atan2(v.cy + v.y11, v.cx + v.x11), safeMathUtils.atan2(m.cy + m.y11, m.cx + m.x11), !g);
                d.arc(m.cx, m.cy, U, safeMathUtils.atan2(m.y11, m.x11), safeMathUtils.atan2(m.y01, m.x01), !g);
              }
            } else {
              d.moveTo(P, Y);
              d.arc(0, 0, a, b, M, !g);
            }
          } else {
            d.moveTo(P, Y);
          }
          if (u > safeMathUtils.epsilon && T > safeMathUtils.epsilon) {
            if (D > safeMathUtils.epsilon) {
              v = f(E, H, F, O, u, -D, g);
              m = f(P, Y, j, L, u, -D, g);
              d.lineTo(v.cx + v.x01, v.cy + v.y01);
              if (D < C) {
                d.arc(v.cx, v.cy, D, safeMathUtils.atan2(v.y01, v.x01), safeMathUtils.atan2(m.y01, m.x01), !g);
              } else {
                d.arc(v.cx, v.cy, D, safeMathUtils.atan2(v.y01, v.x01), safeMathUtils.atan2(v.y11, v.x11), !g);
                d.arc(0, 0, u, safeMathUtils.atan2(v.cy + v.y11, v.cx + v.x11), safeMathUtils.atan2(m.cy + m.y11, m.cx + m.x11), g);
                d.arc(m.cx, m.cy, D, safeMathUtils.atan2(m.y11, m.x11), safeMathUtils.atan2(m.y01, m.x01), !g);
              }
            } else {
              d.arc(0, 0, u, Z, w, g);
            }
          } else {
            d.lineTo(E, H);
          }
        }
      } else {
        d.moveTo(0, 0);
      }
      d.closePath();
      if (i) {
        d = null;
        return i + "" || null;
      }
    }
    g.centroid = function () {
      var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2;
      var i = (+_.apply(this, arguments) + +p.apply(this, arguments)) / 2 - safeMathUtils.pi / 2;
      return [safeMathUtils.cos(i) * e, safeMathUtils.sin(i) * e];
    };
    g.innerRadius = function (n) {
      if (arguments.length) {
        t = typeof n == "function" ? n : constantCreator_1.createConstant(+n);
        return g;
      } else {
        return t;
      }
    };
    g.outerRadius = function (t) {
      if (arguments.length) {
        n = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
        return g;
      } else {
        return n;
      }
    };
    g.cornerRadius = function (t) {
      if (arguments.length) {
        e = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
        return g;
      } else {
        return e;
      }
    };
    g.padRadius = function (t) {
      if (arguments.length) {
        l = t == null ? null : typeof t == "function" ? t : constantCreator_1.createConstant(+t);
        return g;
      } else {
        return l;
      }
    };
    g.startAngle = function (t) {
      if (arguments.length) {
        _ = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
        return g;
      } else {
        return _;
      }
    };
    g.endAngle = function (t) {
      if (arguments.length) {
        p = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
        return g;
      } else {
        return p;
      }
    };
    g.padAngle = function (t) {
      if (arguments.length) {
        y = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
        return g;
      } else {
        return y;
      }
    };
    g.context = function (t) {
      if (arguments.length) {
        d = t == null ? null : t;
        return g;
      } else {
        return d;
      }
    };
    return g;
  }
  require.d(exports, {
    createArcGenerator: function () {
      return l;
    }
  });
}