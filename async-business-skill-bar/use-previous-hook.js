// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'usePrevious'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14520.ef9f9644.js
         * chunkId: 14520
         * moduleId: 903727
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(t, e) {
    return !Object.is(t, e);
  }
  exports.usePrevious = function (t, e = i) {
    var n = reactCoreLibraryReexport.useRef();
    var o = reactCoreLibraryReexport.useRef();
    if (e(o.current, t)) {
      n.current = o.current;
      o.current = t;
    }
    return n.current;
  };
}