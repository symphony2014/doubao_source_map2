// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 'i' to 'checkConversationValid'
// - Resolved require(131485) to 'check-conversation-valid'
// - Updated imported property 'qH' to 'validateFiles' (module 900956)
// - Updated imported property 'R' to 'isConversationValid' (module 131485)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-fileairead-url-parse-pre-plugin.7623cc25.js
         * chunkId: 96799
         * moduleId: 95475
         */
module.exports = function (module, exports, require) {
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  async function a(n) {
    let {
      payload: e,
      preSendConversationId: o
    } = n;
    if (o) {
      return {};
    }
    if (!aiSpaceInputValidators.validateFiles(e)) {
      return;
    }
    let {
      files: a
    } = e;
    let r = a[0];
    if (r) {
      return {
        conversationId: (await checkConversationValid.isConversationValid(r.conversationId)) ? r.conversationId : undefined
      };
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return a;
    }
  });
}