// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'fileFormats'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99448.e1905545.js
         * chunkId: 99448
         * moduleId: 709576
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {})[n.PPTX = 1] = "PPTX";
  n[n.PDF = 2] = "PDF";
  let i = n;
  require.d(exports, {
    fileFormats: function () {
      return i;
    }
  });
}