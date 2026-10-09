// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useResetState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 997624
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  exports.useResetState = function () {
    var e = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState({}), 2)[1];
    return reactCoreLibraryReexport.useCallback(function () {
      return e({});
    }, []);
  };
}