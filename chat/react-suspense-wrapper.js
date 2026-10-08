// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'withSuspense'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 944055
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = function (e, t) {
    let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let {
      shouldForwardRef: a = true
    } = o;
    let l = a ? reactCoreLibraryReexport.forwardRef(function (n, o) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: t && reactJsxRuntimeCoreReexport.jsx(t, {
          ...n
        }),
        children: reactJsxRuntimeCoreReexport.jsx(e, {
          ref: o,
          ...n
        })
      });
    }) : n => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: t && reactJsxRuntimeCoreReexport.jsx(t, {
        ...n
      }),
      children: reactJsxRuntimeCoreReexport.jsx(e, {
        ...n
      })
    });
    l.displayName = e.displayName ?? (t == null ? undefined : t.displayName);
    return l;
  };
  require.d(exports, {
    withSuspense: function () {
      return o;
    }
  });
}