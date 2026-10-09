// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageServiceManager'
// - Resolved require(701777) to 'chat-message-service-manager'
// - Renamed variable 's' to 'chatServiceContext_1'
// - Resolved require(698136) to 'chat-service-context_1'
// - Updated imported property 'd5' to 'getChatMessageService' (module 701777)
// - Updated imported property 'aC' to 'getChatService' (module 698136)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-visible.9f5dcb54.js
         * chunkId: 80792
         * moduleId: 436925
         */
module.exports = function (module, exports, require) {
  var chatMessageServiceManager = require("chat-message-service-manager") /*id: 701777*/;
  let r = () => chatMessageServiceManager.getChatMessageService;
  var chatServiceContext_1 = require("chat-service-context_1") /*id: 698136*/;
  let o = () => chatServiceContext_1.getChatService();
  let a = () => {
    let e = r();
    return {
      chatFeedService: o(),
      createChatMessageService: e
    };
  };
  require.r(exports);
  require.d(exports, {
    initIMSDK: function () {
      return a;
    }
  });
}