// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'getMessageType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18872.aedb6c81.js
         * chunkId: 18872
         * moduleId: 223054
         */
module.exports = function (module, exports, require) {
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let i = e => {
    if (!e) {
      return skillConstantsEnum.MessageType.MESSAGE_TYPE_TEXT;
    }
    if (messageContentTypeAndStatusChecker.qP0(e)) {
      return skillConstantsEnum.MessageType.MESSAGE_TYPE_PIC;
    }
    if (messageContentTypeAndStatusChecker.RkI(e)) {
      return skillConstantsEnum.MessageType.MESSAGE_TYPE_VIDEO;
    }
    if (messageContentTypeAndStatusChecker.vU5(e)) {
      return skillConstantsEnum.MessageType.MESSAGE_TYPE_MUSIC;
    }
    if (messageContentTypeAndStatusChecker.A8i(e)) {
      return skillConstantsEnum.MessageType.MESSAGE_TYPE_FILE;
    }
    if (messageContentTypeAndStatusChecker.s27(e)) {
      return skillConstantsEnum.MessageType.MESSAGE_TYPE_SEARCH_CARD;
    } else if (messageContentTypeAndStatusChecker.isLyricsToSongLyric(e)) {
      return skillConstantsEnum.MessageType.MESSAGE_TYPE_LYRICS_TO_SONG_LYRIC;
    } else if (messageContentTypeAndStatusChecker.C_i(e)) {
      return skillConstantsEnum.MessageType.MESSAGE_TYPE_LYRICS_TO_SONG_MUSIC;
    } else if (messageContentTypeAndStatusChecker.zTh(e)) {
      return skillConstantsEnum.MessageType.MESSAGE_TYPE_VIDEO_GENERATION;
    } else {
      return skillConstantsEnum.MessageType.MESSAGE_TYPE_TEXT;
    }
  };
  require.d(exports, {
    getMessageType: function () {
      return i;
    }
  });
}