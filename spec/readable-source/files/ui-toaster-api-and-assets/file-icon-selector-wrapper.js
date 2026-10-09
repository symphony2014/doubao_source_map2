// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aA' to 'FileIconSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 833236
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let i = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
      fn: e,
      fallback: {
        default: () => reactJsxRuntimeCoreReexport.jsx("span", {})
      }
    }));
    let t = reactCoreLibraryReexport.forwardRef(function (e, t) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: reactJsxRuntimeCoreReexport.jsx("span", {}),
        children: reactJsxRuntimeCoreReexport.jsx(i, {
          ref: t,
          ...e
        })
      });
    });
    t.displayName = i.displayName;
    return t;
  };
  let l = reactSuspenseWrapper.withSuspense(s(() => Promise.all([require.e("file-type-icon-assets") /*id: 50411*/, require.e("file-type-icon-module") /*id: 93909*/]).then(require.bind(require, "file-icon-selector_1") /*id: 498662*/).then(e => {
    let {
      FileIcon: i
    } = e;
    return {
      default: i
    };
  })));
  reactSuspenseWrapper.withSuspense(s(() => Promise.all([require.e("file-type-icon-assets") /*id: 50411*/, require.e("file-type-icon-module") /*id: 93909*/]).then(require.bind(require, "file-icon-selector_1") /*id: 498662*/).then(e => {
    let {
      MultiFileIcon: i
    } = e;
    return {
      default: i
    };
  })));
  require.d(exports, {
    FileIconSelector: function () {
      return l;
    }
  });
}