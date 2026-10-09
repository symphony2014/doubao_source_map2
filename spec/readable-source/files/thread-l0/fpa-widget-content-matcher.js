// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Renamed variable 'r' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Resolved require(244131) to 'fpa-widget-content-symbol'
// - Updated imported property 'H' to 'receiveFpaWidget' (module 244131)
// - Updated imported property 'T5' to 'isAiPodcastContent' (module 942305)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 79763
         */
module.exports = function (module, exports, require) {
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let o = {
    pluginIdentifier: require("fpa-widget-content-symbol") /*id: 244131*/.receiveFpaWidget,
    matchPlugin: e => (e == null ? undefined : e.content_type) === chatMessageTypes.ContentType.Widget && !aiPodcastContentUtils.isAiPodcastContent(e)
  };
  require.r(exports);
  require.d(exports, {
    receiveFPAWidgetContentMatcher: function () {
      return o;
    }
  });
}