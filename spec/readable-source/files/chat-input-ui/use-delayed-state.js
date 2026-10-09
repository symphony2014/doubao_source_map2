// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'useDelayedState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 759.d4297f73.js
         * chunkId: 759
         * moduleId: 494579
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let n = function (e, t = e) {
    let [l, n] = reactCoreLibraryReexport.useState(t);
    reactCoreLibraryReexport.useEffect(() => {
      window.setTimeout(() => {
        n(e);
      }, 0);
    }, [e]);
    return l;
  };
  require.d(exports, {
    useDelayedState: function () {
      return n;
    }
  });
}