// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'adjustLightness'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 695366
         */
module.exports = function (module, exports, require) {
  var colorChannelAdjuster = require("color-channel-adjuster") /*id: 194071*/;
  exports.adjustLightness = (t, e) => colorChannelAdjuster.adjustColorChannel(t, "l", e);
}