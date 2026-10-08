// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'globalEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 87667
         */
module.exports = function (module, exports, require) {
  let r = new (require("event-emitter-wrapper_1") /*id: 740547*/.eventEmitter)();
  require.d(exports, {
    globalEmitter: function () {
      return r;
    }
  });
}