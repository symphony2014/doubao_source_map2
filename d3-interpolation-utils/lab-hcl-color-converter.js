// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Uc' to 'createHclColor'
// - Renamed export 'ZP' to 'createLabColor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 208534
         */
module.exports = function (module, exports, require) {
  var inheritanceUtils = require("inheritance-utils") /*id: 801036*/;
  var colorFormatConverter_1 = require("color-format-converter_1") /*id: 55571*/;
  var angleConversionConstants = require("angle-conversion-constants") /*id: 343326*/;
  let u = 4 / 29;
  let a = 6 / 29;
  let s = 6 / 29 * 3 * (6 / 29);
  let c = 6 / 29 * (6 / 29) * (6 / 29);
  function h(t) {
    if (t instanceof l) {
      return new l(t.l, t.a, t.b, t.opacity);
    }
    if (t instanceof g) {
      return v(t);
    }
    if (!(t instanceof colorFormatConverter_1.RgbColor)) {
      t = colorFormatConverter_1.convertToRgb(t);
    }
    var n;
    var e;
    var i = d(t.r);
    var o = d(t.g);
    var u = d(t.b);
    var a = _((i * 0.2225045 + o * 0.7168786 + u * 0.0606169) / 1);
    if (i === o && o === u) {
      n = e = a;
    } else {
      n = _((i * 0.4360747 + o * 0.3850649 + u * 0.1430804) / 0.96422);
      e = _((i * 0.0139322 + o * 0.0971045 + u * 0.7141733) / 0.82521);
    }
    return new l(a * 116 - 16, (n - a) * 500, (a - e) * 200, t.opacity);
  }
  function f(t, n, e, i) {
    if (arguments.length == 1) {
      return h(t);
    } else {
      return new l(t, n, e, i == null ? 1 : i);
    }
  }
  function l(t, n, e, i) {
    this.l = +t;
    this.a = +n;
    this.b = +e;
    this.opacity = +i;
  }
  function _(t) {
    if (t > c) {
      return Math.pow(t, 1 / 3);
    } else {
      return t / s + u;
    }
  }
  function p(t) {
    if (t > a) {
      return t * t * t;
    } else {
      return s * (t - u);
    }
  }
  function y(t) {
    return (t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055) * 255;
  }
  function d(t) {
    if ((t /= 255) <= 0.04045) {
      return t / 12.92;
    } else {
      return Math.pow((t + 0.055) / 1.055, 2.4);
    }
  }
  function x(t, n, e, i) {
    if (arguments.length == 1) {
      return function (t) {
        if (t instanceof g) {
          return new g(t.h, t.c, t.l, t.opacity);
        }
        if (!(t instanceof l)) {
          t = h(t);
        }
        if (t.a === 0 && t.b === 0) {
          return new g(NaN, t.l > 0 && t.l < 100 ? 0 : NaN, t.l, t.opacity);
        }
        var n = Math.atan2(t.b, t.a) * angleConversionConstants.radToDegFactor;
        return new g(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
      }(t);
    } else {
      return new g(t, n, e, i == null ? 1 : i);
    }
  }
  function g(t, n, e, i) {
    this.h = +t;
    this.c = +n;
    this.l = +e;
    this.opacity = +i;
  }
  function v(t) {
    if (isNaN(t.h)) {
      return new l(t.l, 0, 0, t.opacity);
    }
    var n = t.h * angleConversionConstants.degToRadFactor;
    return new l(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
  }
  inheritanceUtils.inherits(l, f, inheritanceUtils.createObject(colorFormatConverter_1.ColorBase, {
    brighter(t) {
      return new l(this.l + (t == null ? 1 : t) * 18, this.a, this.b, this.opacity);
    },
    darker(t) {
      return new l(this.l - (t == null ? 1 : t) * 18, this.a, this.b, this.opacity);
    },
    rgb() {
      var t = (this.l + 16) / 116;
      var n = isNaN(this.a) ? t : t + this.a / 500;
      var e = isNaN(this.b) ? t : t - this.b / 200;
      n = p(n) * 0.96422;
      t = +p(t);
      e = p(e) * 0.82521;
      return new colorFormatConverter_1.RgbColor(y(n * 3.1338561 - t * 1.6168667 - e * 0.4906146), y(n * -0.9787684 + t * 1.9161415 + e * 0.033454), y(n * 0.0719453 - t * 0.2289914 + e * 1.4052427), this.opacity);
    }
  }));
  inheritanceUtils.inherits(g, x, inheritanceUtils.createObject(colorFormatConverter_1.ColorBase, {
    brighter(t) {
      return new g(this.h, this.c, this.l + (t == null ? 1 : t) * 18, this.opacity);
    },
    darker(t) {
      return new g(this.h, this.c, this.l - (t == null ? 1 : t) * 18, this.opacity);
    },
    rgb() {
      return v(this).rgb();
    }
  }));
  require.d(exports, {
    createHclColor: function () {
      return x;
    },
    createLabColor: function () {
      return f;
    }
  });
}