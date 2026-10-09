// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'usePatchContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 48138
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextProvider_1 = require("react-context-provider_1") /*id: 450434*/;
  function o() {
    return reactCoreLibraryReexport.useContext(reactContextProvider_1.PatchContext);
  }
  require.d(exports, {
    usePatchContext: function () {
      return o;
    }
  });
}