// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'composingService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 181291
         */
module.exports = function (module, exports, require) {
  var composingServiceProvider = require("composing-service-provider") /*id: 678505*/;
  require("mouse-event-service-provider") /*id: 827270*/;
  require.d(exports, {
    composingService: function () {
      return composingServiceProvider.composingServiceName;
    }
  });
}