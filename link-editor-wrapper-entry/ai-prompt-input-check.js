// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'isInPromptInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 996458
         */
module.exports = function (module, exports, require) {
  var aiPromptClassNames = require("ai-prompt-class-names") /*id: 994243*/;
  function i(e) {
    var n;
    if ((n = document.querySelector(`.${aiPromptClassNames.promptInputContainer}`)) === null || n === undefined) {
      return undefined;
    } else {
      return n.contains(e);
    }
  }
  require.d(exports, {
    isInPromptInput: function () {
      return i;
    }
  });
}