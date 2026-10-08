// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B8' to 'createColor'
// - Renamed export 'Il' to 'ColorBase'
// - Renamed export 'J5' to 'BRIGHTEN_FACTOR'
// - Renamed export 'SU' to 'convertToRgb'
// - Renamed export 'Ss' to 'RgbColor'
// - Renamed export 'Ym' to 'createHsl'
// - Renamed export 'ZP' to 'parseColor'
// - Renamed export 'xV' to 'DARKEN_FACTOR'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 55571
         */
module.exports = function (module, exports, require) {
  var inheritanceUtils = require("inheritance-utils") /*id: 801036*/;
  function r() {}
  var o = 0.7;
  var u = 1.4285714285714286;
  var a = "\\s*([+-]?\\d+)\\s*";
  var s = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var c = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var h = /^#([0-9a-f]{3,8})$/;
  var f = RegExp(`^rgb\\(${a},${a},${a}\\)$`);
  var l = RegExp(`^rgb\\(${c},${c},${c}\\)$`);
  var _ = RegExp(`^rgba\\(${a},${a},${a},${s}\\)$`);
  var p = RegExp(`^rgba\\(${c},${c},${c},${s}\\)$`);
  var y = RegExp(`^hsl\\(${s},${c},${c}\\)$`);
  var d = RegExp(`^hsla\\(${s},${c},${c},${s}\\)$`);
  var x = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  function g() {
    return this.rgb().formatHex();
  }
  function v() {
    return this.rgb().formatRgb();
  }
  function m(t) {
    var n;
    var e;
    t = (t + "").trim().toLowerCase();
    if (n = h.exec(t)) {
      e = n[1].length;
      n = parseInt(n[1], 16);
      if (e === 6) {
        return b(n);
      } else if (e === 3) {
        return new T(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1);
      } else if (e === 8) {
        return M(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255);
      } else if (e === 4) {
        return M(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255);
      } else {
        return null;
      }
    } else if (n = f.exec(t)) {
      return new T(n[1], n[2], n[3], 1);
    } else if (n = l.exec(t)) {
      return new T(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1);
    } else if (n = _.exec(t)) {
      return M(n[1], n[2], n[3], n[4]);
    } else if (n = p.exec(t)) {
      return M(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]);
    } else if (n = y.exec(t)) {
      return U(n[1], n[2] / 100, n[3] / 100, 1);
    } else if (n = d.exec(t)) {
      return U(n[1], n[2] / 100, n[3] / 100, n[4]);
    } else if (x.hasOwnProperty(t)) {
      return b(x[t]);
    } else if (t === "transparent") {
      return new T(NaN, NaN, NaN, 0);
    } else {
      return null;
    }
  }
  function b(t) {
    return new T(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
  }
  function M(t, n, e, i) {
    if (i <= 0) {
      t = n = e = NaN;
    }
    return new T(t, n, e, i);
  }
  function w(t) {
    if (!(t instanceof r)) {
      t = m(t);
    }
    if (t) {
      return new T((t = t.rgb()).r, t.g, t.b, t.opacity);
    } else {
      return new T();
    }
  }
  function Z(t, n, e, i) {
    if (arguments.length == 1) {
      return w(t);
    } else {
      return new T(t, n, e, i == null ? 1 : i);
    }
  }
  function T(t, n, e, i) {
    this.r = +t;
    this.g = +n;
    this.b = +e;
    this.opacity = +i;
  }
  function N() {
    return `#${D(this.r)}${D(this.g)}${D(this.b)}`;
  }
  function k() {
    let t = $(this.opacity);
    return `${t === 1 ? "rgb(" : "rgba("}${C(this.r)}, ${C(this.g)}, ${C(this.b)}${t === 1 ? ")" : `, ${t})`}`;
  }
  function $(t) {
    if (isNaN(t)) {
      return 1;
    } else {
      return Math.max(0, Math.min(1, t));
    }
  }
  function C(t) {
    return Math.max(0, Math.min(255, Math.round(t) || 0));
  }
  function D(t) {
    return ((t = C(t)) < 16 ? "0" : "") + t.toString(16);
  }
  function U(t, n, e, i) {
    if (i <= 0) {
      t = n = e = NaN;
    } else if (e <= 0 || e >= 1) {
      t = n = NaN;
    } else if (n <= 0) {
      t = NaN;
    }
    return new P(t, n, e, i);
  }
  function S(t) {
    if (t instanceof P) {
      return new P(t.h, t.s, t.l, t.opacity);
    }
    if (!(t instanceof r)) {
      t = m(t);
    }
    if (!t) {
      return new P();
    }
    if (t instanceof P) {
      return t;
    }
    var n = (t = t.rgb()).r / 255;
    var e = t.g / 255;
    var i = t.b / 255;
    var o = Math.min(n, e, i);
    var u = Math.max(n, e, i);
    var a = NaN;
    var s = u - o;
    var c = (u + o) / 2;
    if (s) {
      a = n === u ? (e - i) / s + (e < i) * 6 : e === u ? (i - n) / s + 2 : (n - e) / s + 4;
      s /= c < 0.5 ? u + o : 2 - u - o;
      a *= 60;
    } else {
      s = c > 0 && c < 1 ? 0 : a;
    }
    return new P(a, s, c, t.opacity);
  }
  function A(t, n, e, i) {
    if (arguments.length == 1) {
      return S(t);
    } else {
      return new P(t, n, e, i == null ? 1 : i);
    }
  }
  function P(t, n, e, i) {
    this.h = +t;
    this.s = +n;
    this.l = +e;
    this.opacity = +i;
  }
  function Y(t) {
    if ((t = (t || 0) % 360) < 0) {
      return t + 360;
    } else {
      return t;
    }
  }
  function E(t) {
    return Math.max(0, Math.min(1, t || 0));
  }
  function H(t, n, e) {
    return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
  }
  inheritanceUtils.inherits(r, m, {
    copy(t) {
      return Object.assign(new this.constructor(), this, t);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: g,
    formatHex: g,
    formatHex8: function () {
      return this.rgb().formatHex8();
    },
    formatHsl: function () {
      return S(this).formatHsl();
    },
    formatRgb: v,
    toString: v
  });
  inheritanceUtils.inherits(T, Z, inheritanceUtils.createObject(r, {
    brighter(t) {
      t = t == null ? u : Math.pow(u, t);
      return new T(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    darker(t) {
      t = t == null ? o : Math.pow(o, t);
      return new T(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new T(C(this.r), C(this.g), C(this.b), $(this.opacity));
    },
    displayable() {
      return this.r >= -0.5 && this.r < 255.5 && this.g >= -0.5 && this.g < 255.5 && this.b >= -0.5 && this.b < 255.5 && this.opacity >= 0 && this.opacity <= 1;
    },
    hex: N,
    formatHex: N,
    formatHex8: function () {
      return `#${D(this.r)}${D(this.g)}${D(this.b)}${D((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
    },
    formatRgb: k,
    toString: k
  }));
  inheritanceUtils.inherits(P, A, inheritanceUtils.createObject(r, {
    brighter(t) {
      t = t == null ? u : Math.pow(u, t);
      return new P(this.h, this.s, this.l * t, this.opacity);
    },
    darker(t) {
      t = t == null ? o : Math.pow(o, t);
      return new P(this.h, this.s, this.l * t, this.opacity);
    },
    rgb() {
      var t = this.h % 360 + (this.h < 0) * 360;
      var n = isNaN(t) || isNaN(this.s) ? 0 : this.s;
      var e = this.l;
      var i = e + (e < 0.5 ? e : 1 - e) * n;
      var r = e * 2 - i;
      return new T(H(t >= 240 ? t - 240 : t + 120, r, i), H(t, r, i), H(t < 120 ? t + 240 : t - 120, r, i), this.opacity);
    },
    clamp() {
      return new P(Y(this.h), E(this.s), E(this.l), $(this.opacity));
    },
    displayable() {
      return (this.s >= 0 && this.s <= 1 || isNaN(this.s)) && this.l >= 0 && this.l <= 1 && this.opacity >= 0 && this.opacity <= 1;
    },
    formatHsl() {
      let t = $(this.opacity);
      return `${t === 1 ? "hsl(" : "hsla("}${Y(this.h)}, ${E(this.s) * 100}%, ${E(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    }
  }));
  require.d(exports, {
    createColor: function () {
      return Z;
    },
    ColorBase: function () {
      return r;
    },
    BRIGHTEN_FACTOR: function () {
      return u;
    },
    convertToRgb: function () {
      return w;
    },
    RgbColor: function () {
      return T;
    },
    createHsl: function () {
      return A;
    },
    parseColor: function () {
      return m;
    },
    DARKEN_FACTOR: function () {
      return o;
    }
  });
}