// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'blockLimitNoticeName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 384867
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("block-count-limit-notice");
  require.d(exports, {
    blockLimitNoticeName: function () {
      return o;
    }
  });
}