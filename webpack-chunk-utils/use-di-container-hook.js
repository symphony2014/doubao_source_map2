// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'useDiContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 3542
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  function a(e) {
    return reactCoreLibraryReexport.useMemo(() => diContainerInstance.diContainer.get(e), [e]);
  }
  require.d(exports, {
    useDiContainer: function () {
      return a;
    }
  });
}