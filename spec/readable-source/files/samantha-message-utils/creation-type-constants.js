// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'PO' to 'creationTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79175.7881c099.js
         * chunkId: 79175
         * moduleId: 432580
         */
module.exports = function (module, exports, require) {
  var o = {
    CreationTypeUnknown: 0,
    CreationTypeImage: 1,
    CreationTypeVideo: 2
  };
  require.d(exports, {
    creationTypes: function () {
      return o;
    }
  });
}