// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'pO' to 'initCreditFeatures'
// - Renamed export 'j4' to 'setupPanelListener'
// - Renamed export 'Ob' to 'initCreditBenefits'
// - Renamed export 'x' to 'CreditPanelActions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 437103
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let r = e => {
    let {
      onShowHandler: t,
      onHiddenHandler: n
    } = e;
    if (typeof document != "undefined") {
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          if (n != null) {
            n();
          }
        } else if (t != null) {
          t();
        }
      });
    }
  };
  var creditPanelHashUtil = require("credit-panel-hash-util") /*id: 714047*/;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var a = dayjsDateLibrary;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var sha256HmacHasher = require("sha256-hmac-hasher") /*id: 80077*/;
  var u = sha256HmacHasher;
  var cryptoHexEncoderUtil = require("crypto-hex-encoder-util") /*id: 941049*/;
  var _ = cryptoHexEncoderUtil;
  function x(e) {
    return (parseInt(u(e).toString(_).substring(0, 10), 16) % 1000000).toString().padStart(6, "0");
  }
  var creditConstantsConfig = require("credit-constants-config") /*id: 399502*/;
  let f = async e => {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "getFirstCreditTip_start"
    });
    let n = storageWrapperWithFallback.LocalStorageWrapper.getItem(creditConstantsConfig.firstCreditTipKey);
    let r = {};
    try {
      r = JSON.parse(n || "{}");
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "getFirstCreditTip_parseFirstCreditTipInStorage_error",
        error: e
      });
      storageWrapperWithFallback.LocalStorageWrapper.removeItem(creditConstantsConfig.firstCreditTipKey);
    }
    let o = chatUserInfoActions.getUserInfo()?.user_id_str;
    if (!o) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "getFirstCreditTip_noUid",
        error: Error("getFirstCreditTip_noUid")
      });
      return;
    }
    let l = x(o);
    if (r[l]) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "getFirstCreditTip_hit_cache_return"
      });
      return;
    }
    try {
      let {
        data: t
      } = await apiServicesCollection.CommerceBenefitSupplyService.AGWGetCreditTip();
      if (t == null ? undefined : t.is_first_visit) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "getFirstCreditTip_open_tip"
        });
        e.openFirstCreditTipNotice();
      }
      r[l] = a().format("YYYY-MM-DD");
      storageWrapperWithFallback.LocalStorageWrapper.setItem(creditConstantsConfig.firstCreditTipKey, JSON.stringify(r));
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "getFirstCreditTip_after_fetch_return"
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "AGWGetCreditTip_error",
        error: e
      });
    }
  };
  let w = async e => {
    let {
      readCache: t = true
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "getDailyCreditBenefit_start",
      meta: {
        readCache: t ? "1" : "0"
      }
    });
    let n = v();
    let r = b();
    if (r) {
      if (t) {
        let e = n[r];
        if (e === a().format("YYYY-MM-DD")) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "getDailyCreditBenefit_hit_cache_return",
            meta: {
              activityDate: e
            }
          });
          return;
        }
      }
      await g({
        dailyCreditBenefitInStorage: n,
        uidHash: r
      });
    }
  };
  let v = () => {
    let e = storageWrapperWithFallback.LocalStorageWrapper.getItem(creditConstantsConfig.dailyCreditStorage);
    let t = {};
    try {
      t = JSON.parse(e || "{}");
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "getDailyCreditBenefit_parseDailyCreditBenefitInStorage_error",
        error: e
      });
      storageWrapperWithFallback.LocalStorageWrapper.removeItem(creditConstantsConfig.dailyCreditStorage);
    }
    return t;
  };
  let b = () => {
    let t = chatUserInfoActions.getUserInfo()?.user_id_str;
    if (!t) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "getDailyCreditBenefit_noUid",
        error: Error("getDailyCreditBenefit_noUid")
      });
      return;
    }
    return x(t);
  };
  let g = async e => {
    let {
      dailyCreditBenefitInStorage: t,
      uidHash: n
    } = e;
    try {
      let {
        data: e
      } = await apiServicesCollection.CommerceBenefitSupplyService.AGWUserActivity();
      if (e == null ? undefined : e.activity_time) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "getDailyCreditBenefit_fetch_activity_time",
          meta: {
            activity_time: e.activity_time
          }
        });
        t[n] = a(e.activity_time).format("YYYY-MM-DD");
        storageWrapperWithFallback.LocalStorageWrapper.setItem(creditConstantsConfig.dailyCreditStorage, JSON.stringify(t));
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "AGWGetCreditTip_error",
        error: e
      });
    }
  };
  var commerceCreditConfigChecker = require("commerce-credit-config-checker") /*id: 908741*/;
  var uiPanelConstants = require("ui-panel-constants") /*id: 263908*/;
  var creditPanelManager = require("credit-panel-manager") /*id: 958026*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var notificationComponentWrapper = require("notification-component-wrapper") /*id: 830647*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var sendMessageIcon = require("send-message-icon") /*id: 11499*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let F = e => {
    let {
      title: t,
      desc: n,
      notificationConfig: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "p-[8px] pt-[6px]",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mb-8 flex h-[24px] items-center",
        children: [reactJsxRuntimeCoreReexport.jsx(sendMessageIcon.SendIcon, {
          className: "mr-5 size-[18px] flex-none text-dbx-color-yellow-500"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            flex-auto truncate text-[16px] leading-[24px] font-medium
            text-(--s-color-text-secondary)
          `,
          children: t
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex-none",
          children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: i18nTranslationUtils.i18nextTranslate("confirm_button_yes"),
            children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
              className: `
                cursor-pointer rounded-[8px] p-4 text-[14px]
                text-(--s-color-text-tertiary)
                hover:bg-(--s-color-bg-trans)
              `,
              onClick: () => notificationComponentWrapper.Notification.close(i.notificationId)
            })
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          text-[12px] leading-[18px] font-normal text-(--s-color-text-tertiary)
        `,
        children: n
      })]
    });
  };
  let S = e => {
    let {
      title: t,
      desc: n,
      notificationConfig: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex items-center",
      children: [reactJsxRuntimeCoreReexport.jsx(sendMessageIcon.SendIcon, {
        className: "mr-[9px] size-[32px] flex-none text-dbx-color-yellow-500"
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex-auto",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            mb-4 text-[14px] leading-[22px] font-medium text-(--neutral-100)
          `,
          children: t
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            text-[12px] leading-[18px] font-normal
            text-(--s-color-text-tertiary)
          `,
          children: n
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex-none",
        children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: i18nTranslationUtils.i18nextTranslate("confirm_button_yes"),
          children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
            className: `
              cursor-pointer rounded-[8px] p-4 text-[14px]
              text-(--s-color-text-tertiary)
              hover:bg-(--s-color-bg-trans)
            `,
            onClick: () => notificationComponentWrapper.Notification.close(i.notificationId)
          })
        })
      })]
    });
  };
  let M = e => {
    let {
      title: t,
      desc: n,
      type: i
    } = e;
    let r = {
      notificationId: ""
    };
    r.notificationId = notificationComponentWrapper.Notification.open({
      icon: null,
      title: i === "horizontal" ? reactJsxRuntimeCoreReexport.jsx(S, {
        title: t,
        desc: n,
        notificationConfig: r
      }) : reactJsxRuntimeCoreReexport.jsx(F, {
        title: t,
        desc: n,
        notificationConfig: r
      }),
      className: "notification-hr8m79",
      duration: 5,
      showClose: false,
      zIndex: 1059
    });
  };
  let Z = e => {
    let {
      openCreditPanel: t
    } = e;
    teaAnalyticsEventTracker.trackEvent("credit_tip_popp_show", {
      type: "credit_launch"
    });
    M({
      type: "vertical",
      title: i18nTranslationUtils.i18nextTranslate("credit_pc_bottomsheet_title_new", {
        postProcess: "sprintf",
        sprintf: [i18nTranslationUtils.i18nextTranslate("brandName_doubao")]
      }),
      desc: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [i18nTranslationUtils.i18nextTranslate("credit_pc_bottomsheet_desc_new"), " ", reactJsxRuntimeCoreReexport.jsx("span", {
          className: `
            cursor-pointer text-(--s-color-text-secondary) underline
            underline-offset-[2px]
            hover:text-(--dbx-text-highlight)
          `,
          onClick: () => {
            t({
              from: "credit_launch_popup"
            });
          },
          children: i18nTranslationUtils.i18nextTranslate("credit_pc_bottomsheet_desc_textlink_credit")
        })]
      })
    });
  };
  let L = () => {
    Z({
      openCreditPanel: creditPanelManager.openCreditPanel
    });
  };
  let B = () => {
    creditPanelHashUtil.triggerIfPanelOpen(creditPanelManager.openCreditPanel);
  };
  let I = () => {
    commerceCreditConfigChecker.withCreditCheck(() => {
      if (creditPanelHashUtil.isCreditPanelOpen()) {
        creditPanelManager.openCreditPanel({
          scene: uiPanelConstants.panelConstants.MainPanel,
          from: "menu"
        });
      }
      window.removeEventListener("hashchange", B);
      window.addEventListener("hashchange", B);
    });
  };
  let X = () => {
    commerceCreditConfigChecker.withCreditCheck(async () => {
      await f({
        openFirstCreditTipNotice: L
      });
      await w({
        readCache: false
      });
      r({
        onShowHandler: () => {
          w({
            readCache: true
          });
          loggerServiceCore.defaultLogger.console.info({
            eventName: "getDailyCreditBenefit_by_visibilitychange"
          });
        }
      });
    });
  };
  let D = () => {
    I();
    X();
  };
  let O = {
    openCreditPanel: creditPanelManager.openCreditPanel,
    openInviteNotice: () => {
      teaAnalyticsEventTracker.trackEvent("credit_tip_popp_show", {
        type: "success_invite"
      });
      M({
        type: "horizontal",
        title: i18nTranslationUtils.i18nextTranslate("credit_popUp_title_referral_pc"),
        desc: i18nTranslationUtils.i18nextTranslate("credit_popUp_desc_referral_pc")
      });
    },
    openDailyNotice: e => {
      let {
        title: t,
        content: n
      } = e;
      teaAnalyticsEventTracker.trackEvent("credit_tip_popp_show", {
        type: "daily_free_credit"
      });
      M({
        type: "horizontal",
        title: t,
        desc: n
      });
    }
  };
  require.d(exports, {
    initCreditFeatures: function () {
      return D;
    },
    setupPanelListener: function () {
      return I;
    },
    initCreditBenefits: function () {
      return X;
    },
    CreditPanelActions: function () {
      return O;
    }
  });
}