// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerDocxStages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 561647
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var dynamicModeConst = require("dynamic-mode-const") /*id: 959888*/;
  var stageConstant = require("stage-constant") /*id: 199969*/;
  function c() {
    docxEditorCore.registerModTrig([[stageConstant.stage, {
      name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
    }], [dynamicModeConst.dynamicMode, {
      stage: businessStageConstants.businessConstants.DocxStage.immediate
    }]]);
  }
  require.d(exports, {
    registerDocxStages: function () {
      return c;
    }
  });
}