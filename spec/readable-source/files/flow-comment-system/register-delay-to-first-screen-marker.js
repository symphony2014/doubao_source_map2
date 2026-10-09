// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerDelayToFirstScreenMarker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 893396
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var stageConstant = require("stage-constant") /*id: 199969*/;
  function a() {
    docxEditorCore.registerModTrig([[stageConstant.stage, {
      name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
    }]]);
  }
  require.d(exports, {
    registerDelayToFirstScreenMarker: function () {
      return a;
    }
  });
}