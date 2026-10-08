// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'useLoginCheck'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40579.078245ff.js
         * chunkId: 40579
         * moduleId: 659344
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var ocpcEventReportingService = require("ocpc-event-reporting-service") /*id: 696329*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatErrorEventManager = require("chat-error-event-manager") /*id: 211398*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var taskStatusConstants_2 = require("task-status-constants_2") /*id: 654066*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var flowLoginStorageFlag = require("flow-login-storage-flag") /*id: 966634*/;
  var accountLoginCheckUtility = require("account-login-check-utility") /*id: 586944*/;
  var chatRuntimeLogoutHandler = require("chat-runtime-logout-handler") /*id: 642104*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var queryStringUtils_2_1 = require("query-string-utils_2_1") /*id: 698435*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var i18nLanguageInit = require("i18n-language-init") /*id: 385211*/;
  var teaIdentityManager = require("tea-identity-manager") /*id: 929669*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var slardarMonitorManager = require("slardar-monitor-manager") /*id: 309069*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var runtimeContextResolver = require("runtime-context-resolver") /*id: 761917*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactErrorBoundary = require("react-error-boundary") /*id: 528804*/;
  var loginUrlParamHandlers = require("login-url-param-handlers") /*id: 804250*/;
  var userProfileServiceActions = require("user-profile-service-actions") /*id: 210590*/;
  var chromeExtensionMessageSender = require("chrome-extension-message-sender") /*id: 875713*/;
  var authProcessStepEnum = require("auth-process-step-enum") /*id: 849248*/;
  var loginCheckHandler = require("login-check-handler") /*id: 750478*/;
  let P = e => {
    let {
      navigatePath: t,
      loginRoute: n = chatRouteConstants.routeChatHome,
      authFailedAction: o,
      getAuthState: i,
      onAuthUpdate: l,
      exemptionNetworkErrorBoundary: u = false,
      checkLogin: c
    } = e;
    let {
      showBoundary: d
    } = reactErrorBoundary.useErrorBoundary();
    let f = useNavigateRuntimeResolver.useNavigateResolver();
    let {
      Tea: _
    } = runtimeContextResolver.useRuntimeContext().Plugins;
    let p = () => {
      if (location.pathname !== chatRouteConstants.routeChatHome) {
        let e = n === chatRouteConstants.routeChatHome ? loginUrlParamHandlers.appendGhhParam(loginUrlParamHandlers.appendLoginSuccessBackUrl(chatRouteConstants.routeChatHome, location.pathname, location.search)) : loginUrlParamHandlers.appendLoginSuccessBackUrl(n, t, location.search);
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "olympus_login_to_login",
          meta: {
            url: e
          }
        });
        let o = window.location.origin;
        let i = e.startsWith("/") ? `${o}${e}` : `${o}/${e}`;
        window.location.href = xssContentSanitizer.sanitizeUrl(i, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WmhSemwyW$ROTmRt%ll%bXhN$jBZeFpF-zRkR0pIT1c1aFZ6%jFaRWhP-%dOdFpERmpkejA5"
        });
      }
    };
    let g = e => {
      var n;
      var r;
      var o;
      if (!t) {
        return;
      }
      let i = (o = queryStringUtils_2_1.queryStringUtils.parseUrl(t)) === null || o === undefined ? undefined : (r = o.url) === null || r === undefined ? undefined : (n = r.replace) === null || n === undefined ? undefined : n.call(r, /\/$/, "");
      if (!location.pathname.includes(i)) {
        f(t);
      }
    };
    let P = e => {
      i18nLanguageInit.checkLanguageChanged();
      if (e) {
        teaIdentityManager.setLoginStatus(_, e.user_id_str, false);
        slardarMonitorManager.slardarManager.addContexts({
          account_user_id: e.user_id_str,
          user_is_login: "1"
        });
        storageWrapperWithFallback.LocalStorageWrapper.setItem("for_ban_appeal_sec_user_id", e.sec_user_id);
        chatUserInfoActions.setUserInfo(e);
        userProfileServiceActions.getUserProfile(e.user_id_str);
        if (e.first_login_app && FEATURE_USER_PROFILE) {
          userProfileServiceActions.genDefaultProfile(e.user_id_str);
        }
      } else {
        loggerServiceCore.defaultLogger.persist.error({
          error: Error(),
          eventName: "olympics_login_success_without_user_info"
        });
      }
      ocpcEventReportingService.trackMicrosoftChannelRegistration(e);
      g(e);
      chromeExtensionMessageSender.updateAuthInfo(true);
    };
    let T = loginCheckHandler.createLoginChecker({
      navigate: f,
      checkLogin: c,
      onNetworkError: e => {
        if (!u) {
          d(e);
        }
      },
      onPassportError: async () => {
        var e;
        let t = isFunctionUtil_1.isFunction(o) ? await o(location.pathname) : o;
        if (t !== "stay") {
          if ((e = flowAccountModule.getFlowAccount().passportApi) !== null && e !== undefined) {
            e.triggerAfterLogout();
          }
          if (t !== "logout_but_stay") {
            p();
          }
        }
      },
      onUnknownError: async () => {
        if ((isFunctionUtil_1.isFunction(o) ? await o(location.pathname) : o) !== "stay") {
          p();
        }
      },
      onError: () => {
        if (l != null) {
          l(authProcessStepEnum.authStepEnum.Failed);
        }
      },
      onBeforeAuth: () => {
        if (l != null) {
          l(authProcessStepEnum.authStepEnum.InCheckLogin);
        }
      }
    });
    return async () => {
      try {
        if (l != null) {
          l(authProcessStepEnum.authStepEnum.BeforeAll);
        }
        let e = await T();
        if (e.isSuccess) {
          let {
            userInfo: t
          } = e;
          P(t);
        } else {
          chatUserInfoActions.markUserInfoLoaded();
          if (l != null) {
            l(authProcessStepEnum.authStepEnum.Failed);
          }
        }
        return e;
      } finally {
        if ((i == null ? undefined : i()) !== authProcessStepEnum.authStepEnum.Failed) {
          if (l != null) {
            l(authProcessStepEnum.authStepEnum.Finished);
          }
        }
      }
    };
  };
  let T = e => {
    let {
      navigatePath: t,
      loginRoute: n = chatRouteConstants.routeChatHome,
      authFailedAction: m,
      getAuthState: v,
      onAuthUpdate: h,
      checkLogin: E = accountLoginCheckUtility.checkLogin,
      exemptionNetworkErrorBoundary: y = false
    } = e;
    let R = P({
      checkLogin: E,
      navigatePath: t,
      loginRoute: n,
      authFailedAction: m,
      getAuthState: v,
      onAuthUpdate: h,
      exemptionNetworkErrorBoundary: y
    });
    let O = useLocationWrapper.useLocationWrapper();
    let N = e => {
      if (e.key === flowLoginStorageFlag.loginFlagKey && isNullCheck.isNull(e.newValue) && O.pathname !== chatRouteConstants.routeChatHome && m !== "stay") {
        flowAccountModule.getFlowAccount().passportApi.triggerAfterLogout();
        let e = `${window.location.origin}${chatRouteConstants.routeChatHome}`;
        window.location.href = xssContentSanitizer.sanitizeUrl(e, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WmhSemwyW$ROTmRt%ll%bXhN$jA1dldsZE9ja3h-%mp*a1IyZDFaRWhP-%dOdFpERmpkejA5"
        });
      }
    };
    let A = async () => {
      let e = eventReportingService.createEventReporter({
        eventName: "check_auth"
      });
      userInfoStatusSelectors.subscribeToUserInfoStatus(e => {
        if (e === taskStatusConstants_2.TaskStatus.Failed) {
          flowLoginStorageFlag.removeLoginFlag();
        } else if (e === taskStatusConstants_2.TaskStatus.Success) {
          flowLoginStorageFlag.setLoginFlag();
        }
      });
      let t = await R();
      if (!t) {
        e.error({
          reason: "autoLogin fail"
        });
        return;
      }
      (t.isSuccess ? e.success : e.error)({
        reason: t.isSuccess ? "autoLogin success" : "autoLogin fail",
        error: t.isSuccess ? undefined : t.error,
        meta: {
          type: "checkLogin"
        }
      });
      if (t == null ? undefined : t.isSuccess) {
        ocpcEventReportingService.reportOcpcEvent(t.userInfo?.new_user ? "register" : "login");
      }
      if (t && !t.isSuccess) {
        chatErrorEventManager.chatEventEmitter.clear();
      }
      chatErrorEventManager.chatEventEmitter.start();
      window.addEventListener("storage", N);
    };
    let S = () => {
      window.removeEventListener("storage", N);
    };
    reactCoreLibraryReexport.useEffect(() => {
      chatRuntimeLogoutHandler.setupLogoutHandler();
      A();
      return () => {
        S();
      };
    }, []);
  };
  require.d(exports, {
    useLoginCheck: function () {
      return T;
    }
  });
}