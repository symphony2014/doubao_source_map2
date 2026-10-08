// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConversationCheckers'
// - Resolved require(104471) to 'chat-conversation-checkers'
// - Renamed variable 'a' to 'chatShareMenuSymbol'
// - Resolved require(309002) to 'chat-share-menu-symbol'
// - Updated imported property 'x9' to 'isCocoPlatform' (module 104471)
// - Updated imported property 'qU' to 'isCocoSubPlatform' (module 104471)
// - Updated imported property 'U' to 'shareMenuOption' (module 309002)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-feed.d498fbc7.js
         * chunkId: 57288
         * moduleId: 804997
         */
module.exports = function (module, exports, require) {
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatShareMenuSymbol = require("chat-share-menu-symbol") /*id: 309002*/;
  let s = e => {
    let {
      conversation: t
    } = e;
    if (!!t && !chatConversationCheckers.isCocoPlatform(t.conversation_type)) {
      if (chatConversationCheckers.isCocoPlatform(t.conversation_type) || chatConversationCheckers.isCocoSubPlatform(t.conversation_type)) {
        return chatShareMenuSymbol.shareMenuOption;
      } else {
        return undefined;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    shareConversationMenuOptionPluginMatcher: function () {
      return s;
    }
  });
}