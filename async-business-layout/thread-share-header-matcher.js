// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'threadShareChatHeaderSymbol'
// - Resolved require(719685) to 'thread-share-chat-header-symbol'
// - Updated imported property 'u' to 'chatHeaderPluginSym' (module 719685)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 64504
         */
module.exports = function (module, exports, require) {
  var threadShareChatHeaderSymbol = require("thread-share-chat-header-symbol") /*id: 719685*/;
  let r = e => {
    let {
      threadSelected: t,
      threadSelectModeScene: n
    } = e;
    if (t && n === "Share") {
      return threadShareChatHeaderSymbol.chatHeaderPluginSym;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return r;
    }
  });
}