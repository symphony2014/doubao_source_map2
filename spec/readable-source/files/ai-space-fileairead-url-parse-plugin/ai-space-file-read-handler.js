// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'i' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 'r' to 'aiSpaceFileReadProcessor'
// - Resolved require(530651) to 'ai-space-file-read-processor'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'qH' to 'validateFiles' (module 900956)
// - Updated imported property 'k' to 'processAiSpaceFile' (module 530651)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-fileairead-url-parse-plugin.00aa6f6d.js
         * chunkId: 43257
         * moduleId: 937900
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var aiSpaceFileReadProcessor = require("ai-space-file-read-processor") /*id: 530651*/;
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
        plugin: aiActionConstants.aiActionConstants.AISpace_FileAIRead
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
    if (f) {
      _(`/chat/${f}?skeleton_type=${new URL(location.href).searchParams.get("skeleton_type")}`, {
        replace: true
      });
      if (s != null) {
        s(b, {
          fileName: g
        });
      }
    } else {
      {
        let e = await aiSpaceFileReadProcessor.processAiSpaceFile({
          payload: n,
          needBindConversation: m,
          isSpaceNext: y
        });
        if (e) {
          t(e, undefined, false);
        }
      }
      if (s != null) {
        s(b, {
          fileName: g
        });
      }
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - v,
        plugin: aiActionConstants.aiActionConstants.AISpace_FileAIRead
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