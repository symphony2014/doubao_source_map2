// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'useChatPageInteractiveCheck'
// - Renamed export 'O' to 'useChatPageInitTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 798740
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatPageLifecycleTracker = require("chat-page-lifecycle-tracker") /*id: 798679*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  var reactRouterCoreHooks = require("react-router-core-hooks") /*id: 864673*/;
  var reactUseRefValue = require("react-use-ref-value") /*id: 45405*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatLayoutRouteMatchers = require("chat-layout-route-matchers") /*id: 391713*/;
  var chatGuidanceStoreSelectors = require("chat-guidance-store-selectors") /*id: 970651*/;
  var chatAbConfigSelectorHook = require("chat-ab-config-selector-hook") /*id: 167077*/;
  let f = () => {
    let {
      pageInteractive: e,
      businessInit: t
    } = chatStoreManager.useStoreSelector("flowWebLayoutStore");
    reactCoreLibraryReexport.useEffect(() => {
      chatPageLifecycleTracker.trackRootPageLifecycle("visible");
    }, []);
    return {
      pageInteractive: e,
      businessInit: t
    };
  };
  let p = () => {
    var t;
    let n = reactRouterCoreHooks.useMatches();
    let a = chatLayoutRouteMatchers.isChatLayoutOnly(n) ? "landing" : chatLayoutRouteMatchers.isValidChatIdPage(n) ? "conversation" : "unknown";
    let {
      isLandingToMainCoco: f
    } = chatAbConfigSelectorHook.useChatAbConfigSelector();
    let p = (t = chatGuidanceStoreSelectors.useChatLayoutLoaderData()) === null || t === undefined ? undefined : t.userSetting?.data;
    let [_] = reactCoreLibraryReexport.useState(() => a);
    let v = chatStoreManager.useStoreSelector("flowWebLayoutStore", e => e.chatCompMountedTime, deepEqualityUtil.deepEqual);
    let [b, S] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      let e = setTimeout(() => S(true), 8000);
      return () => clearTimeout(e);
    }, []);
    let P = reactUseRefValue.useRefValue(a === "landing" ? !!(v == null ? undefined : v.chat_input) || b : a !== "conversation" || !!(v == null ? undefined : v.chat_input) && !!(v == null ? undefined : v.message_box) || b);
    reactCoreLibraryReexport.useEffect(() => {
      if (P) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "flow_chat_page_interactive_ui_ready",
          meta: {
            time: Math.round(performanceTimeUtil.getPerformanceNow()),
            start_scene: _,
            scene: a,
            reach_maximum_wait: b ? "1" : "0",
            chat_input: v == null ? undefined : v.chat_input,
            message_box: v == null ? undefined : v.message_box,
            guidance_group: v == null ? undefined : v.guidance_group,
            hit_landing_to_main_coco: f ? "1" : "0",
            message_batch_size: objectPathGetDefault.getObjectPathDefault(p, "ab_config.ab_results.message_chain_batch_size") || "50,20"
          }
        });
      }
    }, [P]);
    return a === "conversation" || P;
  };
  require.d(exports, {
    useChatPageInteractiveCheck: function () {
      return p;
    },
    useChatPageInitTracker: function () {
      return f;
    }
  });
}