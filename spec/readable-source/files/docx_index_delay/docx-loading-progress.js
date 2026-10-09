// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'LoadingProgress'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 389611
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let n = e => {
    let {
      generated: i,
      renderChild: r
    } = e;
    let [n, s] = reactCoreLibraryReexport.useState(0);
    let u = reactCoreLibraryReexport.useRef(0);
    let l = e.maxTimeCost || 6000;
    reactCoreLibraryReexport.useEffect(() => {
      if (!i) {
        window.setTimeout(() => {
          u.current += 500;
          s(1 - Math.exp(u.current * -1 / l));
        }, 500);
      }
    }, [n, s, i]);
    let c = Math.floor(n * 100);
    let _ = i ? Math.max(c, 95) : c;
    return reactJsxRuntimeCoreReexport.jsx("span", {
      children: r(_)
    });
  };
  require.d(exports, {
    LoadingProgress: function () {
      return n;
    }
  });
}