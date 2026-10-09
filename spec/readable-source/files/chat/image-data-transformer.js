// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'transformImageData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 122135
         */
module.exports = function (module, exports, require) {
  var chatContentTypesMap = require("chat-content-types-map") /*id: 408630*/;
  let r = e => e == null ? undefined : e.map(e => {
    return {
      key: e.key,
      type: chatContentTypesMap.chatContentTypes.image,
      name: e.file_name,
      url: e.image_ori?.url
    };
  });
  require.d(exports, {
    transformImageData: function () {
      return r;
    }
  });
}