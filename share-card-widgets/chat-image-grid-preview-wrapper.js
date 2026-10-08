// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'ChatImageGridPreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 36540
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatMessageImageGrid = require("chat-message-image-grid") /*id: 575287*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e) {
    let {
      disableTrack: t,
      message: r
    } = e;
    let o = objectPathGetDefault.getObjectPathDefault(r, "content_obj.search_result.image_card.card_list") || [];
    return reactJsxRuntimeCoreReexport.jsx(chatMessageImageGrid.ChatMessageImageGrid, {
      messageId: r == null ? undefined : r.message_id,
      conversationId: r == null ? undefined : r.conversation_id,
      replyId: r == null ? undefined : r.reply_id,
      disableTrack: t,
      imageCardList: o
    });
  }
  require.d(exports, {
    ChatImageGridPreview: function () {
      return o;
    }
  });
}