// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'useChatAsrStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 176317
         */
module.exports = function (module, exports, require) {
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var chatStatusConstants = require("chat-status-constants") /*id: 680777*/;
  let o = reactStoreHookFactory.createStoreHook()(() => ({
    hasUsedAsr: false,
    asrBtnController: null,
    asrStatus: chatStatusConstants.ChatStatus.INIT,
    asrVolume: 0,
    asrStartMethod: "click"
  }));
  require.d(exports, {
    useChatAsrStore: function () {
      return o;
    }
  });
}