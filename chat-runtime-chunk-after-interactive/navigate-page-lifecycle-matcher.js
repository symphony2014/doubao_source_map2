// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(240007) to 'navigate-page-lifecycle-symbol'
// - Updated imported property 'B' to 'pageLifecycleSymbol' (module 240007)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 549303
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("navigate-page-lifecycle-symbol") /*id: 240007*/.pageLifecycleSymbol,
    matchPlugin: e => true
  };
  require.r(exports);
  require.d(exports, {
    NavigatePageMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}