// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(139091) to 'receive-credit-block-symbol'
// - Updated imported property 'e' to 'receiveCreditBlock' (module 139091)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 850646
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("receive-credit-block-symbol") /*id: 139091*/.receiveCreditBlock,
    matchPlugin: e => {
      var n;
      if (botConversationTypeCheck.isBotConversation(e)) {
        return false;
      }
      let a = (e == null ? undefined : (n = e.verbose) === null || n === undefined ? undefined : n.credit?.credit_style) === "1" || (e == null ? undefined : e.ext?.credit_style) === "1";
      return messageContentTypeAndStatusChecker.G7Q(e) && a;
    }
  };
  require.r(exports);
  require.d(exports, {
    creditTextReceiveMessageBoxPluginMatcher: function () {
      return o;
    }
  });
}