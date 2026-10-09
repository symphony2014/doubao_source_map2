// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'triggerDocxStageModWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 492872
         */
module.exports = function (module, exports, require) {
  var docxStageModTrigger = require("docx-stage-mod-trigger") /*id: 43684*/;
  function r() {
    docxStageModTrigger.triggerDocxStageMod();
  }
  require.d(exports, {
    triggerDocxStageModWrapper: function () {
      return r;
    }
  });
}