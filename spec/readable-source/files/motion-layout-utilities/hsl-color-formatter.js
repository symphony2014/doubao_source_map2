// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'hslColorFormatter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 457430
         */
module.exports = function (module, exports, require) {
  var numberTypeTransformers = require("number-type-transformers") /*id: 397219*/;
  var cssUnitValueParserTransformers = require("css-unit-value-parser-transformers") /*id: 20534*/;
  var numberPrecisionRound = require("number-precision-round") /*id: 847616*/;
  var colorStringValidationAndParsing = require("color-string-validation-and-parsing") /*id: 940084*/;
  let a = {
    test: colorStringValidationAndParsing.validateColorString("hsl", "hue"),
    parse: colorStringValidationAndParsing.parseColorString("hue", "saturation", "lightness"),
    transform: t => {
      let {
        hue: e,
        saturation: i,
        lightness: o,
        alpha: a = 1
      } = t;
      return "hsla(" + Math.round(e) + ", " + cssUnitValueParserTransformers.percentUnit.transform(numberPrecisionRound.round5Decimals(i)) + ", " + cssUnitValueParserTransformers.percentUnit.transform(numberPrecisionRound.round5Decimals(o)) + ", " + numberPrecisionRound.round5Decimals(numberTypeTransformers.clampedNumberTransformer.transform(a)) + ")";
    }
  };
  require.d(exports, {
    hslColorFormatter: function () {
      return a;
    }
  });
}