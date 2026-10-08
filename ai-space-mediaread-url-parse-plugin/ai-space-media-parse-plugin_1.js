// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 't' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 'r' to 'aiSpaceMediaParsePlugin'
// - Resolved require(509039) to 'ai-space-media-parse-plugin'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'qH' to 'validateFiles' (module 900956)
// - Updated imported property 'k' to 'processMediaPayload' (module 509039)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-mediaread-url-parse-plugin.004a019d.js
         * chunkId: 69665
         * moduleId: 247960
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var aiSpaceMediaParsePlugin = require("ai-space-media-parse-plugin") /*id: 509039*/;
  async function l(e) {
    let {
      payload: n,
      sendMessage: o,
      navigate: l,
      sendMessageV2: s,
      phase3EndTime: d,
      chatViewService: _,
      prehandlerData: c = {},
      preSendConversationId: u
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - d,
        plugin: aiActionConstants.aiActionConstants.AISpace_ExcelAIRead
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
    let b = p[0];
    if (!b) {
      return;
    }
    let {
      uri: h,
      name: g,
      mediaType: f
    } = b;
    let O = ["video_ask_doubao", "video_summary", "video_mind_map"].includes(f);
    let T = u || c.conversationId;
    if (T) {
      l(`/chat/${T}`, {
        replace: true
      });
    }
    let C = "";
    switch (f) {
      case "video_ask_doubao":
        C = "WatchVideo";
        break;
      case "video_summary":
        C = "VideoSummary";
        break;
      case "video_mind_map":
        C = "VideoMindMap";
        break;
      case "audio_ask_doubao":
      case "audio_summary":
        C = "AudioSummary";
        break;
      case "audio_mind_map":
        C = "AudioMinMap";
    }
    _.openCanvasPanel({
      conversationId: "",
      messageId: "",
      mediaInfo: {
        vid: h,
        type: O ? "video" : "audio",
        title: g,
        defaultTab: C
      }
    });
    if (!T) {
      let e = await aiSpaceMediaParsePlugin.processMediaPayload({
        payload: n,
        needBindConversation: m,
        isSpaceNext: y
      });
      if (e) {
        o(e, undefined, false);
      }
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - v,
        plugin: aiActionConstants.aiActionConstants.AISpace_ExcelAIRead
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