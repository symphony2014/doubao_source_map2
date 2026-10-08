// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'docxAutoSelectProvider'
// - Resolved require(799573) to 'docx-auto-select-provider'
// - Renamed variable 'o' to 'docxBlockContainerProvider'
// - Resolved require(577766) to 'docx-block-container-provider'
// - Renamed variable 'n' to 'docxEditorProviderRegistry'
// - Resolved require(513130) to 'docx-editor-provider-registry'
// - Renamed variable 'a' to 'docxBookmarkViewRegistration_1'
// - Resolved require(970163) to 'docx-bookmark-view-registration_1'
// - Updated imported property 'Z' to 'registerBookmarkView' (module 970163)
// - Updated imported property 'xY' to 'getHistoryDiffProvidersWithZeroSpace' (module 513130)
// - Updated imported property 'U' to 'autoSelectProvider' (module 799573)
// - Updated imported property 't' to 'blockContainerName' (module 577766)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_bookmark.99f38744.js
         * chunkId: 70225
         * moduleId: 17626
         */
module.exports = function (module, exports, require) {
  var docxAutoSelectProvider = require("docx-auto-select-provider") /*id: 799573*/;
  var docxBlockContainerProvider = require("docx-block-container-provider") /*id: 577766*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxBookmarkViewRegistration_1 = require("docx-bookmark-view-registration_1") /*id: 970163*/;
  function l() {
    docxBookmarkViewRegistration_1.registerBookmarkView([...docxEditorProviderRegistry.getHistoryDiffProvidersWithZeroSpace(true), docxAutoSelectProvider.autoSelectProvider, docxBlockContainerProvider.blockContainerName]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return l;
    }
  });
}