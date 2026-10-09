// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'codeBlockContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 677316
         */
module.exports = function (module, exports, require) {
  let i = Symbol("receive-code-block-content");
  require.d(exports, {
    codeBlockContent: function () {
      return i;
    }
  });
}