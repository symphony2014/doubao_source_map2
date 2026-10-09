// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'adjustColorChannel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 194071
         */
module.exports = function (module, exports, require) {
  var colorConversionUtils = require("color-conversion-utils") /*id: 965962*/;
  var colorFormatParser = require("color-format-parser") /*id: 289231*/;
  exports.adjustColorChannel = (t, e, r) => {
    let o = colorFormatParser.colorParser.parse(t);
    let l = o[e];
    let n = colorConversionUtils.colorUtils.channel.clamp[e](l + r);
    if (l !== n) {
      o[e] = n;
    }
    return colorFormatParser.colorParser.stringify(o);
  };
}