// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Sh' to 'restrictSelectors'
// - Renamed export 'VD' to 'ignoredStyleProps'
// - Renamed export 'cY' to 'recordLimit'
// - Renamed export 'h2' to 'recordDataAttr'
// - Renamed export 'rb' to 'getSyncBlockTypes'
// - Renamed export 'rw' to 'recordFormatAttr'
// - Renamed export 'vD' to 'clipboardClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 282146
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  let l = 1000;
  [docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER].reduce((e, n) => {
    e[n] = true;
    return e;
  }, {});
  let a = ["text_indent", "align"];
  let c = "lark-record-clipboard";
  let u = "data-lark-record-data";
  let s = "data-lark-record-format";
  let d = ["#docCommentContainer [data-selector=\"introInput\"]", ".sheet-comment-panel", ".bitable-comment", ".docx-global-comment__textarea", ".without-copyperm-dom"];
  let h = () => syncUrlBlockUtils.isSyncingActive() ? [docBlockTypeConstants.blockTypeConstants.PAGE, docBlockTypeConstants.blockTypeConstants.CODE, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE] : [docBlockTypeConstants.blockTypeConstants.PAGE, docBlockTypeConstants.blockTypeConstants.CODE];
  require.d(exports, {
    restrictSelectors: function () {
      return d;
    },
    ignoredStyleProps: function () {
      return a;
    },
    recordLimit: function () {
      return l;
    },
    recordDataAttr: function () {
      return u;
    },
    getSyncBlockTypes: function () {
      return h;
    },
    recordFormatAttr: function () {
      return s;
    },
    clipboardClass: function () {
      return c;
    }
  });
}