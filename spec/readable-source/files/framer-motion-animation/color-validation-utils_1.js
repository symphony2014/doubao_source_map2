// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'colorValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 485358
         */
module.exports = function (module, exports, require) {
  var hexColorValidator = require("hex-color-validator") /*id: 750715*/;
  var hslColorValidator = require("hsl-color-validator") /*id: 468321*/;
  var rgbColorValidator = require("rgb-color-validator") /*id: 579754*/;
  let o = {
    test: t => rgbColorValidator.rgbColorValidator.test(t) || hexColorValidator.hexColorValidator.test(t) || hslColorValidator.hslColorValidator.test(t),
    parse: t => rgbColorValidator.rgbColorValidator.test(t) ? rgbColorValidator.rgbColorValidator.parse(t) : hslColorValidator.hslColorValidator.test(t) ? hslColorValidator.hslColorValidator.parse(t) : hexColorValidator.hexColorValidator.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? rgbColorValidator.rgbColorValidator.transform(t) : hslColorValidator.hslColorValidator.transform(t),
    getAnimatableNone: t => {
      let e = o.parse(t);
      e.alpha = 0;
      return o.transform(e);
    }
  };
  require.d(exports, {
    colorValidator: function () {
      return o;
    }
  });
}