// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'focusObserverName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 611243
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("focus-observer");
  require.d(exports, {
    focusObserverName: function () {
      return o;
    }
  });
}