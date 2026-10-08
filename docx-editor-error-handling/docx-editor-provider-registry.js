// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c$' to 'getTranslationButtonProviders'
// - Renamed export 're' to 'getHistoryDiffProviders'
// - Renamed export 'rD' to 'getBlockRevisionProviders'
// - Renamed export 'co' to 'getMobileScrollProviders'
// - Renamed export 'qT' to 'getCommentProviders'
// - Renamed export 'Ld' to 'getTranslateClassProviders'
// - Renamed export 'xY' to 'getHistoryDiffProvidersWithZeroSpace'
// - Renamed export 'Qm' to 'getZeroSpaceProviders'
// - Renamed export 'NQ' to 'getResourceBlockProviders'
// - Renamed export 'Up' to 'getScrollProviderConfig'
// - Renamed export 'Rd' to 'getSyncCursorSelectProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 513130
         */
module.exports = function (module, exports, require) {
  var viewModeConstants = require("view-mode-constants") /*id: 204949*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  require("provider-name-constants") /*id: 349632*/;
  var docxCommentProviderNames = require("docx-comment-provider-names") /*id: 180127*/;
  require("docx-editor-presentation-mode-init") /*id: 125449*/;
  var resourceBlockProviderName = require("resource-block-provider-name") /*id: 242875*/;
  var docxBlockRevisionProvider = require("docx-block-revision-provider") /*id: 728098*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  let h = docxEditorCore.getProviderName("translate-class");
  var zeroSpaceProviderName = require("zero-space-provider-name") /*id: 715309*/;
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  require("docx-fold-provider-name") /*id: 207215*/;
  var docxSyncCursorSelectProvider = require("docx-sync-cursor-select-provider") /*id: 944587*/;
  let m = docxEditorCore.getProviderName("translation-button");
  require("doc-block-type-constants") /*id: 433991*/;
  var historyDiffProviderNames = require("history-diff-provider-names") /*id: 818901*/;
  function b(e) {
    if (e.get("translated")) {
      return [h];
    } else {
      return [];
    }
  }
  function y(e) {
    let i = e.get("translated");
    let r = e.get("isUneditedTranslationMode");
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile || !i || r) {
      return [];
    } else {
      return [m];
    }
  }
  function S() {
    if (opendocImageViewerUtils.OpendocImageViewerUtils.checkShouldRegisComment()) {
      return [docxCommentProviderNames.blockComment];
    } else {
      return [];
    }
  }
  function k() {
    return [docxBlockRevisionProvider.blockRevisionName];
  }
  function E() {
    return [zeroSpaceProviderName.zeroSpaceProviderName];
  }
  function C(e, i) {
    return [docxScrollableConstants.scrollProviderName, {
      enableRightShadow: true,
      isClipLeft: false,
      scrollbarToBlock: 0,
      subScrollerLeftOffset: 0,
      enableNativeSubScroll: "auto",
      ignoreScrollClasses: [],
      nestedScrollClasses: [],
      rootSelector: (i == null ? undefined : i.appMode) === viewModeConstants.viewModes.HISTORY ? `.${docxEditorConstantsConfig.containerIds.HISTORY_CONTAINER}` : `.${docxEditorConstantsConfig.containerIds.ROOT}`,
      noCommentPanel: false,
      ...i
    }];
  }
  function _(e, i) {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return [];
    } else {
      return [C(e, i)];
    }
  }
  function R() {
    return [historyDiffProviderNames.historyDiffBlockHighlightProvider, ...k()];
  }
  function I() {
    return [docxSyncCursorSelectProvider.syncCursorSelectName, ...S(), ...k(), resourceBlockProviderName.resourceBlockName];
  }
  function M() {
    return [resourceBlockProviderName.resourceBlockName];
  }
  function T(e) {
    return [historyDiffProviderNames.historyDiffBlockHighlightProvider, ...k(), ...(e ? [zeroSpaceProviderName.zeroSpaceProviderName] : [])];
  }
  require.d(exports, {
    getTranslationButtonProviders: function () {
      return y;
    },
    getHistoryDiffProviders: function () {
      return R;
    },
    getBlockRevisionProviders: function () {
      return k;
    },
    getMobileScrollProviders: function () {
      return _;
    },
    getCommentProviders: function () {
      return S;
    },
    getTranslateClassProviders: function () {
      return b;
    },
    getHistoryDiffProvidersWithZeroSpace: function () {
      return T;
    },
    getZeroSpaceProviders: function () {
      return E;
    },
    getResourceBlockProviders: function () {
      return M;
    },
    getScrollProviderConfig: function () {
      return C;
    },
    getSyncCursorSelectProviders: function () {
      return I;
    }
  });
}