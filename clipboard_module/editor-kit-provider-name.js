// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'editorKitProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 799939
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("editor-kit");
  require.d(exports, {
    editorKitProviderName: function () {
      return o;
    }
  });
}