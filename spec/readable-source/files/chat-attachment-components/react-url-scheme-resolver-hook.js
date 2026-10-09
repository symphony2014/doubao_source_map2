// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'useUrlSchemeResolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28526.86ccdfd3.js
         * chunkId: 28526
         * moduleId: 373481
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var urlSchemeCheckUtils = require("url-scheme-check-utils") /*id: 566301*/;
  let l = function (e, t = {}) {
    return reactCoreLibraryReexport.useMemo(() => {
      if (e == null ? undefined : e.startsWith("https://")) {
        return e;
      }
      if (urlSchemeCheckUtils.isFlowFileUrl(e)) {
        return urlSchemeCheckUtils.extractUrlParam(e);
      }
      let i = e == null ? undefined : e.match(/sandbox:\/\/(.*)/)?.[1];
      if (i && t[i]) {
        return t[i];
      } else {
        return i && Object.values(t).length === 1 && Object.values(t)[0] || undefined;
      }
    }, [t, e]);
  };
  require.d(exports, {
    useUrlSchemeResolver: function () {
      return l;
    }
  });
}