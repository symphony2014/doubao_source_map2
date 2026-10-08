// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CP' to 'registerTurnInto'
// - Renamed export 'cW' to 'checkTurnIntoLoaded'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 903253
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var deferredPromiseFactory_1 = require("deferred-promise-factory_1") /*id: 397926*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  require("editor-text-block-utilities") /*id: 469443*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxTurnIntoUtils = require("docx-turn-into-utils") /*id: 140870*/;
  let c = e => {
    let r = deferredPromiseFactory_1.deferredPromise();
    let n = "turnIntoEditable";
    if (e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(n) === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(n, n => {
        docxTurnIntoUtils.addTurnIntoCommand(e, n);
        r.resolve(n);
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_async_turn_into_rules_error", {
          error: e.message
        });
      });
    }
    return deferredPromiseFactory_1.deferredPromise;
  };
  function d(e) {
    if (e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus("turnIntoEditable") !== docxEditorCore.EditorInitStatus.LOADED) {
      docxAnalyticsEventTracker.trackDocxAnalyticsEvent("turn_into_setting_not_loaded_when_trigger");
      c(e);
    }
  }
  require.d(exports, {
    registerTurnInto: function () {
      return c;
    },
    checkTurnIntoLoaded: function () {
      return d;
    }
  });
}