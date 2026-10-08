// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'conversationMessageValidator'
// - Resolved require(253313) to 'conversation-message-validator'
// - Renamed variable 'i' to 'asyncSkillMessageListMatcher_1'
// - Resolved require(754085) to 'async-skill-message-list-matcher_1'
// - Renamed variable 'u' to 'writingMsgListBottomPlugin'
// - Resolved require(532172) to 'writing-msg-list-bottom-plugin'
// - Updated imported property 'W' to 'hasReplyInMessageList' (module 754085)
// - Updated imported property 'o' to 'findValidMessage' (module 253313)
// - Updated imported property 'H' to 'writingMsgBottomBtn' (module 532172)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list-matcher.dbf94769.js
         * chunkId: 50381
         * moduleId: 974672
         */
module.exports = function (module, exports, require) {
  var conversationMessageValidator = require("conversation-message-validator") /*id: 253313*/;
  var asyncSkillMessageListMatcher_1 = require("async-skill-message-list-matcher_1") /*id: 754085*/;
  var writingMsgListBottomPlugin = require("writing-msg-list-bottom-plugin") /*id: 532172*/;
  let o = e => {
    let {
      isSelectMode: t,
      conversationId: n,
      unionMessageList: o
    } = e;
    let a = asyncSkillMessageListMatcher_1.hasReplyInMessageList(n, o);
    if (!a) {
      return;
    }
    let l = conversationMessageValidator.findValidMessage([a], n);
    if (l == null ? undefined : l.content_obj) {
      if (t) {
        return undefined;
      } else {
        return writingMsgListBottomPlugin.writingMsgBottomBtn;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return o;
    }
  });
}