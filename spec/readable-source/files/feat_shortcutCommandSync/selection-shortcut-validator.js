// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'createSelectionShortcutValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 338806
         */
module.exports = function (module, exports, require) {
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var keyboardKeyCodes = require("keyboard-key-codes") /*id: 73916*/;
  function d({
    isComposing: e = false,
    isCollapsed: i,
    selection: l,
    isNotCheckComposing: d = false
  } = {}) {
    return c => a => {
      let {
        shortcutContext: u
      } = a;
      let s = u == null ? undefined : u.event.isNativeEvent;
      let p = a.currentTargetViewFilterEmpty[0];
      if (!p || !editorTextBlockUtilities.isEditorInstance(p) || !d && p.editor.getStatus("isComposing") !== e || !s && (u == null ? undefined : u.event.keyCode) === keyboardKeyCodes.keyCodeMap.PROCESSING_INPUT) {
        return;
      }
      let f = p.model.getSelection();
      if (l === "start" && f && (!f.isCollapsed() || !editorRangeUtilities.isAtStart(f)) || l === "end" && f && (!f.isCollapsed() || !editorRangeUtilities.isAtZoneEnd(f))) {
        if (p.model.isEmpty) {
          p.editor.__handleDOMSelectionChange();
        }
        return;
      }
      let g = a.blockManager.config.get("editable");
      if ((l !== "all" || !g || p.model.isSelectingAll()) && (l !== "cover-start" || (!g || !f || editorRangeUtilities.isAtStart(f)) && (!f || f.isCollapsed() || f.isBackward)) && (l !== "cover-end" || (!g || !f || editorRangeUtilities.isAtZoneEnd(f)) && (!f || f.isCollapsed() || !f.isBackward)) && (i === undefined || !f || f.isCollapsed() === i)) {
        return c(a);
      }
    };
  }
  require.d(exports, {
    createSelectionShortcutValidator: function () {
      return d;
    }
  });
}