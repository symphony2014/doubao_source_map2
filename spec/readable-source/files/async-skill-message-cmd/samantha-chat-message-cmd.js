// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'sendSamanthaMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30286.f2691b3b.js
         * chunkId: 30286
         * moduleId: 283070
         */
module.exports = function (module, exports, require) {
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let i = async (e, t) => {
    if (!e) {
      return;
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "send_message_start_with_samantha-chat-completion",
      meta: {
        local_message_id: e[0]?.local_message_id,
        message_id: e[0]?.message_id,
        conversation_id: e[0]?.conversation_id,
        local_conversation_id: e[0]?.local_conversation_id
      }
    });
    let s = await chatPluginIocManager.chatProtocolLoader("SamanthaChat");
    if (s != null) {
      s.sendMessage(e, t);
    }
  };
  require.d(exports, {
    sendSamanthaMessage: function () {
      return i;
    }
  });
}