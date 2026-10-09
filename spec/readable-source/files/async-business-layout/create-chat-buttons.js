// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'CreateChatButton'
// - Renamed export 'Y' to 'CreateChatIconBtn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 940368
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var l = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 20 20",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M9.862 2.033a.833.833 0 0 1 0 1.666H5.87a2.5 2.5 0 0 0-2.5 2.5v7.985a2.5 2.5 0 0 0 2.5 2.5h7.984a2.5 2.5 0 0 0 2.5-2.5V10.19a.834.834 0 0 1 1.667 0v3.992a4.167 4.167 0 0 1-4.167 4.167H5.87a4.167 4.167 0 0 1-4.167-4.167V6.2A4.167 4.167 0 0 1 5.87 2.033zm3.936.65a2.526 2.526 0 0 1 3.572 0l.09.093c.867.96.867 2.425 0 3.384l-.09.095-5.814 5.814-.208.19q-.218.182-.461.326l-.25.134-2.074.992c-1.419.68-2.902-.803-2.223-2.222l.994-2.075q.184-.384.458-.709l.191-.208zM16.19 3.86a.86.86 0 0 0-1.215 0L9.162 9.675a1.7 1.7 0 0 0-.325.458l-.994 2.075 2.075-.993q.257-.124.46-.325l5.813-5.814a.86.86 0 0 0 0-1.216"
    })
  }), {}));
  var resolveRuntimeHook = require("resolve-runtime-hook") /*id: 770715*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var compassIconComponent = require("compass-icon-component") /*id: 716793*/;
  let h = () => {
    let t = resolveRuntimeHook.resolveUseMatches();
    return (t == null ? undefined : t[2]?.id) === "main_chat/page" || window.location.pathname === "/chat/";
  };
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  let y = e => {
    let n = useNavigateRuntimeResolver.useNavigateResolver();
    let {
      conversationId: i
    } = chatConversationSelectors.getConversationBase() ?? {};
    let r = chatConversationBotId.getConversationBotId(i, true);
    let {
      run: o
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      var t;
      var o;
      teaAnalyticsEventTracker.trackEvent("create_new_chat", {
        click_from: e,
        conversation_id: i,
        bot_id: r
      });
      if ((t = (o = chatStoreManager.getStoreState("chatGuidanceStore")).setActiveSkillGuidanceIdentifier) !== null && t !== undefined) {
        t.call(o);
      }
      chatStoreManager.getStore("chatViewCoreStore").setState({
        currentLocalConversationId: ""
      });
      return n(chatRouteConstants.routeChatRoot);
    }, {
      wait: 500,
      trailing: false,
      leading: true
    });
    return o;
  };
  let w = e => {
    let {
      className: t
    } = e;
    let n = y("chat_detail");
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let a = h();
    return reactJsxRuntimeCoreReexport.jsxs("button", {
      "data-testid": "create_conversation_button",
      className: r("py-6 pl-8 pr-10 rounded-16 flex items-center bg-s-color-bg-body text-s-color-brand-primary-default", "whitespace-nowrap", a ? "cursor-not-allowed opacity-30" : "cursor-pointer hover:text-s-color-text-invert-intact-primary", "create-chat-IyaDB3", t),
      disabled: a,
      onClick: () => {
        if (!a) {
          n();
        }
      },
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mr-3 flex size-16 items-center justify-center",
        children: reactJsxRuntimeCoreReexport.jsx(l, {
          className: "text-13"
        })
      }), reactJsxRuntimeCoreReexport.jsx("p", {
        className: "s-font-xs-strong",
        children: i("new_chat_button")
      })]
    });
  };
  let S = e => {
    let {
      className: n
    } = e;
    let i = y("chat_detail");
    let o = h();
    if (resolveRuntimeHook.resolveUseMatches()?.length === 1) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        "data-testid": "create_conversation_button",
        className: r("text-(--dbx-text-primary)", n),
        variant: "icon",
        size: "lg",
        disabled: o,
        onClick: () => {
          if (!o) {
            i();
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(compassIconComponent.CompassIcon, {})
      });
    }
  };
  require.d(exports, {
    CreateChatButton: function () {
      return w;
    },
    CreateChatIconBtn: function () {
      return S;
    }
  });
}