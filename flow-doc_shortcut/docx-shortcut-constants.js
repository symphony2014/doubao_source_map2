// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LT' to 'optimizeHeightId'
// - Renamed export 'Te' to 'shortcutEventTypes'
// - Renamed export 'gJ' to 'docxShortcutConsts'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 853990
         */
module.exports = function (module, exports, require) {
  var r;
  var l;
  (r = {}).RENDER_DURATION = "docx_shortcut_render_duration";
  r.CANCEL_RENDER = "docx_shortcut_cancel_render";
  r.BLOCK_RENDER_TIMEOUT = "docx_shortcut_block_render_timeout";
  r.ERROR_LOG = "docx_shortcut_error_log";
  r.BLOCK_INFO_DEV = "docx_shortcut_block_info_dev";
  let o = r;
  (l = {}).ENTRY_LOADED = "entry_loaded";
  l.SHORTCUT_COMPONENT_INIT = "shortcut_component_init";
  l.SHORTCUT_COMPONENT_MOUNT = "shortcut_component_mount";
  l.EDITOR_INIT = "editor_init";
  l.EDITOR_MOUNT = "editor_mount";
  l.CLIENTVAR_FETCH_BEFORE = "clientvar_fetch_before";
  l.CLIENTVAR_FETCH_FINISH = "clientvar_fetch_finish";
  l.PRUNE_BEFORE = "prune_before";
  l.PRUNE_FINISH = "prune_finish";
  l.DISPATCH_DOCX_DID_RENDER_BEFORE = "dispatch_docx_did_render_before";
  l.DISPATCH_DOCX_DID_RENDER_FINISH = "dispatch_docx_did_render_finish";
  l.ALL_BLOCK_FINISH = "all_block_finish";
  l.CALC_TEXT_SHARE_CARD_BEFORE = "calc_text_share_card_before";
  l.CALC_TEXT_SHARE_CARD_FINISH = "calc_text_share_card_finish";
  l.SEND_SIGNAL_BEFORE = "send_signal_before";
  l.SEND_SIGNAL_FINISH = "send_signal_finish";
  l.CLEAR = "clear";
  let s = l;
  let a = "optimize-over-height";
  require.d(exports, {
    optimizeHeightId: function () {
      return a;
    },
    shortcutEventTypes: function () {
      return s;
    },
    docxShortcutConsts: function () {
      return o;
    }
  });
}