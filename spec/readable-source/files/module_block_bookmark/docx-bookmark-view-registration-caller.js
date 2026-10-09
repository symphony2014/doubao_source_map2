// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'docxAutoSelectProvider'
// - Resolved require(799573) to 'docx-auto-select-provider'
// - Renamed variable 'o' to 'docxBlockContainerProvider'
// - Resolved require(577766) to 'docx-block-container-provider'
// - Renamed variable 'n' to 'docxBlockOfflineProvider'
// - Resolved require(819294) to 'docx-block-offline-provider'
// - Renamed variable 'a' to 'blockAuthorProviderName'
// - Resolved require(488151) to 'block-author-provider-name'
// - Renamed variable 'l' to 'docxSyncCursorSelectProvider'
// - Resolved require(944587) to 'docx-sync-cursor-select-provider'
// - Renamed variable 'c' to 'docxEditorProviderRegistry'
// - Resolved require(513130) to 'docx-editor-provider-registry'
// - Renamed variable 'd' to 'docxBookmarkViewRegistration_1'
// - Resolved require(970163) to 'docx-bookmark-view-registration_1'
// - Updated imported property 'Z' to 'registerBookmarkView' (module 970163)
// - Updated imported property 'K' to 'getBlockAuthorProviderName' (module 488151)
// - Updated imported property 'Qm' to 'getZeroSpaceProviders' (module 513130)
// - Updated imported property 'qT' to 'getCommentProviders' (module 513130)
// - Updated imported property 'rD' to 'getBlockRevisionProviders' (module 513130)
// - Updated imported property 'S' to 'blockOfflineName' (module 819294)
// - Updated imported property 'U' to 'autoSelectProvider' (module 799573)
// - Updated imported property 't' to 'blockContainerName' (module 577766)
// - Updated imported property 'u' to 'syncCursorSelectName' (module 944587)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_bookmark.99f38744.js
         * chunkId: 70225
         * moduleId: 623645
         */
module.exports = function (module, exports, require) {
  var docxAutoSelectProvider = require("docx-auto-select-provider") /*id: 799573*/;
  var docxBlockContainerProvider = require("docx-block-container-provider") /*id: 577766*/;
  var docxBlockOfflineProvider = require("docx-block-offline-provider") /*id: 819294*/;
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxSyncCursorSelectProvider = require("docx-sync-cursor-select-provider") /*id: 944587*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxBookmarkViewRegistration_1 = require("docx-bookmark-view-registration_1") /*id: 970163*/;
  function h() {
    docxBookmarkViewRegistration_1.registerBookmarkView([blockAuthorProviderName.getBlockAuthorProviderName, ...docxEditorProviderRegistry.getZeroSpaceProviders(), docxBlockOfflineProvider.blockOfflineName, docxAutoSelectProvider.autoSelectProvider, ...docxEditorProviderRegistry.getCommentProviders(), ...docxEditorProviderRegistry.getBlockRevisionProviders(), docxBlockContainerProvider.blockContainerName, docxSyncCursorSelectProvider.syncCursorSelectName]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return h;
    }
  });
}