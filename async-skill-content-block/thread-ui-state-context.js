// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HP' to 'ThreadUiContext'
// - Renamed export 'RL' to 'useThreadUiContext'
// - Renamed export 'l1' to 'useThreadUiState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 993650
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let l = () => {
    let [e, t] = reactCoreLibraryReexport.useState(false);
    let [n, l] = reactCoreLibraryReexport.useState(false);
    let [r, o] = reactCoreLibraryReexport.useState(false);
    return {
      expanded: e,
      setExpanded: t,
      shouldShowLoadingFooter: n,
      setShouldShowLoadingFooter: l,
      disableAllAnimations: r,
      setDisableAllAnimations: o
    };
  };
  let r = {
    expanded: false,
    setExpanded: () => undefined,
    shouldShowLoadingFooter: false,
    setShouldShowLoadingFooter: () => undefined,
    disableAllAnimations: false,
    setDisableAllAnimations: () => undefined
  };
  let o = reactCoreLibraryReexport.createContext(null);
  let a = () => {
    let e = reactCoreLibraryReexport.useContext(o);
    return e ?? r;
  };
  require.d(exports, {
    ThreadUiContext: function () {
      return o;
    },
    useThreadUiContext: function () {
      return a;
    },
    useThreadUiState: function () {
      return l;
    }
  });
}