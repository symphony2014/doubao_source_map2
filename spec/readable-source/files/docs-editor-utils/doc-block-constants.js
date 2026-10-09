// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O1' to 'mentionTypes'
// - Renamed export 'Xu' to 'scopeTypes'
// - Renamed export '_L' to 'commentViewTypes'
// - Renamed export 'gu' to 'selectionModes'
// - Renamed export 'ic' to 'panelViewIds'
// - Renamed export 'oh' to 'pendingBlockTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 159072
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  (o = {}).REMINDER = "reminder";
  o.USER = "user";
  o.MENTION_DOC = "mention_doc";
  o.LINK = "link";
  o.JIRA_ISSUE = "jira_issue";
  let a = o;
  (i = {}).SELECT_WHOLE = "select_whole";
  i.SELECT_PART = "select_part";
  i.HOVER_WHOLE = "hover_whole";
  i.HOVER_RIGHT = "hover_right";
  i.SELECT_TABLE_ROW = "select_table_row";
  i.SELECT_TABLE_COLUMN = "select_table_column";
  let s = i;
  let d = {
    reaction: "public_reaction_panel_select_view",
    comment: "ccm_comment_view",
    link: "ccm_doc_link_edit_page_view"
  };
  (l = {}).TEXT = "text";
  l.BLOCK = "block";
  let f = l;
  let h = [docBlockTypeConstants.blockTypeConstants.PENDING];
  (c = {}).Title = "title";
  c.Text = "text";
  c.PartComment = "part_comment";
  c.FullComment = "full_comment";
  c.PagePraise = "page_praise";
  let _ = c;
  require.d(exports, {
    mentionTypes: function () {
      return a;
    },
    scopeTypes: function () {
      return f;
    },
    commentViewTypes: function () {
      return _;
    },
    selectionModes: function () {
      return s;
    },
    panelViewIds: function () {
      return d;
    },
    pendingBlockTypes: function () {
      return h;
    }
  });
}