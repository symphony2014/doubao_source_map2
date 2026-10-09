// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'LoginButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 411691
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var loginUrlParamHandlers = require("login-url-param-handlers") /*id: 804250*/;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = {
    header: "login-btn-header-CTKsn1"
  };
  function v(e) {
    let {
      type: t = "header",
      page: n,
      className: r,
      loginModalProps: v
    } = e;
    let {
      openLoginModal: g
    } = chatLoginModalManager.loginModalManager();
    let _ = i18nTranslationUtils.useTranslationWithFallback();
    let b = loginUrlParamHandlers.getOrStoreLoginSource();
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("show_login_button", {
        login_method: "default_show",
        login_entrance: "sign_in",
        current_page: typeof n == "function" ? n() : n
      }, {
        withSlardar: true,
        key: ""
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
      type: "secondary",
      className: o(m[t], r),
      onClick: () => {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "click_login_button",
          meta: {
            login_entrance: "sign_in"
          }
        });
        g({
          ...v,
          onSuccess: () => {
            var e;
            if (v != null && (e = v.onSuccess) !== null && e !== undefined) {
              e.call(v);
            }
            chatStoreManager.getStore("sidebarStore").setState({
              isExpand: true
            });
          },
          trackInfo: {
            source: b ?? trackingEventConstants.trackingEvents.SIGN_IN_BTN,
            ...(v == null ? undefined : v.trackInfo)
          }
        });
      },
      "data-testid": "to_login_button",
      children: _("login_button")
    });
  }
  require.d(exports, {
    LoginButton: function () {
      return v;
    }
  });
}