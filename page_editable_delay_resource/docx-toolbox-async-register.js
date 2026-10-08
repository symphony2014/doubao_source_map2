// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'registerToolboxIcon'
// - Renamed export 'g' to 'checkToolboxReady'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 244888
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  function d(e) {
    if (e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(docxToolboxConstants_3.toolboxCommands.TOOL_BOX_GROUP_ITEMS_ASYNC) === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(docxToolboxConstants_3.toolboxCommands.TOOL_BOX_GROUP_ITEMS_ASYNC, r => {
        let o = e.editorAPI.getService(moduleSettingToken.moduleSettingToken, {
          optional: true
        });
        if (o != null) {
          o.add(docxToolboxConstants_3.toolboxCommands.GROUP_ITEMS, r);
        }
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_tool_box_block_icon_setting_error", {
          error: e.message
        });
      });
    }
  }
  let u = debounceUtil_1_1.debounce(e => {
    if (e.config.get("editable") && e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(docxToolboxConstants_3.toolboxCommands.TOOL_BOX_GROUP_ITEMS_ASYNC) !== docxEditorCore.EditorInitStatus.LOADED) {
      docxAnalyticsEventTracker.trackDocxAnalyticsEvent("toolbox_group_items_not_loaded_when_trigger");
      d(e);
    }
  }, 300);
  require.d(exports, {
    registerToolboxIcon: function () {
      return d;
    },
    checkToolboxReady: function () {
      return u;
    }
  });
}