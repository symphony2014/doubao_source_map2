// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'useRefState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 86533.b56a59c4.js
         * chunkId: 86533
         * moduleId: 377533
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let l = e => {
    let t = reactCoreLibraryReexport.useRef(e ?? null);
    let [, n] = reactCoreLibraryReexport.useReducer(e => e + 1, 0);
    let l = reactCoreLibraryReexport.useCallback(e => {
      t.current = e;
      n();
    }, []);
    return [t, l];
  };
  require.d(exports, {
    useRefState: function () {
      return l;
    }
  });
}