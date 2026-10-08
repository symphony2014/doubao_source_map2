// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'uL' to 'coordinateTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 406155
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  (r = i ||= {}).CARTESIAN2D = "cartesian2d";
  r.POLAR = "polar";
  r.GEO = "geo";
  r.CALENDAR = "calendar";
  r.AMAP = "amap";
  require.d(exports, {
    coordinateTypes: function () {
      return i;
    }
  });
}