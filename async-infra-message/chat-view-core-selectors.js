// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JW' to 'useChatViewConfig'
// - Renamed export 'ae' to 'useChatId'
// - Renamed export 'di' to 'getChatType'
// - Renamed export 'mC' to 'useChatType'
// - Renamed export 'tN' to 'getChatId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 837195
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let r = e => e.currentChatViewConfig;
  let o = () => chatStoreManager.useStoreSelector("chatViewCoreStore", r);
  let a = e => {
    return e.currentChatViewConfig?.chatId;
  };
  let s = () => chatStoreManager.useStoreSelector("chatViewCoreStore", a);
  let l = () => a(chatStoreManager.getStoreState("chatViewCoreStore"));
  let c = e => {
    return e.currentChatViewConfig?.chatType;
  };
  let d = () => chatStoreManager.useStoreSelector("chatViewCoreStore", c);
  let u = () => c(chatStoreManager.getStoreState("chatViewCoreStore"));
  require.d(exports, {
    useChatViewConfig: function () {
      return o;
    },
    useChatId: function () {
      return s;
    },
    getChatType: function () {
      return u;
    },
    useChatType: function () {
      return d;
    },
    getChatId: function () {
      return l;
    }
  });
}