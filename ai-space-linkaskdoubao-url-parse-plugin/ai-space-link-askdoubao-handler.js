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
// - Renamed variable 's' to 'aiSpaceOnboardingHandler'
// - Resolved require(348011) to 'ai-space-onboarding-handler'
// - Renamed variable '_' to 'linkPayloadMessageBuilder'
// - Resolved require(656099) to 'link-payload-message-builder'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'U3' to 'validateLinks' (module 900956)
// - Updated imported property 'h' to 'isValidSkillType' (module 728119)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'l' to 'createLinkMessage' (module 656099)
// - Updated imported property 'k' to 'getSpaceOnboardingMsg' (module 348011)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-linkaskdoubao-url-parse-plugin.df1e8c40.js
         * chunkId: 95510
         * moduleId: 163671
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var aiSpaceOnboardingHandler = require("ai-space-onboarding-handler") /*id: 348011*/;
  var linkPayloadMessageBuilder = require("link-payload-message-builder") /*id: 656099*/;
  async function c(e) {
    let {
      payload: n,
      sendMessage: t,
      navigate: c,
      sendMessageV2: d,
      phase3EndTime: u,
      prehandlerData: v = {},
      preSendConversationId: p
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceLinkAskDoubaoHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - u,
        plugin: aiActionConstants.aiActionConstants.AISpace_LinkAskDoubao
      }
    });
    let m = Date.now();
    if (!aiSpaceInputValidators.validateLinks(n)) {
      return;
    }
    let {
      links: y,
      needBindConversation: h,
      isSpaceNext: b
    } = n;
    if (!y[0]) {
      return;
    }
    let f = p || v.conversationId;
    if (f) {
      c(`/chat/${f}`, {
        replace: true
      });
    } else if (await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillFreeChat)) {
      let {
        message: e,
        reportParams: t
      } = (await linkPayloadMessageBuilder.createLinkMessage({
        payload: n,
        needBindConversation: h,
        isSpaceNext: b
      })) || {};
      if (e) {
        d(e, t || {});
      }
    } else {
      let e = await aiSpaceOnboardingHandler.getSpaceOnboardingMsg({
        payload: n,
        needBindConversation: h,
        isSpaceNext: b
      });
      if (e) {
        t(e, undefined, true);
      }
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - m,
        plugin: aiActionConstants.aiActionConstants.AISpace_LinkAskDoubao
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