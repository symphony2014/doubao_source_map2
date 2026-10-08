// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatMessageDocUtils'
// - Resolved require(775705) to 'chat-message-doc-utils'
// - Renamed variable 'i' to 'chatPluginIdentifier'
// - Resolved require(416031) to 'chat-plugin-identifier'
// - Renamed variable 'u' to 'asyncSkillMessageListMatcher'
// - Resolved require(533639) to 'async-skill-message-list-matcher'
// - Updated imported property 'W' to 'findLastReplyMsg' (module 775705)
// - Updated imported property 'o' to 'findMatchingSkillMessage' (module 533639)
// - Updated imported property 'H' to 'BottomBtnPlugin' (module 416031)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list-matcher.dbf94769.js
         * chunkId: 50381
         * moduleId: 689266
         */
module.exports = function (module, exports, require) {
  var chatMessageDocUtils = require("chat-message-doc-utils") /*id: 775705*/;
  var chatPluginIdentifier = require("chat-plugin-identifier") /*id: 416031*/;
  var asyncSkillMessageListMatcher = require("async-skill-message-list-matcher") /*id: 533639*/;
  let o = e => {
    let {
      isSelectMode: t,
      conversationId: n,
      unionMessageList: o
    } = e;
    let a = chatMessageDocUtils.findLastReplyMsg(n, o);
    if (!a) {
      return;
    }
    let l = asyncSkillMessageListMatcher.findMatchingSkillMessage([a], n);
    if (!(l == null ? undefined : l.content_obj)) {
      return;
    }
    let {
      genre: c
    } = l.content_obj;
    if (t || c !== "ai_ppt") {
      return undefined;
    } else {
      return chatPluginIdentifier.BottomBtnPlugin;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return o;
    }
  });
}