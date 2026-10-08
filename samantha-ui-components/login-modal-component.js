// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'LoginModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 722953
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatOriginConstants = require("chat-origin-constants") /*id: 569692*/;
  var chatTextStateUtil = require("chat-text-state-util") /*id: 524020*/;
  var pageVisitTrackHooks = require("page-visit-track-hooks") /*id: 479923*/;
  var chatPageRouteConstants = require("chat-page-route-constants") /*id: 628768*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var gfdataVersionUtils = require("gfdata-version-utils") /*id: 60655*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlQuestionIcon = require("rtl-question-icon") /*id: 429085*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatConfigConstants = require("chat-config-constants") /*id: 577013*/;
  var componentLoginModalConst = require("component-login-modal-const") /*id: 848982*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let E = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        FeedbackModal: e
      } = await Promise.all([require.e("event-emitter-utilities") /*id: 35613*/, require.e("image-viewer-preview-ui") /*id: 23457*/, require.e("flow-feedback") /*id: 31747*/]).then(require.bind(require, "feedback-modal-component") /*id: 640688*/);
      return {
        default: e
      };
    }
  })));
  let b = e => {
    let {
      visible: n = false,
      onVisibleChange: i,
      zIndex: o
    } = e;
    let [a, r] = reactCoreLibraryReexport.useState();
    let c = {
      deviceId: a || "",
      aid: uniParamsManager.uniParamsManager.getParam("aid"),
      logger: loggerServiceCore.defaultLogger,
      appName: componentLoginModalConst.appId,
      appkey: componentLoginModalConst.platformId,
      channel: "web",
      reqQueryParams: {
        version_code: gfdataVersionUtils.formatVersionNumber(chatConfigConstants.chatIdHi)
      }
    };
    let s = async () => {
      try {
        let e = await apiServicesCollection.AccountApiService.GetWebAnonID();
        r(String(e.web_id));
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "NotLoggedFeedbackModal_anonid_fail",
          error: e
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (n) {
        if (!a) {
          s();
        }
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "NotLoggedFeedbackModal_show",
          meta: {
            deviceId: a
          }
        });
      }
    }, [n, a]);
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(E, {
        zIndex: o,
        containerClassName: "feedback-modal-textarea-only-nNSA5Y",
        userAvatar: undefined,
        userId: "",
        showFileList: false,
        showFeedbackList: false,
        submitButtonDisabled: !a,
        getFeedbackList: function () {
          var e = arguments.length;
          var n = Array(e);
          var i = 0;
          for (; i < e; i++) {
            n[i] = arguments[i];
          }
          return apiServicesCollection.SettingApiService.GetFeedbackList(...n);
        },
        visible: n,
        onClose: () => {
          if (i != null) {
            i(false);
          }
        },
        source: "NotLoggedFeedbackModal",
        ...c
      });
    } else {
      return null;
    }
  };
  let k = e => {
    let {
      zIndex: n
    } = e;
    let [i, o] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: reactJsxRuntimeCoreReexport.jsx("p", {
          className: "feedback-entry-wSLjeK",
          children: i18nTranslationUtils.i18nextTranslate("login_window_cannot_login_tooltip")
        }),
        children: reactJsxRuntimeCoreReexport.jsx(semiIconButton.SemiIconButton, {
          "data-testid": "not_login_aboutus_feedback_entry",
          className: "button-nMRxsL",
          theme: "borderless",
          size: "small",
          icon: reactJsxRuntimeCoreReexport.jsx(rtlQuestionIcon.RtlQuestionIcon, {
            className: "text-16 text-s-color-text-disable"
          }),
          onClick: () => {
            teaAnalyticsEventTracker.trackEvent("click_setting_feedback");
            o(true);
          }
        })
      }), reactJsxRuntimeCoreReexport.jsx(b, {
        zIndex: n,
        visible: i,
        onVisibleChange: o
      })]
    });
  };
  var doubaoLegalUrls = require("doubao-legal-urls") /*id: 113045*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var thirdLoginListSelector = require("third-login-list-selector") /*id: 98586*/;
  var accountLoginCheckUtility = require("account-login-check-utility") /*id: 586944*/;
  var authFlowConstants = require("auth-flow-constants") /*id: 199931*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var ocpcEventReportingService = require("ocpc-event-reporting-service") /*id: 696329*/;
  var i18nLanguageInit = require("i18n-language-init") /*id: 385211*/;
  var flowLoginStorageFlag = require("flow-login-storage-flag") /*id: 966634*/;
  var userProfileServiceActions = require("user-profile-service-actions") /*id: 210590*/;
  var chromeExtensionMessageSender = require("chrome-extension-message-sender") /*id: 875713*/;
  var chatFgConfigManager = require("chat-fg-config-manager") /*id: 994655*/;
  let F = e => {
    let {
      navigatePath: n,
      navigateQuery: i,
      customNavigate: t
    } = e;
    return async e => {
      i18nLanguageInit.checkLanguageChanged();
      flowLoginStorageFlag.setLoginFlag();
      ocpcEventReportingService.reportOcpcEvent(e.new_user ? "register" : "login");
      ocpcEventReportingService.trackMicrosoftChannelRegistration(e);
      chatFgConfigManager.getFgConfig();
      let o = infraUtilFunctions.invokeIfFunction(n);
      let a = i ? infraUtilFunctions.invokeIfFunction(i) : {};
      let r = urlParamUtils.mergeUrlParams(o, {
        ...a
      });
      if (e.first_login_app) {
        await userProfileServiceActions.genDefaultProfile(e.user_id_str);
      }
      if (t) {
        t(r);
      } else {
        location.assign(xssContentSanitizer.sanitizeUrl(r, null, {
          logType: "js.window.location",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WmhSemwyW$ROTmRt%ll%bXhN$jJob1ltM$NjMXB%T$hOa%1t%ndZbWt4ZW1SWFRtc*FXRT%2$Ec1%2$sbFlTbT$r$0%wOQ"
        }));
      }
      chromeExtensionMessageSender.updateAuthInfo(true);
    };
  };
  var loginContentComponent = require("login-content-component") /*id: 791815*/;
  let W = reactCoreLibraryReexport.forwardRef(function (e, n) {
    let {
      navigatePath: i,
      navigateQuery: s,
      onBeforeLoginSuccess: l,
      navigate: d,
      logoutNavigate: _,
      showFeedbackEntry: u = false,
      children: h,
      enableQrcode: m,
      onPageTypeChange: p,
      ...g
    } = e;
    let y = infraUtilFunctions.invokeIfFunction(i);
    let f = s ? infraUtilFunctions.invokeIfFunction(s) : {};
    let v = chatTextStateUtil.getContent(true);
    let [w, E] = reactCoreLibraryReexport.useState(authFlowConstants.authFlowConstants.LOGIN);
    let [b] = reactCoreLibraryReexport.useState(w);
    let L = e => {
      E(e);
      if (p != null) {
        p(e);
      }
    };
    pageVisitTrackHooks.useCollectVisit(() => w === authFlowConstants.authFlowConstants.LOGIN ? chatPageRouteConstants.pageRoutes.LOGIN_HOME : w === authFlowConstants.authFlowConstants.CODE ? chatPageRouteConstants.pageRoutes.VERIFY_CODE : undefined, [w]);
    reactCoreLibraryReexport.useImperativeHandle(n, () => ({
      pageType: w,
      backToPrev: () => {
        L(b);
      },
      backToLogin: () => {
        L(authFlowConstants.authFlowConstants.LOGIN);
      }
    }), [w]);
    let T = F({
      navigatePath: i,
      navigateQuery: s,
      customNavigate: d
    });
    let I = async e => {
      if ((l == null ? undefined : l(e)) !== false) {
        await T(e);
      }
    };
    let O = thirdLoginListSelector.getLoginList(accountLoginCheckUtility.getLoginOrder);
    return reactJsxRuntimeCoreReexport.jsx(loginContentComponent.LoginContent, {
      ...g,
      pageType: w,
      onPageTypeChange: L,
      privacyPolicyLink: doubaoLegalUrls.privacyUrl,
      termsOfServiceLink: doubaoLegalUrls.termsUrl,
      accountTermsOfServiceLink: doubaoLegalUrls.graceLegalUrl,
      thirdLoginKeyList: O,
      logoutNavigator: _ ?? d,
      thirdNavigatePath: urlParamUtils.mergeUrlParams(y, {
        ...f,
        ...(v && {
          [chatOriginConstants.originConstants.ORIGIN_LANDING]: v
        })
      }),
      onLoginSuccess: I,
      loginContentChildren: u && reactJsxRuntimeCoreReexport.jsx(k, {
        zIndex: 1020
      }),
      enableQrcode: m,
      children: h && (e => h({
        pageType: w,
        element: e
      }))
    });
  });
  require.d(exports, {
    LoginModal: function () {
      return W;
    }
  });
}