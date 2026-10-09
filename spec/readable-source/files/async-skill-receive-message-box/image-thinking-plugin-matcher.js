// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatLoadingMessageCheck'
// - Resolved require(572705) to 'chat-loading-message-check'
// - Resolved require(617581) to 'message-box-image-thinking-symbol'
// - Updated imported property 'S' to 'imageThinkingSymbol' (module 617581)
// - Updated imported property 'R' to 'isLoadingMessage' (module 572705)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 688977
         */
module.exports = function (module, exports, require) {
  var chatLoadingMessageCheck = require("chat-loading-message-check") /*id: 572705*/;
  let r = {
    pluginIdentifier: require("message-box-image-thinking-symbol") /*id: 617581*/.imageThinkingSymbol,
    matchPlugin: e => {
      let {
        loading_style: t
      } = (e == null ? undefined : e.content_obj) || (e == null ? undefined : e.ext) || {};
      return chatLoadingMessageCheck.isLoadingMessage(e) && t === "loading_generate_image";
    }
  };
  require.r(exports);
  require.d(exports, {
    imageThinkingReceiveMessageBoxPluginMatcher: function () {
      return r;
    }
  });
}