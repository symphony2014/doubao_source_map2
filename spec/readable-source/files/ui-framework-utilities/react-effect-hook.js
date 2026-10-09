// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'useEffectHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 608203
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o(e) {
    reactCoreLibraryReexport.useEffect(function () {
      return e;
    }, []);
  }
  require.d(exports, {
    useEffectHook: function () {
      return o;
    }
  });
}