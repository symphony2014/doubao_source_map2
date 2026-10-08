// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'layoutEventTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 580889
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {}).LAYOUT_ITEM_CHANGE = "LAYOUT_ITEM_CHANGE";
  n.LAYOUT_CHANGE = "LAYOUT_CHANGE";
  n.DOC_COMMENT_SHOW_CHANGE = "DOC_COMMENT_SHOW_CHANGE";
  n.DOC_COMMENT_SHOW_CHANGE_TRANSITION_END = "DOC_COMMENT_SHOW_CHANGE_TRANSITION_END";
  n.CONTENT_OFFSET_CHANGED = "CONTENT_OFFSET_CHANGED";
  let o = n;
  require.d(exports, {
    layoutEventTypes: function () {
      return o;
    }
  });
}