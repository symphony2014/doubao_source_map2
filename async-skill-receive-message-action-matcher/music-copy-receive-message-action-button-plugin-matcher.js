// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(328267) to 'music-message-action-symbol'
// - Updated imported property 'X' to 'MusicMessageAction' (module 328267)
// - Updated imported property 'd8' to 'isLyricsToSongLyric' (module 749637)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 622298
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    area: "main",
    actionType: "copy",
    pluginIdentifier: require("music-message-action-symbol") /*id: 328267*/.MusicMessageAction,
    matchPlugin: e => messageContentTypeAndStatusChecker.isLyricsToSongLyric(e) && messageContentTypeAndStatusChecker.t4S(e) && !messageContentTypeAndStatusChecker.Jgn(e)
  };
  require.r(exports);
  require.d(exports, {
    musicCopyReceiveMessageActionButtonPluginMatcher: function () {
      return r;
    }
  });
}