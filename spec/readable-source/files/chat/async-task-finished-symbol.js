// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'getAsyncTaskSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 580425
         */
module.exports = function (module, exports, require) {
  let i = Symbol("async-task-finished-message-cmd-plugin");
  require.d(exports, {
    getAsyncTaskSymbol: function () {
      return i;
    }
  });
}