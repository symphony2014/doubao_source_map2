// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'useCheckedState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 28538
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let l = () => {
    let [e, t] = reactCoreLibraryReexport.useState(false);
    let n = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        if (n.current) {
          clearTimeout(n.current);
        }
        n.current = window.setTimeout(() => {
          t(false);
        }, 3000);
      }
    }, [e]);
    return {
      setChecked: () => {
        t(true);
      },
      checked: e
    };
  };
  require.d(exports, {
    useCheckedState: function () {
      return l;
    }
  });
}