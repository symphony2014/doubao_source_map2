// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(577721) to 'chat-podcast-action'
// - Updated imported property 'N' to 'podcastAction' (module 577721)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 51961
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("chat-podcast-action") /*id: 577721*/.podcastAction,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    PodcastMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}