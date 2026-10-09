// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'usePhoneVerifyCode'
// - Renamed export 'h' to 'verifyCodeType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 174449
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var errorHandlingUtilities = require("error-handling-utilities") /*id: 264039*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var mobileAuthButtonStrings = require("mobile-auth-button-strings") /*id: 457618*/;
  let d = "phone_verify_code";
  let _ = e => {
    let {
      trackMeta: n,
      onSendCodeSuccess: i,
      handleCheckUserAgreement: _
    } = e;
    let [u, h] = reactCoreLibraryReexport.useState(false);
    return {
      handleNextClick: async e => {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "click_login",
          meta: {
            type: mobileAuthButtonStrings.mobileAuthButtonStrings.sendMobileCode,
            position: 1,
            ...n
          }
        });
        teaAnalyticsEventTracker.trackEvent("click_login", {
          type: d,
          position: 1,
          ...n
        });
        if ((await _()) && e) {
          h(true);
          try {
            teaAnalyticsEventTracker.trackEvent("login_send_code", {
              type: d,
              ...n
            });
            let t = await flowAccountModule.getFlowAccount().passportApi.sendCode(e);
            if (!t) {
              throw Error("sendCodeData is undefined");
            }
            teaAnalyticsEventTracker.trackEvent("login_send_code_result", {
              success: 1,
              resend: 0,
              type: d,
              ...n
            });
            i({
              account: e,
              data: t
            });
          } catch (e) {
            if (errorHandlingUtilities.isApiError(e)) {
              teaAnalyticsEventTracker.trackEvent("login_send_code_result", {
                success: 0,
                error_code: e == null ? undefined : e.code,
                error_tips: e == null ? undefined : e.description,
                resend: 0,
                type: d,
                ...n
              });
            } else {
              teaAnalyticsEventTracker.trackEvent("login_send_code_result", {
                success: 0,
                resend: 0,
                type: d,
                ...n
              });
            }
          } finally {
            h(false);
          }
        }
      },
      handleFirstInput: () => {
        storageWrapperWithFallback.LocalStorageWrapper.setItem("loginTrackMeta", JSON.stringify(n));
      },
      nextLoading: u
    };
  };
  require.d(exports, {
    usePhoneVerifyCode: function () {
      return _;
    },
    verifyCodeType: function () {
      return d;
    }
  });
}