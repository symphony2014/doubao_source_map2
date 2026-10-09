// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'checkConversationValid'
// - Resolved require(131485) to 'check-conversation-valid'
// - Updated imported property 'R' to 'isConversationValid' (module 131485)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-minutes-metting-parse-pre-plugin.e4d0a197.js
         * chunkId: 12775
         * moduleId: 904894
         */
module.exports = function (module, exports, require) {
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  async function i(e) {
    let {
      payload: n
    } = e;
    let {
      conversationId: t
    } = n;
    return {
      conversationId: (await checkConversationValid.isConversationValid(t)) ? t : undefined
    };
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return i;
    }
  });
}