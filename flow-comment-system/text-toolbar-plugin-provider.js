// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'textToolbarProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 492379
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("text-toolbar-plugin");
  require.d(exports, {
    textToolbarProvider: function () {
      return o;
    }
  });
}