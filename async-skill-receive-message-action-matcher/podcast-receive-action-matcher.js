// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Resolved require(612724) to 'chat-podcast-receive-action'
// - Updated imported property 'U' to 'receivePodcastAction' (module 612724)
// - Updated imported property 'T5' to 'isAiPodcastContent' (module 942305)
// - Updated imported property 'rP' to 'getPodcastWaiting' (module 942305)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 362818
         */
module.exports = function (module, exports, require) {
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  let r = {
    area: "main",
    actionType: "copy",
    pluginIdentifier: require("chat-podcast-receive-action") /*id: 612724*/.receivePodcastAction,
    matchPlugin: e => aiPodcastContentUtils.isAiPodcastContent(e) && !!aiPodcastContentUtils.getPodcastWaiting(e)
  };
  require.r(exports);
  require.d(exports, {
    podcastCopyReceiveMessageActionButtonPluginMatcher: function () {
      return r;
    }
  });
}