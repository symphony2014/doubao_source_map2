// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'aliceChatService'
// - Resolved require(756668) to 'alice-chat-service'
// - Renamed variable 'i' to 'apiErrorChecker'
// - Resolved require(429379) to 'api-error-checker'
// - Renamed variable 'a' to 'aiSpaceDataValidator'
// - Resolved require(120749) to 'ai-space-data-validator'
// - Updated imported property 'EM' to 'AliceChatService' (module 756668)
// - Updated imported property 'k' to 'isApiError' (module 429379)
// - Updated imported property 'c' to 'validateConversation' (module 120749)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-excelairead-url-parse-pre-plugin.aee79fcf.js
         * chunkId: 11567
         * moduleId: 88418
         */
module.exports = function (module, exports, require) {
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var aiSpaceDataValidator = require("ai-space-data-validator") /*id: 120749*/;
  let r = async n => {
    try {
      let {
        data: e
      } = await (await aliceChatService.AliceChatService()).getConversationInfo({
        conversation_id: n
      });
      let {
        deleted: i
      } = (e == null ? undefined : e.conversation) ?? {};
      return i !== true;
    } catch (n) {
      if (apiErrorChecker.isApiError(n)) {
        return false;
      }
      throw n;
    }
  };
  async function l(n) {
    let {
      payload: t
    } = n;
    if (!aiSpaceDataValidator.validateConversation(t)) {
      return;
    }
    let {
      conversationId: e
    } = t;
    return {
      conversationId: (await r(e)) ? e : undefined
    };
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return l;
    },
    isConversationExist: function () {
      return r;
    }
  });
}