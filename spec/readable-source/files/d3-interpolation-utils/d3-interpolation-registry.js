// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'interpolatorFactory'
// - Resolved require(585471) to 'interpolator-factory'
// - Renamed variable 'r' to 'arrayInterpolationUtils'
// - Resolved require(913249) to 'array-interpolation-utils'
// - Renamed variable 'o' to 'cubicInterpolation'
// - Resolved require(165595) to 'cubic-interpolation'
// - Renamed variable 'u' to 'cubicSplineInterpolator'
// - Resolved require(289649) to 'cubic-spline-interpolator'
// - Renamed variable 'a' to 'dateInterpolationFactory'
// - Resolved require(173391) to 'date-interpolation-factory'
// - Renamed variable 'c' to 'interpolationFunctions'
// - Resolved require(974797) to 'interpolation-functions'
// - Renamed variable 'f' to 'linearInterpolation_2'
// - Resolved require(948395) to 'linear-interpolation_2'
// - Renamed variable 'l' to 'arrayLerpUtils'
// - Resolved require(708919) to 'array-lerp-utils'
// - Renamed variable '_' to 'deepMergeFunctionFactory'
// - Resolved require(96904) to 'deep-merge-function-factory'
// - Renamed variable 'p' to 'mathLerpInt'
// - Resolved require(471062) to 'math-lerp-int'
// - Renamed variable 'y' to 'stringNumericLerp'
// - Resolved require(296338) to 'string-numeric-lerp'
// - Renamed variable 'd' to 'transformInterpolationUtils'
// - Resolved require(619801) to 'transform-interpolation-utils'
// - Renamed variable 'x' to 'zoomInterpolation'
// - Resolved require(842235) to 'zoom-interpolation'
// - Renamed variable 'g' to 'colorInterpolationUtils'
// - Resolved require(450141) to 'color-interpolation-utils'
// - Renamed variable 'v' to 'colorFormatConverter_1'
// - Resolved require(55571) to 'color-format-converter_1'
// - Renamed variable 'w' to 'labHclColorConverter'
// - Resolved require(208534) to 'lab-hcl-color-converter'
// - Renamed variable '$' to 'inheritanceUtils'
// - Resolved require(801036) to 'inheritance-utils'
// - Renamed variable 'C' to 'angleConversionConstants'
// - Resolved require(343326) to 'angle-conversion-constants'
// - Renamed variable 'E' to 'interpolatorFactoryHelper'
// - Resolved require(143943) to 'interpolator-factory-helper'
// - Updated imported property 'Z' to 'createDeepMergeFunction' (module 96904)
// - Updated imported property 'Z' to 'createInterpolator' (module 165595)
// - Updated imported property 'ZP' to 'interpolateColor' (module 450141)
// - Updated imported property 'YD' to 'createCubicSplineColor' (module 450141)
// - Updated imported property 'hD' to 'createCubicColor' (module 450141)
// - Updated imported property 'Z' to 'dateInterpolator' (module 173391)
// - Updated imported property 'Z' to 'interpolateArrayOrTypedArray' (module 913249)
// - Updated imported property 'Z' to 'createInterpolator' (module 585471)
// - Updated imported property 'Z' to 'createCubicSpline' (module 289649)
// - Updated imported property 'Z' to 'createLerp' (module 471062)
// - Updated imported property 'Z' to 'stringNumericLerp' (module 296338)
// - Updated imported property 'w' to 'parseSvgTransform' (module 619801)
// - Updated imported property 'Y' to 'parseCssTransform' (module 619801)
// - Updated imported property 'Z' to 'interpolateZoom' (module 842235)
// - Updated imported property 'Z' to 'createLerp' (module 948395)
// - Updated imported property 'Z' to 'createInterpolatedFunction' (module 143943)
// - Updated imported property 'Z' to 'arrayLerp' (module 708919)
// - Updated imported property 'wx' to 'angleInterpolate' (module 974797)
// - Updated imported property 'ZP' to 'linearInterpolate' (module 974797)
// - Updated imported property 'Ym' to 'createHsl' (module 55571)
// - Updated imported property 'Ss' to 'RgbColor' (module 55571)
// - Updated imported property 'SU' to 'convertToRgb' (module 55571)
// - Updated imported property 'Il' to 'ColorBase' (module 55571)
// - Updated imported property 'J5' to 'BRIGHTEN_FACTOR' (module 55571)
// - Updated imported property 'xV' to 'DARKEN_FACTOR' (module 55571)
// - Updated imported property 'ZP' to 'createLabColor' (module 208534)
// - Updated imported property 'Uc' to 'createHclColor' (module 208534)
// - Updated imported property 'R' to 'radToDegFactor' (module 343326)
// - Updated imported property 'u' to 'degToRadFactor' (module 343326)
// - Updated imported property 'Z' to 'inherits' (module 801036)
// - Updated imported property 'l' to 'createObject' (module 801036)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 952480
         */
module.exports = function (module, exports, require) {
  var interpolatorFactory = require("interpolator-factory") /*id: 585471*/;
  var arrayInterpolationUtils = require("array-interpolation-utils") /*id: 913249*/;
  var cubicInterpolation = require("cubic-interpolation") /*id: 165595*/;
  var cubicSplineInterpolator = require("cubic-spline-interpolator") /*id: 289649*/;
  var dateInterpolationFactory = require("date-interpolation-factory") /*id: 173391*/;
  function s(t) {
    var n = t.length;
    return function (e) {
      return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
    };
  }
  var interpolationFunctions = require("interpolation-functions") /*id: 974797*/;
  function h(t, n) {
    var e = interpolationFunctions.angleInterpolate(+t, +n);
    return function (t) {
      var n = e(t);
      return n - Math.floor(n / 360) * 360;
    };
  }
  var linearInterpolation_2 = require("linear-interpolation_2") /*id: 948395*/;
  var arrayLerpUtils = require("array-lerp-utils") /*id: 708919*/;
  var deepMergeFunctionFactory = require("deep-merge-function-factory") /*id: 96904*/;
  var mathLerpInt = require("math-lerp-int") /*id: 471062*/;
  var stringNumericLerp = require("string-numeric-lerp") /*id: 296338*/;
  var transformInterpolationUtils = require("transform-interpolation-utils") /*id: 619801*/;
  var zoomInterpolation = require("zoom-interpolation") /*id: 842235*/;
  var colorInterpolationUtils = require("color-interpolation-utils") /*id: 450141*/;
  var colorFormatConverter_1 = require("color-format-converter_1") /*id: 55571*/;
  function m(t) {
    return function (n, e) {
      var i = t((n = colorFormatConverter_1.createHsl(n)).h, (e = colorFormatConverter_1.createHsl(e)).h);
      var r = interpolationFunctions.linearInterpolate(n.s, e.s);
      var o = interpolationFunctions.linearInterpolate(n.l, e.l);
      var u = interpolationFunctions.linearInterpolate(n.opacity, e.opacity);
      return function (t) {
        n.h = i(t);
        n.s = r(t);
        n.l = o(t);
        n.opacity = u(t);
        return n + "";
      };
    };
  }
  var b = m(interpolationFunctions.angleInterpolate);
  var M = m(interpolationFunctions.linearInterpolate);
  var labHclColorConverter = require("lab-hcl-color-converter") /*id: 208534*/;
  function Z(t, n) {
    var e = interpolationFunctions.linearInterpolate((t = labHclColorConverter.createLabColor(t)).l, (n = labHclColorConverter.createLabColor(n)).l);
    var i = interpolationFunctions.linearInterpolate(t.a, n.a);
    var r = interpolationFunctions.linearInterpolate(t.b, n.b);
    var o = interpolationFunctions.linearInterpolate(t.opacity, n.opacity);
    return function (n) {
      t.l = e(n);
      t.a = i(n);
      t.b = r(n);
      t.opacity = o(n);
      return t + "";
    };
  }
  function T(t) {
    return function (n, e) {
      var i = t((n = labHclColorConverter.createHclColor(n)).h, (e = labHclColorConverter.createHclColor(e)).h);
      var r = interpolationFunctions.linearInterpolate(n.c, e.c);
      var o = interpolationFunctions.linearInterpolate(n.l, e.l);
      var u = interpolationFunctions.linearInterpolate(n.opacity, e.opacity);
      return function (t) {
        n.h = i(t);
        n.c = r(t);
        n.l = o(t);
        n.opacity = u(t);
        return n + "";
      };
    };
  }
  var N = T(interpolationFunctions.angleInterpolate);
  var k = T(interpolationFunctions.linearInterpolate);
  var inheritanceUtils = require("inheritance-utils") /*id: 801036*/;
  var angleConversionConstants = require("angle-conversion-constants") /*id: 343326*/;
  var D = -0.6557636667999999;
  function U(t, n, e, i) {
    if (arguments.length == 1) {
      return function (t) {
        if (t instanceof S) {
          return new S(t.h, t.s, t.l, t.opacity);
        }
        if (!(t instanceof colorFormatConverter_1.RgbColor)) {
          t = colorFormatConverter_1.convertToRgb(t);
        }
        var n = t.r / 255;
        var e = t.g / 255;
        var i = t.b / 255;
        var r = (D * i + n * -1.7884503806 - e * 3.5172982438) / (D + -1.7884503806 - 3.5172982438);
        var o = i - r;
        var u = -(((e - r) * 1.97294 - o * -0.29227) / 0.90649);
        var a = Math.sqrt(u * u + o * o) / (r * 1.97294 * (1 - r));
        var s = a ? Math.atan2(u, o) * angleConversionConstants.radToDegFactor - 120 : NaN;
        return new S(s < 0 ? s + 360 : s, a, r, t.opacity);
      }(t);
    } else {
      return new S(t, n, e, i == null ? 1 : i);
    }
  }
  function S(t, n, e, i) {
    this.h = +t;
    this.s = +n;
    this.l = +e;
    this.opacity = +i;
  }
  function A(t) {
    return function n(e) {
      function i(n, i) {
        var r = t((n = U(n)).h, (i = U(i)).h);
        var o = interpolationFunctions.linearInterpolate(n.s, i.s);
        var u = interpolationFunctions.linearInterpolate(n.l, i.l);
        var a = interpolationFunctions.linearInterpolate(n.opacity, i.opacity);
        return function (t) {
          n.h = r(t);
          n.s = o(t);
          n.l = u(Math.pow(t, e));
          n.opacity = a(t);
          return n + "";
        };
      }
      e *= 1;
      i.gamma = n;
      return i;
    }(1);
  }
  inheritanceUtils.inherits(S, U, inheritanceUtils.createObject(colorFormatConverter_1.ColorBase, {
    brighter(t) {
      t = t == null ? colorFormatConverter_1.BRIGHTEN_FACTOR : Math.pow(colorFormatConverter_1.BRIGHTEN_FACTOR, t);
      return new S(this.h, this.s, this.l * t, this.opacity);
    },
    darker(t) {
      t = t == null ? colorFormatConverter_1.DARKEN_FACTOR : Math.pow(colorFormatConverter_1.DARKEN_FACTOR, t);
      return new S(this.h, this.s, this.l * t, this.opacity);
    },
    rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * angleConversionConstants.degToRadFactor;
      var n = +this.l;
      var e = isNaN(this.s) ? 0 : this.s * n * (1 - n);
      var i = Math.cos(t);
      var r = Math.sin(t);
      return new colorFormatConverter_1.RgbColor((n + e * (i * -0.14861 + r * 1.78277)) * 255, (n + e * (i * -0.29227 + r * -0.90649)) * 255, (n + i * 1.97294 * e) * 255, this.opacity);
    }
  }));
  var P = A(interpolationFunctions.angleInterpolate);
  var Y = A(interpolationFunctions.linearInterpolate);
  var interpolatorFactoryHelper = require("interpolator-factory-helper") /*id: 143943*/;
  function H(t, n) {
    var e = Array(n);
    var i = 0;
    for (; i < n; ++i) {
      e[i] = t(i / (n - 1));
    }
    return e;
  }
  require.r(exports);
  require.d(exports, {
    interpolateObject: function () {
      return deepMergeFunctionFactory.createDeepMergeFunction;
    },
    interpolateBasis: function () {
      return cubicInterpolation.createInterpolator;
    },
    interpolateLab: function () {
      return Z;
    },
    interpolateDiscrete: function () {
      return s;
    },
    interpolateRgb: function () {
      return colorInterpolationUtils.interpolateColor;
    },
    interpolateDate: function () {
      return dateInterpolationFactory.dateInterpolator;
    },
    interpolateHsl: function () {
      return b;
    },
    interpolateCubehelixLong: function () {
      return Y;
    },
    quantize: function () {
      return H;
    },
    interpolateArray: function () {
      return arrayInterpolationUtils.interpolateArrayOrTypedArray;
    },
    interpolate: function () {
      return interpolatorFactory.createInterpolator;
    },
    interpolateRgbBasisClosed: function () {
      return colorInterpolationUtils.createCubicSplineColor;
    },
    interpolateHclLong: function () {
      return k;
    },
    interpolateHue: function () {
      return h;
    },
    interpolateHslLong: function () {
      return M;
    },
    interpolateBasisClosed: function () {
      return cubicSplineInterpolator.createCubicSpline;
    },
    interpolateRound: function () {
      return mathLerpInt.createLerp;
    },
    interpolateRgbBasis: function () {
      return colorInterpolationUtils.createCubicColor;
    },
    interpolateString: function () {
      return stringNumericLerp.stringNumericLerp;
    },
    interpolateTransformSvg: function () {
      return transformInterpolationUtils.parseSvgTransform;
    },
    interpolateZoom: function () {
      return zoomInterpolation.interpolateZoom;
    },
    interpolateTransformCss: function () {
      return transformInterpolationUtils.parseCssTransform;
    },
    interpolateNumber: function () {
      return linearInterpolation_2.createLerp;
    },
    piecewise: function () {
      return interpolatorFactoryHelper.createInterpolatedFunction;
    },
    interpolateHcl: function () {
      return N;
    },
    interpolateCubehelix: function () {
      return P;
    },
    interpolateNumberArray: function () {
      return arrayLerpUtils.arrayLerp;
    }
  });
}