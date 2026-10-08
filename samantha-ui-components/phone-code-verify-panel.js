// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'PhoneVerifyPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 690057
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var errorHandlingUtilities = require("error-handling-utilities") /*id: 264039*/;
  var registrationBanErrorTracker = require("registration-ban-error-tracker") /*id: 214198*/;
  var errorUtilsAndEnums = require("error-utils-and-enums") /*id: 352461*/;
  var codeVerifyInputPanel = require("code-verify-input-panel") /*id: 981246*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var phoneVerifyCodeHandler = require("phone-verify-code-handler") /*id: 174449*/;
  var mobileAuthButtonStrings = require("mobile-auth-button-strings") /*id: 457618*/;
  var g = {
    title: "title-evYKAH",
    desc: "desc-Uc3ceu"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = {
    note: "phone_code_sent_note",
    title: "enter_digit_code"
  };
  let v = e => {
    let {
      header: i,
      descClassName: o,
      sendCodeData: v,
      account: w,
      trackMeta: A = {},
      onLoginSuccess: E,
      onCancelLogin: b,
      onLoginError: k,
      onAgeGateCancel: S,
      hideDesc: N,
      footerRender: x
    } = e;
    let R = phoneVerifyCodeHandler.verifyCodeType;
    let C = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("enter_page", {
        current_page: "verify_code",
        is_tts: 0,
        ...A
      });
    }, []);
    let j = async e => {
      if (w) {
        try {
          let n = await flowAccountModule.getFlowAccount().passportApi.smsLogin(w, e, errorUtilsAndEnums.UiTypeEnum.panel);
          if (!n) {
            throw Error("userData is undefined");
          }
          teaAnalyticsEventTracker.trackEvent("login_result", {
            type: R,
            success: 1,
            position: 1,
            ...A
          }, {
            key: "",
            withSlardar: true
          });
          E(n);
        } catch (e) {
          if (k != null) {
            k(e);
          }
          if (errorUtilsAndEnums.isSysError(e)) {
            teaAnalyticsEventTracker.trackEvent("login_result", {
              type: R,
              success: 0,
              err_code: (e == null ? undefined : e.message) === "age gate if forbid" ? "2" : "0",
              err_tips: `age_gate(${(e == null ? undefined : e.message) || "unknown"})`,
              reason: `age_gate(${(e == null ? undefined : e.message) || "unknown"})`,
              position: 1,
              ...A
            }, {
              key: "",
              withSlardar: true
            });
            if (S != null) {
              S();
            }
            b();
          } else if (errorUtilsAndEnums.isAppError(e)) {
            if (S != null) {
              S();
            }
            b();
          } else if (errorHandlingUtilities.isApiError(e)) {
            teaAnalyticsEventTracker.trackEvent("login_result", {
              type: R,
              success: 0,
              position: 1,
              err_code: e == null ? undefined : e.code,
              err_tips: `passport(${(e == null ? undefined : e.description) || (e == null ? undefined : e.message) || "unknown"})`,
              reason: `passport(${(e == null ? undefined : e.description) || (e == null ? undefined : e.message) || "unknown"})`,
              code: `${e == null ? undefined : e.code}`,
              ...A
            }, {
              key: "",
              withSlardar: true
            });
            registrationBanErrorTracker.trackRegBanError(e);
          } else {
            teaAnalyticsEventTracker.trackEvent("login_result", {
              type: R,
              err_tips: `others(${(e == null ? undefined : e.message) || "unknown"})`,
              reason: `others(${(e == null ? undefined : e.message) || "unknown"})`,
              code: e instanceof Error && "code" in e ? String(e.code) : "unknown",
              success: 0,
              position: 1,
              ...A
            }, {
              key: "",
              withSlardar: true
            });
          }
          throw e;
        }
      }
    };
    let L = async () => {
      if (!w) {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "click_login",
          meta: {
            type: mobileAuthButtonStrings.mobileAuthButtonStrings.resendMobileCode
          }
        });
        return;
      }
      teaAnalyticsEventTracker.trackEvent("click_verify_code_resend");
      try {
        await flowAccountModule.getFlowAccount().passportApi.sendCode(w);
        teaAnalyticsEventTracker.trackEvent("login_send_code_result", {
          success: 1,
          resend: 1,
          type: phoneVerifyCodeHandler.verifyCodeType
        });
      } catch (e) {
        if (errorHandlingUtilities.isApiError(e)) {
          teaAnalyticsEventTracker.trackEvent("login_send_code_result", {
            success: 0,
            error_code: e == null ? undefined : e.code,
            error_tips: e == null ? undefined : e.description,
            resend: 1,
            type: phoneVerifyCodeHandler.verifyCodeType
          });
        } else {
          teaAnalyticsEventTracker.trackEvent("login_send_code_result", {
            success: 0,
            resend: 1,
            type: phoneVerifyCodeHandler.verifyCodeType
          });
        }
        throw e;
      }
    };
    let T = v.retry_time ?? 60;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [i !== undefined ? i : reactJsxRuntimeCoreReexport.jsx("div", {
        className: g.title,
        children: C(f.title)
      }), N ? null : reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(g.desc, o),
        children: C(f.note, {
          postProcess: "sprintf",
          sprintf: [w]
        })
      }), reactJsxRuntimeCoreReexport.jsx(codeVerifyInputPanel.CodeVerifyPanel, {
        retryTime: T,
        length: 6,
        onFinish: j,
        onResend: L,
        footerRender: x
      })]
    });
  };
  require.d(exports, {
    PhoneVerifyPanel: function () {
      return v;
    }
  });
}