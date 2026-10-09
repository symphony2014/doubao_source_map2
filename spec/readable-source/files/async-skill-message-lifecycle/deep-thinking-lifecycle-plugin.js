// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'r' to 'aiChatEnumConstants'
// - Resolved require(458113) to 'ai-chat-enum-constants'
// - Renamed variable 'a' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'o' to 'messagingSessionUtils'
// - Resolved require(545930) to 'messaging-session-utils'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 's' to 'aiChatMessageBuilder'
// - Resolved require(589350) to 'ai-chat-message-builder'
// - Renamed variable 'c' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'u' to 'deepThinkingModeLogic'
// - Resolved require(202832) to 'deep-thinking-mode-logic'
// - Renamed variable 'd' to 'modeConstants'
// - Resolved require(701817) to 'mode-constants'
// - Renamed variable 'p' to 'deepThinkingLifecycleSymbol'
// - Resolved require(507719) to 'deep-thinking-lifecycle-symbol'
// - Renamed variable 'f' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'm' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Ts' to 'resolveThinkingMode' (module 202832)
// - Updated imported property 'e' to 'modeConstants' (module 701817)
// - Updated imported property 'S' to 'getChatTraceEvent' (module 545930)
// - Updated imported property 'mF' to 'DeepThinkingMode' (module 791429)
// - Updated imported property 'r' to 'parseChatAbility' (module 589350)
// - Updated imported property 'zo' to 'skillTypes' (module 458113)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'Rp' to 'hasThinkingBlock' (module 268836)
// - Updated imported property 'f' to 'deepThinkingSymbol' (module 507719)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 760286
         */
module.exports = function (module, exports, require) {
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messagingSessionUtils = require("messaging-session-utils") /*id: 545930*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var aiChatMessageBuilder = require("ai-chat-message-builder") /*id: 589350*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var deepThinkingModeLogic = require("deep-thinking-mode-logic") /*id: 202832*/;
  var modeConstants = require("mode-constants") /*id: 701817*/;
  var deepThinkingLifecycleSymbol = require("deep-thinking-lifecycle-symbol") /*id: 507719*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let v = (e, t, n, i) => {
    try {
      let o = {
        total_duration: Date.now() - (t ?? 0),
        first_token_duration: n,
        is_finished: 1,
        whether_browsing: i ?? 0,
        skill_id: e == null ? undefined : e.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(e == null ? undefined : e.skill?.skill_type_no_default),
        conversation_id: e == null ? undefined : e.conversation_id,
        bot_id: e == null ? undefined : e.bot_id,
        message_id: e == null ? undefined : e.message_id
      };
      teaAnalyticsEventTracker.trackEvent("deep_thinking_main_text_end", {
        ...o
      });
    } catch (e) {}
  };
  function g(e, t, n) {
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
  class _ {
    static getInstance() {
      _.instance ||= new _();
      return _.instance;
    }
    setReceivingMessageStartTime(e, t) {
      if (e && typeof t == "number") {
        this.messageIdToStartTimeMap.set(e, t);
      }
    }
    setMessageSendingEndTime(e, t) {
      if (e && typeof t == "number") {
        this.messageIdToSendingEndTimeMap.set(e, t);
      }
    }
    getReceivingMessageStartTime(e) {
      return this.messageIdToStartTimeMap.get(e) ?? 0;
    }
    getMessageSendingEndTime(e) {
      return this.messageIdToSendingEndTimeMap.get(e) ?? 0;
    }
    resetMessageTime(e, t) {
      if (e && this.messageIdToStartTimeMap.has(e)) {
        this.messageIdToStartTimeMap.delete(e);
      }
      if (t && this.messageIdToSendingEndTimeMap.has(t)) {
        this.messageIdToSendingEndTimeMap.delete(t);
      }
    }
    constructor() {
      g(this, "messageIdToStartTimeMap", undefined);
      g(this, "messageIdToSendingEndTimeMap", undefined);
      this.messageIdToStartTimeMap = new Map();
      this.messageIdToSendingEndTimeMap = new Map();
    }
  }
  g(_, "instance", undefined);
  class h {
    processMessageBefore(e, t) {
      let n = chatStoreManager.getStoreState("deepThinkingControlStore");
      if (!n.uiHasDeepThinkBtn) {
        return t;
      }
      let r = deepThinkingModeLogic.resolveThinkingMode(n, n.uiHasDeepThinkBtnDisabled);
      let a = r === modeConstants.modeConstants.Pro ? modeConstants.modeConstants.On : r;
      let s = messagingSessionUtils.getChatTraceEvent(e);
      if (s != null) {
        s.setTeaEventOtherTraceParams({
          whether_use_deep_thinking: a === modeConstants.modeConstants.Auto ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_AUTO : a === modeConstants.modeConstants.On ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_YES : a === modeConstants.modeConstants.Off ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_NO : skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_NO_ENTRANCE
        });
      }
      return t.map(e => {
        return {
          ...e,
          extraExt: e.extraExt?.use_deep_think ? e.extraExt : {
            ...e.extraExt,
            use_deep_think: a
          }
        };
      });
    }
    beforeMessageSending(e, t) {
      if (!t.content_blocks_v2 || t.ext?.use_submit_pipeline === "1") {
        return t;
      }
      let c = chatStoreManager.getStoreState("deepThinkingControlStore");
      if (!c.uiHasDeepThinkBtn) {
        return t;
      }
      let p = deepThinkingModeLogic.resolveThinkingMode(c, c.uiHasDeepThinkBtnDisabled);
      let f = aiChatMessageBuilder.parseChatAbility(t)?.ability_type;
      if (f !== undefined && f !== aiChatEnumConstants.skillTypes.FreeChat && p === modeConstants.modeConstants.Pro) {
        t.ext = {
          ...t.ext,
          use_deep_think: modeConstants.modeConstants.On
        };
      } else {
        t.ext = {
          ...t.ext,
          use_deep_think: p
        };
      }
      let m = messagingSessionUtils.getChatTraceEvent(e);
      if (m != null) {
        m.setTeaEventOtherTraceParams({
          whether_use_deep_thinking: p === modeConstants.modeConstants.Pro ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_PRO : p === modeConstants.modeConstants.Auto ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_AUTO : p === modeConstants.modeConstants.On ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_YES : p === modeConstants.modeConstants.Off ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_NO : skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_NO_ENTRANCE
        });
      }
      return t;
    }
    onMessageSendingEnd(e, t) {
      if (t.message_id) {
        _.getInstance().setMessageSendingEndTime(t.message_id, Date.now());
      }
      return t;
    }
    onMessageReceivingStart(e, t) {
      var n;
      if (t.message_id) {
        _.getInstance().setReceivingMessageStartTime(t.message_id, Date.now());
      }
      let r = messagingSessionUtils.getChatTraceEvent(e);
      if (r != null) {
        r.setTeaEventOtherTraceParams({
          is_deep_thinking: +(t != null && (n = t.content_blocks_v2) !== null && n !== undefined && !!n.some(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_THINKING)),
          is_pro: +((t == null ? undefined : t.ext?.is_pro) === "1")
        });
      }
      return t;
    }
    onMessageReceivingEnd(e, t) {
      try {
        var n;
        var i;
        if (aiChatSourceExtractor.hasThinkingBlock(t)) {
          let e = _.getInstance().getReceivingMessageStartTime(t.message_id ?? "");
          let l = _.getInstance().getMessageSendingEndTime(t.reply_id ?? "");
          let s = !!(t == null ? undefined : (n = t.content_blocks) === null || n === undefined ? undefined : n.some(e => (e == null ? undefined : e.block_type) === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT)) || !!(t == null ? undefined : (i = t.content_blocks_v2) === null || i === undefined ? undefined : i.some(e => (e == null ? undefined : e.block_type) === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT));
          v(t, e, e - l, +!!s);
        }
        if (t.message_id) {
          _.getInstance().resetMessageTime(t.message_id, t.reply_id ?? "");
        }
      } catch (e) {}
      return t;
    }
    constructor() {
      g(this, "pluginIdentifier", deepThinkingLifecycleSymbol.deepThinkingSymbol);
    }
  }
  require.r(exports);
  require.d(exports, {
    DemoMessageLifeCyclePlugin: function () {
      return h;
    }
  });
}