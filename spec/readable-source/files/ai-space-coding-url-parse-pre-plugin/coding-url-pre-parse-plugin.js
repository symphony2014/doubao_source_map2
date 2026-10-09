// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'checkConversationValid'
// - Resolved require(131485) to 'check-conversation-valid'
// - Updated imported property 'R' to 'isConversationValid' (module 131485)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-coding-url-parse-pre-plugin.33fa899c.js
         * chunkId: 51948
         * moduleId: 716594
         */
module.exports = function (module, exports, require) {
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  async function i(e) {
    let {
      payload: n,
      preSendConversationId: t
    } = e;
    if (t) {
      return {};
    }
    let {
      files: i
    } = n;
    let a = i[0];
    if (a) {
      return {
        conversationId: (await checkConversationValid.isConversationValid(a.conversationId)) ? a.conversationId : undefined
      };
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return i;
    }
  });
}