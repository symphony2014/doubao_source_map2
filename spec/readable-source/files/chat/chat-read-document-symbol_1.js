// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'readDocumentSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 374916
         */
module.exports = function (module, exports, require) {
  let i = Symbol("ReadDocument");
  require.d(exports, {
    readDocumentSymbol: function () {
      return i;
    }
  });
}