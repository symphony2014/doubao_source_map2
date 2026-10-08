// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'deleteMessageSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 789134
         */
module.exports = function (module, exports, require) {
  let i = Symbol("infra:send-message-action:delete");
  require.d(exports, {
    deleteMessageSymbol: function () {
      return i;
    }
  });
}