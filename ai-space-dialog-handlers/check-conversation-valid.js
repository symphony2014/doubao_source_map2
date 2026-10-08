// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'isConversationValid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-excelairead-url-parse-pre-plugin.aee79fcf.js
         * chunkId: 11567
         * moduleId: 131485
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  async function r(n) {
    if (!n || n === "0") {
      return false;
    }
    try {
      var e;
      let a = await (await aliceChatService.AliceChatService()).getConversationBasicInfo({
        conversation_id: n
      });
      return (a == null ? undefined : (e = a.data) === null || e === undefined ? undefined : e.conversation?.status) === chatConstantsEnum.convStatus.AVAILABLE;
    } catch (n) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "AISpaceSkill_checkIsValidConversationApiError",
        error: n
      });
    }
    return false;
  }
  require.d(exports, {
    isConversationValid: function () {
      return r;
    }
  });
}