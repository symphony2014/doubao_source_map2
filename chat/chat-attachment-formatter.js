// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'formatFileList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 220315
         */
module.exports = function (module, exports, require) {
  var chatContentTypesMap = require("chat-content-types-map") /*id: 408630*/;
  let r = e => {
    var t;
    if ((t = e.file_list) === null || t === undefined) {
      return undefined;
    } else {
      return t.map(e => ({
        key: e.key,
        name: e.file_name,
        type: chatContentTypesMap.chatContentTypes.attachment,
        url: e.key
      }));
    }
  };
  require.d(exports, {
    formatFileList: function () {
      return r;
    }
  });
}