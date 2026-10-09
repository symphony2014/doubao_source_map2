// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'extractRefImages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 203149
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let a = e => {
    var n;
    return [...(((n = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(e, ["samantha_context"]), {})) === null || n === undefined ? undefined : n.query_context?.ref_images) || []).map(e => ({
      type: chatCoreConstants.ContentTypes.Image,
      key: e.image_token,
      url: e.url,
      extra: {
        refer_types: e.refer_types
      },
      file_review_state: e.review_status,
      identifier: e.identifier
    }))];
  };
  require.d(exports, {
    extractRefImages: function () {
      return a;
    }
  });
}