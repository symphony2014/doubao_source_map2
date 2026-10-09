// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'podcastSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 969505
         */
module.exports = function (module, exports, require) {
  let i = Symbol("Podcast");
  require.d(exports, {
    podcastSymbol: function () {
      return i;
    }
  });
}