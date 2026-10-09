// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BX' to 'performLogout'
// - Renamed export 'ju' to 'createLogoutConfirm'
// - Renamed export 'qF' to 'logoutWithFlowAccount'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 692547
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var errorHandlingUtilities = require("error-handling-utilities") /*id: 264039*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  let s = async e => {
    let {
      scene: t,
      loginRoute: n,
      trackMeta: r = {},
      beforeLogout: a,
      afterLogout: s,
      logoutAllDevices: c = false,
      navigate: d,
      executeLogout: p
    } = e;
    try {
      if (a) {
        await a();
      }
      if (c) {
        try {
          await apiServicesCollection.AccountApiService.AccountManagerLogout({
            is_logout_all: true
          });
        } catch (e) {}
      }
      let e = {
        navigate: d,
        reason: "user_logout",
        trackMeta: {
          logout_all_devices: +!!c,
          ...r
        }
      };
      if (n) {
        e.loginRoute = n;
      }
      await p(e);
      teaAnalyticsEventTracker.trackEvent("logout_result", {
        ...r,
        scene: t,
        success: 1,
        logout_all_devices: +!!c
      });
      if (s) {
        await s();
      }
    } catch (e) {
      if (errorHandlingUtilities.isApiError(e)) {
        teaAnalyticsEventTracker.trackEvent("logout_result", {
          ...r,
          scene: t,
          success: 0,
          err_code: e == null ? undefined : e.code,
          err_tips: e == null ? undefined : e.description
        });
      } else {
        teaAnalyticsEventTracker.trackEvent("logout_result", {
          ...r,
          scene: t,
          success: 0
        });
      }
    }
  };
  let c = e => {
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let {
      openLogoutConfirm: u,
      onLogout: m,
      showLogoutAll: _ = false,
      overrideConfirmText: x,
      logoutAllConfirmText: h,
      onConfirmShowTrack: f,
      onCancelLogoutTrack: w,
      onConfirmLogoutTrack: v,
      isNonBindAccount: b = false,
      ...g
    } = e;
    let {
      showLogoutConfirm: $
    } = u({
      onConfirmShow: () => {
        if (f != null) {
          f();
        }
      },
      onConfirmOk: async e => {
        if (v != null) {
          v(e);
        }
        await m({
          ...g,
          ...e
        });
      },
      onConfirmCancel: e => {
        if (w != null) {
          w(e);
        }
      },
      confirmText: {
        title: (x == null ? undefined : x.title) ?? p("logout_double_confirmation_title"),
        description: (x == null ? undefined : x.description) ?? p(b ? "account_desc_delete_warning" : "logout_double_confirmation_text"),
        logoutAllText: (x == null ? undefined : x.logoutAllText) ?? p("logOut_checkBox_otherDevice_pc"),
        okButtonText: (x == null ? undefined : x.okButtonText) ?? p("logout_double_confirmation_logout"),
        cancelButtonText: (x == null ? undefined : x.cancelButtonText) ?? p("logout_double_confirmation_cancel")
      },
      logoutAllConfirmText: {
        title: (h == null ? undefined : h.title) ?? "",
        description: (h == null ? undefined : h.description) ?? "",
        okButtonText: (h == null ? undefined : h.okButtonText) ?? p("logout_double_confirmation_logout"),
        cancelButtonText: (h == null ? undefined : h.cancelButtonText) ?? p("logout_double_confirmation_cancel")
      },
      showLogoutAll: _
    });
    return {
      showLogoutConfirm: $
    };
  };
  let d = async e => {
    await s({
      ...e,
      executeLogout: flowAccountModule.getFlowAccount().passportApi.logout
    });
  };
  require.d(exports, {
    performLogout: function () {
      return s;
    },
    createLogoutConfirm: function () {
      return c;
    },
    logoutWithFlowAccount: function () {
      return d;
    }
  });
}