// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'extractColorChannel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41045.8c41cec3.js
         * chunkId: 41045
         * moduleId: 165290
         */
module.exports = function (module, exports, require) {
  var colorConversionUtils = require("color-conversion-utils") /*id: 965962*/;
  var colorFormatParser = require("color-format-parser") /*id: 289231*/;
  exports.extractColorChannel = (t, e) => colorConversionUtils.colorUtils.lang.round(colorFormatParser.colorParser.parse(t)[e]);
}