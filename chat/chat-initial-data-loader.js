// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'loadChatInitialData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 765887
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var chatInitialDataFetchers = require("chat-initial-data-fetchers") /*id: 909614*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let a = e => {
    try {
      let {
        request: t,
        params: n
      } = e;
      let {
        pathname: i
      } = new URL(t.url);
      return i === "/chat" || (n == null ? undefined : n.id) && i === `/chat/${n.id}`;
    } catch {
      return false;
    }
  };
  let l = (e, t) => {
    var i;
    var r;
    var l;
    let u = a(e) && (e == null ? undefined : e.params?.id) ? [e.params.id] : [];
    return (t == null ? undefined : (l = t.downlink_body) === null || l === undefined ? undefined : (r = l.pull_recent_conv_chain_downlink_body) === null || r === undefined ? undefined : (i = r.cells) === null || i === undefined ? undefined : i.map(e => {
      if ((u == null ? undefined : u.includes(e.conversation?.conversation_id ?? "")) || e.conversation?.bot_type === chatConstantsEnum.specificBotType.COCO) {
        return e;
      } else {
        return {
          conversation: {
            bot_type: e.conversation?.bot_type,
            conversation_id: e.conversation?.conversation_id,
            name: e.conversation?.name
          }
        };
      }
    })) ?? [];
  };
  require("chat-params-initializer") /*id: 320602*/;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var securitySdkConfig = require("security-sdk-config") /*id: 609762*/;
  let h = {
    current: 0
  };
  let m = () => asyncRetryUtils.retryPromise(() => require.e("async-fallback-logics") /*id: 50111*/.then(require.bind(require, "ttwid-validation-logic") /*id: 748905*/)).then(e => e.checkTtWid());
  let g = () => asyncRetryUtils.retryPromise(() => require.e("async-fallback-logics") /*id: 50111*/.then(require.bind(require, "microsoft-sdk-initializer") /*id: 925468*/)).then(e => e.initMsSDK(securitySdkConfig.securitySdkConfig));
  let f = async (e, t) => {
    let n = {
      ...throttledPathFilterStringify.throttledPathStr(e.request, ["url", "method", "redirect", "mode", "cache"]),
      loader_count: ++h.current
    };
    if (t) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "flow_chat_direct_client_loader",
        meta: n
      });
    } else {
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "flow_chat_data_loader_fallback",
        meta: {
          ...n,
          has_server_ttwid_timing: (() => {
            try {
              if (performanceStoreHook.usePerformanceStore.getState().duration?.server_ttwid) {
                return "yes";
              } else {
                return "no";
              }
            } catch (e) {
              return "unknown";
            }
          })()
        }
      });
    }
    try {
      let [t] = await Promise.all([m(), g()]);
      if (t) {
        let {
          accountInfo: t,
          userSetting: n,
          skillList: i,
          recentConversation: o
        } = chatInitialDataFetchers.fetchInitialData(e);
        try {
          let [r, a, s, u] = await Promise.allSettled([t, n, i, o]);
          return {
            accountInfo: r.status === "fulfilled" ? r.value : {},
            userSetting: a.status === "fulfilled" ? a.value : {},
            skillList: s.status === "fulfilled" ? s.value : {},
            trimmedChainRecentConvCells: u.status === "fulfilled" ? l(e, u.value) : []
          };
        } catch (e) {}
      }
    } catch (e) {}
    return {
      accountInfo: {},
      userSetting: {},
      skillList: {},
      trimmedChainRecentConvCells: []
    };
  };
  let p = e => f(e);
  require.d(exports, {
    loadChatInitialData: function () {
      return p;
    }
  });
}