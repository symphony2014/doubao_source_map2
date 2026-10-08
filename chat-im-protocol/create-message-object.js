// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'createMessageObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 74878
         */
module.exports = function (module, exports, require) {
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var messageFilterUtils = require("message-filter-utils") /*id: 883835*/;
  let r = e => {
    let {
      prevMessageId: s,
      message: r,
      messageLinks: a,
      messageStreamStage: o,
      isRegenerate: l,
      localKey: c,
      enterFrom: u,
      isReady: d,
      botType: v,
      samanthaChatStage: g,
      isNova: _
    } = e;
    return {
      ...r,
      message_type: chatMessageTypes.MessageType.Message,
      create_time: Date.now(),
      stage: o,
      status: r.status || chatMessageTypes.PushMessageStatus.Available,
      local: {
        samanthaChatStage: g,
        localKey: c,
        prevRemoteMessageId: s || messageFilterUtils.filterValidMessages(a)?.messageId || "",
        isRetried: false,
        isRegenerate: l,
        enterFrom: u,
        isReady: d,
        botType: v,
        isNova: _
      }
    };
  };
  require.d(exports, {
    createMessageObject: function () {
      return r;
    }
  });
}