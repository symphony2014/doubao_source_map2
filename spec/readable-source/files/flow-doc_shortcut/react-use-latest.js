// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useLatest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 549846
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o(e) {
    let i = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      i.current = e;
    }, [e]);
    return i.current;
  }
  require.d(exports, {
    useLatest: function () {
      return o;
    }
  });
}