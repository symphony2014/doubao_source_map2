// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'docxBlockContainerProvider'
// - Resolved require(577766) to 'docx-block-container-provider'
// - Renamed variable 'o' to 'docxEditorProviderRegistry'
// - Resolved require(513130) to 'docx-editor-provider-registry'
// - Renamed variable 'n' to 'docxBookmarkViewRegistration_1'
// - Resolved require(970163) to 'docx-bookmark-view-registration_1'
// - Updated imported property 'Z' to 'registerBookmarkView' (module 970163)
// - Updated imported property 'Qm' to 'getZeroSpaceProviders' (module 513130)
// - Updated imported property 't' to 'blockContainerName' (module 577766)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_bookmark.99f38744.js
         * chunkId: 70225
         * moduleId: 659391
         */
module.exports = function (module, exports, require) {
  var docxBlockContainerProvider = require("docx-block-container-provider") /*id: 577766*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxBookmarkViewRegistration_1 = require("docx-bookmark-view-registration_1") /*id: 970163*/;
  function a() {
    docxBookmarkViewRegistration_1.registerBookmarkView([...docxEditorProviderRegistry.getZeroSpaceProviders(), docxBlockContainerProvider.blockContainerName]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return a;
    }
  });
}