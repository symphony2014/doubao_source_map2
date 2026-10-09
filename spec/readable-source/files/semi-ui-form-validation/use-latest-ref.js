// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useLatestRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72645.b0fb9881.js
         * chunkId: 72645
         * moduleId: 397834
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  exports.useLatestRef = function (e) {
    var t = reactCoreLibraryReexport.useRef(e);
    t.current = e;
    return t;
  };
}