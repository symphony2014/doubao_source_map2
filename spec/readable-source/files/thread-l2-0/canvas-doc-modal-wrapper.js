// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'CanvasDocModalWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 867596
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
        CanvasDocModal: e
      } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("react-imagex-utils") /*id: 76927*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("lottie-web-player-core") /*id: 97546*/, require.e("mermaid-core-renderer") /*id: 34190*/, require.e("rich-text-editor-kit-modules") /*id: 82855*/, require.e("markdown-renderer-mdbox") /*id: 51369*/, require.e("mindmap-component") /*id: 86533*/, require.e("document-editor-core") /*id: 38746*/, require.e("canvas-doc-modal") /*id: 57462*/]).then(require.bind(require, "canvas-doc-modal") /*id: 394350*/);
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
    CanvasDocModalWrapper: function () {
      return c;
    }
  });
}