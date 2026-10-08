// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'viewModeConstants'
// - Resolved require(204949) to 'view-mode-constants'
// - Renamed variable 'n' to 'providerNameConstants'
// - Resolved require(349632) to 'provider-name-constants'
// - Renamed variable 's' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'l' to 'docxEditorProviderRegistry'
// - Resolved require(513130) to 'docx-editor-provider-registry'
// - Renamed variable 'a' to 'sheetBlockProviderRegistration'
// - Resolved require(710837) to 'sheet-block-provider-registration'
// - Updated imported property 'Z' to 'registerSheetBlockProvider' (module 710837)
// - Updated imported property 're' to 'getHistoryDiffProviders' (module 513130)
// - Updated imported property 'Qm' to 'getZeroSpaceProviders' (module 513130)
// - Updated imported property 'co' to 'getMobileScrollProviders' (module 513130)
// - Updated imported property 'NQ' to 'getResourceBlockProviders' (module 513130)
// - Updated imported property 'cu' to 'blockLoadingProvider' (module 349632)
// - Updated imported property 'X7' to 'blockDisplayConstants' (module 433991)
// - Updated imported property 'kH' to 'tableTypeConstants' (module 433991)
// - Updated imported property 'J' to 'viewModes' (module 204949)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_sheet.7c516216.js
         * chunkId: 93700
         * moduleId: 949150
         */
module.exports = function (module, exports, require) {
  var viewModeConstants = require("view-mode-constants") /*id: 204949*/;
  var providerNameConstants = require("provider-name-constants") /*id: 349632*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var sheetBlockProviderRegistration = require("sheet-block-provider-registration") /*id: 710837*/;
  function d() {
    sheetBlockProviderRegistration.registerSheetBlockProvider([...docxEditorProviderRegistry.getHistoryDiffProviders(), ...docxEditorProviderRegistry.getZeroSpaceProviders(), [providerNameConstants.blockLoadingProvider, {
      displayMode: docBlockTypeConstants.blockDisplayConstants.BLOCK,
      autoNotifyRenderFinish: true
    }], ...docxEditorProviderRegistry.getMobileScrollProviders(docBlockTypeConstants.tableTypeConstants.SHEET, {
      appMode: viewModeConstants.viewModes.HISTORY
    }), ...docxEditorProviderRegistry.getResourceBlockProviders()]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return d;
    }
  });
}