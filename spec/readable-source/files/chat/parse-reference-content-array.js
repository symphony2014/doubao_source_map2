// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'parseReferenceContentArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 510762
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let a = {
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
  let l = e => [...safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(e, ["reference_content"]), []).map(e => ({
    type: a[e.type],
    asrType: e.asrType,
    name: e == null ? undefined : e.fileName,
    key: e == null ? undefined : e.fileKey,
    url: e == null ? undefined : e.link,
    link: e == null ? undefined : e.link,
    content: e == null ? undefined : e.text,
    extra: e == null ? undefined : e.extra,
    identifier: e == null ? undefined : e.identifier,
    option: e == null ? undefined : e.option
  }))];
  require.d(exports, {
    parseReferenceContentArray: function () {
      return l;
    }
  });
}