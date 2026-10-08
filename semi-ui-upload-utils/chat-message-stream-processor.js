// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'streamChatMessageProcessing'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 850590
         */
module.exports = function (module, exports, require) {
  var conversationMessageProcessor = require("conversation-message-processor") /*id: 500435*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var flowApiConfigManager = require("flow-api-config-manager") /*id: 691950*/;
  var samanthaChatMessageToMessageTransformer = require("samantha-chat-message-to-message-transformer") /*id: 110074*/;
  var chatMessageToSamanthaTransformer = require("chat-message-to-samantha-transformer") /*id: 603937*/;
  var streamCallBotInterceptor = require("stream-call-bot-interceptor") /*id: 256917*/;
  let p = async e => {
    var n;
    let {
      message: i,
      scene: d
    } = e;
    let c = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
    if (!i) {
      return;
    }
    let {
      skill: u,
      message_id: h,
      local_message_id: p
    } = i;
    let v = (n = chatStoreManager.getStoreState("chatViewCoreStore")) === null || n === undefined ? undefined : n.currentChatViewConfig?.chatId;
    teaAnalyticsEventTracker.trackEvent("send_message", {
      skill_id: u == null ? undefined : u.skill_id,
      skill_name: skillTypeMappings.getSkillName(u == null ? undefined : u.skill_type),
      conversation_id: v,
      message_id: h ?? p,
      bot_id: chatConversationBotId.getConversationBotId(v),
      scene: d,
      ...(c == null ? undefined : c.getCanvasTeaParams())
    });
  };
  let v = async e => {
    let {
      message: o,
      memoryType: a = 1,
      onMessage: l,
      onError: r,
      onFinish: s,
      track: v
    } = e;
    let {
      getCommonHeaders: m,
      getCommonParams: g
    } = flowApiConfigManager.getFlowApiOptions() ?? {};
    let _ = await conversationMessageProcessor.checkSkillReleaseType(o.skill?.skill_type || 0);
    let f = async e => {
      let t = await chatMessageToSamanthaTransformer.transformMessagesToSamanthaFormat([e], {
        memoryType: a,
        launchStage: _
      });
      streamCallBotInterceptor.streamCallBotForChatCompletion({
        event: t,
        onMessage: async (e, t) => {
          let n = await samanthaChatMessageToMessageTransformer.transformSamanthaChatMessageToMessage(e);
          if (n) {
            l(n, t);
          }
        },
        onError: r,
        onFinish: s,
        getCommonHttpHeaders: m,
        getCommonHttpParams: g
      });
    };
    if (v) {
      p({
        message: o,
        ...v
      });
    }
    f(o);
  };
  require.d(exports, {
    streamChatMessageProcessing: function () {
      return v;
    }
  });
}