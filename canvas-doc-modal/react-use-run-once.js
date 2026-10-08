// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'useRunOnce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 561418
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let i = e => {
    let t = reactCoreLibraryReexport.useRef(false);
    if (!t.current) {
      t.current = true;
      e();
    }
  };
  require.d(exports, {
    useRunOnce: function () {
      return i;
    }
  });
}