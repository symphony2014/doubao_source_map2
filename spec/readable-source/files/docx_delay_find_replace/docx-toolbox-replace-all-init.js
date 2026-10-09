// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'loadReplaceAll'
// - Renamed export 'v' to 'debouncedReplaceAll'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 528259
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  function d(e) {
    let r = e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider);
    let i = e.editorAPI.getService(moduleSettingToken.moduleSettingToken, {
      optional: true
    });
    if (r.getFeatureStatus(docxToolboxConstants_3.toolboxCommands.REPLACE_ALL) === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(docxToolboxConstants_3.toolboxCommands.REPLACE_ALL, e => {
        e.forEach(e => {
          if (e.blockSetting) {
            if (i != null) {
              i.addBlockSetting(e.blockSetting);
            }
          }
        });
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_tool_box_block_icon_setting_error", {
          error: e.message
        });
      });
    }
  }
  let u = debounceUtil_1_1.debounce(e => {
    if (e.config.get("editable") && e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(docxToolboxConstants_3.toolboxCommands.REPLACE_ALL) !== docxEditorCore.EditorInitStatus.LOADED) {
      docxAnalyticsEventTracker.trackDocxAnalyticsEvent("toolbox_replace_all_setting_not_loaded_when_trigger");
      d(e);
    }
  }, 300);
  require.d(exports, {
    loadReplaceAll: function () {
      return d;
    },
    debouncedReplaceAll: function () {
      return u;
    }
  });
}