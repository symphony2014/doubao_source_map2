// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'localBreakSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 773327
         */
module.exports = function (module, exports, require) {
  let i = Symbol("LocalBreak");
  require.d(exports, {
    localBreakSymbol: function () {
      return i;
    }
  });
}