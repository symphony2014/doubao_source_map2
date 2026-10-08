// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'usePrevious'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38149.8ce71c62.js
         * chunkId: 38149
         * moduleId: 199025
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e) {
    let t = reactCoreLibraryReexport.useRef({
      value: e,
      previous: e
    });
    return reactCoreLibraryReexport.useMemo(() => {
      if (t.current.value !== e) {
        t.current.previous = t.current.value;
        t.current.value = e;
      }
      return t.current.previous;
    }, [e]);
  }
  require.d(exports, {
    usePrevious: function () {
      return i;
    }
  });
}