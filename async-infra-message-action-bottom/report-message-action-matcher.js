// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Renamed variable 'a' to 'infraMessageActionSymbol'
// - Resolved require(903424) to 'infra-message-action-symbol'
// - Updated imported property 'd8' to 'isLyricsToSongLyric' (module 749637)
// - Updated imported property 'wG' to 'isPodcastValidProto' (module 942305)
// - Updated imported property 'h' to 'infraMessageAction' (module 903424)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 761186
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  var infraMessageActionSymbol = require("infra-message-action-symbol") /*id: 903424*/;
  let o = e => (messageContentTypeAndStatusChecker.G7Q(e) || messageContentTypeAndStatusChecker.qP0(e) || messageContentTypeAndStatusChecker.C_i(e) || messageContentTypeAndStatusChecker.isLyricsToSongLyric(e)) && messageContentTypeAndStatusChecker.ZRq(e) && !messageContentTypeAndStatusChecker.Jgn(e) || aiPodcastContentUtils.isPodcastValidProto(e);
  let l = {
    actionType: "report",
    pluginIdentifier: infraMessageActionSymbol.infraMessageAction,
    matchPlugin(e, t) {
      return o(e) && this.actionType === t;
    }
  };
  require.r(exports);
  require.d(exports, {
    defaultReportReceiveMessageActionBottomPluginMatcher: function () {
      return l;
    }
  });
}