// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'componentTypes'
// - Renamed export 'u' to 'actionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 594795
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {}).add_panel = "add_panel";
  o.slash_panel = "slash_panel";
  o.web_menu_panel = "web_menu_panel";
  o.preset_panel = "preset_panel";
  o.content_page = "content_page";
  o.web_text_bubble_toolbar = "web_text_bubble_toolbar";
  o.mobile_edit_toolbar = "mobile_edit_toolbar";
  o.mobile_menu_toolbar = "mobile_menu_toolbar";
  o.web_block_bubble_toolbar = "web_block_bubble_toolbar";
  o.image_crop = "image_crop";
  o.link_edit_page = "link_edit_page";
  o.agenda_start_menu = "agenda_start_menu";
  o.search_toolbar = "search_toolbar";
  let l = o;
  (i = {}).markdown_action = "markdown_action";
  i.block_action = "block_action";
  i.hotkey_action = "hotkey_action";
  let c = i;
  require.d(exports, {
    componentTypes: function () {
      return l;
    },
    actionTypes: function () {
      return c;
    }
  });
}