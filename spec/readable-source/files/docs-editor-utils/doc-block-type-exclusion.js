// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VF' to 'excludedBlockTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 52576
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var aiConstants = require("ai-constants") /*id: 447212*/;
  let l = [docBlockTypeConstants.blockTypeConstants.TEXT, ...docBlockTypeConstants.headingTypeArray, docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.ORDERED, docBlockTypeConstants.blockTypeConstants.TODO, docBlockTypeConstants.blockTypeConstants.TASK, docBlockTypeConstants.blockTypeConstants.LINK, docBlockTypeConstants.blockTypeConstants.MENTION_DOC, docBlockTypeConstants.blockTypeConstants.USER, docBlockTypeConstants.blockTypeConstants.BOOKMARK, docBlockTypeConstants.blockTypeConstants.IFRAME, docBlockTypeConstants.blockTypeConstants.QUOTE, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.CODE, docBlockTypeConstants.blockTypeConstants.IMAGE];
  let c = Object.values(docBlockTypeConstants.blockTypeConstants).reduce((e, n) => {
    if (!l.includes(n)) {
      e[n] = true;
    }
    return e;
  }, {});
  aiConstants.aiConstants.AI_BLOCK;
  aiConstants.aiConstants.EDIT_DISCRIPTION;
  aiConstants.aiConstants.TODO;
  aiConstants.aiConstants.TRANSLATE;
  require.d(exports, {
    excludedBlockTypes: function () {
      return c;
    }
  });
}