// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'guidanceEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 801024
         */
module.exports = function (module, exports, require) {
  let i = new (require("event-emitter-wrapper_1") /*id: 740547*/.eventEmitter)();
  require.d(exports, {
    guidanceEmitter: function () {
      return i;
    }
  });
}