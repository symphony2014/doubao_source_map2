// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Eb' to 'supportedBlockTypesMap'
// - Renamed export 'R0' to 'fadeOutClass'
// - Renamed export 'bJ' to 'supportedBlockTypes'
// - Renamed export 'pB' to 'fadeInClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 855633
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let i = "fade-in";
  let l = "fade-out";
  let c = [docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.TASK_LIST, docBlockTypeConstants.blockTypeConstants.OKRX, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER, docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_CONTENT, docBlockTypeConstants.blockTypeConstants.AI];
  let u = c.reduce((e, n) => {
    e[n] = true;
    return e;
  }, {});
  require.d(exports, {
    supportedBlockTypesMap: function () {
      return u;
    },
    fadeOutClass: function () {
      return l;
    },
    supportedBlockTypes: function () {
      return c;
    },
    fadeInClass: function () {
      return i;
    }
  });
}