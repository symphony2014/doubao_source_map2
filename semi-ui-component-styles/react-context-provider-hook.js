// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'useContextValue'
// - Renamed export 'w' to 'ContextProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 719110
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = reactCoreLibraryReexport.createContext({});
  let l = e => {
    let {
      value: t = {},
      children: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(i.Provider, {
      value: t,
      children: a
    });
  };
  let o = () => reactCoreLibraryReexport.useContext(i);
  require.d(exports, {
    useContextValue: function () {
      return o;
    },
    ContextProvider: function () {
      return l;
    }
  });
}