// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'dimensions'
// - Renamed export 'z' to 'defaultCount'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 446374
         */
module.exports = function (module, exports, require) {
  var o = 8;
  var r = {
    x: 8,
    y: 6
  };
  require.d(exports, {
    dimensions: function () {
      return r;
    },
    defaultCount: function () {
      return o;
    }
  });
}