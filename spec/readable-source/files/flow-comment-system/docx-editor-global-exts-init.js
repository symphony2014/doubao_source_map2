// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initGlobalExtensions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 23372
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var taskListSiderClasses = require("task-list-sider-classes") /*id: 604839*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxBlockLimitNoticeProvider = require("docx-block-limit-notice-provider") /*id: 384867*/;
  var docxCommentProviderNames = require("docx-comment-provider-names") /*id: 180127*/;
  var docxEditModeProvider = require("docx-edit-mode-provider") /*id: 90864*/;
  var docxEditorProviderName = require("docx-editor-provider-name") /*id: 326421*/;
  let h = docxEditorCore.getProviderName("okrx-siderbar");
  let u = docxEditorCore.getProviderName("task-list-siderbar");
  var textInputTimeProviderName = require("text-input-time-provider-name") /*id: 113009*/;
  var textToolbarPluginProvider = require("text-toolbar-plugin-provider") /*id: 492379*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  let g = docxEditorCore.getProviderName("ai-suggestion-side-bar");
  docxEditorCore.getProviderName("ai-suggestion-popover-card");
  var getTextHighlightProviderName = require("get-text-highlight-provider-name") /*id: 318467*/;
  var blockTipProviderName = require("block-tip-provider-name") /*id: 153513*/;
  var focusObserverProviderName = require("focus-observer-provider-name") /*id: 611243*/;
  var hoverProviderNameConstant = require("hover-provider-name-constant") /*id: 226959*/;
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var syncCursorConstantsAndProvider = require("sync-cursor-constants-and-provider") /*id: 88389*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var docPreviewSyncGetter = require("doc-preview-sync-getter") /*id: 243296*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var mentionSharePanelProvider = require("mention-share-panel-provider") /*id: 868039*/;
  var stubTrueFunctions = require("stub-true-functions") /*id: 386838*/;
  function B(e, i) {
    let n = docPreviewSyncGetter.getSyncedRefBlock(i.config);
    docxEditorCore.updateGlobalExts([textInputTimeProviderName.getTextInputTimeProviderName, orderedBlockConstants.orderedMonitorName, blockTipProviderName.blockTipProviderName, syncCursorConstantsAndProvider.syncCursorProviderName, getTextHighlightProviderName.getProviderName, docxEditModeProvider.editModeName, docxEditorConstantsConfig_1.textToolbarProvider, docxEditorConstantsConfig_1.textBlockToolbarProvider_1, docxEditorConstantsConfig_1.blockToolbarProvider, docxEditorConstantsConfig_1.editLinkProvider, docxEditorConstantsConfig_1.newChildDocProvider, textToolbarPluginProvider.textToolbarProvider, [hoverProviderNameConstant.hoverProviderName, {
      ignoreClasses: ["menu-trigger", "overlay-mask", "block-overlay", "bidirection-link-list", taskListSiderClasses.siderBarSticky, "force-show-chatbox"],
      noResponseTarget: ["column-resizer-item", "column-gap"],
      blockFilters: [".backlink"]
    }], ...(docComponentFeatureFlags.isBlockMenuDisabled() ? [] : [docxEditorConstantsConfig_1.textBlockToolbarProvider]), ...(browserEnvironmentDetectionUtils.browserDetector.isFeed ? [] : [docxCommentProviderNames.suspensionComment]), focusObserverProviderName.focusObserverName, h, ...(stubTrueFunctions.alwaysTrueStub() ? [mentionSharePanelProvider.mentionProviderName] : []), ...(docComponentFeatureFlags.isSyncedBlockOpt3() ? [] : [u]), ...(n || docComponentFeatureFlags.isSyncedBlockOpt3() ? [] : [docxEditorProviderName.getProviderName]), ...(syncUrlBlockUtils.isSyncingActive() ? [] : [docxCommentProviderNames.commentInteraction]), docxBlockLimitNoticeProvider.blockLimitNoticeName, g]);
  }
  require.d(exports, {
    initGlobalExtensions: function () {
      return B;
    }
  });
}