// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'colorConversionUtils_1'
// - Resolved require(749719) to 'color-conversion-utils_1'
// - Renamed variable 'r' to 'roundedColorConvert'
// - Resolved require(910879) to 'rounded-color-convert'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 357221
         */
module.exports = function (module, exports, require) {
  var colorConversionUtils_1 = require("color-conversion-utils_1") /*id: 749719*/;
  var roundedColorConvert = require("rounded-color-convert") /*id: 910879*/;
  var o = [].slice;
  var a = ["keyword", "gray", "hex"];
  var s = {};
  Object.keys(roundedColorConvert).forEach(function (t) {
    s[o.call(roundedColorConvert[t].labels).sort().join("")] = t;
  });
  var h = {};
  function l(t, e) {
    if (!(this instanceof l)) {
      return new l(t, e);
    }
    if (e && e in a) {
      e = null;
    }
    if (e && !(e in roundedColorConvert)) {
      throw Error("Unknown model: " + e);
    }
    if (t == null) {
      this.model = "rgb";
      this.color = [0, 0, 0];
      this.valpha = 1;
    } else if (t instanceof l) {
      this.model = t.model;
      this.color = t.color.slice();
      this.valpha = t.valpha;
    } else if (typeof t == "string") {
      var n;
      var u;
      var c = colorConversionUtils_1.get(t);
      if (c === null) {
        throw Error("Unable to parse color from string: " + t);
      }
      this.model = c.model;
      u = roundedColorConvert[this.model].channels;
      this.color = c.value.slice(0, u);
      this.valpha = typeof c.value[u] == "number" ? c.value[u] : 1;
    } else if (t.length) {
      this.model = e || "rgb";
      u = roundedColorConvert[this.model].channels;
      var d = o.call(t, 0, u);
      this.color = p(d, u);
      this.valpha = typeof t[u] == "number" ? t[u] : 1;
    } else if (typeof t == "number") {
      t &= 16777215;
      this.model = "rgb";
      this.color = [t >> 16 & 255, t >> 8 & 255, t & 255];
      this.valpha = 1;
    } else {
      this.valpha = 1;
      var f = Object.keys(t);
      if ("alpha" in t) {
        f.splice(f.indexOf("alpha"), 1);
        this.valpha = typeof t.alpha == "number" ? t.alpha : 0;
      }
      var g = f.sort().join("");
      if (!(g in s)) {
        throw Error("Unable to parse color from object: " + JSON.stringify(t));
      }
      this.model = s[g];
      var y = roundedColorConvert[this.model].labels;
      var v = [];
      for (n = 0; n < y.length; n++) {
        v.push(t[y[n]]);
      }
      this.color = p(v);
    }
    if (h[this.model]) {
      n = 0;
      u = roundedColorConvert[this.model].channels;
      for (; n < u; n++) {
        var m = h[this.model][n];
        if (m) {
          this.color[n] = m(this.color[n]);
        }
      }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) {
      Object.freeze(this);
    }
  }
  function u(t, e, n) {
    (t = Array.isArray(t) ? t : [t]).forEach(function (t) {
      (h[t] ||= [])[e] = n;
    });
    t = t[0];
    return function (i) {
      var r;
      if (arguments.length) {
        if (n) {
          i = n(i);
        }
        (r = this[t]()).color[e] = i;
      } else {
        r = this[t]().color[e];
        if (n) {
          r = n(r);
        }
      }
      return r;
    };
  }
  function c(t) {
    return function (e) {
      return Math.max(0, Math.min(t, e));
    };
  }
  function p(t, e) {
    for (var n = 0; n < e; n++) {
      if (typeof t[n] != "number") {
        t[n] = 0;
      }
    }
    return t;
  }
  l.prototype = {
    toString: function () {
      return this.string();
    },
    toJSON: function () {
      return this[this.model]();
    },
    string: function (t) {
      var e = this.model in colorConversionUtils_1.to ? this : this.rgb();
      var n = (e = e.round(typeof t == "number" ? t : 1)).valpha === 1 ? e.color : e.color.concat(this.valpha);
      return colorConversionUtils_1.to[e.model](n);
    },
    percentString: function (t) {
      var e = this.rgb().round(typeof t == "number" ? t : 1);
      var n = e.valpha === 1 ? e.color : e.color.concat(this.valpha);
      return colorConversionUtils_1.to.rgb.percent(n);
    },
    array: function () {
      if (this.valpha === 1) {
        return this.color.slice();
      } else {
        return this.color.concat(this.valpha);
      }
    },
    object: function () {
      var t = {};
      var e = roundedColorConvert[this.model].channels;
      var n = roundedColorConvert[this.model].labels;
      var i = 0;
      for (; i < e; i++) {
        t[n[i]] = this.color[i];
      }
      if (this.valpha !== 1) {
        t.alpha = this.valpha;
      }
      return t;
    },
    unitArray: function () {
      var t = this.rgb().color;
      t[0] /= 255;
      t[1] /= 255;
      t[2] /= 255;
      if (this.valpha !== 1) {
        t.push(this.valpha);
      }
      return t;
    },
    unitObject: function () {
      var t = this.rgb().object();
      t.r /= 255;
      t.g /= 255;
      t.b /= 255;
      if (this.valpha !== 1) {
        t.alpha = this.valpha;
      }
      return t;
    },
    round: function (t) {
      var e;
      t = Math.max(t || 0, 0);
      return new l(this.color.map((e = t, function (t) {
        return Number(t.toFixed(e));
      })).concat(this.valpha), this.model);
    },
    alpha: function (t) {
      if (arguments.length) {
        return new l(this.color.concat(Math.max(0, Math.min(1, t))), this.model);
      } else {
        return this.valpha;
      }
    },
    red: u("rgb", 0, c(255)),
    green: u("rgb", 1, c(255)),
    blue: u("rgb", 2, c(255)),
    hue: u(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (t) {
      return (t % 360 + 360) % 360;
    }),
    saturationl: u("hsl", 1, c(100)),
    lightness: u("hsl", 2, c(100)),
    saturationv: u("hsv", 1, c(100)),
    value: u("hsv", 2, c(100)),
    chroma: u("hcg", 1, c(100)),
    gray: u("hcg", 2, c(100)),
    white: u("hwb", 1, c(100)),
    wblack: u("hwb", 2, c(100)),
    cyan: u("cmyk", 0, c(100)),
    magenta: u("cmyk", 1, c(100)),
    yellow: u("cmyk", 2, c(100)),
    black: u("cmyk", 3, c(100)),
    x: u("xyz", 0, c(100)),
    y: u("xyz", 1, c(100)),
    z: u("xyz", 2, c(100)),
    l: u("lab", 0, c(100)),
    a: u("lab", 1),
    b: u("lab", 2),
    keyword: function (t) {
      if (arguments.length) {
        return new l(t);
      } else {
        return roundedColorConvert[this.model].keyword(this.color);
      }
    },
    hex: function (t) {
      if (arguments.length) {
        return new l(t);
      } else {
        return colorConversionUtils_1.to.hex(this.rgb().round().color);
      }
    },
    rgbNumber: function () {
      var t = this.rgb().color;
      return (t[0] & 255) << 16 | (t[1] & 255) << 8 | t[2] & 255;
    },
    luminosity: function () {
      var t = this.rgb().color;
      var e = [];
      var n = 0;
      for (; n < t.length; n++) {
        var i = t[n] / 255;
        e[n] = i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
      }
      return e[0] * 0.2126 + e[1] * 0.7152 + e[2] * 0.0722;
    },
    contrast: function (t) {
      var e = this.luminosity();
      var n = t.luminosity();
      if (e > n) {
        return (e + 0.05) / (n + 0.05);
      } else {
        return (n + 0.05) / (e + 0.05);
      }
    },
    level: function (t) {
      var e = this.contrast(t);
      if (e >= 7.1) {
        return "AAA";
      } else if (e >= 4.5) {
        return "AA";
      } else {
        return "";
      }
    },
    isDark: function () {
      var t = this.rgb().color;
      return (t[0] * 299 + t[1] * 587 + t[2] * 114) / 1000 < 128;
    },
    isLight: function () {
      return !this.isDark();
    },
    negate: function () {
      var t = this.rgb();
      var e = 0;
      for (; e < 3; e++) {
        t.color[e] = 255 - t.color[e];
      }
      return t;
    },
    lighten: function (t) {
      var e = this.hsl();
      e.color[2] += e.color[2] * t;
      return e;
    },
    darken: function (t) {
      var e = this.hsl();
      e.color[2] -= e.color[2] * t;
      return e;
    },
    saturate: function (t) {
      var e = this.hsl();
      e.color[1] += e.color[1] * t;
      return e;
    },
    desaturate: function (t) {
      var e = this.hsl();
      e.color[1] -= e.color[1] * t;
      return e;
    },
    whiten: function (t) {
      var e = this.hwb();
      e.color[1] += e.color[1] * t;
      return e;
    },
    blacken: function (t) {
      var e = this.hwb();
      e.color[2] += e.color[2] * t;
      return e;
    },
    grayscale: function () {
      var t = this.rgb().color;
      var e = t[0] * 0.3 + t[1] * 0.59 + t[2] * 0.11;
      return l.rgb(e, e, e);
    },
    fade: function (t) {
      return this.alpha(this.valpha - this.valpha * t);
    },
    opaquer: function (t) {
      return this.alpha(this.valpha + this.valpha * t);
    },
    rotate: function (t) {
      var e = this.hsl();
      var n = e.color[0];
      n = (n = (n + t) % 360) < 0 ? 360 + n : n;
      e.color[0] = n;
      return e;
    },
    mix: function (t, e) {
      if (!t || !t.rgb) {
        throw Error("Argument to \"mix\" was not a Color instance, but rather an instance of " + typeof t);
      }
      var n = t.rgb();
      var i = this.rgb();
      var r = e === undefined ? 0.5 : e;
      var o = r * 2 - 1;
      var a = n.alpha() - i.alpha();
      var s = ((o * a == -1 ? o : (o + a) / (1 + o * a)) + 1) / 2;
      var h = 1 - s;
      return l.rgb(s * n.red() + h * i.red(), s * n.green() + h * i.green(), s * n.blue() + h * i.blue(), n.alpha() * r + i.alpha() * (1 - r));
    }
  };
  Object.keys(roundedColorConvert).forEach(function (t) {
    if (a.indexOf(t) === -1) {
      var e = roundedColorConvert[t].channels;
      l.prototype[t] = function () {
        if (this.model === t) {
          return new l(this);
        }
        if (arguments.length) {
          return new l(arguments, t);
        }
        var n;
        var i = typeof arguments[e] == "number" ? e : this.valpha;
        return new l((Array.isArray(n = roundedColorConvert[this.model][t].raw(this.color)) ? n : [n]).concat(i), t);
      };
      l[t] = function (n) {
        if (typeof n == "number") {
          n = p(o.call(arguments), e);
        }
        return new l(n, t);
      };
    }
  });
  module.exports = l;
}