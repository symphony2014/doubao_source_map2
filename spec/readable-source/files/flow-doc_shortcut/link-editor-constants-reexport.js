// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GL' to 'entityTypes'
// - Renamed export 'Rc' to 'targetTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 716181
         */
module.exports = function (module, exports, require) {
  var linkEditorConstants = require("link-editor-constants") /*id: 962583*/;
  require.d(exports, {
    entityTypes: function () {
      return linkEditorConstants.entityTypes;
    },
    targetTypes: function () {
      return linkEditorConstants.targetTypes;
    }
  });
}