// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'useRefCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 683563
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o(e) {
    var n = reactCoreLibraryReexport.useRef();
    n.current ||= {
      v: e()
    };
    return n.current.v;
  }
  require.d(exports, {
    useRefCache: function () {
      return o;
    }
  });
}