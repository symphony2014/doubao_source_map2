// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'registerAsyncToolboxMenuItemsHooks'
// - Renamed export 'r' to 'debouncedTriggerAsyncToolboxMenuItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 349217
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  function s(e) {
    let r = e.editorAPI.getService(hookServiceDiConstants_1.$$);
    if (e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(hookServiceDiConstants_1.hookActionTypes.TOOL_BOX_ORGANIZE_MENU_ITEMS_ASYNC) === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(hookServiceDiConstants_1.hookActionTypes.TOOL_BOX_ORGANIZE_MENU_ITEMS_ASYNC, e => {
        e.forEach(e => {
          let {
            hookName: o,
            hookCallback: l,
            options: n
          } = e;
          r.register(hookServiceDiConstants_1.hookActionTypes.TOOL_BOX_ORGANIZE_MENU_ITEMS_ASYNC, o, l, n);
        });
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_async_tool_box_organize_menu_items_hooks_error", {
          error: e.message
        });
      });
    }
  }
  let d = debounceUtil_1_1.debounce(e => {
    if (e.config.get("editable") && e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(hookServiceDiConstants_1.hookActionTypes.TOOL_BOX_ORGANIZE_MENU_ITEMS_ASYNC) !== docxEditorCore.EditorInitStatus.LOADED) {
      docxAnalyticsEventTracker.trackDocxAnalyticsEvent("async_toolbox_organize_menu_items_not_loaded_when_trigger");
      s(e);
    }
  }, 300);
  require.d(exports, {
    registerAsyncToolboxMenuItemsHooks: function () {
      return s;
    },
    debouncedTriggerAsyncToolboxMenuItems: function () {
      return d;
    }
  });
}