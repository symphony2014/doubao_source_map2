// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'a' to 'aiChatSkillConversationChecker'
// - Resolved require(728119) to 'ai-chat-skill-conversation-checker'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 's' to 'aiSpaceFileToConversationItem'
// - Resolved require(618729) to 'ai-space-file-to-conversation-item'
// - Renamed variable '_' to 'createAttachmentMessage'
// - Resolved require(596462) to 'create-attachment-message'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'qH' to 'validateFiles' (module 900956)
// - Updated imported property 'h' to 'isValidSkillType' (module 728119)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'l' to 'createAttachmentMsg' (module 596462)
// - Updated imported property 'k' to 'convertAiSpaceFileToConversationItem' (module 618729)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-fileaskdoubao-url-parse-plugin.fde49bd9.js
         * chunkId: 52765
         * moduleId: 761512
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var aiSpaceFileToConversationItem = require("ai-space-file-to-conversation-item") /*id: 618729*/;
  var createAttachmentMessage = require("create-attachment-message") /*id: 596462*/;
  async function c(e) {
    let {
      payload: t,
      sendMessage: n,
      sendMessageV2: c,
      navigate: d,
      phase3EndTime: u,
      prehandlerData: v = {},
      preSendConversationId: p
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceFileAskDoubaoHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - u,
        plugin: aiActionConstants.aiActionConstants.AISpace_FileAskDoubao
      }
    });
    let m = Date.now();
    if (!aiSpaceInputValidators.validateFiles(t)) {
      return;
    }
    let {
      files: y,
      needBindConversation: b,
      isSpaceNext: h
    } = t;
    if (!y[0]) {
      return;
    }
    let f = p || v.conversationId;
    if (f) {
      d(`/chat/${f}`, {
        replace: true
      });
    } else if (await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillFreeChat)) {
      let {
        message: e,
        reportParams: n
      } = (await createAttachmentMessage.createAttachmentMsg({
        payload: t,
        needBindConversation: b,
        isSpaceNext: h
      })) || {};
      if (e) {
        c(e, n || {});
      }
    } else {
      let e = await aiSpaceFileToConversationItem.convertAiSpaceFileToConversationItem({
        payload: t,
        needBindConversation: b,
        isSpaceNext: h
      });
      if (e) {
        n(e, undefined, true);
      }
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - m,
        plugin: aiActionConstants.aiActionConstants.AISpace_FileAskDoubao
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return c;
    }
  });
}