// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'colorParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 719203
         */
module.exports = function (module, exports, require) {
  var hexColorParserAndTransformer = require("hex-color-parser-and-transformer") /*id: 316398*/;
  var hslColorFormatter = require("hsl-color-formatter") /*id: 457430*/;
  var rgbColorTransformer = require("rgb-color-transformer") /*id: 453160*/;
  let o = {
    test: t => rgbColorTransformer.rgbColorTransformer.test(t) || hexColorParserAndTransformer.hexColorParser.test(t) || hslColorFormatter.hslColorFormatter.test(t),
    parse: t => rgbColorTransformer.rgbColorTransformer.test(t) ? rgbColorTransformer.rgbColorTransformer.parse(t) : hslColorFormatter.hslColorFormatter.test(t) ? hslColorFormatter.hslColorFormatter.parse(t) : hexColorParserAndTransformer.hexColorParser.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? rgbColorTransformer.rgbColorTransformer.transform(t) : hslColorFormatter.hslColorFormatter.transform(t),
    getAnimatableNone: t => {
      let e = o.parse(t);
      e.alpha = 0;
      return o.transform(e);
    }
  };
  require.d(exports, {
    colorParser: function () {
      return o;
    }
  });
}