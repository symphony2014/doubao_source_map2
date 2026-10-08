// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatLoadingMessageCheck'
// - Resolved require(572705) to 'chat-loading-message-check'
// - Resolved require(714541) to 'receive-message-thinking-symbol'
// - Updated imported property 'h' to 'receiveThinkSymbol' (module 714541)
// - Updated imported property 'R' to 'isLoadingMessage' (module 572705)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 888046
         */
module.exports = function (module, exports, require) {
  var chatLoadingMessageCheck = require("chat-loading-message-check") /*id: 572705*/;
  let r = {
    pluginIdentifier: require("receive-message-thinking-symbol") /*id: 714541*/.receiveThinkSymbol,
    matchPlugin: e => {
      let n = (e == null ? undefined : e.ext?.loading_style) === "loading_outline";
      return chatLoadingMessageCheck.isLoadingMessage(e) && n;
    }
  };
  require.r(exports);
  require.d(exports, {
    outlineThinkingReceiveMessageBoxPluginMatcher: function () {
      return r;
    }
  });
}