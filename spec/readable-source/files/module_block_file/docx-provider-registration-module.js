// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxAutoSelectProvider'
// - Resolved require(799573) to 'docx-auto-select-provider'
// - Renamed variable 'l' to 'docxBlockContainerProvider'
// - Resolved require(577766) to 'docx-block-container-provider'
// - Renamed variable 'o' to 'providerNameConstants'
// - Resolved require(349632) to 'provider-name-constants'
// - Renamed variable 's' to 'docxBlockOfflineProvider'
// - Resolved require(819294) to 'docx-block-offline-provider'
// - Renamed variable 'a' to 'docxOfflineFeatureCheck'
// - Resolved require(821237) to 'docx-offline-feature-check'
// - Renamed variable 'c' to 'blockAuthorProviderName'
// - Resolved require(488151) to 'block-author-provider-name'
// - Renamed variable 'd' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'h' to 'docxEditorProviderRegistry'
// - Resolved require(513130) to 'docx-editor-provider-registry'
// - Renamed variable 'u' to 'docxFileBlockModule'
// - Resolved require(883568) to 'docx-file-block-module'
// - Renamed variable 'p' to 'syncedBlockPermissionConnector_1'
// - Resolved require(618868) to 'synced-block-permission-connector_1'
// - Updated imported property 'Z' to 'registerFileBlock' (module 883568)
// - Updated imported property 'K' to 'getBlockAuthorProviderName' (module 488151)
// - Updated imported property 'Qm' to 'getZeroSpaceProviders' (module 513130)
// - Updated imported property 'Rd' to 'getSyncCursorSelectProviders' (module 513130)
// - Updated imported property 't' to 'isDocxOfflineFlag' (module 821237)
// - Updated imported property 'S' to 'blockOfflineName' (module 819294)
// - Updated imported property 'U' to 'autoSelectProvider' (module 799573)
// - Updated imported property 'X7' to 'blockDisplayConstants' (module 433991)
// - Updated imported property 'cu' to 'blockLoadingProvider' (module 349632)
// - Updated imported property 't' to 'blockContainerName' (module 577766)
// - Updated imported property 'Z' to 'syncedBlockConnector' (module 618868)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 875235
         */
module.exports = function (module, exports, require) {
  var docxAutoSelectProvider = require("docx-auto-select-provider") /*id: 799573*/;
  var docxBlockContainerProvider = require("docx-block-container-provider") /*id: 577766*/;
  var providerNameConstants = require("provider-name-constants") /*id: 349632*/;
  var docxBlockOfflineProvider = require("docx-block-offline-provider") /*id: 819294*/;
  var docxOfflineFeatureCheck = require("docx-offline-feature-check") /*id: 821237*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxFileBlockModule = require("docx-file-block-module") /*id: 883568*/;
  var syncedBlockPermissionConnector_1 = require("synced-block-permission-connector_1") /*id: 618868*/;
  function f() {
    docxFileBlockModule.registerFileBlock([blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getZeroSpaceProviders(), ...(docxOfflineFeatureCheck.isDocxOfflineFlag ? [] : [docxBlockOfflineProvider.blockOfflineName]), [docxAutoSelectProvider.autoSelectProvider, {
      isEffectiveInPart: true,
      contentSelector: ".docx-file-block-inner-container",
      disabled: e => e.displaymode === docBlockTypeConstants.blockDisplayConstants.INLINE
    }], ...docxEditorProviderRegistry.getSyncCursorSelectProviders(), [providerNameConstants.blockLoadingProvider, {
      displayMode: docBlockTypeConstants.blockDisplayConstants.BLOCK
    }], docxBlockContainerProvider.blockContainerName], syncedBlockPermissionConnector_1.syncedBlockConnector);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return f;
    }
  });
}