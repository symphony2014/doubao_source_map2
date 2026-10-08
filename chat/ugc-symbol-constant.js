// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'ugcSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 469259
         */
module.exports = function (module, exports, require) {
  let i = Symbol("UGC");
  require.d(exports, {
    ugcSymbol: function () {
      return i;
    }
  });
}