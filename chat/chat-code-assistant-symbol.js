// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'codeAssistantSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 800611
         */
module.exports = function (module, exports, require) {
  let i = Symbol("CodeAsisstant");
  require.d(exports, {
    codeAssistantSymbol: function () {
      return i;
    }
  });
}