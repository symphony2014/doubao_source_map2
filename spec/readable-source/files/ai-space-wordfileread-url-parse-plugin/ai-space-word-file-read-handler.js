// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'i' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 'r' to 'aiSpacePdfReadConversationCreator'
// - Resolved require(364938) to 'ai-space-pdf-read-conversation-creator'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'qH' to 'validateFiles' (module 900956)
// - Updated imported property 'k' to 'createPdfReadConversation' (module 364938)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-wordfileread-url-parse-plugin.c0e8dc57.js
         * chunkId: 61906
         * moduleId: 492318
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var aiSpacePdfReadConversationCreator = require("ai-space-pdf-read-conversation-creator") /*id: 364938*/;
  async function l(e) {
    let {
      payload: n,
      sendMessage: t,
      sendMessageV2: l,
      openReadCanvasByFile: s,
      navigate: _,
      phase3EndTime: d,
      prehandlerData: c = {},
      preSendConversationId: u
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceFileAIReadHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - d,
        plugin: aiActionConstants.aiActionConstants.AISpace_WordFileAIRead
      }
    });
    let v = Date.now();
    if (!aiSpaceInputValidators.validateFiles(n)) {
      return;
    }
    let {
      files: p,
      needBindConversation: m,
      isSpaceNext: y
    } = n;
    let h = p[0];
    if (!h) {
      return;
    }
    let {
      uri: b,
      name: g
    } = h;
    let f = u || c.conversationId;
    let {
      docPdfKey: O
    } = c;
    if (f) {
      _(`/chat/${f}`, {
        replace: true
      });
    } else {
      let e = await aiSpacePdfReadConversationCreator.createPdfReadConversation({
        payload: n,
        needBindConversation: m,
        isSpaceNext: y
      });
      if (e) {
        t(e, undefined, false);
      }
    }
    if (O) {
      if (s != null) {
        s(O, {
          fileName: g,
          originUri: b
        });
      }
    }
    if (!O) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "AISpaceWordFileAIReadHandler_docPdfKeyNotFound"
      });
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - v,
        plugin: aiActionConstants.aiActionConstants.AISpace_WordFileAIRead
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