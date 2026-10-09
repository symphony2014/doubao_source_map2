// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Renamed variable 'r' to 'receivePodcastContentSymbol'
// - Resolved require(570350) to 'receive-podcast-content-symbol'
// - Renamed variable 'o' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'a' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'l' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 's' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'c' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'u' to 'podcastPlayerComponent'
// - Resolved require(701810) to 'podcast-player-component'
// - Renamed variable '_' to 'messageWidgetDataUtils'
// - Resolved require(233546) to 'message-widget-data-utils'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'tg' to 'parseWidgetData' (module 233546)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'o' to 'PodcastPlayer' (module 701810)
// - Updated imported property 'T5' to 'isAiPodcastContent' (module 942305)
// - Updated imported property 'F' to 'receivePodcastKey' (module 570350)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 249870
         */
module.exports = function (module, exports, require) {
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  var receivePodcastContentSymbol = require("receive-podcast-content-symbol") /*id: 570350*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var podcastPlayerComponent = require("podcast-player-component") /*id: 701810*/;
  var messageWidgetDataUtils = require("message-widget-data-utils") /*id: 233546*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e) {
    let {
      message: t,
      inView: n,
      disableTrack: i
    } = e;
    let {
      chatViewRef: r
    } = chatRefsContext.useChatRefs();
    let v = useLatestCallbackHook_1.useLatestCallback(() => {
      var e;
      var t;
      if ((t = r.current) !== null && t !== undefined && (e = t.syncData) !== null && e !== undefined) {
        e.call(t);
      }
    });
    let f = useLatestCallbackHook_1.useLatestCallback((e, n) => {
      var d;
      if (i) {
        return;
      }
      let v = chatConversationBotId.getConversationBotId(t == null ? undefined : t.conversation_id);
      let f = messageWidgetDataUtils.parseWidgetData(t == null ? undefined : t.content_obj)?.podcast;
      let p = f == null ? undefined : f.id;
      if (!p) {
        return;
      }
      let h = {
        ...n,
        epoise_id: p,
        message_id: t == null ? undefined : t.message_id,
        conversation_id: t == null ? undefined : t.conversation_id,
        bot_id: v,
        chat_type: (d = chatStoreManager.getStoreState("chatViewCoreStore")) === null || d === undefined ? undefined : d.currentChatViewConfig?.chatType,
        reply_id: t == null ? undefined : t.reply_id,
        skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill?.skill_type_no_default)
      };
      teaAnalyticsEventTracker.trackEvent(e, h);
    });
    return reactJsxRuntimeCoreReexport.jsx(podcastPlayerComponent.PodcastPlayer, {
      isShare: false,
      refreshChat: v,
      message: t,
      inView: n,
      trackEventFn: f
    });
  }
  function f(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let p = e => {
    let {
      message: t
    } = e;
    if (aiPodcastContentUtils.isAiPodcastContent(t)) {
      return reactJsxRuntimeCoreReexport.jsx(v, {
        ...e,
        message: t
      });
    } else {
      return null;
    }
  };
  class h {
    constructor() {
      f(this, "pluginIdentifier", receivePodcastContentSymbol.receivePodcastKey);
      f(this, "Content", p);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceivePodcastContentPlugin: function () {
      return h;
    }
  });
}