// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'blockTipProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 153513
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("block-tip");
  require.d(exports, {
    blockTipProviderName: function () {
      return o;
    }
  });
}