// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'infraMessageEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 926298
         */
module.exports = function (module, exports, require) {
  let i = new (require("event-emitter-class") /*id: 358907*/.EventEmitter)();
  require.d(exports, {
    infraMessageEmitter: function () {
      return i;
    }
  });
}