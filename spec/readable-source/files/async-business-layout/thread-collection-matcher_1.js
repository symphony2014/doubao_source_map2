// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageActions'
// - Resolved require(331991) to 'skill-message-actions'
// - Renamed variable 'r' to 'threadCollectionChatFooterKey'
// - Resolved require(895974) to 'thread-collection-chat-footer-key'
// - Updated imported property 'e' to 'messageActions' (module 331991)
// - Updated imported property 'H' to 'threadChatFooterKey' (module 895974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 196630
         */
module.exports = function (module, exports, require) {
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var threadCollectionChatFooterKey = require("thread-collection-chat-footer-key") /*id: 895974*/;
  let o = e => {
    let {
      share: {
        isSelectMode: t,
        scene: n
      }
    } = e;
    if (t && n === skillMessageActions.messageActions.Collection) {
      return threadCollectionChatFooterKey.threadChatFooterKey;
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