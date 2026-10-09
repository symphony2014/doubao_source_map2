// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'kR' to 'logoutAndRedirect'
// - Renamed export 'kh' to 'logoutHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28091.4a8a1381.js
         * chunkId: 28091
         * moduleId: 715745
         */
module.exports = function (module, exports, require) {
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var safeRedirectHandler = require("safe-redirect-handler") /*id: 467702*/;
  let a = {
    reason: "security_logout",
    trackMeta: {},
    loginRoute: "/",
    showToastWarning: false,
    toastMessage: "",
    showToastClose: false,
    redirectUrl: "",
    trackingScene: "security",
    shouldTrack: true
  };
  async function l(t) {
    let s = {
      ...a,
      ...t
    };
    if (s.showToastWarning) {
      let t = s.toastMessage || s.trackMeta?.msg || "You will be logged out";
      if (t) {
        semiToastNotification.toastInstance.warning({
          content: t,
          showClose: s.showToastClose
        });
      }
    }
    try {
      await flowAccountModule.getFlowAccount().passportApi.logout({
        reason: s.reason,
        trackMeta: {
          from: s.trackingScene,
          msg: s.trackMeta?.msg,
          ...s.trackMeta
        },
        loginRoute: s.loginRoute
      });
      if (s.shouldTrack) {
        teaAnalyticsEventTracker.trackEvent("logout_result", {
          scene: s.trackingScene,
          success: 1
        });
      }
      return {
        success: true
      };
    } catch (t) {
      if (s.shouldTrack) {
        teaAnalyticsEventTracker.trackEvent("logout_result", {
          scene: s.trackingScene,
          success: 0
        });
      }
      return {
        success: false,
        error: t
      };
    }
  }
  async function c(t) {
    let e = {
      ...a,
      ...t
    };
    let n = await l(e);
    if (e.redirectUrl) {
      safeRedirectHandler.safeRedirect(e.redirectUrl);
    }
    return n;
  }
  require.d(exports, {
    logoutAndRedirect: function () {
      return c;
    },
    logoutHandler: function () {
      return l;
    }
  });
}