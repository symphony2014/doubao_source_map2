// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'useChatSkillMessageSender'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 832138
         */
module.exports = function (module, exports, require) {
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var chatSkillMessageSender = require("chat-skill-message-sender") /*id: 500722*/;
  var chatMessageSender = require("chat-message-sender") /*id: 894807*/;
  let c = () => {
    let {
      sendMessage: e
    } = chatServiceContext.useChatService("chatMessageService");
    return {
      sendMessage: reactFunctionMemoHook.useMemoizedCallback(async t => (await aiChatSkillConversationChecker.isValidSkillType(aiChatEnumConstants.skillTypes.SkillRead)) ? chatMessageSender.sendChatMessage(t) : chatSkillMessageSender.sendSkillMessage({
        rawSendMessage: e,
        ...t
      }))
    };
  };
  require.d(exports, {
    useChatSkillMessageSender: function () {
      return c;
    }
  });
}