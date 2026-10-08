// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NI' to 'CreditPanelMenuItem'
// - Renamed export 'nq' to 'CreditPanelMenuButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 269850
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var sidebarFeatureFlagsResolver = require("sidebar-feature-flags-resolver") /*id: 386007*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var aiCreationGuidanceIcon = require("ai-creation-guidance-icon") /*id: 99723*/;
  var sendMessageIcon = require("send-message-icon") /*id: 11499*/;
  var uiPanelStateStore = require("ui-panel-state-store") /*id: 440908*/;
  var creditPanelInitActions = require("credit-panel-init-actions") /*id: 437103*/;
  var fetchCreditInfoRequestHook = require("fetch-credit-info-request-hook") /*id: 406055*/;
  var creditConfigCheck = require("credit-config-check") /*id: 492264*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = () => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    fetchCreditInfoRequestHook.fetchCreditInfoRequest();
    let {
      creditInfo: n
    } = uiPanelStateStore.usePanelStore(e => ({
      creditInfo: e.creditInfo
    }), deepEqualityUtil.deepEqual);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        flex h-[38px] min-w-192 cursor-pointer items-center justify-center
        rounded-8 px-[10px] py-[4px]
        hover:bg-(--dbx-fill-trans-10-hover)
      `,
      onClick: () => creditPanelInitActions.CreditPanelActions.openCreditPanel({
        from: "menu"
      }),
      children: [reactJsxRuntimeCoreReexport.jsx(aiCreationGuidanceIcon.AiCreationIcon, {
        className: "mr-8 size-[16px] flex-none"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          flex-auto text-[14px] leading-[22px] font-[400]
          text-(--dbx-text-primary)
        `,
        children: t("credit_pc_setting_entrance_credit")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex-none text-[14px] font-[400] text-(--dbx-text-tertiary)",
        children: (n == null ? undefined : n.total_credit_num) ?? "-"
      })]
    });
  };
  let _ = () => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    fetchCreditInfoRequestHook.fetchCreditInfoRequest();
    let {
      creditInfo: n
    } = uiPanelStateStore.usePanelStore(e => ({
      creditInfo: e.creditInfo
    }), deepEqualityUtil.deepEqual);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        flex h-[38px] min-w-192 cursor-pointer items-center justify-center
        rounded-8 pr-[10px] pl-[12px]
        hover:bg-s-color-bg-trans
      `,
      onClick: () => creditPanelInitActions.CreditPanelActions.openCreditPanel({
        from: "menu"
      }),
      children: [reactJsxRuntimeCoreReexport.jsx(sendMessageIcon.SendIcon, {
        className: "mr-8 size-[18px] flex-none text-dbx-color-yellow-500"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          flex-auto text-[14px] leading-[22px] font-medium
          text-s-color-text-secondary
        `,
        children: t("credit_pc_setting_entrance_credit")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mr-[4px] ml-[10px] flex-none text-[14px] font-semibold",
        children: (n == null ? undefined : n.total_credit_num) ?? "-"
      })]
    });
  };
  let x = () => creditConfigCheck.isCreditEnabled() ? reactJsxRuntimeCoreReexport.jsx(m, {}) : null;
  let h = () => {
    let e = creditConfigCheck.isCreditEnabled();
    let {
      sidebarV2: t
    } = sidebarFeatureFlagsResolver.getSidebarFeatureFlags();
    if (e) {
      if (t) {
        return reactJsxRuntimeCoreReexport.jsx(m, {});
      } else {
        return reactJsxRuntimeCoreReexport.jsx(_, {});
      }
    } else {
      return null;
    }
  };
  require.d(exports, {
    CreditPanelMenuItem: function () {
      return h;
    },
    CreditPanelMenuButton: function () {
      return x;
    }
  });
}