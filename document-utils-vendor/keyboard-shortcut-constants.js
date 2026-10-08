// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'directionKeys'
// - Renamed export 'a' to 'copyPasteKeys'
// - Renamed export 'i' to 'isUndoRedoEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 159910
         */
module.exports = function (module, exports, require) {
  var keyboardEventUtils = require("keyboard-event-utils") /*id: 623958*/;
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  var o = [keyboardEventUtils.KeyCode.Up, keyboardEventUtils.KeyCode.Down, keyboardEventUtils.KeyCode.Left, keyboardEventUtils.KeyCode.Right];
  var a = [keyboardEventUtils.KeyCode.C, keyboardEventUtils.KeyCode.V, keyboardEventUtils.KeyCode.X];
  function s(e) {
    if (userAgentDetect.userAgentInfo.isMac || userAgentDetect.userAgentInfo.isSafari) {
      return e.metaKey && !e.altKey;
    } else {
      return e.ctrlKey && !e.altKey;
    }
  }
  function l(e) {
    return s(e) && a.indexOf(e.keyCode) !== -1;
  }
  require.d(exports, {
    directionKeys: function () {
      return o;
    },
    copyPasteKeys: function () {
      return l;
    },
    isUndoRedoEvent: function () {
      return s;
    }
  });
}