// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatAsrStoreHook'
// - Resolved require(176317) to 'chat-asr-store-hook'
// - Renamed variable 'r' to 'chatMessageUtils_1'
// - Resolved require(711513) to 'chat-message-utils_1'
// - Renamed variable 'a' to 'messagingSessionUtils'
// - Resolved require(545930) to 'messaging-session-utils'
// - Renamed variable 'o' to 'asrToolButtonSymbol'
// - Resolved require(100129) to 'asr-tool-button-symbol'
// - Updated imported property 'V' to 'asrToolButtonSymbol' (module 100129)
// - Updated imported property 'j' to 'useChatAsrStore' (module 176317)
// - Updated imported property 'S' to 'getChatTraceEvent' (module 545930)
// - Updated imported property 'Nm' to 'hasSkillId' (module 711513)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 259927
         */
module.exports = function (module, exports, require) {
  var chatAsrStoreHook = require("chat-asr-store-hook") /*id: 176317*/;
  var chatMessageUtils_1 = require("chat-message-utils_1") /*id: 711513*/;
  var messagingSessionUtils = require("messaging-session-utils") /*id: 545930*/;
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  function l(e, t, n) {
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
  class s {
    constructor() {
      var e = this;
      l(this, "pluginIdentifier", asrToolButtonSymbol.asrToolButtonSymbol);
      l(this, "processMessageBefore", (e, t) => {
        if (t.every(e => {
          return e.reportParams?.scene === this.USED_ASR_SCENE;
        })) {
          return t;
        }
        let {
          hasUsedAsr: n
        } = chatAsrStoreHook.useChatAsrStore.getState();
        if (n) {
          var a;
          var l;
          let e = !!((a = t[0]) === null || a === undefined ? undefined : a.reportParams?.use_skill) || !!((l = t[0]) === null || l === undefined ? undefined : l.reportParams?.skill_type);
          return t.map(t => {
            return {
              ...t,
              reportParams: {
                ...t.reportParams,
                scene: this.getSendMessageScene(e, t.reportParams?.scene)
              }
            };
          });
        }
        return t;
      });
      l(this, "onMessageSessionStart", (e, t) => {
        var n;
        let o = messagingSessionUtils.getChatTraceEvent(e);
        let l = e.get("imSession");
        if (((n = l.extra) === null || n === undefined ? undefined : n.reportParams.scene) === this.USED_ASR_SCENE) {
          return t;
        }
        let {
          hasUsedAsr: s,
          asrStartMethod: c,
          asrSendMethod: u
        } = chatAsrStoreHook.useChatAsrStore.getState();
        if (s && l.extra) {
          let n = !!chatMessageUtils_1.hasSkillId(t);
          l.extra.reportParams.scene = this.getSendMessageScene(n, l.extra.reportParams.scene);
          l.extra.reportParams.sec_scene = u;
          l.extra.reportParams.enter_method = c === "longPress" ? "speak_spacebar" : "speak_click_input_bar";
          e.set("imSession", l);
          if (o != null) {
            o.setCommonTraceParam({
              chat_scene: this.getSendMessageScene(n, l.extra.reportParams.scene)
            });
          }
        }
        return t;
      });
      l(this, "onMessageSendingStart", (e, t) => {
        var n;
        var r;
        if ((r = chatAsrStoreHook.useChatAsrStore.getState().asrBtnController) !== null && r !== undefined && (n = r.stopAsr) !== null && n !== undefined) {
          n.call(r);
        }
        chatAsrStoreHook.useChatAsrStore.setState({
          hasUsedAsr: false
        });
        return t;
      });
      l(this, "USED_ASR_SCENE", "speak");
      l(this, "getSendMessageScene", function (t, n = "") {
        if (t) {
          if (["chat_action_bar", "sidebar_skill_click", "direct_enter"].includes(n)) {
            return e.USED_ASR_SCENE;
          } else {
            return n;
          }
        } else if (n === "input_sug_prompts") {
          return n;
        } else {
          return e.USED_ASR_SCENE;
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    GenericAsrBtnMessageLifeCyclePlugin: function () {
      return s;
    }
  });
}