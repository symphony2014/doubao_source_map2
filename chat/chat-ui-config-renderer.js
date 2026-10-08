// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Mq' to 'chatConfigRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 757047
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = (e, t, n) => o => sidebarFeatureFlagsResolver.getSidebarFeatureFlags()[n] ? reactJsxRuntimeCoreReexport.jsx(t, {
    ...o
  }) : reactJsxRuntimeCoreReexport.jsx(e, {
    ...o
  });
  require.d(exports, {
    chatConfigRenderer: function () {
      return o;
    }
  });
}