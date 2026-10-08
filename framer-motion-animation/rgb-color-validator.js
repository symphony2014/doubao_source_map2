// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'rgbColorValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 579754
         */
module.exports = function (module, exports, require) {
  var clampNumber = require("clamp-number") /*id: 887362*/;
  var numberTypeValidators = require("number-type-validators") /*id: 730157*/;
  var numberRoundPrecision = require("number-round-precision") /*id: 379285*/;
  var colorValidationUtils = require("color-validation-utils") /*id: 318138*/;
  let a = t => clampNumber.clampNumber(0, 255, t);
  let l = {
    ...numberTypeValidators.numberValidator,
    transform: t => Math.round(a(t))
  };
  let u = {
    test: colorValidationUtils.isColorString("rgb", "red"),
    parse: colorValidationUtils.parseColorValues("red", "green", "blue"),
    transform: t => {
      let {
        red: e,
        green: i,
        blue: n,
        alpha: o = 1
      } = t;
      return "rgba(" + l.transform(e) + ", " + l.transform(i) + ", " + l.transform(n) + ", " + numberRoundPrecision.roundPrecision(numberTypeValidators.clampedNumberValidator.transform(o)) + ")";
    }
  };
  require.d(exports, {
    rgbColorValidator: function () {
      return u;
    }
  });
}