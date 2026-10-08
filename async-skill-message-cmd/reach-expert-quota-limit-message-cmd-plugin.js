// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiChatEnumConstants'
// - Resolved require(458113) to 'ai-chat-enum-constants'
// - Renamed variable 'r' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'a' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 's' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'l' to 'expertQuotaLimitSymbol'
// - Resolved require(998015) to 'expert-quota-limit-symbol'
// - Updated imported property 'x' to 'ExpertQuotaLimitPlugin' (module 998015)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'hH' to 'getCurrentDate' (module 268836)
// - Updated imported property 'rn' to 'deepThinkSwitch' (module 458113)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 315356
         */
module.exports = function (module, exports, require) {
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var expertQuotaLimitSymbol = require("expert-quota-limit-symbol") /*id: 998015*/;
  function c(e, t, n) {
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
  class u {
    constructor() {
      c(this, "pluginIdentifier", expertQuotaLimitSymbol.ExpertQuotaLimitPlugin);
      c(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let {
            deep_think_pro_exceeded: c = "0",
            deep_think_actionbar_mode: u = "0",
            deep_think_action_bar_setting: d = "",
            limited_track: p = ""
          } = e.data.data.ext ?? {};
          let h = chatStoreManager.getStore("deepThinkingControlStore");
          let {
            exceed_detail: f = []
          } = safeJsonUtils.safeParse(d, {});
          let {
            message_id: m = "",
            limited_biz: g = ""
          } = safeJsonUtils.safeParse(p, {});
          let _ = h.getState().deepThinkingConfigs ?? {};
          if (f && (f == null ? undefined : f.length) > 0) {
            let e = Date.now();
            let t = f.map(t => {
              let r = t.waiting_dur_ms ?? 0;
              return {
                item: String(t.item),
                messageId: m,
                waitingUntilTime: r > 0 ? e + r : 0,
                showExceedTitle: t.starling_key ?? ""
              };
            });
            let n = t.reduce((e, t) => ({
              ...e,
              [t.item]: true
            }), {});
            let i = (_.exceedDetail ?? []).filter(e => !n[String(e.item)]);
            _ = {
              currentDay: aiChatSourceExtractor.getCurrentDate(),
              exceedDetail: [...i, ...t]
            };
            teaAnalyticsEventTracker.trackEvent("to_limited_toast_show", {
              limited_biz: g,
              limited_trigger: "send_message",
              message_id: m
            });
          }
          h.setState({
            deepThinkingSwitchValue: Number(u) === aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchTrue,
            expertMode: Number(u) === aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchPro,
            deepThinkingSwitchValueNew: u,
            userSwitchValueTime: Date.now() / 1000 | 0,
            expertReachLimit: {
              [aiChatSourceExtractor.getCurrentDate()]: c === "1"
            },
            deepThinkingConfigs: _
          });
          chatStoreManager.getStore("chatInputStore").setState(() => ({
            modeSelectValue: String(u)
          }));
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ReachExpertQuotaLimitMessageCmdPlugin: function () {
      return u;
    }
  });
}