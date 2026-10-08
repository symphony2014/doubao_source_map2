// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(675833) to 'lyric-to-song-symbol'
// - Updated imported property 'B' to 'lyricToSongSymbol' (module 675833)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property 'd8' to 'isLyricsToSongLyric' (module 749637)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 286854
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("lyric-to-song-symbol") /*id: 675833*/.lyricToSongSymbol,
    matchPlugin: e => !botConversationTypeCheck.isBotConversation(e) && messageContentTypeAndStatusChecker.isLyricsToSongLyric(e)
  };
  require.r(exports);
  require.d(exports, {
    receiveLyricsToSongLyricMatcher: function () {
      return o;
    }
  });
}