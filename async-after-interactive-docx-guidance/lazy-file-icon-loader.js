// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N4' to 'createLazyIconComponent'
// - Renamed export 'aA' to 'FileIcon'
// - Renamed export 'u1' to 'MultiFileIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 525556
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let t = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
      fn: e,
      fallback: {
        default: () => reactJsxRuntimeCoreReexport.jsx("span", {})
      }
    }));
    let l = reactCoreLibraryReexport.forwardRef(function (e, l) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: reactJsxRuntimeCoreReexport.jsx("span", {}),
        children: reactJsxRuntimeCoreReexport.jsx(t, {
          ref: l,
          ...e
        })
      });
    });
    l.displayName = t.displayName;
    return l;
  };
  let r = a(() => Promise.all([require.e("file-type-icon-assets") /*id: 50411*/, require.e("file-icon-mapping") /*id: 22344*/]).then(require.bind(require, "file-type-icon-renderer") /*id: 802793*/).then(e => {
    let {
      FileIcon: t
    } = e;
    return {
      default: t
    };
  }));
  let s = a(() => Promise.all([require.e("file-type-icon-assets") /*id: 50411*/, require.e("file-icon-mapping") /*id: 22344*/]).then(require.bind(require, "file-type-icon-renderer") /*id: 802793*/).then(e => {
    let {
      MultiFileIcon: t
    } = e;
    return {
      default: t
    };
  }));
  require.d(exports, {
    createLazyIconComponent: function () {
      return a;
    },
    FileIcon: function () {
      return r;
    },
    MultiFileIcon: function () {
      return s;
    }
  });
}