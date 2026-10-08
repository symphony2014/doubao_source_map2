// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'isEmptyElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 599693
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return !e.closest || !e.closest(".page-block .cover") || !!e.classList.contains("empty");
  }
  require.d(exports, {
    isEmptyElement: function () {
      return n;
    }
  });
}