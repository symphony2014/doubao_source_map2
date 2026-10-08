// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'isCaptionEditorKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 28975
         */
module.exports = function (module, exports, require) {
  var captionEditorConstants = require("caption-editor-constants") /*id: 287236*/;
  var keyboardEventUtils_1 = require("keyboard-event-utils_1") /*id: 331886*/;
  function l(e) {
    let {
      target: i
    } = e;
    if (!i || typeof i.closest != "function") {
      return false;
    }
    let n = i.closest(`.${captionEditorConstants.captionEditorClass}`);
    return n !== null && !!n.contains(i) && (!!keyboardEventUtils_1.isSelectAll(e) || !!keyboardEventUtils_1.isEnter(e) || !!keyboardEventUtils_1.isUndo(e) || !!keyboardEventUtils_1.isRedo(e) || !!keyboardEventUtils_1.isBackspace(e));
  }
  require.d(exports, {
    isCaptionEditorKey: function () {
      return l;
    }
  });
}