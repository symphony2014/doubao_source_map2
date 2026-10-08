// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isColorDark'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 99164
         */
module.exports = function (module, exports, require) {
  var colorConversionUtils = require("color-conversion-utils") /*id: 965962*/;
  var colorFormatParser = require("color-format-parser") /*id: 289231*/;
  var o = t => {
    let {
      r: e,
      g: r,
      b: o
    } = colorFormatParser.colorParser.parse(t);
    let l = colorConversionUtils.colorUtils.channel.toLinear(e) * 0.2126 + colorConversionUtils.colorUtils.channel.toLinear(r) * 0.7152 + colorConversionUtils.colorUtils.channel.toLinear(o) * 0.0722;
    return colorConversionUtils.colorUtils.lang.round(l);
  };
  var l = t => o(t) >= 0.5;
  var n = t => !l(t);
  require.d(exports, {
    isColorDark: function () {
      return n;
    }
  });
}