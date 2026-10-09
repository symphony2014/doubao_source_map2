// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'ThreadShareHeader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 874039
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var rtlIconComponent_1 = require("rtl-icon-component_1") /*id: 66332*/;
  var noSsrWrapper = require("no-ssr-wrapper") /*id: 647730*/;
  var _ = {
    "s-skeleton": "s-skeleton-RttJ8K",
    "s-skeleton-immerse": "s-skeleton-immerse-rJDWHX"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      title: t,
      t: n,
      createTime: r,
      loading: o,
      onEdit: a,
      onCancel: s,
      noHorizonMargin: l,
      className: c,
      titleClassName: y,
      subTitleClassName: w,
      showSubTitle: S = true,
      appendExtraInfo: x,
      isImmerseMode: C = false
    } = e;
    let k = responsiveScreenHooks.useIsNarrowScreen();
    reactCoreLibraryReexport.useEffect(() => {
      performanceStoreHook.usePerformanceStore.getState().addDurationPoint("thread_share_header_mount");
    }, []);
    useEventListenerHook.useEventListener("keydown", e => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        if (s != null) {
          s();
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: d("share-header-ui", c),
      children: [reactJsxRuntimeCoreReexport.jsxs("h1", {
        className: d("s-font-h1 mt-16 tracking-wide flex items-center", S ? "mb-4" : "mb-16", {
          "ml-10": !l
        }, y),
        "data-testid": "thread_share_title",
        children: [o || !t ? n("web_chat_share_message") : t, a ? reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {
          className: `
              ml-4 cursor-pointer p-2 text-16 text-s-color-text-quaternary
            `,
          onClick: a
        }) : null, s ? reactJsxRuntimeCoreReexport.jsx("div", {
          onClick: s,
          className: d("s-font-small absolute right-0 text-s-color-text-tertiary cursor-pointer", {
            "mr-18": !k
          }),
          children: n("cancel")
        }) : null]
      }), S && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: d("pb-36 border-solid border-transparent border-b-[0.5px] border-b-s-color-border-secondary", "s-font-xs text-s-color-text-quaternary", {
          "ml-10": !l
        }, w),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [r ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx(noSsrWrapper.NoSsrWrapper, {
              fallback: reactJsxRuntimeCoreReexport.jsx("span", {
                className: d(_["s-skeleton"], "inline-block w-108 rounded-4", {
                  [_["s-skeleton-immerse"]]: C
                })
              }),
              children: r && reactJsxRuntimeCoreReexport.jsx("span", {
                children: dateFormatUtils_1.formatLocaleDate({
                  date: r,
                  format: "ll",
                  language: i18nextLanguageGetter.getCurrentLanguage()
                }).replace(/(年|月|日)/g, " $1 ").trim()
              })
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: "mx-4",
              children: "•"
            })]
          }) : null, reactJsxRuntimeCoreReexport.jsx("span", {
            children: reactJsxRuntimeCoreReexport.jsx(noSsrWrapper.NoSsrWrapper, {
              children: n("im_bottom_disclaimer")
            })
          })]
        }), x]
      })]
    });
  };
  let w = e => {
    let {
      conversationId: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      isSelectMode: i,
      scene: c,
      exitSelectMode: d
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      isSelectMode: e.isSelectMode,
      scene: e.scene,
      exitSelectMode: e.exitSelectMode
    }), deepEqualityUtil.deepEqual);
    if (i) {
      if (!t) {
        return null;
      }
      if (c === skillMessageActions.messageActions.Delete || c === skillMessageActions.messageActions.Share || c === skillMessageActions.messageActions.Collection) {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            border-b-[0.5px] border-solid border-transparent
            border-b-s-color-border-secondary
          `,
          children: reactJsxRuntimeCoreReexport.jsx(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
            centerContentMaxWidthDelta: 32,
            children: reactJsxRuntimeCoreReexport.jsx(y, {
              title: n("web_selectMsgs_header"),
              t: n,
              titleClassName: "s-font-h3",
              subTitleClassName: "!pb-16 !border-none",
              showSubTitle: false,
              onCancel: () => {
                d();
              }
            })
          })
        });
      }
    }
    return null;
  };
  require.d(exports, {
    ThreadShareHeader: function () {
      return w;
    }
  });
}