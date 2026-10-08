// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageActions'
// - Resolved require(331991) to 'skill-message-actions'
// - Renamed variable 'r' to 'threadShareChatFooterSymbol'
// - Resolved require(261495) to 'thread-share-chat-footer-symbol'
// - Updated imported property 'e' to 'messageActions' (module 331991)
// - Updated imported property 'H' to 'threadShareFooter' (module 261495)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 467188
         */
module.exports = function (module, exports, require) {
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var threadShareChatFooterSymbol = require("thread-share-chat-footer-symbol") /*id: 261495*/;
  let o = e => {
    let {
      share: {
        isSelectMode: t,
        scene: n
      }
    } = e;
    if (t && n === skillMessageActions.messageActions.Share) {
      return threadShareChatFooterSymbol.threadShareFooter;
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