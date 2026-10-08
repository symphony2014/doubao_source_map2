// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'LazyFileIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 632403
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = (e => {
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
  })(() => require.e("file-icon-collection") /*id: 84969*/.then(require.bind(require, "file-icon-component_1") /*id: 666557*/).then(e => {
    let {
      FileIcon: t
    } = e;
    return {
      default: t
    };
  }));
  require.d(exports, {
    LazyFileIcon: function () {
      return l;
    }
  });
}