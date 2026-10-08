// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Di' to 'hookServicePriority'
// - Renamed export 't9' to 'hookActionTypes'
// - Renamed export 'r8' to 'RegistrationStatus'
// - Renamed export '$' to 'hookServiceToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 439395
         */
module.exports = function (module, exports, require) {
  require("hook-service-class-provider") /*id: 71742*/;
  var o;
  var hookServiceDiConstants = require("hook-service-di-constants") /*id: 565865*/;
  (o = {}).SCHEMA = "schema";
  o.CLIPBOARD_PASTE = "clipboard-paste";
  o.CLIPBOARD_CUT = "clipboard-cut";
  o.CLIPBOARD_COPY = "clipboard-copy";
  o.TOOL_BOX_BLOCK_ICON_DELTA = "tool-box-block-icon-delta";
  o.TOOL_BOX_ORGANIZE_MENU_ITEMS_ASYNC = "tool-box-organize-menu-items-async";
  o.TOOL_BOX_ORGANIZE_MENU_ITEMS_SYNC = "tool-box-organize-menu-items-sync";
  o.LINK_TRANSFORM_QUEUE = "link-transform-queue";
  o.LINK_PASTE_PANEL = "link-paste-panel";
  o.PRINT = "print";
  o.SHORTCUT = "shortcut";
  let l = o;
  let a = 10;
  require.d(exports, {
    hookServicePriority: function () {
      return a;
    },
    hookActionTypes: function () {
      return l;
    },
    RegistrationStatus: function () {
      return hookServiceDiConstants.RegistrationStatus;
    },
    $$: function () {
      return hookServiceDiConstants.hookServiceToken;
    }
  });
}