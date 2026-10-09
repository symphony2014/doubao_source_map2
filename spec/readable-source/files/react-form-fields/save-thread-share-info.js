// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'saveThreadShareInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 601320
         */
module.exports = function (module, exports, require) {
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let i = async e => {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "call_api_save_thread_share_info"
    });
    return (await aliceChatService.AliceChatService()).saveThreadShareInfo(e);
  };
  require.d(exports, {
    saveThreadShareInfo: function () {
      return i;
    }
  });
}