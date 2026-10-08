// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GL' to 'entityTypes'
// - Renamed export 'Rc' to 'targetTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 589703
         */
module.exports = function (module, exports, require) {
  var linkEditorConstantsReexport = require("link-editor-constants-reexport") /*id: 716181*/;
  require.d(exports, {
    entityTypes: function () {
      return linkEditorConstantsReexport.entityTypes;
    },
    targetTypes: function () {
      return linkEditorConstantsReexport.targetTypes;
    }
  });
}