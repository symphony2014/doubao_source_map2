// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxAutoSelectProvider'
// - Resolved require(799573) to 'docx-auto-select-provider'
// - Renamed variable 'l' to 'docxBlockContainerProvider'
// - Resolved require(577766) to 'docx-block-container-provider'
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 's' to 'docxEditorProviderRegistry'
// - Resolved require(513130) to 'docx-editor-provider-registry'
// - Renamed variable 'a' to 'docxFileBlockModule'
// - Resolved require(883568) to 'docx-file-block-module'
// - Renamed variable 'c' to 'syncedBlockPermissionConnector_1'
// - Resolved require(618868) to 'synced-block-permission-connector_1'
// - Updated imported property 'Z' to 'registerFileBlock' (module 883568)
// - Updated imported property 'xY' to 'getHistoryDiffProvidersWithZeroSpace' (module 513130)
// - Updated imported property 'Qm' to 'getZeroSpaceProviders' (module 513130)
// - Updated imported property 'NQ' to 'getResourceBlockProviders' (module 513130)
// - Updated imported property 'U' to 'autoSelectProvider' (module 799573)
// - Updated imported property 'X7' to 'blockDisplayConstants' (module 433991)
// - Updated imported property 't' to 'blockContainerName' (module 577766)
// - Updated imported property 'Z' to 'syncedBlockConnector' (module 618868)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 884384
         */
module.exports = function (module, exports, require) {
  var docxAutoSelectProvider = require("docx-auto-select-provider") /*id: 799573*/;
  var docxBlockContainerProvider = require("docx-block-container-provider") /*id: 577766*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxFileBlockModule = require("docx-file-block-module") /*id: 883568*/;
  var syncedBlockPermissionConnector_1 = require("synced-block-permission-connector_1") /*id: 618868*/;
  function d() {
    docxFileBlockModule.registerFileBlock([...docxEditorProviderRegistry.getHistoryDiffProvidersWithZeroSpace(false), ...docxEditorProviderRegistry.getZeroSpaceProviders(), [docxAutoSelectProvider.autoSelectProvider, {
      isEffectiveInPart: true,
      contentSelector: ".docx-file-block-inner-container",
      disabled: e => e.displaymode === docBlockTypeConstants.blockDisplayConstants.INLINE
    }], ...docxEditorProviderRegistry.getResourceBlockProviders(), docxBlockContainerProvider.blockContainerName], syncedBlockPermissionConnector_1.syncedBlockConnector);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return d;
    }
  });
}