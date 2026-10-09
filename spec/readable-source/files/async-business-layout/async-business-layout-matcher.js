// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageActions'
// - Resolved require(331991) to 'skill-message-actions'
// - Renamed variable 'r' to 'threadDeleteChatFooterSymbol'
// - Resolved require(704549) to 'thread-delete-chat-footer-symbol'
// - Updated imported property 'e' to 'messageActions' (module 331991)
// - Updated imported property 'H' to 'threadDeleteFooter' (module 704549)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 46749
         */
module.exports = function (module, exports, require) {
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var threadDeleteChatFooterSymbol = require("thread-delete-chat-footer-symbol") /*id: 704549*/;
  let o = e => {
    let {
      share: t
    } = e;
    if ((t == null ? undefined : t.isSelectMode) && (t == null ? undefined : t.scene) === skillMessageActions.messageActions.Delete) {
      return threadDeleteChatFooterSymbol.threadDeleteFooter;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return o;
    }
  });
}