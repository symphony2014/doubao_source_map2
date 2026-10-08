// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'As' to 'onPaste'
// - Renamed export 'GQ' to 'onKeyDown'
// - Renamed export 'Kb' to 'onBeforeBreakMsg'
// - Renamed export 'SS' to 'createInputHandler'
// - Renamed export 'WF' to 'onMessageSendingEnd'
// - Renamed export 'oW' to 'onBeforeSendMessage'
// - Renamed export 'pe' to 'onBeforeMessageSend'
// - Renamed export 'xK' to 'onEmptySlash'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 144822
         */
module.exports = function (module, exports, require) {
  var isSymbolUtil = require("is-symbol-util") /*id: 994674*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let d = () => {
    let {
      chatId: e,
      chatType: t,
      chatKey: n
    } = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig || {};
    let i = {
      activeSkillType: chatStoreManager.getStoreState("chatGuidanceStore").activeSkillIdentifier
    };
    let r = e ? chatStoreManager.getStoreState("chatInputStore").activeSkillTypeMap[e] : undefined;
    return {
      chatId: e,
      chatType: t,
      chatKey: n,
      guidance: i,
      skillType: r
    };
  };
  let p = function (e, {
    needsReport: t = true,
    reportReturnedValue: n = true
  } = {}) {
    return function () {
      var a = arguments.length;
      var p = Array(a);
      var h = 0;
      for (; h < a; h++) {
        p[h] = arguments[h];
      }
      return new Promise((a, h) => {
        (async () => {
          let m = t ? eventReportingService.createEventReporter({
            eventName: "chat_input_event",
            meta: {
              event: e
            }
          }) : null;
          try {
            let t = await chatPluginMatcherRegistry.loadInputEventsMatcher();
            if (m != null) {
              m.addDurationPoint("get_matchers_success");
            }
            let u = d();
            if (m != null) {
              m.updateMeta({
                matcher_params: u
              });
            }
            let h = t.map(e => {
              let t = e(u);
              if (t) {
                return t;
              }
            }).filter(isSymbolUtil.isSymbol);
            if (m != null) {
              m.addDurationPoint("find_matcher_success");
            }
            if (m != null) {
              m.updateMeta({
                plugin_identifiers: h.map(e => e ? e.toString() : "undefined").join(",")
              });
            }
            let g = await Promise.all(h.map(e => chatPluginIocManager.inputEventsPluginLoader(e)));
            let _ = g.filter(e => !!e);
            if (m != null) {
              m.addDurationPoint("get_plugins_success");
            }
            if (m != null) {
              m.updateMeta({
                plugins_ready: g.map(e => e ? "1" : "0").join(","),
                plugins_executable: _.map(t => isFunctionUtil_1.isFunction(t[e]) ? "1" : "0").join(",")
              });
            }
            let f = p[0];
            if (n) {
              if (m != null) {
                m.updateMeta({
                  origin_returned_value: safeJsonUtils.safeStringify(f)
                });
              }
            }
            for (let t = 0; t < _.length; t++) {
              let i = _[t][e];
              let a = (e, t) => t;
              let l = isFunctionUtil_1.isFunction(i) ? i : a;
              try {
                f = await l(u, f, ...p.slice(1));
                if (m != null) {
                  m.addDurationPoint(`run_plugin_${t}_success`);
                }
                if (n) {
                  if (m != null) {
                    m.updateMeta({
                      [`plugin_${t}_returned_value`]: safeJsonUtils.safeStringify(f)
                    });
                  }
                }
              } catch (t) {
                loggerServiceCore.defaultLogger.persist.error({
                  error: t,
                  message: `input lifecycle [${e}] execute failed, reason:${t.message}`
                });
              }
            }
            if (n) {
              if (m != null) {
                m.updateMeta({
                  returned_value: safeJsonUtils.safeStringify(f)
                });
              }
            }
            if (m != null) {
              m.success();
            }
            a(f);
          } catch (e) {
            if (m != null) {
              m.error({
                reason: "run_event_failed",
                error: e instanceof Error ? e : Error(String(e))
              });
            }
            h(e);
          }
        })();
      });
    };
  };
  let h = p("onKeyDown", {
    needsReport: false
  });
  let m = p("onMessageSendingEnd");
  let g = p("onMessageSendingBefore", {
    reportReturnedValue: false
  });
  let _ = p("onPaste", {
    reportReturnedValue: false
  });
  let f = p("onEmptySlash");
  let v = p("onBeforeBreakMessage");
  let y = p("onBeforeSendMessage");
  require.d(exports, {
    onPaste: function () {
      return _;
    },
    onKeyDown: function () {
      return h;
    },
    onBeforeBreakMsg: function () {
      return v;
    },
    createInputHandler: function () {
      return p;
    },
    onMessageSendingEnd: function () {
      return m;
    },
    onBeforeSendMessage: function () {
      return y;
    },
    onBeforeMessageSend: function () {
      return g;
    },
    onEmptySlash: function () {
      return f;
    }
  });
}