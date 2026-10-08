// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'isSingleTextBlock'
// - Renamed export 'h' to 'hasContentBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 798818
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = e => !!(e == null ? undefined : e.content_blocks_v2) && e.content_blocks_v2.length === 1 && e.content_blocks_v2[0].block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT;
  let o = e => !!(e == null ? undefined : e.content_blocks_v2) && !!e.content_blocks_v2.length;
  require.d(exports, {
    isSingleTextBlock: function () {
      return i;
    },
    hasContentBlocks: function () {
      return o;
    }
  });
}