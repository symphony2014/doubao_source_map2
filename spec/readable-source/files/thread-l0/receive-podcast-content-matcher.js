// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Resolved require(570350) to 'receive-podcast-content-symbol'
// - Updated imported property 'F' to 'receivePodcastKey' (module 570350)
// - Updated imported property 'T5' to 'isAiPodcastContent' (module 942305)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 534574
         */
module.exports = function (module, exports, require) {
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  let r = {
    pluginIdentifier: require("receive-podcast-content-symbol") /*id: 570350*/.receivePodcastKey,
    matchPlugin: e => aiPodcastContentUtils.isAiPodcastContent(e)
  };
  require.r(exports);
  require.d(exports, {
    receivePodcastContentMatcher: function () {
      return r;
    }
  });
}