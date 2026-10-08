// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(321526) to 'chat-skill-content-symbol'
// - Updated imported property 's' to 'sendOldVarSymbol' (module 321526)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 378150
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("chat-skill-content-symbol") /*id: 321526*/.sendOldVarSymbol,
    matchPlugin: e => !botConversationTypeCheck.isBotConversation(e) && (messageContentTypeAndStatusChecker.xPj(e) || messageContentTypeAndStatusChecker.Q_x(e))
  };
  require.r(exports);
  require.d(exports, {
    sendOldVariableSkillContentMatcher: function () {
      return o;
    }
  });
}