// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'r' to 'chatPluginMatcherRegistry'
// - Resolved require(107672) to 'chat-plugin-matcher-registry'
// - Updated imported property 'Q3' to 'chatCanvasPluginLoader' (module 232752)
// - Updated imported property 'o6' to 'msgLifeCycleLoader' (module 232752)
// - Updated imported property 'cf' to 'chatProtocolLoader' (module 232752)
// - Updated imported property 'pB' to 'protocolTransformLoader' (module 232752)
// - Updated imported property 'GM' to 'sendMsgBoxPluginHook' (module 232752)
// - Updated imported property 'Hq' to 'loadChatCanvasMatcher' (module 107672)
// - Updated imported property 'Je' to 'loadMessageLifeCycleMatcher' (module 107672)
// - Updated imported property 'In' to 'loadProtocolTransformMatcher' (module 107672)
// - Updated imported property 'dW' to 'useSendBoxMatcher' (module 107672)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70217.8aa38666.js
         * chunkId: 70217
         * moduleId: 350837
         */
module.exports = function (module, exports, require) {
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  require.d(exports, {
    getChatCanvasPlugin: function () {
      return chatPluginIocManager.chatCanvasPluginLoader;
    },
    getChatCanvasPluginMatcher: function () {
      return chatPluginMatcherRegistry.loadChatCanvasMatcher;
    },
    getChatMessageLifeCyclePlugin: function () {
      return chatPluginIocManager.msgLifeCycleLoader;
    },
    getChatMessageLifeCyclePluginMatcher: function () {
      return chatPluginMatcherRegistry.loadMessageLifeCycleMatcher;
    },
    getChatProtocolPlugin: function () {
      return chatPluginIocManager.chatProtocolLoader;
    },
    getChatProtocolTransformPlugin: function () {
      return chatPluginIocManager.protocolTransformLoader;
    },
    getChatProtocolTransformPluginMatcher: function () {
      return chatPluginMatcherRegistry.loadProtocolTransformMatcher;
    },
    useChatSendMessageBoxPlugin: function () {
      return chatPluginIocManager.sendMsgBoxPluginHook;
    },
    useChatSendMessageBoxPluginMatcher: function () {
      return chatPluginMatcherRegistry.useSendBoxMatcher;
    }
  });
}