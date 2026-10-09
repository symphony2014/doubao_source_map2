// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'i' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 'r' to 'aiSpaceLinkProcessor'
// - Resolved require(265447) to 'ai-space-link-processor'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'U3' to 'validateLinks' (module 900956)
// - Updated imported property 'k' to 'handleLinkPayload' (module 265447)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-linkairead-url-parse-plugin.2329fe55.js
         * chunkId: 72509
         * moduleId: 117077
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var aiSpaceLinkProcessor = require("ai-space-link-processor") /*id: 265447*/;
  async function l(e) {
    let {
      payload: n,
      sendMessage: t,
      sendMessageV2: l,
      openReadCanvasByLink: s,
      navigate: _,
      phase3EndTime: d,
      prehandlerData: c = {},
      preSendConversationId: u
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceLinkAIReadHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - d,
        plugin: aiActionConstants.aiActionConstants.AISpace_LinkAIRead
      }
    });
    let v = Date.now();
    if (!aiSpaceInputValidators.validateLinks(n)) {
      return;
    }
    let {
      links: p,
      needBindConversation: m,
      isSpaceNext: y
    } = n;
    let h = p[0];
    if (!h) {
      return;
    }
    let {
      url: b
    } = h;
    let g = u || c.conversationId;
    if (g) {
      _(`/chat/${g}`, {
        replace: true
      });
      s(b);
    } else {
      let e = await aiSpaceLinkProcessor.handleLinkPayload({
        payload: n,
        needBindConversation: m,
        isSpaceNext: y
      });
      if (e) {
        t(e, undefined, false);
      }
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - v,
        plugin: aiActionConstants.aiActionConstants.AISpace_LinkAIRead
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return l;
    }
  });
}