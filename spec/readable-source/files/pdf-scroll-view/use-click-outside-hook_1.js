// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'useClickOutside'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: code-canvas-popover-toolbar.edf58013.js
         * chunkId: 23546
         * moduleId: 861825
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let a = e => {
    let {
      getTargets: n,
      cb: i
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        let o = e.target;
        if (o instanceof HTMLElement && n().every(e => !(e == null ? undefined : e.contains(o)))) {
          i();
        }
      };
      document.addEventListener("mousedown", e);
      return () => {
        document.removeEventListener("mousedown", e);
      };
    }, [n]);
  };
  require.d(exports, {
    useClickOutside: function () {
      return a;
    }
  });
}