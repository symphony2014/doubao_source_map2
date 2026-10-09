// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useAppContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 892768
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var contextDefinition = require("context-definition") /*id: 616643*/;
  function o() {
    return reactCoreLibraryReexport.useContext(contextDefinition.AppContext);
  }
  require.d(exports, {
    useAppContext: function () {
      return o;
    }
  });
}