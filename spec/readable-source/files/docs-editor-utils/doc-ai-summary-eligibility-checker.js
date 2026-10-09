// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'checkDocAiSummaryEligibility'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 225028
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var viewModeConstants = require("view-mode-constants") /*id: 204949*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditableSelectors = require("docx-editable-selectors") /*id: 195725*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docAiSummaryConstants = require("doc-ai-summary-constants") /*id: 306015*/;
  var docxMetadataSummaryConfig = require("docx-metadata-summary-config") /*id: 697646*/;
  let _ = e => {
    var r;
    let {
      translated: _,
      isDocxAtSheet: p,
      blockManager: g,
      isSSR: E
    } = e;
    if (browserEnvironmentDetectionUtils.browserDetector.isH5 || browserEnvironmentDetectionUtils.browserDetector.isInVC || browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms || browserEnvironmentDetectionUtils.browserDetector.isOpenDoc || browserEnvironmentDetectionUtils.browserDetector.isDocComponent() || opendocImageViewerUtils.hasNoNeedJsSDKSession || p || _ || docComponentFeatureFlags.isImchatSyncedBlk() || syncUrlBlockUtils.isSyncingActive() || platformDocUtils.KNd()) {
      return false;
    }
    if (E) {
      if (((r = window.SERVER_DATA) === null || r === undefined ? undefined : r.ccmCommonSetting?.doc_ai_summary_hidden) === docAiSummaryConstants.visibilityState.HIDDEN) {
        return false;
      }
    } else {
      if (browserEnvironmentDetectionUtils.browserDetector.isMeetingNote || docComponentFeatureFlags.isCalendarAgenda() || docComponentFeatureFlags.isVcAgenda() || new URLSearchParams(window.location.search).get("from") === "base_instruction_docx" || !g) {
        return false;
      }
      let e = g.editorAPI.config.get("isMain") ? browserEnvironmentDetectionUtils.browserEnv.isMobile ? viewModeConstants.viewModes.MAIN_MOBILE : viewModeConstants.viewModes.MAIN_PC : g.editorAPI.config.get("isSSR") ? viewModeConstants.viewModes.SSR : g.editorAPI.config.get("isShortcut") ? viewModeConstants.viewModes.SHORTCUT : g.editorAPI.config.get("isHistory") ? viewModeConstants.viewModes.HISTORY : g.editorAPI.config.get("isPresentationMode") ? viewModeConstants.viewModes.PRESENTATION : !g.editorAPI.config.get("isPreview") || g.editorAPI.config.get("isHistory") || g.editorAPI.config.get("isPresentationMode") ? viewModeConstants.viewModes.MAIN_PC : viewModeConstants.viewModes.PREVIEW;
      if (![viewModeConstants.viewModes.SSR, viewModeConstants.viewModes.MAIN_PC, viewModeConstants.viewModes.MAIN_MOBILE].includes(e)) {
        return false;
      }
      let n = docxEditableSelectors.selectRevising(reduxStoreInitializer.reduxStore.getState());
      let r = docxEditableSelectors.selectEditing(reduxStoreInitializer.reduxStore.getState());
      if (n) {
        return false;
      }
      if (r) {
        return docxMetadataSummaryConfig.isMetadataSummaryEnabled() && docxMetadataSummaryConfig.isEditorSummaryEnabled();
      }
    }
    return docxMetadataSummaryConfig.isMetadataSummaryEnabled();
  };
  require.d(exports, {
    checkDocAiSummaryEligibility: function () {
      return _;
    }
  });
}