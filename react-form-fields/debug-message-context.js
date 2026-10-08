// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'useDebugMessage'
// - Renamed export 'u' to 'DebugMessageProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23641.b9dc0072.js
         * chunkId: 23641
         * moduleId: 818296
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let r = "You are not able to invoke open returned by useDebugMessage, because DebugMessageProvider needed.";
  let l = reactCoreLibraryReexport.createContext({
    open: () => {
      throw Error(r);
    },
    close: () => {
      throw Error(r);
    }
  });
  let s = () => reactCoreLibraryReexport.useContext(l);
  let a = e => {
    let {
      children: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t
    });
  };
  require.d(exports, {
    useDebugMessage: function () {
      return s;
    },
    DebugMessageProvider: function () {
      return a;
    }
  });
}