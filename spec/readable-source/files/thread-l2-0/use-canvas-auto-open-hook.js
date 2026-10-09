// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'useCanvasAutoOpen'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 909264
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var canvasAutoOpenManager = require("canvas-auto-open-manager") /*id: 706581*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  let o = e => {
    let {
      messageId: t,
      onMatch: n
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof window != "undefined") {
        (() => {
          let {
            keysValue: e
          } = urlParamUtils.parseUrlData(window.location.href, ["opm"]);
          let i = e.opm;
          if (i) {
            let e = decodeURIComponent(i);
            let r = t.length >= 6 ? t.slice(-6) : t;
            if (e === "all" || e === r) {
              if (canvasAutoOpenManager.canvasAutoOpenManager.isAutoOpenCanvas()) {
                canvasAutoOpenManager.canvasAutoOpenManager.startOpenCanvas();
                n();
              }
              let e = new URL(window.location.href);
              e.searchParams.delete("opm");
              window.history.replaceState(null, "", e.toString());
            }
          }
        })();
      }
    }, [t, n]);
  };
  require.d(exports, {
    useCanvasAutoOpen: function () {
      return o;
    }
  });
}