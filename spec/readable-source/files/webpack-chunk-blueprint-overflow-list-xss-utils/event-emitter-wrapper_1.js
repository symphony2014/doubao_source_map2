// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'getEventEmitter'
// - Renamed export 'Z' to 'eventEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 740547
         */
module.exports = function (module, exports, require) {
  var eventEmitter = require("event-emitter") /*id: 82119*/;
  exports.eventEmitter = eventEmitter;
  require.d(exports, {
    getEventEmitter: function () {
      return eventEmitter;
    }
  });
}