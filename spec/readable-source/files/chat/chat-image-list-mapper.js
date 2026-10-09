// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'normalizeImageList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 58874
         */
module.exports = function (module, exports, require) {
  var chatContentTypesMap = require("chat-content-types-map") /*id: 408630*/;
  let r = e => {
    var t;
    return ((t = e.image_list) === null || t === undefined ? undefined : t.map(e => {
      let {
        key: t,
        file_name: n,
        image_ori: r
      } = e;
      return {
        key: t,
        name: n,
        type: chatContentTypesMap.chatContentTypes.image,
        url: r == null ? undefined : r.url
      };
    })) || [];
  };
  require.d(exports, {
    normalizeImageList: function () {
      return r;
    }
  });
}