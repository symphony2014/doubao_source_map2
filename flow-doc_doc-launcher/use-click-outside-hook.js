// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'useClickOutside'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 649182
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e, t, n = "click", i) {
    let a = reactCoreLibraryReexport.useRef();
    let o = reactCoreLibraryReexport.useCallback(n => {
      var r;
      let i = (typeof e == "function" ? e() : e) || a.current;
      if (!!i && !i.contains(n.target) && !((r = n.composedPath) === null || r === undefined ? undefined : r.call(n).includes(i))) {
        t(n);
      }
    }, [a.current, t, e]);
    reactCoreLibraryReexport.useEffect(() => {
      document.addEventListener(n, o, i);
      return () => {
        document.removeEventListener(n, o, i);
      };
    }, [n, i, o]);
    return a;
  }
  require.d(exports, {
    useClickOutside: function () {
      return i;
    }
  });
}