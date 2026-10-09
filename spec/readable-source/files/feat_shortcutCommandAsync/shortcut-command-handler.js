// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'executeShortcut'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 849511
         */
module.exports = function (module, exports, require) {
  var keyboardSyntheticEventClass_1 = require("keyboard-synthetic-event-class_1") /*id: 886246*/;
  var keyboardActionConstants = require("keyboard-action-constants") /*id: 171499*/;
  function r(e) {
    let {
      shortcutContext: i,
      currentTargetViewFilterEmpty: l
    } = e;
    let r = l[0];
    let d = i == null ? undefined : i.event;
    if (d) {
      let e = new KeyboardEvent(d.type, d);
      let i = new keyboardSyntheticEventClass_1.KeyboardSyntheticEvent(e, e.target);
      r.editor.triggerEditorEvent(keyboardActionConstants.KeyboardActions.STOPPED_KEYDOWN, i);
    }
  }
  require.d(exports, {
    executeShortcut: function () {
      return r;
    }
  });
}