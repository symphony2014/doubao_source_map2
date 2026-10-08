// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(131328) to 'vip-features-lifecycle-symbol'
// - Updated imported property 'S' to 'vipLifecycleSym' (module 131328)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 553544
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("vip-features-lifecycle-symbol") /*id: 131328*/.vipLifecycleSym,
    matchPlugin: e => true
  };
  require.r(exports);
  require.d(exports, {
    VipFeaturesMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}