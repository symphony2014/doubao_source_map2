// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ce' to 'useViewContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 515049
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let r = reactCoreLibraryReexport.createContext({
    viewId: 0,
    reportCollectContentCard: emptyExportFunction.emptyFunction,
    reportFilteringOptionsShow: emptyExportFunction.emptyFunction,
    reportFilteringOptionsClick: emptyExportFunction.emptyFunction
  });
  r.Provider;
  let o = reactCoreLibraryReexport.createContext({});
  o.Provider;
  let a = () => {
    let e = reactCoreLibraryReexport.useContext(r);
    let t = reactCoreLibraryReexport.useContext(o);
    return {
      ...e,
      ...t
    };
  };
  require.d(exports, {
    useViewContext: function () {
      return a;
    }
  });
}