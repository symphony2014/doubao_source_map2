// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'cleanupChatPlugins'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 900461
         */
module.exports = function (module, exports, require) {
  var messageActionHandlers = require("message-action-handlers") /*id: 551587*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  async function o() {
    let e = await chatPluginIocManager.chatProtocolLoader("AliceChatStream");
    let t = await chatPluginIocManager.chatProtocolLoader("AliceChatFallback");
    let n = await chatPluginIocManager.chatProtocolLoader("SamanthaChat");
    messageActionHandlers.cleanupMessageItems([e, t, n]);
  }
  require.d(exports, {
    cleanupChatPlugins: function () {
      return o;
    }
  });
}