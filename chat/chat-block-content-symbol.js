// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'creationBlockSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 140058
         */
module.exports = function (module, exports, require) {
  let i = Symbol("receive-creation-block-content");
  require.d(exports, {
    creationBlockSymbol: function () {
      return i;
    }
  });
}