// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'blockArtifactSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 735847
         */
module.exports = function (module, exports, require) {
  let i = Symbol("block-artifact");
  require.d(exports, {
    blockArtifactSymbol: function () {
      return i;
    }
  });
}