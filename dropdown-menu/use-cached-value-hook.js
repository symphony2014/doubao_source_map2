// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'useCachedValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99771.2ba6bc81.js
         * chunkId: 99771
         * moduleId: 881417
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o(e) {
    var t = reactCoreLibraryReexport.useRef();
    t.current ||= {
      v: e()
    };
    return t.current.v;
  }
  require.d(exports, {
    useCachedValue: function () {
      return o;
    }
  });
}