// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(534110) to 'timeout-lifecycle-plugin-symbol'
// - Updated imported property '_' to 'timeoutLifecyclePlugin' (module 534110)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 120998
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("timeout-lifecycle-plugin-symbol") /*id: 534110*/.timeoutLifecyclePlugin,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    MessageTimeoutMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}