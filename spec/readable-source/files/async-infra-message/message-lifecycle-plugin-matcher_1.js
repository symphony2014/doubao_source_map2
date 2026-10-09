// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(220141) to 'promisify-lifecycle-key'
// - Updated imported property 'R' to 'lifecyclePluginKey' (module 220141)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 131687
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("promisify-lifecycle-key") /*id: 220141*/.lifecyclePluginKey,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    MessagePromisifyMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}