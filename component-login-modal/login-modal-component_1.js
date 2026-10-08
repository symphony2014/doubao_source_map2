// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatPageRouteConstants'
// - Resolved require(628768) to 'chat-page-route-constants'
// - Renamed variable 'a' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'l' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable '_' to 'storageWrapperWithFallback'
// - Resolved require(319763) to 'storage-wrapper-with-fallback'
// - Renamed variable 'u' to 'spaceLayoutComponent'
// - Resolved require(765807) to 'space-layout-component'
// - Renamed variable 'c' to 'semiButtonWrapperComponent'
// - Resolved require(654274) to 'semi-button-wrapper-component'
// - Renamed variable 'd' to 'typographyWrapperModule'
// - Resolved require(954330) to 'typography-wrapper-module'
// - Renamed variable 's' to 'rtlChevronLeftIcon'
// - Resolved require(400992) to 'rtl-chevron-left-icon'
// - Renamed variable 'v' to 'loginModalComponent'
// - Resolved require(722953) to 'login-modal-component'
// - Renamed variable 'g' to 'thirdLoginListSelector'
// - Resolved require(98586) to 'third-login-list-selector'
// - Renamed variable 'f' to 'loginUrlParamHandlers'
// - Resolved require(804250) to 'login-url-param-handlers'
// - Renamed variable 'p' to 'authFlowConstants'
// - Resolved require(199931) to 'auth-flow-constants'
// - Renamed variable 'w' to 'trackingEventConstants'
// - Resolved require(402894) to 'tracking-event-constants'
// - Renamed variable 'h' to 'businessLayoutStyles'
// - Resolved require(162966) to 'business-layout-styles'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'x' to 'trackingEvents' (module 402894)
// - Updated imported property '$C' to 'extractLoginSuccessBackUrl' (module 804250)
// - Updated imported property 'o6' to 'routeNewChat' (module 323118)
// - Updated imported property 'fU' to 'routeChatRoot' (module 323118)
// - Updated imported property 'B' to 'getLoginList' (module 98586)
// - Updated imported property 'K' to 'authFlowConstants' (module 199931)
// - Updated imported property 'aG' to 'pageRoutes' (module 628768)
// - Updated imported property 'J' to 'LoginModal' (module 722953)
// - Updated imported property 'yQ' to 'LocalStorageWrapper' (module 319763)
// - Updated imported property 'Z' to 'Space' (module 765807)
// - Updated imported property 'Z' to 'SemiButtonWrapper' (module 654274)
// - Updated imported property 'Z' to 'ChevronLeftIcon' (module 400992)
// - Updated imported property 'Z' to 'layoutStyles' (module 162966)
// - Updated imported property 'Z' to 'TypographyWrapper' (module 954330)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: component-login-modal.a86639c0.js
         * chunkId: 63509
         * moduleId: 460826
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatPageRouteConstants = require("chat-page-route-constants") /*id: 628768*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var spaceLayoutComponent = require("space-layout-component") /*id: 765807*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var rtlChevronLeftIcon = require("rtl-chevron-left-icon") /*id: 400992*/;
  var loginModalComponent = require("login-modal-component") /*id: 722953*/;
  var thirdLoginListSelector = require("third-login-list-selector") /*id: 98586*/;
  var loginUrlParamHandlers = require("login-url-param-handlers") /*id: 804250*/;
  var authFlowConstants = require("auth-flow-constants") /*id: 199931*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var businessLayoutStyles = require("business-layout-styles") /*id: 162966*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      loginNavigateRoute: b,
      loginNavigateQuery: E,
      thirdRedirectMethod: N,
      thirdForceRedirect: k,
      trackInfo: L,
      onSuccess: x,
      onCancel: O,
      navigate: G,
      titleKey: Z
    } = e;
    let j = i18nTranslationUtils.useTranslationWithFallback();
    let A = (L == null ? undefined : L.source) === trackingEventConstants.trackingEvents.UG;
    let y = {
      login_entrance: (L == null ? undefined : L.login_entrance) || (L == null ? undefined : L.source),
      bot_id: L == null ? undefined : L.bot_id,
      is_from_ug: A ? "1" : "0",
      is_from_share: loginUrlParamHandlers.extractLoginSuccessBackUrl() === chatRouteConstants.routeNewChat ? "1" : "0",
      trigger_platform: (L == null ? undefined : L.trigger_platform) ?? "web",
      trigger_app: (L == null ? undefined : L.trigger_app) ?? "doubao",
      login_skill_id: L == null ? undefined : L.login_skill_id
    };
    if (L == null ? undefined : L.previous_page) {
      Object.assign(y, {
        previous_page: L == null ? undefined : L.previous_page
      });
    }
    let D = reactCoreLibraryReexport.useRef(null);
    let K = thirdLoginListSelector.getLoginList();
    reactCoreLibraryReexport.useEffect(() => {
      if (D.current?.pageType === authFlowConstants.authFlowConstants.LOGIN) {
        teaAnalyticsEventTracker.trackEvent("enter_page", {
          page: chatPageRouteConstants.pageRoutes.LOGIN_HOME,
          current_page: chatPageRouteConstants.pageRoutes.LOGIN_HOME,
          previous_page: (L == null ? undefined : L.fromPage) || "other",
          ...y
        }, {
          withSlardar: true,
          key: ""
        });
      } else {
        teaAnalyticsEventTracker.trackEvent("enter_page", {
          page: chatPageRouteConstants.pageRoutes.VERIFY_CODE,
          current_page: chatPageRouteConstants.pageRoutes.VERIFY_CODE,
          is_tts: 0,
          ...y
        }, {
          withSlardar: true,
          key: ""
        });
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(loginModalComponent.LoginModal, {
      ref: D,
      navigatePath: b ?? chatRouteConstants.routeChatRoot,
      navigateQuery: E,
      onBeforeLoginSuccess: x,
      trackMeta: y,
      onAgeGateCancel: () => {
        if (D.current?.pageType === authFlowConstants.authFlowConstants.NEUTRAL_AGE_GATE) {
          teaAnalyticsEventTracker.trackEvent("age_verification_window_click", {
            type: storageWrapperWithFallback.LocalStorageWrapper.getItem("platform") || "",
            click_from: "back"
          });
        }
        if (O != null) {
          O();
        }
      },
      showFeedbackEntry: true,
      navigate: G,
      thirdRedirectMethod: N,
      thirdForceRedirect: k,
      brandName: j("brandName_doubao"),
      thirdLoginKeyList: K,
      titleKey: Z,
      children: e => {
        let {
          pageType: n,
          element: i
        } = e;
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          className: n === authFlowConstants.authFlowConstants.LOGIN ? "" : "mt-18 mb-30 px-20",
          "data-testid": "login_content",
          children: [(() => {
            if (n === authFlowConstants.authFlowConstants.CODE) {
              let e = {
                eventName: "click_verify_code_back",
                title: "enter_digit_code",
                backHandler: () => {
                  var e;
                  if ((e = D.current) !== null && e !== undefined) {
                    e.backToPrev();
                  }
                }
              };
              return reactJsxRuntimeCoreReexport.jsxs(spaceLayoutComponent.Space, {
                className: "mb-34",
                children: [reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
                  icon: reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
                    autoFitRTL: true,
                    className: businessLayoutStyles.layoutStyles["back-icon"]
                  }),
                  className: "icon-button",
                  onClick: () => {
                    teaAnalyticsEventTracker.trackEvent(e.eventName);
                    e.backHandler();
                  }
                }), reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Title, {
                  heading: 5,
                  className: businessLayoutStyles.layoutStyles.h5,
                  children: j(e.title)
                })]
              });
            }
            return null;
          })(), n === authFlowConstants.authFlowConstants.LOGIN || n === authFlowConstants.authFlowConstants.NEUTRAL_AGE_GATE ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: i
          }) : n === authFlowConstants.authFlowConstants.CODE ? reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex flex-col items-center",
            children: i
          }) : null]
        });
      }
    });
  };
  var E = b;
  require.r(exports);
  require.d(exports, {
    default: function () {
      return E;
    },
    LoginModal: function () {
      return b;
    }
  });
}