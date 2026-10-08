// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'PanelMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 690886
         */
module.exports = function (module, exports, require) {
  var i = {
    SIDE_PANEL: 0,
    FULL_PANEL: 1,
    CANVAS_ONLY: 2,
    FULL_IMMERSIVE: 3,
    NARROW_SIDE_PANEL: 4
  };
  require.d(exports, {
    PanelMode: function () {
      return i;
    }
  });
}