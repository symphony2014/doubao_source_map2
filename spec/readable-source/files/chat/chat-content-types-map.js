// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'chatContentTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 408630
         */
module.exports = function (module, exports, require) {
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  let r = {
    0: chatCoreConstants.ContentTypes.Unknown,
    1: chatCoreConstants.ContentTypes.File,
    2: chatCoreConstants.ContentTypes.Image,
    3: chatCoreConstants.ContentTypes.Directory,
    text: chatCoreConstants.ContentTypes.Text,
    attachment: chatCoreConstants.ContentTypes.File,
    link: chatCoreConstants.ContentTypes.Link,
    image: chatCoreConstants.ContentTypes.Image,
    directory: chatCoreConstants.ContentTypes.Directory,
    vlm_image: chatCoreConstants.ContentTypes.VlmImage,
    file: chatCoreConstants.ContentTypes.File,
    lark_doc: chatCoreConstants.ContentTypes.LarkDoc,
    ppt_template: chatCoreConstants.ContentTypes.PPTTemplate
  };
  require.d(exports, {
    chatContentTypes: function () {
      return r;
    }
  });
}