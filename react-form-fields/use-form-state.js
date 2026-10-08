// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useFormState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 81618
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var formContextDefinitions = require("form-context-definitions") /*id: 139790*/;
  exports.useFormState = function () {
    return reactCoreLibraryReexport.useContext(formContextDefinitions.formStateContext);
  };
}