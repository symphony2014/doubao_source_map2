// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'eventEmitterProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 354872
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("event-emitter");
  require.d(exports, {
    eventEmitterProviderName: function () {
      return n;
    }
  });
}