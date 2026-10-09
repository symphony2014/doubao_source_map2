// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'isNotPreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 275819
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return !e.closest(".docx-view-type-Preview");
  }
  require.d(exports, {
    isNotPreview: function () {
      return n;
    }
  });
}