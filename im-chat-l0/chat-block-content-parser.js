// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'parseChatBlockContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 656817
         */
module.exports = function (module, exports, require) {
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let i = e => {
    var n;
    return {
      markdown: ((n = e.block.content) === null || n === undefined ? undefined : n.text_block?.text) || "",
      metaInfos: (e.block.meta_info ?? []).map(e => ({
        ...e,
        data: safeJsonUtils.safeParse(e.info, undefined)
      }))
    };
  };
  require.d(exports, {
    parseChatBlockContent: function () {
      return i;
    }
  });
}