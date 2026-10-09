// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'PPTEditorController'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 523959
         */
module.exports = function (module, exports, require) {
  var pptGuidanceStore = require("ppt-guidance-store") /*id: 940991*/;
  class r {
    focusOnEditor() {
      pptGuidanceStore.usePPTGuidanceStore.getState().updateFocusedState(true);
    }
    updateEditorValue() {}
    clearEditorValue() {}
  }
  require.d(exports, {
    PPTEditorController: function () {
      return r;
    }
  });
}