// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GA' to 'pullChatMessage'
// - Renamed export 'Kr' to 'cancelFallbackTask'
// - Renamed export 'Pf' to 'pullStreamMessage'
// - Renamed export 'X1' to 'cancelChatTasks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55100.9330c1b8.js
         * chunkId: 55100
         * moduleId: 268829
         */
module.exports = function (module, exports, require) {
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  let t = async e => {
    let s = await chatPluginIocManager.chatProtocolLoader("AliceChatStream");
    if (s != null) {
      s.pullMessage([e]);
    }
  };
  let a = async e => {
    let s = await chatPluginIocManager.chatProtocolLoader("AliceChatStream");
    if (s != null) {
      s.pullMessage([e]);
    }
  };
  let o = async e => {
    let s = await chatPluginIocManager.chatProtocolLoader("AliceChatFallback");
    if (s != null) {
      s.cancelTask(e);
    }
  };
  let r = async e => {
    let {
      replyId: s,
      localMessageId: n
    } = e;
    if (s) {
      let e = await chatPluginIocManager.chatProtocolLoader("AliceChatStream");
      let n = await chatPluginIocManager.chatProtocolLoader("AliceChatFallback");
      if (e != null) {
        e.cancelTask(s);
      }
      if (n != null) {
        n.cancelTask(s);
      }
    }
    if (n) {
      let e = await chatPluginIocManager.chatProtocolLoader("SamanthaChat");
      if (e != null) {
        e.cancelTask(n);
      }
    }
  };
  require.d(exports, {
    pullChatMessage: function () {
      return t;
    },
    cancelFallbackTask: function () {
      return o;
    },
    pullStreamMessage: function () {
      return a;
    },
    cancelChatTasks: function () {
      return r;
    }
  });
}