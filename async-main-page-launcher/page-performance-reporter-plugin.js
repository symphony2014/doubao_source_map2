// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'n' to 'chatPerformanceTracker'
// - Resolved require(899320) to 'chat-performance-tracker'
// - Renamed variable 'o' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'a' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 's' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Resolved require.bind(236290) to 'tea-analytics-event-tracker'
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'pR' to 'getChatPerformance' (module 899320)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-main-page-launcher.5470b8e7.js
         * chunkId: 91414
         * moduleId: 12573
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var chatPerformanceTracker = require("chat-performance-tracker") /*id: 899320*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  class u {
    constructor() {
      var e;
      var t;
      var u;
      e = "onIdle";
      t = () => {
        let e = new Promise(e => {
          let t;
          let r = emptyExportFunction.emptyFunction;
          r = chatStoreManager.getStore("flowWebLayoutStore").subscribe(e => {
            let {
              mainPageFinish: t
            } = e;
            return t;
          }, i => {
            if (i) {
              if (t) {
                clearTimeout(t);
              }
              r();
              e();
            }
          }, {
            fireImmediately: true
          });
          t = setTimeout(() => {
            r();
            return e();
          }, 10000);
        });
        let t = new Promise(e => {
          let t;
          let r = emptyExportFunction.emptyFunction;
          r = chatStoreManager.getStore("flowWebLayoutStore").subscribe(e => {
            let {
              mainPageInteractive: t
            } = e;
            return t;
          }, i => {
            if (i) {
              if (t) {
                clearTimeout(t);
              }
              r();
              e();
            }
          }, {
            fireImmediately: true
          });
          t = setTimeout(() => {
            r();
            return e();
          }, 10000);
        });
        e.then(() => {
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "init_chat",
            meta: chatPerformanceTracker.getChatPerformance({
              first_visit_page: "conversation",
              sub_scene: "conversation_main",
              excludeServerTiming: false
            })
          });
          asyncRetryUtils.retryPromise(() => Promise.resolve().then(require.bind(require, "tea-analytics-event-tracker") /*id: 236290*/)).then(e => {
            let {
              trackEvent: t
            } = e;
            t("chat_page_finish", {
              ...chatPerformanceTracker.getChatPerformance({
                first_visit_page: "conversation",
                sub_scene: "conversation_main",
                excludeServerTiming: false
              }),
              success: "1",
              custom_app_name: "flow-chat"
            });
          });
        });
        t.then(() => {
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "init_chat_interactive",
            meta: {
              first_visit_page: "conversation"
            }
          });
        });
      };
      if ((e = typeof (u = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? u : u + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    PagePerfReporterPlugin: function () {
      return u;
    }
  });
}