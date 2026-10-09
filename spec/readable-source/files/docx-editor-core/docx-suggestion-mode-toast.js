// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'showSuggestionToast'
// - Renamed export 'j' to 'handleEditBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 940071
         */
module.exports = function (module, exports, require) {
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var toastNotificationHandler = require("toast-notification-handler") /*id: 669090*/;
  var featureConstantsTypes = require("feature-constants-types") /*id: 882886*/;
  var docsModeProviderToken = require("docs-mode-provider-token") /*id: 431030*/;
  var docxSuggestionModeEvents = require("docx-suggestion-mode-events") /*id: 263624*/;
  var docTranslateEditCheck = require("doc-translate-edit-check") /*id: 293309*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = "revision-switch-mode-toast";
  function g(e) {
    return !!e.config.get("revising");
  }
  function p(e, n = t("LarkCCM_Docs_Suggest_CantSuggestApplyDirectly_Toast"), i = false) {
    if (g(e) || i) {
      toastNotificationHandler.showToast({
        mobileToastType: "top",
        pcToastType: "info",
        message: n,
        closable: true,
        key: "revision-tips-toast-key",
        duration: 3000
      });
      docxSuggestionModeEvents.trackAlertView();
    }
  }
  function m(e) {
    if (!g(e) && !docTranslateEditCheck.isTranslateEditMode(e)) {
      return;
    }
    docxSuggestionModeEvents.trackAlertView();
    let n = t("LarkCCM_Docs_Suggest_UnableToEditBlockInSuggestMode_Tooltip");
    if (docTranslateEditCheck.isTranslateEditMode(e)) {
      n = t("LarkCCM_Docs_Translate_UnableEditBlock_Tooltip");
    }
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      p(e, n, docTranslateEditCheck.isTranslateEditMode(e));
      return;
    }
    let i = e.editorAPI.getService(docsModeProviderToken.docsModeProvider, {
      optional: true
    });
    toastNotificationManager_1.toastManager.info({
      content: n,
      duration: 3000,
      closable: true,
      key: f,
      action: !docTranslateEditCheck.isTranslateEditMode(e) && reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
        type: "text",
        color: "primary",
        style: {
          margin: "-2px 0 -2px -4px"
        },
        onClick: () => {
          if (i != null) {
            i.switchToEditing(featureConstantsTypes.UiSources.TOAST);
          }
          docxSuggestionModeEvents.trackChangeToEdit();
          toastNotificationManager_1.toastManager.destroy(f);
        },
        children: t("LarkCCM_Docs_Suggest_SwitchToEditMode_Button")
      })
    });
  }
  require.d(exports, {
    showSuggestionToast: function () {
      return p;
    },
    handleEditBlock: function () {
      return m;
    }
  });
}