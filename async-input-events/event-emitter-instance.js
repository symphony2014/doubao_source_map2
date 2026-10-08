// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'eventEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-events.8e129d94.js
         * chunkId: 25182
         * moduleId: 842485
         */
module.exports = function (module, exports, require) {
  let r = new (require("event-emitter-wrapper_1") /*id: 740547*/.getEventEmitter)();
  require.d(exports, {
    eventEmitter: function () {
      return r;
    }
  });
}