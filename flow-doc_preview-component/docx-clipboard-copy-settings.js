// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'isClipboardCopyLoaded'
// - Renamed export 'y' to 'registerClipboardCopySettings'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 357081
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var deferredPromiseFactory_1 = require("deferred-promise-factory_1") /*id: 397926*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  async function u(e) {
    let n = deferredPromiseFactory_1.deferredPromise();
    let i = e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_COPY);
    let u = e.editorAPI.getService(moduleSettingToken.moduleSettingToken, {
      optional: true
    });
    if (i === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_COPY, e => {
        e.forEach(e => {
          if (e.blockSetting) {
            if (u != null) {
              u.addBlockSetting(e.blockSetting);
            }
          }
        });
        n.resolve(e);
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_copy_setting_error", {
          error: e.message
        });
        n.reject(e);
      });
    }
    return n.promise;
  }
  function d(e) {
    return e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_COPY) === docxEditorCore.EditorInitStatus.LOADED;
  }
  require.d(exports, {
    isClipboardCopyLoaded: function () {
      return d;
    },
    registerClipboardCopySettings: function () {
      return u;
    }
  });
}