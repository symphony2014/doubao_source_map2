// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'roundRectBounds'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 491577
         */
module.exports = function (module, exports, require) {
  function i(t) {
    t.x0 = Math.round(t.x0);
    t.y0 = Math.round(t.y0);
    t.x1 = Math.round(t.x1);
    t.y1 = Math.round(t.y1);
  }
  require.d(exports, {
    roundRectBounds: function () {
      return i;
    }
  });
}