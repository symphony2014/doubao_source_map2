// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'o' to 'performanceStoreHook'
// - Resolved require(299680) to 'performance-store-hook'
// - Renamed variable 'r' to 'chatPerformanceTracker'
// - Resolved require(899320) to 'chat-performance-tracker'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 's' to 'chatConversationCheckers'
// - Resolved require(104471) to 'chat-conversation-checkers'
// - Renamed variable 'l' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'c' to 'performanceTimeUtil'
// - Resolved require(512870) to 'performance-time-util'
// - Renamed variable 'u' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Resolved require.bind(236290) to 'tea-analytics-event-tracker'
// - Resolved require.bind(236290) to 'tea-analytics-event-tracker'
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'Z' to 'usePerformanceStore' (module 299680)
// - Updated imported property 'z' to 'getPerformanceNow' (module 512870)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'pR' to 'getChatPerformance' (module 899320)
// - Updated imported property 'x9' to 'isCocoPlatform' (module 104471)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-conversation-page-launcher.94db7428.js
         * chunkId: 20011
         * moduleId: 740016
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var chatPerformanceTracker = require("chat-performance-tracker") /*id: 899320*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function v(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class d {
    get hasStarted() {
      return chatStoreManager.getStore("flowWebLayoutStore").getState().conversationPageStart;
    }
    get conversationPageIsHome() {
      return chatStoreManager.getStore("flowWebLayoutStore").getState().conversationPageIsHome;
    }
    monitorUrlActionCanvas() {
      let e = new URLSearchParams(window.location.search).get("action") || "";
      if (e) {
        new Promise(e => {
          let t;
          let i = emptyExportFunction.emptyFunction;
          i = chatStoreManager.getStore("chatViewCanvasStore").subscribe(e => {
            let {
              canvasContent: t,
              matchedCanvasPluginIdentifier: i,
              isExpand: n
            } = e;
            return {
              artifactLoading: t == null ? undefined : t.artifactLoading,
              matchedCanvasPluginIdentifier: i,
              isExpand: n
            };
          }, n => {
            let r = n == null ? undefined : n.artifactLoading;
            let a = r ? undefined : n.matchedCanvasPluginIdentifier;
            if (n.isExpand && !r && a) {
              performanceStoreHook.usePerformanceStore.getState().addDurationPoints({
                chat_canvas_view_load: performanceTimeUtil.getPerformanceNow()
              });
              if (t) {
                clearTimeout(t);
              }
              i();
              e();
            }
          }, {
            fireImmediately: true
          });
          t = setTimeout(() => {
            i();
            return e();
          }, 15000);
        }).then(() => {
          asyncRetryUtils.retryPromise(() => Promise.resolve().then(require.bind(require, "tea-analytics-event-tracker") /*id: 236290*/)).then(t => {
            let {
              trackEvent: i
            } = t;
            loggerServiceCore.defaultLogger.persist.success({
              eventName: "chat_canvas_finish_load",
              meta: {
                ...chatPerformanceTracker.getChatPerformance({
                  first_visit_page: this.conversationPageIsHome ? "home" : "conversation",
                  sub_scene: this.isMainConversation ? "conversation_main" : "conversation_sub",
                  excludeServerTiming: this.excludeServerTiming
                }),
                chat_page_canvas_finish_load: performanceStoreHook.usePerformanceStore.getState().duration.chat_canvas_view_load
              }
            });
            i("chat_canvas_finish_load", {
              ...chatPerformanceTracker.getChatPerformance({
                first_visit_page: this.conversationPageIsHome ? "home" : "conversation",
                sub_scene: this.isMainConversation ? "conversation_main" : "conversation_sub",
                excludeServerTiming: this.excludeServerTiming
              }),
              chat_page_canvas_finish_load: performanceStoreHook.usePerformanceStore.getState().duration.chat_canvas_view_load,
              success: "1",
              custom_app_name: "flow-chat",
              action: e
            });
          });
        });
      }
    }
    constructor() {
      v(this, "excludeServerTiming", true);
      v(this, "hasRunOnce", false);
      v(this, "isMainConversation", false);
      v(this, "onEnter", (e, t) => {
        var n;
        var a;
        if (!("matches" in e) || t || this.hasRunOnce || !this.hasStarted) {
          return;
        }
        let {
          timing: u,
          conversationInfo: v
        } = ((n = e.matches) === null || n === undefined ? undefined : n[1]?.data) ?? {};
        let {
          timing: d
        } = ((a = e.matches) === null || a === undefined ? undefined : a[0]?.data) ?? {};
        if (u) {
          this.excludeServerTiming = false;
        }
        if (chatConversationCheckers.isCocoPlatform(v == null ? undefined : v.conversation_type)) {
          this.isMainConversation = true;
        }
        performanceStoreHook.usePerformanceStore.getState().addDurationPoints({
          server_ttwid: d == null ? undefined : d.ttwidTiming,
          server_parallel_account_info: d == null ? undefined : d.accountInfoTiming,
          server_parallel_user_setting: d == null ? undefined : d.userSettingTiming,
          server_parallel_skill_list: d == null ? undefined : d.skillListTiming,
          server_parallel_chain_recent_conv: d == null ? undefined : d.recentConversationTiming,
          server_parallel_conversation: u == null ? undefined : u.conversationTiming,
          server_parallel_message_list: u == null ? undefined : u.messageListTiming
        });
      });
      v(this, "onIdle", () => {
        if (this.hasRunOnce || !this.hasStarted) {
          return;
        }
        this.hasRunOnce = true;
        this.monitorUrlActionCanvas();
        let e = new Promise(e => {
          let t;
          let i = emptyExportFunction.emptyFunction;
          i = chatStoreManager.getStore("flowWebLayoutStore").subscribe(e => {
            let {
              conversationPageFinish: t
            } = e;
            return t;
          }, n => {
            if (n) {
              if (t) {
                clearTimeout(t);
              }
              i();
              e();
            }
          }, {
            fireImmediately: true
          });
          t = setTimeout(() => {
            i();
            return e();
          }, 10000);
        });
        let t = new Promise(e => {
          let t;
          let i = emptyExportFunction.emptyFunction;
          i = chatStoreManager.getStore("flowWebLayoutStore").subscribe(e => {
            let {
              conversationPageInteractive: t
            } = e;
            return t;
          }, n => {
            if (n) {
              if (t) {
                clearTimeout(t);
              }
              i();
              e();
            }
          }, {
            fireImmediately: true
          });
          t = setTimeout(() => {
            i();
            return e();
          }, 10000);
        });
        e.then(() => {
          let e = chatPerformanceTracker.getChatPerformance({
            record_visit_page: "conversation",
            first_visit_page: this.conversationPageIsHome ? "home" : "conversation",
            sub_scene: this.isMainConversation ? "conversation_main" : "conversation_sub",
            excludeServerTiming: this.excludeServerTiming
          });
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "init_chat",
            meta: e
          });
          asyncRetryUtils.retryPromise(() => Promise.resolve().then(require.bind(require, "tea-analytics-event-tracker") /*id: 236290*/)).then(e => {
            let {
              trackEvent: t
            } = e;
            t("chat_page_finish", {
              ...chatPerformanceTracker.getChatPerformance({
                record_visit_page: "conversation",
                first_visit_page: this.conversationPageIsHome ? "home" : "conversation",
                sub_scene: this.isMainConversation ? "conversation_main" : "conversation_sub",
                excludeServerTiming: this.excludeServerTiming
              }),
              success: "1",
              custom_app_name: "flow-chat"
            });
            chatStoreManager.getStore("flowWebLayoutStore").setState({
              rootPageStart: false,
              conversationPageStart: false
            });
          });
        });
        t.then(() => {
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "init_chat_interactive",
            meta: {
              first_visit_page: this.conversationPageIsHome ? "home" : "conversation"
            }
          });
        });
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    PagePerfReporterPlugin: function () {
      return d;
    }
  });
}