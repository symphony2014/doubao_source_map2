// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'extractMessageContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 562040
         */
module.exports = function (module, exports, require) {
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var messageContentBlockUtils = require("message-content-block-utils") /*id: 798818*/;
  let o = e => {
    if (messageContentBlockUtils.isSingleTextBlock(e)) {
      var n;
      var o;
      if (e == null) {
        return undefined;
      } else if ((o = e.content_blocks_v2) === null || o === undefined) {
        return undefined;
      } else if ((n = o[0].content) === null || n === undefined) {
        return undefined;
      } else {
        return n.text_block?.text;
      }
    }
    return (e == null ? undefined : e.tts_content) || e && messageContentUtils.formatMessage(e) || "";
  };
  require.d(exports, {
    extractMessageContent: function () {
      return o;
    }
  });
}