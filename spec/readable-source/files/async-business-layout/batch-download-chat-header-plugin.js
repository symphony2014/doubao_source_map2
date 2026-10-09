// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'batchImageStoreLogic'
// - Resolved require(73795) to 'batch-image-store-logic'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'c' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'responsiveScreenHooks'
// - Resolved require(221846) to 'responsive-screen-hooks'
// - Renamed variable 'h' to 'useEventListenerHook'
// - Resolved require(629504) to 'use-event-listener-hook'
// - Renamed variable 'f' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'p' to 'useLocationWrapper'
// - Resolved require(999635) to 'use-location-wrapper'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'T' to 'useLocationWrapper' (module 999635)
// - Updated imported property 'PG' to 'useIsNarrowScreen' (module 221846)
// - Updated imported property 'S0' to 'imageStore' (module 73795)
// - Updated imported property 'Z' to 'isEqual' (module 550444)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Z' to 'useEventListener' (module 629504)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 521033
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var batchImageStoreLogic = require("batch-image-store-logic") /*id: 73795*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var m = {
    "header-container": "header-container-miMQVk",
    headerContainer: "header-container-miMQVk",
    title: "title-rHLWOB"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let {
      pathname: t
    } = useLocationWrapper.useLocationWrapper();
    let n = reactCoreLibraryReexport.useRef(t);
    let o = responsiveScreenHooks.useIsNarrowScreen();
    let [g, _, b, y] = batchImageStoreLogic.imageStore(e => [e.onUpdateBatchDownloadSelected, e.clearSelectedImageUrl, e.isAllSelectChecked, e.onUpdateAllSelectChecked], deepEqualityUtil_1.isEqual);
    reactCoreLibraryReexport.useEffect(() => {
      if (n.current !== t) {
        g(false);
      }
    }, [t]);
    let w = () => {
      var e;
      _();
      g(false);
      if ((e = chatStoreManager.getStoreState("chatMessageBoxLayoutStore")) !== null && e !== undefined) {
        e.getLayoutSetter().setLayoutAreaVisible("bottom");
      }
      if (b) {
        y(false);
      }
      teaAnalyticsEventTracker.trackEvent("multi_download_button_click", {
        content_type: "pic",
        button_name: "cancel"
      });
    };
    useEventListenerHook.useEventListener("keydown", e => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        if (w != null) {
          w();
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `
        border-b-[0.5px] border-solid border-transparent
        border-b-s-color-border-secondary
      `,
      children: reactJsxRuntimeCoreReexport.jsx(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        containerClassName: m["select-mode"],
        centerContentMaxWidthDelta: 32,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: m["header-container"],
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: m.title,
            children: e("image_download_header_batch")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            onClick: w,
            className: a("s-font-small absolute right-0 text-s-color-text-tertiary cursor-pointer", {
              "mr-18": !o
            }),
            children: e("cancel")
          })]
        })
      })
    });
  };
  let _ = e => {
    let {
      conversationId: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(g, {
      conversationId: t
    });
  };
  class b {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: _,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = _;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    BatchDownloadChatHeaderPlugin: function () {
      return b;
    }
  });
}