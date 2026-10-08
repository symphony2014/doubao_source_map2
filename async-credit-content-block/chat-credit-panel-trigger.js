// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'CreditPanelTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 68784
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var uiPanelConstants = require("ui-panel-constants") /*id: 263908*/;
  var creditPanelManager = require("credit-panel-manager") /*id: 958026*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      text: t,
      trigger_credit_acquire: n
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let c = userInfoStatusSelectors.selectUserInfoSuccess_1();
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "text-16 leading-24 font-[400] text-(--s-color-text-quaternary)",
        children: t
      }), n && c && reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
            text-16 leading-24 font-[400] text-(--s-color-text-secondary)
            underline decoration-solid decoration-from-font
            underline-offset-auto
            hover:cursor-pointer
          `,
        onClick: () => {
          creditPanelManager.openCreditPanel({
            scene: uiPanelConstants.panelConstants.MainPanel,
            from: "after_message"
          });
        },
        children: s("credit_pc_genResult_notEnough_btn")
      })]
    });
  };
  require.d(exports, {
    CreditPanelTrigger: function () {
      return s;
    }
  });
}