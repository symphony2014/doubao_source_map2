// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'excludedBlockTypesMap'
// - Renamed export 'P5' to 'supportedPlatforms'
// - Renamed export 'P9' to 'syncedBlockContainerClass'
// - Renamed export 'SI' to 'specialBlockTypes'
// - Renamed export 'hy' to 'defaultBlockHeight'
// - Renamed export 'iZ' to 'supportedBlockTypes'
// - Renamed export 'vE' to 'defaultBlockWidth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 886147
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  let l = ".docx-synced-block-container";
  let c = [docBlockTypeConstants.blockTypeConstants.DIVIDER, docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.IMAGE, docBlockTypeConstants.blockTypeConstants.TEXT, docBlockTypeConstants.blockTypeConstants.HEADING1, docBlockTypeConstants.blockTypeConstants.HEADING2, docBlockTypeConstants.blockTypeConstants.HEADING3, docBlockTypeConstants.blockTypeConstants.HEADING4, docBlockTypeConstants.blockTypeConstants.HEADING5, docBlockTypeConstants.blockTypeConstants.HEADING6, docBlockTypeConstants.blockTypeConstants.HEADING7, docBlockTypeConstants.blockTypeConstants.HEADING8, docBlockTypeConstants.blockTypeConstants.HEADING9, docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.ORDERED, docBlockTypeConstants.blockTypeConstants.CODE, docBlockTypeConstants.blockTypeConstants.QUOTE, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.EQUATION, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.FILE, docBlockTypeConstants.blockTypeConstants.IFRAME, docBlockTypeConstants.blockTypeConstants.DIAGRAM, docBlockTypeConstants.blockTypeConstants.TODO, docBlockTypeConstants.blockTypeConstants.VIEW, docBlockTypeConstants.blockTypeConstants.BOOKMARK, docBlockTypeConstants.blockTypeConstants.REMINDER, docBlockTypeConstants.blockTypeConstants.USER, docBlockTypeConstants.blockTypeConstants.MENTION_DOC, ...docBlockTypeConstants.okrProgressTypes, docBlockTypeConstants.blockTypeConstants.CHAT_CARD, docBlockTypeConstants.blockTypeConstants.WHITEBOARD, docBlockTypeConstants.blockTypeConstants.TASK, docBlockTypeConstants.blockTypeConstants.POLL, docBlockTypeConstants.blockTypeConstants.MINDMAP];
  let u = [inlineComponentFacade.platformEnum.MEEGO];
  let a = Object.values(docBlockTypeConstants.blockTypeConstants).reduce((e, n) => {
    if (!c.includes(n)) {
      e[n] = true;
    }
    return e;
  }, {});
  let s = 22;
  let d = 22;
  [docBlockTypeConstants.blockTypeConstants.AI, docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE, docBlockTypeConstants.blockTypeConstants.CODE, ...docBlockTypeConstants.okrProgressTypes];
  let f = [docBlockTypeConstants.blockTypeConstants.AI, docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE, docBlockTypeConstants.blockTypeConstants.CODE, ...docBlockTypeConstants.okrProgressTypes];
  require.d(exports, {
    excludedBlockTypesMap: function () {
      return a;
    },
    supportedPlatforms: function () {
      return u;
    },
    syncedBlockContainerClass: function () {
      return l;
    },
    specialBlockTypes: function () {
      return f;
    },
    defaultBlockHeight: function () {
      return d;
    },
    supportedBlockTypes: function () {
      return c;
    },
    defaultBlockWidth: function () {
      return s;
    }
  });
}