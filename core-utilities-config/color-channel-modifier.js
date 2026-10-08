// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'modifyColorChannels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 388454
         */
module.exports = function (module, exports, require) {
  var colorConversionUtils = require("color-conversion-utils") /*id: 965962*/;
  var colorFormatParser = require("color-format-parser") /*id: 289231*/;
  exports.modifyColorChannels = (t, e) => {
    let r = colorFormatParser.colorParser.parse(t);
    for (let t in e) {
      r[t] = colorConversionUtils.colorUtils.channel.clamp[t](e[t]);
    }
    return colorFormatParser.colorParser.stringify(r);
  };
}