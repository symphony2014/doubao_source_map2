// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'messageLimitSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 431189
         */
module.exports = function (module, exports, require) {
  let i = Symbol("MessageLimit");
  require.d(exports, {
    messageLimitSymbol: function () {
      return i;
    }
  });
}