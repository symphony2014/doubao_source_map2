// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 'i' to 'checkConversationValid'
// - Resolved require(131485) to 'check-conversation-valid'
// - Updated imported property 'U3' to 'validateLinks' (module 900956)
// - Updated imported property 'R' to 'isConversationValid' (module 131485)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-linkaskdoubao-url-parse-pre-plugin.8bc6197b.js
         * chunkId: 56601
         * moduleId: 651328
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
    if (!aiSpaceInputValidators.validateLinks(e)) {
      return;
    }
    let {
      links: a
    } = e;
    let r = a[0];
    if (!r) {
      return;
    }
    let {
      conversationId: l
    } = r;
    return {
      conversationId: (await checkConversationValid.isConversationValid(l)) ? l : undefined
    };
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return a;
    }
  });
}