// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'HtmlArtifactModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 984899
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactUseRefValue = require("react-use-ref-value") /*id: 45405*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        ShareHTMLArtifactModal: e
      } = await Promise.all([require.e("html-parser") /*id: 5374*/, require.e("css-tree-source-map") /*id: 53224*/, require.e("canvas-code-modal") /*id: 54360*/]).then(require.bind(require, "canvas-html-artifact-modal") /*id: 411521*/);
      return {
        default: e
      };
    }
  })));
  let c = e => {
    let {
      visible: t = true
    } = e;
    let n = reactUseRefValue.useRefValue(t);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: n && reactJsxRuntimeCoreReexport.jsx(s, {
        ...e
      })
    });
  };
  require.d(exports, {
    HtmlArtifactModal: function () {
      return c;
    }
  });
}