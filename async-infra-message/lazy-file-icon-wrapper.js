// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aA' to 'lazyFileIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 312448
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let t = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
      fn: e,
      fallback: {
        default: () => reactJsxRuntimeCoreReexport.jsx("span", {})
      }
    }));
    let n = reactCoreLibraryReexport.forwardRef(function (e, n) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: reactJsxRuntimeCoreReexport.jsx("span", {}),
        children: reactJsxRuntimeCoreReexport.jsx(t, {
          ref: n,
          ...e
        })
      });
    });
    n.displayName = t.displayName;
    return n;
  };
  let a = o(() => require.e("file-icon-svg-components") /*id: 8681*/.then(require.bind(require, "file-icon-selector") /*id: 112034*/).then(e => {
    let {
      FileIcon: t
    } = e;
    return {
      default: t
    };
  }));
  o(() => require.e("multi-file-icon-svg-component") /*id: 15208*/.then(require.bind(require, "multi-file-icon") /*id: 862657*/).then(e => {
    let {
      MultiFileIcon: t
    } = e;
    return {
      default: t
    };
  }));
  require.d(exports, {
    lazyFileIcon: function () {
      return a;
    }
  });
}