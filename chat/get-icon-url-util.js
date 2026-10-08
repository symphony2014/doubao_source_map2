// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'getIconUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 299192
         */
module.exports = function (module, exports, require) {
  function i(e) {
    if (e) {
      return e.icon_image?.tiny_url || e.icon_image?.origin_url || e.icon_url;
    }
  }
  require.d(exports, {
    getIconUrl: function () {
      return i;
    }
  });
}