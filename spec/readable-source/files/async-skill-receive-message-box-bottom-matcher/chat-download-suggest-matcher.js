// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(980997) to 'chat-download-suggest-plugin'
// - Updated imported property 'P' to 'downloadSuggestSymbol' (module 980997)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom-matcher.8807d104.js
         * chunkId: 46777
         * moduleId: 439408
         */
module.exports = function (module, exports, require) {
  let r = {
    pluginIdentifier: require("chat-download-suggest-plugin") /*id: 980997*/.downloadSuggestSymbol,
    matchPlugin: () => false
  };
  require.r(exports);
  require.d(exports, {
    loggedDownloadSuggestInChatReceiveMessageBottomPluginMatcher: function () {
      return r;
    }
  });
}