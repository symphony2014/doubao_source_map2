// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerStageModule'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 74788
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var stageConstant = require("stage-constant") /*id: 199969*/;
  function s() {
    docxEditorCore.registerModTrig([[stageConstant.stage, {
      name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
    }]]);
  }
  require.d(exports, {
    registerStageModule: function () {
      return s;
    }
  });
}