// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'rgbColorTransformer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 453160
         */
module.exports = function (module, exports, require) {
  var clampNumber = require("clamp-number") /*id: 887362*/;
  var numberTypeTransformers = require("number-type-transformers") /*id: 397219*/;
  var numberPrecisionRound = require("number-precision-round") /*id: 847616*/;
  var colorStringValidationAndParsing = require("color-string-validation-and-parsing") /*id: 940084*/;
  let a = t => clampNumber.clampNumber(0, 255, t);
  let l = {
    ...numberTypeTransformers.numberTransformer,
    transform: t => Math.round(a(t))
  };
  let u = {
    test: colorStringValidationAndParsing.validateColorString("rgb", "red"),
    parse: colorStringValidationAndParsing.parseColorString("red", "green", "blue"),
    transform: t => {
      let {
        red: e,
        green: i,
        blue: n,
        alpha: o = 1
      } = t;
      return "rgba(" + l.transform(e) + ", " + l.transform(i) + ", " + l.transform(n) + ", " + numberPrecisionRound.round5Decimals(numberTypeTransformers.clampedNumberTransformer.transform(o)) + ")";
    }
  };
  require.d(exports, {
    rgbColorTransformer: function () {
      return u;
    }
  });
}