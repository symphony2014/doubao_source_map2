// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'ViewAllChatsButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 501776
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {};
  let c = new Promise(e => {
    u = e;
  });
  let d = e => {
    let {
      canJump: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "view_all_chats_button",
      onMouseOver: () => {
        if (t) {
          u(true);
        }
      },
      onClick: () => {
        if (t) {
          teaAnalyticsEventTracker.trackEvent("sidebar_button_click", {
            button_name: "history_chat_all"
          });
          chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToThreadListPage());
        }
      },
      className: `
        text-[12px] leading-[18px] font-medium text-dbx-text-tertiary
        ${t ? `
              cursor-pointer
              hover:text-dbx-text-secondary
            ` : ""}
      `,
      children: n("sideBar_chats_history_header")
    });
  };
  let h = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => {
    await c;
    let {
      DbxTooltip: e
    } = await Promise.resolve().then(require.bind(require, "tooltip-component-exports") /*id: 341865*/);
    return {
      default: t => {
        let n = i18nTranslationUtils.useTranslationWithFallback();
        return reactJsxRuntimeCoreReexport.jsx(e, {
          content: n("sidebar_chatHistory_tooltip_manage"),
          children: reactJsxRuntimeCoreReexport.jsx(d, {
            ...t
          })
        });
      }
    };
  }), d);
  require.d(exports, {
    ViewAllChatsButton: function () {
      return h;
    }
  });
}