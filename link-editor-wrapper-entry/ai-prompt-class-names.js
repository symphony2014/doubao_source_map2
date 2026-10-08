// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'promptInputContainer'
// - Renamed export 'g' to 'toolbarPromptSubmenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 994243
         */
module.exports = function (module, exports, require) {
  let o = "toolbar-ai-prompt-submenu-container";
  let i = "ai-prompt-input-container";
  require.d(exports, {
    promptInputContainer: function () {
      return i;
    },
    toolbarPromptSubmenu: function () {
      return o;
    }
  });
}