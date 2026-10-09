// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useDebounceCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 31392
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e) {
    let r = reactCoreLibraryReexport.useRef(-1);
    let n = reactCoreLibraryReexport.useRef(false);
    let [i, l] = reactCoreLibraryReexport.useState(Date.now());
    let a = reactCoreLibraryReexport.useRef(e);
    reactCoreLibraryReexport.useEffect(() => {
      a.current = e;
    }, [e]);
    let s = reactCoreLibraryReexport.useCallback(() => {
      n.current = true;
      l(Date.now());
    }, []);
    let c = reactCoreLibraryReexport.useCallback(() => {
      clearTimeout(r.current);
    }, []);
    let d = reactCoreLibraryReexport.useCallback(() => {
      c();
      n.current = false;
      r.current = window.setTimeout(s);
    }, [s, c]);
    reactCoreLibraryReexport.useEffect(() => c, [c]);
    reactCoreLibraryReexport.useEffect(() => {
      if (n.current && a.current) {
        a.current();
        n.current = false;
      }
    }, [i]);
    return d;
  }
  require.d(exports, {
    useDebounceCallback: function () {
      return i;
    }
  });
}