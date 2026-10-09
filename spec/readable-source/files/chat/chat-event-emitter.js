// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'chatEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 740942
         */
module.exports = function (module, exports, require) {
  let i = new (require("event-emitter-wrapper_1") /*id: 740547*/.getEventEmitter)();
  require.d(exports, {
    chatEmitter: function () {
      return i;
    }
  });
}