// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'd' to 'browserThemeManager'
// - Resolved require(542418) to 'browser-theme-manager'
// - Renamed variable 'c' to 'globalConfigUtils'
// - Resolved require(115973) to 'global-config-utils'
// - Renamed variable 'u' to 'tagComponent'
// - Resolved require(332146) to 'tag-component'
// - Renamed variable 'p' to 'universalButtonWrapper'
// - Resolved require(299462) to 'universal-button-wrapper'
// - Renamed variable 'm' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable '_' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'f' to 'networkStateEventCollector'
// - Resolved require(67722) to 'network-state-event-collector'
// - Renamed variable 'g' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'v' to 'reactReduxCore'
// - Resolved require(509563) to 'react-redux-core'
// - Renamed variable 'y' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 'w' to 'toastNotificationHandler'
// - Resolved require(669090) to 'toast-notification-handler'
// - Renamed variable 'P' to 'userEnvironmentUtils'
// - Resolved require(107339) to 'user-environment-utils'
// - Renamed variable 'k' to 'docxPaywallPermissions'
// - Resolved require(430531) to 'docx-paywall-permissions'
// - Renamed variable 'Z' to 'useThemeModeHook'
// - Resolved require(841739) to 'use-theme-mode-hook'
// - Renamed variable 'b' to 'docxSubscriptionTypes'
// - Resolved require(682485) to 'docx-subscription-types'
// - Renamed variable 'E' to 'collabTriggersProvider'
// - Resolved require(164012) to 'collab-triggers-provider'
// - Renamed variable 'N' to 'docEditorCommandConstants'
// - Resolved require(293676) to 'doc-editor-command-constants'
// - Renamed variable 'R' to 'keyboardShortcutHandlerResolver'
// - Resolved require(848104) to 'keyboard-shortcut-handler-resolver'
// - Renamed variable 'C' to 'formattedTextRenderer'
// - Resolved require(77044) to 'formatted-text-renderer'
// - Renamed variable 'S' to 'docComponentFeatureFlags'
// - Resolved require(475581) to 'doc-component-feature-flags'
// - Renamed variable 'T' to 'docPaidSubscriptionApi'
// - Resolved require(267172) to 'doc-paid-subscription-api'
// - Renamed variable 'A' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'M' to 'docxEventCollector'
// - Resolved require(477626) to 'docx-event-collector'
// - Renamed variable 'z' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'r3' to 'wrappedCollector' (module 477626)
// - Updated imported property 'F' to 'useThemeMode' (module 841739)
// - Updated imported property 'f8' to 'ThemeMode' (module 542418)
// - Updated imported property 'i' to 'collabProvider' (module 164012)
// - Updated imported property 'N7' to 'getPaidReadingSettings' (module 267172)
// - Updated imported property 'fK' to 'createPaidReadingOrder' (module 267172)
// - Updated imported property '_c' to 'isAnonymousAccess' (module 107339)
// - Updated imported property 'C' to 'showToast' (module 669090)
// - Updated imported property 'G' to 'collectNetworkState' (module 67722)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'V' to 'TagComponent' (module 332146)
// - Updated imported property 'zx' to 'UniversalButton' (module 299462)
// - Updated imported property 'k' to 'FormattedText' (module 77044)
// - Updated imported property 'o' to 'SubscriptionTypes' (module 682485)
// - Updated imported property 'R' to 'resolveShortcutHandler' (module 848104)
// - Updated imported property 'ti' to 'presentationMode' (module 293676)
// - Updated imported property 'Um' to 'isRoomsAgenda' (module 475581)
// - Updated imported property 'ak' to 'isVcAgenda' (module 475581)
// - Updated imported property 'uE' to 'isCalendarAgenda' (module 475581)
// - Updated imported property 'Rv' to 'isFeishuProduct' (module 115973)
// - Updated imported property 'UT' to 'isPaywallNeeded' (module 430531)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_paid_subscription.2a41bf28.js
         * chunkId: 60668
         * moduleId: 912206
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  var a;
  var s;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var globalConfigUtils = require("global-config-utils") /*id: 115973*/;
  var tagComponent = require("tag-component") /*id: 332146*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var h = classnamesUtils;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var toastNotificationHandler = require("toast-notification-handler") /*id: 669090*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docxPaywallPermissions = require("docx-paywall-permissions") /*id: 430531*/;
  var useThemeModeHook = require("use-theme-mode-hook") /*id: 841739*/;
  var docxSubscriptionTypes = require("docx-subscription-types") /*id: 682485*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var keyboardShortcutHandlerResolver = require("keyboard-shortcut-handler-resolver") /*id: 848104*/;
  var formattedTextRenderer = require("formatted-text-renderer") /*id: 77044*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var docPaidSubscriptionApi = require("doc-paid-subscription-api") /*id: 267172*/;
  (n = {})[n.PERPETUAL = 1] = "PERPETUAL";
  n[n.ONE_YEAR = 2] = "ONE_YEAR";
  n[n.HALF_YEAR = 3] = "HALF_YEAR";
  n[n.ONE_QUARTER = 4] = "ONE_QUARTER";
  n[n.ONE_MONTH = 5] = "ONE_MONTH";
  let L = n;
  (r = {})[r.PC = 1] = "PC";
  r[r.H5 = 2] = "H5";
  r[r.APP = 3] = "APP";
  r[r.QR_CODE = 4] = "QR_CODE";
  r[r.WX_JSSDK = 5] = "WX_JSSDK";
  let x = r;
  (a = {})[a.ANDROID = 1] = "ANDROID";
  a[a.IOS = 2] = "IOS";
  let D = a;
  (s = {})[s.ServerException = 5000000] = "ServerException";
  s[s.ParamEmptyOrInvalid = 4000001] = "ParamEmptyOrInvalid";
  s[s.SignatureError = 4000002] = "SignatureError";
  s[s.SubscriptionRepeat = 4000003] = "SubscriptionRepeat";
  s[s.OrderCreateError = 4000004] = "OrderCreateError";
  s[s.OverseaForbiddent = 4000005] = "OverseaForbiddent";
  s[s.SKUInvalid = 4000006] = "SKUInvalid";
  s[s.NoPermission = 4030001] = "NoPermission";
  s[s.SKUNotFound = 4040001] = "SKUNotFound";
  s[s.SourceDeleted = 4040002] = "SourceDeleted";
  s[s.OperationFrequently = 4290001] = "OperationFrequently";
  s[s.Success = 0] = "Success";
  s[s.Unknown = 1] = "Unknown";
  let O = s;
  let $ = {
    [O.ServerException]: t("LarkCCM_Docs_Paywall_FallBackRetry_Error", {
      errorCode: O.ServerException
    }),
    [O.ParamEmptyOrInvalid]: t("LarkCCM_Docs_Paywall_FallBack_Error", {
      errorCode: O.ParamEmptyOrInvalid
    }),
    [O.SubscriptionRepeat]: t("LarkCCM_Docs_Paywall_AlreadyPurchased_Error"),
    [O.OrderCreateError]: t("LarkCCM_Docs_Paywall_OrderFail_Error"),
    [O.NoPermission]: t("LarkCCM_Docs_Paywall_NoPermission_Error"),
    [O.SKUNotFound]: t("LarkCCM_Docs_Paywall_FallBackRetry_Error", {
      errorCode: O.SKUNotFound
    }),
    [O.SKUInvalid]: t("LarkCCM_Docs_Paywall_FallBackRetry_Error", {
      errorCode: O.SKUInvalid
    }),
    [O.SourceDeleted]: t("LarkCCM_Docs_Paywall_NoExist_Error"),
    [O.OperationFrequently]: t("LarkCCM_Docs_Paywall_ActionTooOften_Error")
  };
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let F = browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp ? objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.ccm_docx_paywall_config.backListRegexForPayFunction") : objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_docx_paywall_config.backListRegexForPayFunction");
  let I = e => {
    switch (e) {
      case L.PERPETUAL:
        return t("LarkCCM_Docs_Paywall_DurationPer_Option");
      case L.ONE_YEAR:
        return t("LarkCCM_Docs_Paywall_Duration1yr_Option");
      case L.HALF_YEAR:
        return t("LarkCCM_Docs_Paywall_Duration6m_Option");
      case L.ONE_QUARTER:
        return t("LarkCCM_Docs_Paywall_Duration1q_Option");
      case L.ONE_MONTH:
        return t("LarkCCM_Docs_Paywall_Duration1m_Option");
      default:
        return "";
    }
  };
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function B(e, i, o, n) {
    docxEventCollector.wrappedCollector(`ccm_docs_pay_for_read_${e}`, {
      sku_id: i,
      ...o
    }, n);
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function U(e, i, o) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var n = o.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = o;
    }
    return e;
  }
  let j = () => {
    let e = useThemeModeHook.useThemeMode() === browserThemeManager.ThemeMode.DARK ? "dark" : "light";
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: h(`paid-subscription-wrap-mask ${e}`)
    });
  };
  class W extends reactCoreLibraryReexport.Component {
    componentDidMount() {
      if (this.props.needPaid) {
        this.initData();
      }
      this.addListener();
    }
    get osType() {
      if (browserEnvironmentDetectionUtils.browserDetector.isIOS) {
        return D.IOS;
      } else if (browserEnvironmentDetectionUtils.browserDetector.isAndroid) {
        return D.ANDROID;
      } else {
        return undefined;
      }
    }
    get tradeType() {
      if (browserEnvironmentDetectionUtils.browserDetector.isWxWebview && browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isIPad) {
        return x.WX_JSSDK;
      } else if (browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isIPad) {
        return x.H5;
      } else {
        return x.PC;
      }
    }
    componentWillUnmount() {
      this.removeListener();
    }
    disableTranslate() {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
        window.flow.biz.translate.setupTranslation({
          enableTranslate: false
        });
      }
    }
    closeCollab() {
      var e;
      var i;
      var o;
      let n = (e = this.props.blockManager) === null || e === undefined ? undefined : e.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      });
      if (n == null ? undefined : n.isInited) {
        this.closeSync();
      } else if (n != null && (o = n.signalService) !== null && o !== undefined && (i = o.colabInitSignal) !== null && i !== undefined) {
        i.subscribe(this.closeSync);
      }
    }
    async initData() {
      let e = await docPaidSubscriptionApi.getPaidReadingSettings();
      if (!e) {
        return;
      }
      let {
        amount: i,
        period: o,
        skuId: n
      } = e;
      this.setState({
        amount: i,
        period: o
      });
      this.skuId = n;
      this.checkAutoOpenPaid();
      this.closeCollab();
      this.disableTranslate();
      B("view", n, {});
    }
    checkAutoOpenPaid() {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        return;
      }
      let {
        auto_open_paid_page: e,
        ...i
      } = platformDocUtils.o0s.parseQuery(platformDocUtils.m8M.location.search);
      if (e === "1") {
        platformDocUtils.m8M.replace({
          search: platformDocUtils.o0s.formatQuery(i)
        });
        if (!userEnvironmentUtils.isAnonymousAccess() && this.props.needPaid) {
          this.handlePaid();
        }
      }
    }
    handlePaidButtonClick() {
      if (this.isOffline()) {
        toastNotificationHandler.showToast({
          pcToastType: "error",
          message: t("common.network_error"),
          duration: 3000,
          mobileToastType: "fail"
        });
        return;
      }
      if (userEnvironmentUtils.isAnonymousAccess()) {
        this.handleAnonymousLogin();
      } else {
        this.handlePaid();
      }
    }
    isOffline() {
      return !networkStateEventCollector.collectNetworkState();
    }
    getLoginEvent(e) {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        return e.CLICK_LOGIN_BTN;
      } else {
        return e.LOGIN_ANONYMOUS_PAID;
      }
    }
    async handleAnonymousLogin() {
      if (!this.state.isFecthingComp) {
        this.setState({
          isFecthingComp: true
        });
        try {
          let {
            emitLoginEvent: e,
            Events: i
          } = await platformDocUtils.FCV();
          let o = this.getLoginEvent(i);
          e(o);
        } catch (e) {}
        this.setState({
          isFecthingComp: false
        });
      }
    }
    async handlePaid() {
      this.setState({
        loading: true
      });
      try {
        let o = await docPaidSubscriptionApi.createPaidReadingOrder({
          skuId: this.skuId,
          tradeType: this.tradeType,
          osType: this.osType
        });
        B("click", this.skuId, {
          order_id: (o == null ? undefined : o.data?.order_id) || null,
          click: "pay_now",
          err_code: null
        }, true);
        if (o && o.data?.payment_data) {
          let e = window.open(xssContentSanitizer.sanitizeUrl(o.data.payment_data, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTTBKb1lWZFJkR016$m1sak1rNT$Z$mhDT%d*WE9-$k1N$%pvW$Zk%1ZH%lhTbnBaTTBwd1kwaFNjR0l5TkhWa1NFNDBX$mhL-m1SW$R%MD0"
          }), "_self");
          if (e) {
            e.opener = null;
          }
        }
      } catch (e) {
        (function (e) {
          let i = e === undefined ? t("err_code.unknown") : $[e] || t("LarkCCM_Docs_Paywall_FallBack_Error", {
            errorCode: e
          });
          toastNotificationHandler.showToast({
            pcToastType: "error",
            message: i,
            duration: browserEnvironmentDetectionUtils.browserDetector.isH5 ? 3 : 3000,
            mobileToastType: "fail"
          });
        })(e == null ? undefined : e.code);
        B("click", this.skuId, {
          order_id: (e == null ? undefined : e.data?.order_id) || null,
          click: "pay_now",
          err_code: (e == null ? undefined : e.code) !== 0 ? e.code : null
        });
      }
      this.setState({
        loading: false
      });
    }
    componentWillUpdate(e) {
      if (this.props.needPaid !== e.needPaid && e.needPaid) {
        this.initData();
      }
    }
    checkCanUsePayByUA() {
      if (!F) {
        return true;
      }
      try {
        return !new RegExp(F).test(window.navigator.userAgent);
      } catch (e) {
        return true;
      }
    }
    render() {
      if (!this.props.needPaid || !this.state.amount || !this.state.period) {
        return null;
      }
      let e = this.isPayEnabled() && this.checkCanUsePayByUA();
      let i = this.getAppDisplayName();
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "paid-subsciption",
        children: [reactJsxRuntimeCoreReexport.jsx(j, {}), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: h("paid-subscription-wrap"),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: h("paid-subscription-info"),
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "main-info",
              children: [reactJsxRuntimeCoreReexport.jsxs("div", {
                className: "paid-amount",
                children: [reactJsxRuntimeCoreReexport.jsx("div", {
                  className: "currency",
                  children: "¥"
                }), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: "price",
                  children: this.state.amount
                })]
              }), reactJsxRuntimeCoreReexport.jsx(tagComponent.TagComponent, {
                size: "extra-small",
                className: "paid-expiry",
                color: "blue",
                children: I(this.state.period)
              })]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "detail",
              children: e ? t("LarkCCM_Docs_Paywall_PaytoUnlockAll_Pc_Text") : t("LarkCCM_Docs_Paywall_PaytoUnlock_Mb_Text")
            })]
          }), e && reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
            className: "paid-btn",
            onClick: () => this.handlePaidButtonClick(),
            type: "primary",
            size: "medium",
            loading: this.state.loading,
            children: t("LarkCCM_Docs_Paywall_PaytoUnlock_Pc_Button")
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "reader-disclaim",
          children: e && reactJsxRuntimeCoreReexport.jsx(formattedTextRenderer.FormattedText, {
            text: t("LarkCCM_Docs_Paywall_DisclaimToReader_Text"),
            formats: {
              appDisplayName: i,
              readerAgreement: reactJsxRuntimeCoreReexport.jsx("span", {
                className: "reader-link",
                onClick: this.handleDisclaimLinkClick,
                children: t("LarkCCM_Docs_Paywall_DisclaimToReader_Link")
              })
            }
          })
        })]
      });
    }
    constructor(e) {
      super(e);
      U(this, "state", undefined);
      U(this, "skuId", "");
      U(this, "closeSync", () => {
        var e;
        var i;
        if ((i = this.props.blockManager) !== null && i !== undefined && (e = i.editorAPI.getService(collabTriggersProvider.collabProvider, {
          optional: true
        })) !== null && e !== undefined) {
          e.switchCollabMode(false, docxSubscriptionTypes.SubscriptionTypes.UN_PAID);
        }
      });
      U(this, "handleDisclaimLinkClick", () => {
        window.open(xssContentSanitizer.sanitizeUrl("https://www.feishu.cn/docx/XjBQd5zhOohZvwxNToUcwSHUnfh", null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTTBKb1lWZFJkR016$m1sak1rNT$Z$mhDT%d*WE9-$k1N$%pvW$Zk%1ZH%lhTbnBaTTBwd1kwaFNjR0l5TkhWa1NFNDBX$mhL-m1SW$R%MD0"
        }), "_blank");
      });
      U(this, "addListener", () => {
        if (this.props.needPaid) {
          document.addEventListener("keydown", this.handleKeyDown, true);
        }
      });
      U(this, "removeListener", () => {
        document.removeEventListener("keydown", this.handleKeyDown, true);
      });
      U(this, "handleKeyDown", e => {
        if (keyboardShortcutHandlerResolver.resolveShortcutHandler(e) === docEditorCommandConstants.presentationMode && this.props.needPaid) {
          e.stopPropagation();
        }
      });
      U(this, "isPayEnabled", () => {
        let {
          isInVC: e,
          isMeetingNote: i
        } = browserEnvironmentDetectionUtils.browserDetector;
        return !e && !i && !docComponentFeatureFlags.isRoomsAgenda() && !docComponentFeatureFlags.isVcAgenda() && !docComponentFeatureFlags.isCalendarAgenda();
      });
      U(this, "getAppDisplayName", () => globalConfigUtils.isFeishuProduct() ? t("LarkCCM_BrandName_Feishu") : t("LarkCCM_BrandName_Lark"));
      this.state = {
        amount: null,
        period: null,
        loading: false,
        isFecthingComp: false
      };
    }
  }
  var H = reactReduxCore.connect(e => ({
    needPaid: docxPaywallPermissions.isPaywallNeeded(e)
  }))(W);
  require.r(exports);
  require.d(exports, {
    default: function () {
      return H;
    }
  });
}