// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'uiComponentTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 345611
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {}).Add = "add-panel";
  i.BlockMenu = "block-panel";
  i.OnlyBlockMenu = "only-block-menu";
  i.Slash = "slash";
  i.LINK_TRANSFORM = "link-transform";
  i.MENTION = "mention-panel";
  i.SuspensionComment = "suspension-comment";
  i.TextualToolbar = "textual-toolbar";
  i.TextualBlockToolbar = "textual-block-toolbar";
  i.BlockToolbar = "block-toolbar";
  i.SyncedBlockToolbar = "synced-block-toolbar";
  i.PasteContextSubmenu = "paste-context-submenu";
  i.TableCell = "table-cell";
  i.PopoverMenu = "table-popover";
  i.MOBILE_ADD_MENU = "mobile-add-menu";
  let o = i;
  require.d(exports, {
    uiComponentTypes: function () {
      return o;
    }
  });
}