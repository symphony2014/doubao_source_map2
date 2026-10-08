// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'n' to 'chatConstantId'
// - Resolved require(392213) to 'chat-constant-id'
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'e' to 'chatConstantId' (module 392213)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-coding-url-parse-plugin.73fc42d3.js
         * chunkId: 4258
         * moduleId: 55234
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  async function o(e) {
    let {
      payload: i,
      navigate: t
    } = e;
    let {
      shareId: o
    } = i;
    let r = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
    if (!r) {
      return;
    }
    let s = await r.createConversation({
      botId: chatConstantId.chatConstantId,
      onboarding: {
        type: "share",
        value: o
      }
    });
    if (s.conversationId) {
      t(`/chat/${s.conversationId}`, {
        replace: true
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return o;
    }
  });
}