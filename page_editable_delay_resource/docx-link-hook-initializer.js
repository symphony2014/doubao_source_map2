// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'a' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable 'l' to 'docxAnalyticsEventTracker'
// - Resolved require(739703) to 'docx-analytics-event-tracker'
// - Renamed variable 's' to 'docxFeatStatusProvider'
// - Resolved require(125704) to 'docx-feat-status-provider'
// - Renamed variable 'c' to 'hookServiceDiConstants_1'
// - Resolved require(439395) to 'hook-service-di-constants_1'
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// - Updated imported property 'MR' to 'EditorInitStatus' (module 135760)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// - Updated imported property 'M' to 'featStatusProvider' (module 125704)
// - Updated imported property 't9' to 'hookActionTypes' (module 439395)
// - Updated imported property 'N' to 'trackDocxAnalyticsEvent' (module 739703)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 771119
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  function d() {
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(blockManagerToken.blockManagerToken);
      (function (e) {
        let r = e.editorAPI.getService(hookServiceDiConstants_1.$$);
        if (e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(hookServiceDiConstants_1.hookActionTypes.LINK_TRANSFORM_QUEUE) === docxEditorCore.EditorInitStatus.INIT) {
          e.editorAPI.featureService.loadFeatureConfigs(hookServiceDiConstants_1.hookActionTypes.LINK_TRANSFORM_QUEUE, e => {
            e.forEach(e => {
              let {
                hookConfigList: i
              } = e;
              if (i) {
                i.forEach(e => {
                  let {
                    hookName: i,
                    hookCallback: n,
                    options: o
                  } = e;
                  r.register(hookServiceDiConstants_1.hookActionTypes.LINK_TRANSFORM_QUEUE, i, n, o);
                });
              }
            });
          }, e => {
            docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_link_transform_queue_hooks_error", {
              error: e.message
            });
          });
        }
      })(e);
      (function (e) {
        let r = e.editorAPI.getService(hookServiceDiConstants_1.$$);
        if (e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(hookServiceDiConstants_1.hookActionTypes.LINK_PASTE_PANEL) === docxEditorCore.EditorInitStatus.INIT) {
          e.editorAPI.featureService.loadFeatureConfigs(hookServiceDiConstants_1.hookActionTypes.LINK_PASTE_PANEL, e => {
            e.forEach(e => {
              let {
                hookConfigList: i
              } = e;
              if (i) {
                i.forEach(e => {
                  let {
                    hookName: i,
                    hookCallback: n,
                    options: o
                  } = e;
                  r.register(hookServiceDiConstants_1.hookActionTypes.LINK_PASTE_PANEL, i, n, o);
                });
              }
            });
          }, e => {
            docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_link_paste_panel_hooks_error", {
              error: e.message
            });
          });
        }
      })(e);
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return d;
    }
  });
}