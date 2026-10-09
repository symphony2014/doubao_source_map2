// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'n' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable '_' to 'docxAnalyticsEventTracker'
// - Resolved require(739703) to 'docx-analytics-event-tracker'
// - Renamed variable 'c' to 'docxFeatStatusProvider'
// - Resolved require(125704) to 'docx-feat-status-provider'
// - Renamed variable 'a' to 'hookServiceDiConstants_1'
// - Resolved require(439395) to 'hook-service-di-constants_1'
// - Renamed variable 's' to 'moduleSettingProviderToken'
// - Resolved require(609239) to 'module-setting-provider-token'
// - Updated imported property 'M' to 'featStatusProvider' (module 125704)
// - Updated imported property 'e' to 'moduleSettingToken' (module 609239)
// - Updated imported property 't9' to 'hookActionTypes' (module 439395)
// - Updated imported property 'MR' to 'EditorInitStatus' (module 135760)
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// - Updated imported property 'N' to 'trackDocxAnalyticsEvent' (module 739703)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_print.0cd9ed94.js
         * chunkId: 73563
         * moduleId: 313522
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  var moduleSettingProviderToken = require("module-setting-provider-token") /*id: 609239*/;
  async function f(e) {
    let t = e.editorAPI.getService(hookServiceDiConstants_1.$$);
    let r = e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider);
    let o = e.editorAPI.getService(moduleSettingProviderToken.moduleSettingToken);
    if (r.getFeatureStatus(hookServiceDiConstants_1.hookActionTypes.PRINT) === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(hookServiceDiConstants_1.hookActionTypes.PRINT, e => {
        e.forEach(e => {
          let {
            blockSettingList: r,
            hookConfigList: i
          } = e;
          if (r) {
            r.forEach(e => {
              o.addBlockSetting(e);
            });
          }
          if (i) {
            i.forEach(e => {
              let {
                hookName: r,
                hookCallback: i,
                options: o
              } = e;
              t.register(hookServiceDiConstants_1.hookActionTypes.PRINT, r, i, o);
            });
          }
        });
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_print_hooks_and_setting_error", {
          error: e.message
        });
      });
    }
  }
  function u() {
    docxEditorCore.onInitHook(() => {
      f(dependencyInjectionContainer.get(blockManagerToken.blockManagerToken));
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return u;
    }
  });
}