// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'r' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'notificationComponentWrapper'
// - Resolved require(830647) to 'notification-component-wrapper'
// - Renamed variable 's' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'reactTooltipComponent'
// - Resolved require(228812) to 'react-tooltip-component'
// - Renamed variable 'u' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'd' to 'rtlNavigationIcon'
// - Resolved require(734266) to 'rtl-navigation-icon'
// - Renamed variable 'p' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'm' to 'researchFinishedCmdSymbol'
// - Resolved require(581384) to 'research-finished-cmd-symbol'
// - Updated imported property 'Z' to 'RtlNavigationIcon' (module 734266)
// - Updated imported property 'Z' to 'TooltipComponent' (module 228812)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'O' to 'researchFinishedCmd' (module 581384)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'Z' to 'Notification' (module 830647)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 168290
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var notificationComponentWrapper = require("notification-component-wrapper") /*id: 830647*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlNavigationIcon = require("rtl-navigation-icon") /*id: 734266*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      title: t,
      text: n,
      onClose: i,
      onClick: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex-row !flex items-center gap-10 text-14",
      children: [reactJsxRuntimeCoreReexport.jsx(rtlNavigationIcon.RtlNavigationIcon, {
        className: l("!flex !items-center !justify-center w-36 h-36 leading-36", "rounded-full text-[s-color-text-secondary]", "border-1 border-solid border-[var(--s-color-border-tertiary)]")
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex max-w-[200px] flex-1 cursor-pointer flex-col gap-4",
        onClick: r,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            line-clamp-1 leading-22 font-medium
            text-[var(--s-color-text-secondary)]
          `,
          children: t
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            line-clamp-1 leading-18 text-[var(--s-color-text-tertiary)]
          `,
          children: reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
            content: n,
            children: n
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        type: "quartary",
        size: "small",
        className: "!h-22 !w-22 !p-4 text-[s-color-text-tertiary]",
        icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {}),
        onClick: i
      })]
    });
  };
  var researchFinishedCmdSymbol = require("research-finished-cmd-symbol") /*id: 581384*/;
  function g(e, t, n) {
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
  class _ {
    constructor() {
      g(this, "pluginIdentifier", researchFinishedCmdSymbol.researchFinishedCmd);
      g(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          if (e.data.data.conversation_id === chatFeedStoreFactory.useFeedStore.getState().currentActiveConversationId) {
            return;
          }
          let s = "";
          s = notificationComponentWrapper.Notification.open({
            className: "deep-research-notification",
            content: reactJsxRuntimeCoreReexport.jsx(f, {
              title: i18nTranslationUtils.i18nextTranslate("web_deepResearch_notif_researchComplete"),
              text: e.data.data.ext?.title ?? "",
              onClose: () => notificationComponentWrapper.Notification.close(s),
              onClick: () => {
                if (e.data.version === "1.0") {
                  notificationComponentWrapper.Notification.close(s);
                  let t = e.data.data.conversation_id;
                  if (t) {
                    chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => {
                      if (e != null) {
                        e.navigateToChatDetailPage({
                          conversationId: t,
                          replace: true
                        });
                      }
                    });
                  }
                }
              }
            }),
            duration: 0,
            position: "topRight",
            showClose: false
          });
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ResearchFinishedMessageCmdPlugin: function () {
      return _;
    }
  });
}