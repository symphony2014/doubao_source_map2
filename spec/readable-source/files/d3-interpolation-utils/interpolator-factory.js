// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createInterpolator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 585471
         */
module.exports = function (module, exports, require) {
  var colorFormatConverter_1 = require("color-format-converter_1") /*id: 55571*/;
  var colorInterpolationUtils = require("color-interpolation-utils") /*id: 450141*/;
  var arrayInterpolationUtils = require("array-interpolation-utils") /*id: 913249*/;
  var dateInterpolationFactory = require("date-interpolation-factory") /*id: 173391*/;
  var linearInterpolation_2 = require("linear-interpolation_2") /*id: 948395*/;
  var deepMergeFunctionFactory = require("deep-merge-function-factory") /*id: 96904*/;
  var stringNumericLerp = require("string-numeric-lerp") /*id: 296338*/;
  var constantFunctionFactory = require("constant-function-factory") /*id: 219843*/;
  var arrayLerpUtils = require("array-lerp-utils") /*id: 708919*/;
  function l(t, n) {
    var e;
    var l = typeof n;
    if (n == null || l === "boolean") {
      return constantFunctionFactory.constantFactory(n);
    } else {
      return (l === "number" ? linearInterpolation_2.createLerp : l === "string" ? (e = colorFormatConverter_1.parseColor(n)) ? (n = e, colorInterpolationUtils.interpolateColor) : stringNumericLerp.stringNumericLerp : n instanceof colorFormatConverter_1.parseColor ? colorInterpolationUtils.interpolateColor : n instanceof Date ? dateInterpolationFactory.dateInterpolator : arrayLerpUtils.isTypedArray(n) ? arrayLerpUtils.arrayLerp : Array.isArray(n) ? arrayInterpolationUtils.interpolateArray : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? deepMergeFunctionFactory.createDeepMergeFunction : linearInterpolation_2.createLerp)(t, n);
    }
  }
  require.d(exports, {
    createInterpolator: function () {
      return l;
    }
  });
}