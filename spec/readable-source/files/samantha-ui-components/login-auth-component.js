// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'LoginWindow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 703501
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var checkboxWrapperComponent = require("checkbox-wrapper-component") /*id: 495136*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var applePayErrorClasses = require("apple-pay-error-classes") /*id: 950762*/;
  var errorHandlingUtilities = require("error-handling-utilities") /*id: 264039*/;
  var authRedirectUtils = require("auth-redirect-utils") /*id: 241827*/;
  var registrationBanErrorTracker = require("registration-ban-error-tracker") /*id: 214198*/;
  var errorUtilsAndEnums = require("error-utils-and-enums") /*id: 352461*/;
  var loginAgreementCheckHook = require("login-agreement-check-hook") /*id: 827989*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 25,
    fill: "none",
    viewBox: "0 0 24 25",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#2CCF54",
      d: "M22.89 11.318c0-4.931-4.885-8.943-10.89-8.943-6.003 0-10.889 4.012-10.889 8.943 0 4.42 3.874 8.123 9.107 8.823.354.077.837.236.96.543.11.279.071.715.034.997l-.155.943c-.047.279-.219 1.09.943.594s6.271-3.737 8.556-6.398c1.578-1.751 2.333-3.529 2.333-5.502"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M9.788 8.928h-.764a.213.213 0 0 0-.212.214v4.796c0 .118.095.214.212.214h.764a.213.213 0 0 0 .212-.214V9.142a.213.213 0 0 0-.212-.214M15.044 8.928h-.764a.213.213 0 0 0-.212.214v2.85l-2.174-2.969a.22.22 0 0 0-.176-.095h-.764a.213.213 0 0 0-.212.214v4.796c0 .118.095.214.212.214h.764a.213.213 0 0 0 .212-.214V11.09l2.177 2.973c.039.056.105.09.174.09h.763a.213.213 0 0 0 .212-.214V9.142a.213.213 0 0 0-.212-.214M7.946 12.951H5.871V9.142a.213.213 0 0 0-.212-.214h-.764a.213.213 0 0 0-.212.214v4.796c0 .116.095.214.212.214h3.051a.213.213 0 0 0 .212-.214v-.772a.213.213 0 0 0-.212-.215M19.263 10.129a.213.213 0 0 0 .211-.214v-.772a.213.213 0 0 0-.211-.215h-3.051a.215.215 0 0 0-.213.214v4.796c0 .116.095.214.212.214h3.052a.213.213 0 0 0 .211-.214v-.772a.213.213 0 0 0-.211-.215h-2.075v-.81h2.075a.213.213 0 0 0 .211-.215v-.772a.213.213 0 0 0-.211-.214h-2.075v-.811z"
    })]
  });
  let S = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 25,
    fill: "none",
    viewBox: "0 0 24 25",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#0068FF",
      d: "M12 2C6.203 2 1.5 6.73 1.5 12.563c0 5.272 3.84 9.641 8.86 10.437v-7.383H7.693v-3.054h2.667v-2.327c0-2.65 1.568-4.11 3.965-4.11 1.15 0 2.353.205 2.353.205V8.93H15.35c-1.302 0-1.71.816-1.71 1.651v1.981h2.91l-.465 3.054h-2.444v7.383c5.02-.792 8.86-5.162 8.86-10.435C22.5 6.73 17.798 2 12 2"
    })
  });
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  let x = e => {
    let {
      resetShowQRCodeWidth: n
    } = e;
    let [i, t] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      let e = debounceUtilWrapper.createDebounce(() => {
        if ((window.innerWidth || document.documentElement.clientWidth) > n) {
          t(false);
        }
      }, 200);
      window.addEventListener("resize", e);
      return () => {
        window.removeEventListener("resize", e);
      };
    }, []);
    return {
      showQRCode: i,
      switchShowType: () => {
        t(!i);
      }
    };
  };
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  let C = e => {
    let {
      showQRCode: n,
      onClick: i,
      className: t
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: c("container-iSyEgK", t),
      children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        position: "left",
        content: o(n ? "Login_with_account_tooltip" : "Login_with_QR_code_tooltip"),
        spacing: {
          x: -10,
          y: 0
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "switcher-ls9dIu",
          style: {
            backgroundImage: `url(${n ? "data:image/png;base64,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" : "data:image/png;base64,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"})`
          },
          "data-testid": "qrcode_switcher",
          onClick: i
        })
      })
    });
  };
  var buttonComponent = require("button-component") /*id: 899242*/;
  let L = e => {
    let {
      platform: n,
      isCurrentPlatform: i,
      disabled: t,
      onClick: a,
      otherProps: r,
      icon: l,
      trackMeta: d
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("login_type_show", {
        type: n,
        ...d
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(buttonComponent.Button, {
      className: c("btn-mKBMAM", "third-login-btn"),
      type: "dashed",
      onClick: () => {
        if (a != null) {
          a();
        }
        teaAnalyticsEventTracker.trackEvent("login_type_click", {
          type: n,
          ...d
        });
      },
      loading: i,
      disabled: t,
      "data-testid": `login_third_${n}`,
      ...r,
      children: i ? null : l
    });
  };
  var qrCodeLoginComponent = require("qr-code-login-component") /*id: 496521*/;
  var loginAgreementTextFormatter = require("login-agreement-text-formatter") /*id: 134341*/;
  var loginPhoneInputForm = require("login-phone-input-form") /*id: 77545*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var phoneVerifyCodeHandler = require("phone-verify-code-handler") /*id: 174449*/;
  var B = {
    container: "container-PWm8V9",
    panel: "panel-XHpJYw",
    left: "left-dbhlTG",
    right: "right-IeRXRo",
    common: "common-lomKli",
    title: "title-_jnLvh",
    main: "main-FHzSAX",
    description: "description-RJfPGJ",
    logo: "logo-NIQwPg",
    "third-container": "third-container-uXLZG4",
    agreementCheck: "agreement-check-V6hVDy",
    "scan-tip": "scan-tip-zz6QKM"
  };
  let F = e => {
    let {
      options: n
    } = e;
    if (n.some(Boolean)) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: B["third-container"],
        children: n.map(e => e || null)
      });
    } else {
      return null;
    }
  };
  let D = e => ({
    aweme_v2: {
      icon: reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(e ? "data:image/png;base64,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" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACE1BMVEUAAAAFJCMk9e+7IT7+LFX7K1YRcG0k9u//LFRTDhwBCQkk9e//H1PzKlGGFyz+LFX+K1X+K1b/LFUi9u71KFEcvLcLTUvQJEWoHTg2CRKIFy0l9vD+LFUl9e/+LFQl9vD+LFX/LFT/K1X9K1Qk9u//K1Uk9u/+KlT/LFUl9vEk9e0n9u//QEAj6+Uh3tgf084dwr4YnZkMUU7sKE7gJkrZJUgKQ0LIIkLCIUC5ID0INjUGKypODRpKDBlHDBcxCBAsBw4CDg0asa0k9vAl9vD+LFUk9e/+K1Uk9fAk9e8l9e8k8+0j9O//K1T+LVQl9fAi8+/9KlUj9Ov8KVP8J1Qg8vIg9+//KlUe8fEfy8UbtrIYoZ4Xl5QOXlwOW1jmKE0LSUcKQUC1HzycGjSSGTGQGTCJFy14FSh2FCd1FCdhESFVDx0DFhYYpaATg4ARdnPUJEeVGTGAFip8FSoHKyp4Fig/CxUKOzr+LFUk8usl9u/NIkW0JkN1FCcWBQgh2dT+LFX+K1Ul9e8wtbVsUWAWlpIk9vD9LFUfy8gk9/DuKk7/K1QGIyP/LFSuHTr/LFUk9e0k9vD8LVP/KlT/KlX6KlUi9fERgn3/KVMq+PEg9+9ADRn/KlUq/+oAAAAl9e/+LFUCAQEGAQH7K1QVAwcMAgMfz8oEHRwJPT2uHToDExMk7ugh4Nsg19IWjYntKVAmBwz8tMn4AAAAnnRSTlMA/k/+2i/+orn+/i8I/v776Fs5KR/+/v7+/v349vTsx7y2r4mIhH50Y1lDGgT+/v7+/v7+/v7+/v7+/v7+/v7+/v79++3Wz8+5sayUc1dNTEZCOisZExAMCP7+/v7+/v7+/v7+/v7+/v7+/v7+/f39/f39/fj38fDu6OTf3tbVzsXCvLq6r6iinpuZfX16cmljVlBPNjY1LSUkIBQSDDKOnM8AAAKGSURBVEjH7dNnUxpBGMDxTUCSCEgRa4wFQkDErrF3Y9fYNb333nvvvfdk96GIJfUjZm8PGHDguNsXeZHx//Lm+c3O7u2ipRanXREslQMvJ8GG+fBxjdBdm4MHL8NCjaDmx/7KXH6M94KFH/t/2/kxPqzW8WO8f5ATs85ZODHr+gdOzDr7cHiaG+PZrZfyet7zYFZ9ebGLD7M8V60OboxVsPIf4uwWuXj686hrdCIKq/Sn/DLwp4EuItQXjcH4eE+zVxpre1czWhK48y7JHYnVyJxftftMc1ZrTRy8do0gyzQNyXgVQFI0RshszQVaTFzUK9BjDZgWC9OmRp4UqHOtMWwepaXrMY6DJbtN7eYFzIXXUduejLmwlp7VpjbMh+8T8nNWdH8OZNbOZyrAqfT/akS7Tw8suZjtOMA27FUJLt9uMtkscjH9TdvYWAqlajNiycTf6HGxhf3UdruRIqwlJI1NHQQwWpAyvJGQE8EpcCKFuJCQdDZVA4YppHzlXWyqLmrqZQjXJtjzHJs6BDcjn2gIZ8CG+Hiyk4jPaUYfMTVxmZCj7GsldKP4dZEKzErJcUcu/AMLZQEUSN4wjYg9maaIUyS/QjfHJnm323FQX/uCWP0dhJSIb6UKYAhJ1FeMQ13of+UqfNRJ1/0u/r8mgJxxKZzasT2s50oJK1AvHmIG27JUA2mesG6r2JJWVp6ejMNv5S2SrmcnjtkRH8ADlKCiGwuxbOsOAONHlKjJezFskx4AXiMZPfUuojPZPoAcB5LV8/OeCOppzAAAwwskM/OV7BZxeW/W6WqgqUeQ7HTPLvpOqubrqn0gZLTrkJLGTbcMwDLkD35FitONDTmdb8Z06H/sL/vXStXc8vpiAAAAAElFTkSuQmCC", null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-Wlpi$3cy$EZkT2RtSllRblpp-lZaM$pFaE5kb%pIT1c1aFZ6%jBX$Ek1ZFdSSFZu$mtRemx3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
        }),
        className: B.logo
      }),
      txtKey: "log_in_with_oin_button_cn"
    },
    apple: undefined,
    google: undefined,
    line: {
      icon: reactJsxRuntimeCoreReexport.jsx(k, {
        className: B.logo
      }),
      txtKey: "log_in_with_line_button"
    },
    facebook: {
      icon: reactJsxRuntimeCoreReexport.jsx(S, {
        className: B.logo
      }),
      txtKey: "log_in_with_facebook_button"
    }
  });
  let W = e => {
    let {
      titleKey: n = "login_window_title",
      hideTitle: i = false,
      onSendCodeSuccess: r,
      onLoginSuccess: k,
      onCancelLogin: S,
      defaultMobile: N,
      thirdNavigatePath: R,
      trackMeta: j = {},
      autoFocus: W = true,
      children: G,
      brandName: U,
      privacyPolicyLink: Z,
      termsOfServiceLink: V,
      accountTermsOfServiceLink: z,
      availablePlatforms: K,
      thirdRedirectMethod: H,
      customThirdOpenRedirectFn: J,
      thirdForceRedirect: Q,
      onAgeGateCancel: q,
      description: $,
      enableQrcode: Y = true,
      className: X,
      thirdLoginClassName: ee,
      agreementClassName: en,
      needDarkMode: ei = false,
      qrCodeRightClassName: et,
      qrSwitchClassName: eo,
      resetShowQRCodeWidth: ea = 799
    } = e;
    let {
      agreementChecked: er,
      setAgreementChecked: ec,
      handleCheckUserAgreement: es
    } = loginAgreementCheckHook.useLoginAgreement({
      agreementProps: {
        brandName: U,
        privacyPolicyLink: Z,
        termsOfServiceLink: V,
        accountTermsOfServiceLink: z
      },
      className: en
    });
    let {
      handleFirstInput: el,
      handleNextClick: ed,
      nextLoading: e_
    } = phoneVerifyCodeHandler.usePhoneVerifyCode({
      trackMeta: j,
      onSendCodeSuccess: r,
      handleCheckUserAgreement: es
    });
    let eu = i18nTranslationUtils.useTranslationWithFallback();
    let [eh, em] = (N == null ? undefined : N.split(" ")) || [];
    let [ep, eg] = reactCoreLibraryReexport.useState();
    let [ey, ef] = reactCoreLibraryReexport.useState(false);
    let ev = async e => {
      var n;
      storageWrapperWithFallback.LocalStorageWrapper.setItem("loginTrackMeta", JSON.stringify(j));
      teaAnalyticsEventTracker.trackEvent("click_login", {
        type: e,
        position: K.findIndex(n => n === e) + 1,
        ...j
      }, {
        key: "",
        withSlardar: true
      });
      if (!(await es())) {
        return;
      }
      let t = H ? isFunctionUtil_1.isFunction(H) ? H(e) : H : undefined;
      let o = Q ? isFunctionUtil_1.isFunction(Q) ? Q(e) : Q : undefined;
      try {
        eg(e);
        ef(true);
        let i = await flowAccountModule.getFlowAccount().third.thirdPartyAuth(e, {
          oauth2Config: {
            navigatePath: R,
            type: "login",
            extra: {
              trackMeta: j
            },
            redirectMethod: t,
            customThirdOpenRedirectFn: J
          },
          forceRedirect: o
        });
        let a = null;
        if (!i && authRedirectUtils.isPopupAutoLogin(t)) {
          let n = Math.ceil(200);
          let i = eventReportingService.createEventReporter({
            logger: loggerServiceCore.defaultLogger,
            eventName: "third_auth_login_polling",
            meta: {
              platform: e
            }
          });
          try {
            if (!flowAccountModule.getFlowAccount().passportApi.checkLogin) {
              throw Error("passportApi.checkLogin is not a undefined");
            }
            a = await asyncRetryUtils.asyncRetry(() => flowAccountModule.getFlowAccount().passportApi.checkLogin(), n, 1500);
            i.success();
          } catch (e) {
            if (errorHandlingUtilities.isApiError(e)) {
              samanthaToastFactory.toastInstance.error({
                content: e.description,
                showClose: false
              });
              i.error({
                reason: "timeout",
                error: e
              });
            }
            i.error({
              reason: "unknown",
              error: e instanceof Error ? e : Error(String(e))
            });
            throw e;
          }
          ef(false);
        } else if (i) {
          ef(false);
          let t = await ((n = flowAccountModule.getFlowAccount().passportApi) === null || n === undefined ? undefined : n.authLogin(i, {
            platform: e,
            ageGateDisplayScene: errorUtilsAndEnums.UiTypeEnum.panel
          }));
          if (t) {
            a = t;
          } else {
            throw Error("Auth data is undefined");
          }
        } else {
          throw Error("Auth data is undefined and thirdRedirectMethod is not polling");
        }
        flowAccountModule.getFlowAccount().ageGate.triggerPass();
        teaAnalyticsEventTracker.trackEvent("login_result", {
          type: e,
          success: 1,
          position: K.findIndex(n => n === e) + 1,
          ...j
        }, {
          key: "",
          withSlardar: true
        });
        chatUserInfoActions.setUserInfo(a);
        k(a);
        eg(undefined);
      } catch (n) {
        if (errorUtilsAndEnums.isSysError(n)) {
          S();
          if (q != null) {
            q();
          }
          teaAnalyticsEventTracker.trackEvent("login_result", {
            type: e,
            success: 0,
            err_code: (n == null ? undefined : n.message) === "age gate if forbid" ? "2" : "0",
            err_tips: `age_gate(${(n == null ? undefined : n.message) || "unknown"})`,
            reason: `age_gate(${(n == null ? undefined : n.message) || "unknown"})`,
            code: (n == null ? undefined : n.message) === "age gate if forbid" ? "2" : "0",
            position: K.findIndex(n => n === e) + 1,
            ...j
          }, {
            key: "",
            withSlardar: true
          });
        } else if (errorUtilsAndEnums.isAppError(n)) {
          S();
          if (q != null) {
            q();
          }
        } else {
          if (applePayErrorClasses.isUserCanceledError(n) && n.appleError?.error === "user_trigger_new_signin_flow") {
            return;
          }
          if (errorHandlingUtilities.isApiError(n)) {
            teaAnalyticsEventTracker.trackEvent("login_result", {
              type: e,
              success: 0,
              err_code: n == null ? undefined : n.code,
              err_tips: `passport(${(n == null ? undefined : n.description) || (n == null ? undefined : n.message) || "unknown"})`,
              reason: `passport(${(n == null ? undefined : n.description) || (n == null ? undefined : n.message) || "unknown"})`,
              code: `${n == null ? undefined : n.code}`,
              ...j
            }, {
              key: "",
              withSlardar: true
            });
            registrationBanErrorTracker.trackRegBanError(n);
          } else if (!applePayErrorClasses.isUserCanceledError(n)) {
            teaAnalyticsEventTracker.trackEvent("login_result", {
              type: e,
              success: 0,
              err_tips: `others(${(n == null ? undefined : n.message) || "unknown"})`,
              reason: `others(${(n == null ? undefined : n.message) || "unknown"})`,
              code: `${n == null ? undefined : n.code}`,
              position: K.findIndex(n => n === e) + 1,
              ...j
            }, {
              key: "",
              withSlardar: true
            });
          }
        }
        eg(undefined);
      } finally {
        ef(false);
      }
    };
    let ew = {
      apple: {
        onLoadingClick: ey ? () => {
          ev("apple");
        } : undefined
      }
    };
    let eA = K.map((e, n) => {
      let i = D(ei)[e];
      if (!i || !flowAccountModule.getFlowAccount().third.getThirdPlatformSync(e)) {
        return null;
      }
      let t = ep === e;
      return reactJsxRuntimeCoreReexport.jsx(L, {
        platform: e,
        isCurrentPlatform: t,
        disabled: !!ep && !t,
        onClick: () => {
          ev(e);
        },
        otherProps: ew[e],
        icon: i.icon,
        trackMeta: {
          position: n + 1,
          ...j
        }
      }, e);
    });
    let {
      showQRCode: eE,
      switchShowType: eb
    } = x({
      resetShowQRCodeWidth: ea
    });
    let ek = e => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(qrCodeLoginComponent.QrCodeLogin, {
        onLoginSuccess: k,
        trackMeta: {
          ...j,
          ...e
        }
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: B["scan-tip"],
        dangerouslySetInnerHTML: {
          __html: xssContentSanitizer.sanitizeHtml(eu("login_scanQRCode_pc").replaceAll("{brandName}", U), null, {
            logType: "react.dangerouslySetInnerHTML",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-Wlpi$3cy$EZkT2RtSllRblpp-lZaM$pFaE5kb%pIT1c1aFZ6%jBX$Ek1ZFdSSFZu$mtRemx3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
          })
        }
      })]
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: c(B.container, X),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: B.panel,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: c(B.right),
          children: [reactJsxRuntimeCoreReexport.jsx(C, {
            showQRCode: eE,
            onClick: eb,
            className: c({
              "max-[799px]:!block": Y
            }, eo)
          }), i ? null : reactJsxRuntimeCoreReexport.jsx("p", {
            className: B.title,
            children: eu(n)
          }), eE ? reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mt-36",
            children: ek({
              enter_method: "enter"
            })
          }) : reactJsxRuntimeCoreReexport.jsx("div", {
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: B.common,
              children: [$ && reactJsxRuntimeCoreReexport.jsx("div", {
                className: B.description,
                children: $
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: B.main,
                children: reactJsxRuntimeCoreReexport.jsx(loginPhoneInputForm.PhoneInputForm, {
                  loading: e_,
                  disabled: !!ep,
                  defaultMobilePhone: em,
                  defaultRegionCode: eh,
                  autoFocus: W,
                  onFirstInput: el,
                  onNextClick: ed,
                  onlyCNCode: true
                })
              }), function ({
                marginTop: e
              } = {}) {
                return reactJsxRuntimeCoreReexport.jsx("div", {
                  style: {
                    marginTop: e
                  },
                  className: "flex h-44 items-center",
                  children: reactJsxRuntimeCoreReexport.jsx(checkboxWrapperComponent.CheckboxWrapper, {
                    className: B.agreementCheck,
                    "data-testid": "login_agreement_check",
                    checked: er,
                    disabled: !!ep,
                    onChange: e => {
                      var n;
                      return ec((n = e.target.checked) !== null && n !== undefined && n);
                    },
                    children: reactJsxRuntimeCoreReexport.jsx(loginAgreementTextFormatter.renderAgreementText, {
                      brandName: U,
                      privacyPolicyLink: Z,
                      termsOfServiceLink: V,
                      accountTermsOfServiceLink: z
                    })
                  })
                });
              }({
                marginTop: 16
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: c("flex", ee),
                children: reactJsxRuntimeCoreReexport.jsx(F, {
                  options: eA
                })
              })]
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: c(B.left, et),
          children: ek({
            enter_method: "default"
          })
        }), G]
      })
    });
  };
  require.d(exports, {
    LoginWindow: function () {
      return W;
    }
  });
}