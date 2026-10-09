// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'CanvasSharePopoverLazyLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: step-canvas-panel.5a261512.js
         * chunkId: 58536
         * moduleId: 518373
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let o = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        CanvasSharePopover: e
      } = await Promise.all([require.e("analytics-tracking-sdk") /*id: 22533*/, require.e("changeset-easysync-modules") /*id: 5888*/, require.e("network-io-client") /*id: 45310*/, require.e("webpack-chunk-utils") /*id: 17934*/, require.e("docx-editor-collab-share") /*id: 70666*/, require.e("canvas-share-popover") /*id: 91643*/]).then(require.bind(require, "canvas-share-popover-component") /*id: 651936*/);
      return {
        default: e
      };
    }
  })));
  require.d(exports, {
    CanvasSharePopoverLazyLoader: function () {
      return o;
    }
  });
}