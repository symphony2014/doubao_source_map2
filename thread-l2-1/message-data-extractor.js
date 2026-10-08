// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'extractMessageData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 725292
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  let l = e => {
    let {
      message: t
    } = e;
    return reactUseChangedRef.useChangedRef((() => {
      let e = "";
      let n;
      let i = "";
      try {
        e = chatSkillPinTypeDeterminer.determineSkillPinType("", t == null ? undefined : t.conversation_id);
        n = chatConversationSelectorUtils.getConversationType(t == null ? undefined : t.conversation_id) || undefined;
        i = chatConversationBotId.getConversationBotId(t == null ? undefined : t.conversation_id) || "";
      } catch (e) {}
      return {
        conversationId: t == null ? undefined : t.conversation_id,
        messageId: String(t == null ? undefined : t.message_id),
        chatType: e,
        conversationType: n,
        botId: i
      };
    })(), deepEqualityUtil.deepEqual);
  };
  require.d(exports, {
    extractMessageData: function () {
      return l;
    }
  });
}