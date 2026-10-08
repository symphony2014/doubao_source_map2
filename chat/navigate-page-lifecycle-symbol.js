// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'pageLifecycleSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 240007
         */
module.exports = function (module, exports, require) {
  let i = Symbol("navigate-page-lifecycle-plugin");
  require.d(exports, {
    pageLifecycleSymbol: function () {
      return i;
    }
  });
}