// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'n' to 'performanceStoreHook'
// - Resolved require(299680) to 'performance-store-hook'
// - Renamed variable 'o' to 'chatPerformanceTracker'
// - Resolved require(899320) to 'chat-performance-tracker'
// - Renamed variable 's' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'a' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'l' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Resolved require.bind(236290) to 'tea-analytics-event-tracker'
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'Z' to 'usePerformanceStore' (module 299680)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'pR' to 'getChatPerformance' (module 899320)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-root-page-launcher.aa5f2512.js
         * chunkId: 22154
         * moduleId: 457170
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var chatPerformanceTracker = require("chat-performance-tracker") /*id: 899320*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function u(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  class c {
    get hasStarted() {
      return chatStoreManager.getStore("flowWebLayoutStore").getState().rootPageStart;
    }
    constructor() {
      u(this, "excludeServerTiming", true);
      u(this, "hasRunOnce", false);
      u(this, "onEnter", (e, t) => {
        var r;
        var s;
        if (!("matches" in e) || t || this.hasRunOnce || !this.hasStarted) {
          return;
        }
        let {
          timing: u
        } = ((r = e.matches) === null || r === undefined ? undefined : r[1]?.data) ?? {};
        let {
          timing: c
        } = ((s = e.matches) === null || s === undefined ? undefined : s[0]?.data) ?? {};
        if (!u && c) {
          this.excludeServerTiming = false;
        }
        performanceStoreHook.usePerformanceStore.getState().addDurationPoints({
          server_ttwid: c == null ? undefined : c.ttwidTiming,
          server_parallel_account_info: c == null ? undefined : c.accountInfoTiming,
          server_parallel_user_setting: c == null ? undefined : c.userSettingTiming,
          server_parallel_skill_list: c == null ? undefined : c.skillListTiming,
          server_parallel_chain_recent_conv: c == null ? undefined : c.recentConversationTiming
        });
      });
      u(this, "onIdle", () => {
        if (this.hasRunOnce || !this.hasStarted) {
          return;
        }
        this.hasRunOnce = true;
        let e = new Promise(e => {
          let t;
          let i = emptyExportFunction.emptyFunction;
          i = chatStoreManager.getStore("flowWebLayoutStore").subscribe(e => {
            let {
              pageFinish: t
            } = e;
            return t;
          }, r => {
            if (r) {
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
              pageInteractive: t
            } = e;
            return t;
          }, r => {
            if (r) {
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
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "init_chat",
            meta: chatPerformanceTracker.getChatPerformance({
              first_visit_page: "home",
              sub_scene: "conversation_new",
              excludeServerTiming: this.excludeServerTiming
            })
          });
          asyncRetryUtils.retryPromise(() => Promise.resolve().then(require.bind(require, "tea-analytics-event-tracker") /*id: 236290*/)).then(e => {
            let {
              trackEvent: t
            } = e;
            t("chat_page_finish", {
              ...chatPerformanceTracker.getChatPerformance({
                first_visit_page: "home",
                sub_scene: "conversation_new",
                excludeServerTiming: this.excludeServerTiming
              }),
              success: "1",
              custom_app_name: "flow-chat"
            });
            chatStoreManager.getStore("flowWebLayoutStore").setState({
              rootPageStart: false
            });
          });
        });
        t.then(() => {
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "init_chat_interactive",
            meta: {
              first_visit_page: "home"
            }
          });
        });
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    PagePerfReporterPlugin: function () {
      return c;
    }
  });
}