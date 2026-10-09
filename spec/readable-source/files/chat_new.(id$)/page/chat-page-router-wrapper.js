// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'mobileSidebarContext'
// - Resolved require(526694) to 'mobile-sidebar-context'
// - Renamed variable 'o' to 'chatPageInteractiveTracker'
// - Resolved require(798740) to 'chat-page-interactive-tracker'
// - Renamed variable 's' to 'conversationCreationHook'
// - Resolved require(134036) to 'conversation-creation-hook'
// - Renamed variable 'a' to 'chatInputLayoutContainer'
// - Resolved require(106065) to 'chat-input-layout-container'
// - Renamed variable 'l' to 'chatStatusConstants_1'
// - Resolved require(558074) to 'chat-status-constants_1'
// - Renamed variable 'c' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'edenxSearchParamsHook'
// - Resolved require(471794) to 'edenx-search-params-hook'
// - Renamed variable 'p' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'h' to 'useParamsResolver'
// - Resolved require(790576) to 'use-params-resolver'
// - Renamed variable 'f' to 'navigateComponentWrapper'
// - Resolved require(870881) to 'navigate-component-wrapper'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'l' to 'resolveSearchParams' (module 471794)
// - Updated imported property 'y' to 'useConversationCreation' (module 134036)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'XA' to 'useMobileSidebar' (module 526694)
// - Updated imported property 'r' to 'ChatInputLayout' (module 106065)
// - Updated imported property 'U' to 'useParamsResolver' (module 790576)
// - Updated imported property 'vf' to 'selectConvDetail' (module 783144)
// - Updated imported property 'F' to 'createNavigateComponent' (module 870881)
// - Updated imported property 'ns' to 'ChatStatus' (module 558074)
// - Updated imported property 'O' to 'useChatPageInitTracker' (module 798740)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.551adcd1.js
         * chunkId: 66934
         * moduleId: 746790
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var mobileSidebarContext = require("mobile-sidebar-context") /*id: 526694*/;
  var chatPageInteractiveTracker = require("chat-page-interactive-tracker") /*id: 798740*/;
  var conversationCreationHook = require("conversation-creation-hook") /*id: 134036*/;
  var chatInputLayoutContainer = require("chat-input-layout-container") /*id: 106065*/;
  var chatStatusConstants_1 = require("chat-status-constants_1") /*id: 558074*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var edenxSearchParamsHook = require("edenx-search-params-hook") /*id: 471794*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var useParamsResolver = require("use-params-resolver") /*id: 790576*/;
  var navigateComponentWrapper = require("navigate-component-wrapper") /*id: 870881*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = t => {
    let {
      botId: e,
      token: n
    } = t;
    let [o] = edenxSearchParamsHook.resolveSearchParams();
    let l = conversationCreationHook.useConversationCreation();
    let c = useNavigateRuntimeResolver.useNavigateResolver();
    let {
      setMobileSidebarVisible: h
    } = mobileSidebarContext.useMobileSidebar();
    reactCoreLibraryReexport.useEffect(() => {
      let {
        newLocalConversationId: t,
        createConversationForBot: r
      } = l.initCreateConversation({
        botId: e,
        token: n,
        reportProps: {
          eventName: "create_conversation",
          meta: {
            from: o.get("enter_from") || "url_new"
          }
        }
      });
      h(false);
      r().catch(() => {
        h(true);
      });
      teaAnalyticsEventTracker.trackEvent("enter_page", {
        page: "new_chat_setting",
        is_tts: 0
      });
      c(`/new/${t}`);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(chatInputLayoutContainer.ChatInputLayout, {});
  };
  let v = () => {
    let [t] = edenxSearchParamsHook.resolveSearchParams();
    let e = t.get("botId") || "";
    let n = t.get("token") || "";
    let {
      id: r
    } = useParamsResolver.useParamsResolver();
    let i = chatConversationSelectors.selectConvDetail(r || "");
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(g, {
        token: n
      });
    }
    if (e) {
      return reactJsxRuntimeCoreReexport.jsx(g, {
        botId: e
      });
    }
    if (!r) {
      return reactJsxRuntimeCoreReexport.jsx(navigateComponentWrapper.createNavigateComponent, {
        to: "//",
        replace: true,
        relative: "route"
      });
    }
    if (!(i == null ? undefined : i.local)) {
      return reactJsxRuntimeCoreReexport.jsx(navigateComponentWrapper.createNavigateComponent, {
        to: "/",
        replace: true,
        relative: "route"
      });
    }
    let {
      local: {
        createStatus: o,
        newConversationId: s
      }
    } = i;
    if (o === chatStatusConstants_1.ChatStatus.Creating) {
      return reactJsxRuntimeCoreReexport.jsx(chatInputLayoutContainer.ChatInputLayout, {});
    } else if (o === chatStatusConstants_1.ChatStatus.Done && s) {
      return reactJsxRuntimeCoreReexport.jsx(navigateComponentWrapper.createNavigateComponent, {
        to: `/${s}`,
        replace: true,
        relative: "route"
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(navigateComponentWrapper.createNavigateComponent, {
        to: "/",
        replace: true,
        relative: "route"
      });
    }
  };
  exports.default = () => {
    let {
      pageInteractive: t
    } = chatPageInteractiveTracker.useChatPageInitTracker();
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(v, {});
    } else {
      return null;
    }
  };
  require.r(exports);
}