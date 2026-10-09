// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FU' to 'useContextValue'
// - Renamed export 'xK' to 'ContextProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 351634
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = reactCoreLibraryReexport.createContext({});
  let s = e => {
    let {
      children: t,
      ...a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(i.Provider, {
      value: a,
      children: t
    });
  };
  let o = () => reactCoreLibraryReexport.useContext(i);
  require.d(exports, {
    useContextValue: function () {
      return o;
    },
    ContextProvider: function () {
      return s;
    }
  });
}