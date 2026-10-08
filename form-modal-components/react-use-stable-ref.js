// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'useStableRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 842231
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e) {
    let t = reactCoreLibraryReexport.useRef(e);
    t.current = e;
    return reactCoreLibraryReexport.useMemo(() => Object.freeze({
      get current() {
        return t.current;
      }
    }), []);
  }
  require.d(exports, {
    useStableRef: function () {
      return i;
    }
  });
}