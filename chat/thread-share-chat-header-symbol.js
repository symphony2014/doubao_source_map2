// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'chatHeaderPluginSym'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 719685
         */
module.exports = function (module, exports, require) {
  let i = Symbol("thread-share-chat-header-plugin");
  require.d(exports, {
    chatHeaderPluginSym: function () {
      return i;
    }
  });
}