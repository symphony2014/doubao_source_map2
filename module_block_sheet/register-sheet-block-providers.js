// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'viewModeConstants'
// - Resolved require(204949) to 'view-mode-constants'
// - Renamed variable 'n' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 's' to 'providerNameConstants'
// - Resolved require(349632) to 'provider-name-constants'
// - Renamed variable 'l' to 'docxBlockOfflineProvider'
// - Resolved require(819294) to 'docx-block-offline-provider'
// - Renamed variable 'a' to 'blockAuthorProviderName'
// - Resolved require(488151) to 'block-author-provider-name'
// - Renamed variable 'd' to 'docsModeProviderNames'
// - Resolved require(987445) to 'docs-mode-provider-names'
// - Renamed variable 'h' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'c' to 'docxEditorProviderRegistry'
// - Resolved require(513130) to 'docx-editor-provider-registry'
// - Renamed variable 'u' to 'sheetBlockProviderRegistration'
// - Resolved require(710837) to 'sheet-block-provider-registration'
// - Updated imported property 'Z' to 'registerSheetBlockProvider' (module 710837)
// - Updated imported property 'K' to 'getBlockAuthorProviderName' (module 488151)
// - Updated imported property 'Qm' to 'getZeroSpaceProviders' (module 513130)
// - Updated imported property 'co' to 'getMobileScrollProviders' (module 513130)
// - Updated imported property 'Rd' to 'getSyncCursorSelectProviders' (module 513130)
// - Updated imported property 'S' to 'blockOfflineName' (module 819294)
// - Updated imported property '$b' to 'sheetProviderName' (module 987445)
// - Updated imported property 'cu' to 'blockLoadingProvider' (module 349632)
// - Updated imported property 'X7' to 'blockDisplayConstants' (module 433991)
// - Updated imported property 'kH' to 'tableTypeConstants' (module 433991)
// - Updated imported property 'XF' to 'browserEnv' (module 744607)
// - Updated imported property 'J' to 'viewModes' (module 204949)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_sheet.7c516216.js
         * chunkId: 93700
         * moduleId: 997729
         */
module.exports = function (module, exports, require) {
  var viewModeConstants = require("view-mode-constants") /*id: 204949*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var providerNameConstants = require("provider-name-constants") /*id: 349632*/;
  var docxBlockOfflineProvider = require("docx-block-offline-provider") /*id: 819294*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docsModeProviderNames = require("docs-mode-provider-names") /*id: 987445*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var sheetBlockProviderRegistration = require("sheet-block-provider-registration") /*id: 710837*/;
  function m() {
    sheetBlockProviderRegistration.registerSheetBlockProvider([blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getZeroSpaceProviders(), docxBlockOfflineProvider.blockOfflineName, docsModeProviderNames.sheetProviderName, [providerNameConstants.blockLoadingProvider, {
      displayMode: docBlockTypeConstants.blockDisplayConstants.BLOCK,
      autoNotifyRenderFinish: true
    }], ...docxEditorProviderRegistry.getMobileScrollProviders(docBlockTypeConstants.tableTypeConstants.SHEET, {
      appMode: browserEnvironmentDetectionUtils.browserEnv.isMobile ? viewModeConstants.viewModes.MAIN_MOBILE : viewModeConstants.viewModes.MAIN_PC
    }), ...docxEditorProviderRegistry.getSyncCursorSelectProviders()]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return m;
    }
  });
}