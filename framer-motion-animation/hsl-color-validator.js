// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'hslColorValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 468321
         */
module.exports = function (module, exports, require) {
  var numberTypeValidators = require("number-type-validators") /*id: 730157*/;
  var cssUnitUtils = require("css-unit-utils") /*id: 466130*/;
  var numberRoundPrecision = require("number-round-precision") /*id: 379285*/;
  var colorValidationUtils = require("color-validation-utils") /*id: 318138*/;
  let a = {
    test: colorValidationUtils.isColorString("hsl", "hue"),
    parse: colorValidationUtils.parseColorValues("hue", "saturation", "lightness"),
    transform: t => {
      let {
        hue: e,
        saturation: i,
        lightness: o,
        alpha: a = 1
      } = t;
      return "hsla(" + Math.round(e) + ", " + cssUnitUtils.percentUnit.transform(numberRoundPrecision.roundPrecision(i)) + ", " + cssUnitUtils.percentUnit.transform(numberRoundPrecision.roundPrecision(o)) + ", " + numberRoundPrecision.roundPrecision(numberTypeValidators.clampedNumberValidator.transform(a)) + ")";
    }
  };
  require.d(exports, {
    hslColorValidator: function () {
      return a;
    }
  });
}