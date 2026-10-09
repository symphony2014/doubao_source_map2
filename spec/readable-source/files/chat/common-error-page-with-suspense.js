// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'CommonErrorPageWithSuspense'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 620276
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let [{
        CommonErrorPage: e
      }, {
        visibleT: t
      }] = await Promise.all([require.e("common-error-fallback") /*id: 57220*/.then(require.bind(require, "common-error-fallback") /*id: 1286*/), require.e("common-error-fallback") /*id: 57220*/.then(require.bind(require, "i18n-visible-translator") /*id: 77869*/)]);
      return {
        default: n => reactJsxRuntimeCoreReexport.jsx(e, {
          ...n,
          t: t
        })
      };
    }
  })));
  require.d(exports, {
    CommonErrorPageWithSuspense: function () {
      return l;
    }
  });
}