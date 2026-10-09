// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'mouseEventService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 827270
         */
module.exports = function (module, exports, require) {
  let i = require("dependency-injection-container") /*id: 555385*/.providerName("mouse-event-service");
  require.d(exports, {
    mouseEventService: function () {
      return i;
    }
  });
}