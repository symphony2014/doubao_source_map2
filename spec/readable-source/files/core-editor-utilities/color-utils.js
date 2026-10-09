// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 845364
         */
module.exports = function (module, exports, require) {
  (function (e) {
    var r;
    var n;
    var o;
    var a = /^\s+/;
    var i = /\s+$/;
    var c = 0;
    var u = e.round;
    var l = e.min;
    var s = e.max;
    var f = e.random;
    function d(t, r) {
      r = r || {};
      if ((t = t || "") instanceof d) {
        return t;
      }
      if (!(this instanceof d)) {
        return new d(t, r);
      }
      var n;
      var o;
      var f;
      var g;
      var b;
      var h;
      var p;
      var w;
      var _;
      var E;
      var m;
      var T;
      var k;
      var x;
      var I;
      var O;
      var A;
      var R;
      var S;
      var N;
      o = {
        r: 0,
        g: 0,
        b: 0
      };
      f = 1;
      g = null;
      b = null;
      h = null;
      p = false;
      w = false;
      if (typeof (n = t) == "string") {
        n = function (t) {
          t = t.replace(a, "").replace(i, "").toLowerCase();
          var e;
          var r = false;
          if (y[t]) {
            t = y[t];
            r = true;
          } else if (t == "transparent") {
            return {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
              format: "name"
            };
          }
          if (e = M.rgb.exec(t)) {
            return {
              r: e[1],
              g: e[2],
              b: e[3]
            };
          } else if (e = M.rgba.exec(t)) {
            return {
              r: e[1],
              g: e[2],
              b: e[3],
              a: e[4]
            };
          } else if (e = M.hsl.exec(t)) {
            return {
              h: e[1],
              s: e[2],
              l: e[3]
            };
          } else if (e = M.hsla.exec(t)) {
            return {
              h: e[1],
              s: e[2],
              l: e[3],
              a: e[4]
            };
          } else if (e = M.hsv.exec(t)) {
            return {
              h: e[1],
              s: e[2],
              v: e[3]
            };
          } else if (e = M.hsva.exec(t)) {
            return {
              h: e[1],
              s: e[2],
              v: e[3],
              a: e[4]
            };
          } else if (e = M.hex8.exec(t)) {
            return {
              r: C(e[1]),
              g: C(e[2]),
              b: C(e[3]),
              a: C(e[4]) / 255,
              format: r ? "name" : "hex8"
            };
          } else if (e = M.hex6.exec(t)) {
            return {
              r: C(e[1]),
              g: C(e[2]),
              b: C(e[3]),
              format: r ? "name" : "hex"
            };
          } else if (e = M.hex4.exec(t)) {
            return {
              r: C(e[1] + "" + e[1]),
              g: C(e[2] + "" + e[2]),
              b: C(e[3] + "" + e[3]),
              a: C(e[4] + "" + e[4]) / 255,
              format: r ? "name" : "hex8"
            };
          } else {
            return !!(e = M.hex3.exec(t)) && {
              r: C(e[1] + "" + e[1]),
              g: C(e[2] + "" + e[2]),
              b: C(e[3] + "" + e[3]),
              format: r ? "name" : "hex"
            };
          }
        }(n);
      }
      if (typeof n == "object") {
        if (U(n.r) && U(n.g) && U(n.b)) {
          _ = n.r;
          E = n.g;
          m = n.b;
          o = {
            r: L(_, 255) * 255,
            g: L(E, 255) * 255,
            b: L(m, 255) * 255
          };
          p = true;
          w = String(n.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (U(n.h) && U(n.s) && U(n.v)) {
          g = P(n.s);
          b = P(n.v);
          T = n.h;
          k = g;
          x = b;
          T = L(T, 360) * 6;
          k = L(k, 100);
          x = L(x, 100);
          I = e.floor(T);
          O = T - I;
          A = x * (1 - k);
          R = x * (1 - O * k);
          S = x * (1 - (1 - O) * k);
          o = {
            r: [x, R, A, A, S, x][N = I % 6] * 255,
            g: [S, x, x, R, A, A][N] * 255,
            b: [A, A, S, x, x, R][N] * 255
          };
          p = true;
          w = "hsv";
        } else if (U(n.h) && U(n.s) && U(n.l)) {
          g = P(n.s);
          h = P(n.l);
          o = function (t, e, r) {
            var n;
            var o;
            var a;
            function i(t, e, r) {
              if (r < 0) {
                r += 1;
              }
              if (r > 1) {
                r -= 1;
              }
              if (r < 1 / 6) {
                return t + (e - t) * 6 * r;
              } else if (r < 0.5) {
                return e;
              } else if (r < 2 / 3) {
                return t + (e - t) * (2 / 3 - r) * 6;
              } else {
                return t;
              }
            }
            t = L(t, 360);
            e = L(e, 100);
            r = L(r, 100);
            if (e === 0) {
              n = o = a = r;
            } else {
              var c = r < 0.5 ? r * (1 + e) : r + e - r * e;
              var u = r * 2 - c;
              n = i(u, c, t + 1 / 3);
              o = i(u, c, t);
              a = i(u, c, t - 1 / 3);
            }
            return {
              r: n * 255,
              g: o * 255,
              b: a * 255
            };
          }(n.h, g, h);
          p = true;
          w = "hsl";
        }
        if (n.hasOwnProperty("a")) {
          f = n.a;
        }
      }
      f = D(f);
      var B = {
        ok: p,
        format: n.format || w,
        r: l(255, s(o.r, 0)),
        g: l(255, s(o.g, 0)),
        b: l(255, s(o.b, 0)),
        a: f
      };
      this._originalInput = t;
      this._r = B.r;
      this._g = B.g;
      this._b = B.b;
      this._a = B.a;
      this._roundA = u(this._a * 100) / 100;
      this._format = r.format || B.format;
      this._gradientType = r.gradientType;
      if (this._r < 1) {
        this._r = u(this._r);
      }
      if (this._g < 1) {
        this._g = u(this._g);
      }
      if (this._b < 1) {
        this._b = u(this._b);
      }
      this._ok = B.ok;
      this._tc_id = c++;
    }
    function g(t, e, r) {
      t = L(t, 255);
      var n;
      var o;
      var a = s(t, e = L(e, 255), r = L(r, 255));
      var i = l(t, e, r);
      var c = (a + i) / 2;
      if (a == i) {
        n = o = 0;
      } else {
        var u = a - i;
        o = c > 0.5 ? u / (2 - a - i) : u / (a + i);
        switch (a) {
          case t:
            n = (e - r) / u + (e < r) * 6;
            break;
          case e:
            n = (r - t) / u + 2;
            break;
          case r:
            n = (t - e) / u + 4;
        }
        n /= 6;
      }
      return {
        h: n,
        s: o,
        l: c
      };
    }
    function b(t, e, r) {
      t = L(t, 255);
      var n;
      var o;
      var a = s(t, e = L(e, 255), r = L(r, 255));
      var i = l(t, e, r);
      var c = a - i;
      o = a === 0 ? 0 : c / a;
      if (a == i) {
        n = 0;
      } else {
        switch (a) {
          case t:
            n = (e - r) / c + (e < r) * 6;
            break;
          case e:
            n = (r - t) / c + 2;
            break;
          case r:
            n = (t - e) / c + 4;
        }
        n /= 6;
      }
      return {
        h: n,
        s: o,
        v: a
      };
    }
    function h(t, e, r, n) {
      var o = [v(u(t).toString(16)), v(u(e).toString(16)), v(u(r).toString(16))];
      if (n && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1)) {
        return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0);
      } else {
        return o.join("");
      }
    }
    function p(t, e, r, n) {
      return [v(F(n)), v(u(t).toString(16)), v(u(e).toString(16)), v(u(r).toString(16))].join("");
    }
    function w(t, e) {
      e = e === 0 ? 0 : e || 10;
      var r = d(t).toHsl();
      r.s -= e / 100;
      r.s = G(r.s);
      return d(r);
    }
    function _(t, e) {
      e = e === 0 ? 0 : e || 10;
      var r = d(t).toHsl();
      r.s += e / 100;
      r.s = G(r.s);
      return d(r);
    }
    function E(t) {
      return d(t).desaturate(100);
    }
    function m(t, e) {
      e = e === 0 ? 0 : e || 10;
      var r = d(t).toHsl();
      r.l += e / 100;
      r.l = G(r.l);
      return d(r);
    }
    function T(t, e) {
      e = e === 0 ? 0 : e || 10;
      var r = d(t).toRgb();
      r.r = s(0, l(255, r.r - u(-(e / 100 * 255))));
      r.g = s(0, l(255, r.g - u(-(e / 100 * 255))));
      r.b = s(0, l(255, r.b - u(-(e / 100 * 255))));
      return d(r);
    }
    function k(t, e) {
      e = e === 0 ? 0 : e || 10;
      var r = d(t).toHsl();
      r.l -= e / 100;
      r.l = G(r.l);
      return d(r);
    }
    function x(t, e) {
      var r = d(t).toHsl();
      var n = (r.h + e) % 360;
      r.h = n < 0 ? 360 + n : n;
      return d(r);
    }
    function I(t) {
      var e = d(t).toHsl();
      e.h = (e.h + 180) % 360;
      return d(e);
    }
    function O(t) {
      var e = d(t).toHsl();
      var r = e.h;
      return [d(t), d({
        h: (r + 120) % 360,
        s: e.s,
        l: e.l
      }), d({
        h: (r + 240) % 360,
        s: e.s,
        l: e.l
      })];
    }
    function A(t) {
      var e = d(t).toHsl();
      var r = e.h;
      return [d(t), d({
        h: (r + 90) % 360,
        s: e.s,
        l: e.l
      }), d({
        h: (r + 180) % 360,
        s: e.s,
        l: e.l
      }), d({
        h: (r + 270) % 360,
        s: e.s,
        l: e.l
      })];
    }
    function R(t) {
      var e = d(t).toHsl();
      var r = e.h;
      return [d(t), d({
        h: (r + 72) % 360,
        s: e.s,
        l: e.l
      }), d({
        h: (r + 216) % 360,
        s: e.s,
        l: e.l
      })];
    }
    function S(t, e, r) {
      e = e || 6;
      r = r || 30;
      var n = d(t).toHsl();
      var o = 360 / r;
      var a = [d(t)];
      for (n.h = (n.h - (o * e >> 1) + 720) % 360; --e;) {
        n.h = (n.h + o) % 360;
        a.push(d(n));
      }
      return a;
    }
    function N(t, e) {
      e = e || 6;
      var r = d(t).toHsv();
      var n = r.h;
      var o = r.s;
      var a = r.v;
      var i = [];
      var c = 1 / e;
      while (e--) {
        i.push(d({
          h: n,
          s: o,
          v: a
        }));
        a = (a + c) % 1;
      }
      return i;
    }
    d.prototype = {
      isDark: function () {
        return this.getBrightness() < 128;
      },
      isLight: function () {
        return !this.isDark();
      },
      isValid: function () {
        return this._ok;
      },
      getOriginalInput: function () {
        return this._originalInput;
      },
      getFormat: function () {
        return this._format;
      },
      getAlpha: function () {
        return this._a;
      },
      getBrightness: function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1000;
      },
      getLuminance: function () {
        var t;
        var r;
        var n;
        var o;
        var a;
        var i = this.toRgb();
        t = i.r / 255;
        r = i.g / 255;
        n = i.b / 255;
        o = t <= 0.03928 ? t / 12.92 : e.pow((t + 0.055) / 1.055, 2.4);
        return o * 0.2126 + (r <= 0.03928 ? r / 12.92 : e.pow((r + 0.055) / 1.055, 2.4)) * 0.7152 + (n <= 0.03928 ? n / 12.92 : e.pow((n + 0.055) / 1.055, 2.4)) * 0.0722;
      },
      setAlpha: function (t) {
        this._a = D(t);
        this._roundA = u(this._a * 100) / 100;
        return this;
      },
      toHsv: function () {
        var t = b(this._r, this._g, this._b);
        return {
          h: t.h * 360,
          s: t.s,
          v: t.v,
          a: this._a
        };
      },
      toHsvString: function () {
        var t = b(this._r, this._g, this._b);
        var e = u(t.h * 360);
        var r = u(t.s * 100);
        var n = u(t.v * 100);
        if (this._a == 1) {
          return "hsv(" + e + ", " + r + "%, " + n + "%)";
        } else {
          return "hsva(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        }
      },
      toHsl: function () {
        var t = g(this._r, this._g, this._b);
        return {
          h: t.h * 360,
          s: t.s,
          l: t.l,
          a: this._a
        };
      },
      toHslString: function () {
        var t = g(this._r, this._g, this._b);
        var e = u(t.h * 360);
        var r = u(t.s * 100);
        var n = u(t.l * 100);
        if (this._a == 1) {
          return "hsl(" + e + ", " + r + "%, " + n + "%)";
        } else {
          return "hsla(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        }
      },
      toHex: function (t) {
        return h(this._r, this._g, this._b, t);
      },
      toHexString: function (t) {
        return "#" + this.toHex(t);
      },
      toHex8: function (t) {
        var e;
        var r;
        var n;
        var o;
        var a;
        var i;
        e = this._r;
        r = this._g;
        n = this._b;
        o = this._a;
        a = t;
        i = [v(u(e).toString(16)), v(u(r).toString(16)), v(u(n).toString(16)), v(F(o))];
        if (a && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1)) {
          return i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0);
        } else {
          return i.join("");
        }
      },
      toHex8String: function (t) {
        return "#" + this.toHex8(t);
      },
      toRgb: function () {
        return {
          r: u(this._r),
          g: u(this._g),
          b: u(this._b),
          a: this._a
        };
      },
      toRgbString: function () {
        if (this._a == 1) {
          return "rgb(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ")";
        } else {
          return "rgba(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ", " + this._roundA + ")";
        }
      },
      toPercentageRgb: function () {
        return {
          r: u(L(this._r, 255) * 100) + "%",
          g: u(L(this._g, 255) * 100) + "%",
          b: u(L(this._b, 255) * 100) + "%",
          a: this._a
        };
      },
      toPercentageRgbString: function () {
        if (this._a == 1) {
          return "rgb(" + u(L(this._r, 255) * 100) + "%, " + u(L(this._g, 255) * 100) + "%, " + u(L(this._b, 255) * 100) + "%)";
        } else {
          return "rgba(" + u(L(this._r, 255) * 100) + "%, " + u(L(this._g, 255) * 100) + "%, " + u(L(this._b, 255) * 100) + "%, " + this._roundA + ")";
        }
      },
      toName: function () {
        if (this._a === 0) {
          return "transparent";
        } else {
          return !(this._a < 1) && (B[h(this._r, this._g, this._b, true)] || false);
        }
      },
      toFilter: function (t) {
        var e = "#" + p(this._r, this._g, this._b, this._a);
        var r = e;
        var n = this._gradientType ? "GradientType = 1, " : "";
        if (t) {
          var o = d(t);
          r = "#" + p(o._r, o._g, o._b, o._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + e + ",endColorstr=" + r + ")";
      },
      toString: function (t) {
        var e = !!t;
        t = t || this._format;
        var r = false;
        var n = this._a < 1 && this._a >= 0;
        if (!e && n && (t === "hex" || t === "hex6" || t === "hex3" || t === "hex4" || t === "hex8" || t === "name")) {
          if (t === "name" && this._a === 0) {
            return this.toName();
          } else {
            return this.toRgbString();
          }
        } else {
          if (t === "rgb") {
            r = this.toRgbString();
          }
          if (t === "prgb") {
            r = this.toPercentageRgbString();
          }
          if (t === "hex" || t === "hex6") {
            r = this.toHexString();
          }
          if (t === "hex3") {
            r = this.toHexString(true);
          }
          if (t === "hex4") {
            r = this.toHex8String(true);
          }
          if (t === "hex8") {
            r = this.toHex8String();
          }
          if (t === "name") {
            r = this.toName();
          }
          if (t === "hsl") {
            r = this.toHslString();
          }
          if (t === "hsv") {
            r = this.toHsvString();
          }
          return r || this.toHexString();
        }
      },
      clone: function () {
        return d(this.toString());
      },
      _applyModification: function (t, e) {
        var r = t.apply(null, [this].concat([].slice.call(e)));
        this._r = r._r;
        this._g = r._g;
        this._b = r._b;
        this.setAlpha(r._a);
        return this;
      },
      lighten: function () {
        return this._applyModification(m, arguments);
      },
      brighten: function () {
        return this._applyModification(T, arguments);
      },
      darken: function () {
        return this._applyModification(k, arguments);
      },
      desaturate: function () {
        return this._applyModification(w, arguments);
      },
      saturate: function () {
        return this._applyModification(_, arguments);
      },
      greyscale: function () {
        return this._applyModification(E, arguments);
      },
      spin: function () {
        return this._applyModification(x, arguments);
      },
      _applyCombination: function (t, e) {
        return t.apply(null, [this].concat([].slice.call(e)));
      },
      analogous: function () {
        return this._applyCombination(S, arguments);
      },
      complement: function () {
        return this._applyCombination(I, arguments);
      },
      monochromatic: function () {
        return this._applyCombination(N, arguments);
      },
      splitcomplement: function () {
        return this._applyCombination(R, arguments);
      },
      triad: function () {
        return this._applyCombination(O, arguments);
      },
      tetrad: function () {
        return this._applyCombination(A, arguments);
      }
    };
    d.fromRatio = function (t, e) {
      if (typeof t == "object") {
        var r = {};
        for (var n in t) {
          if (t.hasOwnProperty(n)) {
            if (n === "a") {
              r[n] = t[n];
            } else {
              r[n] = P(t[n]);
            }
          }
        }
        t = r;
      }
      return d(t, e);
    };
    d.equals = function (t, e) {
      return !!t && !!e && d(t).toRgbString() == d(e).toRgbString();
    };
    d.random = function () {
      return d.fromRatio({
        r: f(),
        g: f(),
        b: f()
      });
    };
    d.mix = function (t, e, r) {
      r = r === 0 ? 0 : r || 50;
      var n = d(t).toRgb();
      var o = d(e).toRgb();
      var a = r / 100;
      return d({
        r: (o.r - n.r) * a + n.r,
        g: (o.g - n.g) * a + n.g,
        b: (o.b - n.b) * a + n.b,
        a: (o.a - n.a) * a + n.a
      });
    };
    d.readability = function (t, r) {
      var n = d(t);
      var o = d(r);
      return (e.max(n.getLuminance(), o.getLuminance()) + 0.05) / (e.min(n.getLuminance(), o.getLuminance()) + 0.05);
    };
    d.isReadable = function (t, e, r) {
      var n;
      var o;
      var a;
      var i;
      var c;
      var u = d.readability(t, e);
      c = false;
      switch ((o = ((n = (n = r) || {
        level: "AA",
        size: "small"
      }).level || "AA").toUpperCase(), a = (n.size || "small").toLowerCase(), o !== "AA" && o !== "AAA" && (o = "AA"), a !== "small" && a !== "large" && (a = "small"), i = {
        level: o,
        size: a
      }).level + i.size) {
        case "AAsmall":
        case "AAAlarge":
          c = u >= 4.5;
          break;
        case "AAlarge":
          c = u >= 3;
          break;
        case "AAAsmall":
          c = u >= 7;
      }
      return c;
    };
    d.mostReadable = function (t, e, r) {
      var n;
      var o;
      var a;
      var i;
      var c = null;
      var u = 0;
      o = (r = r || {}).includeFallbackColors;
      a = r.level;
      i = r.size;
      for (var l = 0; l < e.length; l++) {
        if ((n = d.readability(t, e[l])) > u) {
          u = n;
          c = d(e[l]);
        }
      }
      if (d.isReadable(t, c, {
        level: a,
        size: i
      }) || !o) {
        return c;
      } else {
        r.includeFallbackColors = false;
        return d.mostReadable(t, ["#fff", "#000"], r);
      }
    };
    var y = d.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    };
    var B = d.hexNames = function (t) {
      var e = {};
      for (var r in t) {
        if (t.hasOwnProperty(r)) {
          e[t[r]] = r;
        }
      }
      return e;
    }(y);
    function D(t) {
      if (isNaN(t = parseFloat(t)) || t < 0 || t > 1) {
        t = 1;
      }
      return t;
    }
    function L(t, r) {
      if (typeof (n = t) == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1) {
        t = "100%";
      }
      var n;
      var o;
      var a = typeof (o = t) == "string" && o.indexOf("%") != -1;
      t = l(r, s(0, parseFloat(t)));
      if (a) {
        t = parseInt(t * r, 10) / 100;
      }
      if (e.abs(t - r) < 0.000001) {
        return 1;
      } else {
        return t % r / parseFloat(r);
      }
    }
    function G(t) {
      return l(1, s(0, t));
    }
    function C(t) {
      return parseInt(t, 16);
    }
    function v(t) {
      if (t.length == 1) {
        return "0" + t;
      } else {
        return "" + t;
      }
    }
    function P(t) {
      if (t <= 1) {
        t = t * 100 + "%";
      }
      return t;
    }
    function F(t) {
      return e.round(parseFloat(t) * 255).toString(16);
    }
    n = "[\\s|\\(]+(" + (r = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
    o = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
    var M = {
      CSS_UNIT: new RegExp(r),
      rgb: RegExp("rgb" + n),
      rgba: RegExp("rgba" + o),
      hsl: RegExp("hsl" + n),
      hsla: RegExp("hsla" + o),
      hsv: RegExp("hsv" + n),
      hsva: RegExp("hsva" + o),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
    function U(t) {
      return !!M.CSS_UNIT.exec(t);
    }
    if (module.exports) {
      module.exports = d;
    } else if (typeof define == "function" && define.amd) {
      define(function () {
        return d;
      });
    } else {
      window.tinycolor = d;
    }
  })(Math);
}