// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'colorChannelAdjust'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 492471
         */
module.exports = function (module, exports, require) {
  var colorFormatParser = require("color-format-parser") /*id: 289231*/;
  var colorChannelModifier = require("color-channel-modifier") /*id: 388454*/;
  exports.colorChannelAdjust = (t, e) => {
    let r = colorFormatParser.colorParser.parse(t);
    let o = {};
    for (let t in e) {
      if (e[t]) {
        o[t] = r[t] + e[t];
      }
    }
    return colorChannelModifier.modifyColorChannels(t, o);
  };
}