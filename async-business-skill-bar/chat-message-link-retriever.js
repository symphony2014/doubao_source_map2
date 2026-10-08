// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'getRecentMessages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 186068
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  function o(e, t) {
    let n = chatMessageStoreFactory.createMessageStore.getState();
    let o = n.messageLinkMap[e];
    if (!o) {
      return [];
    }
    let l = o.slice(Math.max(0, o.length - t));
    let a = chatMessageUtils_2_1.getMessageGetter(chatMessageUtils_2_1.getMessageListStatus(n, e));
    return l.map(a).filter(Boolean);
  }
  require.d(exports, {
    getRecentMessages: function () {
      return o;
    }
  });
}