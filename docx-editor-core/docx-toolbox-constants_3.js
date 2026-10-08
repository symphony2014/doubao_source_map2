// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'toolboxCommands'
// - Renamed export 'q' to 'toolboxActions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 42034
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {}).MARKDOWN = "markdown";
  o.SHORTCUT_COMMAND = "shortcut_command";
  o.TURN_INTO = "turn_into";
  o.GROUP_ITEMS = "tool-box-group-items";
  o.TOOL_BOX_GROUP_ITEMS_ASYNC = "tool-box-group-items-async";
  o.TOOL_BOX_GROUP_ITEMS_SYNC = "tool-box-group-items-sync";
  o.TOOL_BOX_BLOCK_ICON_SETTING = "tool-box-block-icon-setting";
  o.TOOL_BOX_BLOCK_ICON_CONTENT_SETTING = "tool-box-block-icon-content-setting";
  o.FIND = "find";
  o.REPLACE_ALL = "replace-all";
  let l = o;
  (i = {}).ADD = "add";
  i.REMOVE = "remove";
  i.DISPOSE = "dispose";
  let a = i;
  require.d(exports, {
    toolboxCommands: function () {
      return l;
    },
    toolboxActions: function () {
      return a;
    }
  });
}