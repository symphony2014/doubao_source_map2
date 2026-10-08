// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'blockCodeFileSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 468071
         */
module.exports = function (module, exports, require) {
  let i = Symbol("block-code-file");
  require.d(exports, {
    blockCodeFileSymbol: function () {
      return i;
    }
  });
}