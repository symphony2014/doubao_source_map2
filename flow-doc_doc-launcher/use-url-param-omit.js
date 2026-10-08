// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'useUrlParamOmit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 455520
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  let a = e => {
    let i = reactCoreLibraryReexport.useMemo(() => {
      if (typeof window != "undefined") {
        return urlParamUtils.parseQueryString(location.search)[e];
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof window != "undefined" && i) {
        let i = urlParamUtils.parseQueryString(location.search);
        history.replaceState({}, "", urlParamUtils.appendUrlParams(location.pathname, throttledOmitPathStringify.omitPathStringify(i, e)));
      }
    }, [i]);
    return i;
  };
  require.d(exports, {
    useUrlParamOmit: function () {
      return a;
    }
  });
}