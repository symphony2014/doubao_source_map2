// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Eg' to 'isEditable'
// - Renamed export 'L4' to 'isEnterRevising'
// - Renamed export 'kk' to 'EditorModes'
// - Renamed export 'r8' to 'canShowRevising'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 828858
         */
module.exports = function (module, exports, require) {
  var featureConstantsTypes = require("feature-constants-types") /*id: 882886*/;
  var editorRevisingStateUtils = require("editor-revising-state-utils") /*id: 83085*/;
  require.d(exports, {
    isEditable: function () {
      return editorRevisingStateUtils.isEditable;
    },
    isEnterRevising: function () {
      return editorRevisingStateUtils.isEnterRevising;
    },
    EditorModes: function () {
      return featureConstantsTypes.EditorModes;
    },
    canShowRevising: function () {
      return editorRevisingStateUtils.canShowRevising;
    }
  });
}