// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxBlockContainerProvider'
// - Resolved require(577766) to 'docx-block-container-provider'
// - Renamed variable 'l' to 'docxEditorProviderRegistry'
// - Resolved require(513130) to 'docx-editor-provider-registry'
// - Renamed variable 'o' to 'larkPageFileBlockOptionsName'
// - Resolved require(728378) to 'lark-page-file-block-options-name'
// - Renamed variable 's' to 'docxFileBlockModule'
// - Resolved require(883568) to 'docx-file-block-module'
// - Renamed variable 'a' to 'syncedBlockPermissionConnector_1'
// - Resolved require(618868) to 'synced-block-permission-connector_1'
// - Updated imported property 'Z' to 'registerFileBlock' (module 883568)
// - Updated imported property 'Qm' to 'getZeroSpaceProviders' (module 513130)
// - Updated imported property 'G' to 'larkFileBlockName' (module 728378)
// - Updated imported property 't' to 'blockContainerName' (module 577766)
// - Updated imported property 'Z' to 'syncedBlockConnector' (module 618868)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 243251
         */
module.exports = function (module, exports, require) {
  var docxBlockContainerProvider = require("docx-block-container-provider") /*id: 577766*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var larkPageFileBlockOptionsName = require("lark-page-file-block-options-name") /*id: 728378*/;
  var docxFileBlockModule = require("docx-file-block-module") /*id: 883568*/;
  var syncedBlockPermissionConnector_1 = require("synced-block-permission-connector_1") /*id: 618868*/;
  function c() {
    docxFileBlockModule.registerFileBlock([...docxEditorProviderRegistry.getZeroSpaceProviders(), larkPageFileBlockOptionsName.larkFileBlockName, docxBlockContainerProvider.blockContainerName], syncedBlockPermissionConnector_1.syncedBlockConnector);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return c;
    }
  });
}