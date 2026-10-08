// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ar' to 'formStateContext'
// - Renamed export 'f5' to 'formInitContext'
// - Renamed export 'kn' to 'formUpdaterContext'
// - Renamed export 'mC' to 'formApiContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 139790
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let o = reactCoreLibraryReexport.createContext({});
  o.displayName = "FormState";
  let i = reactCoreLibraryReexport.createContext({});
  i.displayName = "FormApi";
  let a = reactCoreLibraryReexport.createContext({});
  a.displayName = "FormUpdater";
  let s = reactCoreLibraryReexport.createContext({
    shouldUseInitValue: true
  });
  require.d(exports, {
    formStateContext: function () {
      return o;
    },
    formInitContext: function () {
      return s;
    },
    formUpdaterContext: function () {
      return a;
    },
    formApiContext: function () {
      return i;
    }
  });
}