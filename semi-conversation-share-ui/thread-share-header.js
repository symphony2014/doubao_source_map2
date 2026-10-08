// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'ThreadShareHeader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 550159
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var rtlIconComponent_1 = require("rtl-icon-component_1") /*id: 66332*/;
  var noSsrWrapper = require("no-ssr-wrapper") /*id: 647730*/;
  var f = {
    "s-skeleton": "s-skeleton-W4DES0",
    "s-skeleton-immerse": "s-skeleton-immerse-qlYXFp"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      title: t,
      t: n,
      createTime: o,
      loading: m,
      onEdit: v,
      onCancel: g,
      noHorizonMargin: b,
      className: y,
      titleClassName: _,
      subTitleClassName: x,
      showSubTitle: w = true,
      appendExtraInfo: k,
      isImmerseMode: E = false
    } = e;
    let j = responsiveScreenHooks.useIsNarrowScreen();
    reactCoreLibraryReexport.useEffect(() => {
      performanceStoreHook.usePerformanceStore.getState().addDurationPoint("thread_share_header_mount");
    }, []);
    useEventListenerHook.useEventListener("keydown", e => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        if (g != null) {
          g();
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: i("share-header-ui", y),
      children: [reactJsxRuntimeCoreReexport.jsxs("h1", {
        className: i("s-font-h1 mt-16 tracking-wide flex items-center", w ? "mb-4" : "mb-16", {
          "ml-10": !b
        }, _),
        "data-testid": "thread_share_title",
        children: [m || !t ? n("web_chat_share_message") : t, v ? reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {
          className: `
              ml-4 cursor-pointer p-2 text-16 text-s-color-text-quaternary
            `,
          onClick: v
        }) : null, g ? reactJsxRuntimeCoreReexport.jsx("div", {
          onClick: g,
          className: i("s-font-small absolute right-0 text-s-color-text-tertiary cursor-pointer", {
            "mr-18": !j
          }),
          children: n("cancel")
        }) : null]
      }), w && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: i("pb-36 border-solid border-transparent border-b-[0.5px] border-b-s-color-border-secondary", "s-font-xs text-s-color-text-quaternary", {
          "ml-10": !b
        }, x),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [o ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx(noSsrWrapper.NoSsrWrapper, {
              fallback: reactJsxRuntimeCoreReexport.jsx("span", {
                className: i(f["s-skeleton"], "inline-block w-108 rounded-4", {
                  [f["s-skeleton-immerse"]]: E
                })
              }),
              children: o && reactJsxRuntimeCoreReexport.jsx("span", {
                children: dateFormatUtils_1.formatLocaleDate({
                  date: o,
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
        }), k]
      })]
    });
  };
  require.d(exports, {
    ThreadShareHeader: function () {
      return m;
    }
  });
}