// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cn' to 'eventNames'
// - Renamed export 'PF' to 'eventHandlers'
// - Renamed export 'Rg' to 'priorityHigh'
// - Renamed export 'U_' to 'priorityLow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 867160
         */
module.exports = function (module, exports, require) {
  var i = 2;
  var o = 1;
  var r = {
    click: "_handleClickEvent",
    keydown: "_handleKeyEvent",
    keypress: "_handleKeyEvent",
    keyup: "_handleKeyEvent",
    input: "_handleInputEvent",
    beforeinput: "_handleBeforeInput",
    compositionstart: "_handleCompositionEvent",
    compositionupdate: "_handleCompositionEvent",
    compositionend: "_handleCompositionEvent",
    copy: "_handleCopy",
    cut: "_handleCut",
    paste: "_handlePaste",
    drop: "_handleDrag",
    dragenter: "_handleDrag",
    dragover: "_handleDrag",
    dragleave: "_handleDrag",
    focus: "_handleFocusEvent",
    blur: "_handleFocusEvent"
  };
  var s = ["copy", "cut", "paste", "keydown", "keypress", "keyup", "beforeinput", "input", "drop", "dragenter", "dragover", "dragleave", "resize", "compositionstart", "compositionupdate", "compositionend", "focus", "blur"];
  require.d(exports, {
    eventNames: function () {
      return s;
    },
    eventHandlers: function () {
      return r;
    },
    priorityHigh: function () {
      return i;
    },
    priorityLow: function () {
      return o;
    }
  });
}