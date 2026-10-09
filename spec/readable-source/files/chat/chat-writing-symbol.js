// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'writingSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 958144
         */
module.exports = function (module, exports, require) {
  let i = Symbol("Writing");
  require.d(exports, {
    writingSymbol: function () {
      return i;
    }
  });
}