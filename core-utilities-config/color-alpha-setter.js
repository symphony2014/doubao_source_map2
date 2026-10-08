// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'setColorWithAlpha'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 882094
         */
module.exports = function (module, exports, require) {
  var colorConversionUtils = require("color-conversion-utils") /*id: 965962*/;
  var colorModelManager = require("color-model-manager") /*id: 346102*/;
  var colorFormatParser = require("color-format-parser") /*id: 289231*/;
  var colorChannelModifier = require("color-channel-modifier") /*id: 388454*/;
  exports.setColorWithAlpha = (t, e, r = 0, n = 1) => {
    if (typeof t != "number") {
      return colorChannelModifier.modifyColorChannels(t, {
        a: e
      });
    }
    let s = colorModelManager.colorModel.set({
      r: colorConversionUtils.colorUtils.channel.clamp.r(t),
      g: colorConversionUtils.colorUtils.channel.clamp.g(e),
      b: colorConversionUtils.colorUtils.channel.clamp.b(r),
      a: colorConversionUtils.colorUtils.channel.clamp.a(n)
    });
    return colorFormatParser.colorParser.stringify(s);
  };
}