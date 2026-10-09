// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ad' to 'blockLimitValue'
// - Renamed export 'BA' to 'mediaBlockTypes'
// - Renamed export 'IQ' to 'originIdKey'
// - Renamed export 'KT' to 'getEditTypeLabel'
// - Renamed export 'Mu' to 'blockAttributeKeys'
// - Renamed export '_t' to 'editTypeConstants'
// - Renamed export 'wn' to 'supportedBlockTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 329056
         */
module.exports = function (module, exports, require) {
  var o;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  (o = {}).add = "__edit_add";
  o.del = "__edit_del";
  o.change = "__edit_change";
  let l = o;
  let c = "__origin_id";
  function u(e, n) {
    if (l.add === e) {
      return t("history.edit_add", {}, "", n);
    } else if (l.del === e) {
      return t("history.edit_del", {}, "", n);
    } else if (l.change === e) {
      return t("history.edit_change", {}, "", n);
    } else {
      return Error("Invalid edit type");
    }
  }
  let a = ["folded", "done", "emoji_id", "cover"];
  let s = new Set([docBlockTypeConstants.blockTypeConstants.HEADING1, docBlockTypeConstants.blockTypeConstants.HEADING2, docBlockTypeConstants.blockTypeConstants.HEADING3, docBlockTypeConstants.blockTypeConstants.HEADING4, docBlockTypeConstants.blockTypeConstants.HEADING5, docBlockTypeConstants.blockTypeConstants.HEADING6, docBlockTypeConstants.blockTypeConstants.HEADING7, docBlockTypeConstants.blockTypeConstants.HEADING8, docBlockTypeConstants.blockTypeConstants.HEADING9, docBlockTypeConstants.blockTypeConstants.HEADINGN, docBlockTypeConstants.blockTypeConstants.TEXT, docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.ORDERED, docBlockTypeConstants.blockTypeConstants.REFERENCE, docBlockTypeConstants.blockTypeConstants.TODO, docBlockTypeConstants.blockTypeConstants.QUOTE]);
  let d = [docBlockTypeConstants.blockTypeConstants.IMAGE, docBlockTypeConstants.blockTypeConstants.FILE];
  let f = 24;
  require.d(exports, {
    blockLimitValue: function () {
      return f;
    },
    mediaBlockTypes: function () {
      return d;
    },
    originIdKey: function () {
      return c;
    },
    getEditTypeLabel: function () {
      return u;
    },
    blockAttributeKeys: function () {
      return a;
    },
    editTypeConstants: function () {
      return l;
    },
    supportedBlockTypes: function () {
      return s;
    }
  });
}