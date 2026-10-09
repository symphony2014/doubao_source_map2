// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'installDependencies'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 358507
         */
module.exports = function (module, exports, require) {
  var chartCoreLibrary = require("chart-core-library") /*id: 241865*/;
  function r(t) {
    if (Array.isArray(t)) {
      t.forEach(function (t) {
        return t.install(chartCoreLibrary);
      });
    } else {
      t.install(chartCoreLibrary);
    }
  }
  require.d(exports, {
    installDependencies: function () {
      return r;
    }
  });
}