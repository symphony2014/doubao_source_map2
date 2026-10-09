// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'createChatLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 744290
         */
module.exports = function (module, exports, require) {
  var chatContentTypesMap = require("chat-content-types-map") /*id: 408630*/;
  let r = e => (e == null ? undefined : e.repo_id) ? {
    type: chatContentTypesMap.chatContentTypes.link,
    key: e.repo_id,
    url: e.url,
    identifier: e.repo_id,
    name: e == null ? undefined : e.repo_name
  } : {
    type: chatContentTypesMap.chatContentTypes.link,
    key: e.url,
    url: e.url
  };
  require.d(exports, {
    createChatLink: function () {
      return r;
    }
  });
}