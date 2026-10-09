// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'pinLifecycleSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 595961
         */
module.exports = function (module, exports, require) {
  let i = Symbol("conversation-pin-lifecycle-plugin");
  require.d(exports, {
    pinLifecycleSymbol: function () {
      return i;
    }
  });
}