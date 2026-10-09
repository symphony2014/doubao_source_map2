// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'checkLayoutState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 390946
         */
module.exports = function (module, exports, require) {
  let i = e => e.chatId !== e.voiceCall.voiceConversationId && !e.share.isSelectMode && !e.batchDownload.isBatchDownloadMode;
  require.d(exports, {
    checkLayoutState: function () {
      return i;
    }
  });
}