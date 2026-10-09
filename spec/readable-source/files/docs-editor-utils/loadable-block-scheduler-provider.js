// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'schedulerProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 809759
         */
module.exports = function (module, exports, require) {
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  require("docx-ssr-data-scheduler") /*id: 456291*/;
  let i = dependencyInjectionContainer.providerName("loadable-block-scheduler");
  require.d(exports, {
    schedulerProvider: function () {
      return i;
    }
  });
}