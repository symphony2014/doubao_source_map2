// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'lazyMindMapLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 124791
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtil = require("async-retry-util") /*id: 464158*/;
  let a = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => await asyncRetryUtil.retryWithDelay(() => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-entity-decoder") /*id: 87517*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("mind-map-lazy") /*id: 85572*/]).then(require.bind(require, "mindmap-component_1") /*id: 805794*/))));
  require.d(exports, {
    lazyMindMapLoader: function () {
      return a;
    }
  });
}