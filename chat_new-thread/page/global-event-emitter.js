// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'eventEmitterInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64980.009d7833.js
         * chunkId: 64980
         * moduleId: 366024
         */
module.exports = function (module, exports, require) {
  let r = new (require("event-emitter-class") /*id: 358907*/.EventEmitter)();
  require.d(exports, {
    eventEmitterInstance: function () {
      return r;
    }
  });
}