// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'Coordinates'
// - Renamed export 'z' to 'gridSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 57731
         */
module.exports = function (module, exports, require) {
  var r = 8;
  var i = {
    x: 8,
    y: 6
  };
  require.d(exports, {
    Coordinates: function () {
      return i;
    },
    gridSize: function () {
      return r;
    }
  });
}