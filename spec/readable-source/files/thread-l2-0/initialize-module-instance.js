// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'initializeInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 233913
         */
module.exports = function (module, exports, require) {
  let i = new (require("event-emitter-wrapper_1") /*id: 740547*/.getEventEmitter)();
  require.d(exports, {
    initializeInstance: function () {
      return i;
    }
  });
}